// canada/lang.js
// Language switcher for Canada pages

const translations = {
  en: {
      'blogHub.hero.h1': 'Ontario Structural Guides & Code Updates',
      'blogHub.hero.desc': 'Practical articles on OBC permits, facade and balcony rehabilitation, temporary works, forensic reporting, and Ontario project delivery.',
      'blogHub.filt.client': 'Client Guide',
      'blogHub.filt.construction': 'Construction Tips',
      'blogHub.filt.green': 'Green Building',
      'blogHub.grid.count': '21 articles',
    // BlogHub new articles (c13–c21)
    'blogHub.c13.rt': '8 min read',
    'blogHub.c13.h3': 'Underpinning in Ontario: Methods, OHSA Requirements & Adjacent Property Rights',
    'blogHub.c13.p': 'When Ontario excavations threaten adjacent building foundations, underpinning is required. Learn the pit, pile, and micropile methods, OHSA obligations, and how disputes with neighbours are handled.',
    'blogHub.c14.rt': '7 min read',
    'blogHub.c14.h3': 'Toronto ePLAN Filing Support: Drawing Standards, Documents & Review Workflow',
    'blogHub.c14.p': "Toronto's ePLAN portal is the filing path for many permit applications. See how Asvakas manages drawings, submission requirements, reviewer comments, and the current review process on your behalf.",
    'blogHub.c15.rt': '8 min read',
    'blogHub.c15.h3': 'Ontario Building Permit Process: Engineer-Led Filing to Occupancy',
    'blogHub.c15.p': 'Overview of how Asvakas coordinates Ontario building permit filings under the Building Code Act — application requirements, municipal review, mandatory inspections, and occupancy or closeout steps.',
    'blogHub.c16.rt': '7 min read',
    'blogHub.c16.h3': 'Tarion New Home Warranty & Structural Engineering Obligations in Ontario',
    'blogHub.c16.p': "Ontario's Tarion warranty includes major structural defect coverage. Learn what qualifies as an MSD, how the claim process works, and when a structural engineer is needed.",
    'blogHub.c17.rt': '8 min read',
    'blogHub.c17.h3': 'CSA Standards in Ontario Structural Engineering: A23.3, S16, O86 & S6 Explained',
    'blogHub.c17.p': 'A practical guide to the CSA standards Ontario structural engineers use for concrete, steel, wood, and bridge design — and how they tie into the current OBC and NBCC adoption path.',
    'blogHub.c18.rt': '7 min read',
    'blogHub.c18.h3': 'OBC Permit Types in Ontario: Building, Conditional, Demolition & Change of Use',
    'blogHub.c18.p': 'A complete guide to Ontario Building Code permit types — when each applies, what drawings and documents are required, and how permit paths vary across Ontario municipalities.',
    'blogHub.c19.rt': '8 min read',
    'blogHub.c19.h3': 'Structural Renovations in Ontario: OBC Compliance, Heritage Buildings & Retrofit Engineering',
    'blogHub.c19.p': 'Structural renovations to existing Ontario buildings require navigating OBC retrofit compliance, heritage designations, and change-of-use requirements. This guide explains the engineering approach.',
    'blogHub.c20.rt': '8 min read',
    'blogHub.c20.h3': 'Seismic Retrofitting in Ontario: NBCC 2020 Triggers, Retrofit Methods & Post-Disaster Buildings',
    'blogHub.c20.p': 'When seismic retrofitting is required in Ontario, how NBCC 2020 seismic provisions apply to existing buildings, and engineering approaches to upgrading unreinforced masonry, concrete frames, and steel buildings.',
    'blogHub.c21.rt': '7 min read',
    'blogHub.c21.h3': 'Structural Peer Review in Ontario: PEO Requirements, Toronto Building Thresholds & Process',
    'blogHub.c21.p': 'When Ontario projects require independent structural peer review, what PEO and Toronto Building Division require, how the two-round review process works, and how to select a qualified reviewer.',
    'brand.eng': 'ENG',
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.engineering': 'Engineering Systems',
    'nav.projects': 'Projects',
    'nav.resources': 'Resources',
    'nav.contactShort': 'Contact',
    'nav.contact': 'Contact Us',
    'hero.tag': 'Ontario Codes, Inspections & Structural Engineering',
    'hero.sub': 'Asvakas supports permit-driven structural work, existing-building assessments, envelope rehabilitation, parking structures, temporary works, and forensic investigations across Ontario and Canada.',
    'hero.cta1': 'Request Assessment',
    'hero.cta2': 'Explore Canada Services',
    'home.about.label': 'About Asvakas',
    'home.about.h2': 'Ontario-focused structural support for existing buildings, permits, and complex site work.',
    'home.about.p': 'We help owners, condo boards, contractors, developers, and public-sector teams with OBC compliance, PEO General Review, envelope rehabilitation, parking structures, temporary works, and forensic engineering.',
    'home.about.cta': 'View Canada Services',
    'stat.years': 'Years Experience',
    'stat.projects': 'Projects Completed',
    'stat.sat': 'Client Satisfaction',
    'stat.success': 'Success Rate',
    'svc.pill': 'Our Services',
    'svc.h2': 'Ontario-first services for codes, inspections, rehabilitation, and delivery',
    'svc.sub': 'From OBC permit documents and field review to facade restoration, parking garage assessment, temporary works, and forensic reporting, our Canada team is structured around real Ontario project needs.',
    'svc.cat.structural': 'Structural Engineering',
    'svc.01.h': 'Structural Renovation',
    'svc.01.p': 'Alterations, additions, load-bearing wall removals, underpinning, concrete repair, and structural rehabilitation for Ontario buildings.',
    'svc.02.h': 'Structural Design',
    'svc.02.p': 'Permit-ready structural design for steel, concrete, timber, masonry, and mixed systems under OBC, NBC, and CSA standards.',
    'svc.03.h': 'Supervision & Consultancy',
    'svc.03.p': 'Peer review, PEO General Review, field observations, consultant coordination, and condition-based engineering advice.',
    'svc.cat.obc': 'OBC Compliance Inspections',
    'svc.04.h': 'Exterior Building Inspection',
    'svc.04.p': 'OBC Part 11 existing building inspections, condition assessment, and building permit filing.',
    'svc.05.h': 'Parking Structure Assessment',
    'svc.05.p': 'Structural condition surveys, repair planning, and permit documentation for parking structures.',
    'svc.06.h': 'Sidewalk & Exterior Works',
    'svc.06.p': 'Sidewalk inspection, restoration, and repair with safe and code-compliant pedestrian solutions.',
    'svc.cat.temp': 'Temporary Works Engineering',
    'svc.07.h': 'Bridge & Building Erection Plans',
    'svc.07.p': 'Detailed erection staging, sequencing, and structural support design for buildings and bridges.',
    'svc.08.h': 'Water Diversion & Cofferdams',
    'svc.08.p': 'Temporary works engineering for watercourse rerouting, cofferdam design and stabilization.',
    'svc.09.h': 'Bridge Demolition & Removal',
    'svc.09.p': 'Safe, code-compliant bridge dismantling with detailed demolition methodology and logistics.',
    'svc.cat.specialty': 'Specialty Engineering',
    'svc.10.h': 'Roof Repair & Safety',
    'svc.10.p': 'Roof dunnage, safety railings, parapets, bulkhead renovation, and roof system repair.',
    'svc.11.h': 'Anchorage & Connection',
    'svc.11.p': 'Design of concrete anchors, steel/wood connections, brick masonry anchorage systems.',
    'svc.12.h': 'Formwork Design',
    'svc.12.p': 'Slab formwork, sidewalk overhead protection, and renovation formwork engineering.',
    'svc.cat.forensic': 'Forensic Engineering',
    'svc.13.h': 'Forensic Structural Investigation',
    'svc.13.p': 'On-site investigation of structural distress, collapse, or unexpected movement to determine root cause.',
    'svc.14.h': 'Failure Analysis & Expert Reports',
    'svc.14.p': 'Detailed technical analysis of structural failures for insurance claims, legal proceedings, and code compliance disputes.',
    'svc.15.h': 'Expert Witness & Testimony',
    'svc.15.p': 'Professional engineering testimony and expert witness services for construction litigation and arbitration proceedings.',
    'svc.cat.construction': 'Construction Services',
    'svc.16.h': 'Cost Estimation',
    'svc.16.p': 'Accurate quantity takeoffs and cost projections for structural scopes, helping owners and contractors budget with confidence.',
    'svc.17.h': 'Project Scheduling',
    'svc.17.p': 'Comprehensive construction schedules and critical path analysis to keep complex structural projects on track from start to finish.',
    'svc.18.h': 'Construction Administration',
    'svc.18.p': 'On-site engineering oversight and shop drawing review throughout construction to ensure structural compliance.',
    'why.pill': 'Why Ontario Clients Choose Us',
    'why.h2': 'Built for Canadian Approvals and Existing Buildings',
    'why.cta': 'Explore Our Approach →',
    'why.tagline': 'We work at the intersection of code compliance, constructability, and existing-building reality — helping projects move from assessment to permit to site completion.',
    'why.01.h': 'Proven Engineering Quality',
    'why.01.p': 'Strong permit packages, clear scopes, and technically grounded designs for Ontario municipalities and review teams.',
    'why.02.h': 'On-Time Delivery',
    'why.02.p': 'Reports, permit responses, and engineering deliverables managed around construction and municipal deadlines.',
    'why.03.h': 'Safety First Approach',
    'why.03.p': 'Every recommendation is shaped by OBC, CSA standards, OHSA obligations, and occupant/public safety.',
    'why.04.h': 'Modern Engineering Solutions',
    'why.04.p': 'We focus on practical solutions for aging buildings, phased repairs, and tight urban sites.',
    'proj.featured.h2': 'Featured Projects',
    'proj.featured.sub': 'Representative work across facade renewal, mixed-use design, retrofit, and code-driven rehabilitation.',
    'proc.pill': 'How We Deliver',
    'proc.h2': 'Our Ontario Project Workflow',
    'proc.sub': 'A practical sequence built around assessment, approvals, and construction support.',
    'proc.01.h': 'Assess & Scope',
    'proc.01.p': 'We review existing conditions, risks, and municipal triggers so the engineering scope matches the real building and approval path.',
    'proc.02.h': 'Design & Permit',
    'proc.02.p': 'We prepare calculations, drawings, and code responses aligned with OBC, municipal review comments, and contractor coordination.',
    'proc.03.h': 'Review & Support Construction',
    'proc.03.p': 'We stay involved through field review, deficiency follow-up, shop drawing review, and closeout documentation.',
    'test.pill': 'Testimonials',
    'test.h2': 'What Our Clients Say',
    'test.sub': 'Feedback from owners, boards, developers, and contractors who needed practical Ontario engineering support.',
    'test.1.quote': 'Their report was clear enough for the City review and practical enough for our contractor.',
    'test.1.body': 'We moved from condition assessment to permit drawings without losing time because the scope was structured correctly from day one.',
    'test.1.role': 'Condo Board Director, Toronto',
    'test.2.quote': 'They understood both the engineering and the approval process.',
    'test.2.body': 'Their team coordinated permit comments, site issues, and contractor questions with very little friction.',
    'test.2.role': 'Developer Representative, Mississauga',
    'test.3.quote': 'Their temporary works strategy saved us from major delays during excavation and underpinning.',
    'test.3.body': 'The package was detailed, buildable, and accepted quickly by the site team and reviewers.',
    'test.3.role': 'General Contractor, Ontario',
    'test.4.quote': 'They handled code, repair scope, and constructability together instead of in separate silos.',
    'test.4.body': 'Their early review caught issues that would have become costly change orders during the facade work.',
    'test.4.role': 'Property Manager, Hamilton',
    'test.5.quote': 'Their guidance gave our board confidence to prioritize repairs properly.',
    'test.5.body': 'The inspection findings, urgency levels, and next steps were explained in a way non-engineers could actually use.',
    'test.5.role': 'Condominium Board, Ottawa',
    // ...add more keys as needed
  },
  fr: {
    // FAQ PAGE
    'faq.hero.pill': 'Centre d’aide',
    'faq.hero.h1': 'FAQ Génie Structurel — Ontario & Toronto',
    'faq.hero.p': 'Réponses aux questions les plus courantes sur le génie structurel en Ontario — permis CCO, revue PEO, inspections de façade, étaiement, fondations et services d’expert.',
    'faq.meta.pill': 'FAQ',
    'faq.meta.updated': 'Mise à jour avril 2026 · Par Asvakas Engineering',
    'faq.toc.h': 'Aller à un sujet',
    'faq.toc.1': 'Général — Ingénieurs structurels en Ontario',
    'faq.toc.2': 'Code du bâtiment de l’Ontario & Permis',
    'faq.toc.3': 'Revue PEO & Administration',
    'faq.toc.4': 'Fondations, sous-œuvre & étaiement',
    'faq.toc.5': 'Génie judiciaire & expert',
    'faq.toc.6': 'Coûts & Délais',
    'faq.s1.h': 'Général — Ingénieurs structurels en Ontario',
    'faq.s1.q1': 'Que fait un ingénieur structurel en Ontario ?',
    'faq.s1.a1': 'Un ingénieur structurel en Ontario conçoit et évalue les éléments porteurs des bâtiments — fondations, colonnes, poutres, dalles, murs et contreventements. Les P.Eng. inscrits auprès de Professional Engineers Ontario (PEO) scellent les plans pour les permis, effectuent la revue de chantier, rédigent des rapports d’expertise et témoignent en cour.',
    'faq.s1.q2': 'L’ingénierie structurelle est-elle réglementée en Ontario ?',
    'faq.s1.a2': 'Oui. La pratique de l’ingénierie en Ontario est réglementée par la Loi sur les ingénieurs professionnels, administrée par Professional Engineers Ontario (PEO). Toute personne pratiquant l’ingénierie structurelle doit détenir un permis P.Eng. ou exercer sous la supervision requise. Le scellement des plans pour permis exige un P.Eng. en règle.',
    'faq.s1.q3': 'Asvakas Engineering est-elle autorisée à exercer en Ontario ?',
    'faq.s1.a3': 'Oui. Nos dirigeants détiennent des permis P.Eng. en règle et sont autorisés à sceller des plans, déposer auprès des municipalités et fournir des services d’expert partout en Ontario.',
    'faq.s2.h': 'Code du bâtiment de l’Ontario & Permis',
    'faq.s2.q1': 'Qu’est-ce que le Code du bâtiment de l’Ontario (CCO) ?',
    'faq.s2.a1': 'Le CCO est le règlement 332/12 pris en vertu de la Loi sur le bâtiment. Il fixe les exigences minimales pour tous les bâtiments — solidité, sécurité incendie, accessibilité, efficacité énergétique. Il référence les normes CSA (A23.3 béton, S16 acier, O86 bois). Les bâtiments doivent respecter l’édition du CCO en vigueur lors de la demande de permis.',
    'faq.s2.q2': 'Ai-je besoin d’un permis pour des travaux structurels ?',
    'faq.s2.a2': 'Oui, dans la plupart des cas. La Loi sur le bâtiment exige un permis pour toute nouvelle construction, ajout ou modification structurelle — ajout d’étage, modification de murs porteurs, sous-œuvre, etc. Déposez votre demande avec plans scellés auprès de votre municipalité.',
    'faq.s2.q3': 'Quelle est la différence entre le CNB et le CCO ?',
    'faq.s2.a3': 'Le Code national du bâtiment (CNB) est un code modèle sans force de loi. Le CCO est le règlement adopté par l’Ontario, intégrant le CNB et des dispositions propres à l’Ontario. En cas de divergence, le CCO prévaut.',
    'faq.s2.q4': 'Comment obtenir un permis à Toronto ?',
    'faq.s2.a4': 'Le plus sûr est de mandater votre ingénieur ou consultant en permis pour gérer le dépôt selon le système d’admission actuel de Toronto, généralement ePLAN pour la plupart des projets. Asvakas peut préparer les plans scellés, les formulaires et les pièces justificatives, puis coordonner le dépôt et la revue en votre nom.',
    'faq.s3.h': 'Revue PEO & Administration de chantier',
    'faq.s3.q1': 'Qu’est-ce que la revue générale PEO (revue de chantier) ?',
    'faq.s3.a1': 'La revue générale PEO est la visite périodique sur site par l’ingénieur responsable pour vérifier la conformité générale aux plans scellés. Elle est couramment exigée pour les parcours de permis les plus encadrés, notamment les bâtiments de parties 3 et 4 et plusieurs systèmes conçus par ingénieur. À la fin, l’ingénieur remet le certificat de fin de revue requis.',
    'faq.s3.q2': 'Que sont les plans d’atelier et pourquoi l’ingénieur les révise-t-il ?',
    'faq.s3.a2': 'Les plans d’atelier sont des dessins détaillés préparés par les entrepreneurs pour la fabrication. L’ingénieur les révise pour s’assurer qu’ils respectent l’intention des plans scellés. Le tampon signifie « conforme à l’intention » — pas que l’ingénieur garantit la fabrication.',
    'faq.s4.h': 'Fondations, sous-œuvre & étaiement',
    'faq.s4.q1': 'Qu’est-ce que la sous-œuvre et quand est-elle requise ?',
    'faq.s4.a1': 'La sous-œuvre renforce ou approfondit une fondation existante, par exemple si un voisin creuse plus profond, si la fondation est insuffisante ou en cas de tassement. La conception doit être scellée par un P.Eng. et approuvée avant travaux.',
    'faq.s4.q2': 'Quel étaiement est requis pour les excavations ?',
    'faq.s4.a2': 'Le règlement 213/91 exige des plans d’étaiement scellés par un P.Eng. si l’excavation est adjacente à un bâtiment et que le sol ne peut être maintenu en sécurité autrement. Systèmes courants : palplanches, pieux, murs cloués, etc.',
    'faq.s4.q3': 'Quelles sont les exigences d’inspection de façade en Ontario ?',
    'faq.s4.a3': 'Pas de programme provincial, mais le CCO et la Ville de Toronto exigent le maintien en bon état. Des inspections peuvent être ordonnées après signalement de défaillances.',
    'faq.s5.h': 'Génie judiciaire & expert',
    'faq.s5.q1': 'Qu’est-ce que la règle 53.03 pour les experts en Ontario ?',
    'faq.s5.a1': 'La règle 53.03 régit les experts en cour civile : rapport écrit, reconnaissance du devoir d’impartialité, divulgation des intérêts financiers. La Cour suprême a confirmé que l’impartialité est essentielle.',
    'faq.s5.q2': 'Qu’est-ce qu’une enquête structurelle judiciaire ?',
    'faq.s5.a2': 'Une enquête judiciaire détermine la cause d’une défaillance structurelle. Elle inclut : examen des plans, inspection, essais matériaux, analyse et rapport écrit avec recommandations.',
    'faq.s6.h': 'Coûts & Délais',
    'faq.s6.q1': 'Combien coûte un ingénieur structurel en Ontario ?',
    'faq.s6.a1': 'Les honoraires varient selon le type de bâtiment, la complexité, la portée du permis et le niveau d’accompagnement au chantier. Le plus sûr est de demander une proposition adaptée à votre projet plutôt que de s’appuyer sur des fourchettes génériques.',
    'faq.s6.q2': 'Comment démarrer avec Asvakas Engineering ?',
    'faq.s6.a2': 'Contactez-nous via la page contact. Décrivez votre projet, le lieu et l’échéancier, et nous vous indiquerons la prochaine étape d’ingénierie appropriée ainsi que le processus de proposition.',
    'faq.cta.h': 'Vous ne trouvez pas votre question ?',
    'faq.cta.p': 'Contactez directement Asvakas Engineering. Nos ingénieurs P.Eng. examinent votre demande et vous orientent vers la bonne prochaine étape.',
    'faq.cta.btn': 'Poser une question',
    'faq.sidebar.cta.h': 'Besoin d’un P.Eng. en Ontario ?',
    'faq.sidebar.cta.p': 'Ingénieurs structurels titulaires d’un permis PEO pour permis CCO, revue de chantier, expertise et témoignage.',
    'faq.sidebar.cta.btn': 'Contactez-nous →',
    'faq.sidebar.kb.h': 'Base de connaissances',
    // FOOTER
    'footer.sub.heading': 'Abonnez-vous aux mises à jour',
    'footer.sub.text': 'Recevez des actualités CCO et des analyses en génie structurel.',
    'footer.sub.btn': 'S’abonner',
    'footer.col1.h': 'Entreprise',
    'footer.col2.h': 'Réseaux sociaux',
    'footer.col3.h': 'Support',
    'footer.link.home': 'Accueil',
    'footer.link.about': 'À propos',
    'footer.link.services': 'Services',
    'footer.link.projects': 'Projets',
    'footer.link.blog': 'Blogue',
    'footer.link.faq': 'FAQ',
    'footer.link.help': 'Centre d’aide',
    'footer.copy': '© 2026 Asvakas Inc. Tous droits réservés.',
    'footer.privacy': 'Politique de confidentialité & Conditions d’utilisation',
    // ...add more keys as needed
      'blogHub.hero.h1': 'Guides ontariens & mises à jour du CCO',
      'blogHub.hero.desc': 'Articles pratiques sur les permis CCO, la réhabilitation des façades et balcons, les ouvrages temporaires, les rapports judiciaires et la livraison des projets en Ontario.',
      'blogHub.filt.client': 'Guide client',
      'blogHub.filt.construction': 'Conseils construction',
      'blogHub.filt.green': 'Bâtiment durable',
      'blogHub.grid.count': '21 articles',
    // BlogHub nouveaux articles (c13–c21)
    'blogHub.c13.rt': '8 min de lecture',
    'blogHub.c13.h3': 'Sous-œuvre en Ontario : méthodes, exigences de la LSST et droits des propriétés adjacentes',
    'blogHub.c13.p': "Lorsque les excavations en Ontario menacent les fondations des bâtiments voisins, une sous-œuvre est requise. Découvrez les méthodes de fosse, de pieu, de micropieu, les obligations de la LSST et la gestion des litiges de voisinage.",
    'blogHub.c14.rt': '7 min de lecture',
    'blogHub.c14.h3': 'Soutien au dépôt ePLAN Toronto : normes de dessin, documents et déroulement de l’examen',
    'blogHub.c14.p': "Le portail ePLAN de Toronto est la voie de dépôt pour de nombreuses demandes de permis. Découvrez comment Asvakas prend en charge les dessins, les exigences de dépôt, les commentaires des examinateurs et le processus d’examen en vigueur en votre nom.",
    'blogHub.c15.rt': '8 min de lecture',
    'blogHub.c15.h3': 'Processus de permis de construire en Ontario : dépôt encadré jusqu’à l’occupation',
    'blogHub.c15.p': "Aperçu de la façon dont Asvakas coordonne les dépôts de permis en Ontario selon la Loi sur le bâtiment — exigences de la demande, examen municipal, inspections obligatoires et étapes d’occupation ou de clôture.",
    'blogHub.c16.rt': '7 min de lecture',
    'blogHub.c16.h3': 'Garantie Tarion et obligations d’ingénierie structurelle en Ontario',
    'blogHub.c16.p': "La garantie Tarion de l’Ontario offre une couverture MSD de 7 ans. Découvrez ce qui constitue un MSD, le processus de réclamation et quand un ingénieur structurel est requis.",
    'blogHub.c17.rt': '8 min de lecture',
    'blogHub.c17.h3': 'Normes CSA en ingénierie structurelle en Ontario : A23.3, S16, O86 et S6',
    'blogHub.c17.p': "Un guide pratique des normes CSA utilisées par les ingénieurs structurels en Ontario pour le béton, l’acier, le bois et les ponts, et leur lien avec le parcours d’adoption actuel du CCO et du CNBC.",
    'blogHub.c18.rt': '7 min de lecture',
    'blogHub.c18.h3': 'Types de permis CCO en Ontario : construction, conditionnel, démolition et changement d’usage',
    'blogHub.c18.p': "Guide complet des types de permis du Code du bâtiment de l’Ontario — quand chacun s’applique, quels plans et documents sont requis, et comment les parcours de permis varient d’une municipalité à l’autre.",
    'blogHub.c19.rt': '8 min de lecture',
    'blogHub.c19.h3': 'Rénovations structurelles en Ontario : conformité CCO, bâtiments patrimoniaux et ingénierie de réhabilitation',
    'blogHub.c19.p': "Les rénovations structurelles des bâtiments existants en Ontario nécessitent la conformité au CCO, la gestion des désignations patrimoniales et des changements d’usage. Ce guide explique l’approche d’ingénierie.",
    'blogHub.c20.rt': '8 min de lecture',
    'blogHub.c20.h3': 'Renforcement parasismique en Ontario : déclencheurs CNBC 2020, méthodes de réhabilitation et bâtiments post-catastrophe',
    'blogHub.c20.p': "Quand le renforcement parasismique est requis en Ontario, comment les dispositions du CNBC 2020 s’appliquent aux bâtiments existants, et les approches d’ingénierie pour la mise à niveau de la maçonnerie, du béton et de l’acier.",
    'blogHub.c21.rt': '7 min de lecture',
    'blogHub.c21.h3': 'Révision par les pairs en ingénierie structurelle en Ontario : exigences du PEO, seuils de Toronto et processus',
    'blogHub.c21.p': "Quand les projets en Ontario nécessitent une révision structurelle indépendante, ce qu’exigent Professional Engineers Ontario (PEO) et la division du bâtiment de Toronto, comment fonctionne le processus et comment choisir un réviseur qualifié.",
    'brand.eng': 'ENG',
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.services': 'Services',
    'nav.engineering': "Systemes d'ingenierie",
    'nav.projects': 'Projets',
    'nav.resources': 'Ressources',
    'nav.contactShort': 'Contact',
    'nav.contact': 'Contactez-nous',
    'hero.tag': 'Génie structurel à Toronto',
    'hero.sub': 'Asvakas Engineering aide les propriétaires et les promoteurs à réaliser des projets plus sûrs et plus intelligents à travers le Canada.',
    'hero.cta1': 'Demander une évaluation',
    'hero.cta2': 'Explorer les services',
    'home.about.label': 'À propos d’Asvakas',
    'home.about.h2': 'Soutien structurel axé sur l’Ontario pour bâtiments existants, permis et chantiers complexes.',
    'home.about.p': 'Nous accompagnons propriétaires, copropriétés, entrepreneurs, promoteurs et organismes publics pour la conformité au CCO, la revue générale PEO, la réhabilitation d’enveloppe, les stationnements, les ouvrages temporaires et le génie judiciaire.',
    'home.about.cta': 'Voir les services Canada',
    'stat.years': 'Années d’expérience',
    'stat.projects': 'Projets réalisés',
    'stat.sat': 'Satisfaction client',
    'stat.success': 'Taux de réussite',
    'svc.pill': 'Nos services',
    'svc.h2': 'Services axés sur l’Ontario pour codes, inspections, réhabilitation et exécution',
    'svc.sub': 'Des documents de permis CCO et de la revue de chantier à la restauration de façades, l’évaluation de garages, les ouvrages temporaires et les rapports judiciaires, notre équipe Canada répond aux besoins concrets des projets ontariens.',
    'svc.cat.structural': 'Génie structurel',
    'svc.01.h': 'Rénovation structurelle',
    'svc.01.p': 'Transformations, agrandissements, ouvertures dans murs porteurs, sous-œuvre, réparation du béton et réhabilitation structurelle pour bâtiments en Ontario.',
    'svc.02.h': 'Conception structurelle',
    'svc.02.p': 'Conception structurelle prête pour permis en acier, béton, bois, maçonnerie et systèmes mixtes selon le CCO, le CNBC et les normes CSA.',
    'svc.03.h': 'Supervision & Conseil',
    'svc.03.p': 'Révision par les pairs, revue générale PEO, observations de chantier, coordination des consultants et avis d’ingénierie basé sur l’état du bâtiment.',
    'svc.cat.obc': 'Inspections de conformité CCO',
    'svc.04.h': 'Inspection extérieure du bâtiment',
    'svc.04.p': 'Inspections des bâtiments existants selon la partie 11 du CCO, évaluation de l’état et dépôt de permis.',
    'svc.05.h': 'Évaluation des stationnements',
    'svc.05.p': 'Enquêtes sur l’état structurel, planification des réparations et documentation des permis pour les stationnements.',
    'svc.06.h': 'Trottoirs & Travaux extérieurs',
    'svc.06.p': 'Inspection, restauration et réparation des trottoirs avec des solutions piétonnes sûres et conformes au code.',
    'svc.cat.temp': 'Génie des ouvrages temporaires',
    'svc.07.h': 'Plans de montage de ponts & bâtiments',
    'svc.07.p': 'Planification détaillée du montage, séquençage et conception du support structurel pour bâtiments et ponts.',
    'svc.08.h': 'Déviation d’eau & batardeaux',
    'svc.08.p': 'Ingénierie des ouvrages temporaires pour le détournement de cours d’eau, la conception et la stabilisation de batardeaux.',
    'svc.09.h': 'Démolition & enlèvement de ponts',
    'svc.09.p': 'Démantèlement de ponts conforme au code avec méthodologie de démolition détaillée et logistique.',
    'svc.cat.specialty': 'Génie spécialisé',
    'svc.10.h': 'Réparation & sécurité des toits',
    'svc.10.p': 'Dunnage de toit, garde-corps, parapets, rénovation de la superstructure et réparation du système de toiture.',
    'svc.11.h': 'Ancrage & connexion',
    'svc.11.p': 'Conception d’ancrages en béton, connexions acier/bois, systèmes d’ancrage en maçonnerie.',
    'svc.12.h': 'Conception de coffrages',
    'svc.12.p': 'Coffrage de dalles, protection piétonne, et ingénierie de coffrage pour rénovation.',
    'svc.cat.forensic': 'Génie judiciaire',
    'svc.13.h': 'Enquête structurelle judiciaire',
    'svc.13.p': 'Enquête sur place des désordres structurels, effondrements ou mouvements inattendus pour déterminer la cause.',
    'svc.14.h': 'Analyse des défaillances & rapports d’expert',
    'svc.14.p': 'Analyse technique détaillée des défaillances structurelles pour les réclamations d’assurance, procédures judiciaires et litiges de conformité.',
    'svc.15.h': 'Témoignage & expertise',
    'svc.15.p': 'Témoignage d’ingénieur professionnel et services d’expert pour les litiges et arbitrages en construction.',
    'svc.cat.construction': 'Services de construction',
    'svc.16.h': 'Estimation des coûts',
    'svc.16.p': 'Quantitatifs précis et projections de coûts pour les lots structurels, aidant propriétaires et entrepreneurs à budgéter en toute confiance.',
    'svc.17.h': 'Planification de projet',
    'svc.17.p': 'Plannings de construction complets et analyse du chemin critique pour garder les projets structurels complexes sur la bonne voie.',
    'svc.18.h': 'Administration de la construction',
    'svc.18.p': 'Supervision d’ingénierie sur site et revue des plans d’atelier pour garantir la conformité structurelle.',
    'why.pill': 'Pourquoi les clients ontariens nous choisissent',
    'why.h2': 'Conçu pour les approbations canadiennes et les bâtiments existants',
    'why.cta': 'Voir notre approche →',
    'why.tagline': 'Nous travaillons au croisement de la conformité au code, de la constructibilité et des réalités des bâtiments existants afin de faire avancer les projets de l’évaluation jusqu’au chantier.',
    'why.01.h': 'Qualité d’ingénierie éprouvée',
    'why.01.p': 'Dossiers de permis solides, mandats clairs et conceptions techniquement rigoureuses pour les municipalités ontariennes et les équipes de révision.',
    'why.02.h': 'Livraison à temps',
    'why.02.p': 'Rapports, réponses aux commentaires et livrables techniques gérés en fonction des échéances municipales et du chantier.',
    'why.03.h': 'Approche sécurité avant tout',
    'why.03.p': 'Chaque recommandation est façonnée par le CCO, les normes CSA, les obligations LSST et la sécurité des occupants et du public.',
    'why.04.h': 'Solutions d’ingénierie modernes',
    'why.04.p': 'Nous privilégions des solutions pratiques pour les bâtiments vieillissants, les réparations phasées et les sites urbains contraints.',
    'proj.featured.h2': 'Projets à la une',
    'proj.featured.sub': 'Exemples représentatifs de réfection de façades, conception à usage mixte, réhabilitation et interventions dictées par le code.',
    'proc.pill': 'Notre méthode de livraison',
    'proc.h2': 'Notre workflow de projet en Ontario',
    'proc.sub': 'Une séquence pratique construite autour de l’évaluation, des approbations et du soutien au chantier.',
    'proc.01.h': 'Évaluer & cadrer',
    'proc.01.p': 'Nous analysons l’existant, les risques et les déclencheurs municipaux afin que la portée d’ingénierie corresponde au vrai bâtiment et au bon parcours d’approbation.',
    'proc.02.h': 'Concevoir & obtenir le permis',
    'proc.02.p': 'Nous préparons calculs, dessins et réponses au code en phase avec le CCO, les commentaires municipaux et la coordination des entrepreneurs.',
    'proc.03.h': 'Réviser & soutenir le chantier',
    'proc.03.p': 'Nous restons impliqués par la revue de chantier, le suivi des déficiences, la revue des plans d’atelier et la documentation de clôture.',
    'test.pill': 'Témoignages',
    'test.h2': 'Ce que disent nos clients',
    'test.sub': 'Retours de propriétaires, conseils de copropriété, promoteurs et entrepreneurs ayant eu besoin d’un soutien d’ingénierie pratique en Ontario.',
    'test.1.quote': 'Leur rapport était assez clair pour l’examen municipal et assez pratique pour notre entrepreneur.',
    'test.1.body': 'Nous sommes passés de l’évaluation de l’état aux dessins de permis sans perdre de temps parce que la portée était bien structurée dès le départ.',
    'test.1.role': 'Administratrice de copropriété, Toronto',
    'test.2.quote': 'Ils maîtrisaient à la fois l’ingénierie et le processus d’approbation.',
    'test.2.body': 'Leur équipe a géré les commentaires de permis, les enjeux de chantier et les questions des entrepreneurs avec très peu de friction.',
    'test.2.role': 'Représentant du promoteur, Mississauga',
    'test.3.quote': 'Leur stratégie d’ouvrages temporaires nous a évité de gros retards lors de l’excavation et du sous-œuvre.',
    'test.3.body': 'Le dossier était détaillé, réalisable et rapidement accepté par l’équipe de chantier et les réviseurs.',
    'test.3.role': 'Entrepreneur général, Ontario',
    'test.4.quote': 'Ils traitaient ensemble le code, la portée de réparation et la constructibilité plutôt que séparément.',
    'test.4.body': 'Leur revue précoce a permis de détecter des problèmes qui seraient devenus des changements coûteux pendant les travaux de façade.',
    'test.4.role': 'Gestionnaire immobilier, Hamilton',
    'test.5.quote': 'Leur accompagnement a donné confiance à notre conseil pour hiérarchiser correctement les réparations.',
    'test.5.body': 'Les constats d’inspection, les niveaux d’urgence et les prochaines étapes ont été présentés d’une manière réellement exploitable pour des non-ingénieurs.',
    'test.5.role': 'Conseil de copropriété, Ottawa',
    // ...add more keys as needed
  }
};

