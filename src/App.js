import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import ContactUs from "./pages/ContactUs";
import WorkExperience from "./pages/WorkExperience";
import Skills from "./pages/Skills";
import "./index.css";
import "./tailwind.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/education" element={<Education />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/workexperience" element={<WorkExperience />} />
          <Route path="/ContactUs" element={<ContactUs />} />

          <Route path="/Skills" element={<Skills />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
