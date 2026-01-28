"use client";
import React from "react";
import { ArrowLeft, Database, BarChart3, Brain, Zap, LineChart, PieChart } from "lucide-react";

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
            <Database className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/70 font-medium">Data Intelligence Platform</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            AskItall
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            Transforming massive datasets into actionable insights through intelligent automation and advanced analytics
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">Python</span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">Data Science</span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">NLP</span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">Visualization</span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">SQL</span>
          </div>

          <div className="aspect-video rounded-2xl border border-border overflow-hidden mb-20 bg-muted/30">
            <img 
              src="/images/project-askitall.jpg" 
              alt="AskItall Platform"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">2022-2023</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Timeline</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">Data Science Intern</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">My Role</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">Web Platform</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Platform Type</div>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
              Organizations struggle with extracting meaningful insights from large, complex datasets. Traditional analysis 
              methods are time-consuming, require specialized expertise, and often fail to reveal hidden patterns and trends.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl">
              Business stakeholders need quick, accurate data summaries and visualizations to make informed decisions, 
              but data processing and analysis bottlenecks slow down critical business operations.
            </p>
          </div>

          {/* Solution */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
              AskItall is an intelligent data analysis platform that automates the entire data processing pipeline—from 
              ingestion to visualization. It uses natural language processing and machine learning to generate comprehensive 
              insights, visual analytics, and custom reports in minutes instead of days.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard 
                icon={<Brain className="w-6 h-6" />}
                title="Automated Summarization"
                description="Advanced NLP algorithms process datasets to generate intelligent summaries highlighting key trends, patterns, and anomalies."
              />
              <FeatureCard 
                icon={<BarChart3 className="w-6 h-6" />}
                title="Interactive Visualizations"
                description="Dynamic charts, graphs, and word clouds that make complex data relationships immediately understandable."
              />
              <FeatureCard 
                icon={<LineChart className="w-6 h-6" />}
                title="Custom Report Generation"
                description="One-click generation of comprehensive analytical reports tailored to specific business needs and metrics."
              />
              <FeatureCard 
                icon={<Zap className="w-6 h-6" />}
                title="Advanced Analytics"
                description="Statistical analysis, correlation detection, and predictive modeling to uncover hidden insights in your data."
              />
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Technical Implementation</h2>
            
            <div className="space-y-8">
              <TechStack 
                title="Data Processing Engine"
                description="Built with Python leveraging pandas, numpy, and scikit-learn for high-performance data manipulation and analysis."
                technologies={["Python", "Pandas", "NumPy", "Scikit-learn"]}
              />
              
              <TechStack 
                title="Natural Language Processing"
                description="NLP pipeline using advanced text analysis techniques to extract meaningful insights and generate human-readable summaries."
                technologies={["NLTK", "spaCy", "TextBlob", "Word2Vec"]}
              />
              
              <TechStack 
                title="Visualization Framework"
                description="Interactive and responsive data visualizations using industry-leading libraries for clear data storytelling."
                technologies={["Matplotlib", "Seaborn", "Plotly", "D3.js"]}
              />

              <TechStack 
                title="Database & Storage"
                description="Efficient data storage and retrieval system with optimized query performance for large-scale datasets."
                technologies={["PostgreSQL", "Redis", "MongoDB", "SQL"]}
              />
            </div>
          </div>

          {/* Key Features Deep Dive */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Platform Capabilities</h2>
            <div className="space-y-6">
              <CapabilityCard 
                title="Data Ingestion & Cleaning"
                description="Supports multiple data formats (CSV, Excel, JSON, SQL) with automated data cleaning, validation, and preprocessing to ensure analysis-ready datasets."
              />
              <CapabilityCard 
                title="Exploratory Data Analysis"
                description="Automatic generation of statistical summaries, distribution analysis, correlation matrices, and outlier detection to understand data characteristics."
              />
              <CapabilityCard 
                title="Sentiment & Text Analysis"
                description="Advanced text mining capabilities for extracting themes, sentiment, and keywords from unstructured text data."
              />
              <CapabilityCard 
                title="Predictive Modeling"
                description="Machine learning models for forecasting, classification, and regression tasks with automated feature engineering."
              />
            </div>
          </div>

          {/* Impact */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Impact & Results</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ImpactCard 
                metric="80%"
                description="Reduction in analysis time"
              />
              <ImpactCard 
                metric="500+"
                description="Datasets processed"
              />
              <ImpactCard 
                metric="95%"
                description="Client satisfaction rate"
              />
            </div>
          </div>

          {/* Key Learnings */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Key Learnings</h2>
            <div className="space-y-4">
              <LearningPoint text="Scalable data processing requires careful optimization of memory usage and computation efficiency" />
              <LearningPoint text="Effective data visualization is about storytelling—choosing the right chart type for the right insight" />
              <LearningPoint text="Automating data cleaning saves 60% of analysis time but requires robust error handling" />
              <LearningPoint text="User-friendly interfaces for complex analytics make data science accessible to non-technical stakeholders" />
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