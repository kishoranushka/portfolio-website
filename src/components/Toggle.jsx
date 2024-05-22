import React, { useEffect, useState } from "react";

const Toggle = () => {
  let [darkMode, setDarkMode] = useState("False");
  useEffect(() => {
    if (darkMode) {
    document.documentElement.classList.add('dark');
    }
    else {
    document.documentElement.classList.remove('dark');
    }
  },[darkMode]);

  
  return (
    <div className=" ">
      <button
        onClick={() => {
          setDarkMode(!darkMode)
        }}
        className="w-full h-full bg-black dark:bg-white text-white font-bold p-2 rounded dark:text-black"
      >
       { darkMode?"Light ":"Dark "} Mode
      </button>
    </div>
  );
};

export default Toggle;