const LANGUAGE_STORAGE_KEY = 'asvakas-canada-lang';
const SUPPORTED_LANGS = ['en', 'fr'];
const translationAliases = {
  'footer.col.company': 'footer.col1.h',
  'footer.col.social': 'footer.col2.h',
  'footer.sub': 'footer.sub.text',
  'footer.sub.h': 'footer.sub.heading'
};

function normalizeLang(lang) {
  return SUPPORTED_LANGS.includes(lang) ? lang : 'en';
}

function extendTranslations() {
  Object.entries(translations).forEach(([lang, table]) => {
    Object.entries(translationAliases).forEach(([aliasKey, sourceKey]) => {
      if (!table[aliasKey] && table[sourceKey]) {
        table[aliasKey] = table[sourceKey];
      }
    });

    if (!table['footer.link.process']) {
      table['footer.link.process'] = lang === 'fr' ? 'Processus' : 'Process';
    }
  });
}

function getTranslation(lang, key) {
  const table = translations[lang] || {};
  return table[key] || table[translationAliases[key]];
}

function getContentTarget(el) {
  if (
    el.children.length === 1 &&
    el.childNodes.length === 1 &&
    el.firstElementChild &&
    el.firstElementChild.tagName === 'A'
  ) {
    return el.firstElementChild;
  }

  return el;
}

