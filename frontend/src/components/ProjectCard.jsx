import React from "react";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
  hover: {
    y: -10,
    boxShadow: "0px 20px 40px rgba(139,92,246,0.35)",
    transition: { duration: 0.3 },
  },
};

const ProjectCard = ({ title, description, image, tech = [], demo }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true }}
      className="
      bg-[var(--card)]
      border border-[var(--border)]
      rounded-2xl
      overflow-hidden
      cursor-pointer
      "
    >
      {/* image */}
      <img
        src={image}
        alt={title}
        className="w-full h-60 object-cover"
      />

      {/* content */}
      <div className="p-6">

        <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">
          {title}
        </h3>

        <p className="text-[var(--subtext)] mb-4">
          {description}
        </p>

        {/* tech tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tech.map((item, index) => (
            <span
              key={index}
              className="
              px-3 py-1
              text-sm
              bg-[var(--border)]
              text-[var(--text)]
              rounded-full
              "
            >
              {item}
            </span>
          ))}
        </div>

        {/* buttons */}
        <div className="flex gap-3">

          <a
            href={demo && demo !== "#" ? demo : "#"}
            target={demo && demo !== "#" ? "_blank" : "_self"}
            rel="noreferrer"
            className="
            flex-1
            text-center
            px-4 py-2
            bg-[var(--primary)]
            text-white
            rounded-lg
            font-medium
            hover:opacity-90
            transition
            "
          >
            View Demo
          </a>

        </div>

      </div>
    </motion.div>
  );
};

export default ProjectCard;