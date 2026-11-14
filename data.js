/* =========================================================
   HAESA CONNECT — shared data file
   Edit the arrays below to add opportunities or articles.
   No build step needed — save the file and refresh the page.
   ========================================================= */

/* All 54 African Union member states, for the sign-up country field */
const AFRICAN_COUNTRIES = [
  "Algeria","Angola","Benin","Botswana","Burkina Faso","Burundi","Cabo Verde",
  "Cameroon","Central African Republic","Chad","Comoros",
  "Congo, Democratic Republic of the","Congo, Republic of the","Côte d'Ivoire",
  "Djibouti","Egypt","Equatorial Guinea","Eritrea","Eswatini","Ethiopia",
  "Gabon","Gambia","Ghana","Guinea","Guinea-Bissau","Kenya","Lesotho",
  "Liberia","Libya","Madagascar","Malawi","Mali","Mauritania","Mauritius",
  "Morocco","Mozambique","Namibia","Niger","Nigeria","Rwanda",
  "São Tomé and Príncipe","Senegal","Seychelles","Sierra Leone","Somalia",
  "South Africa","South Sudan","Sudan","Tanzania","Togo","Tunisia","Uganda",
  "Zambia","Zimbabwe"
];

/* ---------------------------------------------------------
   OPPORTUNITIES
   sector: business | education | finance | entertainment | export | technology | diplomacy | funding
   To add one: copy an object below, edit the fields, add a comma.
   This is a hand-curated, periodically-refreshed list — always confirm
   deadlines and details on the organisation's own site before applying.
--------------------------------------------------------- */
const OPPORTUNITIES = [
  { sector:"business", title:"AHTS Fellowship", org:"Africa Health & Tech Summit", location:"Kigali, Rwanda", type:"Fellowship", deadline:"Rolling", blurb:{en:"Hands-on placement supporting one of Africa's leading innovation summits — program coordination, partnerships, delegate management and communications.", fr:"Un stage pratique au service de l'un des plus grands sommets africains de l'innovation — coordination de programme, partenariats, gestion des délégués et communication.", es:"Una pasantía práctica que apoya una de las principales cumbres de innovación de África — coordinación de programas, alianzas, gestión de delegados y comunicación.", pt:"Um estágio prático que apoia uma das principais cúpulas de inovação de África — coordenação de programas, parcerias, gestão de delegados e comunicação."}, link:"https://nextbillion.net/business-development/the-ahts-fellowship-2026/" },
  { sector:"business", title:"Anzisha Prize Fellowship", org:"African Leadership Academy", location:"Pan-African", type:"2-year fellowship", deadline:"Check listing", blurb:{en:"For young entrepreneurs already running a business: two years of coaching, funding and a pan-African founder network, with prizes up to $40,000.", fr:"Pour les jeunes entrepreneurs qui dirigent déjà une entreprise : deux ans de coaching, de financement et un réseau panafricain de fondateurs, avec des prix pouvant atteindre 40 000 $.", es:"Para jóvenes emprendedores que ya dirigen un negocio: dos años de coaching, financiación y una red panafricana de fundadores, con premios de hasta $40,000.", pt:"Para jovens empreendedores que já dirigem um negócio: dois anos de coaching, financiamento e uma rede pan-africana de fundadores, com prémios até $40.000."}, link:"https://msmeafricaonline.com/?p=56095" },
  { sector:"business", title:"Nigeria Jubilee Fellows Programme", org:"Federal Government of Nigeria & UNDP", location:"Nigeria", type:"12-month paid placement", deadline:"Check listing", blurb:{en:"Paid placements with reputable Nigerian organisations, built to tackle graduate unemployment and grow real workplace skills.", fr:"Des stages rémunérés auprès d'organisations nigérianes reconnues, conçus pour lutter contre le chômage des diplômés et développer de vraies compétences professionnelles.", es:"Pasantías remuneradas con organizaciones nigerianas reconocidas, diseñadas para combatir el desempleo de egresados y desarrollar habilidades laborales reales.", pt:"Estágios remunerados com organizações nigerianas respeitadas, criados para combater o desemprego de recém-formados e desenvolver competências profissionais reais."}, link:"https://green-jobs-rising.beehiiv.com/p/the-opportunity-edit" },

  { sector:"education", title:"Mo Ibrahim Foundation Scholarship at SOAS", org:"Mo Ibrahim Foundation / SOAS University of London", location:"United Kingdom", type:"Fully-funded Master's scholarship", deadline:"Check listing", blurb:{en:"Full tuition plus a living-cost stipend for a one-year, full-time Master's at SOAS for African students.", fr:"Frais de scolarité complets plus une allocation de subsistance pour un master d'un an à temps plein à SOAS, destiné aux étudiants africains.", es:"Matrícula completa más un estipendio de manutención para una maestría de un año a tiempo completo en SOAS, para estudiantes africanos.", pt:"Propinas integrais mais um subsídio de subsistência para um mestrado de um ano a tempo inteiro na SOAS, para estudantes africanos."}, link:"https://www.schoolofstjude.org/?p=383610" },
  { sector:"education", title:"Africa Fellows in Education Program (AFEP)", org:"Partnership for Economic Policy", location:"Sub-Saharan Africa", type:"2-year research fellowship", deadline:"30 June 2026", blurb:{en:"Fully supported fellowship building the skills of young African researchers working on education policy and evidence-based decision-making.", fr:"Fellowship entièrement financé pour développer les compétences de jeunes chercheurs africains travaillant sur les politiques éducatives et la prise de décision fondée sur des données probantes.", es:"Fellowship totalmente financiado para desarrollar las habilidades de jóvenes investigadores africanos que trabajan en política educativa y toma de decisiones basada en evidencia.", pt:"Fellowship totalmente apoiado para desenvolver as competências de jovens investigadores africanos que trabalham em política educativa e tomada de decisão baseada em evidências."}, link:"https://opportunitydesk.org/2026/05/07/africa-fellows-in-education-program-2026-2027/" },
  { sector:"education", title:"African Graduate Fellowship", org:"American University in Cairo", location:"Cairo, Egypt", type:"Fully-funded Master's fellowship", deadline:"Check listing", blurb:{en:"Tuition, a monthly stipend and housing support for African nationals admitted to a full-time Master's programme at AUC.", fr:"Frais de scolarité, allocation mensuelle et aide au logement pour les ressortissants africains admis à un programme de master à temps plein à l'AUC.", es:"Matrícula, un estipendio mensual y apoyo de vivienda para nacionales africanos admitidos en un programa de maestría a tiempo completo en la AUC.", pt:"Propinas, subsídio mensal e apoio à habitação para cidadãos africanos admitidos num programa de mestrado a tempo inteiro na AUC."}, link:"https://propakistani.pk/edunation/?p=1772" },

  { sector:"finance", title:"Standard Chartered Bank Internship Programme", org:"Standard Chartered", location:"Multiple African markets", type:"Paid internship", deadline:"Check listing", blurb:{en:"Hands-on exposure to global banking operations for African students and recent graduates, with room to contribute ideas from day one.", fr:"Une expérience pratique des opérations bancaires mondiales pour les étudiants et jeunes diplômés africains, avec la possibilité de contribuer des idées dès le premier jour.", es:"Experiencia práctica en operaciones bancarias globales para estudiantes y egresados recientes africanos, con espacio para aportar ideas desde el primer día.", pt:"Experiência prática em operações bancárias globais para estudantes e recém-formados africanos, com espaço para contribuir com ideias desde o primeiro dia."}, link:"https://msmeafricaonline.com/?p=61104" },
  { sector:"finance", title:"AfDB Internship Program", org:"African Development Bank", location:"Abidjan HQ & regional offices", type:"Internship", deadline:"Check listing", blurb:{en:"Placements across economics, statistics, investment and finance, aligned with the Bank's Ten-Year Strategy.", fr:"Des stages dans les domaines de l'économie, des statistiques, de l'investissement et de la finance, en lien avec la stratégie décennale de la Banque.", es:"Pasantías en economía, estadística, inversión y finanzas, alineadas con la Estrategia Decenal del Banco.", pt:"Estágios em economia, estatística, investimento e finanças, alinhados com a Estratégia Decenal do Banco."}, link:"https://etcareers.com/jobs/african-development-bank-internship-program-2026-session-2-7331a2f9" },
  { sector:"finance", title:"Afreximbank Internship Programme", org:"African Export-Import Bank", location:"Cairo (Group-wide)", type:"Paid internship · $1,000/month stipend", deadline:"Check listing", blurb:{en:"Practical experience in trade finance and African economic development alongside Afreximbank Group professionals.", fr:"Une expérience pratique du financement du commerce et du développement économique africain aux côtés des professionnels du Groupe Afreximbank.", es:"Experiencia práctica en financiamiento comercial y desarrollo económico africano junto a profesionales del Grupo Afreximbank.", pt:"Experiência prática em financiamento comercial e desenvolvimento económico africano ao lado de profissionais do Grupo Afreximbank."}, link:"https://msmeafricaonline.com/?p=66752" },

  { sector:"entertainment", title:"Music In Africa Foundation Internship", org:"Music In Africa Foundation (NEFCISA)", location:"South Africa", type:"Internship", deadline:"Check listing", blurb:{en:"Work experience across content, research, communications and community engagement inside Africa's music and creative economy.", fr:"Une expérience professionnelle dans les contenus, la recherche, la communication et l'engagement communautaire au sein de l'économie musicale et créative africaine.", es:"Experiencia laboral en contenido, investigación, comunicaciones y participación comunitaria dentro de la economía musical y creativa de África.", pt:"Experiência profissional em conteúdo, investigação, comunicação e envolvimento comunitário dentro da economia musical e criativa de África."}, link:"https://www.musicinafrica.net/node/376180" },
  { sector:"entertainment", title:"Africa Film Society Internship Programme", org:"Africa Film Society", location:"Accra, Ghana", type:"6-month internship · stipend", deadline:"30 July 2026", blurb:{en:"Support curation, archiving, communications and events programming at a leading institution for African cinema heritage.", fr:"Participez à la curation, aux archives, à la communication et à la programmation d'événements au sein d'une institution de référence pour le patrimoine cinématographique africain.", es:"Apoya la curaduría, el archivo, las comunicaciones y la programación de eventos en una institución líder del patrimonio cinematográfico africano.", pt:"Apoie a curadoria, o arquivo, as comunicações e a programação de eventos numa instituição de referência do património cinematográfico africano."}, link:"https://artsloungenyc.com/2026/07/09/africa-film-society-opens-applications-for-2026-internship-programme/" },
  { sector:"entertainment", title:"Film & Photography Internship", org:"Art in Tanzania", location:"Dar es Salaam, Tanzania", type:"Flexible-length internship", deadline:"Rolling", blurb:{en:"On-set production experience across local TV, documentary and music-video work, plus training responsibilities for the local team.", fr:"Une expérience de production sur le plateau dans la télévision locale, le documentaire et les clips musicaux, avec des responsabilités de formation pour l'équipe locale.", es:"Experiencia de producción en set para televisión local, documentales y videos musicales, además de responsabilidades de formación para el equipo local.", pt:"Experiência de produção em set para televisão local, documentários e videoclipes, além de responsabilidades de formação para a equipa local."}, link:"https://www.idealist.org/en/nonprofit-internship/b76482c6aa964febaa87b6cd4f3e46cf-film-production-internship-in-africa-art-in-tanzania-dar-es-salaam" },

  { sector:"export", title:"AfCFTA Secretariat Internship Program", org:"African Continental Free Trade Area Secretariat", location:"Accra, Ghana", type:"Internship", deadline:"Check listing", blurb:{en:"Work on projects tied to the Secretariat's strategic priorities, building analytical and technical experience in continental trade policy.", fr:"Travaillez sur des projets liés aux priorités stratégiques du Secrétariat, en développant une expérience analytique et technique en politique commerciale continentale.", es:"Trabaja en proyectos vinculados a las prioridades estratégicas de la Secretaría, desarrollando experiencia analítica y técnica en política comercial continental.", pt:"Trabalhe em projetos ligados às prioridades estratégicas do Secretariado, desenvolvendo experiência analítica e técnica em política comercial continental."}, link:"https://msmeafricaonline.com/call-for-applications-the-african-continental-free-trade-area-afcfta-internship-program/" },
  { sector:"export", title:"One Trade Africa — Ghana AfCFTA Intern", org:"International Trade Centre", location:"Remote (Ghana-focused)", type:"6-month internship", deadline:"Check listing", blurb:{en:"Support work helping African MSMEs — especially women- and youth-led businesses — access markets opened by the AfCFTA.", fr:"Un travail de soutien qui aide les PME africaines — en particulier celles dirigées par des femmes et des jeunes — à accéder aux marchés ouverts par la ZLECAf.", es:"Trabajo de apoyo que ayuda a las PYME africanas — especialmente negocios liderados por mujeres y jóvenes — a acceder a los mercados abiertos por el AfCFTA.", pt:"Trabalho de apoio que ajuda as PME africanas — especialmente negócios liderados por mulheres e jovens — a aceder aos mercados abertos pela AfCFTA."}, link:"https://untalent.org/jobs/ghana-afcfta-intern" },
  { sector:"export", title:"YouthConnekt Africa Export Accelerator", org:"YouthConnekt Africa", location:"Rwanda, Uganda, Senegal, Gambia, Zambia, Zimbabwe", type:"Accelerator programme", deadline:"Check listing", blurb:{en:"Tailored support to help youth-led businesses strengthen export readiness and expand into new African markets.", fr:"Un accompagnement sur mesure pour aider les entreprises dirigées par des jeunes à renforcer leur préparation à l'export et à s'étendre vers de nouveaux marchés africains.", es:"Apoyo personalizado para ayudar a negocios liderados por jóvenes a fortalecer su preparación para la exportación y expandirse a nuevos mercados africanos.", pt:"Apoio personalizado para ajudar negócios liderados por jovens a fortalecer a preparação para exportação e expandir para novos mercados africanos."}, link:"https://msmeafricaonline.com/?p=72161" },

  { sector:"technology", title:"AI for Good Fellowship", org:"Code for Africa / Digitalize Youth", location:"Sahel, West & East Africa", type:"Fellowship · $500/month stipend", deadline:"Check listing", blurb:{en:"Supports African technologists applying AI to strengthen the work of human-rights and civic organisations.", fr:"Soutient les technologues africains qui appliquent l'IA pour renforcer le travail des organisations de défense des droits humains et de la société civile.", es:"Apoya a tecnólogos africanos que aplican IA para fortalecer el trabajo de organizaciones de derechos humanos y de la sociedad civil.", pt:"Apoia tecnólogos africanos que aplicam IA para fortalecer o trabalho de organizações de direitos humanos e da sociedade civil."}, link:"https://msmeafricaonline.com/?p=67658" },
  { sector:"technology", title:"CivicHive Civic Tech Fellowship", org:"CivicHive", location:"West Africa", type:"20-week bootcamp · stipend", deadline:"11 February 2026", blurb:{en:"Incubates civic-tech ideas that strengthen accountability, participation and service delivery, with mentorship and a regional network.", fr:"Incube des idées de technologie civique qui renforcent la redevabilité, la participation et la prestation de services, avec mentorat et réseau régional.", es:"Incuba ideas de tecnología cívica que fortalecen la rendición de cuentas, la participación y la prestación de servicios, con mentoría y una red regional.", pt:"Incuba ideias de tecnologia cívica que fortalecem a prestação de contas, a participação e a prestação de serviços, com mentoria e uma rede regional."}, link:"https://opportunitydesk.org/2026/01/26/civichive-civic-tech-fellowship-west-africa-2026/" },
  { sector:"technology", title:"Yango Fellowship", org:"Yango Group", location:"Côte d'Ivoire, Zambia, Ethiopia, Senegal, Mozambique, Ghana", type:"12-week fellowship", deadline:"Check listing", blurb:{en:"Builds applied AI projects with fellows selected from across six African countries, closing with a Demo Day in Abidjan.", fr:"Développe des projets d'IA appliquée avec des fellows sélectionnés dans six pays africains, se concluant par une journée de démonstration à Abidjan.", es:"Desarrolla proyectos de IA aplicada con fellows seleccionados de seis países africanos, culminando con un Demo Day en Abiyán.", pt:"Desenvolve projetos de IA aplicada com fellows selecionados de seis países africanos, culminando num Demo Day em Abidjan."}, link:"https://www.zambiamonitor.com/?p=85356" },

  { sector:"diplomacy", title:"AU Internship Program", org:"African Union Commission", location:"Addis Ababa, Ethiopia", type:"Internship · 3 months, renewable", deadline:"31 December 2026", blurb:{en:"Cross-departmental exposure to the AU's work, from political affairs to economic development and trade.", fr:"Une exposition transversale au travail de l'UA, des affaires politiques au développement économique et au commerce.", es:"Exposición transversal al trabajo de la UA, desde asuntos políticos hasta desarrollo económico y comercio.", pt:"Exposição transversal ao trabalho da UA, desde assuntos políticos até desenvolvimento económico e comércio."}, link:"https://opportunitydesk.org/2026/02/19/african-union-internship-program-2026/" },
  { sector:"diplomacy", title:"EU Delegation to the African Union Traineeship", org:"European Union", location:"Addis Ababa, Ethiopia", type:"6-month funded traineeship", deadline:"Check listing", blurb:{en:"Political and press-section traineeship supporting EU–AU cooperation, for young graduates in international relations, economics or law.", fr:"Stage dans les sections politique et presse en soutien à la coopération UE-UA, pour les jeunes diplômés en relations internationales, économie ou droit.", es:"Pasantía en las secciones política y de prensa en apoyo a la cooperación UE-UA, para jóvenes egresados en relaciones internacionales, economía o derecho.", pt:"Estágio nas secções política e de imprensa em apoio à cooperação UE-UA, para jovens formados em relações internacionais, economia ou direito."}, link:"https://www.eeas.europa.eu/node/461878_en" },
  { sector:"diplomacy", title:"AU Partnership Unit Internship", org:"United Nations DPPA", location:"New York, USA (hybrid)", type:"Internship · 3–6 months", deadline:"Check listing", blurb:{en:"Supports coordination between the UN and AU on conflict prevention, peacekeeping and peacebuilding.", fr:"Soutient la coordination entre l'ONU et l'UA sur la prévention des conflits, le maintien de la paix et la consolidation de la paix.", es:"Apoya la coordinación entre la ONU y la UA en prevención de conflictos, mantenimiento de la paz y consolidación de la paz.", pt:"Apoia a coordenação entre a ONU e a UA na prevenção de conflitos, manutenção da paz e consolidação da paz."}, link:"https://www.devex.com/jobs/political-affairs-intern-hybrid-1406527" },

  { sector:"funding", title:"Accelerate Africa Startup Programme", org:"Future Africa", location:"Pan-African (kicks off in Lagos, Nigeria)", type:"Equity-free accelerator · potential $250k–$500k follow-on investment", deadline:"25 July 2026", blurb:{en:"12-week, equity-free accelerator for early-stage founders building scalable, impact-driven businesses, with mentorship from investors and operators and possible post-programme investment.", fr:"Un accélérateur de 12 semaines, sans prise de participation, pour les fondateurs en phase précoce qui construisent des entreprises évolutives à impact, avec mentorat d'investisseurs et d'opérateurs et un investissement possible après le programme.", es:"Un acelerador de 12 semanas, sin participación accionaria, para fundadores en etapa inicial que construyen negocios escalables con impacto, con mentoría de inversores y operadores y posible inversión posterior al programa.", pt:"Um acelerador de 12 semanas, sem participação acionária, para fundadores em fase inicial que constroem negócios escaláveis com impacto, com mentoria de investidores e operadores e possível investimento após o programa."}, link:"https://opportunitydesk.org/2026/04/20/accelerate-africa-startup-program-2026/" },
  { sector:"funding", title:"TEF Entrepreneurship Programme", org:"Tony Elumelu Foundation", location:"All 54 African countries", type:"Seed grant · $5,000 non-refundable", deadline:"1 March 2026", blurb:{en:"Africa's largest entrepreneurship philanthropy: non-refundable seed capital, 12 weeks of business training, mentorship and lifetime access to the TEFConnect alumni network.", fr:"La plus grande philanthropie entrepreneuriale d'Afrique : capital d'amorçage non remboursable, 12 semaines de formation commerciale, mentorat et accès à vie au réseau d'anciens TEFConnect.", es:"La mayor filantropía emprendedora de África: capital semilla no reembolsable, 12 semanas de formación empresarial, mentoría y acceso de por vida a la red de egresados TEFConnect.", pt:"A maior filantropia empreendedora de África: capital semente não reembolsável, 12 semanas de formação empresarial, mentoria e acesso vitalício à rede de antigos alunos TEFConnect."}, link:"https://www.tonyelumelufoundation.org/?p=28248" },
  { sector:"funding", title:"Africa's Business Heroes", org:"Alibaba Philanthropy & Jack Ma Foundation", location:"Pan-African", type:"Competition · $1.5M shared grant fund", deadline:"Check listing", blurb:{en:"Annual competition for founders with at least three years of traction; ten finalists split $1.5M in grants plus mentorship, investor access and international exposure.", fr:"Concours annuel pour les fondateurs ayant au moins trois ans de traction ; dix finalistes se partagent 1,5 million de dollars de subventions, plus mentorat, accès aux investisseurs et visibilité internationale.", es:"Competencia anual para fundadores con al menos tres años de tracción; diez finalistas se reparten $1.5M en subvenciones, además de mentoría, acceso a inversores y visibilidad internacional.", pt:"Competição anual para fundadores com pelo menos três anos de tração; dez finalistas dividem $1,5M em subvenções, além de mentoria, acesso a investidores e visibilidade internacional."}, link:"https://africa.com/entrepreneurship/africas-business-heroes-opens-2026-applications-with-1-5-million-for-african-entrepreneurs" },
  { sector:"funding", title:"MEST Africa AI Start-up Program", org:"Meltwater Entrepreneurial School of Technology", location:"Accra, Ghana", type:"Fully-funded accelerator", deadline:"Check listing", blurb:{en:"Immersive, fully-funded program in Accra equipping promising AI entrepreneurs with the technical, business and leadership skills to build globally competitive start-ups.", fr:"Programme immersif et entièrement financé à Accra, dotant des entrepreneurs prometteurs en IA des compétences techniques, commerciales et de leadership nécessaires pour bâtir des start-up compétitives à l'échelle mondiale.", es:"Programa inmersivo y totalmente financiado en Accra que dota a prometedores emprendedores de IA con las habilidades técnicas, empresariales y de liderazgo para construir startups competitivas a nivel global.", pt:"Programa imersivo e totalmente financiado em Acra que dota empreendedores promissores de IA com as competências técnicas, empresariais e de liderança para construir startups competitivas globalmente."}, link:"https://itweb.africa/article/mest-africa-opens-applications-for-2026-ai-start-up-program/P3gQ2qGA3RQ7nRD1" },
  { sector:"funding", title:"Google for Startups Accelerator: Africa", org:"Google", location:"Pan-African, hybrid", type:"3-month hybrid accelerator", deadline:"Check listing", blurb:{en:"Growth-stage technology start-ups get hands-on mentorship, technical support and Google product expertise to scale across African markets.", fr:"Les start-up technologiques en phase de croissance bénéficient d'un mentorat pratique, d'un soutien technique et de l'expertise produit de Google pour se développer sur les marchés africains.", es:"Las startups tecnológicas en etapa de crecimiento reciben mentoría práctica, soporte técnico y experiencia en productos de Google para escalar en los mercados africanos.", pt:"As startups tecnológicas em fase de crescimento recebem mentoria prática, suporte técnico e conhecimento de produtos Google para escalar nos mercados africanos."}, link:"https://msmeafricaonline.com/tag/tech-accelerator/" }
];

