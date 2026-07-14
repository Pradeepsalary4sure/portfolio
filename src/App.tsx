// import { useEffect, useState } from "react";
// import Navbar from "./components/layout/Navbar";
// import Loader from "./components/Loader/Loader";
// import AuroraBackground from "./components/background/AuroraBackground";
// import Skills from "./sections/Skills/Skills";
// import Projects from "./sections/Projects/Projects";
// import Experience from "./sections/Experience/Experience";
// import Contact from "./sections/Contact/Contact";
// import Cursor from "./components/Cursor/Cursor";
// // import MouseGlow from "./components/background/MouseGlow";
// import SEO from "./components/SEO/SEO";

// import Hero from "./sections/Hero/hero";
// import About from "./sections/About/about";
// import Footer from "./sections/Footer/Footer";
// import ParticlesBackground from "./components/background/ParticleBackground";



// function App() {
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 2500);

//     return () => clearTimeout(timer);
//   }, []);

//   if (loading) {
//     return <Loader />;
//   }

//   return (
//     <div className="bg-[#050816] text-white min-h-screen">
//       <ParticlesBackground />
//        <SEO />
//       {/* <MouseGlow /> */}
//       <Loader />
//       <AuroraBackground />
//       <Cursor />
//       <Navbar />
//       <Hero />
//       <About />
//       <Skills />
//       <Projects />
//       <Experience />
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;


import { useEffect, useState } from "react";
import Navbar from "./components/layout/Navbar";
import Loader from "./components/Loader/Loader";
import AuroraBackground from "./components/background/AuroraBackground";
import Skills from "./sections/Skills/Skills";
import Projects from "./sections/Projects/Projects";
import Experience from "./sections/Experience/Experience";
import Contact from "./sections/Contact/Contact";
import Cursor from "./components/Cursor/Cursor";
import SEO from "./components/SEO/SEO";
import Hero from "./sections/Hero/hero";
import About from "./sections/About/about";
import Footer from "./sections/Footer/Footer";
import ParticlesBackground from "./components/background/ParticleBackground";

function App() {
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Loader timer
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    // Optimize scrolling performance
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <div 
      className="bg-[#050816] text-white min-h-screen"
      style={{
        willChange: "scroll-position",
      }}
    >
      <ParticlesBackground />
      <SEO />
      <AuroraBackground />
      
      {/* Cursor only on desktop */}
      {!isMobile && <Cursor />}
      
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;