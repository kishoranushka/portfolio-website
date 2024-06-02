import React, { useEffect, useState } from "react";

const Toggle = () => {
  // Initialize darkMode state based on user's system preference
  const prefersDarkScheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  let [darkMode, setDarkMode] = useState(prefersDarkScheme);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div>
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="lg:w-full h-full  bg-black dark:bg-white  font-bold  text-white lg:font-bold p-2 rounded dark:text-black"
      >
        {darkMode ? "Light " : "Dark "} Mode
      </button>
    </div>
  );
};

export default Toggle;
