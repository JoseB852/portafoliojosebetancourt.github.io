import { BookText, CodeSquare, HomeIcon, UserRound, Linkedin, Twitter, Rss, Twitch, Youtube, Crop, Pencil, Computer, Book, Rocket, Speech } from "lucide-react";

export const socialNetworks = [
    
    {
        id: 2,
        logo: <Linkedin size={30} strokeWidth={1} />,
        src: "https://www.linkedin.com/in/jose-antonio-betancourt/",
    },

  
];


export const itemsNavbar = [
    {
        id: 1,
        title: "Home",
        icon: <HomeIcon size={25} color="#fff" strokeWidth={1} />,
        link: "/",
    },
    {
        id: 2,
        title: "User",
        icon: <UserRound size={25} color="#fff" strokeWidth={1} />,
        link: "/about-me",
    },
    {
        id: 3,
        title: "Book",
        icon: <BookText size={25} color="#fff" strokeWidth={1} />,
        link: "/services",
    },
    {
        id: 4,
        title: "Target",
        icon: <CodeSquare size={25} color="#fff" strokeWidth={1} />,
        link: "/portfolio",
    },
   
];

export const dataAboutPage = [
    {
        id: 1,
        title: "Desarrollador Full Stack",
        subtitle: "Becloud Consultores",
        date: "Enero 2025",
        description: `
      Diseñar, desarrollar e implementar aplicaciones web empresariales utilizando SAPUI5.
      Crear y personalizar interfaces de usuario alineadas con estándares UX/UI y diseño Fiori.
      Desarrollar dashboards con métricas y visualización de datos mediante gráficos interactivos.
      Integrar servicios OData y APIs RESTful en aplicaciones empresariales.
      Implementar funcionalidades CRUD y gestionar contenedores de usuarios.
      Realizar migraciones de aplicaciones y plataformas SAP.
      `
    },

    {
        id: 2,
        title: "Desarrollador Full Stack",
        subtitle: "No Country",
        date: "Noviembre 2024",
        description: `
        Diseñar y desarrollar interfaces web dinámicas, atractivas y responsivas utilizando React.js, HTML, CSS y JavaScript.
        Implementar estilos mediante CSS Modules, TailwindCSS y Bootstrap para optimizar la presentación y adaptabilidad en distintos dispositivos.
        Integrar APIs RESTful para la visualización de datos dinámicos y la interacción con servicios externos.
        Optimizar el rendimiento y la velocidad de carga asegurando compatibilidad entre distintos navegadores.
        Colaborar con diseñadores, desarrolladores backend y gerentes de producto para transformar requerimientos en soluciones técnicas viables.
        Realizar pruebas de funcionalidad y usabilidad, identificar errores y proponer mejoras continuas para garantizar la calidad del producto final.
        `
    }
]

export const dataCounter = [
    {
        id: 0,
        endCounter: 1,
        text: "Años de experiencia",
        lineRight: true,
        lineRightMobile: true,
    },
    {
        id: 1,
        endCounter: 38,
        text: "Clientes satisfechos",
        lineRight: true,
        lineRightMobile: false,
    },
    {
        id: 2,
        endCounter: 36,
        text: "Proyectos finalizados",
        lineRight: true,
        lineRightMobile: true,
    },

];

export const serviceData = [
    {
        icon: <Crop />,
        title: "Stack",
        description: "React.js | JavaScript | Node.js | Next.js | HTML | CSS | MysQl | SQLAlchemy | Rest Apis | Git | GitHub | Bootstrap | Tailwind | Scrum",
    },
    {
        icon: <Pencil />,
        title: "Diseño web",
        description: "Diseño creativo y profesional de interfaces web intuitivas y atractivas, centradas en la experiencia del usuario",
    },
    {
        icon: <Computer />,
        title: "Backend",
        description: `APIs REST utilizando Node.js y Express.js, Implementación de operaciones CRUD, integración con bases de datos, Manejo básico de autenticación de usuarios y conexión entre frontend y backend.`
    },

    {
        icon: <Book />,
        title: "Copywriting",
        description: "Creación de contenido persuasivo y atractivo que capta la atención de tu audiencia",
    },
];

export const dataPortfolio = [
    {
        id: 1,
        title: "CarShoping",
        image: "/image-1.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 2,
        title: "Clon Pinterest",
        image: "/image-2.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 3,
        title: "Lading-page",
        image: "/image-3.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 4,
        title: "Snake-Game",
        image: "/image-4.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    {
        id: 5,
        title: "Game-Phaser",
        image: "/image-5.jpg",
        urlGithub: "#!",
        urlDemo: "#!",
    },
    
];

