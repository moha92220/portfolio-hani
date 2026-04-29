export const profile = {
  name: 'Hani Habi',
  title: 'Ingénieur DevOps / Cloud / Production',
  email: 'hani.habi922@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hani-habi-708244233',
  location: 'Paris',
  cvPath: '/documents/cv-hani-habi.pdf',
  heroImage: '/images/profile/profile.jpg',
  values: [
    'Confiance',
    'Esprit d’équipe',
    'Curiosité technique',
    'Progression continue',
    'Sens du service'
  ]
};

export const skills = [
  'GitLab CI/CD',
  'GitOps',
  'Kubernetes',
  'Docker',
  'GCP',
  'Terraform',
  'Linux',
  'Supervision',
  'Automatisation',
  'Production',
  'Sécurité',
  'Cloud hybride',
  'FinOps',
  'Observabilité',
  'Puppet',
  'Nagios XI',
  'Homelab'
];

export const projects = [
  {
    slug: 'flow-tester',
    name: 'Testeur de flux réseau via GCP',
    shortDescription:
      'Une solution pour lancer des tests réseau standardisés sur Kubernetes, sans refaire manuellement les commandes cluster par cluster.',
    tagline:
      'Industrialiser les tests de flux pour gagner du temps, fiabiliser les diagnostics et simplifier la vie des équipes.',
    accent: 'green',
    coverImage: '/images/projects/flow-tester/cover.jpg',
    heroImage: '/images/projects/flow-tester/hero.jpg',
    stack: ['GCP', 'Kubernetes', 'GitLab CI/CD', 'GitOps', 'Docker', 'React'],
    context:
      'Les tests de connectivité réseau sont souvent répétitifs : changer de cluster, sélectionner le bon namespace, relancer une commande, vérifier le DNS, l’IP et le port. L’objectif était de transformer cette logique manuelle en outil exploitable par les équipes.',
    why: [
      'Éviter les tests réseau faits un par un à la main.',
      'Gagner du temps lors des diagnostics de connectivité.',
      'Standardiser une démarche de vérification des flux entre environnements.'
    ],
    how: [
      'Conception d’une interface permettant de cibler les tests réseau.',
      'Gestion de plusieurs environnements isolés : dev, recette, préproduction et production.',
      'Déploiement via une logique GitLab CI/CD, Kubernetes et GitOps.'
    ],
    what: [
      'Un outil de test de flux réseau utilisable par les équipes.',
      'Une solution qui prend en compte le DNS, l’IP et le port.',
      'Un projet complet mêlant frontend, backend, Kubernetes, GCP et déploiement.'
    ],
    role: [
      'Conception de l’outil et de son fonctionnement.',
      'Développement de l’interface et intégration avec l’environnement Kubernetes.',
      'Mise en place du déploiement et gestion des contraintes multi-environnements.'
    ],
    highlights: [
      'Projet le plus exigeant techniquement.',
      'Gestion de 4 environnements isolés.',
      'Bonne illustration de ma capacité à construire un outil complet de bout en bout.'
    ],
    impact:
      'Ce projet montre ma capacité à partir d’un besoin opérationnel concret, choisir les bonnes technologies, gérer les contraintes d’environnement et livrer un outil utile aux équipes.',
    gallery: [
      '/images/projects/flow-tester/gallery-1.jpg',
      '/images/projects/flow-tester/gallery-2.jpg',
      '/images/projects/flow-tester/gallery-3.jpg'
    ]
  },
  {
    slug: 'finops',
    name: 'Portail FinOps Kubernetes',
    shortDescription:
      'Un portail pour visualiser les coûts Kubernetes par cluster et namespace, et aider les leaders à mieux piloter les ressources.',
    tagline:
      'Rendre les coûts Kubernetes lisibles pour mieux optimiser, décider et permettre à d’autres projets de voir le jour.',
    accent: 'blue',
    coverImage: '/images/projects/finops/cover.jpg',
    heroImage: '/images/projects/finops/hero.jpg',
    stack: ['React', 'Kubernetes', 'FinOps', 'Cloud', 'Visualisation', 'API'],
    context:
      'Dans un contexte multi-clusters Kubernetes, les coûts peuvent vite devenir difficiles à comprendre. Le besoin était de donner une vision plus claire des coûts par cluster et namespace pour aider les équipes à piloter et optimiser.',
    why: [
      'Donner aux leaders une vision claire des coûts Kubernetes.',
      'Identifier les ressources qui coûtent le plus.',
      'Aider à optimiser pour rendre les clusters plus rentables.'
    ],
    how: [
      'Conception d’un portail lisible, orienté décision.',
      'Organisation de la donnée par cluster et namespace.',
      'Mise en avant des informations utiles plutôt qu’un simple affichage brut.'
    ],
    what: [
      'Un portail FinOps Kubernetes.',
      'Une vue structurée des coûts.',
      'Un outil d’aide à la décision pour optimiser les ressources.'
    ],
    role: [
      'Conception du portail et de l’expérience utilisateur.',
      'Structuration des informations à afficher.',
      'Traduction d’un besoin FinOps en interface exploitable.'
    ],
    highlights: [
      'Sujet à forte valeur pour le pilotage cloud.',
      'Vision transverse entre technique, coût et décision.',
      'Projet utile pour mieux responsabiliser les usages Kubernetes.'
    ],
    impact:
      'Ce projet montre ma capacité à transformer une donnée technique en outil de pilotage. Optimiser les coûts, ce n’est pas seulement réduire une facture : c’est aussi permettre à d’autres projets de naître.',
    gallery: [
      '/images/projects/finops/gallery-1.jpg',
      '/images/projects/finops/gallery-2.jpg',
      '/images/projects/finops/gallery-3.jpg'
    ]
  },
  {
    slug: 'dynatrace-popup',
    name: 'Popup Windows pour alertes Dynatrace',
    shortDescription:
      'Un agent local qui fait remonter les alertes Dynatrace du Portail DevOps directement sur le poste de travail.',
    tagline:
      'Faire venir l’alerte jusqu’à l’utilisateur pour améliorer la réactivité et l’observabilité.',
    accent: 'gold',
    coverImage: '/images/projects/dynatrace-popup/cover.jpg',
    heroImage: '/images/projects/dynatrace-popup/hero.jpg',
    stack: ['Node.js', 'PowerShell', 'Windows', 'Dynatrace', 'Observabilité', 'Automatisation'],
    context:
      'Les alertes d’observabilité sont utiles seulement si elles sont vues au bon moment. L’idée était de ne plus dépendre uniquement d’un dashboard ouvert dans un navigateur, mais de faire remonter les alertes importantes directement sur le poste de travail.',
    why: [
      'Améliorer la réactivité face aux alertes.',
      'Éviter de devoir surveiller constamment un dashboard.',
      'Rendre l’observabilité plus visible et plus proche des équipes.'
    ],
    how: [
      'Développement d’un agent local.',
      'Filtrage des alertes par équipe ou périmètre applicatif.',
      'Affichage de notifications Windows claires et visibles.'
    ],
    what: [
      'Un système de popup Windows pour alertes Dynatrace.',
      'Une logique d’alerte ciblée pour l’équipe BPI.',
      'Une idée ensuite proposée à d’autres équipes comme ACE ou CRM.'
    ],
    role: [
      'Conception de l’idée initiale.',
      'Développement de l’agent local.',
      'Adaptation de l’outil pour des besoins d’équipe.'
    ],
    highlights: [
      'Projet né d’un besoin terrain.',
      'Très concret pour améliorer la réactivité.',
      'Preuve de ma capacité à proposer une idée et à l’étendre à d’autres équipes.'
    ],
    impact:
      'Ce projet montre que j’aime aider les équipes avec des solutions simples, visibles et directement utiles. Une bonne idée DevOps n’a pas besoin d’être compliquée pour avoir un impact.',
    gallery: [
      '/images/projects/dynatrace-popup/gallery-1.jpg',
      '/images/projects/dynatrace-popup/gallery-2.jpg',
      '/images/projects/dynatrace-popup/gallery-3.jpg'
    ]
  },
  {
    slug: 'cra-automation',
    name: 'Automatisation du CRA',
    shortDescription:
      'Un script qui automatise une partie du remplissage du Compte Rendu d’Activité à partir des mails et des astreintes.',
    tagline:
      'Automatiser une tâche répétitive pour gagner du temps et éviter les erreurs manuelles.',
    accent: 'red',
    coverImage: '/images/projects/cra-automation/cover.jpg',
    heroImage: '/images/projects/cra-automation/hero.jpg',
    stack: ['Script', 'Automatisation', 'Mails', 'Productivité', 'Astreinte', 'Traitement de données'],
    context:
      'Le CRA peut devenir une tâche répétitive : retrouver les tickets, les périodes d’astreinte, calculer les éléments à renseigner. L’objectif était de réduire cette charge manuelle avec une automatisation simple.',
    why: [
      'Éviter une saisie répétitive.',
      'Gagner du temps sur une tâche administrative.',
      'Limiter les oublis et les erreurs.'
    ],
    how: [
      'Demande des dates et horaires utiles.',
      'Recherche dans les mails des éléments pertinents.',
      'Préparation automatique des informations nécessaires.'
    ],
    what: [
      'Un outil d’automatisation du CRA.',
      'Un gain estimé de plusieurs heures selon l’organisation des astreintes.',
      'Une solution pensée pour simplifier le quotidien.'
    ],
    role: [
      'Identification du besoin.',
      'Conception de la logique d’automatisation.',
      'Développement du script.'
    ],
    highlights: [
      'Projet orienté productivité réelle.',
      'Automatisation d’un irritant administratif.',
      'Exemple concret de mon envie de faciliter le travail des autres.'
    ],
    impact:
      'Ce projet montre que je ne cherche pas seulement à travailler sur de gros sujets techniques. J’aime aussi automatiser ce qui prend du temps au quotidien, parce que ces gains finissent par compter pour tout le monde.',
    gallery: [
      '/images/projects/cra-automation/gallery-1.jpg',
      '/images/projects/cra-automation/gallery-2.jpg',
      '/images/projects/cra-automation/gallery-3.jpg'
    ]
  },
  {
    slug: 'nagios-puppet',
    name: 'Supervision Nagios XI automatisée avec Puppet',
    shortDescription:
      'Une infrastructure de supervision centralisée avec Puppet Master et Nagios XI pour automatiser l’intégration des équipements à superviser.',
    tagline:
      'Passer d’une supervision manuelle à une supervision plus industrialisée et maintenable.',
    accent: 'blue',
    coverImage: '/images/projects/nagios-puppet/cover.jpg',
    heroImage: '/images/projects/nagios-puppet/hero.jpg',
    stack: ['Nagios XI', 'Puppet', 'Linux', 'Supervision', 'Automatisation', 'Infrastructure'],
    context:
      'Lors de mon expérience en administration système et sécurité, j’ai travaillé sur une infrastructure de supervision centralisée avec Puppet Master et Nagios XI. L’objectif était de limiter les actions manuelles lors de l’ajout de nouveaux éléments à superviser.',
    why: [
      'Éviter de créer manuellement chaque nouvel élément dans Nagios XI.',
      'Centraliser et industrialiser la supervision.',
      'Rendre l’intégration des équipements plus rapide et plus fiable.'
    ],
    how: [
      'Utilisation d’un serveur Puppet Master pour gérer la configuration.',
      'Automatisation de l’intégration des éléments supervisés.',
      'Structuration de la supervision pour réduire les actions répétitives.'
    ],
    what: [
      'Une supervision centralisée autour de Nagios XI.',
      'Une logique d’automatisation via Puppet.',
      'Une base plus propre pour administrer et maintenir la supervision.'
    ],
    role: [
      'Participation au déploiement et à l’administration de l’infrastructure.',
      'Contribution à l’automatisation de la supervision.',
      'Travail sur un besoin concret d’administration système.'
    ],
    highlights: [
      'Projet issu de mon expérience administrateur système et sécurité.',
      'Bonne base pour comprendre la supervision avant le DevOps cloud.',
      'Montre mon évolution entre système, production et automatisation.'
    ],
    impact:
      'Ce projet montre que mon profil DevOps ne vient pas de nulle part : il s’appuie sur une vraie base système, sécurité et supervision. Automatiser la supervision, c’est déjà penser comme un DevOps.',
    gallery: [
      '/images/projects/nagios-puppet/gallery-1.jpg',
      '/images/projects/nagios-puppet/gallery-2.jpg',
      '/images/projects/nagios-puppet/gallery-3.jpg'
    ]
  },
  {
    slug: 'homelab-automation',
    name: 'Homelab personnel & automatisation maison',
    shortDescription:
      'Un environnement personnel pour synchroniser, partager et organiser mes fichiers, ISO, médias et informations sensibles de manière plus fluide.',
    tagline:
      'Créer chez moi un vrai terrain d’expérimentation pour apprendre, tester et automatiser.',
    accent: 'green',
    coverImage: '/images/projects/homelab-automation/cover.jpg',
    heroImage: '/images/projects/homelab-automation/hero.jpg',
    stack: ['Homelab', 'Stockage', 'Synchronisation', 'Réseau', 'Sécurité', 'Automatisation'],
    context:
      'En dehors du travail, j’aime aussi construire des solutions pour mes propres usages. J’ai mis en place des automatisations personnelles pour mieux synchroniser, partager et organiser mes fichiers, films, ISO et données importantes.',
    why: [
      'Avoir un environnement personnel plus fluide et mieux organisé.',
      'Pouvoir partager et retrouver rapidement mes fichiers.',
      'Créer un terrain d’expérimentation pour continuer à apprendre.'
    ],
    how: [
      'Mise en place d’une logique de synchronisation et de partage local.',
      'Organisation de fichiers lourds comme les ISO, médias et documents.',
      'Réflexion autour du stockage sécurisé des mots de passe et données sensibles.'
    ],
    what: [
      'Un homelab personnel orienté productivité et apprentissage.',
      'Un environnement pour tester des idées hors contexte professionnel.',
      'Une continuité naturelle entre curiosité personnelle et progression technique.'
    ],
    role: [
      'Conception complète de l’organisation.',
      'Mise en place de l’automatisation.',
      'Maintenance et amélioration continue selon mes usages.'
    ],
    highlights: [
      'Projet personnel qui montre ma curiosité technique.',
      'Terrain d’apprentissage permanent.',
      'Preuve que je ne fais pas de la technique uniquement au travail.'
    ],
    impact:
      'Ce projet montre mon rapport naturel à la technique : quand quelque chose peut être simplifié, automatisé ou mieux organisé, j’ai envie de le construire. C’est une manière d’apprendre, mais aussi de créer un environnement qui me ressemble.',
    gallery: [
      '/images/projects/homelab-automation/gallery-1.jpg',
      '/images/projects/homelab-automation/gallery-2.jpg',
      '/images/projects/homelab-automation/gallery-3.jpg'
    ]
  }
];
