const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
    { value: 1.5, suffix: "+", label: "Years of Experience" },
    { value: 5, suffix: "+", label: "Satisfied Clients" },
    { value: 10, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
   
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
   
    {
        imgPath: "/images/logos/company-logo-7.png",
    },

    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    
    
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [
    {
        name: "React Developer",
        imgPath: "/images/logos/react.png",
    },
    {
        name: "Python Developer",
        imgPath: "/images/logos/python.svg",
    },
    {
        name: "Backend Developer",
        imgPath: "/images/logos/node.png",
    },
    {
        name: "Interactive Developer",
        imgPath: "/images/logos/three.png",
    },
    {
        name: "Project Manager",
        imgPath: "/images/logos/git.svg",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python Developer",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
        imgPath: "/images/exp1.png",
        logoPath: "/images/logo1.png",
        title: "Frontend Developer",
        date: "January 2023 - Present",
        responsibilities: [
            "Developed and maintained user-facing features for the Hostinger website.",
            "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
            "Optimized web applications for maximum speed and scalability.",
        ],
    },
  {
    review: "Adrian began his journey mastering HTML, CSS, and JavaScript, and quickly evolved into building modern frontend applications. His strong design sense and technical growth have shaped him into a creative and performance-focused developer.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer – React & Tailwind CSS",
    date: "2018 - Present",
    responsibilities: [
      "Started with HTML, CSS, and JavaScript to build responsive layouts.",
      "Built UI components with React and styled them using Tailwind CSS.",
      "Created a 3D portfolio using Three.js and GSAP for animations.",
      "Focused on clean code, responsiveness, and smooth user interactions.",
    ],
  },
  {
    review: "Adrian's transition into fullstack development allowed him to build scalable applications from end to end. His backend work reflects a solid understanding of databases, APIs, and secure architecture.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer – MERN & Next.js",
    date: "2020 - Present",
    responsibilities: [
      "Built fullstack apps using MongoDB, Express, React, and Node.js.",
      "Created dynamic pages and APIs using Next.js for performance and SEO.",
      "Handled user auth, REST APIs, and backend logic securely.",
      "Used Mongoose for data modeling and integrated frontend with backend flows.",
    ],
  },
  {
    review: "Adrian’s recent work combines intelligent backend systems with creative frontend experiences. By integrating AI platforms like Convx and Vapi.ai with advanced 3D and animation tools like Three.js and GSAP, he demonstrates a unique blend of technical depth and visual innovation.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Creative Full Stack Developer – AI & 3D Experiences",
    date: "2023 - Present",
    responsibilities: [
      "Integrated Convx and Vapi.ai APIs for voice/chat automation.",
      "Managed conversational data using MongoDB and Node.js.",
      "Built real-time webhooks and backend services for AI features.",
      "Crafted 3D and animated UIs using Three.js and GSAP.",
      "Blended backend logic with interactive, immersive frontends.",
    ],
  }
];


const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "CYRUS SANDHU",
        mentions: "@CYRUSSANDHU",
        review:
            "I can’t say enough good things about ERIC. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "VANSHIKA",
        mentions: "@VANSHIKA",
        review:
            "Working with ERIC was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "CHAITANYA TYAGI",
        mentions: "@CHAITANYATYAGI",
        review:
            "Collaborating with Eric was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "ERIC was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "ERIC’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "ERIC was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "Leetcode",
        url: "https://leetcode.com/u/ericsandhu1/",
        imgPath: "/images/Leetcode1.png"
    },
    {
        name: "Github",
        url: "https://github.com/ERICSANDHU1",
        imgPath: "/images/Github.png"
    },
    {
        name: "x",
        url: "https://x.com/ERIC_FFX",
        imgPath: "/images/x.png"
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/eric-sandhu-277b85307/",
        imgPath: "/images/linkedin.png"
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};