// Layout.js
import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { NavLink, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="bg-gradient-to-r from-teal-500 to-indigo-600 text-white min-h-screen flex">
      <nav className="bg-teal-600 p-4 flex flex-col items-start w-1/4 min-h-full">
        <ul className="flex flex-col gap-4">
          <li>
            <NavLink
              exact
              to="/"
              activeClassName="font-bold"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/education"
              activeClassName="font-bold"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Education
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              activeClassName="font-bold"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ContactUs"
              activeClassName="font-bold"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              ContactUs
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/skills"
              activeClassName="font-bold"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Skills
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/workexperience"
              activeClassName="font-bold"
              className="hover:text-orange-500 transition-colors duration-300"
            >
              Work Experience
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className="content p-4 w-3/4 overflow-auto">
        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={300}>
            <div className="transition-opacity">
              <Outlet />
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default Layout;