/* ---------------------------------------------------------
   ARTICLES / WRITE-UPS / MEDIA
   type: article | writeup | media
   image: optional path under assets/articles/ — leave "" to show a text tile
   To add one: copy an object below and edit the fields.
--------------------------------------------------------- */
const ARTICLES = [
  {
    type: "writeup",
    category: "Travel",
    slug: "flight-delay-airline-refunds-nigeria",
    title: "Flight Delay & Airline Refunds: A Straight-to-the-Point Passenger Guide",
    author: "HAESA CONNECT Editorial",
    date: "2026-10-03",
    image: "",
    excerpt: {en:"What you're actually entitled to after a delayed or cancelled flight — Nigeria's NCAA rules plus EU and UK passenger rights, with a quick claim checklist.", fr:"Ce à quoi vous avez réellement droit après un vol retardé ou annulé — les règles du NCAA nigérian ainsi que les droits des passagers dans l'UE et au Royaume-Uni, avec une liste de vérification rapide.", es:"A qué tienes derecho realmente después de un vuelo retrasado o cancelado — las normas del NCAA de Nigeria además de los derechos de los pasajeros en la UE y el Reino Unido, con una lista rápida de reclamación.", pt:"A que tem realmente direito depois de um voo atrasado ou cancelado — as regras do NCAA da Nigéria além dos direitos dos passageiros na UE e no Reino Unido, com uma lista rápida de reclamação."},
    link: "assets/articles/airline-flight-delay-refunds-nigeria-guide.pdf"
  },
  {
    type: "writeup",
    category: "Economics",
    slug: "individual-trust-fund-setup",
    title: "Setting Up an Individual Trust Fund: A Nigeria-First, Africa-Wide Guide",
    author: "HAESA CONNECT Editorial",
    date: "2026-10-03",
    image: "",
    excerpt: {en:"A practical walkthrough of trust structures, trustees, CAC registration, tax rules and a checklist for expanding across Africa — with a clear note on when to bring in a lawyer.", fr:"Un guide pratique des structures fiduciaires, des fiduciaires, de l'enregistrement auprès de la CAC, des règles fiscales et une liste de vérification pour s'étendre à travers l'Afrique — avec une note claire sur quand faire appel à un avocat.", es:"Una guía práctica de estructuras fiduciarias, fideicomisarios, registro ante la CAC, reglas fiscales y una lista de verificación para expandirse por África — con una nota clara sobre cuándo contratar a un abogado.", pt:"Um guia prático de estruturas fiduciárias, fiduciários, registo na CAC, regras fiscais e uma lista de verificação para expandir por África — com uma nota clara sobre quando contratar um advogado."},
    link: "assets/articles/individual-trust-fund-setup-nigeria-africa-guide.pdf"
  },
  {
    type: "writeup",
    category: "Entrepreneurship",
    slug: "ecommerce-for-university-students",
    title: "E-Commerce for University Students: Idea, Product, Content, Customer",
    author: "HAESA CONNECT Editorial",
    date: "2026-10-03",
    image: "",
    excerpt: {en:"A concise framework for starting a real online business while in school — unit economics, three beginner business models, and a 30-day startup challenge.", fr:"Un cadre concis pour démarrer une vraie entreprise en ligne pendant ses études — économie unitaire, trois modèles d'affaires pour débutants, et un défi de lancement sur 30 jours.", es:"Un marco conciso para iniciar un negocio en línea real mientras estudias — economía unitaria, tres modelos de negocio para principiantes, y un reto de lanzamiento de 30 días.", pt:"Um quadro conciso para iniciar um negócio online real enquanto estuda — economia unitária, três modelos de negócio para iniciantes, e um desafio de lançamento de 30 dias."},
    link: "assets/articles/ecommerce-for-university-students.pdf"
  },
  {
    type: "writeup",
    category: "Entrepreneurship",
    slug: "exporting-from-nigeria-practical-guide",
    title: "Exporting From Nigeria: A Practical Beginner's Guide",
    author: "HAESA CONNECT Editorial",
    date: "2026-10-03",
    image: "",
    excerpt: {en:"Combines Kalu Aja's three-part Export 101 series with current NEPC guidance into one workflow: prepare, research, validate, register, document, ship, get paid.", fr:"Combine la série en trois parties Export 101 de Kalu Aja avec les directives actuelles du NEPC en un seul processus : préparer, rechercher, valider, enregistrer, documenter, expédier, être payé.", es:"Combina la serie de tres partes Export 101 de Kalu Aja con la guía actual del NEPC en un solo flujo: preparar, investigar, validar, registrar, documentar, enviar, cobrar.", pt:"Combina a série em três partes Export 101 de Kalu Aja com a orientação atual do NEPC num único fluxo: preparar, pesquisar, validar, registar, documentar, enviar, receber pagamento."},
    link: "assets/articles/nigeria-exportation-practical-guide.pdf"
  },
  {
    type: "writeup",
    category: "Community",
    title: "October 2026 = Month 1: putting the roadmap into motion",
    author: "Praise Obuma",
    date: "2026-10-01",
    image: "assets/articles/month-1-roadmap.png",
    excerpt: {en:"We're officially putting the 8-month roadmap into motion. Every month, prepare your report — wins, setbacks, numbers, challenges, money spent and earned, partnerships, everything. Assess where you are, adjust the strategy, and map out the next month. By May 2027, we should be looking back at 8 months of documented progress, not just an idea.", fr:"Nous mettons officiellement en mouvement la feuille de route de 8 mois. Chaque mois, préparez votre rapport — réussites, revers, chiffres, défis, argent dépensé et gagné, partenariats, tout. Évaluez où vous en êtes, ajustez la stratégie, et planifiez le mois suivant. D'ici mai 2027, nous devrions pouvoir regarder en arrière sur 8 mois de progrès documentés, pas seulement une idée.", es:"Estamos poniendo oficialmente en marcha la hoja de ruta de 8 meses. Cada mes, prepara tu informe — logros, contratiempos, cifras, desafíos, dinero gastado y ganado, alianzas, todo. Evalúa dónde estás, ajusta la estrategia, y planea el próximo mes. Para mayo de 2027, deberíamos poder mirar atrás a 8 meses de progreso documentado, no solo una idea.", pt:"Estamos oficialmente a pôr em marcha o roteiro de 8 meses. Todos os meses, prepare o seu relatório — conquistas, contratempos, números, desafios, dinheiro gasto e ganho, parcerias, tudo. Avalie onde está, ajuste a estratégia, e planeie o próximo mês. Até maio de 2027, deveríamos conseguir olhar para trás e ver 8 meses de progresso documentado, não apenas uma ideia."},
    link: "https://www.linkedin.com/posts/praise-obuma-7b435b432_october-2026-month-1-were-officially-share-7508245984360017920-0Mgg"
  },
  {
    type: "article",
    category: "History",
    title: "Why oral tradition still matters to African historiography",
    author: "HAESA CONNECT Editorial",
    date: "2026-08-14",
    image: "",
    excerpt: {en:"A short case for treating griots, elders and oral archives as primary sources, not supplementary colour.", fr:"Un plaidoyer concis pour considérer les griots, les anciens et les archives orales comme des sources primaires, et non comme une simple couleur locale.", es:"Un breve argumento para tratar a los griots, los ancianos y los archivos orales como fuentes primarias, no como un simple color de fondo.", pt:"Um breve argumento para tratar os griots, os anciãos e os arquivos orais como fontes primárias, não como mero pano de fundo."},
    link: "#"
  },
  {
    type: "writeup",
    category: "Archaeology",
    title: "Fieldwork notes: a first excavation season",
    author: "Student contributor",
    date: "2026-07-02",
    image: "",
    excerpt: {en:"What a first-year archaeology student learned about stratigraphy, patience and record-keeping in the trench.", fr:"Ce qu'un étudiant d'archéologie en première année a appris sur la stratigraphie, la patience et la tenue de registres dans la tranchée.", es:"Lo que un estudiante de arqueología de primer año aprendió sobre estratigrafía, paciencia y registro de datos en la trinchera.", pt:"O que um estudante de arqueologia do primeiro ano aprendeu sobre estratigrafia, paciência e registo de dados na vala."},
    link: "#"
  },
  {
    type: "article",
    category: "Economics",
    title: "Reading the AfCFTA: what it actually changes for young traders",
    author: "HAESA CONNECT Editorial",
    date: "2026-06-20",
    image: "",
    excerpt: {en:"A plain-language walkthrough of the African Continental Free Trade Area, and where new graduates fit in.", fr:"Une explication simple de la Zone de libre-échange continentale africaine, et de la place qu'y occupent les jeunes diplômés.", es:"Una explicación sencilla del Área de Libre Comercio Continental Africana, y dónde encajan los nuevos egresados.", pt:"Uma explicação simples da Área de Livre Comércio Continental Africana, e onde se encaixam os novos formados."},
    link: "#"
  }
];

