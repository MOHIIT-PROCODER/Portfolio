import React from "react";
import { motion } from "framer-motion";
import { assets, aboutInfo } from "../assets/assets";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true }}
      id="about"
      className="py-20 bg-[var(--bg)]"
    >
      <div className="container mx-auto px-6">

        {/* heading */}
        <h2 className="text-3xl font-bold text-center mb-10 text-[var(--text)]">
          About <span className="text-[var(--primary)]">Me</span>
        </h2>

        <div className="flex flex-col md:flex-row items-center gap-12">

          {/* Image */}
          <div className="md:w-1/2 rounded-2xl overflow-hidden">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="w-full h-full object-cover rounded-2xl"
              src={assets.profileImg}
              alt="Profile"
            />
          </div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="md:w-1/2"
          >
            <div className="rounded-2xl p-6">

              <h3 className="text-2xl font-semibold mb-6 text-[var(--text)]">
                My Journey
              </h3>

              <p className="text-[var(--subtext)] mb-6">
                I'm a passionate full-stack developer who loves building modern web
                applications using React, Node.js, and new technologies.
              </p>

              <p className="text-[var(--subtext)] mb-10">
                I enjoy learning new things, creating UI designs, and solving
                real-world problems through code.
              </p>

              {/* Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.map((data, index) => (
                  <div
                    key={index}
                    className="
                    bg-[var(--card)]
                    border border-[var(--border)]
                    p-6
                    rounded-2xl
                    transition
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                    "
                  >
                    <div className="text-[var(--primary)] text-4xl mb-4">
                      <data.icon />
                    </div>

                    <h3 className="text-xl font-semibold mb-2 text-[var(--text)]">
                      {data.title}
                    </h3>

                    <p className="text-[var(--subtext)]">
                      {data.description}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </motion.div>
  );
};

export default About;