import React, { useState, useEffect } from "react";
import { FaBars, FaSun, FaMoon } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  // ✅ default = dark
  const [dark, setDark] = useState(true);

  // ✅ apply theme on load + change
  useEffect(() => {
    if (dark) {
      document.documentElement.classList.remove("dark"); // dark mode (your setup)
    } else {
      document.documentElement.classList.add("dark"); // light mode
    }
  }, [dark]);

  const toggleTheme = () => {
    setDark(prev => !prev);
  };

  const navLink =
    "relative text-[var(--text)]/80 font-semibold transition duration-300 hover:text-[var(--primary)] group";

  return (
    <nav className="fixed w-full z-50 bg-[var(--card)]/90 backdrop-blur-sm shadow-lg border-b border-[var(--border)]">
      <div className="container mx-auto flex items-center justify-between px-5 md:px-8 py-3 md:py-4">

        {/* Logo */}
        <a href="#home" className="text-2xl md:text-3xl font-bold text-[var(--text)] flex items-center gap-1 md:gap-2">
          Mohit <span className="text-[var(--primary)]">Dev</span>
          <span className="w-2 h-2 md:w-3 md:h-3 bg-[var(--primary)] rounded-full"></span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={navLink}>
              {item}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-[var(--primary)] transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3 md:gap-4">

          {/* ✅ Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex items-center justify-center w-9 h-9 md:w-10 md:h-10 rounded-full bg-[var(--primary)] text-white hover:opacity-90 transition text-lg md:text-xl"
            aria-label="Toggle Theme"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button>

          {/* Mobile Menu Icon */}
          <div className="md:hidden text-2xl cursor-pointer text-[var(--text)]">
            {showMenu ? (
              <FaXmark onClick={() => setShowMenu(false)} />
            ) : (
              <FaBars onClick={() => setShowMenu(true)} />
            )}
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {showMenu && (
        <div className="md:hidden fixed top-16 left-0 w-full h-screen bg-[var(--card)] flex flex-col items-center justify-center space-y-6 text-lg">
          {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setShowMenu(false)}
              className="text-[var(--text)] hover:text-[var(--primary)] transition"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;