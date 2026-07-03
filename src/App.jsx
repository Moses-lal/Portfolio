import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Project from "./pages/Project";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import DesktopOnly from "./components/DesktopOnly";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home setCurrentPage={setCurrentPage} />;
      case "about":
        return <About setCurrentPage={setCurrentPage} />;
      case "education":
        return <Education setCurrentPage={setCurrentPage} />;
      case "skills":
        return <Skills setCurrentPage={setCurrentPage} />;
      case "project":
        return <Project setCurrentPage={setCurrentPage} />;
      case "contact":
        return <Contact setCurrentPage={setCurrentPage} />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <>
    <DesktopOnly>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="flex ">
        <Sidebar />
        <section className="border w-11/14 ">
          {renderPage()}
        </section>
      </main>
      </DesktopOnly>
    </>
  );
};

export default App;
