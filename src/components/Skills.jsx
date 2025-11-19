import { useScrollAnimation } from "../hooks/useScrollAnimation";
import "./Skills.css";

const Skills = () => {
  const [headerRef, headerVisible] = useScrollAnimation();
  const [gridRef, gridVisible] = useScrollAnimation();
  const skills = [
    {
      name: "Node.js",
      category: "Backend",
      color: "#68A063",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    },
    {
      name: "Express.js",
      category: "Backend Framework",
      color: "#000000",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    },
    {
      name: "MongoDB",
      category: "Database",
      color: "#4DB33D",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    },
    {
      name: "React",
      category: "Frontend",
      color: "#339af0",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    },
    {
      name: "Tailwind CSS",
      category: "Styling Framework",
      color: "#38BDF8",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    },
    {
      name: "JavaScript",
      category: "Language",
      color: "#ffd43b",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    },
    {
      name: "HTML5",
      category: "Frontend",
      color: "#ff6b6b",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    },
    {
      name: "CSS3",
      category: "Styling",
      color: "#4dabf7",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    },
    {
      name: "MySQL",
      category: "Database",
      color: "#ff8787",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    },
    {
      name: "VS Code",
      category: "Tools",
      color: "#9775fa",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
    },
    {
      name: "Postman",
      category: "Tools",
      color: "#FF6C37",
      img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="skills-container">
        <div
          ref={headerRef}
          className={`section-header scroll-animate ${
            headerVisible ? "visible" : ""
          }`}
        >
          <h2 className="section-title">The Skills That I Have</h2>
          <p className="section-subtitle">
            💼 Technologies & Tools I Work With
          </p>
        </div>

        <div
          ref={gridRef}
          className={`skills-grid scroll-animate-scale ${
            gridVisible ? "visible" : ""
          }`}
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card"
              style={{
                animationDelay: `${index * 0.1}s`,
                borderColor: skill.color,
              }}
            >
              <div
                className="skill-icon"
                style={{ background: `${skill.color}20` }}
              >
                <img src={skill.img} alt={skill.name} className="skill-img" />
              </div>

              <div className="skill-info">
                <h3 className="skill-name">{skill.name}</h3>
                <p className="skill-category">{skill.category}</p>
              </div>
              <div
                className="skill-glow"
                style={{ background: skill.color }}
              ></div>
            </div>
          ))}
        </div>

        <div className="skills-footer">
          <p className="skills-note">
            Always learning and expanding my tech stack to stay current with
            industry trends
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
