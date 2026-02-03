"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Github,
  Linkedin,
  Mail,
  Instagram,
  ExternalLink,
  Code2,
  Smartphone,
  Database,
  Layout,
  Cpu,
  MessageSquare,
  ArrowRight,
  ArrowUpRight,
  Sparkles,
  Star,
  Award,
  Target,
  Megaphone,
  TrendingUp,
  Users,
} from "lucide-react";
import DarkModeToggle from "./components/DarkModeToggle";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Certifications from "./components/Certifications";
import ScrollToTop from "./components/ScrollToTop";
import FloatingCTA from "./components/FloatingCTA";

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("technical");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("about");
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleScroll = () => {
      const scrolled = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrolled / maxScroll) * 100);

      // Update active section based on scroll position
      const sections = ["about", "experience", "work", "skills", "contact"];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/20 selection:text-foreground">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 right-0 h-0.5 bg-primary z-50 origin-left"
        style={{ transform: `scaleX(${scrollProgress / 100})` }}
      />

      {/* Subtle Cursor Glow */}
      <div
        className="fixed w-[600px] h-[600px] rounded-full pointer-events-none z-0 opacity-30 blur-3xl transition-all duration-700"
        style={{
          background:
            "radial-gradient(circle, oklch(0.75 0.1 75 / 0.15), transparent 70%)",
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
        }}
      />

      {/* Elegant Background Pattern */}
      <div className="fixed inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, oklch(0.4 0.05 50) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
          <div className="font-serif text-2xl font-bold text-foreground tracking-tight">
            RK<span className="text-primary">.</span>
          </div>
          <div className="hidden md:flex gap-10 items-center">
            {[
              { id: "about", label: "About" },
              { id: "experience", label: "Experience" },
              { id: "work", label: "Work" },
              { id: "skills", label: "Skills" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm tracking-wide transition-all duration-300 ${activeSection === item.id
                  ? "text-foreground font-medium"
                  : "text-muted-foreground hover:text-foreground"
                  }`}
              >
                {item.label}
              </a>
            ))}
            <DarkModeToggle />
            <a
              href="#contact"
              className="px-6 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        ref={heroRef}
        id="about"
        className="relative min-h-screen flex items-center px-6 lg:px-24 pt-24"
      >
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-foreground/70 font-medium">
                Available for New Projects
              </span>
            </div>

            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-[0.95] tracking-tight text-balance">
              Ram
              <br />
              <span className="text-primary">Kantharia</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Full-Stack Developer crafting{" "}
              <span className="text-foreground font-medium">
                extraordinary digital experiences
              </span>{" "}
              with precision, performance, and pixel-perfect design.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a
                href="#work"
                className="group px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95 flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-border rounded-full font-medium hover:bg-muted/50 transition-all hover:scale-105 active:scale-95"
              >
                Get In Touch
              </a>
            </div>

            <div className="flex gap-4">
              <SocialIcon
                href="https://www.linkedin.com/in/ram-kantharia-940209389?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                icon={<Linkedin size={18} />}
              />
              <SocialIcon href="https://github.com/ramkantharia4" icon={<Github size={18} />} />
              <SocialIcon
                href="https://www.instagram.com/ramisalwayskidding?igsh=ejZheDhzOHlrYXVt"
                icon={<Instagram size={18} />}
              />
              <SocialIcon href="mailto:ramkantharia4@gmail.com" icon={<Mail size={18} />} />
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden border border-border/50 relative group">
              <img
                src="/images/ram-photo.jpeg"
                alt="Ram Kantharia"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay gradient for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
              {/* Decorative elements */}
              <div className="absolute top-8 right-8 w-20 h-20 border border-primary/30 rounded-full" />
              <div className="absolute bottom-12 left-12 w-32 h-32 border border-primary/20 rounded-full" />
            </div>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs text-muted-foreground uppercase tracking-[0.2em]">

          </span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground/30 to-transparent" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 px-6 border-y border-border/50">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard number="15+" label="Projects Delivered" />
          <StatCard number="2+" label="Years Experience" />
          <StatCard number="10+" label="Technologies" />
          <StatCard number="100%" label="Client Satisfaction" />
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="relative py-32 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20">
            <span className="text-sm text-primary font-medium tracking-[0.2em] uppercase">
              Experience
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mt-4 mb-6 text-balance">
              Professional Journey
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Building impactful solutions across diverse industries
            </p>
          </div>

          <div className="space-y-0">
            <ExperienceCard
              period="2026 — Present"
              role="Full Stack Developer"
              company="Roamly"
              companyUrl="/projects/roamly"
              description="An intelligent travel companion that adapts to reality, unifying planning with dynamic itineraries, smart group collaboration, intelligent expense tracking, and real-time adjustments that respond to actual travel behavior."
              skills={["Flutter", "Firebase", "Node.js", "MongoDB", "WebSockets"]}
              icon={<Megaphone className="w-5 h-5" />}
            />

            <ExperienceCard
              period="2025"
              role="Founder & CEO"
              company="YODA"
              companyUrl="https://yodadayo.vercel.app"
              description="Leading a full-service marketing agency that helps businesses grow their online presence through custom website development, Meta advertising campaigns, social media management, and comprehensive digital marketing strategies."
              skills={[
                "Meta Ads",
                "Web Development",
                "Social Media",
                "Brand Strategy",
                "SEO",
                "Analytics",
              ]}
              icon={<Megaphone className="w-5 h-5" />}
            />

            <ExperienceCard
              period="2024 — 2025"
              role="App Developer"
              company="Rakshak"
              companyUrl="/projects/rakshak"
              description="An App which helps a person during an accident, allows them to share their location to emergency contacts, police stations, firestation, hospitals, also detecting automatically whether the person is in an accident or are they sleeping or not with the help of AI"
              skills={["Flutter", "Python", "Node.js", "MongoDB"]}
              icon={<Database className="w-5 h-5" />}
            />

            <ExperienceCard
              period="2023 — 2024"
              role="Full-Stack Developer"
              company="Krishifala"
              companyUrl="/projects/krishifala"
              description="Built an AI-powered agricultural platform empowering Indian farmers with crop health analysis, real-time market insights, and predictive analytics using React Native and Node.js."
              skills={[
                "Flutter",
                "Node.js",
                "MongoDB",
                "Python",
              ]}
              icon={<Code2 className="w-5 h-5" />}
            />
            <ExperienceCard
              period="2022 — 2023"
              role="Data Science Intern"
              company="AskItall"
              companyUrl="/projects/askitall"
              description="Developed an intelligent data analysis platform transforming datasets into actionable insights through automated summarization, visual analytics, and comprehensive metric dashboards."
              skills={["Python", "Data Science", "NLP", "Visualization", "SQL"]}
              icon={<Database className="w-5 h-5" />}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <Testimonials />

      {/* Services Section */}
      <section id="work" className="relative py-32 px-6 lg:px-24 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-sm text-primary font-medium tracking-[0.2em] uppercase">
              What I Do
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mt-4 mb-6 text-balance">
              Expertise That Delivers
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Transforming complex challenges into elegant solutions through
              cutting-edge technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard
              icon={<Smartphone className="text-primary" size={28} />}
              title="Mobile Development"
              desc="Cross-platform apps with native performance using Flutter & React Native"
            />
            <ServiceCard
              icon={<Layout className="text-primary" size={28} />}
              title="Web Development"
              desc="Scalable, lightning-fast web applications with Next.js and modern frameworks"
            />
            <ServiceCard
              icon={<Code2 className="text-primary" size={28} />}
              title="Frontend Engineering"
              desc="Immersive interfaces with advanced animations and flawless responsiveness"
            />
            <ServiceCard
              icon={<Cpu className="text-primary" size={28} />}
              title="Backend Architecture"
              desc="Robust server-side systems with secure APIs and optimal performance"
            />
            <ServiceCard
              icon={<Database className="text-primary" size={28} />}
              title="Database Design"
              desc="Efficient data structures with MongoDB, MySQL, and PostgreSQL"
            />
            <ServiceCard
              icon={<TrendingUp className="text-primary" size={28} />}
              title="Digital Marketing"
              desc="Strategic Meta ads, SEO optimization, and social media growth solutions"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-32 px-6 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-right">
            <span className="text-sm text-primary font-medium tracking-[0.2em] uppercase">
              Featured Work
            </span>
            <h2 className="font-serif text-4xl md:text-6xl font-bold mt-4 mb-6 text-balance">
              Projects That Matter
            </h2>
          </div>

          <div className="space-y-24">
            <ProjectShowcase
              number="01"
              title="Krishifala"
              subtitle="AgriTech Revolution"
              tags={["React Native", "Computer Vision", "Node.js", "MongoDB"]}
              description="A groundbreaking platform empowering Indian farmers with AI-powered crop health analysis, real-time market insights, and predictive analytics to maximize yield and reduce losses."
              features={[
                "AI-powered disease detection",
                "Real-time market prices",
                "Weather forecasting",
                "Multilingual support",
              ]}
              image="/images/project-krishifala.jpg"
              projectUrl="/projects/krishifala"
              align="left"
            />

            <ProjectShowcase
              number="02"
              title="AskItall"
              subtitle="Data Intelligence Platform"
              tags={["Python", "Data Science", "NLP", "Visualization"]}
              description="An intelligent data analysis platform that transforms massive datasets into actionable insights through automated summarization, visual word clouds, and comprehensive metric dashboards."
              features={[
                "Automated data summarization",
                "Interactive visualizations",
                "Custom report generation",
                "Advanced analytics",
              ]}
              image="/images/project-askitall.jpg"
              projectUrl="/projects/askitall"
              align="right"
            />

            <ProjectShowcase
              number="03"
              title="YODA Agency"
              subtitle="Digital Marketing Solutions"
              tags={["Next.js", "Meta Ads", "Analytics", "Brand Strategy"]}
              description="A comprehensive marketing agency platform delivering end-to-end digital solutions including custom websites, paid advertising campaigns, and social media management for growing businesses."
              features={[
                "Custom web development",
                "Meta advertising campaigns",
                "Social media management",
                "Performance analytics",
              ]}
              image="/images/project-yoda.jpg"
              projectUrl="https://yodadayo.vercel.app"
              align="left"
            />

            <ProjectShowcase
              number="04"
              title="Rakshak"
              subtitle="Accident Detection & Safety"
              tags={["Flutter", "Python", "Node.js", "MongoDB"]}
              description="A Flutter-based mobile application designed to prevent road accidents by actively monitoring driver alertness and driving behavior in real-time with instant alert systems."
              features={[
                "Alert System",
                "Sleep Detection",
                "Monitoring of Vehicles",
                "Real Time Reporting",
              ]}
              image="/images/project-rakshak.jpg"
              projectUrl="/projects/rakshak"
              align="right"
            />

            <ProjectShowcase
              number="05"
              title="Roamly"
              subtitle="Travel smart"
              tags={["Flutter", "Python", "Node.js", "Firebase"]}
              description="An intelligent travel companion that adapts to reality, unifies planning, and makes group trips effortless with dynamic itineraries that adjust to your actual travel behavior"
              features={[
                "Reality-aware itineraries",
                "Smart group collaboration",
                "Intelligent expense tracking",
                "Memory timeline creation"
              ]}
              image="/images/roamly_cp.png"
              projectUrl="/projects/roamly"
              align="left"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="relative py-32 px-6 lg:px-24 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
            <div>
              <span className="text-sm text-primary font-medium tracking-[0.2em] uppercase">
                Skills & Tools
              </span>
              <h2 className="font-serif text-4xl md:text-6xl font-bold mt-4 mb-6 text-balance">
                My Arsenal
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                The technologies and methodologies I leverage to build
                exceptional products
              </p>
            </div>

            <div className="flex bg-card p-1 rounded-full border border-border">
              {["technical", "soft"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  type="button"
                  className={`px-8 py-3 rounded-full capitalize transition-all font-medium text-sm ${activeTab === tab
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {activeTab === "technical" ? (
              <>
                <SkillBadge name="JavaScript" level={95} />
                <SkillBadge name="TypeScript" level={90} />
                <SkillBadge name="Python" level={85} />
                <SkillBadge name="Java" level={80} />
                <SkillBadge name="React.js" level={95} />
                <SkillBadge name="Next.js" level={90} />
                <SkillBadge name="Node.js" level={90} />
                <SkillBadge name="Flutter" level={85} />
                <SkillBadge name="MongoDB" level={85} />
                <SkillBadge name="MySQL" level={80} />
                <SkillBadge name="Git" level={90} />
                <SkillBadge name="AWS" level={75} />
              </>
            ) : (
              <>
                <SkillBadge name="Problem Solving" level={95} />
                <SkillBadge name="Communication" level={90} />
                <SkillBadge name="Team Leadership" level={85} />
                <SkillBadge name="Critical Thinking" level={90} />
                <SkillBadge name="Adaptability" level={95} />
                <SkillBadge name="Time Management" level={85} />
                <SkillBadge name="Creative Thinking" level={90} />
                <SkillBadge name="Collaboration" level={95} />
              </>
            )}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <Certifications />

      {/* Contact Section */}
      <section id="contact" className="relative py-40 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-sm text-primary font-medium tracking-[0.2em] uppercase">
              {"Let's Collaborate"}
            </span>

            <h2 className="font-serif text-4xl md:text-7xl font-bold mt-6 mb-8 leading-tight text-balance">
              Ready to build something{" "}
              <span className="text-primary">extraordinary?</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto">
              {"Let's turn your vision into reality. Fill out the form below or email me directly at ramkantharia4@gmail.com"}
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border/50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © 2026 Ram Kantharia. Crafted with precision & passion.
          </div>

          <div className="flex gap-6">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </a>
          </div>
        </div>
      </footer>

      {/* Floating Components */}
      <ScrollToTop />
      <FloatingCTA />
    </div>
  );
}

// Components
interface SocialIconProps {
  href: string;
  icon: React.ReactNode;
}

function SocialIcon({ href, icon }: SocialIconProps) {
  return (
    <a
      href={href}
      className="group relative p-3 bg-card border border-border rounded-full hover:bg-muted/50 transition-all hover:scale-110 active:scale-95 text-muted-foreground hover:text-foreground"
    >
      {icon}
    </a>
  );
}

interface StatCardProps {
  number: string;
  label: string;
}

function StatCard({ number, label }: StatCardProps) {
  return (
    <div className="text-center group">
      <div className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
        {number}
      </div>
      <div className="text-sm text-muted-foreground uppercase tracking-[0.15em]">
        {label}
      </div>
    </div>
  );
}

interface ExperienceCardProps {
  period: string;
  role: string;
  company: string;
  companyUrl: string;
  description: string;
  skills: string[];
  icon: React.ReactNode;
}

function ExperienceCard({
  period,
  role,
  company,
  companyUrl,
  description,
  skills,
}: ExperienceCardProps) {
  return (
    <div className="group relative grid md:grid-cols-[200px_1fr] gap-6 md:gap-12 py-12 border-b border-border/50 hover:bg-muted/20 transition-all px-6 -mx-6 rounded-2xl">
      <div className="text-sm text-muted-foreground font-medium tracking-wide">
        {period}
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-1 flex items-center gap-2 flex-wrap">
          {role} ·{" "}
          <a
            href={companyUrl}
            className="text-primary hover:underline inline-flex items-center gap-1 group/link"
          >
            {company}
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover/link:opacity-100 transition-opacity" />
          </a>
        </h3>
        <p className="text-muted-foreground leading-relaxed mb-4 max-w-2xl">
          {description}
        </p>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
}

function ServiceCard({ icon, title, desc }: ServiceCardProps) {
  return (
    <div className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/5">
      <div className="mb-6 p-3 w-fit bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

interface ProjectShowcaseProps {
  number: string;
  title: string;
  subtitle: string;
  tags: string[];
  description: string;
  features: string[];
  image: string;
  projectUrl: string;
  align: "left" | "right";
}

function ProjectShowcase({
  number,
  title,
  subtitle,
  tags,
  description,
  features,
  image,
  projectUrl,
  align,
}: ProjectShowcaseProps) {
  return (
    <div
      className={`flex flex-col ${align === "right" ? "md:flex-row-reverse" : "md:flex-row"
        } gap-12 items-center`}
    >
      <div className="flex-1">
        <div className="font-serif text-7xl font-bold text-muted/50 mb-4">
          {number}
        </div>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
        <h3 className="font-serif text-3xl md:text-4xl font-bold mb-2 text-foreground">
          {title}
        </h3>
        <p className="text-lg text-primary mb-6">{subtitle}</p>
        <p className="text-muted-foreground leading-relaxed mb-8 max-w-xl">
          {description}
        </p>

        <div className="grid grid-cols-2 gap-4">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              <span className="text-sm text-muted-foreground">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1 w-full">
        <a href={projectUrl} className="block">
          <div className="relative aspect-[4/3] rounded-2xl border border-border overflow-hidden group cursor-pointer hover:border-primary/30 transition-all hover:shadow-2xl hover:shadow-primary/10">
            <img
              src={image || "/placeholder.svg"}
              alt={`${title} project screenshot`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="p-4 bg-card rounded-full border border-border shadow-lg">
                <ExternalLink className="w-6 h-6 text-foreground" />
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
}

interface SkillBadgeProps {
  name: string;
  level: number;
}

function SkillBadge({ name, level }: SkillBadgeProps) {
  return (
    <div className="group relative p-5 rounded-xl bg-card border border-border hover:border-primary/30 transition-all hover:-translate-y-0.5 overflow-hidden">
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all"
        style={{ width: `${level}%` }}
      />
      <div className="text-base font-medium text-foreground mb-1">{name}</div>
      <div className="text-sm text-muted-foreground">{level}%</div>
    </div>
  );
}
