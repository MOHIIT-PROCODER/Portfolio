// ================= ICON IMPORTS =================
import {
  FaLightbulb,
  FaPaintBrush,
  FaCode,
  FaReact,
  FaServer,
  FaMobileAlt,
  FaTools,
  FaVuejs,
  FaFire,
  FaDatabase,
  FaCloud,
  FaRobot,
  FaEnvelope
} from "react-icons/fa";

import { FaNodeJs } from "react-icons/fa6";     // ✅ correct
import { SiStripe } from "react-icons/si";      // ✅ correct

// ================= IMAGE IMPORTS =================
import profileImg from "../assets/profile.avif";
import projectImg4 from "../assets/project4.avif";
import projectImg7 from "../assets/project7.png";
import projectImg8 from "../assets/project8.png";
import projectImg9 from "../assets/project9.png";

// ================= ASSETS =================
export const assets = {
  profileImg
};

// ================= ABOUT SECTION =================
export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: "Innovative",
    description:
      "I love creating unique solutions to complex problems with cutting-edge technologies.",
    color: "text-purple"
  },
  {
    icon: FaPaintBrush,
    title: "Design Oriented",
    description:
      "Beautiful design and user experience are at the heart of everything I create.",
    color: "text-pink"
  },
  {
    icon: FaCode,
    title: "Clean Code",
    description:
      "I write maintainable, efficient code following best practices and modern patterns.",
    color: "text-blue"
  },
  {
    icon: FaRobot,
    title: "AI & Machine Learning",
    description:
      "Integrating artificial intelligence to build smarter, data-driven applications.",
    color: "text-green"
  }
];

// ================= SKILLS =================
export const skills = [
  {
    title: "Frontend Development",
    icon: FaReact,
    description:
      "Building responsive and interactive user interfaces with modern frameworks.",
    tags: ["React", "Vue.js", "Angular", "TypeScript"]
  },
  {
    title: "Backend Development",
    icon: FaServer,
    description:
      "Creating robust server-side applications and RESTful APIs.",
    tags: ["Node.js", "Express", "Django"]
  },
  {
    title: "Database Management",
    icon: FaDatabase,
    description:
      "Designing and optimizing databases for performance and scalability.",
    tags: ["MongoDB", "PostgreSQL", "MySQL", "Firebase"]
  },
  {
    title: "AI & Machine Learning",
    icon: FaRobot,
    description:
      "Building intelligent applications leveraging large language models and data retrieval.",
    tags: ["LLMs", "RAG", "OpenAI API", "Pinecone", "Embeddings"]
  },
  {
    title: "Cloud & DevOps",
    icon: FaCloud,
    description:
      "Deploying and managing applications in cloud environments.",
    tags: ["AWS", "Docker", "Kubernetes", "CI/CD"]
  },
  {
    title: "Tools & Technologies",
    icon: FaTools,
    description:
      "Essential tools and technologies I use in my development workflow.",
    tags: ["Git & GitHub", "Webpack", "Figma"]
  }
];

// ================= PROJECTS =================
export const projects = [
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio to showcase projects, skills, and blogs with dark/light mode support.",
    image: projectImg4,
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    icons: [FaReact, FaCloud],
    demo: "#",
    code: "#"
  },
  {
    title: "Mohit AI - Website Builder",
    description:
      "Build stunning websites from a single prompt using artificial intelligence.",
    image: projectImg7,
    tech: ["React", "OpenAI API", "MongoDB", "Razorpay", "Nodemailer"],
    icons: [FaRobot, FaReact, FaDatabase, SiStripe, FaEnvelope],
    demo: "https://ai-website-builder-1-fn68.onrender.com/",
    code: "#"
  },
  {
    title: "Fitips Gym Platform",
    description:
      "A modern fitness and gym platform featuring secure Razorpay payment integration for memberships.",
    image: projectImg8,
    tech: ["React", "Node.js", "Firebase", "MongoDB", "Razorpay"],
    icons: [FaReact, FaNodeJs, FaFire, FaDatabase, SiStripe],
    demo: "https://gym-website-84r2.onrender.com/",
    code: "#"
  },
  {
    title: "MedBot AI",
    description:
      "An intelligent medical and health companion chatbot powered by AI to answer health-related queries.",
    image: projectImg9,
    tech: ["Flask", "LangChain", "Pinecone", "GROQ API", "RAG LLM"],
    icons: [FaRobot, FaDatabase, FaServer, FaCode],
    demo: "https://medical-chatbot-u0jc.onrender.com/",
    code: "#"
  }
];

// ================= WORK EXPERIENCE =================
export const workData = [
  {
    role: "Senior Frontend Developer",
    company: "TechCorp Inc.",
    duration: "2020 - Present",
    description:
      "Leading frontend development for enterprise clients, implementing modern frameworks, and mentoring junior developers.",
    color: "purple"
  },
  {
    role: "Web Developer",
    company: "Digital Solutions LLC",
    duration: "2018 - 2020",
    description:
      "Developed and maintained web applications for various clients, focusing on responsive design and performance optimization.",
    color: "pink"
  },
  {
    role: "Junior Developer",
    company: "StartUp Ventures",
    duration: "2016 - 2018",
    description:
      "Started my career building basic websites and gradually took on more complex projects as I expanded my skill set.",
    color: "blue"
  }
];