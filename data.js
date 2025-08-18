const accomplishments = {
	flutter: {
		title: "Applications Flutter",
		description: "Applications mobiles modernes développées avec Flutter et Dart, intégrant des interfaces réactives et des fonctionnalités avancées.",
		dir: "source/accomplishment/flutter/",
		tags: ["Flutter", "Dart", "Mobile"],
		banner: "source/realisation_apk.png",
		accomplishments: [
			{
				title: "Application de Gestion des contacts",
				description: "Application mobile permettant de mettre à jour les contacts (Ajoute 01 au début des numéros du Bénin pour s'adapter au passage à 10 chiffres).",
				dir: "1/",
				fab: "flutter",
				medias: [
					{
						type: "image",
						name: "1.jpg",
						title: "Ecran d'accueil",
						description: ""
					},
					{
						type: "image",
						name: "2.jpg",
						title: "Mise à jour Contacts étape 1",
						description: ""
					},
					{
						type: "image",
						name: "3.jpg",
						title: "Mise à jour Contacts étape 2",
						description: "Analyse des contacts existants"
					},
					{
						type: "image",
						name: "4.jpg",
						title: "Mise à jour Contacts étape 3",
						description: "Statisques sur l'état des contacts"
					},
					{
						type: "code",
						name: "main.dart",
						title: "Code Dart",
						description: "Exemple de code Dart montrant l'architecture MVVM et l'utilisation de Provider pour la gestion d'état.",
						fas: "code",
					}
				],
				techStacks: [
					"Flutter",
					"Dart",
					"Firebase",
					"Provider"
				]
			},
			{
				title: "Real Time Sale",
				description: "Application de boulangerie : gestion de la livraison de pains en temps réel",
				dir: "2/",
				fab: "flutter",
				medias: [
					{
						type: "image",
						name: "1.jpg",
						title: "Interface secrétariat",
						description: "Attribution et validation des quantités de pains par livreur"
					},
					{
						type: "image",
						name: "2.jpg",
						title: "Marquage d'une livraison",
						description: "Le livreur renseigne les pains payés par un client"
					},
					{
						type: "image",
						name: "3.jpg",
						title: "Selection d'un client déjà enregistré",
						description: ""
					},
					{
						type: "image",
						name: "4.jpg",
						title: "Vue Gérant (admin)",
						description: "Statisques en tant réel"
					},
					{
						type: "code",
						name: "main.dart",
						title: "Code Dart",
						description: "Exemple de code Dart montrant l'architecture MVVM et l'utilisation de Provider pour la gestion d'état.",
						fas: "code",
					}
				],
				techStacks: [
					"Flutter",
					"Dart",
					"Firebase",
					"Provider"
				]
			},
		]
	},
	web: {
		title: "Sites Web",
		description: "Sites vitrines, portfolios et plateformes e-commerce développés avec des technologies web modernes.",
		dir: "source/accomplishment/web/",
		tags: ["HTML5", "CSS3", "Responsive"],
		banner: "source/realisation_web.png",
		accomplishments: [
			{
				title: "Site Portfolio Dynamique",
				description: "Site web responsive avec animations CSS3, galerie interactive et formulaire de contact.",
				dir: "2/",
				fas: "globe",
				medias: [
					{
						type: "image",
						name: "1.jpg",
						title: "Section Compétences",
						description: "Site portfolio moderne développé avec HTML5, CSS3 et JavaScript. Design responsive, animations fluides, système de navigation dynamique."
					},
					{
						type: "image",
						name: "2.jpg",
						title: "Section Réalisations",
						description: "",
					},
					{
						type: "image",
						name: "3.jpg",
						title: "Section Services",
						description: "",
					},
					{
						type: "code",
						name: "styles.css",
						title: "Code CSS",
						description: "Utilisation avancée de CSS Grid, Flexbox et animations keyframes pour créer une expérience utilisateur exceptionnelle.",
						fab: "css3-alt",
					},
				],
				techStacks: [
					"HTML5",
					"CSS3",
					"JavaScript",
					"Responsive"
				]
			},
			{
				title: "Site de projet FORCE",
				description: "Site web responsive avec animations CSS3, galerie interactive et formulaire de contact.",
				dir: "1/",
				fas: "globe",
				medias: [
					{
						type: "image",
						name: "1.jpg",
						title: "Page d'accueil",
						description: "Site moderne développé avec HTML5, CSS3 et JavaScript. Design responsive, animations fluides, système de navigation dynamique."
					},
					{
						type: "image",
						name: "2.JPG",
						title: "Ecran Galerie",
						description: "",
					},
					{
						type: "image",
						name: "3.png",
						title: "Ecran Téléchargements",
						description: "",
					},
					{
						type: "image",
						name: "4.JPG",
						title: "Ecran de contacts",
						description: "",
					},
					{
						type: "code",
						name: "styles.css",
						title: "Code CSS",
						description: "Utilisation avancée de CSS Grid, Flexbox et animations keyframes pour créer une expérience utilisateur exceptionnelle.",
						fab: "css3-alt",
					},
				],
				techStacks: [
					"HTML5",
					"CSS3",
					"JavaScript",
					"Responsive"
				]
			},
		]
	},
	iot: {
		title: "IoT & Robotique",
		description: "Internet des Objets et Robotique",
		dir: "source/accomplishment/iot/",
		tags: ["Arduino", "IoT", "Capteurs"],
		banner: "source/realisation IoT.jpg",
		accomplishments: [
			{
				title: "Feu de signalisation intelligent",
				description: "Conception et réalisation d'une maquette de feux de signalisation intelligents, permettant une gestion plus optimisée des intersections.",
				dir: "2/",
				fas: "microchip",
				medias: [
					{
						type: "youtube",
						name: "https://youtube.com/embed/kMjnOEgmRQE",
						title: "Fonctionnement",
						description: "Démonstration du système en action avec contrôle automatique et manuel des appareils connectés."
					},
					{
						type: "image",
						name: "1.jpg",
						title: "Environnement de travail",
						description: "Réalisation de la maquette",
					},
					{
						type: "image",
						name: "2.jpg",
						title: "Environnement de travail",
						description: "Tests préliminaires",
					},
					{
						type: "image",
						name: "4.jpg",
						title: "Maquette finalisée",
						description: "",
					},
				],
				techStacks: [
					"ESP32",
					"Arduino IDE",
					"WiFi",
					"Capteurs"
				]
			},
			{
				title: "Lave-mains connectée",
				description: "Lave-mains connecté...",
				dir: "3/",
				fas: "robot",
				medias: [
					{
						type: "video",
						name: "lave-mains demo.mp4",
						title: "En action",
						description: "Détection automatique de la présence de main et ouverture du robinet ..."
					},
					{
						type: "image",
						name: "1.jpg",
						title: "Présentation de la lave-main à la mairie",
						description: "",
					},
					{
						type: "image",
						name: "2.jpg",
						title: "Présentation de la lave-main à la mairie",
						description: "",
					},
					{
						type: "image",
						name: "3.jpg",
						title: "Présentation de la lave-main à la mairie",
						description: "",
					},
				],
				techStacks: [
					"Arduino",
					"Capteurs",
					"Servomoteurs",
					"ESP32-CAM"
				]
			}
		]
	},
	excel: {
		title: "Excel Avancé",
		description: "Excel Avancé ...",
		dir: "source/accomplishment/excel/",
		tags: ["Excel", "Liens externes", "VBA"],
		banner: "source/excel.png",
		accomplishments: [
			{
				title: "Tableau de Bord Dynamique pour gestion de boulangerie",
				description: "Dashboard Excel interactif avec macros VBA et connexions de données externes.",
				dir: "1/",
				fas: "file-excel",
				medias: [
					{
						type: "image",
						name: "1.png",
						title: "Dashboard principal",
						description: "",
						fas: "chart-line",
					},
					{
						type: "image",
						name: "2.png",
						title: "Dépenses",
						description: "",
						fas: "chart-line",
					},
					{
						type: "image",
						name: "3.png",
						title: "Statistiques hebdomadaires",
						description: "",
						fas: "chart-line",
					},
					{
						type: "image",
						name: "4.png",
						title: "Statistiques globales",
						description: "",
						fas: "chart-line",
					},
					{
						type: "code",
						name: "Module1.vba",
						title: "Macros VBA",
						description: "Code VBA personnalisé pour l'automatisation des calculs, mise à jour automatique des données et génération de rapports.",
						fas: "file-code",
					},
				],
				techStacks: [
					"Excel",
					"VBA",
					"Condition",
					"Source externe"
				]
			}
		]
	},
}