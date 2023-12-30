'use client';
import { useEffect, useState } from 'react';
import { FaLightbulb } from 'react-icons/fa';

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const theme = localStorage.getItem("theme")
    if (theme === "dark") setDarkMode(true)
  }, [])

  useEffect(() => {
    if (darkMode) {
        document.documentElement.classList.add('dark')
        localStorage.setItem("theme", "dark")
    } else {
        document.documentElement.classList.remove('dark')
        localStorage.setItem("theme", "light")
    }
  }, [darkMode]);

  return (
    <div className="cursor-pointer rounded-md" onClick={() => setDarkMode(!darkMode)}>
        <FaLightbulb size={12} color="white" className="mr-2" />
    </div>
  );
};

export default ThemeToggle;
