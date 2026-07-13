import { motion } from "framer-motion";
import Container from "../../components/Common/Container";
import SectionTitle from "../../components/Common/SectionTitle";
import AboutImage from "../../components/background/about/AboutImage";
import AboutContent from "../../components/background/about/AboutContent";
import AboutStats from "../../components/background/about/AboutStats";
// import SkillBadge from "../../components/background/about/SkillBadge";

const About = () => {
  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden"
    >
      {/* Glow */}

      <div className="absolute left-0 top-20 w-72 h-72 bg-cyan-500/20 blur-[150px]" />
      <div className="absolute right-0 bottom-20 w-72 h-72 bg-purple-500/20 blur-[150px]" />

      <Container>

        <SectionTitle
          subtitle="Who I Am"
          title="About Me"
        />

        <div className="grid lg:grid-cols-2 gap-20 items-center mt-20">

          {/* LEFT */}

          <motion.div
            initial={{
              opacity: 0,
              x: -80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .8,
            }}
            viewport={{
              once: true,
            }}
          >
            <AboutImage />
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: .8,
            }}
            viewport={{
              once: true,
            }}
          >
            <AboutContent />

            <div className="mt-12">
              <AboutStats />
            </div>

          </motion.div>

        </div>

      </Container>

    </section>
  );
};

export default About;