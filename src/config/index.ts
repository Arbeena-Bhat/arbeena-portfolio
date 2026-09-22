import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Arbeena Bhat — AI/ML Developer",

  author: "Arbeena Bhat",

  description:
    "AI/ML Developer building intelligent applications, backend systems, computer vision solutions, RAG pipelines, and data-driven applications.",

  lang: "en",

  // Profile image is not used.
  siteLogo: "",

  navLinks: [
    { text: "Skills", href: "#skills" },
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "Education", href: "#education" },
    { text: "About", href: "#about" },
  ],

  socialLinks: [
    {
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/arbeena-naseer-66752527b/",
    },
    {
      text: "Github",
      href: "https://github.com/Arbeena-Bhat",
    },
  ],

  socialImage: "/zen-og.png",

  canonicalURL: "https://arbeena-portfolio.vercel.app",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Arbeena Bhat",

    specialty: "AI/ML Developer",

    summary:
      "I build AI-powered applications, intelligent backend systems, machine learning solutions, RAG pipelines, and computer vision applications using Python and modern AI technologies.",

    email: "arbeenanaseer543@gmail.com",
  },

  // --------------------------------------------------
  // SKILLS
  // --------------------------------------------------

  skills: {
    languages: ["Python", "Java", "C", "HTML", "CSS"],

    aiDataScience: [
      "Machine Learning",
      "Natural Language Processing",
      "Deep Learning",
      "Generative AI",
      "RAG",
      "CrewAI",
    ],

    computerVision: [
      "OpenCV",
      "NumPy",
      "YOLO",
      "ByteTrack",
      "BoT-SORT",
      "Jetson",
    ],

    frameworksTools: [
      "FastAPI",
      "Streamlit",
      "Docker",
      "Git",
      "LangGraph",
      "LangChain",
    ],

    databases: [
      "MongoDB",
      "PostgreSQL",
      "SQL",
      "Linux",
      "Windows",
    ],
  },

  // --------------------------------------------------
  // EXPERIENCE
  // --------------------------------------------------

  experience: [
    {
      company: "AiiOTs GEEK WORLD PVT LTD",
      position: "AI/ML Intern",
      startDate: "Jun 2025",
      endDate: "",
      summary: [
        "Built a FastAPI-based report generation system that automates report generation from PPTX and PDF decks by replacing placeholder variables with live PostgreSQL and MongoDB data.",

        "Implemented LLM-based placeholder naming using Groq and CTE-driven SQL generation for accurate database-driven variable resolution.",

        "Parsed PPTX structures using XML and shape-tree walking and processed PDFs through a hybrid pipeline using PyMuPDF, pdf2docx, and vision LLMs to create a unified schema.",

        "Built a PostgreSQL-to-ECharts chart pipeline with a FastAPI endpoint for dynamic, data-driven frontend visualizations.",

        "Strengthened a production FastAPI and MongoDB attendance management platform covering authentication, attendance tracking, leave/WFH, teams, and notifications.",

        "Implemented team-renaming and manager-facing leave features including leave forwarding, coverage assignment, and marking absentees, along with employee-facing leave chat and withdrawal.",

        "Deployed Apache Superset and a companion FastAPI service using Docker and evaluated multiple integration strategies.",
      ],
    },

    {
      company: "Rooman Technologies",
      position: "AI Data Analyst Intern",
      startDate: "Oct 2024",
      endDate: "",
      summary: [
        "Completed a 320-hour internship building real-time data-quality dashboards and machine learning pipelines using Python, Linux, and Matplotlib.",
      ],
    },

    {
      company: "Compsoft Technologies",
      position: "Machine Learning Intern",
      startDate: "May 2023",
      endDate: "",
      summary: [
        "Worked on a Lip-to-Text audio-visual recognition project using a Coupled 3D CNN.",

        "Used Dlib for face tracking and FFmpeg and SpeechPy for feature extraction as part of the audio-visual speech recognition pipeline.",
      ],
    },
  ],

  // --------------------------------------------------
  // PROJECTS
  // --------------------------------------------------

  projects: [
    {
      name: "AI Agent Builder",
      summary:
        "Built a multi-tool AI agent using FastAPI, Streamlit, LangChain, and Gemini with web search, MongoDB Atlas knowledge-base retrieval, and Twilio-based WhatsApp integration.",
      linkPreview: "/",
      linkSource: "https://github.com/Arbeena-Bhat/Ai-agent-builder",
      image: "/spotifu.png",
    },

    {
      name: "Daily Expense Tracker",
      summary:
        "Built a full-stack expense tracking application using FastAPI, Streamlit, and MongoDB.",
      linkPreview: "/",
      linkSource: "https://github.com/Arbeena-Bhat",
      image: "/shopify-clon.png",
    },

    {
      name: "PDF Extraction & Document Intelligence",
      summary:
        "Worked on document extraction and processing workflows involving PDF parsing, document understanding, and AI-assisted processing.",
      linkPreview: "/",
      linkSource: "https://github.com/Arbeena-Bhat/PDF-EXTRACTION",
      image: "/clone-ig.png",
    },

    {
      name: "Surveillance & Queue Monitoring",
      summary:
        "Built a real-time CCTV and queue-monitoring system using YOLO, ByteTrack, BoT-SORT, and OpenCV, with Jetson-based geofencing and alerting.",
      linkPreview: "/",
      linkSource: "https://github.com/Arbeena-Bhat",
      image: "/spotifu.png",
    },

    {
      name: "Violence Prediction",
      summary:
        "Built an action-recognition and violence-detection module using CNN and C3D for a social video platform. The project achieved 97.57% accuracy on the Video Violent Flows dataset and 96.18% on audio datasets.",
      linkPreview: "/",
      linkSource: "https://github.com/Arbeena-Bhat",
      image: "/shopify-clon.png",
    },

    {
      name: "Lip-to-Text",
      summary:
        "Built an audio-visual speech recognition system using a Coupled 3D CNN, Dlib face tracking, FFmpeg, and SpeechPy feature extraction.",
      linkPreview: "/",
      linkSource: "https://github.com/Arbeena-Bhat",
      image: "/clone-ig.png",
    },

    {
      name: "Chatbot Development",
      summary:
        "Built a Python-based AIML chatbot capable of providing natural-language responses using pattern matching.",
      linkPreview: "/",
      linkSource: "https://github.com/Arbeena-Bhat",
      image: "/spotifu.png",
    },

    {
      name: "Birth Rate Analysis",
      summary:
        "Worked on a data analysis project as part of Dev Minds.",
      linkPreview: "/",
      linkSource: "https://github.com/Arbeena-Bhat",
      image: "/shopify-clon.png",
    },

    {
      name: "IPL Database Management Application",
      summary:
        "Developed a database management application centered around IPL-related data.",
      linkPreview: "/",
      linkSource: "https://github.com/Arbeena-Bhat",
      image: "/clone-ig.png",
    },

    {
      name: "AI Integration for Predictive Maintenance",
      summary:
        "Worked on integrating AI techniques for predictive maintenance applications.",
      linkPreview: "/",
      linkSource: "https://github.com/Arbeena-Bhat",
      image: "/spotifu.png",
    },

    {
      name: "Snake Swallow Game",
      summary:
        "Developed a Snake Swallow game as part of the additional projects completed.",
      linkPreview: "/",
      linkSource: "https://github.com/Arbeena-Bhat",
      image: "/shopify-clon.png",
    },
  ],

  // --------------------------------------------------
  // EDUCATION
  // --------------------------------------------------

  education: [
    {
      degree: "Bachelor of Engineering — Computer Science",
      institution: "ACS College of Engineering",
      location: "Bangalore, Karnataka",
      period: "2021–2025",
      grade: "CGPA: 9.38",
    },

    {
      degree: "Class XII",
      institution: "Green Valley Educational Institute",
      location: "Jammu & Kashmir",
      period: "2019",
      grade: "92.8%",
    },
  ],

  // --------------------------------------------------
  // ABOUT
  // --------------------------------------------------

  about: {
    description: `
      Hi, I'm Arbeena Bhat, an AI/ML Developer interested in building practical and intelligent technology solutions.

      My work spans Machine Learning, Natural Language Processing, Deep Learning, Generative AI, RAG, Computer Vision, backend development, and data-driven applications.

      I work primarily with Python and have experience with technologies and frameworks including FastAPI, Streamlit, LangChain, LangGraph, CrewAI, OpenCV, YOLO, Docker, MongoDB, PostgreSQL, and SQL.

      I enjoy exploring how AI can be combined with reliable backend systems to solve real-world problems. My work includes AI agents, document processing, report generation, attendance management systems, computer vision, object detection and tracking, machine learning pipelines, chatbots, and data-analysis applications.

      I also enjoy learning new technologies, solving technical problems, and turning ideas into practical working applications.
    `,
  },
};
