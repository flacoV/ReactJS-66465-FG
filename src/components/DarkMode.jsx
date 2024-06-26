import React from 'react';
import { useEffect } from 'react';
import { MdSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";

const DarkMode = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "light");

    useEffect(() => {
        localStorage.setItem("theme", theme);
        const element = document.documentElement;
        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
        }
    }, [theme]);

    return (
        <div className='relative flex items-center'>
            {theme === "dark" && (
                <MdSunny
                    onClick={() => setTheme("light")}
                    className="w-18 cursor-pointer absolute right--1 z-10 transition-all duration-300"
                />
            )}
            {theme === "light" && (
                <IoIosMoon
                    onClick={() => setTheme("dark")}
                    className="w-18 cursor-pointer opacity-100 transition-opacity duration-300 absolute right--1"
                />
            )}
        </div>
    );
}

export default DarkMode;

