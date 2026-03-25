const translations = {
    'es': {
        'nav-projects': 'Proyectos',
        'nav-about': 'Sobre mí',
        'nav-contact': 'Contacto',
        'hero-title': 'Hola, soy <span class="highlight">Sebastián Covarrubias</span>',
        'hero-subtitle': 'Desarrollador y Diseñador de videojuegos. Me desempeño como generalista, participando en distintos aspectos del proceso de desarrollo según se requiera. Mi especialidad es el modelado 3D, tanto en su dimensión creativa como técnica.',
        'projects-title': 'Proyectos Destacados',
        'p1-title': 'Diseño de Texturas',
        'p1-desc': 'Exploración visual de patrones botánicos y texturas orgánicas para medios digitales.',
        'p2-title': 'Fitness Tracker',
        'p2-desc': 'Aplicación para el seguimiento de rutinas de fuerza y análisis de progreso físico.',
        'p3-title': 'Dashboard IA',
        'p3-desc': 'Visualización de datos en tiempo real utilizando modelos de machine learning.',
        'contact-title': '¿Quieres contactarme?',
        'contact-subtitle': 'Siempre estoy abierto a nuevas oportunidades y colaboraciones.',
        'footer-text': 'Sebastián Covarrubias'
    },
    'en': {
        'nav-projects': 'Projects',
        'nav-about': 'About me',
        'nav-contact': 'Contact',
        'hero-title': 'Hi, I am <span class="highlight">Sebastián Covarrubias</span>',
        'hero-subtitle': 'Game developer and designer. I work as a generalist, participating in different aspects of the development process as needed. My specialty is 3D modeling, both in its creative and technical dimension.',
        'projects-title': 'Featured Projects',
        'p1-title': 'Texture Design',
        'p1-desc': 'Visual exploration of botanical patterns and organic textures for digital media.',
        'p2-title': 'Fitness Tracker',
        'p2-desc': 'Application for tracking strength routines and physical progress analysis.',
        'p3-title': 'AI Dashboard',
        'p3-desc': 'Real-time data visualization using machine learning models.',
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