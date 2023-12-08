import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faJs,
  faReact,
  faHtml5,
  faNode,
  faPython,
  faBootstrap,
  faLinux,
  faGit,
} from "@fortawesome/free-brands-svg-icons";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const skills = [
    { name: "JavaScript", level: 90, icon: faJs },
    { name: "React", level: 85, icon: faReact },
    { name: "HTML/CSS", level: 95, icon: faHtml5 },
    { name: "Node.js", level: 80, icon: faNode },
    { name: "Python", level: 75, icon: faPython },
    { name: "Express", level: 70, icon: faNode },
    { name: "Bootstrap", level: 85, icon: faBootstrap },
    { name: "Linux", level: 75, icon: faLinux },
    { name: "Git", level: 90, icon: faGit },
  ];

  return (
    <div>
      <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white rounded-md shadow-md p-4 flex flex-col items-center justify-center transition duration-300 ease-in-out transform hover:scale-105"
          >
            <FontAwesomeIcon
              icon={skill.icon}
              className="text-3xl text-teal-500 mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{skill.name}</h3>
            <div style={{ width: "70px", height: "70px" }}>
              <CircularProgressbar
                value={skill.level}
                text={`${skill.level}%`}
                styles={buildStyles({
                  textColor: "#2c3e50",
                  pathColor: "#3498db",
                  trailColor: "#ecf0f1",
                })}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
