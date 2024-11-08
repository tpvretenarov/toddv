import { motion } from "framer-motion";
import { forwardRef } from "react";

const About = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <motion.section
      id="about"
      className="w-full pt-16 lg:pt-28"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="mb-4 block font-['Lucida_Console',monospace] text-lg font-bold text-[#64ffda] lg:hidden"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        About
      </motion.h2>
      <motion.p
        className="text-[#ccd6f6]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Hey, I'm Todd, a senior software engineer with a passion for creating
        seamless and scalable web applications. I focus on front-end development
        while making sure the backend is just as solid. Whether it's polishing
        the UI for a smooth user experience or fine-tuning cloud infrastructure,
        I'm all about taking on challenging problems and finding creative
        solutions that make an impact.
      </motion.p>
    </motion.section>
  );
});

export default About;
