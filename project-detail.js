document.addEventListener('DOMContentLoaded', function () {
	const urlParams = new URLSearchParams(window.location.search);
	const projectTitle = document.getElementById('projectTitle');
	const projectDescription = document.getElementById('projectDescription');
	const carouselTrack = document.getElementById('carouselTrack');
	const carouselIndicators = document.getElementById('carouselIndicators');
	const currentMediaTitle = document.getElementById('currentMediaTitle');
	const currentMediaDesc = document.getElementById('currentMediaDesc');
	const prevBtn = document.getElementById('prevBtn');
	const nextBtn = document.getElementById('nextBtn');

	let currentSlide = 0;
	let displayedProject = null;
	let projectPath;

	// Charger les données du projet
	const categoryKey = decodeURIComponent(urlParams.get('category'));
	const projectDir = decodeURIComponent(urlParams.get('dir')) || "";
	if (categoryKey && categoryKey in accomplishments) {
		const category = accomplishments[categoryKey];
		const project = category.accomplishments.find(proj => proj.dir == projectDir);
		if (project) {
			projectTitle.textContent = project.title;
			projectDescription.textContent = project.description;
			projectPath = category.dir + project.dir;
			displayedProject = project;
		} else {
			console.error("There is no matching for project in directory", projectDir, "inside of category", categoryKey);
		}
	} else {
		console.error("This given category in the URL query string in invalid:", categoryKey);
	}

	// Créer le carousel
	function createCarousel(mediasData) {
		carouselTrack.innerHTML = '';
		carouselIndicators.innerHTML = '';

		mediasData.forEach((media, index) => {
			// Créer la slide
			const slide = document.createElement('div');
			slide.className = 'carousel-slide';

			let actualSrc = media.name;
			if (media.name && !/^https?:\/\//.test(media.name)) {
				actualSrc = projectPath + media.name;
			}
			if (media.type === 'image') {
				// Utiliser le mapping pour les images
				slide.innerHTML = `<img src="${actualSrc}" alt="${media.title}" onerror="this.parentElement.removeChild(this)">`;
			} else if (media.type === 'video') {
				slide.innerHTML = `
                <video controls width="100%">
                    <source src="${actualSrc}" type="video/mp4">
                    Votre navigateur ne supporte pas la vidéo.
                </video>
            `;
			} else if (media.type === 'youtube') {
				slide.innerHTML = `
                <iframe width="100%" height="100%"
                    src="${actualSrc}"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
                    allowfullscreen>
                </iframe>
            `;
			} else if (media.type === 'code') {
				slide.innerHTML = `
                <div class="code-display">
                    <i class="fas fa-code" style="font-size: 3rem; margin-bottom: 1rem; color: #58a6ff;"></i>
                    <h3>${media.title}</h3>
                    <p>Code disponible sur demande</p>
                </div>
            `;
			}

			carouselTrack.appendChild(slide);

			// Créer l'indicateur
			const indicator = document.createElement('div');
			indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
			indicator.addEventListener('click', () => goToSlide(index, mediasData));
			carouselIndicators.appendChild(indicator);
		});

		updateMediaDescription(mediasData);
	}

	// Mettre à jour la description du média
	function updateMediaDescription(mediasData) {
		if (mediasData[currentSlide]) {
			currentMediaTitle.textContent = mediasData[currentSlide].title;
			currentMediaDesc.textContent = mediasData[currentSlide].description;
		}
	}

	// Aller à une slide spécifique
	function goToSlide(slideIndex, mediasData) {
		currentSlide = slideIndex;
		const translateX = -slideIndex * 100;
		carouselTrack.style.transform = `translateX(${translateX}%)`;

		// Mettre à jour les indicateurs
		document.querySelectorAll('.indicator').forEach((indicator, index) => {
			indicator.classList.toggle('active', index === slideIndex);
		});

		updateMediaDescription(mediasData);
	}

	// Navigation
	prevBtn.addEventListener('click', () => {
		currentSlide = currentSlide > 0 ? currentSlide - 1 : displayedProject.medias.length - 1;
		goToSlide(currentSlide, displayedProject.medias);
	});

	nextBtn.addEventListener('click', () => {
		currentSlide = currentSlide < displayedProject.medias.length - 1 ? currentSlide + 1 : 0;
		goToSlide(currentSlide, displayedProject.medias);
	});

	// Navigation au clavier
	document.addEventListener('keydown', (e) => {
		if (e.key === 'ArrowLeft') prevBtn.click();
		if (e.key === 'ArrowRight') nextBtn.click();
	});

	// Initialiser le carousel
	if (displayedProject && displayedProject.medias.length > 0) {
		createCarousel(displayedProject.medias);
	} else {
		carouselTrack.innerHTML = '<p>Aucun média disponible</p>';
	}
});