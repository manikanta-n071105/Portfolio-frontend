import { Github, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import project1Image from "../assets/project1.png";
import project2Image from "../assets/project2.png";
import project3Image from "../assets/project3.png";
import project4Image from "../assets/project4.png";
import project5Image from "../assets/project5.png";
import "./Projects.css";
import { useState } from "react";

const Projects = () => {
  console.log("Projects component is rendering");
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  const [showAllProjects, setShowAllProjects] = useState(false);

  const featuredProjects = [
    {
      id: 1,
      title: "SSE Discipline",
      description:
        "Built an interactive admin dashboard for real-time monitoring of complaints, student logs, and analytics. Integrated authentication and authorization with NextAuth.js and JWT for secure multi-role access.",
      image: project2Image,
      tags: ['React', 'Next.js', 'NeonDB', 'Prisma','Tailwind CSS'],
      github: "#",
      demo: "https://ssesms.vercel.app", // provide demo link if you have
    },
    {
      id: 2,
      title: "Let's Connect",
      description:"A real-time chat application with direct messaging, group chats, friend requests, and live updates using Socket.io. Frontend built with React and backend powered by Node.js, Express, and MongoDB.",
      image: project1Image,
      tags: ["React", "NodeJs", "ExpressJs", "MongoDB", "Socket.io", "JavaScript"],
      github: "#",
      demo: "https://chat-frontend-rouge-beta.vercel.app",
    },
  ];

  const allProjects = [
    ...featuredProjects,
    {
      id: 3,
      title: "Stop Watch",
      description:
        "A precise stopwatch application built with React. Features include start, pause, resume, and reset functionality. The clean and minimal design makes it easy to track time with millisecond accuracy.",
      image: project4Image,
      tags: ["React", "JavaScript", "HTML/CSS"],
      demo: "https://dynamic-fudge-8ec555.netlify.app/",
    },
    {
      id: 4,
      title: "To Do List",
      description:
        "A simple and intuitive task management application built with React. Create, edit, and delete tasks with a clean and responsive interface. Helps you stay organized and manage your daily activities efficiently.",
      image: project3Image,
      tags: ["React", "Local Storage", "HTML/CSS", "JavaScript"],
      demo: "https://graceful-gumption-b10540.netlify.app/",
    },
    {
      id: 5,
      title: "Digital Clock",
      description:
        "A sleek digital clock application built with React. Displays the current time with a clean, modern interface. Features include 12/24 hour format toggle and a smooth animation for the time display.",
      image: project5Image,
      tags: ["React", "JavaScript", "HTML/CSS"],
      demo: "https://preeminent-tanuki-a8296c.netlify.app/",
    },
  ];

  const toggleAllProjects = () => {
    setShowAllProjects(!showAllProjects);
  };

  const renderProjectCard = (project, index) => (
    <div
      key={project.id}
      className="project-card"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="project-number">0{project.id}</div>
      <div className="project-image">
        <img src={project.image} alt={project.title} />
        <div className="project-overlay">
          <div className="project-links">
            {project.github && (
              <a
                href={project.github}
                className="project-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={20} />
                <span>Code</span>
              </a>
            )}
            <a
              href={project.demo}
              className="project-link demo"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink size={20} />
              <span>Live Demo</span>
            </a>
          </div>
        </div>
      </div>
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-tags">
          {project.tags.map((tag, i) => (
            <span key={i} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="projects" className="projects">
      <div className="projects-container">
        <div
          ref={headerRef}
          className={`section-header scroll-animate ${
            headerVisible ? "visible" : ""
          }`}
        >
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing my best work in full-stack development
          </p>
        </div>

        <div
          ref={gridRef}
          className={`projects-grid scroll-animate ${
            gridVisible ? "visible" : ""
          }`}
        >
          {(showAllProjects ? allProjects : featuredProjects).map(
            (project, index) => renderProjectCard(project, index)
          )}
        </div>

        {!showAllProjects && (
          <div className="view-all-container">
            {/* <button
              className="view-all-btn"
              onClick={toggleAllProjects}
              style={{
                padding: "12px 30px",
                fontSize: "1rem",
                fontWeight: "600",
                color: "var(--text-white)",
                backgroundColor: "transparent",
                border: "2px solid var(--accent-cyan)",
                borderRadius: "50px",
                cursor: "pointer",
                transition: "all 0.3s ease",
                ":hover": {
                  backgroundColor: "rgba(0, 217, 255, 0.1)",
                  transform: "translateY(-3px)",
                  boxShadow: "0 10px 20px rgba(0, 217, 255, 0.2)",
                },
              }}
            >
              View All Projects
            </button> */}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