function rememberDefaultContent() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const target = getContentTarget(el);
    if (!el.dataset.i18nDefaultHtml) {
      el.dataset.i18nDefaultHtml = target.innerHTML;
    }
  });
}

function updateLangSwitcher(lang) {
  document.querySelectorAll('.lang-switcher-btn').forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle('active', isActive);
    btn.setAttribute('aria-pressed', String(isActive));
  });
}

function updateProjectLanguage(lang) {
  if (!Array.isArray(window.projectDataDefault) && Array.isArray(window.projectData)) {
    window.projectDataDefault = window.projectData;
  }

  if (lang === 'fr' && Array.isArray(window.projectDataFR) && window.projectDataFR.length) {
    window.projectData = window.projectDataFR;
  } else if (Array.isArray(window.projectDataDefault) && window.projectDataDefault.length) {
    window.projectData = window.projectDataDefault;
  }

  if (typeof window.goToSlideForce === 'function') {
    const index = typeof window.getCurrentSlideIndex === 'function' ? window.getCurrentSlideIndex() : 0;
    window.goToSlideForce(index);
  }
}

function applySelectorTranslations(lang) {
  const mainNavLabels =
    lang === 'fr'
      ? ['Accueil', 'À propos', 'Services', 'Systèmes d’ingénierie', 'Projets', 'Ressources', 'Contact']
      : ['Home', 'About', 'Services', 'Engineering Systems', 'Projects', 'Resources', 'Contact'];

  document.querySelectorAll('.main-nav a').forEach((link, index) => {
    if (mainNavLabels[index] && !link.hasAttribute('data-i18n')) {
      link.textContent = mainNavLabels[index];
    }
  });

  const brandEng = document.querySelector('.brand .brand-eng');
  if (brandEng && !brandEng.closest('[data-i18n]')) {
    brandEng.textContent = 'ENG';
  }

  const regionLabel = document.querySelector('.region-picker .rp-label');
  if (regionLabel) {
    regionLabel.textContent = 'Canada';
  }

  const siteFooter = document.querySelector('.site-footer');
  if (siteFooter) {
    const brandText = siteFooter.querySelector('.footer-brand p');
    if (brandText) {
      brandText.textContent =
        lang === 'fr'
          ? 'Ingénierie structurelle pour l’Ontario — titulaires d’un permis P.Eng., conformes au CCO, avec une qualité livrée dans la GTA et partout dans la province.'
          : 'Structural engineering for Ontario — P.Eng.-licensed, OBC-compliant, delivering quality across the GTA and province-wide.';
    }

    const footerHeadings = siteFooter.querySelectorAll('.footer-links h5');
    if (footerHeadings[0]) footerHeadings[0].textContent = lang === 'fr' ? 'Services' : 'Services';
    if (footerHeadings[1]) footerHeadings[1].textContent = lang === 'fr' ? 'Ressources' : 'Resources';

    const footerLists = siteFooter.querySelectorAll('.footer-links ul');
    if (footerLists[0]) {
      const items = footerLists[0].querySelectorAll('a');
      const labels = lang === 'fr'
        ? ['Génie structurel', 'Inspections', 'Génie judiciaire', 'Ouvrages temporaires']
        : ['Structural Engineering', 'Inspections', 'Forensic Engineering', 'Temporary Works'];
      items.forEach((item, index) => {
        if (labels[index]) item.textContent = labels[index];
      });
    }
    if (footerLists[1]) {
      const items = footerLists[1].querySelectorAll('a');
      const labels = lang === 'fr'
        ? ['Blogue', 'FAQ', 'Contact']
        : ['Blog', 'FAQ', 'Contact'];
      items.forEach((item, index) => {
        if (labels[index]) item.textContent = labels[index];
      });
    }

    const legal = siteFooter.querySelector('.footer-bottom p');
    if (legal) {
      const link = legal.querySelector('a');
      const href = link ? link.getAttribute('href') : '#';
      legal.innerHTML =
        lang === 'fr'
          ? `&copy; 2026 Asvakas Inc. Tous droits réservés. | <a href="${href}">Politique de confidentialité</a>`
          : `&copy; 2026 Asvakas Inc. All rights reserved. | <a href="${href}">Privacy Policy</a>`;
    }
  }
}

