import { motion } from "framer-motion";
import {
  FaBriefcase,
  FaCode,
  FaLaptopCode,
  FaChartLine,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaBriefcase />,
    value: "1+",
    title: "Years Experience",
    color: "text-cyan-400",
  },
  {
    icon: <FaCode />,
    value: "20+",
    title: "Projects Completed",
    color: "text-blue-400",
  },
  {
    icon: <FaLaptopCode />,
    value: "15+",
    title: "Technologies",
    color: "text-purple-400",
  },
  {
    icon: <FaChartLine />,
    value: "100%",
    title: "Finance & Automation",
    color: "text-green-400",
  },
];

const AboutStats = () => {
  return (
    <div className="grid grid-cols-2 gap-6">

      {stats.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{
            delay: index * 0.15,
            duration: 0.6,
          }}
          whileHover={{
            y: -8,
            scale: 1.04,
          }}
          className="
            relative
            overflow-hidden
            rounded-2xl
            border
            border-cyan-500/20
            bg-white/5
            backdrop-blur-xl
            p-6
            text-center
            transition-all
            duration-500
            hover:border-cyan-400
            hover:shadow-[0_0_30px_rgba(34,211,238,.35)]
          "
        >
          <div
            className="
              absolute
              -top-10
              -right-10
              w-24
              h-24
              rounded-full
              bg-cyan-500/10
              blur-3xl
            "
          />

          <div className={`text-4xl mb-4 ${item.color}`}>
            {item.icon}
          </div>

          <h3 className="text-3xl font-bold">
            {item.value}
          </h3>

          <p className="mt-2 text-gray-400 text-sm">
            {item.title}
          </p>
        </motion.div>
      ))}

    </div>
  );
};

export default AboutStats;