/* ---------------------------------------------------------
   RESOURCE CENTER
   category: academics | career | digital-skills | entrepreneurship | opportunities
   level: Beginner | Intermediate | Advanced | All levels
   format: Guide | Template | Checklist | Hub
   trending: true shows it in the "Trending" row on the Resource Center home
   date: used to sort the "Recently added" row (newest first)
   To add one: copy an object below and edit the fields.
--------------------------------------------------------- */
const RESOURCES = [
  { category:"academics", slug:"write-university-project", title:"How to Write a University Project", level:"Beginner", format:"Guide", duration:"10 min read", excerpt:{en:"Why most projects stall on one of three things — an unclear question, weak evidence, or time — and how to fix each one.", fr:"Pourquoi la plupart des projets bloquent sur l'une de ces trois choses — une question floue, des preuves faibles, ou le temps — et comment résoudre chacune.", es:"Por qué la mayoría de los proyectos se estancan por una de tres cosas — una pregunta poco clara, evidencia débil o el tiempo — y cómo solucionar cada una.", pt:"Porque é que a maioria dos projetos empaca por uma de três razões — uma questão pouco clara, provas fracas, ou o tempo — e como resolver cada uma."}, sourceName:"Purdue OWL", link:"https://owl.purdue.edu/owl/general_writing/common_writing_assignments/index.html", trending:true, date:"2026-09-20", content:{
    en:[
      "A university project usually fails for one of three reasons: an unclear question, weak evidence, or running out of time. Fixing those three things solves most of what makes a project feel impossible.",
      "Start by writing your research question as a single sentence, then try to argue against it. If you can't find a counter-argument, the question is too obvious; if you can't defend it either way yet, you need more reading first.",
      "Build an outline before you write a single paragraph of your introduction. A simple structure works for almost any discipline: introduction and question, context or literature, method or approach, findings or argument, discussion, conclusion.",
      "Draft messy first, edit clean second. Trying to write a perfect sentence on the first pass is usually why projects stall — get the argument down, then go back and tighten the language.",
      "Leave real time for referencing and proofreading. This is the stage students cut first, and the one markers notice first."
    ],
    fr:[
      "Un projet universitaire échoue généralement pour l'une de ces trois raisons : une question floue, des preuves faibles, ou le manque de temps. Résoudre ces trois points règle la plupart de ce qui rend un projet impossible à gérer.",
      "Commencez par formuler votre question de recherche en une seule phrase, puis essayez de la contredire. Si vous ne trouvez aucun contre-argument, la question est trop évidente ; si vous ne pouvez pas encore la défendre dans un sens ou dans l'autre, vous devez lire davantage.",
      "Élaborez un plan avant d'écrire le moindre paragraphe de votre introduction. Une structure simple fonctionne pour presque toutes les disciplines : introduction et question, contexte ou littérature, méthode ou approche, résultats ou argumentation, discussion, conclusion.",
      "Rédigez d'abord un brouillon imparfait, puis peaufinez ensuite. Vouloir écrire une phrase parfaite dès le premier jet est souvent la raison pour laquelle les projets bloquent — posez d'abord votre argumentation, puis revenez resserrer le langage.",
      "Prévoyez un vrai temps pour les références et la relecture. C'est l'étape que les étudiants sacrifient en premier, et celle que les correcteurs remarquent en premier."
    ],
    es:[
      "Un proyecto universitario suele fallar por una de tres razones: una pregunta poco clara, evidencia débil, o quedarse sin tiempo. Resolver estos tres puntos soluciona la mayor parte de lo que hace que un proyecto parezca imposible.",
      "Comienza escribiendo tu pregunta de investigación en una sola frase, luego intenta argumentar en contra. Si no encuentras un contraargumento, la pregunta es demasiado obvia; si todavía no puedes defenderla en ningún sentido, necesitas leer más primero.",
      "Elabora un esquema antes de escribir un solo párrafo de tu introducción. Una estructura simple funciona para casi cualquier disciplina: introducción y pregunta, contexto o literatura, método o enfoque, hallazgos o argumento, discusión, conclusión.",
      "Escribe primero un borrador imperfecto, luego edita con calma. Intentar escribir una frase perfecta en el primer intento suele ser la razón por la que los proyectos se estancan — plantea primero el argumento, luego regresa para pulir el lenguaje.",
      "Deja tiempo real para las referencias y la revisión. Esta es la etapa que los estudiantes recortan primero, y la que los evaluadores notan primero."
    ],
    pt:[
      "Um projeto universitário geralmente falha por uma de três razões: uma questão pouco clara, provas fracas, ou falta de tempo. Resolver estes três pontos resolve a maior parte do que torna um projeto impossível de gerir.",
      "Comece por escrever a sua pergunta de investigação numa única frase, depois tente argumentar contra ela. Se não encontrar um contra-argumento, a pergunta é demasiado óbvia; se ainda não conseguir defendê-la em nenhum sentido, precisa de ler mais primeiro.",
      "Elabore um esquema antes de escrever um único parágrafo da sua introdução. Uma estrutura simples funciona para quase qualquer área: introdução e questão, contexto ou literatura, método ou abordagem, resultados ou argumento, discussão, conclusão.",
      "Escreva primeiro um rascunho imperfeito, depois edite com calma. Tentar escrever uma frase perfeita logo à primeira é geralmente a razão pela qual os projetos empacam — primeiro exponha o argumento, depois volte para aperfeiçoar a linguagem.",
      "Deixe tempo real para as referências e a revisão. Esta é a etapa que os estudantes cortam primeiro, e a que os avaliadores notam primeiro."
    ]
  }},
  { category:"academics", slug:"exam-prep-that-works", title:"Exam Prep That Actually Works", level:"Beginner", format:"Guide", duration:"8 min read", excerpt:{en:"Rereading notes feels productive but barely helps under exam pressure. What actually works is testing yourself.", fr:"Relire ses notes donne une impression de productivité mais aide à peine sous la pression des examens. Ce qui fonctionne vraiment, c'est de se tester soi-même.", es:"Releer los apuntes parece productivo pero apenas ayuda bajo la presión de un examen. Lo que realmente funciona es ponerte a prueba a ti mismo.", pt:"Reler os apontamentos parece produtivo mas pouco ajuda sob a pressão de um exame. O que realmente funciona é testar-se a si mesmo."}, sourceName:"University of Southampton Library", link:"https://library.soton.ac.uk/exams", trending:false, date:"2026-09-10", content:{
    en:[
      "Rereading notes and highlighting feels productive but barely helps you remember anything under exam pressure. What actually works is testing yourself — forcing your brain to retrieve the answer, not just recognise it.",
      "Active recall: close the textbook and try to write out what you remember, then check what you missed. Flashcards, practice questions and \"explain it to someone else\" all use this same principle.",
      "Spaced repetition: review material at increasing intervals — a day later, then a few days later, then a week later — instead of cramming it all the night before. Spreading revision out is what moves it into long-term memory.",
      "Use past papers early, not just in the last week. They tell you exactly how your knowledge will actually be tested, which is often different from how it was taught.",
      "Protect your sleep in exam week. Cramming through the night trades long-term memory for a few extra hours of reading, and it's usually a bad trade."
    ],
    fr:[
      "Relire ses notes et surligner donne une impression de productivité, mais aide à peine à mémoriser quoi que ce soit sous la pression de l'examen. Ce qui fonctionne vraiment, c'est de se tester soi-même — forcer son cerveau à retrouver la réponse, pas seulement à la reconnaître.",
      "Rappel actif : fermez le manuel et essayez d'écrire ce dont vous vous souvenez, puis vérifiez ce qui manque. Les fiches de révision, les questions d'entraînement et « l'expliquer à quelqu'un d'autre » reposent tous sur ce même principe.",
      "Répétition espacée : révisez le contenu à intervalles croissants — un jour plus tard, puis quelques jours plus tard, puis une semaine plus tard — plutôt que de tout réviser la veille. Étaler les révisions est ce qui les fait passer en mémoire à long terme.",
      "Utilisez les anciens sujets d'examen tôt, pas seulement la dernière semaine. Ils vous montrent exactement comment vos connaissances seront réellement évaluées, ce qui diffère souvent de la façon dont elles ont été enseignées.",
      "Protégez votre sommeil pendant la semaine d'examens. Réviser toute la nuit échange la mémoire à long terme contre quelques heures de lecture en plus, et c'est généralement un mauvais échange."
    ],
    es:[
      "Releer apuntes y subrayar parece productivo, pero apenas ayuda a recordar algo bajo la presión del examen. Lo que realmente funciona es ponerte a prueba — obligar a tu cerebro a recuperar la respuesta, no solo reconocerla.",
      "Recuperación activa: cierra el libro e intenta escribir lo que recuerdas, luego revisa lo que te faltó. Las tarjetas de estudio, las preguntas de práctica y «explicárselo a otra persona» usan este mismo principio.",
      "Repetición espaciada: repasa el material en intervalos cada vez mayores — un día después, luego unos días después, luego una semana después — en lugar de estudiar todo la noche anterior. Distribuir el repaso es lo que lo lleva a la memoria a largo plazo.",
      "Usa exámenes de años anteriores desde el principio, no solo en la última semana. Te muestran exactamente cómo se evaluará realmente tu conocimiento, que a menudo es diferente de cómo se enseñó.",
      "Protege tu sueño durante la semana de exámenes. Estudiar toda la noche cambia la memoria a largo plazo por unas horas extra de lectura, y normalmente es un mal intercambio."
    ],
    pt:[
      "Reler apontamentos e sublinhar parece produtivo, mas pouco ajuda a memorizar sob a pressão do exame. O que realmente funciona é testar-se a si mesmo — obrigar o cérebro a recuperar a resposta, não apenas reconhecê-la.",
      "Recordação ativa: feche o livro e tente escrever o que se lembra, depois verifique o que faltou. Os cartões de estudo, as perguntas de prática e «explicar a outra pessoa» usam todos este mesmo princípio.",
      "Repetição espaçada: reveja o material em intervalos crescentes — um dia depois, depois alguns dias depois, depois uma semana depois — em vez de estudar tudo na véspera. Distribuir a revisão é o que a leva para a memória de longo prazo.",
      "Use exames de anos anteriores desde cedo, não apenas na última semana. Eles mostram exatamente como o seu conhecimento será realmente avaliado, o que muitas vezes é diferente de como foi ensinado.",
      "Proteja o seu sono na semana de exames. Estudar a noite toda troca a memória de longo prazo por mais algumas horas de leitura, e geralmente é uma má troca."
    ]
  }},
  { category:"academics", slug:"referencing-citations-made-simple", title:"Referencing & Citations Made Simple", level:"Beginner", format:"Guide", duration:"6 min read", excerpt:{en:"Referencing exists to do two things: give credit, and let a reader trace your sources. That's the whole point.", fr:"Les références servent à deux choses : donner crédit, et permettre au lecteur de retracer vos sources. C'est tout l'intérêt.", es:"Las referencias existen para dos cosas: dar crédito y permitir que el lector rastree tus fuentes. Ese es todo el sentido.", pt:"As referências existem para duas coisas: dar crédito e permitir que o leitor rastreie as suas fontes. Esse é todo o propósito."}, sourceName:"Purdue OWL", link:"https://owl.purdue.edu/owl/research_and_citation/resources.html", trending:false, date:"2026-08-28", content:{
    en:[
      "Referencing exists to do two things: give credit, and let a reader trace your sources. Once you see it that way, the rules make more sense than they look.",
      "Pick one citation style — APA is common in the social sciences and economics, MLA in the humanities, Chicago in history — and use it consistently through the whole document, not a mix.",
      "Every in-text citation needs a matching entry in your reference list, and every reference list entry needs to be cited somewhere in the text. Mismatches are one of the most common marks lost on referencing.",
      "Keep a running reference list as you research, not at the end. Trying to reconstruct where a quote came from the night before submission wastes hours.",
      "Free tools can auto-format references, but always double-check the output against your style guide — automated tools get edge cases wrong."
    ],
    fr:[
      "Les références servent à deux choses : donner crédit, et permettre au lecteur de retracer vos sources. Une fois qu'on voit les choses ainsi, les règles ont plus de sens qu'il n'y paraît.",
      "Choisissez un seul style de citation — l'APA est courant en sciences sociales et en économie, le MLA en lettres, le Chicago en histoire — et utilisez-le de façon cohérente dans tout le document, sans le mélanger avec un autre.",
      "Chaque citation dans le texte doit correspondre à une entrée dans votre liste de références, et chaque entrée de la liste doit être citée quelque part dans le texte. Les incohérences sont l'une des pertes de points les plus fréquentes sur les références.",
      "Tenez une liste de références au fur et à mesure de vos recherches, pas à la fin. Essayer de retrouver d'où vient une citation la veille de la remise fait perdre des heures.",
      "Des outils gratuits peuvent formater automatiquement les références, mais vérifiez toujours le résultat par rapport à votre guide de style — les outils automatisés se trompent souvent sur les cas particuliers."
    ],
    es:[
      "Las referencias existen para dos cosas: dar crédito y permitir que el lector rastree tus fuentes. Una vez que lo ves así, las reglas tienen más sentido de lo que parecen.",
      "Elige un solo estilo de citación — APA es común en ciencias sociales y economía, MLA en humanidades, Chicago en historia — y úsalo de forma consistente en todo el documento, sin mezclarlo.",
      "Cada cita en el texto necesita una entrada correspondiente en tu lista de referencias, y cada entrada de la lista debe citarse en algún lugar del texto. Las discrepancias son una de las pérdidas de puntos más comunes en las referencias.",
      "Mantén una lista de referencias continua mientras investigas, no al final. Intentar reconstruir de dónde salió una cita la noche antes de entregar te hace perder horas.",
      "Las herramientas gratuitas pueden formatear automáticamente las referencias, pero siempre verifica el resultado con tu guía de estilo — las herramientas automáticas fallan en los casos particulares."
    ],
    pt:[
      "As referências existem para duas coisas: dar crédito e permitir que o leitor rastreie as suas fontes. Depois de ver assim, as regras fazem mais sentido do que parecem.",
      "Escolha um único estilo de citação — o APA é comum em ciências sociais e economia, o MLA em humanidades, o Chicago em história — e use-o de forma consistente em todo o documento, sem misturar.",
      "Cada citação no texto precisa de uma entrada correspondente na sua lista de referências, e cada entrada da lista deve ser citada algures no texto. As incompatibilidades são uma das perdas de pontos mais comuns nas referências.",
      "Mantenha uma lista de referências contínua enquanto investiga, não no final. Tentar reconstruir de onde veio uma citação na véspera da entrega faz perder horas.",
      "As ferramentas gratuitas podem formatar automaticamente as referências, mas verifique sempre o resultado com o seu guia de estilo — as ferramentas automáticas erram em casos particulares."
    ]
  }},

  { category:"career", slug:"build-a-cv-that-gets-shortlisted", title:"Build a CV That Gets Shortlisted", level:"Beginner", format:"Template", duration:"12 min read", excerpt:{en:"A CV gets scanned, not read, for the first 6–8 seconds. Here's what needs to be obvious in that window.", fr:"Un CV est scanné, pas lu, pendant les 6 à 8 premières secondes. Voici ce qui doit être évident dans ce laps de temps.", es:"Un CV se escanea, no se lee, durante los primeros 6 a 8 segundos. Esto es lo que debe ser evidente en ese tiempo.", pt:"Um CV é digitalizado, não lido, nos primeiros 6 a 8 segundos. Eis o que precisa de ser óbvio nesse intervalo."}, sourceName:"UK National Careers Service", link:"https://nationalcareers.service.gov.uk/careers-advice/cv-sections", trending:true, date:"2026-09-25", content:{
    en:[
      "A CV gets scanned, not read, for the first 6–8 seconds. Your name, your strongest qualification, and what role you want should be obvious at a glance.",
      "Lead with what's strongest for the role you're applying to — for a student with little work history, that's often education, projects and skills, not a thin work experience section.",
      "Use action verbs and results, not duties: \"Led a team of 5 to deliver X\" beats \"Responsible for team.\" Numbers make achievements concrete, even rough ones.",
      "Keep it to one page as a student or early-career applicant. A recruiter would rather read one tight page than skim three padded ones.",
      "Tailor it for every application. The version that lists everything you've ever done is a master copy to cut from, not a CV to send out."
    ],
    fr:[
      "Un CV est scanné, pas lu, pendant les 6 à 8 premières secondes. Votre nom, votre meilleure qualification et le poste que vous visez doivent être évidents en un coup d'œil.",
      "Mettez en avant ce qui est le plus fort pour le poste visé — pour un étudiant avec peu d'expérience professionnelle, il s'agit souvent de la formation, des projets et des compétences, plutôt que d'une section expérience trop mince.",
      "Utilisez des verbes d'action et des résultats, pas des tâches : « A dirigé une équipe de 5 personnes pour livrer X » vaut mieux que « Responsable d'une équipe ». Les chiffres rendent les réalisations concrètes, même approximatifs.",
      "Limitez-le à une page en tant qu'étudiant ou jeune diplômé. Un recruteur préfère lire une page concise plutôt que de survoler trois pages délayées.",
      "Adaptez-le à chaque candidature. La version qui liste tout ce que vous avez déjà fait est une copie maîtresse à partir de laquelle couper, pas un CV à envoyer tel quel."
    ],
    es:[
      "Un CV se escanea, no se lee, durante los primeros 6 a 8 segundos. Tu nombre, tu calificación más fuerte y el puesto que buscas deben ser evidentes de un vistazo.",
      "Destaca lo más fuerte para el puesto al que aplicas — para un estudiante con poca experiencia laboral, suele ser la educación, los proyectos y las habilidades, no una sección de experiencia laboral escasa.",
      "Usa verbos de acción y resultados, no tareas: «Lideró un equipo de 5 personas para entregar X» es mejor que «Responsable del equipo». Los números hacen que los logros sean concretos, incluso si son aproximados.",
      "Mantenlo en una página como estudiante o candidato en etapa inicial. Un reclutador prefiere leer una página concisa que hojear tres páginas infladas.",
      "Adáptalo a cada postulación. La versión que enumera todo lo que has hecho es una copia maestra de la que recortar, no un CV para enviar."
    ],
    pt:[
      "Um CV é digitalizado, não lido, nos primeiros 6 a 8 segundos. O seu nome, a sua qualificação mais forte e o cargo que procura devem ser óbvios à primeira vista.",
      "Destaque o que é mais forte para a vaga a que se candidata — para um estudante com pouca experiência profissional, isso costuma ser a formação, os projetos e as competências, não uma secção de experiência fraca.",
      "Use verbos de ação e resultados, não tarefas: «Liderou uma equipa de 5 pessoas para entregar X» é melhor do que «Responsável pela equipa». Os números tornam as conquistas concretas, mesmo que aproximados.",
      "Mantenha-o numa página como estudante ou candidato em início de carreira. Um recrutador prefere ler uma página concisa do que folhear três páginas infladas.",
      "Adapte-o a cada candidatura. A versão que lista tudo o que já fez é uma cópia mestra da qual cortar, não um CV para enviar."
    ]
  }},
  { category:"career", slug:"acing-your-first-interview", title:"Acing Your First Interview", level:"Beginner", format:"Guide", duration:"10 min read", excerpt:{en:"Most interview nerves come from not knowing what you'll be asked. You can't predict every question — but you can predict their shape.", fr:"La plupart du stress en entretien vient du fait de ne pas savoir ce qu'on va vous demander. Vous ne pouvez pas prédire chaque question — mais vous pouvez en prédire la forme.", es:"La mayoría de los nervios en una entrevista vienen de no saber qué te preguntarán. No puedes predecir cada pregunta — pero puedes predecir su forma.", pt:"A maior parte do nervosismo numa entrevista vem de não saber o que vai ser perguntado. Não é possível prever cada pergunta — mas é possível prever o seu formato."}, sourceName:"UK National Careers Service", link:"https://nationalcareers.service.gov.uk/careers-advice/interview-advice/the-star-method", trending:true, date:"2026-09-15", content:{
    en:[
      "Most interview nerves come from not knowing what you'll be asked. You can't predict every question, but you can predict the shape of most of them.",
      "Use the STAR method for competency questions: Situation, Task, Action, Result. It keeps your answer concrete instead of vague, and gives the interviewer something specific to remember.",
      "Prepare 3–4 stories from your experience — a challenge you solved, a time you worked in a team, a mistake you learned from — and adapt them to most questions you're asked.",
      "Research the organisation beyond its homepage: recent news, its mission, who you're speaking to if you know. One specific, informed question back to them goes a long way.",
      "Arrive (or log in) early, and treat the small talk before the interview officially \"starts\" as part of the interview. First impressions form fast."
    ],
    fr:[
      "La plupart du stress en entretien vient du fait de ne pas savoir ce qu'on va vous demander. Vous ne pouvez pas prédire chaque question, mais vous pouvez en prédire la forme pour la plupart.",
      "Utilisez la méthode STAR pour les questions de compétences : Situation, Tâche, Action, Résultat. Elle rend votre réponse concrète plutôt que vague, et donne à l'intervieweur quelque chose de précis à retenir.",
      "Préparez 3 à 4 histoires issues de votre expérience — un défi résolu, un travail d'équipe, une erreur dont vous avez tiré des leçons — et adaptez-les à la plupart des questions posées.",
      "Renseignez-vous sur l'organisation au-delà de sa page d'accueil : actualités récentes, sa mission, qui vous interviewera si vous le savez. Une question précise et informée en retour fait toute la différence.",
      "Arrivez (ou connectez-vous) en avance, et considérez la conversation informelle avant le début officiel de l'entretien comme faisant partie de l'entretien. Les premières impressions se forment vite."
    ],
    es:[
      "La mayoría de los nervios en una entrevista vienen de no saber qué te preguntarán. No puedes predecir cada pregunta, pero sí puedes predecir la forma de la mayoría.",
      "Usa el método STAR para las preguntas de competencias: Situación, Tarea, Acción, Resultado. Mantiene tu respuesta concreta en lugar de vaga, y le da al entrevistador algo específico que recordar.",
      "Prepara 3 a 4 historias de tu experiencia — un desafío que resolviste, una vez que trabajaste en equipo, un error del que aprendiste — y adáptalas a la mayoría de las preguntas que te hagan.",
      "Investiga la organización más allá de su página principal: noticias recientes, su misión, quién te entrevistará si lo sabes. Una pregunta específica e informada de vuelta marca la diferencia.",
      "Llega (o conéctate) temprano, y trata la charla informal antes de que la entrevista «empiece» oficialmente como parte de la entrevista. Las primeras impresiones se forman rápido."
    ],
    pt:[
      "A maior parte do nervosismo numa entrevista vem de não saber o que vai ser perguntado. Não é possível prever cada pergunta, mas é possível prever o formato da maioria delas.",
      "Use o método STAR para perguntas de competências: Situação, Tarefa, Ação, Resultado. Mantém a sua resposta concreta em vez de vaga, e dá ao entrevistador algo específico para lembrar.",
      "Prepare 3 a 4 histórias da sua experiência — um desafio que resolveu, uma vez que trabalhou em equipa, um erro com o qual aprendeu — e adapte-as à maioria das perguntas feitas.",
      "Pesquise sobre a organização além da sua página inicial: notícias recentes, a sua missão, quem vai entrevistá-lo se souber. Uma pergunta específica e informada de volta faz toda a diferença.",
      "Chegue (ou ligue-se) cedo, e trate a conversa informal antes de a entrevista «começar» oficialmente como parte da entrevista. As primeiras impressões formam-se rapidamente."
    ]
  }},
  { category:"career", slug:"linkedin-profile-for-students", title:"Building a LinkedIn Profile as a Student", level:"Beginner", format:"Guide", duration:"8 min read", excerpt:{en:"Your LinkedIn is often the first thing a recruiter checks after your CV — it should back it up, not just repeat it.", fr:"Votre LinkedIn est souvent la première chose qu'un recruteur consulte après votre CV — il doit le renforcer, pas seulement le répéter.", es:"Tu LinkedIn suele ser lo primero que revisa un reclutador después de tu CV — debe respaldarlo, no solo repetirlo.", pt:"O seu LinkedIn é muitas vezes a primeira coisa que um recrutador verifica depois do CV — deve reforçá-lo, não apenas repeti-lo."}, sourceName:"LinkedIn Help Centre", link:"https://www.linkedin.com/help/linkedin", trending:false, date:"2026-09-02", content:{
    en:[
      "Your LinkedIn profile is often the first thing a recruiter checks after your CV — it should back up what your CV says, not just repeat it.",
      "Use a clear, friendly headshot and write a headline that says what you're aiming for, not just \"Student at X University\" — e.g. \"Economics student focused on trade policy in West Africa.\"",
      "Your About section is where personality can show through: why you're studying what you're studying, what you're building toward, and what you're open to right now.",
      "List projects, coursework and volunteer work even without formal jobs — LinkedIn rewards specifics over a blank profile.",
      "Connect deliberately: classmates, lecturers, alumni from your department, people working in roles you're curious about. A short, specific connection note works far better than a blank request."
    ],
    fr:[
      "Votre profil LinkedIn est souvent la première chose qu'un recruteur consulte après votre CV — il doit confirmer ce que dit votre CV, pas simplement le répéter.",
      "Utilisez une photo de profil claire et avenante, et rédigez un titre qui indique ce que vous visez, pas seulement « Étudiant à l'université X » — par exemple « Étudiant en économie spécialisé en politique commerciale en Afrique de l'Ouest ».",
      "La section « À propos » est l'endroit où votre personnalité peut transparaître : pourquoi vous étudiez ce que vous étudiez, vers quoi vous tendez, et ce à quoi vous êtes ouvert actuellement.",
      "Listez vos projets, vos travaux universitaires et votre bénévolat, même sans emploi formel — LinkedIn valorise les détails concrets plutôt qu'un profil vide.",
      "Connectez-vous de façon réfléchie : camarades de classe, enseignants, anciens de votre département, personnes occupant des postes qui vous intéressent. Un message de connexion court et précis fonctionne bien mieux qu'une demande vide."
    ],
    es:[
      "Tu perfil de LinkedIn suele ser lo primero que revisa un reclutador después de tu CV — debe respaldar lo que dice tu CV, no solo repetirlo.",
      "Usa una foto de perfil clara y amigable, y escribe un titular que diga hacia dónde te diriges, no solo «Estudiante en la Universidad X» — por ejemplo, «Estudiante de economía enfocado en política comercial en África Occidental».",
      "Tu sección «Acerca de» es donde puede transparentarse tu personalidad: por qué estudias lo que estudias, hacia dónde te diriges, y a qué estás abierto ahora mismo.",
      "Enumera proyectos, trabajos de curso y voluntariado incluso sin empleos formales — LinkedIn premia lo específico frente a un perfil vacío.",
      "Conéctate de forma deliberada: compañeros de clase, profesores, egresados de tu departamento, personas en roles que te interesan. Una nota de conexión breve y específica funciona mucho mejor que una solicitud vacía."
    ],
    pt:[
      "O seu perfil do LinkedIn é muitas vezes a primeira coisa que um recrutador verifica depois do CV — deve confirmar o que o CV diz, não apenas repeti-lo.",
      "Use uma foto de perfil clara e simpática, e escreva um título que diga para onde se dirige, não apenas «Estudante na Universidade X» — por exemplo, «Estudante de economia focado em política comercial na África Ocidental».",
      "A secção «Sobre» é onde a sua personalidade pode transparecer: porque estuda o que estuda, para onde se dirige, e ao que está aberto neste momento.",
      "Liste projetos, trabalhos académicos e voluntariado mesmo sem empregos formais — o LinkedIn recompensa detalhes concretos em vez de um perfil vazio.",
      "Conecte-se de forma deliberada: colegas de turma, professores, antigos alunos do seu departamento, pessoas em funções que lhe interessam. Uma nota de conexão curta e específica funciona muito melhor do que um pedido vazio."
    ]
  }},

  { category:"digital-skills", slug:"ai-tools-for-students", title:"AI Tools Every Student Should Know", level:"Beginner", format:"Guide", duration:"9 min read", excerpt:{en:"The useful AI tools for students fall into four jobs: research, writing support, study aids, and idea generation.", fr:"Les outils d'IA utiles pour les étudiants se répartissent en quatre fonctions : la recherche, le soutien à la rédaction, l'aide à l'étude et la génération d'idées.", es:"Las herramientas de IA útiles para estudiantes se dividen en cuatro funciones: investigación, apoyo a la escritura, ayuda de estudio y generación de ideas.", pt:"As ferramentas de IA úteis para estudantes dividem-se em quatro funções: investigação, apoio à escrita, auxílio de estudo e geração de ideias."}, sourceName:"Elements of AI (University of Helsinki)", link:"https://www.elementsofai.com/", trending:true, date:"2026-09-27", content:{
    en:[
      "The useful AI tools for students generally fall into four jobs: research and summarising, writing support, study aids, and idea generation. Knowing the job you need done matters more than knowing every tool's name.",
      "For research: AI tools can summarise long readings fast, but they can also get facts wrong — always verify a claim before citing it in your own work.",
      "For writing: use AI to get unstuck or restructure a messy draft, not to write the whole thing for you. Markers increasingly recognise AI-generated prose, and more importantly, you lose the practice of thinking it through yourself.",
      "For study: AI can turn your notes into practice questions or flashcards, which plugs directly into the active recall technique covered in our exam prep guide.",
      "Always check your institution's AI policy before using it on graded work — \"didn't know\" is rarely an accepted excuse."
    ],
    fr:[
      "Les outils d'IA utiles pour les étudiants se répartissent généralement en quatre fonctions : la recherche et la synthèse, le soutien à la rédaction, l'aide à l'étude et la génération d'idées. Savoir quelle tâche vous devez accomplir compte plus que connaître le nom de chaque outil.",
      "Pour la recherche : les outils d'IA peuvent résumer rapidement de longues lectures, mais ils peuvent aussi se tromper sur les faits — vérifiez toujours une affirmation avant de la citer dans votre propre travail.",
      "Pour l'écriture : utilisez l'IA pour vous débloquer ou restructurer un brouillon désordonné, pas pour tout rédiger à votre place. Les correcteurs reconnaissent de plus en plus la prose générée par IA, et surtout, vous perdez l'exercice de réflexion personnelle.",
      "Pour l'étude : l'IA peut transformer vos notes en questions d'entraînement ou en fiches de révision, ce qui s'intègre directement à la technique de rappel actif présentée dans notre guide de préparation aux examens.",
      "Vérifiez toujours la politique de votre établissement concernant l'IA avant de l'utiliser pour un travail noté — « je ne savais pas » est rarement une excuse acceptée."
    ],
    es:[
      "Las herramientas de IA útiles para estudiantes generalmente se dividen en cuatro funciones: investigación y resumen, apoyo a la escritura, ayuda de estudio y generación de ideas. Saber qué tarea necesitas resolver importa más que conocer el nombre de cada herramienta.",
      "Para investigación: las herramientas de IA pueden resumir lecturas largas rápidamente, pero también pueden equivocarse en los datos — verifica siempre una afirmación antes de citarla en tu propio trabajo.",
      "Para escribir: usa la IA para destrabarte o reestructurar un borrador desordenado, no para que escriba todo por ti. Los evaluadores reconocen cada vez más la prosa generada por IA, y lo más importante, pierdes la práctica de pensarlo tú mismo.",
      "Para estudiar: la IA puede convertir tus apuntes en preguntas de práctica o tarjetas de estudio, lo cual se conecta directamente con la técnica de recuperación activa de nuestra guía de preparación para exámenes.",
      "Siempre revisa la política de tu institución sobre IA antes de usarla en trabajos calificados — «no lo sabía» rara vez es una excusa aceptada."
    ],
    pt:[
      "As ferramentas de IA úteis para estudantes geralmente dividem-se em quatro funções: investigação e resumo, apoio à escrita, auxílio de estudo e geração de ideias. Saber qual a tarefa que precisa de resolver importa mais do que conhecer o nome de cada ferramenta.",
      "Para investigação: as ferramentas de IA podem resumir leituras longas rapidamente, mas também podem errar factos — verifique sempre uma afirmação antes de a citar no seu próprio trabalho.",
      "Para escrever: use a IA para desbloquear ou reestruturar um rascunho desorganizado, não para escrever tudo por si. Os avaliadores reconhecem cada vez mais a prosa gerada por IA, e mais importante, perde a prática de pensar por si próprio.",
      "Para estudar: a IA pode transformar os seus apontamentos em perguntas de prática ou cartões de estudo, o que se liga diretamente à técnica de recordação ativa do nosso guia de preparação para exames.",
      "Verifique sempre a política da sua instituição sobre IA antes de a usar em trabalhos avaliados — «não sabia» raramente é uma desculpa aceite."
    ]
  }},
  { category:"digital-skills", slug:"excel-for-beginners", title:"Excel for Beginners", level:"Beginner", format:"Guide", duration:"15 min read", excerpt:{en:"You don't need to learn all of Excel — a small set of skills covers most coursework and internship needs.", fr:"Vous n'avez pas besoin de tout apprendre sur Excel — un petit ensemble de compétences couvre la plupart des besoins académiques et de stage.", es:"No necesitas aprender todo Excel — un pequeño conjunto de habilidades cubre la mayoría de las necesidades de cursos y pasantías.", pt:"Não precisa de aprender tudo sobre o Excel — um pequeno conjunto de competências cobre a maioria das necessidades académicas e de estágio."}, sourceName:"Microsoft Support", link:"https://support.microsoft.com/en-us/training", trending:false, date:"2026-08-30", content:{
    en:[
      "You don't need to learn all of Excel — a small set of skills covers most coursework, internship, and small-business needs.",
      "Learn to navigate first: cells, rows, columns, sheets, and how to select and format a range. This sounds basic but is where most early confusion happens.",
      "Learn SUM, AVERAGE, COUNT and IF — four functions that cover a huge share of everyday spreadsheet work, from budgets to simple data analysis.",
      "Learn to sort and filter data, and to make a basic chart. Turning a messy data dump into something readable is a skill employers notice immediately.",
      "Once those are comfortable, VLOOKUP/XLOOKUP and pivot tables are the next step up — worth learning once the basics are second nature."
    ],
    fr:[
      "Vous n'avez pas besoin de tout apprendre sur Excel — un petit ensemble de compétences couvre la plupart des besoins académiques, de stage et de petite entreprise.",
      "Apprenez d'abord à naviguer : cellules, lignes, colonnes, feuilles, et comment sélectionner et mettre en forme une plage. Cela semble basique, mais c'est là que se produit la plupart de la confusion initiale.",
      "Apprenez SOMME, MOYENNE, NB et SI — quatre fonctions qui couvrent une grande partie du travail quotidien sur tableur, des budgets à l'analyse de données simple.",
      "Apprenez à trier et filtrer les données, et à créer un graphique de base. Transformer un amas de données désordonné en quelque chose de lisible est une compétence que les employeurs remarquent immédiatement.",
      "Une fois ces notions maîtrisées, RECHERCHEV/XLOOKUP et les tableaux croisés dynamiques constituent l'étape suivante — à apprendre une fois que les bases sont acquises."
    ],
    es:[
      "No necesitas aprender todo Excel — un pequeño conjunto de habilidades cubre la mayoría de las necesidades de cursos, pasantías y pequeños negocios.",
      "Primero aprende a navegar: celdas, filas, columnas, hojas, y cómo seleccionar y dar formato a un rango. Suena básico, pero es donde ocurre la mayor parte de la confusión inicial.",
      "Aprende SUMA, PROMEDIO, CONTAR y SI — cuatro funciones que cubren gran parte del trabajo cotidiano en hojas de cálculo, desde presupuestos hasta análisis de datos simples.",
      "Aprende a ordenar y filtrar datos, y a hacer un gráfico básico. Convertir un volcado de datos desordenado en algo legible es una habilidad que los empleadores notan de inmediato.",
      "Una vez que domines esto, BUSCARV/XLOOKUP y las tablas dinámicas son el siguiente paso — vale la pena aprenderlos una vez que lo básico sea automático."
    ],
    pt:[
      "Não precisa de aprender tudo sobre o Excel — um pequeno conjunto de competências cobre a maioria das necessidades académicas, de estágio e de pequenos negócios.",
      "Primeiro aprenda a navegar: células, linhas, colunas, folhas, e como selecionar e formatar um intervalo. Parece básico, mas é onde ocorre a maior parte da confusão inicial.",
      "Aprenda SOMA, MÉDIA, CONTAR e SE — quatro funções que cobrem grande parte do trabalho quotidiano em folhas de cálculo, desde orçamentos até análise de dados simples.",
      "Aprenda a ordenar e filtrar dados, e a fazer um gráfico básico. Transformar um amontoado de dados desorganizado em algo legível é uma competência que os empregadores notam imediatamente.",
      "Depois de dominar isto, PROCV/XLOOKUP e as tabelas dinâmicas são o passo seguinte — vale a pena aprender assim que o básico se tornar natural."
    ]
  }},
  { category:"digital-skills", slug:"prompt-engineering-basics", title:"Prompt Engineering Basics", level:"Beginner", format:"Guide", duration:"7 min read", excerpt:{en:"A vague prompt gets a vague answer. The biggest improvement is being specific about what you want and who it's for.", fr:"Une instruction vague obtient une réponse vague. La plus grande amélioration consiste à être précis sur ce que vous voulez et à qui cela s'adresse.", es:"Una instrucción vaga obtiene una respuesta vaga. La mayor mejora es ser específico sobre lo que quieres y para quién es.", pt:"Uma instrução vaga obtém uma resposta vaga. A maior melhoria é ser específico sobre o que quer e para quem é."}, sourceName:"OpenAI", link:"https://platform.openai.com/docs/guides/prompt-engineering", trending:false, date:"2026-08-18", content:{
    en:[
      "A vague prompt gets a vague answer. The single biggest improvement you can make is being specific about what you want, who it's for, and what \"good\" looks like.",
      "Give context: what are you working on, and why? \"Summarise this\" gets a generic answer; \"Summarise this for a two-minute presentation to classmates unfamiliar with the topic\" gets a useful one.",
      "Ask for a format when it matters — a table, a numbered list, a specific word count — rather than hoping the AI guesses what you need.",
      "Iterate instead of starting over. If the first answer is close but not right, tell the AI exactly what to change rather than rewriting the whole prompt from scratch.",
      "Treat the output as a draft, not a final answer — especially for facts, citations, or anything you'll submit under your own name."
    ],
    fr:[
      "Une instruction vague obtient une réponse vague. La plus grande amélioration que vous puissiez apporter est d'être précis sur ce que vous voulez, à qui cela s'adresse, et à quoi ressemble un « bon » résultat.",
      "Donnez du contexte : sur quoi travaillez-vous, et pourquoi ? « Résume ceci » donne une réponse générique ; « Résume ceci pour une présentation de deux minutes à des camarades qui ne connaissent pas le sujet » donne une réponse utile.",
      "Demandez un format quand cela compte — un tableau, une liste numérotée, un nombre de mots précis — plutôt que d'espérer que l'IA devine ce dont vous avez besoin.",
      "Itérez plutôt que de recommencer. Si la première réponse est proche mais pas tout à fait juste, dites précisément à l'IA ce qu'il faut changer plutôt que de réécrire toute l'instruction depuis le début.",
      "Considérez le résultat comme un brouillon, pas une réponse finale — surtout pour les faits, les citations, ou tout ce que vous soumettrez en votre nom."
    ],
    es:[
      "Una instrucción vaga obtiene una respuesta vaga. La mejora más importante que puedes hacer es ser específico sobre lo que quieres, para quién es, y cómo se ve un resultado «bueno».",
      "Da contexto: ¿en qué estás trabajando y por qué? «Resume esto» obtiene una respuesta genérica; «Resume esto para una presentación de dos minutos a compañeros que no conocen el tema» obtiene una útil.",
      "Pide un formato cuando importe — una tabla, una lista numerada, un número de palabras específico — en lugar de esperar que la IA adivine lo que necesitas.",
      "Itera en lugar de empezar de nuevo. Si la primera respuesta está cerca pero no es correcta, dile a la IA exactamente qué cambiar en lugar de reescribir toda la instrucción desde cero.",
      "Trata el resultado como un borrador, no como una respuesta final — especialmente para datos, citas, o cualquier cosa que entregarás con tu nombre."
    ],
    pt:[
      "Uma instrução vaga obtém uma resposta vaga. A melhoria mais importante que pode fazer é ser específico sobre o que quer, para quem é, e como é um resultado «bom».",
      "Dê contexto: em que está a trabalhar e porquê? «Resuma isto» obtém uma resposta genérica; «Resuma isto para uma apresentação de dois minutos a colegas que não conhecem o tema» obtém uma útil.",
      "Peça um formato quando importar — uma tabela, uma lista numerada, um número de palavras específico — em vez de esperar que a IA adivinhe o que precisa.",
      "Itere em vez de recomeçar. Se a primeira resposta estiver próxima mas não certa, diga à IA exatamente o que mudar em vez de reescrever toda a instrução do zero.",
      "Trate o resultado como um rascunho, não como uma resposta final — especialmente para factos, citações, ou qualquer coisa que vá submeter em seu nome."
    ]
  }},

  { category:"entrepreneurship", slug:"finding-a-business-idea", title:"Finding a Business Idea Worth Testing", level:"Beginner", format:"Guide", duration:"10 min read", excerpt:{en:"Good ideas usually start as a specific problem someone has personally felt, not a grand vision invented from nothing.", fr:"Les bonnes idées partent généralement d'un problème précis que quelqu'un a personnellement vécu, et non d'une grande vision inventée de toutes pièces.", es:"Las buenas ideas suelen empezar como un problema específico que alguien ha sentido personalmente, no una gran visión inventada de la nada.", pt:"As boas ideias geralmente começam como um problema específico que alguém sentiu pessoalmente, não uma grande visão inventada do nada."}, sourceName:"Paul Graham", link:"http://paulgraham.com/startupideas.html", trending:false, date:"2026-09-05", content:{
    en:[
      "Good business ideas usually start as a specific problem someone has personally felt, not a grand vision invented from nothing.",
      "Look at your own frustrations and the frustrations of people around you — classmates, family, your community — rather than trying to guess what \"the market\" wants.",
      "Talk to potential customers before you build anything. A five-minute conversation that surfaces a real complaint is worth more than a week spent guessing.",
      "Small and specific beats big and vague. \"A better way for market traders in my town to track daily sales\" is a sharper starting point than \"a fintech app for Africa.\"",
      "Expect your first idea to change. Most successful founders didn't start with the exact business they ended up running — they started by solving one real problem well and let it evolve."
    ],
    fr:[
      "Les bonnes idées d'entreprise partent généralement d'un problème précis que quelqu'un a personnellement vécu, et non d'une grande vision inventée de toutes pièces.",
      "Observez vos propres frustrations et celles des gens autour de vous — camarades, famille, communauté — plutôt que d'essayer de deviner ce que « le marché » veut.",
      "Parlez à des clients potentiels avant de construire quoi que ce soit. Une conversation de cinq minutes qui révèle une vraie plainte vaut plus qu'une semaine passée à deviner.",
      "Petit et précis bat grand et vague. « Une meilleure façon pour les commerçants du marché de ma ville de suivre leurs ventes quotidiennes » est un point de départ plus net qu'« une application fintech pour l'Afrique ».",
      "Attendez-vous à ce que votre première idée évolue. La plupart des fondateurs qui réussissent n'ont pas commencé avec l'entreprise exacte qu'ils dirigent aujourd'hui — ils ont commencé par bien résoudre un problème réel et ont laissé le reste évoluer."
    ],
    es:[
      "Las buenas ideas de negocio suelen empezar como un problema específico que alguien ha sentido personalmente, no una gran visión inventada de la nada.",
      "Observa tus propias frustraciones y las de la gente a tu alrededor — compañeros, familia, tu comunidad — en lugar de intentar adivinar qué quiere «el mercado».",
      "Habla con clientes potenciales antes de construir algo. Una conversación de cinco minutos que revele una queja real vale más que una semana adivinando.",
      "Pequeño y específico supera a grande y vago. «Una mejor forma para los comerciantes de mi ciudad de registrar sus ventas diarias» es un punto de partida más claro que «una app fintech para África».",
      "Espera que tu primera idea cambie. La mayoría de los fundadores exitosos no empezaron con el negocio exacto que terminaron dirigiendo — empezaron resolviendo bien un problema real y dejaron que evolucionara."
    ],
    pt:[
      "As boas ideias de negócio geralmente começam como um problema específico que alguém sentiu pessoalmente, não uma grande visão inventada do nada.",
      "Observe as suas próprias frustrações e as das pessoas à sua volta — colegas, família, a sua comunidade — em vez de tentar adivinhar o que «o mercado» quer.",
      "Fale com potenciais clientes antes de construir qualquer coisa. Uma conversa de cinco minutos que revele uma queixa real vale mais do que uma semana a adivinhar.",
      "Pequeno e específico vence grande e vago. «Uma forma melhor para os comerciantes do mercado da minha cidade registarem as vendas diárias» é um ponto de partida mais claro do que «uma app fintech para África».",
      "Espere que a sua primeira ideia mude. A maioria dos fundadores bem-sucedidos não começou com o negócio exato que acabaram por gerir — começaram por resolver bem um problema real e deixaram evoluir."
    ]
  }},
  { category:"entrepreneurship", slug:"exporting-from-nigeria-basics", title:"Exporting From Nigeria: The Basics", level:"Beginner", format:"Guide", duration:"15 min read", excerpt:{en:"Exporting from Nigeria formally starts with one step: registering with NEPC for your Exporter's Certificate.", fr:"L'exportation depuis le Nigeria commence formellement par une étape : s'inscrire auprès du NEPC pour obtenir son certificat d'exportateur.", es:"Exportar desde Nigeria comienza formalmente con un paso: registrarse en el NEPC para obtener el Certificado de Exportador.", pt:"Exportar a partir da Nigéria começa formalmente com um passo: registar-se no NEPC para obter o Certificado de Exportador."}, sourceName:"Nigerian Export Promotion Council (NEPC)", link:"https://nepc.gov.ng/get-started/e-registration/", trending:false, date:"2026-08-22", content:{
    en:[
      "Exporting from Nigeria formally starts with one step: registering with the Nigerian Export Promotion Council (NEPC) to get your Exporter's Certificate — without it, banks and customs won't process your export transactions.",
      "Registration is done entirely online through NEPC's e-registration platform, and is only available to incorporated companies (not business names), so get your company registration documents ready first.",
      "Beyond registration, NEPC also offers export readiness support: training, market information, and incentive programmes like the Export Expansion Grant for businesses that qualify.",
      "Before your first shipment, get clear on your product's HS code (the international classification used for customs), your target market's import requirements, and your logistics and freight options.",
      "Export is a longer game than domestic sales — build in time for documentation, compliance and payment processes that don't exist in local trade."
    ],
    fr:[
      "L'exportation depuis le Nigeria commence formellement par une étape : s'inscrire auprès du Conseil nigérian de promotion des exportations (NEPC) pour obtenir son certificat d'exportateur — sans lui, les banques et la douane ne traiteront pas vos opérations d'exportation.",
      "L'inscription se fait entièrement en ligne via la plateforme d'e-enregistrement du NEPC, et n'est accessible qu'aux sociétés constituées (pas aux noms commerciaux) — préparez donc d'abord vos documents d'enregistrement d'entreprise.",
      "Au-delà de l'inscription, le NEPC propose aussi un accompagnement à la préparation à l'export : formation, information sur les marchés, et des programmes incitatifs comme la subvention d'expansion des exportations pour les entreprises éligibles.",
      "Avant votre premier envoi, clarifiez le code SH de votre produit (la classification internationale utilisée pour la douane), les exigences d'importation de votre marché cible, et vos options de logistique/fret.",
      "L'exportation est un jeu de plus long terme que la vente locale — prévoyez du temps pour la documentation, la conformité et les processus de paiement qui n'existent pas dans le commerce local."
    ],
    es:[
      "Exportar desde Nigeria comienza formalmente con un paso: registrarse en el Consejo Nigeriano de Promoción de Exportaciones (NEPC) para obtener tu Certificado de Exportador — sin él, los bancos y la aduana no procesarán tus transacciones de exportación.",
      "El registro se realiza completamente en línea a través de la plataforma de e-registro del NEPC, y solo está disponible para empresas constituidas (no nombres comerciales), así que prepara primero los documentos de registro de tu empresa.",
      "Más allá del registro, el NEPC también ofrece apoyo para la preparación a la exportación: capacitación, información de mercado y programas de incentivos como la Subvención de Expansión de Exportaciones para empresas que califiquen.",
      "Antes de tu primer envío, define bien el código HS de tu producto (la clasificación internacional usada para aduanas), los requisitos de importación de tu mercado objetivo, y tus opciones de logística/flete.",
      "Exportar es un juego a más largo plazo que las ventas nacionales — prevé tiempo para la documentación, el cumplimiento y los procesos de pago que no existen en el comercio local."
    ],
    pt:[
      "Exportar a partir da Nigéria começa formalmente com um passo: registar-se no Conselho Nigeriano de Promoção de Exportações (NEPC) para obter o Certificado de Exportador — sem ele, os bancos e a alfândega não processarão as suas transações de exportação.",
      "O registo é feito inteiramente online através da plataforma de e-registo do NEPC, e está disponível apenas para empresas constituídas (não nomes comerciais), por isso prepare primeiro os documentos de registo da sua empresa.",
      "Para além do registo, o NEPC também oferece apoio à preparação para exportação: formação, informação de mercado, e programas de incentivo como a Subvenção de Expansão de Exportações para empresas elegíveis.",
      "Antes do primeiro envio, clarifique o código HS do seu produto (a classificação internacional usada para a alfândega), os requisitos de importação do seu mercado-alvo, e as suas opções de logística/frete.",
      "Exportar é um jogo de mais longo prazo do que as vendas domésticas — reserve tempo para a documentação, a conformidade e os processos de pagamento que não existem no comércio local."
    ]
  }},
  { category:"entrepreneurship", slug:"freelancing-101-first-client", title:"Freelancing 101: Finding Your First Client", level:"Beginner", format:"Guide", duration:"9 min read", excerpt:{en:"Your first client is the hardest one to land — you have no reviews yet, so you're selling potential, not a track record.", fr:"Votre premier client est le plus difficile à obtenir — vous n'avez pas encore d'avis, donc vous vendez du potentiel, pas un bilan.", es:"Tu primer cliente es el más difícil de conseguir — aún no tienes reseñas, así que estás vendiendo potencial, no un historial.", pt:"O seu primeiro cliente é o mais difícil de conquistar — ainda não tem avaliações, por isso está a vender potencial, não um historial."}, sourceName:"Raenest", link:"https://www.raenest.com/blog/how-to-get-started-on-upwork", trending:false, date:"2026-08-12", content:{
    en:[
      "Your first client is the hardest one to land — you have no reviews yet, so you're selling potential, not a track record.",
      "Build a focused profile around one or two skills you can deliver well, rather than listing everything you've ever dabbled in. A specific, clear offer is easier for a client to say yes to.",
      "Start with smaller, lower-stakes projects to build real reviews. A handful of 5-star small jobs often beats chasing one big project you can't yet prove you can deliver.",
      "Write proposals that respond to the specific job, not a copy-pasted pitch. Mention one detail from their brief to show you actually read it.",
      "Treat your first few clients like references, not just paychecks — deliver reliably, communicate clearly, and ask for feedback. Reputation compounds fast once it starts."
    ],
    fr:[
      "Votre premier client est le plus difficile à obtenir — vous n'avez pas encore d'avis, vous vendez donc du potentiel, pas un bilan.",
      "Construisez un profil ciblé autour d'une ou deux compétences que vous maîtrisez bien, plutôt que de lister tout ce que vous avez touché un jour. Une offre précise et claire est plus facile à accepter pour un client.",
      "Commencez par des projets plus petits et moins risqués pour obtenir de vrais avis. Quelques petits travaux notés 5 étoiles valent souvent mieux que de courir après un gros projet que vous ne pouvez pas encore prouver savoir livrer.",
      "Rédigez des propositions qui répondent précisément à la mission, pas un argumentaire copié-collé. Mentionnez un détail de leur brief pour montrer que vous l'avez réellement lu.",
      "Traitez vos premiers clients comme des références, pas seulement des chèques de paie — livrez de façon fiable, communiquez clairement, et demandez des retours. La réputation se construit vite une fois lancée."
    ],
    es:[
      "Tu primer cliente es el más difícil de conseguir — aún no tienes reseñas, así que estás vendiendo potencial, no un historial.",
      "Construye un perfil enfocado en una o dos habilidades que puedas entregar bien, en lugar de listar todo lo que alguna vez has probado. Una oferta específica y clara es más fácil de aceptar para un cliente.",
      "Comienza con proyectos más pequeños y de menor riesgo para generar reseñas reales. Unos cuantos trabajos pequeños de 5 estrellas suelen ser mejor que perseguir un gran proyecto que aún no puedes demostrar que puedes entregar.",
      "Escribe propuestas que respondan al trabajo específico, no un discurso copiado y pegado. Menciona un detalle de su brief para mostrar que realmente lo leíste.",
      "Trata a tus primeros clientes como referencias, no solo como pagos — entrega de forma confiable, comunica con claridad, y pide retroalimentación. La reputación crece rápido una vez que empieza."
    ],
    pt:[
      "O seu primeiro cliente é o mais difícil de conquistar — ainda não tem avaliações, por isso está a vender potencial, não um historial.",
      "Construa um perfil focado em uma ou duas competências que consiga entregar bem, em vez de listar tudo o que já experimentou. Uma oferta específica e clara é mais fácil de aceitar para um cliente.",
      "Comece com projetos mais pequenos e de menor risco para gerar avaliações reais. Alguns trabalhos pequenos de 5 estrelas costumam ser melhores do que perseguir um grande projeto que ainda não consegue provar que sabe entregar.",
      "Escreva propostas que respondam ao trabalho específico, não um discurso copiado e colado. Mencione um detalhe do briefing deles para mostrar que realmente o leu.",
      "Trate os seus primeiros clientes como referências, não apenas como pagamentos — entregue com fiabilidade, comunique com clareza, e peça feedback. A reputação cresce rápido assim que começa."
    ]
  }},

  { category:"opportunities", title:"Scholarships & Grants", level:"All levels", format:"Hub", duration:"Browse", excerpt:{en:"Fully-funded and partially-funded scholarships, fellowships and research grants for African students.", fr:"Bourses entièrement ou partiellement financées, fellowships et subventions de recherche pour les étudiants africains.", es:"Becas total o parcialmente financiadas, fellowships y subvenciones de investigación para estudiantes africanos.", pt:"Bolsas total ou parcialmente financiadas, fellowships e subvenções de investigação para estudantes africanos."}, link:"opportunities.html?sector=education", trending:true, date:"2026-09-28" },
  { category:"opportunities", title:"Internships & Jobs", level:"All levels", format:"Hub", duration:"Browse", excerpt:{en:"Paid internships and graduate roles across business, finance, technology and diplomacy.", fr:"Stages rémunérés et postes pour jeunes diplômés dans les affaires, la finance, la technologie et la diplomatie.", es:"Pasantías remuneradas y puestos para egresados en negocios, finanzas, tecnología y diplomacia.", pt:"Estágios remunerados e vagas para recém-formados em negócios, finanças, tecnologia e diplomacia."}, link:"opportunities.html?sector=business", trending:false, date:"2026-09-18" },
  { category:"opportunities", title:"Startup Funding", level:"All levels", format:"Hub", duration:"Browse", excerpt:{en:"Accelerators, seed grants and competitions for African founders.", fr:"Accélérateurs, subventions d'amorçage et concours pour les fondateurs africains.", es:"Aceleradoras, subvenciones semilla y concursos para fundadores africanos.", pt:"Aceleradoras, subvenções semente e concursos para fundadores africanos."}, link:"opportunities.html?sector=funding", trending:false, date:"2026-09-12" }
];

