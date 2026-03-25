const translations = {
    'es': {
        'nav-projects': 'Proyectos',
        'nav-about': 'Sobre mí',
        'nav-contact': 'Contacto',
        'hero-title': 'Hola, soy <span class="highlight">Sebastián Covarrubias</span>',
        'about-text': 'Desarrollador y diseñador de videojuegos. Me desempeño como generalista, participando en distintos aspectos del proceso de desarrollo según se requiera. Mi especialidad es el modelado 3D, tanto en su dimensión creativa como técnica.',
        'projects-title': 'Proyectos',
        'p1-title': 'Project PL (VR)',
        'p1-desc': 'Juego de horror en realidad virtual ambientado en la fundación SCP. Explora la fundación mientras escapas de los monstruos que han sido liberados como experimento, donde tú eres la rata de laboratorio.',
        'p2-title': 'Thief Cats',
        'p2-desc': 'Juego multijugador en el que los jugadores pueden elegir entre dos bandos: Gatos ladrones o perro guardian. El objetivo de los gatos es robar objetos valiosos de la casa, mientras que el perro guardián debe proteger la casa y atrapar a los gatos.',
        'p3-title': '3D Modeling',
        'p3-desc': 'Modelado 3D de personajes, objetos y entornos para videojuegos y medios digitales.',
        'contact-title': '¿Quieres contactarme?',
        'contact-subtitle': 'Siempre estoy abierto a nuevas oportunidades y colaboraciones.',
        'footer-text': 'Sebastián Covarrubias'
    },
    'en': {
        'nav-projects': 'Projects',
        'nav-about': 'About me',
        'nav-contact': 'Contact',
        'hero-title': 'Hi, I am <span class="highlight">Sebastián Covarrubias</span>',
        'about-text': 'Game developer and designer. I work as a generalist, participating in different aspects of the development process as needed. My specialty is 3D modeling, both in its creative and technical dimension.',
        'projects-title': 'Projects',
        'p1-title': 'Project PL (VR)',
        'p1-desc': 'Horror game in virtual reality set in the SCP Foundation. Explore the foundation while escaping from monsters that have been released as experiments, where you are the lab rat.',
        'p2-title': 'Thief Cats',
        'p2-desc': 'Multiplayer game where players can choose between two factions: Thieves or Guardian Dog. The goal of the thieves is to steal valuable objects from the house, while the guardian dog must protect the house and catch the thieves.',
        'p3-title': '3D Modeling',
        'p3-desc': '3D modeling of characters, objects and environments for video games and digital media.',
        'contact-title': 'Want to get in touch?',
        'contact-subtitle': 'I am always open to new opportunities and collaborations.',
        'footer-text': 'Sebastián Covarrubias'
    }
};

function changeLanguage(lang, element) {
    const elements = document.querySelectorAll('[data-key]');
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('.flag-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    element.classList.add('active');

    document.documentElement.lang = lang;
}