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
  'Observabilité'
];

export const projects = [
  {
    slug: 'finops',
    name: 'Portail FinOps Kubernetes',
    shortDescription:
      'Une interface pensée pour rendre visibles les coûts des namespaces Kubernetes par cluster et faciliter les décisions FinOps.',
    tagline:
      'Rendre les coûts lisibles pour mieux piloter, prioriser et optimiser.',
    accent: 'blue',
    coverImage: '/images/projects/finops/cover.jpg',
    heroImage: '/images/projects/finops/hero.jpg',
    stack: ['React', 'API interne', 'Kubernetes', 'FinOps', 'Visualisation', 'Cloud'],
    context:
      'Dans un contexte multi-clusters Kubernetes, les coûts sont souvent disséminés, peu lisibles et difficiles à relier aux usages métiers. L’objectif était de proposer une vue exploitable par cluster et namespace afin de faciliter la compréhension, le pilotage et les arbitrages.',
    why: [
      'Permettre aux équipes de comprendre où vont les coûts Kubernetes.',
      'Faciliter les échanges entre exploitation, plateformes et équipes applicatives.',
      'Aider à prendre des décisions concrètes : optimisation, nettoyage, priorisation et responsabilisation.'
    ],
    how: [
      'Conception d’un portail clair et orienté usage, avec une lecture par cluster puis par namespace.',
      'Mise en avant des informations utiles à la décision plutôt qu’un simple tableau brut.',
      'Approche centrée produit : rendre la donnée plus compréhensible, plus actionnable et plus pédagogique.'
    ],
    what: [
      'Un portail FinOps permettant de visualiser les coûts Kubernetes.',
      'Une lecture structurée des coûts par cluster et par namespace.',
      'Une base de travail pour discuter optimisation, responsabilité et sobriété opérationnelle.'
    ],
    role: [
      'Conception du portail et de l’expérience utilisateur.',
      'Traduction d’un besoin FinOps en interface exploitable.',
      'Mise en valeur des données pour soutenir la prise de décision.'
    ],
    highlights: [
      'Approche produit : un outil pensé pour être compris rapidement.',
      'Valeur métier immédiate : meilleure visibilité et meilleure discussion autour des coûts.',
      'Positionnement transverse entre technique, usage et pilotage.'
    ],
    impact:
      'Ce projet montre ma capacité à transformer une donnée technique en outil utile, lisible et orienté décision. Il reflète aussi ma volonté de construire des solutions qui créent de la valeur au-delà de la seule implémentation technique.',
    gallery: [
      '/images/projects/finops/gallery-1.jpg',
      '/images/projects/finops/gallery-2.jpg',
      '/images/projects/finops/gallery-3.jpg'
    ]
  },
  {
    slug: 'flow-tester',
    name: 'Testeur de flux réseau via GCP',
    shortDescription:
      'Une solution pour lancer des tests réseau standardisés sur Kubernetes et accélérer les diagnostics de connectivité.',
    tagline:
      'Industrialiser les tests de flux pour fiabiliser les échanges réseau et gagner du temps.',
    accent: 'green',
    coverImage: '/images/projects/flow-tester/cover.jpg',
    heroImage: '/images/projects/flow-tester/hero.jpg',
    stack: ['GCP', 'Kubernetes', 'GitLab CI/CD', 'GitOps', 'Docker', 'Automatisation'],
    context:
      'Les tests de connectivité réseau sont souvent répétitifs, sensibles aux erreurs manuelles et coûteux en temps. Il était pertinent d’industrialiser ce besoin dans un environnement cloud et Kubernetes pour proposer un outil réutilisable.',
    why: [
      'Réduire les tests manuels et les pertes de temps sur les diagnostics réseau.',
      'Standardiser une démarche de vérification des flux.',
      'Donner aux équipes un moyen simple de lancer des vérifications de connectivité.'
    ],
    how: [
      'Conception d’une solution déployée sur infrastructure Google Cloud Platform.',
      'Mise en place d’une chaîne GitLab CI/CD et d’un déploiement GitOps pour fiabiliser les livraisons.',
      'Appui sur Kubernetes pour orchestrer les tests et rendre l’outil exploitable dans un cadre industrialisé.'
    ],
    what: [
      'Un testeur de flux réseau orienté usage opérationnel.',
      'Une capacité à lancer des vérifications sur des flux ciblés.',
      'Un projet complet mêlant cloud, conteneurisation, déploiement et expérience utilisateur.'
    ],
    role: [
      'Conception et déploiement de la solution.',
      'Industrialisation de la livraison via GitLab CI/CD.',
      'Structuration du déploiement dans un cadre GitOps / Kubernetes.'
    ],
    highlights: [
      'Projet très représentatif de mon profil DevOps : cloud, automatisation, Kubernetes, CI/CD.',
      'Vision transverse : du besoin terrain jusqu’à l’outil exploitable.',
      'Mise en valeur d’une logique d’industrialisation plutôt qu’un simple script isolé.'
    ],
    impact:
      'Ce projet illustre mon envie de construire des solutions robustes, utiles aux équipes et pensées pour durer. J’aime transformer un besoin opérationnel récurrent en produit interne fiable et réutilisable.',
    gallery: [
      '/images/projects/flow-tester/gallery-1.jpg',
      '/images/projects/flow-tester/gallery-2.jpg',
      '/images/projects/flow-tester/gallery-3.jpg'
    ]
  },
  {
    slug: 'dynatrace-popup',
    name: 'Popup Windows pour alertes Dynatrace',
    shortDescription:
      'Un agent local qui remonte les alertes Dynatrace issues du Portail DevOps pour renforcer la réactivité et l’observabilité.',
    tagline:
      'Faire venir l’alerte jusqu’à l’utilisateur, au bon moment et au bon endroit.',
    accent: 'gold',
    coverImage: '/images/projects/dynatrace-popup/cover.jpg',
    heroImage: '/images/projects/dynatrace-popup/hero.jpg',
    stack: ['Node.js', 'PowerShell', 'Windows', 'Observabilité', 'Dynatrace', 'Automatisation'],
    context:
      'Quand l’information reste enfermée dans un portail, le risque est de la consulter trop tard. L’idée de ce projet était de rapprocher l’alerte de l’utilisateur final, sous forme de notifications Windows visibles et ciblées, afin d’améliorer la réactivité opérationnelle.',
    why: [
      'Améliorer la visibilité des alertes critiques.',
      'Réduire la dépendance à la consultation manuelle du portail.',
      'Renforcer l’observabilité au plus proche du poste de travail.'
    ],
    how: [
      'Développement d’un agent local capable de récupérer les événements pertinents.',
      'Traitement et filtrage des alertes avant affichage.',
      'Affichage de notifications Windows propres, visibles et immédiatement compréhensibles.'
    ],
    what: [
      'Un popup desktop connecté à la logique d’observabilité du Portail DevOps.',
      'Des alertes plus visibles et plus actionnables.',
      'Un outil orienté confort d’usage, efficacité et gain de temps.'
    ],
    role: [
      'Conception du principe d’alerte locale.',
      'Développement du mécanisme de récupération et de notification.',
      'Réflexion sur l’expérience utilisateur et la lisibilité de l’information.'
    ],
    highlights: [
      'Projet très concret, proche du terrain et des usages réels.',
      'Alliance entre technique, ergonomie et observabilité.',
      'Capacité à proposer une amélioration opérationnelle simple mais à fort impact.'
    ],
    impact:
      'Ce projet reflète ma manière de travailler : écouter un besoin réel, concevoir une réponse simple, la rendre utile aux autres et chercher à améliorer l’expérience quotidienne des équipes.',
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
      'Un script pour automatiser le remplissage du Compte Rendu d’Activité à partir des e-mails et des horaires d’astreinte.',
    tagline:
      'Supprimer la redondance administrative pour redonner du temps à la vraie valeur ajoutée.',
    accent: 'red',
    coverImage: '/images/projects/cra-automation/cover.jpg',
    heroImage: '/images/projects/cra-automation/hero.jpg',
    stack: ['Script', 'Automatisation', 'Outlook / mails', 'Productivité', 'Traitement de données'],
    context:
      'Le remplissage manuel du Compte Rendu d’Activité est répétitif, chronophage et souvent redondant. Le besoin était d’automatiser une partie de cette tâche à partir d’éléments déjà présents, notamment les e-mails et les créneaux d’astreinte.',
    why: [
      'Éviter une saisie manuelle répétitive.',
      'Réduire le temps passé sur des tâches à faible valeur ajoutée.',
      'Fiabiliser le processus tout en améliorant le confort utilisateur.'
    ],
    how: [
      'Développement d’un script demandant les dates et heures utiles.',
      'Analyse des e-mails pertinents pour reconstruire les éléments attendus.',
      'Automatisation de la production des informations nécessaires au CRA.'
    ],
    what: [
      'Une automatisation pensée pour les externes concernés par cette contrainte.',
      'Un gain de temps sur une activité administrative récurrente.',
      'Une solution pragmatique, centrée sur l’usage réel et la simplicité.'
    ],
    role: [
      'Identification du besoin et de sa redondance.',
      'Conception de la logique d’automatisation.',
      'Développement d’un outil simple, utile et directement exploitable.'
    ],
    highlights: [
      'Projet orienté valeur immédiate et efficacité quotidienne.',
      'Capacité à automatiser un irritant réel.',
      'Approche centrée utilisateur et amélioration du quotidien.'
    ],
    impact:
      'Ce projet montre que j’accorde de l’importance aux gains de temps, à la simplicité et à l’amélioration concrète du travail des autres. J’aime automatiser ce qui est répétitif pour libérer de l’énergie sur des sujets plus utiles.',
    gallery: [
      '/images/projects/cra-automation/gallery-1.jpg',
      '/images/projects/cra-automation/gallery-2.jpg',
      '/images/projects/cra-automation/gallery-3.jpg'
    ]
  }
];
