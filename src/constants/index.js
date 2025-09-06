import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate Software Engineer with 3+ years of experience designing and delivering scalable AI-driven applications in healthcare, aviation, and fintech. I specialize in building intelligent platforms using LLMs, LangChain, RAG, and vector databases, with expertise in React/Next.js, FastAPI, and cloud-native architectures. My goal is to leverage cutting-edge AI technologies and full-stack expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated Software Engineer with 3+ years of experience creating efficient, AI-powered web applications across healthcare, aviation, and fintech industries. My expertise spans modern technologies including LLMs, LangChain, RAG systems, vector databases, React/Next.js, FastAPI, and cloud-native architectures on GCP. I have a proven track record of delivering measurable improvements in efficiency and automation, from building AI-driven healthcare platforms that improved match accuracy by 40% to creating intelligent CRM systems that reduced onboarding time to under 5 minutes. My journey in development began with traditional full-stack technologies and has evolved to embrace cutting-edge AI/ML solutions. I thrive in cross-functional environments, excel at system optimization, and am passionate about solving complex problems through innovative technology. Outside of coding, I stay current with emerging AI technologies and contribute to advancing intelligent software solutions.`;

export const EXPERIENCES = [
  {
    year: "2023 Oct - Present",
    role: "Software Engineerr",
    company: "ARHASI INC",
    description: [
      "Built Generics Care platform with Vertex AI Agent Builder + LangChain for client–caregiver matching, improving match accuracy by 40%.",
      "Shipped Homecare AI CRM with RAG + vector search to parse 10–20 healthcare documents and auto-populate database fields, cutting onboarding time to under 5 minutes.",
      "Created Insight Canvas multi-agent Chain of Thought system that reduced incorrect SQL queries by 70% through advanced prompt engineering and metadata analysis.",
      "Delivered React frontends with Python/LLM backends integrating OpenAI GPT, Neo4j, and custom NLP solutions for healthcare and fintech applications.",
      "Implemented vector databases and semantic search capabilities for enhanced data retrieval and user experience."
    ],
    technologies: ["Python", "FastAPI", "LangChain", "OpenAI GPT", "Vertex AI", "React.js", "Next.js", "Neo4j", "Vector Databases", "RAG", "NLP", "GCP"],
  },
  {
    year: "2023 Dec - 2024 Jul",
    role: "Software Engineer", 
    company: "CSM AVIATION",
    description: [
      "Launched AI-powered scheduling system for charter operations to intelligently route quotes and assign pilots based on availability and preferences.",
      "Built comprehensive maintenance module to prioritize work orders, resulting in 35% reduction in aircraft downtime.",
      "Implemented PDF-aware chatbot using NLP and RAG architecture for instant answers to staff and customer inquiries.",
      "Integrated ServiceNow for automated ticketing system, cutting response times by 40%.",
      "Deployed scalable solutions on AWS serverless infrastructure using Lambda, S3, CloudFront, and API Gateway."
    ],
    technologies: ["React.js", "Node.js", "Python", "NLP", "RAG", "ServiceNow", "AWS Lambda", "S3", "API Gateway", "MongoDB", "AI Chatbots"],
  },
  {
    year: "2021 Jan - 2022 Jun",
    role: "Java Developer",
    company: "NETSMARTZ",
    description: [
      "Built REST microservices with Spring Boot for ERP system serving 500+ users, implementing MVC architecture and dependency injection for enhanced scalability.",
      "Improved application performance by 40% through strategic implementation of Ehcache caching mechanisms on high-frequency inventory read operations.",
      "Integrated PayPal payment gateway APIs, reducing transaction errors by 25% and streamlining order processing workflows.",
      "Optimized database operations using JDBC prepared statements, stored procedures, and connection pooling for enhanced data manipulation efficiency.",
      "Developed statistical and decision reports using Jasper Reports and MySQL with Excel data sources for comprehensive data analysis.",
      "Enhanced team productivity through regular code reviews and mentoring, fostering best practices and knowledge sharing."
    ],
    technologies: ["Java", "Spring Boot", "Spring MVC", "Hibernate", "MySQL", "REST APIs", "Ehcache", "JDBC", "PayPal API", "Jasper Reports", "Maven"],
  }
];

export const PROJECTS = [
  {
    title: "Generics Care AI Platform",
    image: project1,
    description: [
      "Developed an AI-driven healthcare platform using Vertex AI Agent Builder and LangChain for intelligent client-caregiver matching.",
      "Implemented advanced machine learning algorithms that improved match accuracy by 40% through personalized recommendation systems.",
      "Built scalable RAG (Retrieval-Augmented Generation) architecture with vector databases for semantic search and document processing.",
      "Created real-time matching algorithms considering caregiver availability, client preferences, and geographical proximity.",
      "Integrated with healthcare compliance systems ensuring HIPAA compliance and secure data handling."
    ],
    technologies: ["Python", "LangChain", "Vertex AI", "RAG", "Vector Databases", "React.js", "FastAPI", "Neo4j", "GCP"],
  },
  {
    title: "Homecare AI CRM System",
    image: project2,
    description: [
      "Built intelligent CRM system with RAG and vector search capabilities to automatically parse and process 10-20 healthcare documents.",
      "Implemented NLP-powered data extraction that auto-populates database fields, reducing manual onboarding time from hours to under 5 minutes.",
      "Created multi-modal document processing pipeline handling PDFs, images, and structured data with 95% accuracy.",
      "Developed custom vector embeddings for healthcare-specific terminology and document classification.",
      "Integrated real-time notifications and workflow automation for seamless care coordination."
    ],
    technologies: ["Python", "RAG", "Vector Search", "NLP", "OpenAI GPT", "React.js", "PostgreSQL", "Redis", "Docker"],
  },
  {
    title: "Insight Canvas Multi-Agent System",
    image: project3,
    description: [
      "Created sophisticated multi-agent Chain of Thought system for intelligent SQL query generation and data analysis.",
      "Achieved 70% reduction in incorrect SQL queries through advanced prompt engineering and metadata analysis techniques.",
      "Implemented agent orchestration with specialized roles for query planning, validation, and execution optimization.",
      "Built natural language to SQL translation with context-aware understanding of database schemas and business logic.",
      "Developed interactive dashboard with real-time query performance monitoring and automated optimization suggestions."
    ],
    technologies: ["Python", "LangChain", "Multi-Agent Systems", "SQL", "FastAPI", "React.js", "Prompt Engineering", "Chain of Thought"],
  },
  {
    title: "Aviation AI Scheduling Platform",
    image: project4,
    description: [
      "Launched comprehensive AI-powered scheduling system for charter flight operations with intelligent pilot assignment algorithms.",
      "Built maintenance prioritization module that reduced aircraft downtime by 35% through predictive analytics and smart work order management.",
      "Implemented PDF-aware chatbot using NLP and RAG for instant customer and staff support with 24/7 availability.",
      "Integrated ServiceNow automation reducing response times by 40% and improving operational efficiency.",
      "Created real-time dashboard for flight operations monitoring with predictive maintenance alerts and resource optimization."
    ],
    technologies: ["React.js", "Node.js", "Python", "AI Scheduling", "NLP", "RAG", "ServiceNow", "AWS", "Real-time Analytics"],
  },
];

export const CONTACT = {
  address: "Merced, CA, USA",
  phoneNo: " (559) 371-3889",
  email: "anmolsingh2199@gmail.com",
};