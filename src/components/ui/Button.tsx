import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  primary?: boolean;
}

const Button = ({ children, primary }: ButtonProps) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      whileTap={{
        scale: 0.95,
      }}
      className={`
      px-8
      py-4
      rounded-xl
      font-semibold
      transition-all
      duration-300

      ${
        primary
          ? "bg-cyan-500 hover:bg-cyan-400 text-black shadow-[0_0_30px_rgba(6,182,212,.5)]"
          : "border border-cyan-500 hover:bg-cyan-500/20"
      }
      `}
    >
      {children}
    </motion.button>
  );
};

export default Button;