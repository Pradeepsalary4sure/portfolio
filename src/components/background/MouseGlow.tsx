import { useEffect,useState } from "react";


const MouseGlow=()=>{


const [pos,setPos]=useState({
x:0,
y:0
});


useEffect(()=>{

const move=(e:MouseEvent)=>{

setPos({
x:e.clientX,
y:e.clientY
})

}


window.addEventListener(
"mousemove",
move
);


return()=>window.removeEventListener(
"mousemove",
move
);


},[]);



return (

<div

className="
fixed
w-[300px]
h-[300px]
rounded-full
bg-cyan-400/10
blur-[100px]
pointer-events-none
z-0
"

style={{

left:pos.x-150,
top:pos.y-150

}}


/>

)


}


export default MouseGlow;