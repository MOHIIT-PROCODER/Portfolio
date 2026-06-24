import React from "react";
import { motion } from "framer-motion";
import { skills } from "../assets/assets";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      id="skills"
      className="py-20 bg-[var(--bg)]"
    >
      <div className="container mx-auto px-6">

        {/* heading */}
        <h2 className="text-3xl font-bold text-center mb-4 text-[var(--text)]">
          My <span className="text-[var(--primary)]">Skills</span>
        </h2>

        <p className="text-[var(--subtext)] text-center max-w-2xl mx-auto mb-16">
          Technologies I work with to bring ideas to life
        </p>

        {/* cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="
              glass glass-hover
              rounded-2xl
              p-6
              transition-all
              duration-300
              relative overflow-hidden group
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              <div className="flex items-center mb-4">
                <skill.icon className="w-12 h-12 text-[var(--primary)] mr-4" />
                <h3 className="text-xl font-semibold text-[var(--text)]">
                  {skill.title}
                </h3>
              </div>

              <p className="text-[var(--subtext)] mb-4">
                {skill.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {skill.tags.map((tech, i) => (
                  <span
                    key={i}
                    className="
                    px-3 py-1
                    bg-[var(--border)]
                    rounded-full
                    text-sm
                    text-[var(--text)]
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </motion.div>
  );
};

export default Skills;