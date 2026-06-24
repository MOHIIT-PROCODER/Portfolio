import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(true); // ✅ default dark

  // apply theme on FIRST render + updates
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggleTheme = () => {
    setDark(prev => !prev); // ✅ always reliable
  };

  return (
    <button onClick={toggleTheme}>
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}