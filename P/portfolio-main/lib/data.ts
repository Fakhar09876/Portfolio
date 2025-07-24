// If you do not have IProject defined in '@/types', define it here for type safety:
export interface IProject {
    title: string;
    slug: string;
    techStack: string[];
    liveUrl?: string;
    year: number;
    description: string;
    role: string;
}

export const GENERAL_INFO = {
    email: 'Fakharwarraich3133@gmail.com',
    // { name: 'Old Version', url: GENERAL_INFO.oldPortfolio }, // Removed because oldPortfolio is not defined in GENERAL_INFO
    emailSubject: "Let's collaborate on a project",
    emailBody: 'Hi Fakhar Warraich, I am reaching out to you because...',

   
};

export const SOCIAL_LINKS = [
    { name: 'github', url: 'https://github.com/Fakhar09876' },
    { name: 'linkedin', url: 'https://www.linkedin.com/in/fakhar' },
    // { name: 'facebook', url: 'https://www.facebook.com/tajmirul.2000' },
    // { name: 'Old Version', url: GENERAL_INFO.oldPortfolio },
];

export const MY_STACK = {
    frontend: [
        {
            name: 'Javascript',
            icon: '/logo/js.png',
        },
        {
            name: 'Typescript',
            icon: '/logo/ts.png',
        },
        {
            name: 'React',
            icon: '/logo/react.png',
        },
        {
            name: 'Next.js',
            icon: '/logo/next.png',
        },
        {
            name: 'Redux',
            icon: '/logo/redux.png',
        },
        {
            name: 'Tailwind CSS',
            icon: '/logo/tailwind.png',
        },
        {
            name: 'GSAP',
            icon: '/logo/gsap.png',
        },
        {
            name: 'Frammer Motion',
            icon: '/logo/framer-motion.png',
        },
        {
            name: 'SASS',
            icon: '/logo/sass.png',
        },
        {
            name: 'Bootstrap',
            icon: '/logo/bootstrap.svg',
        },
    ],
    backend: [
        {
            name: 'Node.js',
            icon: '/logo/node.png',
        },
        {
            name: 'Nest.js',
            icon: '/logo/nest.svg',
        },
        {
            name: 'Express.js',
            icon: '/logo/express.png',
        },
    ],
    database: [
        {
            name: 'MySQL',
            icon: '/logo/mysql.svg',
        },
        {
            name: 'PostgreSQL',
            icon: '/logo/postgreSQL.png',
        },
        {
            name: 'MongoDB',
            icon: '/logo/mongodb.svg',
        },
        {
            name: 'Prisma',
            icon: '/logo/prisma.png',
        },
    ],
    tools: [
        {
            name: 'Git',
            icon: '/logo/git.png',
        },
        {
            name: 'Docker',
            icon: '/logo/docker.svg',
        },
        {
            name: 'AWS',
            icon: '/logo/aws.png',
        },
    ],
};

