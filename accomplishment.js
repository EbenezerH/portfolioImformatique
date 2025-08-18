// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
	navLinks.classList.toggle('active');
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
	const navbar = document.getElementById('navbar');
	if (window.scrollY > 50) {
		navbar.classList.add('scrolled');
	} else {
		navbar.classList.remove('scrolled');
	}
});

// Fonction pour obtenir les paramètres URL
function getURLParameter(name) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(name);
}

function setupListener(accomplishmentsData) {
	// Filter functionality
	const filterButtons = document.querySelectorAll('.filter-btn');
	const accomplishmentCards = document.querySelectorAll('.accomplishment-card');

	filterButtons.forEach(button => {
		button.addEventListener('click', () => {
			// Remove active class from all buttons
			filterButtons.forEach(btn => btn.classList.remove('active'));
			// Add active class to clicked button
			button.classList.add('active');

			const category = button.getAttribute('data-category');

			accomplishmentCards.forEach(card => {
				if (category === 'all' || card.getAttribute('data-category') === category) {
					card.style.display = 'block';
					setTimeout(() => {
						card.style.opacity = '1';
						card.style.transform = 'translateY(0)';
					}, 100);
				} else {
					card.style.opacity = '0';
					card.style.transform = 'translateY(20px)';
					setTimeout(() => {
						card.style.display = 'none';
					}, 300);
				}
			});
		});
	});

	document.querySelectorAll('.media-item').forEach(item => {
		item.addEventListener('click', () => {
			const cardElement = item.closest('.accomplishment-card');
			const category = cardElement.getAttribute('data-category');
			if (!(category in accomplishmentsData)) {
				console.error("Unable to resolve the category:", category);
				return;
			}

			// Créer l'URL avec les paramètres
			const params = new URLSearchParams({
				category: category,
				dir: encodeURIComponent(cardElement.getAttribute("data-dir") || ""),
			});

			window.location.href = `project-detail.html?${params.toString()}`;
		});
	});

	// Animation on scroll
	const observerOptions = {
		threshold: 0.1,
		rootMargin: '0px 0px -50px 0px'
	};

	const observer = new IntersectionObserver((entries) => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				entry.target.style.opacity = '1';
				entry.target.style.transform = 'translateY(0)';
			}
		});
	}, observerOptions);

	accomplishmentCards.forEach(card => {
		card.style.opacity = '0';
		card.style.transform = 'translateY(30px)';
		card.style.transition = 'all 0.6s ease';
		observer.observe(card);
	});
}

// Fonction pour activer le filtre au chargement de la page
function activateFilterFromURL() {
	const category = getURLParameter('category');
	if (category) {

		// Activer le bon filtre
		const targetButton = document.querySelector(`[data-category="${category}"]`);
		if (targetButton) {
			targetButton.click();
		}
	}
}

// Fonction pour afficher les accomplissements
function renderAccomplishments(accomplishmentsData) {
	const grid = document.getElementById("accomplishments-grid");
	const filter = document.getElementById("filter-buttons");
	grid.innerHTML = ""; // On vide au cas où
	filter.innerHTML = "";
	const filterAll = document.createElement("button");
	filterAll.classList.add("filter-btn", "active");
	filterAll.setAttribute("data-category", "all");
	filterAll.textContent = "Toutes";
	filter.appendChild(filterAll);

	for (const categoryKey in accomplishmentsData) {
		const category = accomplishmentsData[categoryKey];
		const filterItem = document.createElement("button");
		filterItem.classList.add("filter-btn");
		filterItem.setAttribute("data-category", categoryKey);
		filterItem.textContent = category.title;
		filter.appendChild(filterItem);

		category.accomplishments.forEach(project => {
			const card = createAccomplishmentCard(categoryKey, category.dir, project);
			grid.appendChild(card);
		});
	}
}

// Foction pour créer la carte d'un projet
function createAccomplishmentCard(categoryKey, categoryDir, project) {
	const card = document.createElement("div");
	card.classList.add("accomplishment-card");
	card.setAttribute("data-category", categoryKey);
	card.setAttribute("data-dir", project.dir);

	// Header
	const header = document.createElement("div");
	header.classList.add("card-header");
	if ("fab" in project) {
		header.innerHTML = `<i class="fab fa-${project.fab}"></i><h3>${project.title}</h3>`;
	} else {
		header.innerHTML = `<i class="fas fa-${project.fas}"></i><h3>${project.title}</h3>`;
	}
	card.appendChild(header);

	// Description
	const desc = document.createElement("p");
	desc.classList.add("card-description");
	desc.textContent = project.description;
	card.appendChild(desc);

	// Medias
	const mediaGrid = createMediaGrid(categoryDir, project.dir, project.medias);
	card.appendChild(mediaGrid);

	// Tech stack
	const techStack = createTechStack(project.techStacks);
	card.appendChild(techStack);

	return card;
}

// Créer la grille des médias
function createMediaGrid(categoryDir, projectDir, medias) {
	const mediaGrid = document.createElement("div");
	mediaGrid.classList.add("media-grid");

	medias.forEach(media => {
		const mediaItem = document.createElement("div");
		mediaItem.classList.add("media-item");
		mediaItem.setAttribute("data-type", media.type);

		// Gestion du chemin des fichiers (sauf si URL absolue)
		let src = media.name;
		if (media.name && !/^https?:\/\//.test(media.name)) {
			src = categoryDir + projectDir + media.name;
		}

		mediaItem.setAttribute("data-src", src);
		mediaItem.setAttribute("data-title", media.title || "");
		mediaItem.setAttribute("data-description", media.description || "");

		// Miniature selon type
		let overlayType = ""
		if (media.type === "image") {
			const img = document.createElement("img");
			img.src = src || "";
			img.alt = media.title || "";
			mediaItem.appendChild(img);
			overlayType = media.fas || "eye";
		} else if (media.type === "video" || media.type === "youtube") {
			const icon = document.createElement("div");
			icon.classList.add("video-preview");
			icon.innerHTML = `<i class="fas fa-play"></i><span>Démo</span>`;
			mediaItem.appendChild(icon);
			overlayType = "play";
		} else if (media.type === "code") {
			const icon = document.createElement("div");
			icon.classList.add("code-preview");
			icon.innerHTML = `<i class="fa${'fab' in media ? 'b' : 's'} fa-${media.fas || media.fab}"></i><span>${media.name || "Code"}</span>`;
			mediaItem.appendChild(icon);
			overlayType = "code";
		}
		// Création de la couverture au survol
		const overlay = document.createElement("div");
		overlay.classList.add("media-overlay");
		overlay.innerHTML = `<i class="fas fa-${overlayType}"></i>`;
		mediaItem.appendChild(overlay);

		mediaGrid.appendChild(mediaItem);
	});

	return mediaGrid;
}

// Panel des technologies
function createTechStack(techStacks) {
	const techStackDiv = document.createElement("div");
	techStackDiv.classList.add("tech-stack");

	techStacks.forEach(tech => {
		const span = document.createElement("span");
		span.classList.add("tech-tag");
		span.textContent = tech;
		techStackDiv.appendChild(span);
	});

	return techStackDiv;
}


// Appeler la fonction au chargement de la page
document.addEventListener("DOMContentLoaded", () => {
	renderAccomplishments(accomplishments);
	setupListener(accomplishments);
	activateFilterFromURL();
});
