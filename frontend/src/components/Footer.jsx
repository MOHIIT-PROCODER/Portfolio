import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[var(--card)] border-t border-[var(--border)] pt-16 pb-8">

      <div className="container mx-auto px-6">

        {/* TOP */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

          {/* Logo */}
          <div>
            <h2 className="text-xl font-bold text-[var(--text)] mb-4">
              Mohit <span className="text-[var(--primary)]">Dev</span>
            </h2>

            <p className="text-[var(--subtext)] mb-4">
              Building modern web applications with clean code and creative design.
            </p>

            <div className="flex gap-4 text-[var(--primary)] text-xl">
              <a href="https://github.com/MOHIIT-PROCODER" target="_blank" rel="noreferrer" className="hover:text-[var(--text)] transition"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/mohit-kumar-mohanta-969347358" target="_blank" rel="noreferrer" className="hover:text-[var(--text)] transition"><FaLinkedin /></a>
              <a href="https://x.com/mohit65_" target="_blank" rel="noreferrer" className="hover:text-[var(--text)] transition"><FaTwitter /></a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-[var(--text)] font-semibold mb-4">
              Navigation
            </h3>

            <ul className="space-y-2 text-[var(--subtext)]">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Tech */}
          <div>
            <h3 className="text-[var(--text)] font-semibold mb-4">
              Technologies
            </h3>

            <ul className="space-y-2 text-[var(--subtext)]">
              <li>React</li>
              <li>Node.js</li>
              <li>MongoDB</li>
              <li>Tailwind CSS</li>
              <li>JavaScript</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-[var(--border)] mt-10 pt-6 flex flex-col md:flex-row justify-between text-[var(--subtext)] text-sm">

         <p>
  © 2026 Mohit Kumar Mohanta. Learning, building, and growing every day.
</p>

<p>
  Self-taught Developer • Future Full Stack Engineer
</p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;