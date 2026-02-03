"use client";
import { Award, Code2, TrendingUp, Shield, Database, Smartphone } from "lucide-react";

interface Certification {
    title: string;
    issuer: string;
    year: string;
    icon: React.ReactNode;
    color: string;
}

const certifications: Certification[] = [
    {
        title: "Meta Certified Digital Marketing Associate",
        issuer: "Meta",
        year: "2025",
        icon: <TrendingUp className="w-6 h-6" />,
        color: "text-blue-500",
    },
    {
        title: "AWS Certified Cloud Practitioner",
        issuer: "Amazon Web Services",
        year: "2024",
        icon: <Database className="w-6 h-6" />,
        color: "text-orange-500",
    },
    {
        title: "Flutter Development Bootcamp",
        issuer: "Google Developers",
        year: "2024",
        icon: <Smartphone className="w-6 h-6" />,
        color: "text-cyan-500",
    },
    {
        title: "Full-Stack Web Development",
        issuer: "freeCodeCamp",
        year: "2023",
        icon: <Code2 className="w-6 h-6" />,
        color: "text-green-500",
    },
    {
        title: "Cybersecurity Fundamentals",
        issuer: "IBM",
        year: "2023",
        icon: <Shield className="w-6 h-6" />,
        color: "text-red-500",
    },
    {
        title: "Hackathon Finalist - Roamly",
        issuer: "Code-a-thon 2026",
        year: "2026",
        icon: <Award className="w-6 h-6" />,
        color: "text-yellow-500",
    },
];

export default function Certifications() {
    return (
        <section className="relative py-32 px-6 lg:px-24 bg-muted/30">
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <span className="text-sm text-primary font-medium tracking-[0.2em] uppercase">
                        Certifications & Achievements
                    </span>
                    <h2 className="font-serif text-4xl md:text-6xl font-bold mt-4 mb-6 text-balance">
                        Credentials That Matter
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl">
                        Continuous learning and recognized achievements in technology and digital marketing
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5"
                        >
                            <div className={`mb-4 p-3 w-fit bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors ${cert.color}`}>
                                {cert.icon}
                            </div>

                            <h3 className="text-lg font-semibold mb-2 text-foreground">
                                {cert.title}
                            </h3>

                            <div className="flex items-center justify-between text-sm text-muted-foreground">
                                <span>{cert.issuer}</span>
                                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                                    {cert.year}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
