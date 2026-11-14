/* =========================================================
   HAESA CONNECT — language switcher
   Covers: navigation, footer, and every page's framing text
   (hero/kicker/heading/lead, section headings, static labels).
   Does NOT yet cover: opportunity/article/resource database
   content (data.js) or long-form article bodies — that's a
   much larger translation job, flagged separately.
   ========================================================= */

const LANGS = { en: "English", fr: "Français", es: "Español", pt: "Português" };

const T = {

  "nav.home":        { en:"Home", fr:"Accueil", es:"Inicio", pt:"Início" },
  "nav.resources":   { en:"Resource Center", fr:"Centre de ressources", es:"Centro de recursos", pt:"Centro de recursos" },
  "nav.opportunities":{ en:"Opportunities", fr:"Opportunités", es:"Oportunidades", pt:"Oportunidades" },
  "nav.articles":    { en:"Articles", fr:"Articles", es:"Artículos", pt:"Artigos" },
  "nav.about":       { en:"About", fr:"À propos", es:"Acerca de", pt:"Sobre" },
  "nav.report":      { en:"Submit Report", fr:"Soumettre un rapport", es:"Enviar informe", pt:"Enviar relatório" },
  "nav.casting":     { en:"MG Project Casting", fr:"Casting MG Project", es:"Casting MG Project", pt:"Casting MG Project" },
  "nav.careers":     { en:"Careers", fr:"Carrières", es:"Empleo", pt:"Carreiras" },
  "nav.challenge":   { en:"Challenge System", fr:"Système de défis", es:"Sistema de desafíos", pt:"Sistema de desafios" },
  "nav.festival":    { en:"Festival", fr:"Festival", es:"Festival", pt:"Festival" },
  "nav.join":        { en:"Join the network", fr:"Rejoindre le réseau", es:"Unirse a la red", pt:"Juntar-se à rede" },
  "footer.tagline":  { en:"Reawakening the African Mind.", fr:"Réveiller l'esprit africain.", es:"Despertando la mente africana.", pt:"Despertando a mente africana." },

  "hero.eyebrow": { en:"For History, Archaeology & Economics — students and alumni, across African institutions",
    fr:"Pour l'Histoire, l'Archéologie et l'Économie — étudiants et diplômés, dans les institutions africaines",
    es:"Para Historia, Arqueología y Economía — estudiantes y egresados, en instituciones africanas",
    pt:"Para História, Arqueologia e Economia — estudantes e formados, em instituições africanas" },
  "hero.h1": { en:"The record of your field is also the record of your people.",
    fr:"Les archives de votre discipline sont aussi celles de votre peuple.",
    es:"El registro de tu disciplina es también el registro de tu pueblo.",
    pt:"O registo da tua área é também o registo do teu povo." },
  "hero.lead": { en:"HAESA CONNECT is where students and graduates of History, Archaeology and Economics departments across Africa find each other, build practical skills, and reach the opportunities their training deserves.",
    fr:"HAESA CONNECT est l'endroit où les étudiants et diplômés des départements d'Histoire, d'Archéologie et d'Économie à travers l'Afrique se rencontrent, développent des compétences pratiques et accèdent aux opportunités que mérite leur formation.",
    es:"HAESA CONNECT es el espacio donde estudiantes y egresados de los departamentos de Historia, Arqueología y Economía de toda África se encuentran, desarrollan habilidades prácticas y acceden a las oportunidades que su formación merece.",
    pt:"A HAESA CONNECT é onde estudantes e formados dos departamentos de História, Arqueologia e Economia em toda a África se encontram, desenvolvem competências práticas e alcançam as oportunidades que a sua formação merece." },
  "hero.btn.join":   { en:"Join the network", fr:"Rejoindre le réseau", es:"Unirse a la red", pt:"Juntar-se à rede" },
  "hero.btn.browse": { en:"Browse opportunities", fr:"Parcourir les opportunités", es:"Ver oportunidades", pt:"Ver oportunidades" },

  "disc.label": { en:"Rooted in three disciplines", fr:"Enraciné dans trois disciplines", es:"Arraigado en tres disciplinas", pt:"Enraizado em três disciplinas" },
  "disc.history": { en:"History", fr:"Histoire", es:"Historia", pt:"História" },
  "disc.archaeology": { en:"Archaeology", fr:"Archéologie", es:"Arqueología", pt:"Arqueologia" },
  "disc.economics": { en:"Economics", fr:"Économie", es:"Economía", pt:"Economia" },
  "cat.entrepreneurship": { en:"Entrepreneurship", fr:"Entrepreneuriat", es:"Emprendimiento", pt:"Empreendedorismo" },
  "cat.travel": { en:"Travel", fr:"Voyage", es:"Viajes", pt:"Viagens" },
  "cat.community": { en:"Community", fr:"Communauté", es:"Comunidad", pt:"Comunidade" },

  "pillars.kicker": { en:"What we offer", fr:"Ce que nous offrons", es:"Lo que ofrecemos", pt:"O que oferecemos" },
  "pillars.h2": { en:"Three ways HAESA CONNECT works for you",
    fr:"Trois façons dont HAESA CONNECT travaille pour vous",
    es:"Tres formas en que HAESA CONNECT trabaja para ti",
    pt:"Três formas como a HAESA CONNECT trabalha para si" },
  "pillar1.num": { en:"Resources", fr:"Ressources", es:"Recursos", pt:"Recursos" },
  "pillar1.h3": { en:"Capacity development", fr:"Renforcement des capacités", es:"Desarrollo de capacidades", pt:"Desenvolvimento de capacidades" },
  "pillar1.p": { en:"Guided reading lists, research methods, data and fieldwork skills, and short courses built around what History, Archaeology and Economics graduates actually need on the job.",
    fr:"Listes de lecture guidées, méthodes de recherche, compétences en données et travail de terrain, et cours courts conçus autour des besoins réels des diplômés en Histoire, Archéologie et Économie.",
    es:"Listas de lectura guiadas, métodos de investigación, habilidades de datos y trabajo de campo, y cursos cortos diseñados en torno a lo que realmente necesitan los egresados de Historia, Arqueología y Economía.",
    pt:"Listas de leitura orientadas, métodos de investigação, competências de dados e trabalho de campo, e cursos curtos construídos à volta do que os formados em História, Arqueologia e Economia realmente precisam." },
  "pillar2.num": { en:"Community", fr:"Communauté", es:"Comunidad", pt:"Comunidade" },
  "pillar2.h3": { en:"Connection across institutions", fr:"Connexion entre institutions", es:"Conexión entre instituciones", pt:"Ligação entre instituições" },
  "pillar2.p": { en:"Find classmates, alumni and researchers from departments across the continent. Join discipline-specific groups, ask questions, and get mentorship from people a few years ahead.",
    fr:"Retrouvez camarades, anciens étudiants et chercheurs des départements à travers le continent. Rejoignez des groupes spécifiques à votre discipline, posez des questions et bénéficiez du mentorat de personnes plus expérimentées.",
    es:"Encuentra compañeros, egresados e investigadores de departamentos de todo el continente. Únete a grupos específicos de tu disciplina, haz preguntas y recibe mentoría de personas con más experiencia.",
    pt:"Encontre colegas, antigos alunos e investigadores de departamentos em todo o continente. Junte-se a grupos específicos da sua área, faça perguntas e receba mentoria de pessoas mais experientes." },
  "pillar3.num": { en:"Pathways", fr:"Parcours", es:"Caminos", pt:"Percursos" },
  "pillar3.h3": { en:"A guide to global opportunities", fr:"Un guide vers les opportunités mondiales", es:"Una guía hacia oportunidades globales", pt:"Um guia para oportunidades globais" },
  "pillar3.p": { en:"A running, curated list of scholarships, fellowships, internships and jobs across business, education, finance, entertainment, export, technology and diplomacy — matched to your discipline.",
    fr:"Une liste actualisée et sélectionnée de bourses, fellowships, stages et emplois dans les affaires, l'éducation, la finance, le divertissement, l'export, la technologie et la diplomatie — adaptée à votre discipline.",
    es:"Una lista actualizada y seleccionada de becas, fellowships, pasantías y empleos en negocios, educación, finanzas, entretenimiento, exportación, tecnología y diplomacia — adaptada a tu disciplina.",
    pt:"Uma lista atualizada e selecionada de bolsas, fellowships, estágios e empregos em negócios, educação, finanças, entretenimento, exportação, tecnologia e diplomacia — adaptada à sua área." },

  "journey.kicker": { en:"How it works", fr:"Comment ça marche", es:"Cómo funciona", pt:"Como funciona" },
  "journey.h2": { en:"From your department to the wider field",
    fr:"De votre département au domaine plus large",
    es:"De tu departamento al campo más amplio",
    pt:"Do seu departamento para o campo mais amplo" },
  "j1.stage": { en:"Sign up", fr:"Inscription", es:"Regístrate", pt:"Inscreva-se" },
  "j1.h3": { en:"Tell us your discipline and country", fr:"Indiquez-nous votre discipline et votre pays", es:"Cuéntanos tu disciplina y país", pt:"Diga-nos a sua área e país" },
  "j1.p": { en:"We place you in the right groups from day one — your discipline across the continent, and your stage (student or alumni).",
    fr:"Nous vous plaçons dans les bons groupes dès le premier jour — votre discipline à travers le continent, et votre statut (étudiant ou ancien).",
    es:"Te ubicamos en los grupos correctos desde el primer día — tu disciplina en todo el continente, y tu etapa (estudiante o egresado).",
    pt:"Colocamo-lo nos grupos certos desde o primeiro dia — a sua área em todo o continente, e a sua fase (estudante ou antigo aluno)." },
  "j2.stage": { en:"Build", fr:"Progression", es:"Construye", pt:"Construa" },
  "j2.h3": { en:"Work through resources at your pace", fr:"Avancez dans les ressources à votre rythme", es:"Avanza por los recursos a tu ritmo", pt:"Avance pelos recursos ao seu ritmo" },
  "j2.p": { en:"Short, practical modules on research writing, fieldwork and archival methods, and applied economics — plus study groups if you'd rather not go it alone.",
    fr:"Modules courts et pratiques sur la rédaction de recherche, le travail de terrain, les méthodes d'archives et l'économie appliquée — ainsi que des groupes d'étude si vous préférez ne pas être seul.",
    es:"Módulos cortos y prácticos sobre redacción de investigación, trabajo de campo, métodos de archivo y economía aplicada — además de grupos de estudio si prefieres no estar solo.",
    pt:"Módulos curtos e práticos sobre escrita de investigação, trabalho de campo, métodos de arquivo e economia aplicada — além de grupos de estudo caso prefira não estar sozinho." },
  "j3.stage": { en:"Connect", fr:"Connexion", es:"Conecta", pt:"Conecte-se" },
  "j3.h3": { en:"Meet people already where you want to be", fr:"Rencontrez des personnes déjà là où vous voulez être", es:"Conoce a personas que ya están donde quieres estar", pt:"Conheça pessoas que já estão onde quer chegar" },
  "j3.p": { en:"Alumni across universities, museums, think tanks, ministries and NGOs make themselves reachable for questions, reviews and referrals.",
    fr:"Des anciens étudiants dans les universités, musées, think tanks, ministères et ONG restent accessibles pour des questions, avis et recommandations.",
    es:"Egresados en universidades, museos, think tanks, ministerios y ONG se mantienen accesibles para preguntas, opiniones y referencias.",
    pt:"Antigos alunos em universidades, museus, think tanks, ministérios e ONGs mantêm-se acessíveis para perguntas, opiniões e recomendações." },
  "j4.stage": { en:"Reach", fr:"Résultat", es:"Alcance", pt:"Alcance" },
  "j4.h3": { en:"Apply to opportunities built for your field", fr:"Postulez à des opportunités conçues pour votre domaine", es:"Postúlate a oportunidades diseñadas para tu campo", pt:"Candidate-se a oportunidades feitas para a sua área" },

  "voices.kicker": { en:"Community", fr:"Communauté", es:"Comunidad", pt:"Comunidade" },
  "voices.h2": { en:"Built by and for the field", fr:"Conçu par et pour le domaine", es:"Creado por y para el campo", pt:"Criado pela e para a área" },

  "signup.h2": { en:"Join the network", fr:"Rejoindre le réseau", es:"Unirse a la red", pt:"Juntar-se à rede" },
  "signup.p": { en:"Free for students and alumni of African institutions. Tell us a little about yourself and we'll get you into the right groups and resources.",
    fr:"Gratuit pour les étudiants et anciens étudiants des institutions africaines. Parlez-nous un peu de vous et nous vous orienterons vers les bons groupes et ressources.",
    es:"Gratis para estudiantes y egresados de instituciones africanas. Cuéntanos un poco sobre ti y te orientaremos hacia los grupos y recursos adecuados.",
    pt:"Gratuito para estudantes e antigos alunos de instituições africanas. Conte-nos um pouco sobre si e vamos orientá-lo para os grupos e recursos certos." },

  "opps.kicker": { en:"A guide to global opportunities", fr:"Un guide vers les opportunités mondiales", es:"Una guía hacia oportunidades globales", pt:"Um guia para oportunidades globais" },
  "opps.h1": { en:"Scholarships, fellowships & internships across seven sectors",
    fr:"Bourses, fellowships et stages dans sept secteurs",
    es:"Becas, fellowships y pasantías en siete sectores",
    pt:"Bolsas, fellowships e estágios em sete setores" },
  "opps.lead": { en:"Hand-curated for History, Archaeology and Economics students and alumni from African institutions. Always confirm deadlines and requirements on the organisation's own site before applying.",
    fr:"Sélectionné avec soin pour les étudiants et anciens en Histoire, Archéologie et Économie des institutions africaines. Confirmez toujours les délais et conditions sur le site de l'organisation avant de postuler.",
    es:"Seleccionado cuidadosamente para estudiantes y egresados de Historia, Arqueología y Economía de instituciones africanas. Confirma siempre los plazos y requisitos en el sitio de la organización antes de postular.",
    pt:"Selecionado cuidadosamente para estudantes e antigos alunos de História, Arqueologia e Economia de instituições africanas. Confirme sempre os prazos e requisitos no site da organização antes de se candidatar." },
  "filter.all": { en:"All", fr:"Tous", es:"Todos", pt:"Todos" },
  "filter.business": { en:"Business", fr:"Affaires", es:"Negocios", pt:"Negócios" },
  "filter.education": { en:"Education", fr:"Éducation", es:"Educación", pt:"Educação" },
  "filter.finance": { en:"Finance", fr:"Finance", es:"Finanzas", pt:"Finanças" },
  "filter.entertainment": { en:"Entertainment", fr:"Divertissement", es:"Entretenimiento", pt:"Entretenimento" },
  "filter.export": { en:"Export & Trade", fr:"Export et commerce", es:"Exportación y comercio", pt:"Exportação e comércio" },
  "filter.technology": { en:"Technology", fr:"Technologie", es:"Tecnología", pt:"Tecnologia" },
  "filter.diplomacy": { en:"Diplomacy", fr:"Diplomatie", es:"Diplomacia", pt:"Diplomacia" },
  "filter.funding": { en:"Startup Funding", fr:"Financement de start-ups", es:"Financiación de startups", pt:"Financiamento de startups" },

  "res.kicker": { en:"HAESA Resource Center", fr:"Centre de ressources HAESA", es:"Centro de recursos HAESA", pt:"Centro de recursos HAESA" },
  "res.h1": { en:"Learn. Build skills. Find opportunities. Move forward.",
    fr:"Apprenez. Développez vos compétences. Trouvez des opportunités. Avancez.",
    es:"Aprende. Desarrolla habilidades. Encuentra oportunidades. Avanza.",
    pt:"Aprenda. Desenvolva competências. Encontre oportunidades. Avance." },
  "res.lead": { en:"A growing hub of guides, templates and tools for African university students — built around five pillars: Academics, Career, Digital Skills, Entrepreneurship and Opportunities.",
    fr:"Un pôle grandissant de guides, modèles et outils pour les étudiants universitaires africains — organisé autour de cinq piliers : Académique, Carrière, Compétences numériques, Entrepreneuriat et Opportunités.",
    es:"Un centro en crecimiento de guías, plantillas y herramientas para estudiantes universitarios africanos — organizado en torno a cinco pilares: Académico, Carrera, Habilidades digitales, Emprendimiento y Oportunidades.",
    pt:"Um centro em crescimento de guias, modelos e ferramentas para estudantes universitários africanos — organizado em torno de cinco pilares: Académico, Carreira, Competências digitais, Empreendedorismo e Oportunidades." },
  "search.placeholder": { en:"Search resources, guides, skills…", fr:"Rechercher des ressources, guides, compétences…", es:"Buscar recursos, guías, habilidades…", pt:"Pesquisar recursos, guias, competências…" },
  "search.btn": { en:"Search", fr:"Rechercher", es:"Buscar", pt:"Pesquisar" },
  "pillar.all": { en:"All", fr:"Tous", es:"Todos", pt:"Todos" },
  "pillar.academics": { en:"Academics", fr:"Académique", es:"Académico", pt:"Académico" },
  "pillar.career": { en:"Career", fr:"Carrière", es:"Carrera", pt:"Carreira" },
  "pillar.digital": { en:"Digital Skills", fr:"Compétences numériques", es:"Habilidades digitales", pt:"Competências digitais" },
  "pillar.entrepreneurship": { en:"Entrepreneurship", fr:"Entrepreneuriat", es:"Emprendimiento", pt:"Empreendedorismo" },
  "pillar.opportunities": { en:"Opportunities", fr:"Opportunités", es:"Oportunidades", pt:"Oportunidades" },
  "trending.h2": { en:"🔥 Trending this week", fr:"🔥 Tendance cette semaine", es:"🔥 Tendencia esta semana", pt:"🔥 Em alta esta semana" },
  "recent.h2": { en:"🆕 Recently added", fr:"🆕 Récemment ajouté", es:"🆕 Agregado recientemente", pt:"🆕 Adicionado recentemente" },
  "allres.h2": { en:"All resources", fr:"Toutes les ressources", es:"Todos los recursos", pt:"Todos os recursos" },
  "level.any": { en:"Any level", fr:"Tous niveaux", es:"Cualquier nivel", pt:"Qualquer nível" },
  "format.any": { en:"Any format", fr:"Tous formats", es:"Cualquier formato", pt:"Qualquer formato" },

  "articles.kicker": { en:"Articles, write-ups & media", fr:"Articles, textes et médias", es:"Artículos, textos y medios", pt:"Artigos, textos e media" },
  "articles.h1": { en:"Writing from the HAESA CONNECT community",
    fr:"Écrits de la communauté HAESA CONNECT",
    es:"Escritos de la comunidad HAESA CONNECT",
    pt:"Textos da comunidade HAESA CONNECT" },
  "articles.lead": { en:"Research notes, fieldwork write-ups, explainers and member spotlights across History, Archaeology and Economics.",
    fr:"Notes de recherche, comptes rendus de terrain, explications et portraits de membres en Histoire, Archéologie et Économie.",
    es:"Notas de investigación, informes de campo, explicaciones y perfiles de miembros en Historia, Arqueología y Economía.",
    pt:"Notas de investigação, relatos de trabalho de campo, explicações e destaques de membros em História, Arqueologia e Economia." },

  "about.kicker": { en:"About us", fr:"À propos de nous", es:"Sobre nosotros", pt:"Sobre nós" },
  "about.h1": { en:"Reawakening the African mind, one discipline at a time",
    fr:"Réveiller l'esprit africain, discipline après discipline",
    es:"Despertando la mente africana, disciplina por disciplina",
    pt:"Despertando a mente africana, uma área de cada vez" },
  "about.lead": { en:"HAESA CONNECT is the community platform of the Historical, Archaeological and Economic Survey Associates (HAESA) — built for students and alumni of History, Archaeology and Economics departments across African institutions.",
    fr:"HAESA CONNECT est la plateforme communautaire des Historical, Archaeological and Economic Survey Associates (HAESA) — conçue pour les étudiants et anciens des départements d'Histoire, d'Archéologie et d'Économie dans les institutions africaines.",
    es:"HAESA CONNECT es la plataforma comunitaria de los Historical, Archaeological and Economic Survey Associates (HAESA) — creada para estudiantes y egresados de los departamentos de Historia, Arqueología y Economía en instituciones africanas.",
    pt:"A HAESA CONNECT é a plataforma comunitária dos Historical, Archaeological and Economic Survey Associates (HAESA) — criada para estudantes e antigos alunos dos departamentos de História, Arqueologia e Economia em instituições africanas." },
  "about.p1": { en:"We started from a simple observation: students of History, Archaeology and Economics across Africa were doing serious, original work — in archives, in the field, in data — largely disconnected from one another and from the opportunities their training should open up.",
    fr:"Nous sommes partis d'un simple constat : les étudiants en Histoire, Archéologie et Économie à travers l'Afrique menaient un travail sérieux et original — dans les archives, sur le terrain, dans les données — largement déconnectés les uns des autres et des opportunités que leur formation devrait ouvrir.",
    es:"Partimos de una observación simple: los estudiantes de Historia, Arqueología y Economía en toda África realizaban un trabajo serio y original — en archivos, en el campo, en datos — en gran medida desconectados entre sí y de las oportunidades que su formación debería abrir.",
    pt:"Partimos de uma observação simples: os estudantes de História, Arqueologia e Economia em toda a África faziam um trabalho sério e original — em arquivos, no terreno, em dados — em grande parte desligados uns dos outros e das oportunidades que a sua formação deveria abrir." },
  "about.p2": { en:"HAESA CONNECT exists to close that gap. We bring capacity-building resources, a cross-institution community, and a live guide to scholarships, fellowships and jobs into one place, so that studying these disciplines feels like joining a continent-wide field, not a solitary path.",
    fr:"HAESA CONNECT existe pour combler ce fossé. Nous réunissons des ressources de renforcement des capacités, une communauté inter-institutions et un guide actualisé des bourses, fellowships et emplois en un seul endroit, afin qu'étudier ces disciplines ressemble à rejoindre un domaine continental, et non un parcours solitaire.",
    es:"HAESA CONNECT existe para cerrar esa brecha. Reunimos recursos de desarrollo de capacidades, una comunidad interinstitucional y una guía actualizada de becas, fellowships y empleos en un solo lugar, para que estudiar estas disciplinas se sienta como unirse a un campo continental, no un camino solitario.",
    pt:"A HAESA CONNECT existe para colmatar essa lacuna. Reunimos recursos de desenvolvimento de capacidades, uma comunidade interinstitucional e um guia atualizado de bolsas, fellowships e empregos num só lugar, para que estudar estas áreas pareça juntar-se a um campo continental, não um percurso solitário." },
  "about.p3": { en:"Our members come from universities, museums, research institutes and public and private organisations across all 54 African countries — as current students, recent graduates, and established professionals willing to open a door for the next cohort.",
    fr:"Nos membres viennent d'universités, de musées, d'instituts de recherche et d'organisations publiques et privées dans les 54 pays africains — étudiants actuels, jeunes diplômés et professionnels confirmés prêts à ouvrir une porte à la prochaine génération.",
    es:"Nuestros miembros provienen de universidades, museos, institutos de investigación y organizaciones públicas y privadas en los 54 países africanos — como estudiantes actuales, egresados recientes y profesionales consolidados dispuestos a abrir una puerta a la próxima generación.",
    pt:"Os nossos membros vêm de universidades, museus, institutos de investigação e organizações públicas e privadas nos 54 países africanos — como estudantes atuais, recém-formados e profissionais experientes dispostos a abrir uma porta para a próxima geração." },
  "values.kicker": { en:"What guides us", fr:"Ce qui nous guide", es:"Lo que nos guía", pt:"O que nos guia" },
  "values.h2": { en:"Our values", fr:"Nos valeurs", es:"Nuestros valores", pt:"Os nossos valores" },
  "value1.h3": { en:"Rigour", fr:"Rigueur", es:"Rigor", pt:"Rigor" },
  "value1.p": { en:"We treat History, Archaeology and Economics as serious, employable disciplines, and point members toward resources and opportunities that respect that.",
    fr:"Nous considérons l'Histoire, l'Archéologie et l'Économie comme des disciplines sérieuses et professionnalisantes, et orientons les membres vers des ressources et opportunités qui respectent cela.",
    es:"Tratamos la Historia, la Arqueología y la Economía como disciplinas serias y empleables, y orientamos a los miembros hacia recursos y oportunidades que respeten eso.",
    pt:"Tratamos a História, a Arqueologia e a Economia como áreas sérias e empregáveis, e orientamos os membros para recursos e oportunidades que respeitem isso." },
  "value2.h3": { en:"Reach", fr:"Portée", es:"Alcance", pt:"Alcance" },
  "value2.p": { en:"A member in Accra and a member in Nairobi should be able to find each other as easily as classmates down the hall.",
    fr:"Un membre à Accra et un membre à Nairobi devraient pouvoir se trouver aussi facilement que des camarades de classe.",
    es:"Un miembro en Accra y un miembro en Nairobi deberían poder encontrarse tan fácilmente como compañeros de clase.",
    pt:"Um membro em Acra e um membro em Nairóbi deveriam conseguir encontrar-se tão facilmente como colegas de turma." },
  "value3.h3": { en:"Reciprocity", fr:"Réciprocité", es:"Reciprocidad", pt:"Reciprocidade" },
  "value3.p": { en:"Alumni open doors for students; students bring fresh research back to the community. The network runs on people giving as much as they take.",
    fr:"Les anciens ouvrent des portes aux étudiants ; les étudiants apportent de nouvelles recherches à la communauté. Le réseau fonctionne grâce à des personnes qui donnent autant qu'elles reçoivent.",
    es:"Los egresados abren puertas a los estudiantes; los estudiantes aportan nuevas investigaciones a la comunidad. La red funciona con personas que dan tanto como reciben.",
    pt:"Os antigos alunos abrem portas aos estudantes; os estudantes trazem nova investigação para a comunidade. A rede funciona com pessoas que dão tanto quanto recebem." },
  "value4.h3": { en:"Relevance", fr:"Pertinence", es:"Relevancia", pt:"Relevância" },
  "value4.p": { en:"Opportunities are kept current and sector-specific — business, education, finance, entertainment, export, technology and diplomacy — not a generic list.",
    fr:"Les opportunités sont tenues à jour et spécifiques à chaque secteur — affaires, éducation, finance, divertissement, export, technologie et diplomatie — et non une liste générique.",
    es:"Las oportunidades se mantienen actualizadas y específicas por sector — negocios, educación, finanzas, entretenimiento, exportación, tecnología y diplomacia — no una lista genérica.",
    pt:"As oportunidades são mantidas atualizadas e específicas por setor — negócios, educação, finanças, entretenimento, exportação, tecnologia e diplomacia — não uma lista genérica." },
  "vision.h3": { en:"Vision", fr:"Vision", es:"Visión", pt:"Visão" },
  "vision.p": { en:"To become Africa's leading hub for future-ready university students by bridging classroom learning with real world opportunities while inspiring innovation, leadership, creativity and lifelong learning.",
    fr:"Devenir le principal pôle africain pour les étudiants universitaires prêts pour l'avenir, en reliant l'apprentissage en classe aux opportunités du monde réel, tout en inspirant innovation, leadership, créativité et apprentissage continu.",
    es:"Convertirnos en el principal centro de África para estudiantes universitarios preparados para el futuro, conectando el aprendizaje en el aula con oportunidades del mundo real, mientras inspiramos innovación, liderazgo, creatividad y aprendizaje continuo.",
    pt:"Tornar-se o principal polo de África para estudantes universitários preparados para o futuro, ligando a aprendizagem em sala de aula a oportunidades do mundo real, inspirando inovação, liderança, criatividade e aprendizagem ao longo da vida." },
  "mission.h3": { en:"Mission", fr:"Mission", es:"Misión", pt:"Missão" },
  "mission.p": { en:"To equip African university students with knowledge, digital skills, practical resources, mentorship, and opportunities that transform learning into confidence, career readiness, innovation, and meaningful impact for Africa's development.",
    fr:"Doter les étudiants universitaires africains de connaissances, de compétences numériques, de ressources pratiques, de mentorat et d'opportunités qui transforment l'apprentissage en confiance, en préparation professionnelle, en innovation et en impact significatif pour le développement de l'Afrique.",
    es:"Dotar a los estudiantes universitarios africanos de conocimientos, habilidades digitales, recursos prácticos, mentoría y oportunidades que transformen el aprendizaje en confianza, preparación profesional, innovación e impacto significativo para el desarrollo de África.",
    pt:"Dotar os estudantes universitários africanos de conhecimento, competências digitais, recursos práticos, mentoria e oportunidades que transformem a aprendizagem em confiança, preparação profissional, inovação e impacto significativo para o desenvolvimento de África." },

  "report.kicker": { en:"For members & partner ventures", fr:"Pour les membres et partenaires", es:"Para miembros y emprendimientos asociados", pt:"Para membros e empreendimentos parceiros" },
  "report.h1": { en:"Monthly Traction Report", fr:"Rapport mensuel de progression", es:"Informe mensual de avance", pt:"Relatório mensal de progresso" },
  "report.lead": { en:"A concise, reusable way to track growth, performance and progress. Fill this in once a month — wins, setbacks, numbers, challenges, money spent and earned, partnerships — and submit it below.",
    fr:"Un moyen concis et réutilisable de suivre la croissance, la performance et les progrès. Remplissez-le une fois par mois — réussites, difficultés, chiffres, défis, argent dépensé et gagné, partenariats — et soumettez-le ci-dessous.",
    es:"Una forma concisa y reutilizable de seguir el crecimiento, el desempeño y el progreso. Complétalo una vez al mes — logros, contratiempos, cifras, desafíos, dinero gastado y ganado, alianzas — y envíalo a continuación.",
    pt:"Uma forma concisa e reutilizável de acompanhar o crescimento, o desempenho e o progresso. Preencha uma vez por mês — conquistas, contratempos, números, desafios, dinheiro gasto e ganho, parcerias — e submeta abaixo." },

  "casting.kicker": { en:"Casting call", fr:"Appel de casting", es:"Convocatoria de casting", pt:"Chamada de casting" },
  "casting.h1": { en:"MG Project — Cast Registration", fr:"MG Project — Inscription des acteurs", es:"MG Project — Inscripción de reparto", pt:"MG Project — Inscrição de elenco" },
  "casting.lead": { en:"A cinematic media project in three phases. Register below and tell us which phase you'd like to be considered for — our casting team will reach out with next steps.",
    fr:"Un projet cinématographique en trois phases. Inscrivez-vous ci-dessous et indiquez-nous pour quelle phase vous souhaitez être considéré — notre équipe de casting vous contactera pour la suite.",
    es:"Un proyecto cinematográfico en tres fases. Regístrate a continuación e indícanos para qué fase te gustaría ser considerado — nuestro equipo de casting se pondrá en contacto con los siguientes pasos.",
    pt:"Um projeto cinematográfico em três fases. Inscreva-se abaixo e diga-nos para que fase gostaria de ser considerado — a nossa equipa de casting entrará em contacto com os próximos passos." },
  "ui.deadline": { en:"Deadline:", fr:"Date limite :", es:"Fecha límite:", pt:"Prazo:" },
  "ui.viewDetails": { en:"View details →", fr:"Voir les détails →", es:"Ver detalles →", pt:"Ver detalhes →" },
  "ui.readGuide": { en:"Read guide →", fr:"Lire le guide →", es:"Leer la guía →", pt:"Ler o guia →" },
  "ui.readMore": { en:"Read more →", fr:"Lire la suite →", es:"Leer más →", pt:"Ler mais →" },
  "ui.noResults": { en:"No resources match that search yet.", fr:"Aucune ressource ne correspond à cette recherche.", es:"Ningún recurso coincide con esa búsqueda.", pt:"Nenhum recurso corresponde a essa pesquisa." },

  "careers.kicker": { en:"We're hiring", fr:"Nous recrutons", es:"Estamos contratando", pt:"Estamos a contratar" },
  "careers.h1": { en:"Help build Africa's home for History, Archaeology and Economics",
    fr:"Aidez à construire la maison africaine de l'Histoire, de l'Archéologie et de l'Économie",
    es:"Ayuda a construir el hogar africano de la Historia, la Arqueología y la Economía",
    pt:"Ajude a construir a casa africana da História, Arqueologia e Economia" },
  "careers.lead": { en:"HAESA CONNECT is growing, and we're looking for people across Africa to help run it — from partnerships to platform. All roles below are open now.",
    fr:"HAESA CONNECT grandit, et nous cherchons des personnes à travers l'Afrique pour nous aider à le faire fonctionner — des partenariats à la plateforme. Tous les postes ci-dessous sont ouverts dès maintenant.",
    es:"HAESA CONNECT está creciendo, y buscamos personas en toda África para ayudar a gestionarlo — desde alianzas hasta la plataforma. Todos los puestos abajo están abiertos ahora.",
    pt:"A HAESA CONNECT está a crescer, e procuramos pessoas em toda a África para ajudar a geri-la — de parcerias à plataforma. Todas as vagas abaixo estão abertas agora." },

  "phase.tba": { en:"Details to be announced. Register your interest to be notified first.",
    fr:"Détails à venir. Inscrivez votre intérêt pour être informé en premier.",
    es:"Detalles por anunciar. Regístrate para ser notificado primero.",
    pt:"Detalhes a anunciar. Registe o seu interesse para ser notificado em primeiro lugar." },
  "phase1.label": { en:"Phase I", fr:"Phase I", es:"Fase I", pt:"Fase I" },
  "phase2.label": { en:"Phase II", fr:"Phase II", es:"Fase II", pt:"Fase II" },
  "phase3.label": { en:"Phase III", fr:"Phase III", es:"Fase III", pt:"Fase III" },
};

