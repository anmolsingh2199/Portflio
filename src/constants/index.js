import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `Results-driven Software Engineer with 3+ years of experience designing and delivering scalable AI-driven applications in healthcare, aviation, and fintech. Skilled in building intelligent platforms using LLMs, LangChain, RAG, and vector databases, with expertise in React/Next.js, FastAPI, and cloud-native architectures on GCP. Strong background in data visualization, system optimization, and cross-functional collaboration, delivering measurable improvements in efficiency, automation, and business outcomes.`;

export const ABOUT_TEXT = `I am a dedicated Software Engineer with 3+ years of experience creating efficient, AI-powered web applications across healthcare, aviation, and fintech industries. My expertise spans modern technologies including LLMs, LangChain, RAG systems, vector databases, React/Next.js, FastAPI, and cloud-native architectures on GCP. I have a proven track record of delivering measurable improvements in efficiency and automation, from building AI-driven healthcare platforms that improved match accuracy by 40% to creating intelligent CRM systems that reduced onboarding time to under 5 minutes. My journey in development began with traditional full-stack technologies and has evolved to embrace cutting-edge AI/ML solutions. I thrive in cross-functional environments, excel at system optimization, and am passionate about solving complex problems through innovative technology. Outside of coding, I stay current with emerging AI technologies and contribute to advancing intelligent software solutions.`;

export const EXPERIENCES = [
  {
    year: "2023 Oct - Present",
    role: "Software Engineer",
    company: "ARHASI INC",
    description: [
      "Designed and implemented a HIPAA-compliant clinical data platform using Spring Boot, AWS EKS, and .NET tools, enabling scalable ingestion of 1M+ records per hour with low-latency performance.",
      "Containerized microservices with Docker and managed orchestration via Kubernetes to enhance load balancing and reduce platform downtime by 40%.",
      "Optimized backend services and database interactions, improving real-time patient monitoring response times by 30% for 50K+ users through React.js and Flask interfaces.",
      "Developed ML-driven anomaly detection on surgical device telemetry using Python and AWS S3, boosting equipment reliability across 500+ installations.",
      "Refined Jenkins CI/CD pipelines with SonarQube quality gates to identify code issues early, reducing post-deployment defects by 45% and improving system stability."
    ],
    technologies: ["Spring Boot", "AWS EKS", ".NET", "Docker", "Kubernetes", "React.js", "Flask", "Python", "AWS S3", "Jenkins", "SonarQube", "ML", "HIPAA Compliance"],
  },
  {
    year: "2023 Dec - 2024 Jul",
    role: "Software Development Engineer", 
    company: "CSM AVIATION",
    description: [
      "Took charge of crafting a microservices-based scheduling system using Java, Spring Boot, and MySQL, empowering real-time visibility for over 50K daily shipments and shrinking SLA violations by 22%.",
      "Developed integrated charter maintenance workflow system with Stripe payment processing, serving 150+ monthly users while reducing payment collection time by 75% and achieving 98% payment success rate.",
      "Engaged in modularizing monolithic HRM architecture into scalable services via Spring Cloud and Docker, achieving a 60% improvement in horizontal scalability under load tests.",
      "Introduced JWT-based role access control with Spring Security, fortifying multi-tenant SaaS products against unauthorized access and passing annual security audits with zero critical issues.",
      "Validated all user-critical features through automation scripts using Selenium, TestNG, and Postman, raising regression test coverage to 92% and trimming manual QA cycle time by 50%."
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "Stripe", "Spring Cloud", "Docker", "JWT", "Spring Security", "Selenium", "TestNG", "Postman", "Microservices"],
  },
  {
    year: "2021 Jan - 2022 Jun",
    role: "Software Development Engineer",
    company: "NETSMARTZ",
    description: [
      "Developed microservices using Spring Boot, implementing CRUD operations, exception handling, and advanced OOP concepts following the MVC design pattern.",
      "Optimized Snowflake database interactions with Hibernate, creating triggers, functions, and efficient schemas for large-scale applications.",
      "Implemented robust encryption mechanisms and security protocols in microservices architecture, ensuring data protection and compliance with GDPR and PCI standards.",
      "Automated deployment of services to Azure Kubernetes Service (AKS) using kubectl and Helm charts, ensuring version control and rollback capabilities.",
      "Implemented secure authentication with Azure Active Directory and OAuth-based single sign-on (SSO), ensuring robust access control."
    ],
    technologies: ["Spring Boot", "Snowflake", "Hibernate", "Azure Kubernetes Service", "kubectl", "Helm", "Azure AD", "OAuth", "GDPR", "PCI Compliance", "Microservices"],
  }
];

