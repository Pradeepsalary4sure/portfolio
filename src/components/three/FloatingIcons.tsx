// import { motion } from "framer-motion";
// import {
//   FaReact,
//   FaNodeJs,
//   FaGitAlt,
//   FaFileExcel,
// } from "react-icons/fa";

// import {
//   SiNextdotjs,
//   SiTypescript,
//   SiJavascript,
//   SiTailwindcss,
//   SiMongodb,
//   SiGoogle,
// } from "react-icons/si";

// const icons = [
//   {
//     icon: FaReact,
//     color: "#61DAFB",
//     top: "8%",
//     left: "42%",
//     duration: 5,
//   },
//   {
//     icon: SiNextdotjs,
//     color: "#ffffff",
//     top: "22%",
//     left: "82%",
//     duration: 6,
//   },
//   {
//     icon: SiTypescript,
//     color: "#3178C6",
//     top: "60%",
//     left: "82%",
//     duration: 4.5,
//   },
//   {
//     icon: SiJavascript,
//     color: "#F7DF1E",
//     top: "78%",
//     left: "55%",
//     duration: 5.5,
//   },
//   {
//     icon: FaNodeJs,
//     color: "#68A063",
//     top: "70%",
//     left: "15%",
//     duration: 4,
//   },
//   {
//     icon: SiTailwindcss,
//     color: "#38BDF8",
//     top: "25%",
//     left: "12%",
//     duration: 6,
//   },
//   {
//     icon: SiGoogle,
//     color: "#34A853",
//     top: "50%",
//     left: "5%",
//     duration: 5,
//   },
//   {
//     icon: FaFileExcel,
//     color: "#1D6F42",
//     top: "10%",
//     left: "70%",
//     duration: 5,
//   },
//   {
//     icon: SiMongodb,
//     color: "#47A248",
//     top: "85%",
//     left: "82%",
//     duration: 6,
//   },
//   {
//     icon: FaGitAlt,
//     color: "#F05032",
//     top: "82%",
//     left: "30%",
//     duration: 5,
//   },
// ];

// const FloatingIcons = () => {
//   return (
//     <div className="absolute inset-0 pointer-events-none">
//       {icons.map((item, index) => {
//         const Icon = item.icon;

//         return (
//           <motion.div
//             key={index}
//             className="absolute text-5xl drop-shadow-2xl"
//             style={{
//               top: item.top,
//               left: item.left,
//               color: item.color,
//             }}
//             animate={{
//               y: [0, -25, 0],
//               rotate: [0, 12, -12, 0],
//               scale: [1, 1.15, 1],
//             }}
//             transition={{
//               duration: item.duration,
//               repeat: Infinity,
//               ease: "easeInOut",
//             }}
//           >
//             <Icon />
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// export default FloatingIcons;




import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiGoogle
} from "react-icons/si";

import {
  FaFileExcel
} from "react-icons/fa";

const icons = [

{
 icon:FaReact,
 color:"#61DAFB",
 top:"8%",
 left:"42%",
 duration:5
},

{
 icon:SiNextdotjs,
 color:"#ffffff",
 top:"22%",
 left:"82%",
 duration:6
},

{
 icon:SiTypescript,
 color:"#3178C6",
 top:"60%",
 left:"82%",
 duration:4.5
},

{
 icon:SiJavascript,
 color:"#F7DF1E",
 top:"78%",
 left:"55%",
 duration:5
},

{
 icon:FaNodeJs,
 color:"#68A063",
 top:"70%",
 left:"15%",
 duration:4
},

{
 icon:SiTailwindcss,
 color:"#38BDF8",
 top:"25%",
 left:"12%",
 duration:6
},

{
 icon:SiGoogle,
 color:"#4285F4",
 top:"50%",
 left:"5%",
 duration:5
},


{
 icon:FaFileExcel,
 color:"#1D6F42",
 top:"10%",
 left:"70%",
 duration:5
},


{
 icon:SiMongodb,
 color:"#47A248",
 top:"85%",
 left:"82%",
 duration:6
},


{
 icon:FaGitAlt,
 color:"#F05032",
 top:"82%",
 left:"30%",
 duration:5
}

];



const FloatingIcons =()=>{


return (

<div className="absolute inset-0 pointer-events-none">


{
icons.map((item,index)=>{


const Icon=item.icon;


return (

<motion.div

key={index}

className="
absolute
text-5xl
drop-shadow-xl
"

style={{

top:item.top,

left:item.left,

color:item.color

}}


animate={{

y:[0,-25,0],

rotate:[0,10,-10,0],

scale:[1,1.15,1]

}}


transition={{

duration:item.duration,

repeat:Infinity,

ease:"easeInOut"

}}


>


<Icon/>

</motion.div>

)

})

}



</div>


)

}


export default FloatingIcons;