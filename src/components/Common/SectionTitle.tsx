import { motion } from "framer-motion";

interface Props {
  title: string;
  subtitle: string;
}

const SectionTitle = ({ title, subtitle }: Props) => {
  return (
    <div className="text-center mb-20">

      <motion.p
        initial={{ opacity:0,y:20 }}
        whileInView={{ opacity:1,y:0 }}
        viewport={{ once:true }}
        className="text-cyan-400 uppercase tracking-[5px]"
      >
        {subtitle}
      </motion.p>

      <motion.h2
        initial={{ opacity:0,y:20 }}
        whileInView={{ opacity:1,y:0 }}
        viewport={{ once:true }}
        transition={{ delay:.2 }}
        className="text-5xl font-bold mt-4"
      >
        {title}
      </motion.h2>

    </div>
  );
};

export default SectionTitle;