"use client";
import React from "react";
import { ArrowLeft, ExternalLink, Github, Sparkles, TrendingUp, Users, Shield } from "lucide-react";

export default function Page() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 backdrop-blur-xl bg-background/80 border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-5 flex justify-between items-center">
          <a href="/" className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="text-sm font-medium">Back to Portfolio</span>
          </a>
          <div className="font-serif text-2xl font-bold text-foreground tracking-tight">
            RK<span className="text-primary">.</span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 mb-8">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/70 font-medium">AgriTech Platform</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Krishifala
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            Empowering Indian farmers with AI-powered crop health analysis, real-time market insights, and predictive analytics
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">Flutter</span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">Node.js</span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">MongoDB</span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">Python</span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">Computer Vision</span>
          </div>

          <div className="aspect-video rounded-2xl border border-border overflow-hidden mb-20">
            <img 
              src="/images/project-krishifala.jpg" 
              alt="Krishifala Platform"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">2023-2024</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Timeline</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">Full-Stack</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">My Role</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">Mobile App</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Platform</div>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
              Indian farmers face significant challenges in crop disease identification, accessing real-time market prices, 
              and making data-driven agricultural decisions. Traditional methods are time-consuming and often lead to 
              substantial crop losses and reduced income.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              The agricultural sector needed a comprehensive digital solution that could bridge the technology gap 
              and empower farmers with actionable insights at their fingertips.
            </p>
          </div>

          {/* Solution */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
              Krishifala is a comprehensive mobile application that leverages artificial intelligence and real-time 
              data analytics to provide farmers with instant crop health analysis, market intelligence, and weather forecasting.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard 
                icon={<Sparkles className="w-6 h-6" />}
                title="AI-Powered Disease Detection"
                description="Advanced computer vision algorithms analyze crop images to instantly identify diseases, pests, and nutrient deficiencies with high accuracy."
              />
              <FeatureCard 
                icon={<TrendingUp className="w-6 h-6" />}
                title="Real-Time Market Prices"
                description="Live updates on crop prices across different markets, helping farmers make informed decisions about when and where to sell."
              />
              <FeatureCard 
                icon={<Shield className="w-6 h-6" />}
                title="Weather Forecasting"
                description="Localized weather predictions and alerts to help farmers plan their agricultural activities and protect crops."
              />
              <FeatureCard 
                icon={<Users className="w-6 h-6" />}
                title="Multilingual Support"
                description="Interface available in multiple Indian languages to ensure accessibility for farmers across different regions."
              />
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Technical Implementation</h2>
            
            <div className="space-y-8">
              <TechStack 
                title="Frontend Development"
                description="Built with Flutter for cross-platform compatibility, ensuring smooth performance on both Android and iOS devices with native-like user experience."
                technologies={["Flutter", "Dart", "Material Design"]}
              />
              
              <TechStack 
                title="Backend Architecture"
                description="Scalable Node.js server handling API requests, user authentication, and data processing with MongoDB for efficient data storage and retrieval."
                technologies={["Node.js", "Express.js", "MongoDB", "JWT Authentication"]}
              />
              
              <TechStack 
                title="AI & Machine Learning"
                description="Python-based computer vision models trained on extensive crop disease datasets, deployed for real-time image analysis and prediction."
                technologies={["Python", "TensorFlow", "OpenCV", "Computer Vision"]}
              />
            </div>
          </div>

          {/* Impact */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Impact & Results</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ImpactCard 
                metric="95%"
                description="Disease detection accuracy rate"
              />
              <ImpactCard 
                metric="10k+"
                description="Active farmer users"
              />
              <ImpactCard 
                metric="30%"
                description="Average increase in crop yield"
              />
            </div>
          </div>

          {/* Key Learnings */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Key Learnings</h2>
            <div className="space-y-4">
              <LearningPoint text="Designing for low-literacy users requires intuitive visual interfaces and minimal text-heavy interactions" />
              <LearningPoint text="Optimizing AI models for mobile devices demands careful balance between accuracy and performance" />
              <LearningPoint text="Building for rural connectivity means implementing robust offline-first capabilities" />
              <LearningPoint text="Multilingual support is crucial for widespread adoption in diverse agricultural communities" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative border-t border-border/50 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-muted-foreground">
            © 2026 Ram Kantharia. Crafted with precision & passion.
          </div>
          <a href="/" className="text-sm text-primary hover:underline font-medium">
            ← Back to Portfolio
          </a>
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-all">
      <div className="mb-4 p-3 w-fit bg-primary/10 rounded-xl text-primary">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function TechStack({ title, description, technologies }: { title: string; description: string; technologies: string[] }) {
  return (
    <div className="p-8 rounded-xl bg-muted/30 border border-border">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}

function ImpactCard({ metric, description }: { metric: string; description: string }) {
  return (
    <div className="p-8 rounded-xl bg-card border border-border text-center">
      <div className="font-serif text-4xl font-bold text-primary mb-3">{metric}</div>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function LearningPoint({ text }: { text: string }) {
  return (
    <div className="flex gap-4 items-start p-4 rounded-lg bg-muted/20">
      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
      <p className="text-muted-foreground leading-relaxed">{text}</p>
    </div>
  );
}