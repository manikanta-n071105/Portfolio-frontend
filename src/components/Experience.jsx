import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Experience.css";

const Experience = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [timelineRef, timelineVisible] = useScrollAnimation();
  const [visualRef, visualVisible] = useScrollAnimation();
  const experiences = [
    {
      role: "Full Stack Web Developer Intern",
      company: "Sure Trust ProED",
      period: "August 2025 - Present",
      location: "Puttaparthi, India",
      description:
        "Completed intensive Full Stack Web Development training program with hands-on internship experience. Built multiple real-world projects using NodeJs, ExpressJs, and React. Gained expertise in developing RESTful APIs, database management, and modern web application architecture.",
      skills: [
        "Node.js",
        "Express.js",
        "React",
        "MongoDB",
        "HTML/CSS",
        "JavaScript",
      ],
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    },
  ];

  const technologies = [
    {
      name: "Node.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "React",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Next.js",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    },
    {
      name: "MongoDB",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "JavaScript",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML5",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "Tailwind CSS",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "REST APIs",
      img: "https://api.iconify.design/mdi/api.svg",
    },
  ];

  return (
    <section id="experience" className="experience">
      <div className="experience-container">
        <div
          ref={headerRef}
          className={`section-header scroll-animate ${
            headerVisible ? "visible" : ""
          }`}
        >
          <h2 className="section-title">Training & Experience</h2>
          <p className="section-subtitle">
            My learning journey and technical training
          </p>
        </div>

        <div className="experience-content">
          <div
            ref={timelineRef}
            className={`experience-timeline scroll-animate-left ${
              timelineVisible ? "visible" : ""
            }`}
          >
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <div className="experience-marker"></div>
                <div className="experience-card">
                  <div className="experience-header">
                    <div>
                      <h3 className="experience-role">{exp.role}</h3>
                      <div className="experience-company">
                        <Briefcase size={18} />
                        <span>{exp.company}</span>
                      </div>
                    </div>
                    <div className="experience-badge">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                  </div>

                  <div className="experience-location">
                    <MapPin size={16} />
                    <span>{exp.location}</span>
                  </div>

                  <p className="experience-description">{exp.description}</p>

                  <div className="experience-skills">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div
            ref={visualRef}
            className={`experience-visual scroll-animate-right ${
              visualVisible ? "visible" : ""
            }`}
          >
            <div className="tech-showcase">
              <h3 className="tech-title">Technologies I Work With</h3>
              <div className="tech-grid">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="tech-item"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <img src={tech.img} alt={tech.name} />
                    <span className="tech-name">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="stats-container">
              <div className="stat-item">
                <div className="stat-value">10+</div>
                <div className="stat-label">Projects Completed</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">5+</div>
                <div className="stat-label">Technologies</div>
              </div>
              <div className="stat-item">
                <div className="stat-value">100%</div>
                <div className="stat-label">Commitment</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
