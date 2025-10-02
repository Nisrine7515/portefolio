import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { useState } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
library.add(faEnvelope, faKey, faListAlt);
import {
  faEnvelope,
  faKey,
  faListAlt,
} from "@fortawesome/free-solid-svg-icons";
import "@fontsource/kanit";
import "@fontsource/kanit/700.css";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import SkillsList from "./pages/SkillsList";

import MyProjects from "./components/MyProjects";
import ProjectsList from "./pages/ProjectsList";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="skills" element={<SkillsList />} />
        <Route path="MyProjects" element={<MyProjects />} />
        <Route path="ProjectsList" element={<ProjectsList />} />
      </Routes>
    </Router>
  );
}
export default App;
