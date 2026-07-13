import Container from "../../components/Common/Container";
import SectionTitle from "../../components/Common/SectionTitle";
import ProjectCard from "../../components/cards/ProjectCard";
import { projects } from "../../data/projects";


const Projects =()=>{


return(

<section
id="projects"
className="py-32"
>


<Container>


<SectionTitle

subtitle="My Work"

title="Featured Projects"

/>



<div
className="
grid
md:grid-cols-2
lg:grid-cols-3
gap-8
mt-20
"
>


{
projects.map((project)=>(
<ProjectCard
key={project.title}
{...project}
/>
))
}


</div>


</Container>


</section>

)

}


export default Projects;