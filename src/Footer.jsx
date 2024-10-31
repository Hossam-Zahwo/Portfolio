

function Footer() {
  return (
    <div className="mx-auto p-14 bg-black text-center">
      <div className="grid grid-cols-1 md:grid-cols-4 text-white gap-5">
        <div>
          <a href="mailto:hossamzahwo31@gmail.com" className="hover:text-[#2ECC40] transition-all duration-300">Email</a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/hossam-zahwo-283667216/" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ECC40] transition-all duration-300">LinkedIn</a>
        </div>
        <div>
          <a href="https://github.com/Hossam-Zahwo" target="_blank" rel="noopener noreferrer" className="hover:text-[#2ECC40] transition-all duration-300">Github</a>
        </div>
        <div>
          <a href="tel:+201100090629" className="hover:text-[#2ECC40] transition-all duration-300">Phone</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
