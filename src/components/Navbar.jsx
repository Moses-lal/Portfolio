import React from "react";

const Navbar = ({ currentPage, setCurrentPage }) => {

  const isActive = (page) => {
    return currentPage === page ? " border-b-3 border-[#008080]" : "";
  };

  return (
    <>
      <div className="bg-black/50 backdrop-blur-sm p-1 fixed top-0 left-0 right-0 z-99 flex items-center justify-around">
        
        <div className="mr-100">
          <img src={'./logo.png'} className="w-20 object-fill rounded-lg " />
        </div>

        <div className="flex text-white space-x-7 font-medium text-md tracking-wide">
          <button onClick={() => setCurrentPage("home")} className={`cursor-pointer ${isActive("home")}`}>Home</button>
          <button onClick={() => setCurrentPage("about")} className={`cursor-pointer ${isActive("about")}`}>About</button>
          <button onClick={() => setCurrentPage("project")} className={`cursor-pointer ${isActive("project")}`}>Projects</button>
          <button onClick={() => setCurrentPage("skills")} className={`cursor-pointer ${isActive("skills")}`}>Skills</button>
          <button onClick={() => setCurrentPage("contact")} className={`cursor-pointer ${isActive("contact")}`}>Contact Me</button>
          <button onClick={() => setCurrentPage("education")} className={`cursor-pointer ${isActive("education")}`}>Academics</button>
        </div>
        
      </div>
    </>
  );
};

export default Navbar;
