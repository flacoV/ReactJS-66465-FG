import React from 'react';
import { MdSunny } from "react-icons/md";
import { IoIosMoon } from "react-icons/io";

const DarkMode = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem("theme") || "light");

    React.useEffect(() => {
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
            {theme === "light" && (
                <MdSunny
                    onClick={() => setTheme("dark")}
                    className="w-18 cursor-pointer absolute right--1 z-10 transition-all duration-300"
                />
            )}
            {theme === "dark" && (
                <IoIosMoon
                    onClick={() => setTheme("light")}
                    className="w-18 cursor-pointer opacity-100 transition-opacity duration-300 absolute right--1"
                />
            )}
        </div>
    );
}

export default DarkMode;



// import React from 'react'
// import { MdSunny } from "react-icons/md";
// import { IoIosMoon } from "react-icons/io";

// const DarkMode = () => {
//     const [theme, setTheme] = React.useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "light");

//     const element = document.documentElement;
//     console.log(Element);

//     React.useEffect(() => {
//         localStorage.setItem("theme", theme);
//         if (theme == "dark") {
//             element.classList.add("dark")
//             element.classList.add("dark");
//         } else {
//             element.classList.remove("light")
//             element.classList.remove("dark");
//         }
//     })

//     return (
//         <div className=' relative'>
//             <MdSunny
//                 onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
//                 src={<MdSunny />} alt="" className={`w-18 cursor-pointer absolute right-0 z-10 ${theme == "dark" ? "opacity-0" : "opacity-100"} transition-all duration-300`} />
//             <IoIosMoon
//                 onClick={() => setTheme(theme == "dark" ? "light" : "dark")}
//                 src={<IoIosMoon />} alt="" className={`w-18 cursor-pointer`} />
//         </div>
//     )
// }

// export default DarkMode
