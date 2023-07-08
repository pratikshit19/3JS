import {
    
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    flutter,
    bootstrap,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    aigro,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    aigroapp,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Flutter Developer",
      icon: flutter,
    },
    {
      title: "ReactJS Developer",
      icon: reactjs,
    },
    {
      title: "Front-end Developer",
      icon: html,
    },
    
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Flutter",
      icon: flutter,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "bootstrap",
      icon: bootstrap,
    },
    
  ];
  
  const experiences = [
    {
      title: "Flutter App Developer",
      company_name: "AigroEdge Technologies",
      icon: aigro,
      iconBg: "#383E56",
      date: "June 2023",
      points: [
        "Developing a flutter applications using Dart and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "ReactJS Developer",
      company_name: "Self",
      icon: reactjs,
      iconBg: "#E6DEDD",
      date: "July 2023",
      points: [
        "Developing a simple web application for searching a movie using React.js .",
        "Implementing responsive design and ensuring cross-browser compatibility.",
      ],
    },
    
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "TinDog - Tinder for dogs",
      description:
        "Web-based platform that allows users(dogs) to search for a match required for their well-being.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "pink-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "orange-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/pratikshit19/webDev",
    },
    {
      name: "Moving Object Detection",
      description:
        "Python implementation for detecting moving objects from a mounted camera. Tracked objects in enclosed boxes, used Edge detection, mapping, OpenCV",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "opencv",
          color: "green-text-gradient",
        },
        {
          name: "edgedetection",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/pratikshit19",
    },
    {
      name: "Flutter Application",
      description:
        "Developing a flutter applications using Dart and other related technologies for farmers to help optimize farming methods and provide them with timely suggestions to prevent any crop failure",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        
      ],
      image: aigroapp,
      source_code_link: "https://github.com/pratikshit19/FlutterApp-AigroEdge-Tech",
    },
    {
      name: "Movie Search Page",
      description:
        "A comprehensive movie page that allows users to search for any movie they desire. This was my first ever ReactJS project to learn the basic of react and its components",
      tags: [
        {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        
      ],
      image: tripguide,
      source_code_link: "https://github.com/pratikshit19/ReactJS---Movie_search_page",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };