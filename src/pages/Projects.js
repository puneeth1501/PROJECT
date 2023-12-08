import React, { useState, useEffect } from "react";

const Slideshow = () => {
  const projects = [
    {
      id: 1,
      title: "Project 1",
      thumbnail: "amazona.jpg",
      description: "Brief description of Project 1.",
      details:
        "This is duplicate version of orginal amazon and this is build using the MERN stack .This is my favourite project .",
      link: "https://github.com/puneeth1501/mern-amazona-master",
    },
    {
      id: 2,
      title: "Project 2",
      thumbnail: "java2.jpeg",
      description: "Brief description of Project 2.",
      details:
        "This is java paroject ,an self initiative project ,built using the concept of Automation and Graphical user interface.",
      link: "https://github.com/puneeth1501/Hotel-Management-Project-Java-master",
    },
  ];

  const [currentDetailIndex, setCurrentDetailIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (index) => {
    setCurrentDetailIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col justify-center items-center">
      <div className="my-4 text-center">
        <h1 className="font-bold text-4xl text-blue-500">Projects</h1>
      </div>

      <div className="flex flex-wrap justify-center my-8">
        {projects.map((project, index) => (
          <div key={project.id} className="project-card m-4 relative">
            <img
              src={project.thumbnail}
              alt={`Thumbnail for ${project.title}`}
              className="w-64 h-48 object-cover rounded cursor-pointer"
              onClick={() => openModal(index)}
            />
            <h2 className="text-lg font-bold mt-2">{project.title}</h2>
          </div>
        ))}
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center p-4">
          <div className="modal bg-white p-8 rounded-lg overflow-y-auto relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900 cursor-pointer"
            >
              &#10005;
            </button>
            <h2 className="text-3xl font-bold mb-4">
              {projects[currentDetailIndex].title}
            </h2>
            <p className="text-lg mb-4">
              {projects[currentDetailIndex].description}
            </p>
            <p className="text-gray-700 mb-4">
              {projects[currentDetailIndex].details}
            </p>
            <a
              href={projects[currentDetailIndex].link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project on GitHub
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Slideshow;