const RESOURCE_PILLARS = [
  { key:"academics", label:"Academics", icon:"📚" },
  { key:"career", label:"Career", icon:"💼" },
  { key:"digital-skills", label:"Digital Skills", icon:"💻" },
  { key:"entrepreneurship", label:"Entrepreneurship", icon:"🚀" },
  { key:"opportunities", label:"Opportunities", icon:"🌍" }
];

// Maps a RESOURCE_PILLARS key to its i18n.js translation key (see i18n.js)
const PILLAR_I18N_KEY = { "academics":"pillar.academics", "career":"pillar.career", "digital-skills":"pillar.digital", "entrepreneurship":"pillar.entrepreneurship", "opportunities":"pillar.opportunities" };
// Falls back to the plain English label if i18n.js hasn't loaded yet
function pillarLabel(key){
  const p = RESOURCE_PILLARS.find(p=>p.key===key);
  if(!p) return key;
  return (typeof t === 'function' && PILLAR_I18N_KEY[key]) ? t(PILLAR_I18N_KEY[key]) : p.label;
}

// Maps an ARTICLES `category` string to its i18n.js translation key
const ARTICLE_CATEGORY_I18N_KEY = { "History":"disc.history", "Archaeology":"disc.archaeology", "Economics":"disc.economics", "Entrepreneurship":"cat.entrepreneurship", "Travel":"cat.travel", "Community":"cat.community" };
function articleCategoryLabel(category){
  const key = ARTICLE_CATEGORY_I18N_KEY[category];
  return (typeof t === 'function' && key) ? t(key) : category;
}

