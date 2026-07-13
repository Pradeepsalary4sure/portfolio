// import { useEffect } from "react";
// import { heroAnimation } from "../../animations/hero";

// import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";
// import { motion } from "framer-motion";
// import { TypeAnimation } from "react-type-animation";
// import { Link } from "react-scroll";

// import Container from "../../components/Common/Container";
// import Button from "../../components/ui/Button";
// import HeroCanvas from "../../components/three/HeroCanvas";
// import FloatingIcons from "../../components/three/FloatingIcons";

// const Hero = () => {
//   useEffect(() => {
//     heroAnimation();
//   }, []);

//   return (
//     <section
//       id="home"
//       className="relative min-h-screen overflow-hidden flex items-center"
//     >
//       {/* Background Blur */}

//       <div className="absolute left-[-200px] top-20 w-[500px] h-[500px] bg-cyan-500/20 blur-[180px]" />

//       <div className="absolute right-[-200px] bottom-20 w-[500px] h-[500px] bg-purple-500/20 blur-[180px]" />

//       <Container>
//         <div className="grid lg:grid-cols-2 gap-10 items-center min-h-screen">

//           {/* LEFT */}

//           <div className="z-20">

//             <motion.p
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: .6 }}
//               className="text-cyan-400 text-xl mb-4"
//             >
//               👋 Hello, I'm
//             </motion.p>

//             <motion.h1
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: .2 }}
//               className="
//               text-6xl
//               sm:text-7xl
//               lg:text-8xl
//               xl:text-[110px]
//               font-black
//               leading-none
//               bg-gradient-to-r
//               from-cyan-400
//               via-blue-500
//               to-purple-500
//               bg-clip-text
//               text-transparent
//               "
//             >
//               Pradeep
//             </motion.h1>

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: .4 }}
//               className="mt-8 text-3xl text-cyan-400 font-semibold h-12"
//             >
//               <TypeAnimation
//                 sequence={[
//                   "Frontend Developer",
//                   2000,
//                   "React Developer",
//                   2000,
//                   "Next.js Developer",
//                   2000,
//                   "TypeScript Developer",
//                   2000,
//                   "Google Apps Script Developer",
//                   2000,
//                   "Finance Dashboard Developer",
//                   2000,
//                   "CRM Developer",
//                   2000,
//                 ]}
//                 speed={50}
//                 repeat={Infinity}
//               />
//             </motion.div>

//             <motion.p
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: .6 }}
//               className="
//               mt-8
//               text-lg
//               leading-9
//               text-gray-400
//               max-w-xl
//               "
//             >
//               I build premium web applications using React,
//               Next.js, TypeScript, Tailwind CSS,
//               Google Apps Script, Excel Automation,
//               Finance CRM and Dashboard solutions with
//               beautiful UI and smooth animations.
//             </motion.p>

//             {/* Buttons */}

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: .8 }}
//               className="flex flex-wrap gap-5 mt-10"
//             >
//               <a
//                 href="/resume/Pradeep_Resume.pdf"
//                 download
//               >
//                 <Button primary>
//                   📄 Download Resume
//                 </Button>
//               </a>

//               <Link
//                 to="projects"
//                 smooth
//                 duration={700}
//                 offset={-70}
//               >
//                 <Button>
//                   🚀 View Projects
//                 </Button>
//               </Link>
//             </motion.div>

//             {/* Social */}

//             <motion.div
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ delay: 1 }}
//               className="flex gap-6 mt-10"
//             >
//               <motion.a
//                 whileHover={{ scale: 1.2, y: -5 }}
//                 href="https://github.com/Pradeepsalary4sure"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <FaGithub className="text-4xl hover:text-cyan-400 transition" />
//               </motion.a>

//               <motion.a
//                 whileHover={{ scale: 1.2, y: -5 }}
//                 href="https://www.linkedin.com/in/pradeep-525186251/"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <FaLinkedin className="text-4xl hover:text-cyan-400 transition" />
//               </motion.a>
//             </motion.div>

