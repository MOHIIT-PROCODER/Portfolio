import React from "react";
import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { TypeAnimation } from "react-type-animation";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative">

      {/* ===== HERO ===== */}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        id="home"
        className="
        min-h-screen
        flex
        items-center
        pt-20
        pb-16
        bg-[var(--bg)]
        "
      >
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">

          {/* LEFT */}
          <div className="md:w-1/2 mb-10 md:mb-0">

            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[var(--text)]">
              Hi, I'm <span className="text-[var(--primary)]">Mohit</span>
            </h1>

            <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-pink-500">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  1000,
                  "AI Engineer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h2>

            <p className="text-lg text-[var(--subtext)] mb-8">
              I build modern web applications and AI-powered solutions that are fast, scalable, and designed with users in mind.
            </p>

            <div className="flex items-center gap-4">

              <a
                href="#projects"
                className="px-6 py-3 bg-[var(--primary)] text-white rounded-lg font-medium hover:opacity-90 transition"
              >
                View Work
              </a>

              <a
                href="#contact"
                className="px-6 py-3 border border-[var(--primary)] text-[var(--text)] rounded-lg"
              >
                Contact Me
              </a>



            </div>

          </div>


          {/* RIGHT IMAGE */}
          <div className="md:w-1/2 flex justify-center">

            <div className="relative w-64 h-64 md:w-80 md:h-80">

              <div
                className="
                absolute
                inset-0
                rounded-full
                bg-gradient-to-r
                from-[var(--primary)]
                to-pink-500
                blur-2xl
                opacity-40
                "
              ></div>

              <motion.img
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover z-10"
                src={assets.profileImg}
                alt="Profile"
              />

            </div>

          </div>

        </div>
      </motion.div>

    </div>
  );
};

export default Hero;