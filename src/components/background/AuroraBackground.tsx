import { motion } from "framer-motion";


const AuroraBackground =()=>{

return (

<div className="
fixed
inset-0
- z-10
overflow-hidden
pointer-events-none
">


<motion.div

animate={{
x:[0,200,0],
y:[0,-100,0],
scale:[1,1.3,1]
}}

transition={{
duration:15,
repeat:Infinity,
ease:"easeInOut"
}}

className="
absolute
top-[-200px]
left-[-200px]
w-[600px]
h-[600px]
rounded-full
bg-cyan-500/20
blur-[140px]
"

/>



<motion.div

animate={{
x:[0,-200,0],
y:[0,150,0],
scale:[1,1.4,1]
}}

transition={{
duration:18,
repeat:Infinity,
ease:"easeInOut"
}}

className="
absolute
right-[-200px]
bottom-[-200px]
w-[700px]
h-[700px]
rounded-full
bg-purple-500/20
blur-[150px]
"

/>


</div>

)

}


export default AuroraBackground;