import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  icon: ReactNode;
  title: string;
  value: string;
  description?: string;
}

const InfoCard = ({ icon, title, value, description }: Props) => {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.03,
      }}
      transition={{ type: "spring", stiffness: 250 }}
      className="
        relative
        overflow-hidden
        rounded-2xl
        border border-cyan-500/20
        bg-white/5
        backdrop-blur-xl
        p-6
        transition-all
        duration-300
        hover:border-cyan-400
        hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
      "
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />

      <div className="relative flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-3xl text-cyan-400">
          {icon}
        </div>

        <div>
          <h4 className="text-sm uppercase tracking-wider text-gray-400">
            {title}
          </h4>

          <p className="text-xl font-bold mt-1 text-white">
            {value}
          </p>

          {description && (
            <p className="text-sm text-gray-400 mt-2 leading-6">
              {description}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default InfoCard;