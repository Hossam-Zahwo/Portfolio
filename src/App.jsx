import React, { useState, useEffect } from 'react';
import SimpleNabar from "./Header";
import HeroSection from "./HeroSection";
import About from "./About";
import Experience from "./Experience";
import Portfolio from "./Portfolio";
import Skills from "./Skills";
import Footer from "./Footer";
import './App.css';
import { IoIosArrowUp } from "react-icons/io";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App({ getAllImages }) {
  const [showScroll, setShowScroll] = useState(false);
  const [images, setImages] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1200,
    });

    const fetchImages = async () => {
      const imgs = await getAllImages();
      setImages(imgs);
    };

    fetchImages();

    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 200) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 200) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);

    return () => {
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, [showScroll, getAllImages]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="App">
      <SimpleNabar />
      <section id="hero" data-aos="fade-in">
        <HeroSection />
      </section>
      <section id="about" data-aos="fade-up">
        <About />
      </section>
      <section id="experience" data-aos="fade-left">
        <Experience />
      </section>
      <section id="portfolio" data-aos="fade-right">
        <Portfolio />
      </section>
      <section id="skills" data-aos="fade-up">
        <Skills />
      </section>
      <Footer />
      <button
        className={`scroll-to-top ${showScroll ? 'show' : ''}`}
        onClick={scrollToTop}
      >
        <IoIosArrowUp />
      </button>
      <div>
      
        {images.map((url, index) => (
          <img key={index} src={url} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
}

export default App;
