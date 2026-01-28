"use client";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

export default function DarkModeToggle() {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        // Check localStorage and system preference
        const stored = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const shouldBeDark = stored === "dark" || (!stored && prefersDark);

        setIsDark(shouldBeDark);
        if (shouldBeDark) {
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newIsDark = !isDark;
        setIsDark(newIsDark);

        if (newIsDark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    return (
        <button
            onClick={toggleTheme}
            type="button"
            className="p-2.5 rounded-full bg-card border border-border hover:bg-muted/50 transition-all hover:scale-110 active:scale-95"
            aria-label="Toggle dark mode"
        >
            {isDark ? (
                <Sun className="w-5 h-5 text-foreground" />
            ) : (
                <Moon className="w-5 h-5 text-foreground" />
            )}
        </button>
    );
}
