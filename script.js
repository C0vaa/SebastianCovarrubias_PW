const translations = {
    'es': {
        'nav-projects': 'Proyectos',
        'nav-about': 'Sobre mí',
        'nav-contact': 'Contacto',
        'hero-title': 'Hola, soy <span class="highlight">Tu Nombre</span>',
        'hero-subtitle': 'Diseñador UI/UX y Desarrollador. Me especializo en crear experiencias digitales minimalistas y funcionales.',
        'projects-title': 'Proyectos Destacados',
        'p1-title': 'Diseño de Texturas',
        'p1-desc': 'Exploración visual de patrones botánicos y texturas orgánicas para medios digitales.',
        'p2-title': 'Fitness Tracker',
        'p2-desc': 'Aplicación para el seguimiento de rutinas de fuerza y análisis de progreso físico.',
        'p3-title': 'Dashboard IA',
        'p3-desc': 'Visualización de datos en tiempo real utilizando modelos de machine learning.',
        'contact-title': '¿Tienes un proyecto en mente?',
        'contact-subtitle': 'Siempre estoy abierto a nuevas oportunidades y colaboraciones.',
        'footer-text': 'Creado con pasión por Tu Nombre'
    },
    'en': {
        'nav-projects': 'Projects',
        'nav-about': 'About me',
        'nav-contact': 'Contact',
        'hero-title': 'Hi, I am <span class="highlight">Your Name</span>',
        'hero-subtitle': 'UI/UX Designer and Developer. I specialize in creating minimalist and functional digital experiences.',
        'projects-title': 'Featured Projects',
        'p1-title': 'Texture Design',
        'p1-desc': 'Visual exploration of botanical patterns and organic textures for digital media.',
        'p2-title': 'Fitness Tracker',
        'p2-desc': 'Application for tracking strength routines and physical progress analysis.',
        'p3-title': 'AI Dashboard',
        'p3-desc': 'Real-time data visualization using machine learning models.',
        'contact-title': 'Have a project in mind?',
        'contact-subtitle': 'I am always open to new opportunities and collaborations.',
        'footer-text': 'Created with passion by Your Name'
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll('[data-key]');
    
    elements.forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Opcional: Cambiar el atributo lang del HTML para accesibilidad
    document.documentElement.lang = lang;
}