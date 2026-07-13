import Container from "../../components/Common/Container";
import SectionTitle from "../../components/Common/SectionTitle";
import SkillCard from "../../components/cards/SkillCard";
import { techStack } from "../../data/techStack";

const Skills = () => {
  return (
    <section id="skills" className="py-32">
      <Container>

        <SectionTitle
          subtitle="Technologies"
          title="Skills & Expertise"
        />

        <div className="space-y-16 mt-20">

          {
techStack.map((category)=>(
<div key={category.category}>

<h3 className="
text-2xl
font-bold
mb-8
text-cyan-400
">
{category.category}
</h3>


<div className="
grid
sm:grid-cols-2
lg:grid-cols-3
gap-6
">

{
category.skills.map((skill)=>(
<SkillCard

key={skill.name}

icon={skill.icon}

name={skill.name}

color={skill.color}

/>
))
}

</div>


</div>
))
}      </div>

      </Container>
    </section>
  );
};

export default Skills;