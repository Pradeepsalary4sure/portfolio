// import { motion } from "framer-motion";
// import { useEffect, useState } from "react";


// const Cursor = () => {

//   const [position,setPosition] = useState({
//     x:0,
//     y:0
//   });


//   const [hover,setHover] = useState(false);



//   useEffect(()=>{


//     const moveCursor = (e:MouseEvent)=>{

//       setPosition({
//         x:e.clientX,
//         y:e.clientY
//       });

//     };


//     const addHover = ()=>setHover(true);
//     const removeHover = ()=>setHover(false);



//     window.addEventListener(
//       "mousemove",
//       moveCursor
//     );


//     const elements =
//     document.querySelectorAll(
//       "a,button"
//     );


//     elements.forEach((el)=>{

//       el.addEventListener(
//         "mouseenter",
//         addHover
//       );

//       el.addEventListener(
//         "mouseleave",
//         removeHover
//       );

//     });



//     return()=>{

//       window.removeEventListener(
//         "mousemove",
//         moveCursor
//       );

//     };


//   },[]);



//   return (

//     <motion.div

//       animate={{
//         x:position.x - 12,
//         y:position.y - 12,
//         scale:hover ? 2 : 1
//       }}

//       transition={{
//         type:"spring",
//         stiffness:500,
//         damping:30
//       }}


//       className="
//       fixed
//       top-0
//       left-0
//       w-6
//       h-6
//       rounded-full
//       bg-cyan-400
//       mix-blend-difference
//       pointer-events-none
//       z-[9999]
//       "

//     />

//   );

// };


// export default Cursor;




import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Cursor = () => {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [hover, setHover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile or touch
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || window.ontouchstart !== undefined);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (isMobile) return;

    const moveCursor = (e: MouseEvent) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    const addHover = () => setHover(true);
    const removeHover = () => setHover(false);

    window.addEventListener("mousemove", moveCursor);

    const elements = document.querySelectorAll("a,button");

    elements.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("resize", checkMobile);
      elements.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <motion.div
      animate={{
        x: position.x - 12,
        y: position.y - 12,
        scale: hover ? 2 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 600,
        damping: 25,
        mass: 0.5,
      }}
      className="
      fixed
      top-0
      left-0
      w-6
      h-6
      rounded-full
      bg-cyan-400
      mix-blend-difference
      pointer-events-none
      z-[9999]
      "
    />
  );
};

export default Cursor;