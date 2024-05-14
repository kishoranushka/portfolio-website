import React from "react";
import RolehuntImage from "../assets/rolehunt.jpg";
import weatherimg1 from "../assets/weatherappimg.jpg";
import zomato from "../assets/zomatoclone.jpg";
import uber from "../assets/uberclone.jpg";
import prep from "../assets/prepinstaclone.jpg";
import { Link } from "react-router-dom";
import ProjectCard from "../components/ProjectCard";
import CloneCard from "../components/CloneCard";

const Projects = () => {
  return (
    <>
      <div className="  mb-10 p-20 px-80">
        <h1 className="text-6xl mb-10 font-bold text-[#1f2937]">Projects!</h1>
        {ProjectsData.map((ele) => (
            <ProjectCard data={ele} />
        ))}
       
        <div>
          <h1 className="text-6xl mb-10 font-bold text-[#1f2937]">Clone!</h1>
          <div className="flex justify-between">
            {CloneCardData.map((ele) => (
              <CloneCard data={ele} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;

const ProjectsData = [
  {
    title: "RoleHunt - A Placement Management System",
    link: "https://rolehunt.vercel.app/",
    desc: "Created and deployed a comprehensive Next.js placement management system. Worked on the user side of the project to enable students easily navigate through the platform.",
    btnText: "Checkout",
    category: "Web Development",
    image: RolehuntImage,
  },
  {
    title: "Weather Web App",
    link: "https://kishoranushka.github.io/weather-app/",
    desc: "Created and deployed a comprehensive Next.js placement management system. Worked on the user side of the project to enable students easily navigate through the platform.",
    btnText: "Checkout",
    category: "Web Development",
    image: weatherimg1,
  },
];

const CloneCardData = [
  {
    title: "Zomato Web Clone",
    link: "https://kishoranushka.github.io/zomato-web-clone/",
    desc: "Created and deployed the clone of zomato home page made using HTML and CSS.",
    btnText: "Checkout",
    category: "Web Development",
    image: zomato,
  },
  {
    title: "PrepInstaPrime Web Clone",
    link: "https://kishoranushka.github.io/prepinsta-clone/",
    desc: "Created and deployed the clone of PrepInstaPrime home page made using HTML and Tailwind CSS and Javascript.",
    btnText: "Checkout",
    category: "Web Development",
    image: prep,
  },
  {
    title: "Uber Web Clone",
    link: "https://kishoranushka.github.io/uber-web-clone/",
    desc: "Created and deployed the clone of uber home page made using HTML and CSS.",
    btnText: "Checkout",
    category: "Web Development",
    image: uber,
  },
];