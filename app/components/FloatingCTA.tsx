"use client";
import { MessageSquare } from "lucide-react";

export default function FloatingCTA() {
    const scrollToContact = () => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <button
            onClick={scrollToContact}
            type="button"
            className="fixed bottom-24 right-8 px-6 py-4 bg-primary text-primary-foreground rounded-full shadow-lg hover:scale-110 active:scale-95 transition-all z-40 flex items-center gap-2 font-medium animate-pulse hover:animate-none"
            aria-label="Contact me"
        >
            <MessageSquare className="w-5 h-5" />
            <span className="hidden sm:inline">Let's Talk</span>
        </button>
    );
}
