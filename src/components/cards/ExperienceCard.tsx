import { motion } from "framer-motion";
import type { IconType } from "react-icons";

interface Props {
  role: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
  icon: IconType;
  color: string;
  align?: "left" | "right";
}

const ExperienceCard = ({
  role,
  company,
  period,
  description,
  skills,
  icon: Icon,
  color,
  align = "left",
}: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: align === "left" ? -120 : 120,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        y: -10,
        scale: 1.03,
        rotate: align === "left" ? -1 : 1,
      }}
      className="
      relative
      overflow-hidden
      rounded-3xl
      border
      border-cyan-500/20
      bg-white/5
      backdrop-blur-xl
      p-8
      shadow-xl
      transition-all
      duration-500
      hover:border-cyan-400
      hover:shadow-[0_0_40px_rgba(34,211,238,.35)]
      "
    >
      {/* Glow */}
      <div
        className="absolute -right-10 -top-10 w-40 h-40 rounded-full blur-3xl opacity-20"
        style={{ background: color }}
      />

      {/* Header */}

      <div className="flex items-center gap-5">

        <motion.div
          whileHover={{
            rotate: 360,
            scale: 1.15,
          }}
          transition={{
            duration: .8,
          }}
          className="
          w-16
          h-16
          rounded-2xl
          flex
          items-center
          justify-center
          text-3xl
          shadow-lg
          "
          style={{
            background: `${color}20`,
            color,
          }}
        >
          <Icon />
        </motion.div>

        <div>

          <h3 className="text-2xl font-bold">
            {role}
          </h3>

          <p className="text-cyan-400 mt-1">
            {company}
          </p>

          <p className="text-gray-500 text-sm mt-1">
            {period}
          </p>

        </div>

      </div>

      {/* Description */}

      <p className="mt-6 text-gray-300 leading-8">
        {description}
      </p>

      {/* Skills */}

      <div className="flex flex-wrap gap-3 mt-8">

        {skills.map((skill) => (

          <motion.span
            key={skill}
            whileHover={{
              scale: 1.08,
            }}
            className="
            px-4
            py-2
            rounded-full
            text-sm
            font-medium
            border
            border-cyan-500/30
            bg-cyan-500/10
            text-cyan-300
            "
          >
            {skill}
          </motion.span>

        ))}

      </div>

      {/* Bottom Border */}

      <motion.div
        initial={{
          width: 0,
        }}
        whileInView={{
          width: "100%",
        }}
        transition={{
          duration: 1,
        }}
        className="h-[3px] mt-8 rounded-full"
        style={{
          background: color,
        }}
      />

    </motion.div>
  );
};

export default ExperienceCard;