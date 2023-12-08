import React from "react";
import Header from "./Header";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-200 to-cyan-300">
      <Header />
      <div className="bg-black rounded-lg shadow-lg p-8 max-w-md mx-auto my-8 text-white">
        <h2 className="text-3xl font-semibold mb-4">Welcome to My Portfolio</h2>
        <img
          className="w-64 h-auto rounded-full mx-auto mb-4"
          src="../puneeth1.jpg"
          alt="Profile-img"
        />
        <p className="text-center">
          Hello! I'm puneeth Chowdary, I love programming. I worked as a web
          developer, In my time as a software engineer I had worked closely with
          react library and created 50+ websites I would love to connect with
          the many developers and See whats next.........
        </p>
      </div>
    </div>
  );
};

export default Home;
