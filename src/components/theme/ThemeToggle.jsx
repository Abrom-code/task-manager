import { useEffect, useState } from "react";
import { CiDark, CiLight } from "react-icons/ci";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;

    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    if (localStorage.getItem("theme") === "dark") {
      setDarkMode(true);
    }
  }, []);

  return (
    <button
      onClick={() => setDarkMode((prev) => !prev)}
      className="p-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 transition-all"
    >
      {darkMode ? (
        <CiDark className="cursor-pointer" fontSize={25} />
      ) : (
        <CiLight className="cursor-pointer" fontSize={25} />
      )}
    </button>
  );
}
