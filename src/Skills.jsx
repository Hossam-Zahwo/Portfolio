
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Skills() {
  const skills = [
    { id: 1, image: "/public/html.png", name: "HTML" },
    { id: 2, image: "/public/css-removebg-preview.png", name: "CSS" },
    { id: 3, image: "/public/js.png", name: "JS" },
    { id: 4, image: "/public/bootstrp-removebg-preview.png", name: "Bootstrap" },
    { id: 5, image: "/public/tilwund-removebg-preview.png", name: "Tailwind" },
    { id: 6, image: "/public/node-removebg-preview.png", name: "Node js" },
    { id: 7, image: "/public/react-removebg-preview.png", name: "React js" },
    { id: 8, image: "/public/readux-removebg-preview.png", name: "Redux" },
    { id: 9, image: "/public/nextjs-light.png", name: "Next js" },
    { id: 10, image: "/public/git-removebg-preview.png", name: "Git" },
    { id: 11, image: "/public/github.png", name: "Github" },
    { id: 12, image: "/public/react-router.png", name: "React-router" },
    { id: 13, image: "/public/Npm-logo.svg.png", name: "NPM" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Skills</h1>
      <Slider {...settings}>
        {skills.map((skill) => (
          <div key={skill.id} className="flex flex-col justify-center items-center ">
            <img src={skill.image} alt={skill.name} className="h-20 w-20 object-contain mb-4" />
            <p className="text-lg  p-5 ">{skill.name}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Skills;
