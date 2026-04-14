import { forwardRef } from "react";
import Pill from "./Pill";
import { motion } from "framer-motion";

interface ExperienceData {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  tech: string[];
}

const techUrls: Record<string, string> = {
  React: "https://react.dev",
  TypeScript: "https://www.typescriptlang.org",
  "shadcn/ui": "https://ui.shadcn.com",
  NodeJS: "https://nodejs.org",
  "AWS Bedrock": "https://aws.amazon.com/bedrock/",
  Weaviate: "https://weaviate.io",
  Python: "https://www.python.org",
  "deck.gl": "https://deck.gl",
  AWS: "https://aws.amazon.com",
  Recharts: "https://recharts.org",
  Webpack: "https://webpack.js.org",
  PostgreSQL: "https://www.postgresql.org",
  Mapbox: "https://www.mapbox.com",
};

const experienceData: ExperienceData[] = [
  {
    title: "Lead Software Engineer",
    company: "MPAC",
    location: "Pickering, Ontario",
    period: "Jul 2024 - Present",
    responsibilities: [
      "Integral member of the team spearheading AI integration into the company.",
      "Collaborate with cross-functional teams to architect and implement new features that enhance user experience accross an internal AI as a service application.",
      "Collaborate, mentor and delegate various tasks to a team of developers.",
      "Lead development of scalable web applications with a focus on front-end technologies like React, TypeScript, and backend systems using AWS.",
    ],
    tech: [
      "React",
      "TypeScript",
      "shadcn/ui",
      "NodeJS",
      "AWS Bedrock",
      "Weaviate",
    ],
  },
  {
    title: "Senior Software Engineer",
    company: "MPAC",
    location: "Pickering, Ontario",
    period: "Jul 2022 - Jul 2024",
    responsibilities: [
      "Developed and maintained web applications using React and Python, focusing on creating reusable components and clean code.",
      "Responsible for development, support, and code review of integral micro front endcomponents from the ground up within municipalconnect.ca.",
      "Worked closely with UI/UX designers to deliver polished, user-friendly interfaces.",
      "Mentored a number of developers during their onboarding process.",
      "Created cross functional Ul design system used by other teams at the company.",
    ],
    tech: [
      "React",
      "TypeScript",
      "Python",
      "shadcn/ui",
      "deck.gl",
      "AWS",
      "Recharts",
    ],
  },
  {
    title: "Software Engineer",
    company: "MPAC",
    location: "Pickering, Ontario",
    period: "May 2019 -  Jul 2022",
    responsibilities: [
      "Full stack developer working with the data visualization team developing web and architecture solutions using React, Python, AWS, and PostgreSQL.",
      "Built a number of internal web applications focused on data visualization, one of which was used and praised by the president and directors of the company.",
      "Utilized ReactS, Python, PostgreSQL, Mapbox and various visualization libraries.",
    ],
    tech: [
      "React",
      "Webpack",
      "PostgreSQL",
      "Python",
      "AWS",
      "Mapbox",
      "Recharts",
    ],
  },
];

const Experience = forwardRef<HTMLDivElement>((_, ref) => {
  return (
    <motion.section
      id="experience"
      className="w-full py-20 lg:py-12"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="mb-4 font-['Lucida_Console',monospace] text-lg font-bold text-[#64ffda]"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
      >
        Experience
      </motion.h2>
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        {experienceData.map(
          (
            { title, company, location, period, responsibilities, tech },
            index,
          ) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <p className="text-sm text-[#8892b0]">
                {company} - {location}
              </p>
              <p className="text-sm text-[#8892b0]">{period}</p>
              <ul className="ml-5 mt-2 list-disc text-base text-[#ccd6f6]">
                {responsibilities.map((responsibility, index) => (
                  <li className="text-sm text-[#ccd6f6]" key={index}>
                    {responsibility}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2 pt-2">
                {tech.map((tech, index) => (
                  <Pill label={tech} href={techUrls[tech]} key={index} />
                ))}
              </div>
            </div>
          ),
        )}
      </motion.div>
    </motion.section>
  );
});

Experience.displayName = "Experience";

export default Experience;
