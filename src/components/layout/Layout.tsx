import AuroraBackground from "../background/AuroraBackground";
import MouseGlow from "../background/MouseGlow";
import ParticleBackground from "../background/ParticleBackground";

const Layout = ({children}: {children: React.ReactNode}) => {

return (
<div className="relative min-h-screen bg-[#050816]">

    <AuroraBackground />

    <ParticleBackground />

    <MouseGlow />


    <div className="relative z-10">
        {children}
    </div>

</div>

)

}


export default Layout;