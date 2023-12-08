import React, { useState, useEffect } from "react";

const Slideshow = () => {
  const educationDetails = [
    {
      title: "Schooling",
      content:
        "I had completed my schooling in St Mary's High school.I am a good student and got good marks in maths and science .At last I secured a good CGPG as well and passed out in the year 2016.",
    },
    {
      title: "College",
      content:
        "I had completed my college in the srichaitany junior college .I am interest in maths.So I choosen MPC and finally secured a good percentage of 96% and passed out in the year 2018",
    },
    {
      title: "University",
      content:
        "I attended Kl university for my bachelors in electronics and communication engineering .I have specilazed in speech signal processing and secured a good CGPA OF 8.4 OVERALL and I completed my bachelors in the year 2022",
    },
    {
      title: "University2",
      content:
        "In the year 2023 I have to Saint louis university to begin my Masters in computer science",
    },
  ];

  const [currentDetailIndex, setCurrentDetailIndex] = useState(0);

  const goToPreviousDetail = () => {
    const newIndex =
      (currentDetailIndex - 1 + educationDetails.length) %
      educationDetails.length;
    setCurrentDetailIndex(newIndex);
  };

  const goToNextDetail = () => {
    const newIndex = (currentDetailIndex + 1) % educationDetails.length;
    setCurrentDetailIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(goToNextDetail, 3000);

    return () => clearInterval(interval);
  }, [currentDetailIndex]);

  return (
    <div className="bg-gray-800 text-white min-h-screen flex flex-col justify-center items-center">
      <div className="my-4 text-center">
        <h1 className="font-bold text-4xl text-blue-500">Education Details</h1>
      </div>
      <div className="flex items-center justify-center my-8 relative">
        <button
          onClick={goToPreviousDetail}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          &#60;
        </button>
        <div className="education-card w-96 h-96 overflow-y-hidden bg-gray-700 text-white p-6 rounded">
          <h2 className="text-3xl font-bold mb-4">
            {educationDetails[currentDetailIndex].title}
          </h2>
          <p className="text-lg">
            {educationDetails[currentDetailIndex].content}
          </p>
        </div>
        <button
          onClick={goToNextDetail}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          &#62;
        </button>
      </div>
    </div>
  );
};

export default Slideshow;