export const PROJECTS: IProject[] = [
    {
       
  title: 'ToDo App - Task Management System',
  slug: 'todo-app',
  liveUrl: 'https://your-todo-app-link.com/',
  year: 2024,
  description: `
    A modern and minimalistic ToDo application designed to help users manage tasks efficiently using React and LocalStorage.<br/><br/>
    
    Key Features:<br/>
    <ul>
      <li>📝 Task Creation: Add and manage personal or work-related tasks</li>
      <li>✅ Task Completion: Mark tasks as done with intuitive UX</li>
      <li>🗂️ Category Filter: Sort tasks by status (All, Active, Completed)</li>
      <li>💾 Offline Support: Uses browser's localStorage for persistence</li>
      <li>🎨 Clean UI: Simple and distraction-free interface</li>
      <li>📱 Responsive Design: Works flawlessly on mobile and desktop</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Built using functional React components and hooks (useState, useEffect)</li>
      <li>Data stored locally without backend using LocalStorage</li>
      <li>Real-time DOM updates and task filtering</li>
      <li>Component-based structure for easy reusability and maintenance</li>
    </ul>
  `,
  role: `
    Frontend Developer <br/>
    Created a lightweight, local-first task manager with:
    <ul>
      <li>🎯 Focus on performance and speed</li>
      <li>📦 Efficient storage using browser's native localStorage API</li>
      <li>♻️ Implemented logic to dynamically filter and update tasks</li>
      <li>🎨 Designed a user-friendly layout with responsive behavior</li>
    </ul>
  `,
  techStack: [
    'React.js',
    'JavaScript',
    'CSS3',
    'LocalStorage',
    'Hooks',
    'Responsive Design',
  ],
},
    {
  title: 'Developer Portfolio - Personal Website',
  slug: 'portfolio',
  liveUrl: 'https://fakhar-portfolio.netlify.app/',
  year: 2025,
  description: `
    A professional developer portfolio built to showcase my projects, skills, and experience using modern UI and smooth animation.<br/><br/>

    Key Features:<br/>
    <ul>
      <li>👨‍💻 Hero Section with typewriter effect and profile picture</li>
      <li>🛠️ Services & Skills: Animated cards with icons</li>
      <li>📁 Projects: Dynamic grid with hover transitions</li>
      <li>📝 About Section: Styled bio and career overview</li>
      <li>📞 Contact Form: With scroll-to-top and email link</li>
      <li>🌓 Neo-Black Theme: Sleek and minimalist design</li>
    </ul><br/>

    Backend Features:
    <ul>
      <li>📧 Contact Form: Integrated with Netlify Forms for backend-free submissions</li>
      <li>🛡️ Spam Protection: Honeypot fields and hidden anti-bot fields</li>
      <li>📤 Optional EmailJS or FormSubmit integration for email delivery</li>
    </ul><br/>

    Technical Highlights:
    <ul>
      <li>Component-based React architecture</li>
      <li>Scroll reveal animations using IntersectionObserver</li>
      <li>Smooth transitions and CSS effects on scroll</li>
      <li>Optimized for SEO and Netlify deployment</li>
    </ul>
  `,
  role: `
    Full Stack Developer <br/>
    Built and deployed a professional-grade portfolio:
    <ul>
      <li>🎯 Designed engaging layout and UI structure</li>
      <li>📂 Managed reusable components and project data</li>
      <li>📧 Connected backend-less form submission using Netlify Forms</li>
      <li>🧠 Added JSON-based content management for easy updates</li>
      <li>🚀 Deployed to Netlify with continuous deployment setup</li>
    </ul>
  `,
  techStack: [
    'React.js',
    'JavaScript',
    'CSS3',
    'Netlify Forms',
    'Intersection Observer',
    'EmailJS (optional)',
    'Modular Components',
    'Responsive Design',
  ],
},

    {
        title: 'E-commerce Platform',
        slug: 'ecommerce-platform',
        techStack: [
            'Next.js',
            'Node.js',
            'Express.js',
            'MongoDB',
            'Stripe',
            'GraphQL',
            'Apollo Client',
        ],
        liveUrl: 'https://your-ecommerce-platform.com/',
        year: 2024,
        description: `A full-stack e-commerce platform built with Next.js and Node.js, featuring a modern UI, secure payment processing, and real-time data fetching using GraphQL.`,
        role: `As a full-stack developer, I:<br/>
        - Developed the frontend using Next.js with server-side rendering for SEO.<br/>
        - Built the backend API using Node.js and Express.js for handling product listings and user authentication.<br/>
        - Implemented MongoDB for data storage and management.<br/>
        - Integrated Stripe for secure payment processing.<br/>
        - Used GraphQL with Apollo Client for efficient data fetching and state management.<br/>
        - Designed a responsive and user-friendly interface for seamless shopping experience.`,
    },
    {
        title: 'Social Media Application',
        slug: 'social-media-application',
        techStack: [
            'React.js',
            'Laravel',
            'Swift',
            'Kotlin',
            'WebRTC',
            'Real-time Messaging',
            'Video Conferencing',
        ],
        year: 2023,
        description:
            'A comprehensive social media platform combining features from Facebook, Instagram, and LinkedIn. The application provides a unified social networking experience with multiple modules including events, courses, posts, messaging, video chat, and video conferencing capabilities. Built as a multi-platform solution with web, iOS, and Android applications.',
        role: `As a full-stack developer, I:<br/>
        - Developed the web frontend using React.js with modern state management and responsive design.<br/>
        - Built robust backend APIs using Laravel framework for handling complex social media features.<br/>
        - Created native mobile applications using Swift for iOS and Kotlin for Android platforms.<br/>
        - Implemented real-time messaging and video conferencing features using WebRTC technology.<br/>
        - Designed and developed multiple modules including events, courses, posts, and messaging systems.<br/>
        - Integrated video chat and video conferencing capabilities for enhanced user interaction.`,
    }
];

export const MY_EXPERIENCE = [
    {
        title: 'Software-Engineer',
        company: 'Hello World Technologies',
        duration: 'May 2024 - Present',
    },
    {
        title: 'Full Stack Developer',
        company: 'Hello World Technologies',
        duration: 'July 2025 - Present',
    },
    {
        title: 'Frontend Developer',
        company: 'Australian IT Solutions',
        duration: 'Jan 2024 - Dec 2024',
    }
];
