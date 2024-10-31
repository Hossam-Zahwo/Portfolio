function HeroSection() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 h-[500px] p-4">
      <div className='flex justify-center items-center flex-col text-center'>
        <h1 className="text-5xl font-bold mb-4 fade-in-out">Front-End Developer</h1>
        <div className="mb-8">
          <img src="../public/LOGO.png" alt="Logo" className="h-32 mx-auto   bounce" />
        </div>
      </div>
      <div className='flex justify-center items-center'>
      <div className='bg-slate-200 p-4 md:p-0 border-2 border-[#2ECC40] rounded-full h-[350px] flex justify-center items-center shadow-pulse'>
        <img src="../public/imge .png" alt="Hero Image" className="w-[300px] h-auto md:w-[300px]" />
      </div>
      </div>
    </div>
  );
}

export default HeroSection;
