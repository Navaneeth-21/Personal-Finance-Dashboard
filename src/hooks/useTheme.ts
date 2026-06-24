import { useState, useEffect } from "react";

type Theme = "light" | "dark";


function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem('theme');

        return storedTheme === "dark" ? "dark" : "light";
    });

    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        }
        else {
            root.classList.remove("dark");
        }

        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((previousTheme) => previousTheme === "light" ? "dark" : "light");
    };

    return {
        theme,
        toggleTheme
    };
}

export default useTheme;