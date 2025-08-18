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
				dir: "",
				fas: "globe",
				medias: [
					{
						type: "image",
						name: "realisation_web.png",
						title: "Page d'accueil",
						description: "Site portfolio moderne développé avec HTML5, CSS3 et JavaScript vanilla. Design responsive, animations fluides, système de navigation dynamique et optimisation SEO complète."
					},
					{
						type: "code",
						name: "styles.css",
						title: "Code CSS",
						description: "Utilisation avancée de CSS Grid, Flexbox et animations keyframes pour créer une expérience utilisateur exceptionnelle.",
						fab: "css3-alt",
					},
					{
						type: "image",
						name: "realisation_web.png",
						title: "Version mobile",
						description: "Design parfaitement adaptatif avec menu hamburger, navigation tactile optimisée et performance mobile excellente.",
						fas: "mobile-alt",
					}
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
					{
						type: "code",
						name: "main.ino",
						title: "Code Arduino",
						description: "Programmation ESP32 avec gestion des capteurs, communication WiFi et serveur web intégré pour l'interface de contrôle.",
						fas: "microchip",
					}
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
	python: {
		title: "Scripts Python",
		description: "Scripts Python",
		dir: "source/accomplishment/python/",
		tags: ["Python", "Automatisation", "Data"],
		banner: "source/python script.jpg",
		accomplishments: [
			{
				title: "Analyseur de Données",
				description: "Script d'analyse automatique de données avec visualisations et rapports PDF.",
				dir: "",
				fab: "python",
				medias: [
					{
						type: "image",
						name: "python script.jpg",
						title: "Visualisations",
						description: "Script Python d'analyse de données utilisant Pandas, Matplotlib et Seaborn pour créer des visualisations interactives et générer automatiquement des rapports PDF détaillés.",
						fas: "chart-bar",
					},
					{
						type: "code",
						name: "analyzer.py",
						title: "Code Python",
						description: "Utilisation avancée de bibliothèques scientifiques Python pour le traitement, l'analyse statistique et la visualisation de grandes quantités de données.",
						fab: "python"
					},
					{
						type: "image",
						name: "python script.jpg",
						title: "Rapport généré",
						description: "Rapport PDF automatiquement généré avec graphiques, statistiques et recommandations basées sur l'analyse des données.",
						fas: "file-pdf",
					}
				],
				techStacks: [
					"Python",
					"Pandas",
					"Matplotlib",
					"ReportLab"
				]
			},
			{
				title: "Outil d'Automatisation",
				description: "Script d'automatisation de tâches répétitives avec interface graphique Tkinter.",
				dir: "",
				fas: "sync-alt",
				medias: [
					{
						type: "image",
						name: "python script.jpg",
						title: "Interface graphique",
						description: "Application desktop Python avec Tkinter pour automatiser des tâches répétitives : organisation de fichiers, renommage en masse, sauvegarde automatique et planification de tâches.",
						fas: "desktop",
					},
				],
				techStacks: [
					"Python",
					"Tkinter",
					"Schedule",
					"OS"
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
					"Power Query",
					"Pivot Tables"
				]
			}
		]
	},
	formation: {
		title: "Formations",
		description: "Formations ...",
		dir: "source/accomplishment/formation/",
		tags: ["Pédagogie", "E-learning", "Multimédia"],
		banner: "source/formation.png",
		accomplishments: [
			{
				title: "Programme Bureautique",
				description: "Formation complète en bureautique avec supports de cours et exercices pratiques.",
				dir: "",
				fas: "chalkboard-teacher",
				medias: [
					{
						type: "image",
						name: "formation.png",
						title: "Session de formation",
						description: "Programme de formation bureautique complet incluant Word, Excel, PowerPoint avec supports pédagogiques interactifs, exercices pratiques et évaluations personnalisées.",
						fas: "users",
					},/*
					{
						type: "video",
						name: "training-demo.mp4",
						title: "Aperçu cours",
						description: "Extrait d'un cours de formation montrant la méthodologie pédagogique et l'interaction avec les apprenants.",
					},*/
					{
						type: "image",
						name: "formation.png",
						title: "Supports de cours",
						description: "Matériel pédagogique développé incluant guides étape par étape, exercices progressifs et ressources complémentaires.",
						fas: "book",
					}
				],
				techStacks: [
					"Pédagogie",
					"Microsoft Office",
					"E-learning",
					"Évaluation"
				]
			}
		]
	}
}