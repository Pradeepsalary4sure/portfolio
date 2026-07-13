import { motion } from "framer-motion";

interface Props {
  title: string;
}

const SkillBadge = ({ title }: Props) => {
  return (
    <motion.span
      whileHover={{
        scale: 1.08,
        y: -2,
      }}
      className="
        px-4
        py-2
        rounded-full
        border
        border-cyan-500/30
        bg-cyan-500/10
        text-cyan-300
        text-sm
        font-medium
        cursor-default
      "
    >
      {title}
    </motion.span>
  );
};

export default SkillBadge;