// Maps an OPPORTUNITIES `sector` value to its i18n.js translation key (same keys as the filter buttons)
const SECTOR_I18N_KEY = { "business":"filter.business", "education":"filter.education", "finance":"filter.finance", "entertainment":"filter.entertainment", "export":"filter.export", "technology":"filter.technology", "diplomacy":"filter.diplomacy", "funding":"filter.funding" };
function sectorLabel(sector){
  const key = SECTOR_I18N_KEY[sector];
  return (typeof t === 'function' && key) ? t(key) : sector;
}

/* ---------------------------------------------------------
   Renderers — no need to edit below this line
--------------------------------------------------------- */
function populateCountrySelect(selectEl){
  if(!selectEl) return;
  AFRICAN_COUNTRIES.forEach(c=>{
    const opt = document.createElement("option");
    opt.value = c; opt.textContent = c;
    selectEl.appendChild(opt);
  });
}

// Safe translation lookup — falls back to English text if i18n.js hasn't loaded
function tt(key, fallback){
  return (typeof t === 'function') ? t(key) : fallback;
}

// Resolves a content field that may be a plain string (untranslated) or a
// {en,fr,es,pt} object, to the current language, falling back to English.
function L(field){
  if(typeof field === 'string') return field;
  if(!field) return '';
  const lang = (typeof getLang === 'function') ? getLang() : 'en';
  return field[lang] || field.en || '';
}