function applyLang(lang) {
  const nextLang = normalizeLang(lang);

  rememberDefaultContent();

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const target = getContentTarget(el);
    const translated = getTranslation(nextLang, key);
    target.innerHTML = translated || el.dataset.i18nDefaultHtml || target.innerHTML;
  });

  document.querySelectorAll('[data-i18n-ph]').forEach((el) => {
    const key = el.getAttribute('data-i18n-ph');
    const translated = getTranslation(nextLang, key);
    if (!el.dataset.i18nDefaultPlaceholder) {
      el.dataset.i18nDefaultPlaceholder = el.getAttribute('placeholder') || '';
    }
    el.setAttribute('placeholder', translated || el.dataset.i18nDefaultPlaceholder);
  });

  document.documentElement.lang = nextLang;
  localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLang);
  applySelectorTranslations(nextLang);
  updateLangSwitcher(nextLang);
  updateProjectLanguage(nextLang);
  window.dispatchEvent(new CustomEvent('asvakas:langchange', { detail: { lang: nextLang } }));
}

function createSwitcherButton(lang, activeLang) {
  const button = document.createElement('button');
  const label = lang.toUpperCase();
  const isActive = lang === activeLang;

  button.type = 'button';
  button.className = 'lang-switcher-btn' + (isActive ? ' active' : '');
  button.dataset.lang = lang;
  button.textContent = label;
  button.setAttribute('aria-label', `Switch language to ${label}`);
  button.setAttribute('aria-pressed', String(isActive));
  button.addEventListener('click', () => applyLang(lang));

  return button;
}

function ensureLanguageSwitcher(initialLang) {
  const headerInner = document.querySelector('.header-inner');
  if (!headerInner || headerInner.querySelector('.lang-switcher')) {
    return;
  }

  const regionPicker = headerInner.querySelector('.region-picker');
  const wrapperCandidate =
    regionPicker && regionPicker.parentElement && regionPicker.parentElement !== headerInner
      ? regionPicker.parentElement
      : null;

  const controlsHost = wrapperCandidate || document.createElement('div');
  controlsHost.classList.add('header-controls');

  if (!wrapperCandidate) {
    if (regionPicker) {
      headerInner.insertBefore(controlsHost, regionPicker);
      controlsHost.appendChild(regionPicker);
    } else {
      headerInner.insertBefore(controlsHost, headerInner.querySelector('.nav-toggle') || null);
    }
  }

  const switcher = document.createElement('div');
  switcher.className = 'lang-switcher';
  switcher.setAttribute('role', 'group');
  switcher.setAttribute('aria-label', 'Language switcher');
  switcher.appendChild(createSwitcherButton('en', initialLang));
  switcher.appendChild(createSwitcherButton('fr', initialLang));

  if (regionPicker && regionPicker.parentElement === controlsHost) {
    controlsHost.insertBefore(switcher, regionPicker);
  } else {
    controlsHost.prepend(switcher);
  }
}

function getInitialLanguage() {
  const saved = localStorage.getItem(LANGUAGE_STORAGE_KEY);
  if (SUPPORTED_LANGS.includes(saved)) {
    return saved;
  }

  const browserLanguage = (navigator.language || '').toLowerCase();
  return browserLanguage.startsWith('fr') ? 'fr' : 'en';
}

extendTranslations();

Object.assign(translations.en, {
  'help.hero.search.ph': 'Search guides (e.g. OBC, OHSA, formwork)…',
  'hero.tag': 'Ontario permits, existing buildings, and structural engineering',
  'hero.line1': 'Structural, forensic, and rehabilitation engineering for Ontario projects.',
  'hero.line2': 'Permits, existing buildings, temporary works, and restoration.',
  'hero.sub': 'Asvakas helps owners, contractors, and consultants move from early assessment to permit review and field support across Ontario.',
  'contact.intro.pill': 'Contact',
  'contact.intro.h1': 'Start Your Project Conversation',
  'contact.intro.sub': 'Share the scope, site conditions, or timeline and we will help define the right structural path forward for your Ontario project.',
  'contact.intro.cta1': 'Start a Project Inquiry',
  'contact.intro.cta2': 'Review Canada Services',
  'contact.intro.note1': 'Toronto-based support for permits, repairs, and compliance',
  'contact.intro.note2': 'Fast scoping for existing buildings and active construction',
  'contact.intro.note3': 'Clear next steps from first inquiry to engineering response',
  'contact.intro.card.label': 'Office Snapshot',
  'contact.intro.card.h2': 'Focused structural support for Ontario permits, field conditions, and ongoing project work.',
  'contact.intro.card.p': 'Use this page to start a project inquiry, request proposal support, or share a site issue that needs engineering input.',
  'contact.intro.meta1.h': 'Prompt response',
  'contact.intro.meta1.p': 'typical response window',
  'contact.intro.meta2.h': 'Toronto office',
  'contact.intro.meta2.p': 'serving Ontario project work',
  'contact.intro.meta3.h': 'Permit to site',
  'contact.intro.meta3.p': 'support across design, review, and coordination',
  'contact.map.h2': 'Toronto Office',
  'contact.panel.h2': 'Project Details',
  'contact.panel.p': 'Send the essentials and we will route your inquiry to the right engineer for the next step.'
});

