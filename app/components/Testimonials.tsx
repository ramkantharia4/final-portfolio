"use client";
import { Star, Quote } from "lucide-react";

interface Testimonial {
    name: string;
    role: string;
    company: string;
    content: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        name: "Priya Sharma",
        role: "Product Manager",
        company: "TechCorp India",
        content: "Ram delivered an exceptional mobile app that exceeded our expectations. His attention to detail and technical expertise made the entire process smooth and efficient.",
        rating: 5,
    },
    {
        name: "Arjun Patel",
        role: "Founder",
        company: "GreenFarms Co.",
        content: "Working with Ram on Krishifala was a game-changer for our agricultural business. The AI-powered features he implemented have helped thousands of farmers improve their yields.",
        rating: 5,
    },
    {
        name: "Sarah Johnson",
        role: "Marketing Director",
        company: "Global Ventures",
        content: "Ram's work with YODA Agency has transformed our digital presence. His strategic approach to Meta ads and web development delivered measurable results within weeks.",
        rating: 5,
    },
    {
        name: "Vikram Singh",
        role: "CTO",
        company: "SafeDrive Solutions",
        content: "The Rakshak app Ram developed is innovative and potentially life-saving. His ability to integrate complex AI features while maintaining a clean UX is impressive.",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="relative py-32 px-6 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20 text-center">
                    <span className="text-sm text-primary font-medium tracking-[0.2em] uppercase">
                        Testimonials
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl font-bold mt-4 mb-6 text-balance">
                        What People Say
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Feedback from clients and collaborators I've had the pleasure of working with
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                        >
                            <Quote className="w-10 h-10 text-primary/20 mb-6" />

                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                                ))}
                            </div>

                            <p className="text-muted-foreground leading-relaxed mb-6">
                                "{testimonial.content}"
                            </p>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                    <span className="text-lg font-semibold text-primary">
                                        {testimonial.name.charAt(0)}
                                    </span>
                                </div>
                                <div>
                                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                                    <div className="text-sm text-muted-foreground">
                                        {testimonial.role} at {testimonial.company}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