function renderOpportunities(containerEl, sector){
  if(!containerEl) return;
  const items = sector && sector !== "all" ? OPPORTUNITIES.filter(o=>o.sector===sector) : OPPORTUNITIES;
  containerEl.innerHTML = items.map(o => `
    <div class="opp-card">
      <div class="opp-top">
        <span class="opp-sector">${sectorLabel(o.sector)}</span>
        <span class="opp-type">${o.type}</span>
      </div>
      <h3>${o.title}</h3>
      <div class="opp-org">${o.org} · ${o.location}</div>
      <p class="blurb">${L(o.blurb)}</p>
      <div class="opp-meta"><span>${tt('ui.deadline','Deadline:')} ${o.deadline}</span></div>
      <a class="opp-link" href="${o.link}" target="_blank" rel="noopener">${tt('ui.viewDetails','View details →')}</a>
    </div>
  `).join("");
}

function resourceCardHTML(r){
  const pillar = RESOURCE_PILLARS.find(p=>p.key===r.category);
  const href = r.slug ? `resource-detail.html?slug=${r.slug}` : r.link;
  return `
    <div class="opp-card">
      <div class="opp-top">
        <span class="opp-sector">${pillar ? pillar.icon + " " + pillarLabel(r.category) : r.category}</span>
        <span class="opp-type">${r.format}</span>
      </div>
      <h3>${r.title}</h3>
      <div class="opp-org">${r.level} · ${r.duration}</div>
      <p class="blurb">${L(r.excerpt)}</p>
      <a class="opp-link" href="${href}">${tt('ui.readGuide','Read guide →')}</a>
    </div>
  `;
}