Object.assign(translations.fr, {
  'nav.engineering': 'Systèmes d’ingénierie',
  'hero.tag': 'Permis ontariens, bâtiments existants et génie structurel',
  'hero.line1': 'Génie structurel, médico-légal et de réhabilitation pour les projets en Ontario.',
  'hero.line2': 'Permis, bâtiments existants, ouvrages temporaires et restauration.',
  'hero.sub': 'Asvakas aide propriétaires, entrepreneurs et consultants à passer de l’évaluation initiale à la revue de permis et au soutien de chantier partout en Ontario.',

  'help.breadcrumb.home': 'Accueil',
  'help.breadcrumb.current': 'Centre d’aide',
  'help.hero.pill': 'Centre d’aide',
  'help.hero.h1': 'Centre d’aide en génie structurel — Ontario',
  'help.hero.p': 'Guides, explications et réponses pour chaque étape du génie structurel en Ontario : dépôts de permis CBO, revue générale PEO, étaiement et ouvrages temporaires, enquêtes judiciaires, services d’expert, Loi sur la construction de l’Ontario et adjudication ODACC.',
  'help.hero.search.ph': 'Rechercher des guides (ex. CBO, LSST, coffrage)…',
  'help.hero.search.btn': 'Rechercher',
  'help.card.common.guides5': '5 guides',
  'help.card.common.guides6': '6 guides',
  'help.card.common.explore': 'Explorer →',
  'help.card.1.kicker': 'Démarrage',
  'help.card.1.h3': 'Pour bien commencer',
  'help.card.1.p': 'Mandater un P.Eng., comprendre les exigences de la PEO, savoir à quoi s’attendre et découvrir notre manière de travailler partout en Ontario et dans la GTA.',
  'help.card.1.li1': 'Attentes liées au permis PEO et au sceau',
  'help.card.1.li2': 'Portée, honoraires et planification des premières étapes',
  'help.card.2.kicker': 'Processus de permis',
  'help.card.2.h3': 'Permis et dépôts CBO',
  'help.card.2.p': 'Dépôts de permis selon le Code du bâtiment de l’Ontario, partie 9 ou partie 3, coordination ePLAN et gestion de la revue par Asvakas.',
  'help.card.2.li1': 'Parcours du permis, stratégie de dépôt et coordination de la revue municipale',
  'help.card.2.li2': 'Prise en charge ePLAN à Toronto par notre équipe de permis',
  'help.card.3.kicker': 'Revue de chantier',
  'help.card.3.h3': 'Revue générale PEO et administration',
  'help.card.3.p': 'Étapes de revue de chantier, revue des plans d’atelier, certificat final annexe 2 division C et permis d’occupation.',
  'help.card.3.li1': 'Étapes d’administration de la construction et d’observation du site',
  'help.card.3.li2': 'Plans d’atelier, certificats de clôture et occupation',
  'help.card.4.kicker': 'Sous le niveau du sol',
  'help.card.4.h3': 'Fondations et travaux de site',
  'help.card.4.p': 'Sous-oeuvre, étaiement selon la LSST, suivi des excavations et rapports géotechniques.',
  'help.card.4.li1': 'Séquence de sous-oeuvre et protection des voisins',
  'help.card.4.li2': 'Soutènement, surveillance et coordination des sols',
  'help.card.5.kicker': 'Soutien chantier',
  'help.card.5.h3': 'Ouvrages temporaires en Ontario',
  'help.card.5.p': 'Coffrage, plans de montage, permis de batardeau, plans de démolition et contreventement temporaire.',
  'help.card.5.li1': 'Coffrage, phasage et conditions temporaires conçues',
  'help.card.5.li2': 'Planification des risques de montage, démolition et contreventement',
  'help.card.6.kicker': 'Risque projet',
  'help.card.6.h3': 'Loi sur la construction de l’Ontario',
  'help.card.6.p': 'Paiement rapide, privilèges de construction, adjudication ODACC, retenue légale et droits de paiement de l’ingénieur.',
  'help.card.6.li1': 'Délais de paiement, retenues et exposition aux privilèges',
  'help.card.6.li2': 'Flux d’adjudication et documentation des différends',
  'help.card.7.kicker': 'Enquêtes',
  'help.card.7.h3': 'Génie judiciaire',
  'help.card.7.p': 'Enquêtes structurelles, réclamations d’assurance, défauts de construction, garantie Tarion et preuve d’expert selon la règle 53.03.',
  'help.card.7.li1': 'Analyse de défaillance, documentation des dommages et soutien aux réclamations',
  'help.card.7.li2': 'Tarion, revue des défauts et parcours de preuve d’expert',
  'help.card.8.kicker': 'Systèmes et réhabilitation',
  'help.card.8.h3': 'Ingénierie spécialisée',
  'help.card.8.p': 'Ancrages de sécurité de toiture, ancrages postinstallés, renforcement parasismique et revêtements.',
  'help.card.8.li1': 'Ancrages, attaches spécialisées et détails de réhabilitation',
  'help.card.8.li2': 'Revêtements, systèmes de sécurité et mise à niveau sismique',
  'help.section.1.h2': 'Démarrer en Ontario',
  'help.section.2.h2': 'Permis et dépôts CBO',
  'help.section.3.h2': 'Revue générale PEO et administration de la construction',
  'help.section.4.h2': 'Fondations et travaux de site en Ontario',
  'help.section.5.h2': 'Ouvrages temporaires — Ontario',
  'help.section.6.h2': 'Loi sur la construction de l’Ontario et paiements',
  'help.section.7.h2': 'Génie judiciaire en Ontario',
  'help.section.8.h2': 'Ingénierie spécialisée en Ontario',
  'help.banner.h3': 'Vous ne trouvez pas ce que vous cherchez ?',
  'help.banner.p': 'Nos P.Eng. agréés répondent à toutes les demandes de projet dans un délai de 1 à 2 jours ouvrables.',
  'help.banner.cta': 'Nous contacter →',
  'help.bottom.faq': 'Voir notre FAQ Ontario complète →',
  'help.bottom.blog': 'Parcourir tous les articles Ontario →',

  'blog.pill': 'Articles en vedette',
  'blog.h2': 'Analyses, guides et mises à jour du code en Ontario',
  'blog.sub': 'Explorez notre bibliothèque croissante sur les permis CCO, les bâtiments existants, la réhabilitation, les ouvrages temporaires et la livraison des projets en Ontario.',
  'blog.1.pill': 'Permis',
  'blog.1.h3': 'Guide du processus de permis de construire en Ontario',
  'blog.1.time': '8 min de lecture',
  'blog.2.pill': 'Façades',
  'blog.2.h3': 'Inspections de façades et obligations des propriétaires en Ontario',
  'blog.2.time': '7 min de lecture',
  'blog.3.pill': 'Ouvrages temporaires',
  'blog.3.h3': 'Ingénierie des ouvrages temporaires en Ontario',
  'blog.3.time': '8 min de lecture',

  'about.hero.label': 'À propos d’Asvakas',
  'about.hero.h1': 'Des ingénieurs engagés<br>pour l’excellence canadienne',
  'about.hero.p': 'Intégrité structurelle, conformité au CCO et résultats durables pour chaque projet partout au Canada.',
  'about.hero.cta1': 'Voir les projets Canada',
  'about.hero.cta2': 'Parler à notre équipe',
  'about.hero.note1': 'Ingénierie structurelle axée sur l’Ontario',
  'about.hero.note2': 'Conformité au CCO, réhabilitation et permis',
  'about.hero.note3': 'Coordination de l’évaluation jusqu’au chantier',
  'about.hero.card.kicker': 'Aperçu du cabinet',
  'about.hero.card.h2': 'Bâtiments existants, approbations et soutien concret à la livraison.',
  'about.hero.card.p': 'Notre équipe Canada se concentre sur la conformité au CCO, la réhabilitation des bâtiments et une coordination d’ingénierie pratique qui tient la route du premier examen jusqu’à la construction.',
  'about.stats.label': 'Nos chiffres',
  'about.stats.h2': 'Notre parcours reflète notre <span class="accent">engagement</span> envers la qualité, la sécurité et la satisfaction des clients',
  'about.stats.years': 'Années d’expérience cumulée',
  'stat.proj': 'Projets livrés',
  'about.story.label': 'Notre histoire',
  'about.story.h2': 'Une nouvelle entreprise, des décennies de savoir-faire',
  'about.story.p1': 'Asvakas Inc. a été fondée sur une idée simple : les clients méritent un talent d’ingénierie de haut niveau sans les frais généraux des grandes firmes. Notre direction apporte des décennies d’expérience en conception structurelle, inspections de conformité au CCO et ouvrages temporaires, maintenant mises en œuvre dans une pratique agile et centrée sur le client.',
  'about.story.p2': 'Nous accompagnons propriétaires, entrepreneurs, promoteurs et municipalités depuis notre bureau de Toronto en livrant une ingénierie conforme au code et conçue pour durer. Nous sommes inscrits auprès de Professional Engineers Ontario (PEO).',
  'about.val1.h': 'Engagement envers les clients',
  'about.val1.p': 'Les bâtiments solides commencent par des relations solides. Nous privilégions la confiance, une communication claire et le respect de nos engagements.',
  'about.val2.h': 'Intégrité dans chaque détail',
  'about.val2.p': 'Nous travaillons avec honnêteté et rigueur, en assurant qualité et transparence du début à la fin.',
  'about.val3.h': 'Portés par l’innovation',
  'about.val3.p': 'Nous adoptons des technologies intelligentes et des méthodes durables pour améliorer l’efficacité et les résultats.',
  'about.intro.pill': 'Notre introduction',
  'about.intro.h2': 'Découvrez notre façon de construire',
  'about.intro.p': 'Voyez comment nos projets prennent vie, des plans jusqu’au chantier, et la passion qui guide chaque mandat.',
  'about.team.label': 'Notre équipe',
  'about.team.h2': 'Rencontrez l’équipe',
  'about.team.sub': 'Des ingénieurs structurels chevronnés avec une expertise approfondie en conformité au CCO et en défis structurels complexes partout au Canada.',
  'about.proj.label': 'Projets',
  'about.proj.h2': 'Notre travail réel sur le terrain',
  'about.proj.p': 'Découvrez quelques-unes de nos réalisations et transformations les plus marquantes partout au Canada.',
  'about.proj.btn': 'Voir plus de projets →',
  'about.mini.h2': 'Prêt à travailler avec notre équipe ?',
  'about.mini.p': 'De la conformité au CCO à la conception structurelle complète, nos ingénieurs prépareront un plan adapté à votre échéancier.',
  'about.mini.btn': 'Commencer la discussion →',
  'engsys.hero.eyebrow': 'Systèmes d’ingénierie',
  'engsys.hero.h1': 'Conseil en systèmes d’ingénierie axé sur l’Ontario pour les assemblages, interfaces et conditions spécialisées.',
  'engsys.hero.p': 'Cette page rassemble les sujets techniques côté Canada qui se situent entre l’intention de conception, la conformité au code, la réhabilitation, la constructibilité et la performance continue du bâtiment.',
  'engsys.hero.cta1': 'Discuter de votre projet',
  'engsys.hero.cta2': 'Voir les services Canada',
  'engsys.hero.panel.h2': 'Ce que couvre cette page',
  'engsys.hero.panel.li1': 'Systèmes structurels et mandats spécialisés guidés par les permis en Ontario',
  'engsys.hero.panel.li2': 'Enveloppe, restauration, ouvrages temporaires et assemblages sensibles aux conditions de chantier',
  'engsys.hero.panel.li3': 'Chemins clairs vers les services Canada, les guides techniques et les demandes de projet',
  'engsys.hero.panel.li4': 'Questions de système qui demandent un jugement d’ingénierie au-delà du dessin standard',
  'engsys.overview.label': 'Vue d’ensemble',
  'engsys.overview.h2': 'Le travail à l’échelle du système est l’endroit où approbations, détails et conditions réelles de chantier se rencontrent.',
  'engsys.overview.p': 'Les projets ontariens deviennent souvent complexes aux interfaces : réhabilitation de balcon liée à l’enveloppe, ouvrages temporaires liés au séquençage actif, patrimoine combiné aux interventions modernes, ou réparations de terrain qui doivent satisfaire à la fois au code et à la constructibilité.',
  'engsys.overview.card': 'Utilisez cette page lorsque le projet exige une ingénierie ciblée autour d’un assemblage, d’une interface, d’une contrainte liée à l’existant ou d’une exigence de construction spécialisée plutôt qu’une portée générale seulement.',
  'engsys.areas.label': 'Domaines système',
  'engsys.areas.h2': 'Sujets de systèmes d’ingénierie côté Canada',
  'engsys.areas.p': 'Ces parcours relient les questions techniques propres à l’Ontario à la bonne page de service ou de connaissance.',
  'engsys.card1.h3': 'Enveloppe et restauration extérieure',
  'engsys.card1.p': 'Réparation de façades, conditions de balcons, planification de réhabilitation et interventions structurelles sensibles à l’enveloppe.',
  'engsys.card2.h3': 'Ingénierie des ouvrages temporaires',
  'engsys.card2.p': 'Étaiement, coffrage, séquençage, montage et soutien au chantier selon les conditions de site en Ontario.',
  'engsys.card3.h3': 'Ouvertures et modifications de bâtiment',
  'engsys.card3.p': 'Découpes structurelles, revue des ouvertures, transformations et conditions de réhabilitation dans les bâtiments existants.',
  'engsys.card4.h3': 'Sous-œuvre et soutien d’excavation',
  'engsys.card4.p': 'Abaissement de sous-sol, risques pour les propriétés adjacentes, systèmes de soutien et revue structurelle déclenchée par l’excavation.',
  'engsys.card5.h3': 'Analyse judiciaire et des défaillances',
  'engsys.card5.p': 'Enquête sur les causes, rapports d’expert et revue structurelle des désordres, mouvements et dommages.',
  'engsys.card6.h3': 'Connexions, ancrages et ingénierie spécialisée',
  'engsys.card6.p': 'Conditions d’attache, portées spécialisées et détails structurels là où le comportement d’interface est déterminant.',
  'engsys.openTopic': 'Ouvrir le sujet',
  'engsys.why.label': 'Pourquoi c’est important',
  'engsys.why.h2': 'Une meilleure coordination des systèmes réduit les risques avant qu’ils ne deviennent des retards ou des réparations.',
  'engsys.why.p': 'Le conseil ciblé sur les systèmes permet de définir les hypothèses tôt, d’aligner l’ingénierie avec les approbations et de réduire les problèmes évitables liés au séquençage, à l’humidité, à la durabilité, à l’accès et aux inconnues des bâtiments existants.',
  'engsys.why1.h3': 'Alignement des permis',
  'engsys.why1.p': 'Les questions de système influencent souvent la revue municipale, la conformité au CCO et la façon dont la portée est documentée.',
  'engsys.why2.h3': 'Bâtiments existants',
  'engsys.why2.p': 'Les modifications et réparations exigent des approches techniques qui reflètent les réalités et inconnues des structures plus anciennes.',
  'engsys.why3.h3': 'Constructibilité',
  'engsys.why3.p': 'Un travail système bien cadré réduit l’improvisation sur le chantier et garde la coordination des entrepreneurs ancrée dans l’ingénierie.',
  'engsys.why4.h3': 'Durabilité',
  'engsys.why4.p': 'Les enjeux d’enveloppe, d’eau, de corrosion et de compatibilité des réparations doivent être résolus avant que la performance ne se dégrade.',
  'engsys.cta.h2': 'Besoin d’un soutien d’ingénierie pour un enjeu système précis ?',
  'engsys.cta.p': 'Nous pouvons définir la portée, la relier au bon parcours ontarien et faire avancer le projet vers une prochaine étape claire.',
  'engsys.cta.btn1': 'Demander une consultation',
  'engsys.cta.btn2': 'Ouvrir les ressources',
  'resources.hero.eyebrow': 'Ressources',
  'resources.hero.h1': 'Guides de projet ontariens, articles techniques et points de repère pratiques en ingénierie.',
  'resources.hero.p': 'Cette page rassemble les parcours de connaissance côté Canada qui aident propriétaires, conseils, consultants et entrepreneurs à passer d’une question à la bonne action d’ingénierie.',
  'resources.hero.cta1': 'Parcourir les articles',
  'resources.hero.cta2': 'Ouvrir le centre d’aide',
  'resources.hero.panel.h2': 'Ce que vous trouverez',
  'resources.hero.panel.li1': 'Articles de blogue ontariens et guides techniques sensibles au code',
  'resources.hero.panel.li2': 'Parcours du centre d’aide pour permis, revue PEO, étaiement, expertises judiciaires et différends',
  'resources.hero.panel.li3': 'Liens entre contenu éducatif, services et demande de projet',
  'resources.hero.panel.li4': 'Points d’entrée plus clairs qu’une archive d’articles générale',
  'resources.paths.label': 'Parcours de ressources',
  'resources.paths.h2': 'Commencez par le type d’aide dont vous avez besoin',
  'resources.paths.p': 'Cette page garde la structure de connaissance côté Canada claire en séparant la découverte d’articles, les sujets d’aide et le soutien FAQ.',
  'resources.path1.kicker': 'Carrefour d’articles',
  'resources.path1.h3': 'Carrefour des articles Ontario',
  'resources.path1.p': 'Parcourez le blogue Canada par sujet et passez rapidement d’une question technique au bon article.',
  'resources.path1.li1': 'Permis ontariens, réhabilitation et sujets judiciaires',
  'resources.path1.li2': 'Découverte thématique plus claire qu’une archive générique',
  'resources.path1.count': 'Bibliothèque du blogue',
  'resources.path1.link': 'Ouvrir le carrefour du blogue →',
  'resources.path2.kicker': 'Aide guidée',
  'resources.path2.h3': 'Centre d’aide',
  'resources.path2.p': 'Utilisez le centre d’aide pour une orientation structurée autour des permis, de la revue PEO, des ouvrages temporaires, des différends et de la livraison du chantier.',
  'resources.path2.li1': 'Parcours étape par étape plutôt qu’articles isolés',
  'resources.path2.li2': 'Meilleur point de départ pour les questions d’approbation et de processus',
  'resources.path2.count': 'Guides structurés',
  'resources.path2.link': 'Ouvrir le centre d’aide →',
  'resources.path3.kicker': 'Réponses rapides',
  'resources.path3.h3': 'FAQ Ontario',
  'resources.path3.p': 'Obtenez rapidement des réponses aux questions courantes sur l’ingénierie structurelle, les permis, le code et la livraison de projet.',
  'resources.path3.li1': 'Questions fréquentes pour propriétaires et consultants',
  'resources.path3.li2': 'Utile lorsque vous avez besoin d’une réponse courte avant d’aller plus loin',
  'resources.path3.count': 'Repérage rapide',
  'resources.path3.link': 'Ouvrir la FAQ →',
  'resources.featured.label': 'Sujets en vedette',
  'resources.featured.h2': 'Principaux thèmes de ressources en Ontario',
  'resources.featured.p': 'Ce sont des points d’entrée courants pour propriétaires, entrepreneurs et consultants qui ont besoin d’orientation avant de cadrer une portée de projet.',
  'resources.card1.kicker': 'Permis',
  'resources.card1.h3': 'Conformité au CCO et orientation sur les permis',
  'resources.card1.p': 'Comprenez les attentes du code en Ontario, les questions de processus de permis et les exigences structurelles liées à la revue.',
  'resources.card1.li1': 'Déclencheurs de permis, documentation et attentes de revue',
  'resources.card1.li2': 'Le meilleur choix pour les questions de parcours d’approbation et de dépôt',
  'resources.card2.kicker': 'Enveloppe',
  'resources.card2.h3': 'Réhabilitation des façades et de l’extérieur',
  'resources.card2.p': 'Explorez les sujets liés aux balcons, façades, restaurations et réparations extérieures associés à la sécurité et à la performance durable.',
  'resources.card2.li1': 'Enjeux de réhabilitation des assemblages extérieurs vieillissants',
  'resources.card2.li2': 'Utile pour conseils de copropriété, gestionnaires et équipes de planification des réparations',
  'resources.card3.kicker': 'Construction',
  'resources.card3.h3': 'Ouvrages temporaires et soutien de chantier',
  'resources.card3.p': 'Étaiement, coffrage, phasage et enjeux de séquençage de chantier qui exigent l’intervention d’un ingénieur.',
  'resources.card3.li1': 'Conditions temporaires qui influencent la sécurité et la séquence',
  'resources.card3.li2': 'Bon point d’entrée pour les besoins de coordination chantier et entrepreneur',
  'resources.card4.kicker': 'Enquêtes',
  'resources.card4.h3': 'Services judiciaires et d’expertise',
  'resources.card4.p': 'Consultez les sujets liés à l’analyse des défaillances, aux enquêtes judiciaires, au soutien d’expert témoin et aux différends.',
  'resources.card4.li1': 'Parcours d’analyse de cause, documentation et soutien expert',
  'resources.card4.li2': 'Utile pour réclamations, différends et revues de dommages',
  'resources.card5.kicker': 'Bâtiments existants',
  'resources.card5.h3': 'Bâtiments existants et transformations',
  'resources.card5.p': 'Trouvez des repères sur la rénovation, les ouvertures, la sous-œuvre et les parcours structurels pratiques pour les bâtiments plus anciens.',
  'resources.card5.li1': 'Enjeux d’altération et de réhabilitation liés aux conditions réelles du bâtiment',
  'resources.card5.li2': 'Utile avant de cadrer une réhabilitation ou une modification',
  'resources.card6.kicker': 'Livraison de projet',
  'resources.card6.h3': 'Livraison et administration de projet',
  'resources.card6.p': 'Obtenez une aide pratique sur la revue, la planification, l’administration de chantier et la coordination de projet.',
  'resources.card6.li1': 'Sujets de revue et de coordination au-delà d’un seul article',
  'resources.card6.li2': 'La meilleure voie lorsque l’enjeu traverse approbations et travaux de terrain',
  'resources.card.guide': 'Guide en vedette',
  'resources.card.read': 'Lire le guide →',
  'resources.card6.count': 'Sujets d’aide',
  'resources.card6.link': 'Ouvrir les sujets d’aide →',
  'resources.cta.h2': 'Besoin d’une réponse directe pour votre projet ?',
  'resources.cta.p': 'Utilisez ces ressources pour orienter l’enjeu, puis passez vers la bonne page de service ou contactez notre équipe pour un soutien propre à votre projet.',
  'resources.cta.btn1': 'Contacter Asvakas',
  'resources.cta.btn2': 'Ouvrir les systèmes d’ingénierie',
  'footer.sub.ph': 'Entrez votre adresse courriel',
  'footer.link.resources': 'Ressources',
  'footer.link.contact': 'Contact',

  'contact.intro.pill': 'Contact',
  'contact.intro.h1': 'Lancez la conversation de projet',
  'contact.intro.sub': 'Partagez la portée, les conditions du site ou l’échéancier, et nous vous aiderons à définir la bonne approche structurelle pour votre projet en Ontario.',
  'contact.intro.cta1': 'Lancer une demande de projet',
  'contact.intro.cta2': 'Voir les services Canada',
  'contact.intro.note1': 'Soutien torontois pour permis, réparations et conformité',
  'contact.intro.note2': 'Cadrage rapide pour bâtiments existants et chantiers actifs',
  'contact.intro.note3': 'Des prochaines étapes claires dès la première demande',
  'contact.intro.card.label': 'Aperçu du bureau',
  'contact.intro.card.h2': 'Soutien structurel ciblé pour les permis en Ontario, les conditions de chantier et les projets en cours.',
  'contact.intro.card.p': 'Utilisez cette page pour lancer une demande de projet, demander un appui de proposition ou partager une situation de site qui nécessite un avis d’ingénierie.',
  'contact.intro.meta1.h': 'Réponse rapide',
  'contact.intro.meta1.p': 'fenêtre de réponse habituelle',
  'contact.intro.meta2.h': 'Bureau de Toronto',
  'contact.intro.meta2.p': 'au service des projets en Ontario',
  'contact.intro.meta3.h': 'Permis au chantier',
  'contact.intro.meta3.p': 'soutien en conception, revue et coordination',
  'contact.map.h2': 'Bureau de Toronto',
  'contact.panel.h2': 'Détails du projet',
  'contact.panel.p': 'Envoyez l’essentiel et nous dirigerons votre demande vers le bon ingénieur pour la prochaine étape.',
  'contact.detail.email.h': 'Écrivez-nous',
  'contact.detail.addr.h': 'Adresse',
  'contact.detail.hours.h': 'Heures d’ouverture',
  'contact.detail.hours.p': 'Lundi au vendredi : 8 h 00 à 18 h 00 HNE',
  'contact.form.h2': 'Envoyez-nous un message',
  'contact.form.svc': 'Service requis*',
  'contact.form.fname': 'Prénom*',
  'contact.form.lname': 'Nom*',
  'contact.form.email': 'Adresse courriel*',
  'contact.form.msg': 'Détails supplémentaires / message*',
  'contact.form.send': 'Envoyer le message →',
  'contact.form.success.h': 'Message envoyé !',
  'contact.form.success.p': 'Merci de nous avoir contactés. Nous vous répondrons à <strong>info@asvakas.com</strong> dans un délai d’un jour ouvrable.',
  'contact.map.pill': 'Notre emplacement',
  'contact.map.h2b': 'Trouvez-nous sur la carte',
  'contact.faq.pill': 'FAQ',
  'contact.faq.h2': 'Besoin d’aide avant de construire ?',
  'contact.faq.sub': 'Retrouvez des réponses rapides aux questions les plus fréquentes de nos nouveaux clients comme de nos clients réguliers',
  'contact.faq.q1': 'Quelles régions Asvakas dessert-elle au Canada ?',
  'contact.faq.a1': 'Nous sommes basés à Toronto et servons principalement l’Ontario. Nous acceptons aussi des projets dans d’autres provinces : contactez-nous pour discuter de votre emplacement et de votre portée de projet.',
  'contact.faq.q2': 'Êtes-vous titulaires de permis d’ingénieur professionnel en Ontario ?',
  'contact.faq.a2': 'Oui. Nos ingénieurs structurels détiennent des permis P.Eng. délivrés par Professional Engineers Ontario (PEO) et disposent d’une assurance responsabilité professionnelle adaptée à tous les types de projets.',
  'contact.faq.q3': 'Qu’est-ce qu’une inspection extérieure de bâtiment selon la partie 11 du CCO ?',
  'contact.faq.a3': 'La partie 11 du CCO régit la rénovation et la mise à niveau des bâtiments existants en Ontario. Une inspection extérieure de bâtiment comprend une évaluation de l’état de l’enveloppe, l’identification des conditions dangereuses, une portée de réparation et la documentation requise pour le permis.',
  'contact.faq.q4': 'Combien de temps prend un projet de conception structurelle ?',
  'contact.faq.a4': 'Les délais varient selon la portée. Un dossier résidentiel prend généralement de 2 à 4 semaines. Un projet commercial ou mixte plus important peut prendre de 6 à 12 semaines. Nous présentons des échéanciers clairs dès la consultation initiale.',
  'contact.faq.q5': 'Vous chargez-vous de la soumission du permis de construire ?',
  'contact.faq.a5': 'Oui. Nous préparons tous les dessins, calculs et documents exigés pour la demande municipale de permis de construire et pouvons gérer la soumission ainsi que les réponses aux commentaires de la ville.',
  'contact.faq.q6': 'Pouvez-vous travailler avec notre architecte ou notre entrepreneur actuel ?',
  'contact.faq.a6': 'Absolument. Nous collaborons régulièrement avec des architectes, entrepreneurs généraux, directeurs de construction et gestionnaires immobiliers dans le cadre d’équipes de projet intégrées.',
  'contact.cta.h2': 'Prêt à parler de votre projet ?',
  'contact.cta.p': 'Dites-nous où vous en êtes et ce dont vous avez besoin. Nous vous aiderons à définir les prochaines étapes les plus efficaces.',
  'contact.cta.btn': 'Planifier une discussion →',

  'proj.intro.pill': 'Nos projets',
  'proj.intro.h1': 'Nos projets partout au Canada',
  'proj.intro.sub': 'Découvrez notre portefeuille de projets en génie structurel, des évaluations de l’état des bâtiments et dossiers de permis jusqu’à la conception complète, la réhabilitation et l’accompagnement au chantier partout en Ontario et au Canada.',
  'proj.intro.cta1': 'Voir le portefeuille',
  'proj.intro.cta2': 'Parler d’un projet',
  'proj.intro.point1': 'Permis CCO et coordination de revue de chantier',
  'proj.intro.point2': 'Expertise en bâtiments existants et réhabilitation',
  'proj.intro.point3': 'Soutien d’ingénierie pendant la construction',
  'proj.intro.card.label': 'Aperçu des projets',
  'proj.intro.card.h2': 'Pensé pour les vraies conditions de projet en Ontario.',
  'proj.intro.card.p': 'Notre portefeuille couvre les bâtiments occupés, les projets de réhabilitation, les contraintes de site, les approbations municipales et les mandats structurels qui demandent une coordination soutenue jusqu’à la fin du chantier.',
  'proj.intro.stat1.h': 'Évaluations',
  'proj.intro.stat1.p': 'revues d’état et rapports',
  'proj.intro.stat2.h': 'Réhabilitation',
  'proj.intro.stat2.p': 'mise à niveau et travaux sur bâtiments existants',
  'proj.intro.stat3.h': 'Prêt pour permis',
  'proj.intro.stat3.p': 'conception structurelle et soutien au chantier',
  'proj.rw.pill': 'Nos projets récents',
  'proj.rw1.tag': 'Construction résidentielle',
  'proj.rw1.h2': 'Tour résidentielle de King Street',
  'proj.rw1.p': 'Un immeuble résidentiel de luxe de 16 étages au centre-ville de Toronto comprenant la conception structurelle complète, le dépôt de permis et des systèmes d’étaiement sur mesure pour les structures patrimoniales adjacentes. Livré avant l’échéancier sans élément structurel à reprendre.',
  'proj.rw2.tag': 'Développement commercial',
  'proj.rw2.h2': 'Complexe à usage mixte de Mississauga',
  'proj.rw2.p': 'Un projet à usage mixte de sept étages avec charpente d’acier, noyau en béton et dossier complet de demande de permis. Incluait les spécifications d’inspection extérieure de la partie 11 du CCO et le suivi de chantier jusqu’au couronnement.',
  'proj.rw3.tag': 'Rénovation et réhabilitation',
  'proj.rw3.h2': 'Réhabilitation structurelle d’un immeuble de bureaux sur Yonge Street',
  'proj.rw3.p': 'Analyse et réhabilitation complètes d’une tour de bureaux des années 1970 sur Yonge Street. Portée comprenant remplacement de poutres, renforcement de colonnes et mise à niveau du système d’attaches de façade selon les exigences actuelles du CCO.',
  'proj.rw.btn': 'Se renseigner sur ce projet →',
  'proj.fp.h2': 'Réalisations mises en avant',
  'proj.fp1.h3': 'Évaluation Bay-Adelaide',
  'proj.fp2.h3': 'Programme d’inspection extérieure à Scarborough',
  'proj.fp3.h3': 'Projet à usage mixte à Ottawa',
  'proj.see.btn': 'Voir les détails →',
  'proj.tag.obc': 'CCO Partie 11',
  'proj.tag.mixed': 'Usage mixte',
  'proj.port.pill': 'Notre portefeuille',
  'proj.port.h2': 'Un portefeuille de projets varié',
  'proj.filt.all': 'Tous les projets',
  'proj.filt.inspections': 'Inspections CCO',
  'proj.filt.residential': 'Résidentiel',
  'proj.filt.renovation': 'Rénovation',
  'proj.filt.commercial': 'Commercial',
  'proj.mini.h2': 'Prêt à bâtir quelque chose de remarquable ?',
  'proj.mini.p': 'Parlons de votre projet. Notre équipe livre des solutions d’ingénierie précises pour les projets les plus exigeants du Canada.',
  'proj.mini.btn': 'Démarrer un projet →',

  'svc.intro.pill': 'Nos services',
  'svc.intro.h1': 'Services structurels en Ontario et au Canada',
  'svc.intro.sub': 'Conception structurelle, soutien aux permis CCO, revue générale PEO, ouvrages temporaires, enquêtes judiciaires et réhabilitation de bâtiments existants adaptés aux projets ontariens et aux conditions canadiennes.',
  'svc.intro.cta1': 'Demander une portée Canada',
  'svc.intro.cta2': 'Voir les projets récents',
  'svc.intro.point1': 'Permis CCO, commentaires municipaux et coordination de chantier',
  'svc.intro.point2': 'Expertise en bâtiments existants, réhabilitation et mandats spécialisés',
  'svc.intro.point3': 'Soutien du premier cadrage jusqu’à la livraison au chantier',
  'svc.intro.card.label': 'Aperçu des services',
  'svc.intro.card.h2': 'Pensé pour les projets liés au permis, les bâtiments occupés et la livraison pratique sur site.',
  'svc.intro.card.p': 'Notre offre Canada est structurée autour des vraies décisions que doivent prendre propriétaires, entrepreneurs et consultants en Ontario : approbations, réparations phasées, conditions existantes et soutien de chantier qui fait avancer le projet.',
  'stat.service.areas': 'Domaines de service',
  'svc.s1.cat': '01 — Génie structurel',
  'svc.s1.h2': 'Services structurels<br>essentiels',
  'svc.s1.p': 'Des solutions structurelles de bout en bout pour la construction neuve, la rénovation et les bâtiments existants partout en Ontario et dans les environnements de projet canadiens.',
  'svc.01.li': '<li>Remplacement de poutres et colonnes</li><li>Structure pour ouvertures et ajouts</li><li>Réhabilitation de maçonnerie</li><li>Réparation d’acier et de béton</li>',
  'svc.req.btn': 'Demander ce service →',
  'svc.02.li': '<li>Dossiers structurels pour construction neuve</li><li>Conception de charpentes en acier et béton</li><li>Structures en bois et maçonnerie</li><li>Plans prêts pour le permis</li>',
  'svc.03.li': '<li>Révision par les pairs et vérification indépendante</li><li>Supervision de construction</li><li>Revue générale PEO et rapports de chantier</li><li>Évaluation des dommages et de l’état</li>',
  'svc.s2.cat': '02 — Inspections de conformité au CCO',
  'svc.s2.h2': 'Conformité<br>au code en Ontario',
  'svc.s2.p': 'Ingénierie des enveloppes, stationnements et trottoirs liée aux exigences de permis du CCO, aux rapports d’état et aux obligations des propriétaires en Ontario pour les bâtiments existants.',
  'svc.04.li': '<li>Évaluations périodiques de l’état</li><li>Rapports de conditions dangereuses</li><li>Portée de réparation et suivi</li><li>Dépôt de permis et attestation finale</li>',
  'svc.05.li': '<li>Inspections périodiques</li><li>Évaluation de l’intégrité structurelle</li><li>Rapports de priorisation des réparations</li><li>Permis et conformité</li>',
  'svc.06.li': '<li>Évaluation de dalle et de voûte</li><li>Conception des réparations et dessins</li><li>Coordination avec l’entrepreneur</li><li>Attestation et documentation</li>',
  'svc.s3.cat': '03 — Ingénierie des ouvrages temporaires',
  'svc.s3.h2': 'Ouvrages temporaires<br>et sécurité de site',
  'svc.s3.p': 'Ingénierie détaillée pour chaque phase du chantier, de la séquence de montage et de l’étaiement jusqu’aux batardeaux et à la protection aérienne.',
  'svc.07.li': '<li>Séquences de montage</li><li>Structures de soutien temporaires</li><li>Plans de levage et de gréage</li><li>Analyse des charges de construction</li>',
  'svc.08.li': '<li>Conception structurelle de batardeaux</li><li>Plans de rabattement de nappe</li><li>Diversion de cours d’eau</li><li>Suivi d’installation</li>',
  'svc.09.li': '<li>Rapports de méthodologie de démolition</li><li>Plans de séquence et d’étapes</li><li>Protection environnementale</li><li>Gestion de trafic et de site</li>',
  'svc.s4.cat': '04 — Ingénierie spécialisée',
  'svc.s4.h2': 'Ingénierie spécialisée<br>et de détail',
  'svc.s4.p': 'Des solutions ciblées pour les toitures, les ancrages, les connexions et les coffrages, conformes au CCO/CNBC et conçues pour la performance.',
  'svc.10.li': '<li>Supports et charpentes d’équipements en toiture</li><li>Réparation de parapets et émergences</li><li>Conception de garde-corps de sécurité</li><li>Coordination de l’étanchéité</li>',
  'svc.11.li': '<li>Conception d’ancrages postinstallés</li><li>Détail de connexions en acier</li><li>Systèmes d’ancrage en maçonnerie</li><li>Vérifications sismiques et au vent</li>',
  'svc.12.li': '<li>Conception d’étaiement de dalles et poutres</li><li>Ingénierie d’abris de trottoir</li><li>Systèmes de protection aérienne</li><li>Calculs de charges et de déflexion</li>',
  'svc.s5.cat': '05 — Génie judiciaire',
  'svc.s5.h2': 'Enquêtes<br>et expertise',
  'svc.s5.p': 'Enquêtes techniques, analyse de défaillance et rapports d’expertise pour sinistres, litiges et enjeux de conformité au code.',
  'svc.13.li': '<li>Constat sur site et documentation</li><li>Analyse de cause racine</li><li>Évaluation des dommages structurels</li><li>Rapports techniques</li>',
  'svc.14.li': '<li>Analyse de défaillance</li><li>Rapports d’expert pour assurances</li><li>Documentation pour litige</li><li>Réponse aux enjeux de conformité</li>',
  'svc.15.li': '<li>Rapports d’opinion technique</li><li>Préparation de témoignage</li><li>Soutien aux litiges de construction</li><li>Arbitrage et médiation</li>',
  'svc.s6.cat': '06 — Services de construction',
  'svc.s6.h2': 'Livraison de projet<br>et administration',
  'svc.s6.p': 'Des services de planification, de chiffrage et d’administration pour aider les équipes à livrer les projets structurels avec plus de clarté et moins de risques.',
  'svc.16.li': '<li>Quantités et estimations</li><li>Budgets de portée structurelle</li><li>Vérification des coûts</li><li>Aide à la prise de décision</li>',
  'svc.17.li': '<li>Échéanciers directeurs</li><li>Analyse du chemin critique</li><li>Coordination des séquences</li><li>Suivi des jalons</li>',
  'svc.18.li': '<li>Revue des plans d’atelier</li><li>Suivi des demandes d’information</li><li>Coordination de chantier</li><li>Documentation de clôture</li>',
  'svc.19.h': 'Évaluation de l’état des bâtiments',
  'svc.19.p': 'Évaluations techniques détaillées pour bâtiments existants, acquisitions, réhabilitations et planification des réparations.',
  'svc.19.li': '<li>Évaluations visuelles et techniques</li><li>Rapports de priorisation des réparations</li><li>Documentation de diligence raisonnable</li><li>Planification des immobilisations</li>',
  'svc.20.h': 'Façades et enveloppes',
  'svc.20.p': 'Conception, réhabilitation et résolution de problèmes pour les façades, maçonneries, systèmes d’étanchéité et détails d’enveloppe.',
  'svc.20.li': '<li>Évaluation des façades</li><li>Détails de réhabilitation</li><li>Stratégies de protection contre l’eau</li><li>Coordination de l’enveloppe</li>',
  'svc.21.h': 'Soutien aux structures spéciales',
  'svc.21.p': 'Services ciblés pour structures atypiques, conditions de site complexes et interfaces exigeant une ingénierie sur mesure.',
  'svc.21.li': '<li>Systèmes spécialisés</li><li>Examen de détails complexes</li><li>Coordination sur site contraint</li><li>Appui d’ingénierie ciblé</li>',
  'svc.why.pill': 'Pourquoi choisir Asvakas',
  'svc.why.h2': 'Une ingénierie structurée autour des vrais besoins de projet en Ontario',
  'svc.why.p': 'Nous combinons exigences de code, constructibilité, bâtiments existants et soutien au chantier dans une même portée claire.',
  'svc.why.cta.btn': 'Parler à notre équipe →',
  'svc.mini.h2': 'Besoin d’une portée adaptée à votre projet ?',
  'svc.mini.p': 'Nous pouvons vous aider à définir le bon mandat, le bon niveau de documentation et le bon parcours d’approbation.',
  'svc.mini.btn': 'Demander une consultation →',

  'privacy.pill': 'Informations juridiques',
  'privacy.h1': 'Politique de confidentialité et conditions d’utilisation',
  'privacy.sub': 'Comment nous recueillons, utilisons et protégeons vos renseignements, ainsi que les conditions qui encadrent l’utilisation de notre site Web.',
  'privacy.toc.h': 'Sommaire',
  'privacy.toc.1': 'Renseignements recueillis',
  'privacy.toc.2': 'Utilisation de vos renseignements',
  'privacy.toc.3': 'Partage des renseignements',
  'privacy.toc.4': 'Témoins et suivi',
  'privacy.toc.5': 'Sécurité des données',
  'privacy.toc.6': 'Conservation des données',
  'privacy.toc.7': 'Vos droits',
  'privacy.toc.8': 'Liens vers des tiers',
  'privacy.toc.9': 'Conditions d’utilisation',
  'privacy.toc.10': 'Nous contacter',
  'privacy.s1.h': 'Renseignements que nous recueillons',
  'privacy.s1.p1': 'Nous recueillons les renseignements que vous nous fournissez volontairement lorsque vous nous contactez, soumettez une demande de projet ou vous abonnez à notre infolettre. Cela peut inclure :',
  'privacy.s1.ul': '<li>Nom, adresse courriel et numéro de téléphone</li><li>Nom de l’entreprise et emplacement du projet</li><li>Contenu du message et détails du projet</li><li>Adresse courriel pour l’abonnement à l’infolettre</li>',
  'privacy.s1.p2': 'Nous recueillons aussi automatiquement certaines données techniques lors de votre visite, notamment votre adresse IP, le type de navigateur, les pages visitées et le temps passé sur les pages, au moyen des journaux de serveur standards et d’outils analytiques.',
  'privacy.s2.h': 'Comment nous utilisons vos renseignements',
  'privacy.s2.p1': 'Les renseignements fournis servent uniquement à répondre à vos demandes, à fournir des services d’ingénierie, à envoyer les mises à jour demandées et à améliorer notre site Web. Plus précisément :',
  'privacy.s2.ul': '<li>Répondre aux demandes de projet et aux demandes de prix</li><li>Fournir les services d’ingénierie demandés</li><li>Envoyer des nouvelles ou mises à jour lorsque vous y avez consenti</li><li>Améliorer l’expérience utilisateur et la performance du site</li>',
  'privacy.s2.p2': 'Nous ne vendons pas vos renseignements personnels et ne les utilisons pas à des fins non liées à votre relation avec Asvakas.',
  'privacy.s3.h': 'Partage des renseignements',
  'privacy.s3.p': 'Nous pouvons partager vos renseignements avec des fournisseurs de services de confiance ou des partenaires professionnels uniquement lorsque cela est nécessaire pour exploiter notre site, fournir nos services ou respecter une obligation légale. Nous exigeons de ces tiers qu’ils traitent vos renseignements de manière confidentielle.',
  'privacy.s3.ul': '<li>Fournisseurs d’hébergement et de formulaires de contact</li><li>Outils d’analyse et de suivi des performances</li><li>Conseillers professionnels lorsque requis</li><li>Autorités gouvernementales lorsque la loi l’exige</li>',
  'privacy.s4.h': 'Témoins et technologies de suivi',
  'privacy.s4.p1': 'Notre site peut utiliser des témoins et des technologies similaires pour comprendre l’activité des visiteurs et améliorer ses performances.',
  'privacy.s4.ul': '<li>Témoins essentiels pour le fonctionnement du site</li><li>Témoins analytiques pour mesurer l’utilisation</li><li>Fonctionnalités mémorisant vos préférences, comme la langue</li>',
  'privacy.s4.p2': 'Vous pouvez modifier les paramètres de votre navigateur pour bloquer ou supprimer les témoins, mais certaines fonctions du site pourraient alors être limitées.',
  'privacy.s5.h': 'Sécurité des données',
  'privacy.s5.p': 'Nous mettons en place des mesures administratives, techniques et physiques raisonnables pour protéger vos renseignements contre l’accès non autorisé, l’utilisation abusive ou la divulgation. Aucune méthode de transmission sur Internet n’est toutefois entièrement sécurisée.',
  'privacy.s6.h': 'Conservation des données',
  'privacy.s6.p': 'Nous conservons les renseignements personnels seulement aussi longtemps que nécessaire pour répondre à votre demande, fournir nos services, respecter nos obligations légales et résoudre les différends.',
  'privacy.s7.h': 'Vos droits',
  'privacy.s7.p1': 'Selon les lois applicables, vous pouvez avoir le droit de demander l’accès à vos renseignements personnels, leur correction ou leur suppression.',
  'privacy.s7.ul': '<li>Demander une copie des renseignements que nous détenons</li><li>Faire corriger des renseignements inexacts</li><li>Retirer votre consentement à certaines communications</li><li>Demander la suppression lorsque cela est permis</li>',
  'privacy.s7.p2': 'Pour exercer ces droits, contactez-nous aux coordonnées figurant ci-dessous.',
  'privacy.s8.h': 'Liens vers des tiers',
  'privacy.s8.p': 'Notre site peut contenir des liens vers des sites tiers. Nous ne sommes pas responsables de leurs pratiques de confidentialité ni de leur contenu. Nous vous encourageons à consulter leurs politiques avant de leur fournir des renseignements.',
  'privacy.s9.h': 'Conditions d’utilisation',
  'privacy.s9.p1': 'Le contenu de ce site est fourni à titre informatif général seulement et ne constitue pas un avis professionnel, juridique ou d’ingénierie propre à votre situation.',
  'privacy.s9.ul': '<li>Le contenu peut être modifié sans préavis</li><li>L’utilisation du site se fait à vos propres risques</li><li>Les contenus ne doivent pas être interprétés comme une relation professionnelle</li><li>Tous les textes, graphiques et marques demeurent la propriété d’Asvakas ou de leurs titulaires respectifs</li>',
  'privacy.s9.p2': 'En utilisant ce site, vous acceptez ces conditions et reconnaissez que tout mandat d’ingénierie doit être formalisé séparément par une entente écrite.',
  'privacy.s10.h': 'Nous contacter',
  'privacy.s10.p1': 'Pour toute question concernant cette politique de confidentialité ou ces conditions d’utilisation, veuillez nous contacter via notre page Contact.',
  'privacy.s10.p2': 'Nous pouvons mettre à jour cette page de temps à autre. La date de mise à jour la plus récente figure ci-dessous.',
  'privacy.updated': 'Dernière mise à jour : avril 2026',

  'blogHub.hero.pill': 'Base de connaissances',
  'blogHub.search.ph': 'Rechercher des articles…',
  'blogHub.filt.all': 'Tous les articles de l’Ontario',
  'blogHub.filt.structural': 'Génie structurel',
  'blogHub.filt.inspections': 'Permis et inspections',
  'blogHub.filt.temporary': 'Ouvrages temporaires',
  'blogHub.filt.forensic': 'Génie judiciaire',
  'blogHub.filt.construction2': 'Livraison de chantier',
  'blogHub.filt.specialty': 'Ingénierie spécialisée',
  'blogHub.filt.facade': 'Façades et restauration',
  'blogHub.grid.h': 'Tous les articles',
  'blogHub.card.date': 'Avril 2026',
  'blogHub.card.read': 'Lire →',
  'blogHub.noResults': 'Aucun article ne correspond à votre recherche. Essayez un autre mot-clé ou une autre catégorie.',
  'blogHub.cat.structural': 'Génie structurel',
  'blogHub.cat.inspections': 'Inspections et CCO',
  'blogHub.cat.temporary': 'Ouvrages temporaires',
  'blogHub.cat.forensic': 'Génie judiciaire',
  'blogHub.cat.construction': 'Services de construction',
  'blogHub.cat.specialty': 'Ingénierie spécialisée',
  'blogHub.cat.bridge': 'Génie des ponts',
  'blogHub.cat.facade': 'Ingénierie de façade',
  'blogHub.cat.heritage': 'Conservation patrimoniale',
  'blogHub.c01.rt': '7 min de lecture',
  'blogHub.c01.h3': 'Guide complet du génie structurel pour les propriétaires ontariens',
  'blogHub.c01.p': 'Ce que font les ingénieurs structurels, quand vous en avez besoin et comment le CCO et le CNBC 2020 encadrent la conception structurelle des bâtiments en Ontario.',
  'blogHub.c02.rt': '8 min de lecture',
  'blogHub.c02.h3': 'Conformité au Code du bâtiment de l’Ontario pour les bâtiments existants : guide complet',
  'blogHub.c02.p': 'Partie 11 de la division B du CCO, O.Reg 332/12 et exigences de la LSST pour les bâtiments existants en Ontario : ce que les propriétaires doivent savoir.',
  'blogHub.c03.rt': '6 min de lecture',
  'blogHub.c03.h3': 'Inspections de façades en Ontario : exigences, processus et constats courants',
  'blogHub.c03.p': 'Quand les bâtiments en Ontario exigent des inspections de façade, ce que les ingénieurs vérifient et comment les problèmes de revêtement sont classés et signalés.',
  'blogHub.c04.rt': '8 min de lecture',
  'blogHub.c04.h3': 'Ingénierie des ouvrages temporaires en Ontario : exigences de la LSST et bonnes pratiques',
  'blogHub.c04.p': 'Étaiement, échafaudages et soutènement d’excavation en Ontario : exigences du règlement 213/91 et obligations de conception en ingénierie.',
  'blogHub.c05.rt': '7 min de lecture',
  'blogHub.c05.h3': 'Systèmes d’étaiement : types, principes de conception et exigences en Ontario',
  'blogHub.c05.p': 'Contrefiches, jambes de force, murs de pieux soldats et palplanches : le guide d’un ingénieur structurel pour les projets de construction en Ontario.',
  'blogHub.c06.rt': '8 min de lecture',
  'blogHub.c06.h3': 'Enquête structurelle judiciaire : processus, constats et rapports d’expert',
  'blogHub.c06.p': 'Comment les ingénieurs judiciaires en Ontario enquêtent sur les désordres de bâtiment, déterminent la cause racine et produisent des rapports d’expert prêts pour le litige.',
  'blogHub.c07.rt': '7 min de lecture',
  'blogHub.c07.h3': 'Analyse de défaillance structurelle : comment les ingénieurs ontariens déterminent la cause racine',
  'blogHub.c07.p': 'Comment les ingénieurs judiciaires en Ontario identifient surcharge, lacunes de conception, défauts d’exécution et défaillances de matériaux grâce à une analyse systématique.',
  'blogHub.c08.rt': '6 min de lecture',
  'blogHub.c08.h3': 'Expertise en ingénierie en Ontario : litiges de construction et règlement des différends',
  'blogHub.c08.p': 'Ce qu’il faut attendre d’un expert en génie structurel dans les litiges, arbitrages et différends d’assurance en Ontario.',
  'blogHub.c09.rt': '7 min de lecture',
  'blogHub.c09.h3': 'Estimation des coûts de construction : l’approche d’un ingénieur structurel pour les projets en Ontario',
  'blogHub.c09.p': 'Une estimation structurale précise évite les dépassements de budget : classes d’estimation AACE, quantités et facteurs de coût propres au projet en Ontario.',
  'blogHub.c10.rt': '8 min de lecture',
  'blogHub.c10.h3': 'Planification des projets de construction : CPM, chemin critique et bonnes pratiques en Ontario',
  'blogHub.c10.p': 'Comment les ingénieurs structurels utilisent la planification CPM pour garder les projets ontariens à l’heure : activités, marge, analyse des retards et outils de planification.',
  'blogHub.c11.rt': '6 min de lecture',
  'blogHub.c11.h3': 'Administration de la construction : le rôle de l’ingénieur structurel dans les projets en Ontario',
  'blogHub.c11.p': 'Ce que font les ingénieurs structurels pendant la phase d’administration : revue des plans d’atelier, demandes d’information, visites de site et ordres de changement.',
  'blogHub.c12.rt': '7 min de lecture',
  'blogHub.c12.h3': 'Ingénierie structurelle spécialisée : toitures, ancrages, connexions et coffrages en Ontario',
  'blogHub.c12.p': 'Supports de toiture, ancrages au béton selon CSA A23.3, connexions en acier selon CSA S16 et ingénierie des coffrages pour les projets structurels en Ontario.',
  'blogHub.c22.rt': '7 min de lecture',
  'blogHub.c22.h3': 'Inspections de balcons en Ontario selon le Règl. 59/20 : exigences et processus',
  'blogHub.c22.p': 'Le Règl. 59/20 de l’Ontario établit des obligations d’inspection des balcons pour les immeubles résidentiels visés. Découvrez qui est responsable, ce que les ingénieurs vérifient et comment les constats sont présentés dans le cadre en vigueur.',
  'blogHub.c23.rt': '8 min de lecture',
  'blogHub.c23.h3': 'Règlement 213/91 de la LSST : obligations de sécurité en construction pour les ingénieurs et entrepreneurs en Ontario',
  'blogHub.c23.p': 'Le règlement 213/91 régit la sécurité des chantiers en Ontario. Découvrez comment les ingénieurs confirment les obligations actuelles de conception et de revue pour l’étaiement, les excavations, le coffrage et les ouvrages temporaires connexes.',
  'blogHub.c24.rt': '7 min de lecture',
  'blogHub.c24.h3': 'Évaluation de l’état du bâtiment (BCA) en Ontario : définition et utilité',
  'blogHub.c24.p': 'Une évaluation de l’état du bâtiment examine les systèmes structuraux, mécaniques et d’enveloppe des bâtiments existants en Ontario. Essentielle pour les acquisitions, rénovations majeures et études de fonds de réserve.',
  'blogHub.c25.rt': '7 min de lecture',
  'blogHub.c25.h3': 'Exigences de revue générale PEO en Ontario : ce que doivent faire les ingénieurs des annexes 1 et 2',
  'blogHub.c25.p': 'Le CBO peut exiger une revue générale par un P.Eng. selon le parcours de permis et les engagements de conception. Découvrez comment l’annexe 1, les rapports de revue de chantier et l’annexe 2 s’articulent.',
  'blogHub.c26.rt': '8 min de lecture',
  'blogHub.c26.h3': 'Plans de montage d’acier en Ontario : règlement 213/91, contreventement temporaire et obligations du P.Eng.',
  'blogHub.c26.p': 'La LSST exige des plans de montage conçus par un P.Eng. pour certains projets d’acier et de préfabrication en Ontario. Ce guide couvre le contreventement temporaire, la séquence de montage et les levages d’éléments préfabriqués.',
  'blogHub.c27.rt': '8 min de lecture',
  'blogHub.c27.h3': 'Ingénierie des batardeaux en Ontario : règlement 213/91, permis en cours d’eau et risques de rabattement',
  'blogHub.c27.p': 'Les projets de batardeaux en Ontario nécessitent la conformité à la partie XI de la LSST, des permis des offices de protection de la nature et du MPO, ainsi qu’une conception tenant compte des charges hydrauliques, de sol et de glace.',
  'blogHub.c28.rt': '8 min de lecture',
  'blogHub.c28.h3': 'Démolition de ponts en Ontario : autorisation du MTO, exigences LSST et gestion de circulation',
  'blogHub.c28.p': 'La démolition d’un pont en Ontario exige une autorisation du MTO, un plan de démolition scellé par un P.Eng., une gestion de circulation conforme au Book 7 de l’OTM et les permis environnementaux requis.',
  'blogHub.c29.rt': '10 min de lecture',
  'blogHub.c29.h3': 'Génie structurel des ponts en Ontario : plans de montage, démolition et batardeaux',
  'blogHub.c29.p': 'Services de génie des ponts scellés par un P.Eng. en Ontario : plans de montage, faux-oeuvre, démolition, batardeaux, conformité CHBDC, exigences LSST et coordination environnementale multi-organismes.',
  'blogHub.c30.rt': '9 min de lecture',
  'blogHub.c30.h3': 'Rénovation et remplacement de toitures en Ontario : guide d’ingénierie structurelle',
  'blogHub.c30.p': 'Services structurels scellés par un P.Eng. pour les toitures en Ontario : remplacement de platelage, réparation de parapets, charpentes de dunnage, analyse des charges de toits verts et dépôts de permis CBO.',
  'blogHub.c31.rt': '7 min de lecture',
  'blogHub.c31.h3': 'Ingénierie de sécurité en toiture en Ontario : protection antichute LSST, ancrages CSA Z259 et certification P.Eng.',
  'blogHub.c31.p': 'Les systèmes d’ancrage de sécurité sur toiture en Ontario doivent être conçus par un P.Eng. et certifiés CSA Z259 selon la LSST. Ce guide explique les charges, les types d’ancrage, la certification et les inspections annuelles.',
  'blogHub.c32.rt': '7 min de lecture',
  'blogHub.c32.h3': 'Ancrages structurels en Ontario : CSA A23.3 annexe D, ancrages postinstallés et inspections spéciales',
  'blogHub.c32.p': 'La conception d’ancrages en Ontario selon CSA A23.3 annexe D couvre six modes de rupture, les ancrages à expansion et chimiques, les essais d’arrachement, la vérification d’installation et les dispositions sismiques.',
  'blogHub.c33.rt': '7 min de lecture',
  'blogHub.c33.h3': 'Ingénierie des coffrages en Ontario : CSA S269, règlement 213/91 et quand un sceau P.Eng. est requis',
  'blogHub.c33.p': 'Les coffrages en Ontario doivent respecter la CSA S269 et le règlement 213/91. Ce guide explique quand une conception propre au projet est généralement requise, ainsi que les charges, les défaillances et la revue avant coulage.',
  'blogHub.c34.rt': '7 min de lecture',
  'blogHub.c34.h3': 'Ordonnances de normes foncières municipales en Ontario : chapitre 629 de Toronto, réparations structurelles et appels',
  'blogHub.c34.p': 'Les ordonnances de normes foncières en Ontario imposent des réparations structurelles dans des délais précis. Découvrez le fonctionnement du chapitre 629 de Toronto, quand un ingénieur structurel est requis et comment les appels sont traités.',
  'blogHub.c35.rt': '7 min de lecture',
  'blogHub.c35.h3': 'Réclamations d’assurance pour dommages structurels en Ontario : évaluations d’ingénierie et processus IBC',
  'blogHub.c35.p': 'Les réclamations d’assurance pour dommages structurels en Ontario nécessitent des évaluations par un P.Eng. Découvrez le fonctionnement de la police IBC, l’exclusion de détérioration graduelle, l’ingénieur de l’assureur et les droits de subrogation.',
  'blogHub.c36.rt': '8 min de lecture',
  'blogHub.c36.h3': 'Réclamations pour défauts de construction en Ontario : Loi sur la construction, adjudication ODACC et preuve d’expert selon la règle 53.03',
  'blogHub.c36.p': 'Les réclamations pour défauts de construction en Ontario mobilisent la Loi sur la construction, la garantie Tarion, l’adjudication ODACC et les délais de prescription. Ce guide explique le cadre juridique et le rôle de l’ingénieur structurel expert.',
  'blogHub.c37.rt': '7 min de lecture',
  'blogHub.c37.h3': 'Ingénierie de valeur en construction en Ontario : VE structurelle, contrats CCDC 2 et réduction des coûts',
  'blogHub.c37.p': 'Une VE structurelle bien menée peut améliorer la valeur d’un projet en Ontario lorsqu’elle est menée dans un cadre rigoureux. Ce guide couvre l’atelier VE, le traitement contractuel, les postes courants et l’évaluation des propositions.',
  'blogHub.c38.rt': '7 min de lecture',
  'blogHub.c38.h3': 'Clôture de chantier en Ontario : performance substantielle, permis d’occupation et lettre P.Eng. annexe 2',
  'blogHub.c38.p': 'La clôture de chantier en Ontario comprend généralement l’occupation, les certificats de fin requis, la levée des déficiences et la coordination de clôture contractuelle. Ce guide explique les principales étapes.',
  'blogHub.c39.rt': '8 min de lecture',
  'blogHub.c39.h3': 'Loi sur la construction de l’Ontario 2018 : paiement rapide, privilèges, ODACC et droits des ingénieurs',
  'blogHub.c39.p': 'La Loi sur la construction de l’Ontario encadre le paiement rapide, l’adjudication ODACC et le régime des privilèges. Découvrez comment les ingénieurs structurels protègent leurs droits au paiement selon le cadre actuellement applicable.',
  'blogHub.c40.rt': '7 min de lecture',
  'blogHub.c40.h3': 'Réparation de dalles de trottoir et normes municipales en Ontario : guide de l’ingénieur',
  'blogHub.c40.p': 'Réparation de dalles de trottoir et ingénierie des voûtes en Ontario : obligations municipales, conception de dalles sur espaces souterrains, conformité au CBO et processus de permis signé par un P.Eng.',
  'blogHub.c41.rt': '7 min de lecture',
  'blogHub.c41.h3': 'Ouvertures structurelles dans les bâtiments en Ontario : fenêtres, portes et percements',
  'blogHub.c41.p': 'Créer une nouvelle fenêtre ou porte dans un bâtiment ontarien exige une conception structurelle par un P.Eng. selon le CBO, un étaiement temporaire et un permis de construire. Guide complet du processus.',
  'blogHub.c42.rt': '8 min de lecture',
  'blogHub.c42.h3': 'Rénovation et restauration de façades en Ontario : CBO, Règl. 59/20 et guide de conception P.Eng.',
  'blogHub.c42.p': 'La rénovation de façade en Ontario comprend le rejointoiement de maçonnerie, le remplacement de revêtements, la conformité à la partie 11 du CBO, les exigences énergétiques, les considérations patrimoniales et le processus de permis.',
  'blogHub.c43.rt': '9 min de lecture',
  'blogHub.c43.h3': 'Restauration structurelle des bâtiments patrimoniaux en Ontario : Loi sur le patrimoine, partie 11 du CBO et guide P.Eng.',
  'blogHub.c43.p': 'La restauration d’un bâtiment patrimonial en Ontario implique des permis au titre de la Loi sur le patrimoine, la conformité à la partie 11 du CBO et une ingénierie P.Eng. pour la maçonnerie, le bois, la fonte et le béton ancien.'
});

document.addEventListener('DOMContentLoaded', () => {
  const initialLang = getInitialLanguage();
  ensureLanguageSwitcher(initialLang);
  applyLang(initialLang);
});

window.applyLang = applyLang;
