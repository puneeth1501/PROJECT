import React from "react";

const workExperienceData = [
  {
    id: 1,
    company: "LtiMindtree",
    date: "July 2022 - August 2023",
    role: "Software Engineer",
    logo: "ltimindtree.png",
    description:
      "Worked as a Software Engineer at LtiMindtree. Responsible for developing React applications. Learned full-stack web development during my time as a software engineer.",
  },
  {
    id: 2,
    company: "Entuple Technologies",
    date: "March 2021",
    role: "Intern Data Analyst",
    logo: "entuple.png",
    description:
      "Completed my first internship at Entuple Technologies. Responsible for analyzing various large datasets and providing graphical insights to clients.",
  },
];

function WorkExperience() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <main>
        <section id="skills"></section>

        <section id="experience">
          <h2 className="font-bold text-center text-2xl mb-4">
            Work/Volunteer Experience
          </h2>
          {workExperienceData.map((experience) => (
            <div
              key={experience.id}
              className="company-card border p-4 mx-4 my-2 transition duration-300 ease-in-out transform hover:border-blue-500 hover:scale-105"
            >
              <p className="text-center">
                <span className="text-lg font-bold">
                  {experience.company}
                  <br />
                  {experience.date}, role: {experience.role}
                </span>
                <br />
                <img
                  src={experience.logo}
                  alt={`${experience.company} logo`}
                  className="company-logo mt-4 mx-auto"
                />
                <p className="text-lg my-4">{experience.description}</p>
              </p>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}

export default WorkExperience;