//           </div>

//           {/* RIGHT */}

//           <motion.div
//             initial={{ opacity: 0, x: 100 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: .8 }}
//             className="
//             relative
//             flex
//             justify-center
//             items-center
//             w-full
//             h-[700px]
//             "
//           >

//             {/* Main Glow */}

//             <div
//               className="
//               absolute
//               w-[550px]
//               h-[550px]
//               rounded-full
//               bg-cyan-500/20
//               blur-[170px]
//               "
//             />

//             {/* Purple Glow */}

//             <div
//               className="
//               absolute
//               right-0
//               top-20
//               w-[300px]
//               h-[300px]
//               rounded-full
//               bg-purple-500/20
//               blur-[120px]
//               "
//             />

//             <FloatingIcons />

//             <motion.div
//               animate={{
//                 y: [0, -20, 0],
//                 rotate: [0, 1.5, 0, -1.5, 0],
//               }}
//               transition={{
//                 duration: 6,
//                 repeat: Infinity,
//                 ease: "easeInOut",
//               }}
//               className="
//               relative
//               z-20
//               w-full
//               h-full
//               "
//             >
//               <HeroCanvas />
//             </motion.div>

//           </motion.div>

//         </div>
//       </Container>

//       {/* Scroll */}

//       <Link
//         to="about"
//         smooth
//         duration={700}
//       >
//         <motion.div
//           animate={{
//             y: [0, 15, 0],
//           }}
//           transition={{
//             repeat: Infinity,
//             duration: 1.6,
//           }}
//           className="
//           absolute
//           bottom-10
//           left-1/2
//           -translate-x-1/2
//           cursor-pointer
//           "
//         >
//           <FaArrowDown className="text-3xl text-cyan-400" />
//         </motion.div>
//       </Link>

//     </section>
//   );
// };

// export default Hero;




import { useEffect } from "react";
import { heroAnimation } from "../../animations/hero";

import {
  FaGithub,
  FaLinkedin,
  FaArrowDown
} from "react-icons/fa";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

import Container from "../../components/Common/Container";
import Button from "../../components/ui/Button";
import HeroCanvas from "../../components/three/HeroCanvas";
import FloatingIcons from "../../components/three/FloatingIcons";


