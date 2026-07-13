import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

interface Props {
  title: string;
  description: string;
  image: string;
  tech: string[];
  live: string;
  github: string;
}

const ProjectCard = ({
  title,
  description,
  image,
  tech,
  live,
  github,
}: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -12,
        scale: 1.02,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
      }}
      className="
      group
      overflow-hidden
      rounded-3xl
      border
      border-cyan-500/20
      bg-white/5
      backdrop-blur-xl
      hover:border-cyan-400/50
      hover:shadow-[0_0_50px_rgba(34,211,238,.25)]
      duration-500
      "
    >
      {/* Image */}

      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={title}
          className="
          w-full
          h-64
          object-cover
          group-hover:scale-110
          transition-all
          duration-700
          "
        />

        {/* Overlay */}

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-[#020617]
          via-[#020617]/20
          to-transparent
          "
        />

        {/* Status */}

        <div className="absolute top-5 right-5">
          {live ? (
            <span
              className="
              px-4
              py-2
              rounded-full
              bg-green-500
              text-white
              text-xs
              font-semibold
              shadow-lg
              "
            >
              ● Live
            </span>
          ) : (
            <span
              className="
              px-4
              py-2
              rounded-full
              bg-yellow-500
              text-black
              text-xs
              font-semibold
              "
            >
              Coming Soon
            </span>
          )}
        </div>
      </div>

      {/* Content */}

      <div className="p-8">
        <h3
          className="
          text-3xl
          font-bold
          text-white
          "
        >
          {title}
        </h3>

        <p
          className="
          mt-5
          text-gray-400
          leading-8
          "
        >
          {description}
        </p>

        {/* Tech */}

        <div
          className="
          flex
          flex-wrap
          gap-3
          mt-8
          "
        >
          {tech.map((item) => (
            <span
              key={item}
              className="
              px-4
              py-2
              rounded-full
              bg-cyan-500/10
              border
              border-cyan-500/20
              text-cyan-300
              text-sm
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* Buttons */}

        <div
          className="
          flex
          items-center
          gap-6
          mt-8
          "
        >
          {live ? (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="
              flex
              items-center
              gap-2
              text-cyan-400
              hover:text-white
              transition
              "
            >
              <FaExternalLinkAlt />

              Live Demo
            </a>
          ) : (
            <span
              className="
              text-yellow-400
              font-medium
              "
            >
              🚧 Not Deployed
            </span>
          )}

          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="
            flex
            items-center
            gap-2
            text-cyan-400
            hover:text-white
            transition
            "
          >
            <FaGithub />

            GitHub
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;