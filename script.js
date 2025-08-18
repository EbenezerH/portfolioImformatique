// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // Variables pour les éléments DOM
    const navbar = document.getElementById('navbar');
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    const contactForm = document.getElementById('contact-form');
    const realisationsGrid = document.getElementById('realisations-grid');

    // ===== Injection des réalizations =====
    realisationsGrid.innerHTML = '';
    for (const categoryKey in accomplishments) {
        const category = accomplishments[categoryKey];
        
        const card = document.createElement("div");
        card.classList.add("realisation-card");
        const image = document.createElement("div");
        image.classList.add("realisation-image");
        image.innerHTML = `<img src="${category.banner}", class="gallery-img">`;
        card.appendChild(image);
        const content = document.createElement("div");
        content.classList.add("realisation-content");
        const title = document.createElement("h3");
        title.innerText = category.title;
        content.appendChild(title);
        const description = document.createElement("p");
        description.innerText = category.description;
        content.appendChild(description);
        const techStack = document.createElement("div");
        techStack.classList.add("realisation-tech");
        category.tags.forEach(tagName => {
            const tag = document.createElement("span");
            tag.classList.add("tech-tag");
            tag.innerHTML = tagName;

            techStack.appendChild(tag);
        });
        content.appendChild(techStack);
        const link = document.createElement("div");
        link.classList.add("realisation-links");
        link.innerHTML = `<a href="accomplishment.html?category=${categoryKey}" class="btn-link"><i class="fas fa-eye"></i> Voir</a>`;
        content.appendChild(link);
        card.appendChild(content);

        realisationsGrid.appendChild(card);
    }

    // ===== NAVIGATION =====
    
    // Smooth scrolling pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                // Fermer le menu mobile après clic
                navLinks.classList.remove('active');
            }
        });
    });

    // Toggle du menu mobile
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = menuToggle.querySelector('i');
        
        // Changer l'icône du menu
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Fermer le menu mobile en cliquant en dehors
    document.addEventListener('click', (e) => {
        if (!navbar.contains(e.target)) {
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // ===== EFFET DE SCROLL SUR LA NAVBAR =====
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Mise à jour du lien actif dans la navigation
        updateActiveNavLink();
    });

    // Fonction pour mettre à jour le lien actif
    function updateActiveNavLink() {
        const sections = document.querySelectorAll('section[id]');
        const navLinksItems = document.querySelectorAll('.nav-links a');
        
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (scrollY >= (sectionTop - 200)) {
                current = section.getAttribute('id');
            }
        });

        navLinksItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    }

    // ===== ANIMATIONS AU SCROLL =====
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Animation spéciale pour les statistiques
                if (entry.target.classList.contains('about')) {
                    setTimeout(() => {
                        animateCounters();
                    }, 500);
                }
            }
        });
    }, observerOptions);

    // Observer tous les éléments avec la classe fade-in
    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // ===== ANIMATION DES COMPTEURS =====
    
    let countersAnimated = false;
    
    function animateCounters() {
        if (countersAnimated) return;
        countersAnimated = true;
        
        const counters = document.querySelectorAll('.stat-number');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/\D/g, ''));
            const suffix = counter.textContent.replace(/[0-9]/g, '');
            let current = 0;
            const increment = target / 100;
            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target + suffix;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.floor(current) + suffix;
                }
            }, 20);
        });
    }

    // ===== ANIMATION DES PARTICULES =====
    
    function createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
        
        const particleCount = 50;

        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Taille aléatoire
            const size = Math.random() * 4 + 1;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Position aléatoire
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Délai d'animation aléatoire
            particle.style.animationDelay = Math.random() * 6 + 's';
            particle.style.animationDuration = (Math.random() * 3 + 3) + 's';
            
            particlesContainer.appendChild(particle);
        }
    }

    // Initialiser les particules
    createParticles();

    // ===== GESTION DU FORMULAIRE DE CONTACT =====
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
    
        // Récupérer les données du formulaire
        const formData = new FormData(this);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
    
        // Validation simple
        if (!name || !email || !subject || !message) {
            showNotification('Veuillez remplir tous les champs.', 'error');
            return;
        }
    
        if (!isValidEmail(email)) {
            showNotification('Veuillez entrer une adresse email valide.', 'error');
            return;
        }
    
        const submitBtn = this.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
    
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
        submitBtn.disabled = true;
    
        // ENVOI VIA EMAILJS
        emailjs.send('service_g2ib2lb', 'template_ljj8ocm', {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: 'hosmeb2@gmail.com'
        })
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            showNotification('Message envoyé avec succès! Je vous répondrai bientôt.', 'success');
            contactForm.reset();
        })
        .catch(function(error) {
            console.log('FAILED...', error);
            showNotification('Erreur lors de l\'envoi. Veuillez réessayer.', 'error');
        })
        .finally(function() {
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        });
    });


    // ===== FONCTIONS UTILITAIRES =====
    
    // Validation email
    function isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
    
    // Système de notifications
    function showNotification(message, type = 'info') {
        // Supprimer les notifications existantes
        const existingNotifications = document.querySelectorAll('.notification');
        existingNotifications.forEach(notif => notif.remove());
        
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <div class="notification-content">
                <i class="fas ${type === 'success' ? 'fa-check-circle' : type === 'error' ? 'fa-exclamation-circle' : 'fa-info-circle'}"></i>
                <span>${message}</span>
                <button class="notification-close">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        `;
        
        // Styles pour la notification
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 8px;
            box-shadow: 0 10px 30px rgba(0,0,0,0.3);
            z-index: 10000;
            transform: translateX(400px);
            transition: transform 0.3s ease;
            max-width: 400px;
        `;
        
        notification.querySelector('.notification-content').style.cssText = `
            display: flex;
            align-items: center;
            gap: 0.5rem;
        `;
        
        notification.querySelector('.notification-close').style.cssText = `
            background: none;
            border: none;
            color: white;
            cursor: pointer;
            margin-left: auto;
            padding: 0.25rem;
        `;
        
        document.body.appendChild(notification);
        
        // Animation d'entrée
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Fermeture automatique
        setTimeout(() => {
            closeNotification(notification);
        }, 5000);
        
        // Fermeture manuelle
        notification.querySelector('.notification-close').addEventListener('click', () => {
            closeNotification(notification);
        });
    }
    
    function closeNotification(notification) {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }

    // ===== EFFETS VISUELS SUPPLÉMENTAIRES =====
    
    // Effet de parallaxe léger sur le hero
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    // Animation des tags de compétences au survol
    document.querySelectorAll('.skill-tag').forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // Effet de type machine à écrire pour le titre
    function typeWriter(element, text, speed = 100) {
        let i = 0;
        const originalHTML = element.innerHTML;
        element.innerHTML = '';
        
        function type() {
            if (i < text.length) {
                if (text.charAt(i) === '<') {
                    // Gérer les balises HTML
                    const tagEnd = text.indexOf('>', i);
                    if (tagEnd !== -1) {
                        element.innerHTML += text.substring(i, tagEnd + 1);
                        i = tagEnd + 1;
                    }
                } else {
                    element.innerHTML += text.charAt(i);
                    i++;
                }
                setTimeout(type, speed);
            }
        }
        type();
    }

    // Appliquer l'effet machine à écrire au titre principal après un délai
    setTimeout(() => {
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) {
            const originalText = heroTitle.innerHTML;
            typeWriter(heroTitle, originalText, 100);
        }
    }, 1500);

    // ===== PERFORMANCE ET OPTIMISATIONS =====
    
    // Throttle function pour optimiser les événements de scroll
    function throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        }
    }

    // Debounce function pour les événements de resize
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Gestion du resize avec debounce
    window.addEventListener('resize', debounce(() => {
        // Recalculer les positions si nécessaire
        updateActiveNavLink();
    }, 250));

    // ===== ACCESSIBILITÉ =====
    
    // Support du clavier pour la navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            // Fermer le menu mobile avec Escape
            navLinks.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // Focus trap pour le menu mobile
    function trapFocus(element) {
        const focusableElements = element.querySelectorAll(
            'a[href], button, textarea, input[type="text"], input[type="email"], input[type="radio"], input[type="checkbox"], select'
        );
        const firstFocusableElement = focusableElements[0];
        const lastFocusableElement = focusableElements[focusableElements.length - 1];

        element.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                if (e.shiftKey) {
                    if (document.activeElement === firstFocusableElement) {
                        lastFocusableElement.focus();
                        e.preventDefault();
                    }
                } else {
                    if (document.activeElement === lastFocusableElement) {
                        firstFocusableElement.focus();
                        e.preventDefault();
                    }
                }
            }
        });
    }

    // Appliquer le focus trap au menu de navigation
    if (navLinks) {
        trapFocus(navLinks);
    }

    // ===== ANIMATIONS ADDITIONNELLES =====
    
    // Animation staggered pour les éléments de grille
    function animateGridItems(selector, delay = 100) {
        const items = document.querySelectorAll(selector);
        items.forEach((item, index) => {
            item.style.animationDelay = `${index * delay}ms`;
        });
    }

    // Appliquer l'animation staggered aux cartes de service
    animateGridItems('.service-card', 150);
    animateGridItems('.skill-category', 200);

    // Animation au survol des liens sociaux
    document.querySelectorAll('.social-links a').forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px) scale(1.1)';
        });
        
        link.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // ===== EASTER EGG =====
    
    // Konami Code Easter Egg
    let konamiCode = [];
    const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'KeyB', 'KeyA'];
    
    document.addEventListener('keydown', (e) => {
        konamiCode.push(e.code);
        if (konamiCode.length > konamiSequence.length) {
            konamiCode.shift();
        }
        
        if (konamiCode.join(',') === konamiSequence.join(',')) {
            showNotification('🎉 Code Konami activé! Vous êtes un vrai geek!', 'success');
            // Ajouter un effet spécial
            document.body.style.animation = 'rainbow 2s infinite';
            setTimeout(() => {
                document.body.style.animation = '';
            }, 5000);
        }
    });

    // Animation rainbow pour l'easter egg
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rainbow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // ===== INITIALISATION FINALE =====
    
    // Smooth reveal des éléments au chargement
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    // Log de confirmation
    console.log('🚀 Portfolio JavaScript chargé avec succès!');
    console.log('💡 Astuce: Tapez le code Konami pour une surprise!');
    
    // Preloader simple
    window.addEventListener('load', () => {
        const preloader = document.querySelector('.preloader');
        if (preloader) {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
            }, 500);
        }
    });

});