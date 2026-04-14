import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import github from "../assets/github.svg";
import profile from "../assets/headshot.jpg";
import { motion } from "framer-motion";

const Sidebar = () => {
  return (
    <section
      id="intro"
      className="flex w-full flex-col lg:h-screen lg:w-1/2 lg:justify-between lg:py-12 lg:pl-24 lg:pr-8 xl:py-28"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-col lg:min-h-0 lg:flex-1"
      >
        <h1 className="m-0 font-sans text-[clamp(30px,8vw,50px)] font-bold leading-none">
          Todor Vretenarov
        </h1>
        <p className="pt-1 font-['Lucida_Console',monospace] text-base text-[#64ffda]">
          Senior Fullstack Software Engineer
        </p>
        <p className="pt-8 text-[#ccd6f6]">
          Passionate about delivering high-quality solutions, from front-end UI
          to back-end infrastructure. Thrives on challenges and values clean
          code, innovation, and attention to detail.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 flex max-h-[50vh] justify-center lg:mt-16 lg:min-h-0 lg:max-h-none lg:flex-1"
        >
          <motion.img
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            src={profile}
            alt="Professional headshot of Todor Vretenarov"
            className="h-auto w-full rounded-lg object-cover lg:max-h-full"
            loading="eager"
          />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="flex gap-4 pt-5"
      >
        <motion.a
          className="cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          href="https://www.linkedin.com/in/vretenarovtodor/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="LinkedIn" className="h-6 w-6" />
        </motion.a>
        <motion.a
          className="cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          href="https://github.com/tpvretenarov"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="GitHub" className="h-6 w-6" />
        </motion.a>
        <motion.a
          className="cursor-pointer"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
          href="https://www.instagram.com/toddiey/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram" className="h-6 w-6" />
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Sidebar;
