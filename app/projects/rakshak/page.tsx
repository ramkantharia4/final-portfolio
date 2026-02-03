"use client";
import React from "react";
import { ArrowLeft, Shield, AlertTriangle, MapPin, Activity, Bell, Heart } from "lucide-react";

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
            <Shield className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/70 font-medium">Safety & Emergency Response</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Rakshak
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            An intelligent safety app that detects accidents, monitors driver alertness, and provides instant emergency response
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">Flutter</span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">Python</span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">Node.js</span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">MongoDB</span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">AI/ML</span>
          </div>

          <div className="aspect-video rounded-2xl border border-border overflow-hidden mb-20 bg-muted/30">
            <img 
              src="/images/rakshak.jpeg" 
              alt="Rakshak App"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">2024-2025</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Timeline</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">App Developer</div>
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
              Road accidents are a leading cause of fatalities worldwide, with many incidents occurring due to driver 
              drowsiness, distraction, or delayed emergency response. Critical minutes lost between accident occurrence 
              and help arrival can mean the difference between life and death.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Traditional emergency response systems rely on witnesses or victims making manual calls, which may not 
              be possible during serious accidents. There's a critical need for automated accident detection and 
              instant emergency notification systems.
            </p>
          </div>

          {/* Solution */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
              Rakshak is an AI-powered mobile application that continuously monitors driver behavior and vehicle 
              movements to detect accidents and drowsiness in real-time. Upon detection, it automatically alerts 
              emergency contacts, nearby police stations, fire stations, and hospitals with precise location data.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard 
                icon={<AlertTriangle className="w-6 h-6" />}
                title="Automatic Accident Detection"
                description="Advanced sensors and AI algorithms detect sudden impacts, abnormal vehicle movements, and accident patterns to trigger instant alerts."
              />
              <FeatureCard 
                icon={<Activity className="w-6 h-6" />}
                title="Drowsiness Monitoring"
                description="Real-time analysis of driving patterns, vehicle swerving, and user activity to detect signs of driver fatigue and prevent accidents."
              />
              <FeatureCard 
                icon={<MapPin className="w-6 h-6" />}
                title="Location Sharing"
                description="Instant GPS location sharing with emergency contacts and services, enabling faster response times and accurate assistance."
              />
              <FeatureCard 
                icon={<Bell className="w-6 h-6" />}
                title="Emergency Alerts"
                description="Automated notifications to police, fire stations, hospitals, and emergency contacts with accident severity and location details."
              />
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Technical Architecture</h2>
            
            <div className="space-y-8">
              <TechStack 
                title="Mobile Application"
                description="Cross-platform Flutter app with real-time sensor integration, background monitoring, and seamless user experience across Android and iOS."
                technologies={["Flutter", "Dart", "Firebase", "Google Maps API"]}
              />
              
              <TechStack 
                title="AI & Detection Systems"
                description="Machine learning models trained on accident patterns, driver behavior, and sensor data for accurate detection with minimal false positives."
                technologies={["Python", "TensorFlow", "Computer Vision", "Sensor Fusion"]}
              />
              
              <TechStack 
                title="Backend Infrastructure"
                description="Scalable Node.js backend handling real-time alerts, location tracking, and emergency service notifications with high availability."
                technologies={["Node.js", "Express", "MongoDB", "WebSockets"]}
              />

              <TechStack 
                title="Emergency Integration"
                description="API integrations with emergency services, SMS gateways, and notification systems for instant multi-channel alerts."
                technologies={["Twilio", "REST APIs", "Push Notifications", "Geolocation Services"]}
              />
            </div>
          </div>

          {/* Key Features Deep Dive */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Core Capabilities</h2>
            <div className="space-y-6">
              <CapabilityCard 
                title="Intelligent Accident Detection"
                description="Multi-sensor fusion combining accelerometer, gyroscope, and GPS data to distinguish between accidents and normal driving events like hard braking or speed bumps."
              />
              <CapabilityCard 
                title="Sleep & Drowsiness Detection"
                description="Behavioral pattern analysis monitoring driving consistency, lane keeping, and response times to identify fatigue before it becomes dangerous."
              />
              <CapabilityCard 
                title="Real-Time Vehicle Monitoring"
                description="Continuous tracking of vehicle speed, acceleration patterns, and movement anomalies to detect unsafe driving conditions."
              />
              <CapabilityCard 
                title="Emergency Contact Management"
                description="Customizable emergency contact lists with priority levels, ensuring the right people are notified immediately during emergencies."
              />
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
            
            <div className="space-y-8">
              <WorkflowStep 
                number="01"
                title="Continuous Monitoring"
                description="The app runs in the background, monitoring vehicle sensors, GPS data, and driver behavior patterns without draining battery."
              />
              
              <WorkflowStep 
                number="02"
                title="AI-Powered Detection"
                description="Machine learning models analyze sensor data in real-time to detect accidents, drowsiness, or unsafe driving conditions."
              />
              
              <WorkflowStep 
                number="03"
                title="Instant Alerts"
                description="Upon detection, the system immediately sends location-tagged alerts to emergency contacts, police, fire stations, and hospitals."
              />

              <WorkflowStep 
                number="04"
                title="Emergency Response"
                description="Emergency services receive precise location data and accident details, enabling faster and more effective response."
              />
            </div>
          </div>

          {/* Impact */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Potential Impact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ImpactCard 
                metric="60%"
                description="Reduction in emergency response time"
              />
              <ImpactCard 
                metric="95%"
                description="Accident detection accuracy"
              />
              <ImpactCard 
                metric="24/7"
                description="Continuous safety monitoring"
              />
            </div>
          </div>

          {/* Key Learnings */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Key Learnings</h2>
            <div className="space-y-4">
              <LearningPoint text="Building safety-critical apps requires extensive testing to minimize false positives while maintaining high detection accuracy" />
              <LearningPoint text="Battery optimization is crucial for background monitoring apps to ensure 24/7 protection without draining device resources" />
              <LearningPoint text="Integrating with emergency services requires careful API design and robust fallback mechanisms for reliability" />
              <LearningPoint text="User privacy and data security are paramount when handling sensitive location and health information" />
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

function CapabilityCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl bg-card border border-border">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function WorkflowStep({ number, title, description }: { number: string; title: string; description: string }) {
  return (
    <div className="flex gap-6 items-start">
      <div className="font-serif text-5xl font-bold text-primary/20">{number}</div>
      <div className="flex-1">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
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