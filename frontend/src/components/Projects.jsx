import React from "react";
import { motion } from "framer-motion";
import { projects } from "../assets/assets";
import ProjectCard from "./ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Projects = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      id="projects"
      className="py-20 bg-[var(--bg)]"
    >
      <div className="container mx-auto px-6">

        {/* heading */}
        <h2 className="text-3xl font-bold text-center mb-4 text-[var(--text)]">
          My <span className="text-[var(--primary)]">Projects</span>
        </h2>

        <p className="text-[var(--subtext)] text-center max-w-2xl mx-auto mb-16">
          A selection of my recent work
        </p>

        {/* cards carousel */}
        <div className="max-w-6xl mx-auto pb-10">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="pb-12 px-4"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index}>
                <ProjectCard {...project} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </motion.div>
  );
};

export default Projects;