function getLang(){
  return localStorage.getItem('haesa_lang') || 'en';
}

function setLang(lang){
  localStorage.setItem('haesa_lang', lang);
  applyLanguage();
  const sel = document.getElementById('langSwitch');
  if(sel) sel.value = lang;
  document.dispatchEvent(new CustomEvent('haesa:languagechange', { detail: { lang } }));
}

// For use inside data.js render functions (small fixed UI strings
// like "Deadline:" or "Read more →") — falls back to English.
function t(key){
  const lang = getLang();
  return (T[key] && T[key][lang]) || (T[key] && T[key].en) || key;
}

function applyLanguage(){
  const lang = getLang();
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if(T[key]){
      el.innerHTML = T[key][lang] || T[key].en;
    }
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    if(T[key]) el.setAttribute('placeholder', T[key][lang] || T[key].en);
  });
  document.documentElement.setAttribute('lang', lang);
}

function injectLanguageSwitcher(){
  const nav = document.querySelector('header nav');
  if(!nav || document.getElementById('langSwitch')) return;
  const sel = document.createElement('select');
  sel.id = 'langSwitch';
  sel.setAttribute('aria-label', 'Language');
  sel.style.cssText = 'margin-left:4px;padding:7px 10px;border-radius:3px;border:1px solid var(--line);background:#fff;font-family:Karla,sans-serif;font-size:13.5px;cursor:pointer;';
  Object.keys(LANGS).forEach(code => {
    const opt = document.createElement('option');
    opt.value = code;
    opt.textContent = LANGS[code];
    sel.appendChild(opt);
  });
  sel.value = getLang();
  sel.addEventListener('change', () => setLang(sel.value));
  nav.appendChild(sel);
}

function initMobileMenu(){
  const toggle = document.getElementById('menuToggle');
  const links = document.querySelector('header nav .nav-links');
  if(!toggle || !links) return;
  toggle.addEventListener('click', () => {
    const isOpen = links.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.textContent = isOpen ? '✕' : '☰';
  });
  // Close the menu after tapping a link, so it doesn't stay open on the next page
  links.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.textContent = '☰';
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  injectLanguageSwitcher();
  applyLanguage();
  initMobileMenu();
});
