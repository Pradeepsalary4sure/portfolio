// import { motion } from "framer-motion";


// const AuroraBackground =()=>{

// return (

// <div className="
// fixed
// inset-0
// - z-10
// overflow-hidden
// pointer-events-none
// ">


// <motion.div

// animate={{
// x:[0,200,0],
// y:[0,-100,0],
// scale:[1,1.3,1]
// }}

// transition={{
// duration:15,
// repeat:Infinity,
// ease:"easeInOut"
// }}

// className="
// absolute
// top-[-200px]
// left-[-200px]
// w-[600px]
// h-[600px]
// rounded-full
// bg-cyan-500/20
// blur-[140px]
// "

// />



// <motion.div

// animate={{
// x:[0,-200,0],
// y:[0,150,0],
// scale:[1,1.4,1]
// }}

// transition={{
// duration:18,
// repeat:Infinity,
// ease:"easeInOut"
// }}

// className="
// absolute
// right-[-200px]
// bottom-[-200px]
// w-[700px]
// h-[700px]
// rounded-full
// bg-purple-500/20
// blur-[150px]
// "

// />


// </div>

// )

// }


// export default AuroraBackground;



import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const AuroraBackground = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Reduced animation on mobile
  const animationSettings = {
    desktop: {
      duration1: 15,
      duration2: 18,
      scale1: [1, 1.3, 1],
      scale2: [1, 1.4, 1],
    },
    mobile: {
      duration1: 20,
      duration2: 25,
      scale1: [1, 1.15, 1],
      scale2: [1, 1.2, 1],
    },
  };

  const settings = isMobile
    ? animationSettings.mobile
    : animationSettings.desktop;

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Left Aurora */}
      <motion.div
        animate={{
          x: isMobile ? [0, 80, 0] : [0, 200, 0],
          y: isMobile ? [0, -50, 0] : [0, -100, 0],
          scale: settings.scale1,
        }}
        transition={{
          duration: settings.duration1,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        top-[-200px]
        left-[-200px]
        w-[400px]
        sm:w-[500px]
        md:w-[600px]
        h-[400px]
        sm:h-[500px]
        md:h-[600px]
        rounded-full
        bg-cyan-500/15
        blur-[100px]
        sm:blur-[120px]
        md:blur-[140px]
        "
      />

      {/* Right Aurora */}
      <motion.div
        animate={{
          x: isMobile ? [0, -80, 0] : [0, -200, 0],
          y: isMobile ? [0, 80, 0] : [0, 150, 0],
          scale: settings.scale2,
        }}
        transition={{
          duration: settings.duration2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
        absolute
        right-[-200px]
        bottom-[-200px]
        w-[400px]
        sm:w-[500px]
        md:w-[700px]
        h-[400px]
        sm:h-[500px]
        md:h-[700px]
        rounded-full
        bg-purple-500/15
        blur-[100px]
        sm:blur-[120px]
        md:blur-[150px]
        "
      />
    </div>
  );
};

export default AuroraBackground;