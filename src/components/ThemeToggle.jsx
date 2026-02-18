import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils";
// This component toggles between light and dark themes using localStorage to remember the user's preference.

export const ThemeToggle = () => {
    // Default to dark mode unless user explicitly set light
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else if (storedTheme === 'light') {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');
        } else {
            // No preference stored — default to dark
            localStorage.setItem('theme', 'dark');
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        }
    }, []);

    const toggleTheme = () => {
        if(isDarkMode){
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light'); // Save the theme preference even after page reload
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark'); // Save the theme preference even after page reload
            setIsDarkMode(true); 
        }
    }

    return <button onClick={toggleTheme} 
            className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                          "focus:outline-hidden "
    )}>{
        isDarkMode ? (
            <Sun className="h-6 w-6 text-yellow-300"/> 
        ): (<Moon className="h-6 w-6 text-blue-900"/>)
        }</button>   
}