const Hero = () => {


  useEffect(() => {
    heroAnimation();
  }, []);



  return (

    <section
      id="home"
      className="
      relative
      min-h-screen
      overflow-hidden
      flex
      items-center
      "
    >


      {/* Background Glow */}


      <motion.div
        animate={{
          scale:[1,1.2,1],
          opacity:[0.4,0.7,0.4]
        }}
        transition={{
          duration:8,
          repeat:Infinity
        }}
        className="
        absolute
        -left-40
        top-20
        w-[450px]
        h-[450px]
        rounded-full
        bg-cyan-500/20
        blur-[150px]
        "
      />


      <motion.div
        animate={{
          scale:[1,1.3,1],
        }}
        transition={{
          duration:10,
          repeat:Infinity
        }}
        className="
        absolute
        -right-40
        bottom-10
        w-[400px]
        h-[400px]
        rounded-full
        bg-purple-500/20
        blur-[150px]
        "
      />




      <Container>


        <div
          className="
          grid
          lg:grid-cols-2
          gap-6
          items-center
          min-h-[90vh]
          "
        >




          {/* LEFT CONTENT */}



          <div className="relative z-20">


            <motion.p

              initial={{
                opacity:0,
                y:30
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:.6
              }}

              className="
              text-cyan-400
              text-xl
              mb-5
              "
            >

              👋 Hello, I'm

            </motion.p>




            <motion.h1

              initial={{
                opacity:0,
                y:40
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:.2
              }}

              className="
              text-6xl
              sm:text-7xl
              lg:text-8xl
              xl:text-[105px]
              font-black
              leading-none
              bg-gradient-to-r
              from-cyan-400
              via-blue-500
              to-purple-500
              bg-clip-text
              text-transparent
              "
            >

              Pradeep

            </motion.h1>





            <motion.div

              initial={{
                opacity:0
              }}

              animate={{
                opacity:1
              }}

              transition={{
                delay:.4
              }}

              className="
              mt-7
              text-3xl
              font-semibold
              text-cyan-400
              h-12
              "
            >


              <TypeAnimation

                sequence={[
                  "Frontend Developer",
                  2000,

                  "React Developer",
                  2000,

                  "Next.js Developer",
                  2000,

                  "TypeScript Developer",
                  2000,

                  "Finance Dashboard Developer",
                  2000,

                  "CRM Developer",
                  2000
                ]}

                speed={50}

                repeat={Infinity}

              />


            </motion.div>






            <motion.p

              initial={{
                opacity:0,
                y:20
              }}

              animate={{
                opacity:1,
                y:0
              }}

              transition={{
                delay:.6
              }}

              className="
              mt-8
              max-w-xl
              text-lg
              leading-8
              text-gray-400
              "
            >

              I build premium web applications using React,
              Next.js, TypeScript, Tailwind CSS,
              Google Apps Script, Excel Automation,
              Finance CRM and Dashboard solutions with
              beautiful UI and smooth animations.

            </motion.p>





            <motion.div

              initial={{
                opacity:0
              }}

              animate={{
                opacity:1
              }}

              transition={{
                delay:.8
              }}

              className="
              flex
              gap-5
              mt-10
              flex-wrap
              "
            >



              <a
                  href="/resume/Pradeep_Resume.pdf"
                  download="Pradeep_Resume.pdf"
                  >
                    <Button primary>
                      📄 Download Resume
                  </Button>
                </a>



              <Link
              to="projects"
              smooth
              duration={700}
              offset={-70}
              >

              <Button>

                🚀 View Projects

              </Button>


              </Link>



            </motion.div>






            <div
            className="
            flex
            gap-6
            mt-10
            "
            >


            <motion.a

            href="https://github.com/Pradeepsalary4sure"

            target="_blank"

            whileHover={{
              scale:1.2,
              y:-5
            }}

            >

            <FaGithub
            className="
            text-4xl
            hover:text-cyan-400
            transition
            "
            />


            </motion.a>





            <motion.a

            href="https://www.linkedin.com/in/pradeep-525186251/"

            target="_blank"

            whileHover={{
              scale:1.2,
              y:-5
            }}

            >

            <FaLinkedin

            className="
            text-4xl
            hover:text-cyan-400
            transition
            "

            />


            </motion.a>



            </div>



          </div>







          {/* RIGHT 3D LAPTOP */}




          <motion.div

          initial={{
            opacity:0,
            x:80
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:.8
          }}

          className="
          relative
          flex
          justify-center
          items-center
          h-[520px]
          "

          >



          <div

          className="
          absolute
          w-[380px]
          h-[380px]
          rounded-full
          bg-cyan-500/20
          blur-[130px]
          "

          />




          <FloatingIcons/>




          <motion.div

          animate={{
            y:[0,-12,0]
          }}

          transition={{
            duration:5,
            repeat:Infinity,
            ease:"easeInOut"
          }}

          className="
          relative
          z-20
          w-[420px]
          h-[420px]
          "

          >

          <HeroCanvas/>


          </motion.div>



          </motion.div>




        </div>


      </Container>





      {/* DOWN ARROW */}



      <Link

      to="about"

      smooth

      duration={700}

      >


      <motion.div

      animate={{
        y:[0,12,0]
      }}

      transition={{
        duration:1.5,
        repeat:Infinity
      }}

      className="
      absolute
      bottom-8
      left-1/2
      -translate-x-1/2
      cursor-pointer
      "

      >

      <FaArrowDown
      className="
      text-3xl
      text-cyan-400
      "
      />


      </motion.div>


      </Link>




    </section>

  );

};


export default Hero;