function renderResources(containerEl, filters){
  if(!containerEl) return;
  filters = filters || {};
  let items = RESOURCES.slice();
  if(filters.category && filters.category !== "all") items = items.filter(r=>r.category===filters.category);
  if(filters.level && filters.level !== "all") items = items.filter(r=>r.level===filters.level);
  if(filters.format && filters.format !== "all") items = items.filter(r=>r.format===filters.format);
  if(filters.query){
    const q = filters.query.toLowerCase();
    items = items.filter(r=> r.title.toLowerCase().includes(q) || L(r.excerpt).toLowerCase().includes(q));
  }
  containerEl.innerHTML = items.length
    ? items.map(resourceCardHTML).join("")
    : `<p style="padding:20px;color:rgba(20,17,16,0.6);">${tt('ui.noResults','No resources match that search yet.')}</p>`;
}

function renderResourceRow(containerEl, items){
  if(!containerEl) return;
  containerEl.innerHTML = items.map(resourceCardHTML).join("");
}

function renderArticles(containerEl){
  if(!containerEl) return;
  containerEl.innerHTML = ARTICLES.map(a => {
    const href = a.slug ? `article-detail.html?slug=${a.slug}` : a.link;
    return `
    <div class="article-card">
      <div class="article-thumb">${a.image ? `<img src="${a.image}" alt="" style="width:100%;height:100%;object-fit:cover;">` : articleCategoryLabel(a.category)}</div>
      <div class="article-body">
        <span class="article-cat">${articleCategoryLabel(a.category)} · ${a.type}</span>
        <h3>${a.title}</h3>
        <div class="article-meta">${a.author} · ${a.date}</div>
        <p class="article-excerpt">${L(a.excerpt)}</p>
        <a class="article-link" href="${href}">${tt('ui.readMore','Read more →')}</a>
      </div>
    </div>
  `;
  }).join("");
}
