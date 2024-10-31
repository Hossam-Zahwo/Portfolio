import React from 'react';
import Card from './Carde';

const projects = [
  {
    title: "Shop",
    description: "E-commerce Books React and Tailwind Responsive Design Dark Mode",
    link: "https://shop-e-commrec.web.app/",
    image: "../public/871shots_so.png",
    github: "https://github.com/Hossam-Zahwo/E-Commerce-Shop",
  },
  {
    title: "CVMaster",
    description: " React and Tailwind for ceryat yor CV",
    link: "https://cvmaster-d03a2.web.app",
    image: "../public/638shots_so.png",
    github: "https://github.com/Hossam-Zahwo/CVMaster",
  },
  {
    title: "Homek",
    description: "project  HTML, CSS, JavaScript, Bootstrap Responsive ",
    link: "https://classy-cat-d53eb3.netlify.app/",
    image: "../public/512shots_so.png",
    github: "https://github.com/Hossam-Zahwo/Homek",
  },
  {
    title: "HBO MAX",
    description: "project  HTML, CSS, JavaScript, Bootstrap ",
    link: "https://hossam-zahwo.github.io/HBO/",
    image: "../public/420shots_so.png",
    github: "https://github.com/Hossam-Zahwo/HBO",
  },
  {
    title: "TO DO List",
    description: "HTML, CSS, JavaScript ",
    link: "https://visionary-toffee-efd22c.netlify.app/",
    image: "../public/333shots_so.png",
    github: "https://github.com/Hossam-Zahwo/Heelthy",
  },
  {
    title: "Agogo Mix",
    description: "HTML, CSS, JavaScript ",
    link: "https://hossam-zahwo.github.io/Agogo-Mix/",
    image: "../public/35_1x_shots_so.png",
    github: "https://github.com/Hossam-Zahwo/Agogo-Mix",
  },
];

const Portfolio = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8">Portfolio</h1>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        {projects.map((project, index) => (
          <div key={index} className="flex justify-center items-center">
            <Card
              title={project.title}
              description={project.description}
              link={project.link}
              image={project.image}
              github={project.github}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
