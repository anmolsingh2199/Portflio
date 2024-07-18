import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB, Spring and Java. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With more than 2 years of professional experience, I have worked with a variety of technologies, including Java, Spring, React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB, Rest API. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 Jan - Present",
    role: "Senior Full Stack Developer",
    company: "CSM AVIATION",
    description: [
      "Optimized and developed a cutting-edge, responsive website with React & Node.js, leading to a 30% surge in user engagement.",
      "Deployed on AWS serverless infrastructure, leveraging Lambda, S3, CloudFront, & API Gateway.",
      "Utilized React Query for efficient server state management & data synchronization to achieve a reduction in API response time.",
      "Involved in the full lifecycle of software design process of other projects, including prototyping, proof of concepts, design, interface implementation, testing, and maintenance."
    ],
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB", "Nodejs", "Express", "AWS Lambda", "Tailwind"],
  },
  {
    year: "2021 Jan - 2022 June",
    role: "Java Developer",
    company: "NETSMARTZ",
    description: [
      "Crafted engaging emails through the integration of JavaScript, jQuery, & Angular for dynamic functionalities, complemented by manual HTML5 & CSS coding to enhance click-through rates.",
      "Improved server performance & user experience by implementing Ehcache caching mechanisms, resulting in enhanced speed & responsiveness.",
      "Developed Statistical Reports in Jasper & Decision Reports in MySQL utilizing XLS sheet as Data Source for streamlined data analysis processes.",
      "Designed and developed the core modules of the ERP system, including inventory management, sales, and purchase.",
      "Enhanced backend systems connectivity by engaging with Java controllers, jQuery, Ajax, & JSON for data read/write operations.",
      "Enhanced customer satisfaction & increased transaction efficiency by integrating PayPal third-party APIs for advanced payment processing & streamlined order tracking.",
      "Enhanced team performance by conducting regular code reviews & offering constructive feedback to team members.",
      "Implemented Magnific Popup jQuery plugin to enhance user experience by enabling dynamic form validation in the Rich Internet Application (RIA).",
      "Designed & implemented database access programs using JDBC thin driver to execute queries, prepared statements, & Stored Procedures, enhancing data manipulation processes."
    ],
    technologies: ["Hibernate", "Spring", "Spring Batch", "Spring AOP", "Spring Core", "JSF", "IBatis", "Spring IOC", "Spring Cloud", "Rabbit", "Apache Tomcat", "Weblogic", "IBM WebSphere", "JBoss", "Kafka", "AWS", "EBS", "S3", "Docker", "ECS", "EBS", "EKS", "SQS", "RDS", "EFS", "S3", "Glacier", "Lambda", "Kubernetes", "SAM"]
  }
];

export const PROJECTS = [
  {
    title: "E-Commerce Website",
    image: project1,
    description: [
      "Developed a fully functional e-commerce website designed to provide a seamless online shopping experience.",
      "The platform includes features such as user authentication, product listings, shopping cart, order management, and payment integration.",
      "Engineered the back-end using Node.js with Express framework, ensuring robust and scalable architecture.",
      "Developed user-friendly front-end interfaces with HTML, CSS, JavaScript, and Bootstrap.",
      "Implemented responsive web design to ensure compatibility across various devices and screen sizes."
    ],
    technologies: ["HTML", "CSS", "React", "Node.js", "MongoDB"],
  },
  {
    title: "Nainer",
    image: project2,
    description: [
      "Spearheaded the implementation of Nainer, leveraging NextJs for superior SSR and SEO, propelling website traffic by 25% and elevating user experience. Pioneered the integration of Nextjs and Firebase push notifications in the Nainer project, amplifying user engagement through personalized alerts and achieving a 15% increase in user retention.Authored an interactive UI in Nainer with Tailwind CSS, resulting in a 20% boost in user satisfaction, and ensuring seamless styling consistency across diverse platforms."
    ],
    technologies: ["Next.js", "Node.js", "Angular", "Socket.IO","FireBase","MongoDB","Tailwind"],
  },
  {
    title: "Billie Bot",
    image: project3,
    description: [
      "Led the creation of a cross-platform educational app using React Native, resulting in a seamless experience for Android and iOS users. Implemented an Express NodeJS backend, PostgreSQL, and Prisma ORM for efficient data storage, enabling an adaptable and responsive learning environment while maintaining cross-platform compatibility.Achieved an innovative study data storage system powered by AI-driven vector formats, integrating ChatGPT for personalized interactions, and implementing Firebase push notifications for timely updates, resulting in a cutting-edge educational platform with advanced intelligence.Orchestrated the development of BillieBot’s robust administrative backend using AdminJS, ensuring secure and efficient administrative access, alongside a well-structured architecture employing React Native, NodeJS, and Firebase, creating a versatile and user-friendly interface for enhanced project management."
    ],
    technologies: ["Express.js", "PostgreSQL", "React Native", "Bootstrap"],
  },
  {
    title: "Geospatial Manipulation using Geospark",
    image: project4,
    description: [
      "Managed a platform to perform various geospatial operations on large scale datasets such as Uber Taxi trips.",
      "Contributed to the development of spatial functions such as st_within and st_covers."
    ],
    technologies: [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Reinforcement Learning",
      "Neural Networks",
      "Geospark",
      "Apache Spark",
      "ETL",
      "QGIS",
      "KML",
      "GeoJson"
    ],
  },
];

export const CONTACT = {
  address: "Merced, CA, USA",
  phoneNo: " (559) 371-3889",
  email: "anmolsingh2199@gmail.com",
};
