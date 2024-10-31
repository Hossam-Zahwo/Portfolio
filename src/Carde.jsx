
import { FaGithub } from "react-icons/fa";

function Card({ title, description, link ,image,github}) {
  return (
    <div className="min-w-[60%] max-w-[75%] relative">
      <img
        src={image}
        alt="image"
        className="w-full h-[400px] object-cover rounded-xl"
      />
      <a href={github} className="absolute top-3 right-3 bg-black rounded-full p-2">
        <FaGithub className="text-white text-[1.4rem]" />
      </a>
      <div className="absolute bottom-0 right-0 left-0 bg-gradient-to-t from-[#000] to-[rgb(0,0,0,0.0001)] p-5 rounded-b-xl">
  
        <h1 className="text-[1.8rem] text-white font-bold leading-[34px] mt-4">{title}</h1>
        <p className="text-[1rem] text-white mt-2">{description}</p>
        <a href={link} className="text-blue-300 hover:underline mt-2 block">Visit Project</a>
      </div>
    </div>
  );
}

export default Card;
