import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export const Themetoggler = () => {
  const [isdarkMode, setIsdarkMode] = useState(false);

  useEffect(() => {
    const storedtheme = localStorage.getItem('theme');
    if(storedtheme === 'dark') {
        setIsdarkMode(true);
        document.documentElement.classList.add('dark');
    } else {
        setIsdarkMode(false);
        localStorage.setItem('theme','light');
    }
  },[]);

  const toggleTheme = () => {
    if (isdarkMode) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem('theme','light');
        setIsdarkMode(false);
      
    } else {
        document.documentElement.classList.add("dark");
        localStorage.setItem('theme','dark');
        setIsdarkMode(true);
    }
}

    return (
      <button onClick={toggleTheme} className="cursor-pointer">
        {isdarkMode ? (
          <Sun className="text-orange-300" size={24} />
        ) : (
          <Moon className="text-slate-700" size={24} />
        )}
      </button>
    );
};
