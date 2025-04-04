import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import AOS from "aos";

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const skillCategories = [
    {
      title: "🎨 Frontend Development",
      skills: ["HTML", "CSS","JavaScript","ReactJS", "TypeScript", "Bootstrap", "Tailwind CSS"],
      color: "primary",
      icon: "fas fa-paint-brush",
    },
    {
      title: "🖥 Backend Development",
      skills: ["Node.js", "Express.js", "PHP", "Laraval", "Flask"],
      color: "success",
      icon: "fas fa-server",
    },
    {
      title: "💾 Databases",
      skills: ["MySQL", "MongoDB", "Cloud Firebase", "SQLite"],
      color: "danger",
      icon: "fas fa-database",
    },
    {
      title: "⚙️ Frameworks & Libraries",
      skills: ["Redux", "Material-UI", "SASS", "Bootstrap", "Flutter"],
      color: "warning",
      icon: "fas fa-code-branch",
    },
    {
      title: "🛠 Software & Tools",
      skills: ["Git", "Adobe Photoshop", "Figma", "Postman", "Android Studio", "VS Code"],
      color: "info",
      icon: "fas fa-tools",
    },
  ];

  return (
    <div className="container my-5">
      <h1 className="text-center text-dark fw-bold mb-4" data-aos="fade-down">
        💻 My Skills
      </h1>

      <div className="row">
        {skillCategories.map((category, index) => (
          <div key={index} className="col-md-4 mb-4" data-aos="zoom-in">
            <div className={`card text-white bg-${category.color} shadow-lg skill-card`}>
              <div className="card-body text-center">
                <i className={`${category.icon} fa-3x mb-3`}></i>
                <h5 className="card-title fw-bold">{category.title}</h5>
                <ul className="list-unstyled">
                  {category.skills.map((skill, idx) => (
                    <li key={idx} className="skill-item">{skill}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
