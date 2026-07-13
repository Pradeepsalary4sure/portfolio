// import { motion } from "framer-motion";

// const Loader = () => {
//   return (
//     <div className="fixed inset-0 z-[999] flex items-center justify-center bg-[#050816]">
//       <div className="flex flex-col items-center gap-6">
//         <motion.div
//           animate={{ rotate: 360 }}
//           transition={{
//             repeat: Infinity,
//             duration: 1.5,
//             ease: "linear",
//           }}
//           className="h-20 w-20 rounded-full border-4 border-cyan-400 border-t-transparent"
//         />

//         <motion.h2
//           initial={{ opacity: 0 }}
//           animate={{ opacity: [0.4, 1, 0.4] }}
//           transition={{
//             repeat: Infinity,
//             duration: 1.5,
//           }}
//           className="text-2xl font-bold tracking-[8px]"
//         >
//           PRADEEP
//         </motion.h2>
//       </div>
//     </div>
//   );
// };

// export default Loader;


import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const Loader = () => {

  const [progress,setProgress] = useState(0);


  useEffect(()=>{

    const timer = setInterval(()=>{

      setProgress((prev)=>{

        if(prev >= 100){
          clearInterval(timer);
          return 100;
        }

        return prev + 2;

      });

    },40);


    return ()=>clearInterval(timer);

  },[]);



  return (

    <motion.div

      initial={{opacity:1}}
      animate={{
        opacity: progress === 100 ? 0 : 1,
        pointerEvents:
        progress === 100 ? "none":"auto"
      }}

      transition={{
        duration:.8
      }}

      className="
      fixed
      inset-0
      z-[99999]
      flex
      flex-col
      items-center
      justify-center
      bg-[#050816]
      "

    >


      <motion.h1

      initial={{
        scale:.8,
        opacity:0
      }}

      animate={{
        scale:1,
        opacity:1
      }}

      className="
      text-7xl
      font-black
      bg-gradient-to-r
      from-cyan-400
      to-purple-500
      bg-clip-text
      text-transparent
      "

      >

        Pradeep

      </motion.h1>



      <div className="
      mt-10
      w-72
      h-2
      bg-white/10
      rounded-full
      overflow-hidden
      ">


        <motion.div

        animate={{
          width:`${progress}%`
        }}

        className="
        h-full
        bg-cyan-400
        "

        />


      </div>



      <p className="
      mt-5
      text-gray-400
      ">

        {progress}%

      </p>


    </motion.div>

  );

};


export default Loader;