export const PROJECTS = [
  {
    title: "HIPAA-Compliant Clinical Data Platform",
    image: project1,
    description: [
      "Designed and implemented a comprehensive clinical data platform using Spring Boot, AWS EKS, and .NET tools for healthcare organizations.",
      "Achieved scalable ingestion of 1M+ records per hour with low-latency performance through optimized microservices architecture.",
      "Containerized services with Docker and implemented Kubernetes orchestration for enhanced load balancing and 40% reduction in downtime.",
      "Developed ML-driven anomaly detection for surgical device telemetry, improving equipment reliability across 500+ installations.",
      "Integrated Jenkins CI/CD pipelines with SonarQube quality gates, reducing post-deployment defects by 45%."
    ],
    technologies: ["Spring Boot", "AWS EKS", ".NET", "Docker", "Kubernetes", "ML", "Jenkins", "SonarQube", "HIPAA"],
  },
  {
    title: "Microservices Scheduling System",
    image: project2,
    description: [
      "Built comprehensive microservices-based scheduling system using Java, Spring Boot, and MySQL for real-time shipment tracking.",
      "Enabled visibility for 50K+ daily shipments while reducing SLA violations by 22% through intelligent routing algorithms.",
      "Integrated Stripe payment processing serving 150+ monthly users with 98% success rate and 75% faster collection times.",
      "Modularized monolithic HRM architecture using Spring Cloud and Docker, achieving 60% improvement in horizontal scalability.",
      "Implemented JWT-based role access control with Spring Security for multi-tenant SaaS products."
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "Stripe", "Spring Cloud", "Docker", "JWT", "Spring Security", "Microservices"],
  },
  {
    title: "Azure Cloud Microservices Platform",
    image: project3,
    description: [
      "Developed scalable microservices platform using Spring Boot with advanced OOP concepts and MVC design patterns.",
      "Optimized Snowflake database interactions with Hibernate, implementing efficient schemas for large-scale applications.",
      "Automated deployment to Azure Kubernetes Service using kubectl and Helm charts with version control and rollback capabilities.",
      "Implemented robust security with Azure Active Directory and OAuth-based SSO for enterprise access control.",
      "Ensured compliance with GDPR and PCI standards through advanced encryption mechanisms and security protocols."
    ],
    technologies: ["Spring Boot", "Snowflake", "Hibernate", "Azure AKS", "kubectl", "Helm", "Azure AD", "OAuth", "Security Compliance"],
  },
  {
    title: "Automated Testing & QA Framework",
    image: project4,
    description: [
      "Built comprehensive automation testing framework using Selenium, TestNG, and Postman for end-to-end quality assurance.",
      "Achieved 92% regression test coverage while reducing manual QA cycle time by 50% through intelligent test automation.",
      "Developed real-time patient monitoring interfaces using React.js and Flask, improving response times by 30% for 50K+ users.",
      "Created automated deployment pipelines with continuous integration and quality gates for enhanced system stability.",
      "Implemented performance monitoring and alerting systems for proactive issue detection and resolution."
    ],
    technologies: ["Selenium", "TestNG", "Postman", "React.js", "Flask", "Automation Testing", "CI/CD", "Performance Monitoring"],
  },
];

export const CONTACT = {
  address: "San Francisco, CA, USA",
  phoneNo: " (559) 371-3889",
  email: "anmolsingh2199@gmail.com",
};