// import { motion } from "framer-motion";

// interface Props {
//   icon: any;
//   name: string;
// }

// const SkillCard = ({ icon: Icon, name }: Props) => {
//   return (
//     <motion.div
//       whileHover={{
//         y: -8,
//         scale: 1.05,
//       }}
//       className="
//       bg-white/5
//       border border-cyan-500/20
//       backdrop-blur-xl
//       rounded-2xl
//       p-6
//       flex
//       flex-col
//       items-center
//       gap-4
//       hover:border-cyan-400
//       transition-all
//       duration-300
//       hover:shadow-[0_0_25px_rgba(34,211,238,.25)]
//       "
//     >
//       <Icon className="text-5xl text-cyan-400" />

//       <h3 className="font-semibold">
//         {name}
//       </h3>
//     </motion.div>
//   );
// };

// export default SkillCard;


import { motion } from "framer-motion";


interface SkillCardProps {
  name:string;
  icon:any;
  color:string;
}


const SkillCard = ({
  name,
  icon:Icon,
  color
}:SkillCardProps)=>{


return (

<motion.div

whileHover={{
 y:-10,
 scale:1.05
}}

transition={{
 duration:.3
}}

className="
p-6
rounded-2xl
bg-white/5
border
border-white/10
backdrop-blur-xl
flex
flex-col
items-center
gap-4
"

>


<div

style={{
color:color
}}

className="
text-5xl
"

>

<Icon/>

</div>



<h3

className="
text-lg
font-semibold
text-gray-200
"

>

{name}

</h3>



</motion.div>

)

}


export default SkillCard;