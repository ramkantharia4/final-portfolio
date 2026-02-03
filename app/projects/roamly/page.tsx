"use client";
import React from "react";
import { ArrowLeft, Compass, Users, Wallet, Camera, Navigation, Clock, MapPin, Zap, Heart } from "lucide-react";

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
            <Compass className="w-4 h-4 text-primary" />
            <span className="text-sm text-foreground/70 font-medium">Smart Travel Planning</span>
          </div>

          <h1 className="font-serif text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Roamly
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mb-12 leading-relaxed">
            An intelligent travel companion that adapts to reality, unifies planning, and makes group trips effortless with dynamic itineraries that adjust to your actual travel behavior
          </p>

          <div className="flex flex-wrap gap-3 mb-12">
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">Flutter</span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">Firebase</span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">Node.js</span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">MongoDB</span>
            <span className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm text-primary font-medium">WebSockets</span>
          </div>

          <div className="aspect-video rounded-2xl border border-border overflow-hidden mb-20">
            <img 
              src="/images/Roamly.jpeg" 
              alt="Krishifala Platform"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Overview */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">2026</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Timeline</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">Full Stack Dev</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">My Role</div>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border">
              <div className="text-3xl font-bold text-primary mb-2">Hackathon</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Project Type</div>
            </div>
          </div>

          {/* Problem Statement */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
              Travel planning is fragmented across multiple apps for stays, itineraries, navigation, expenses, and 
              memories. Despite using several tools, travelers still face poor coordination and rigid, static schedules 
              that fail to adapt to real-world changes, leading to wasted time and a stressful travel experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-6">
              This problem affects individual travelers, families, and group travelers who struggle to coordinate plans, 
              manage time effectively, and track shared expenses. It is especially challenging for group trips, where 
              lack of collaboration tools and real-time plan adjustments makes travel management confusing and inefficient.
            </p>
            <div className="p-6 rounded-xl bg-muted/20 border-l-4 border-primary">
              <p className="text-lg italic text-foreground">
                "Travel is dynamic, but static systems force users into multiple apps and constant re-planning."
              </p>
            </div>
          </div>

          {/* Solution */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">The Solution</h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mb-12">
              Roamly is a reality-aware, adaptive travel companion that replaces rigid itineraries with dynamic plans 
              that adjust to real-world travel conditions. The platform unifies planning, group coordination, expense 
              tracking, navigation, and memory capture into a single intelligent system built around real human behavior, 
              not ideal travel assumptions.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <FeatureCard 
                icon={<Clock className="w-6 h-6" />}
                title="Reality-Aware Itinerary"
                description="Auto-adjusts plans when you run late or stay longer at a location. Your itinerary bends to you, not the other way around."
              />
              <FeatureCard 
                icon={<Zap className="w-6 h-6" />}
                title="Energy-Based Planning"
                description="Build trips as relaxed, balanced, or packed based on your energy preferences, with smart rest and café breaks."
              />
              <FeatureCard 
                icon={<Users className="w-6 h-6" />}
                title="Smart Group Travel"
                description="Role-based access, preference balancing, and live polls make group trip planning effortless and fair for everyone."
              />
              <FeatureCard 
                icon={<Wallet className="w-6 h-6" />}
                title="Intelligent Expense Tracking"
                description="Track budgets, split bills instantly, and get suggestions for time-saving trade-offs between cost and convenience."
              />
              <FeatureCard 
                icon={<Camera className="w-6 h-6" />}
                title="Memory Timeline"
                description="Creates place-tagged photos and an auto-generated trip story with locations, photos, and expenses."
              />
              <FeatureCard 
                icon={<Navigation className="w-6 h-6" />}
                title="All-in-One Navigation"
                description="Compare public transport, taxis, and rentals with real-time cost-time tradeoffs and crowd-aware suggestions."
              />
            </div>
          </div>

          {/* Why It's Unique */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">What Makes It Unique</h2>
            <div className="p-8 rounded-xl bg-card border border-border mb-6">
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Current travel apps are rigid and fragmented, causing constant re-planning and poor coordination. 
                Roamly unifies planning, group management, expenses, and memories into one adaptive platform that 
                responds to real travel behavior—making trips simpler, smarter, and stress-free.
              </p>
              <div className="p-6 rounded-xl bg-primary/5 border border-primary/20">
                <p className="text-lg italic text-foreground">
                  "Travel plans should adapt to humans — not the other way around."
                </p>
              </div>
            </div>
          </div>

          {/* Technical Implementation */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Technical Architecture</h2>
            
            <div className="space-y-8">
              <TechStack 
                title="Mobile Application"
                description="Cross-platform Flutter app with intuitive UI/UX, real-time updates, and seamless performance across Android and iOS devices."
                technologies={["Flutter", "Dart", "Material Design"]}
              />
              
              <TechStack 
                title="Backend & Real-Time Sync"
                description="Scalable Node.js backend with WebSockets for live updates, group coordination, and dynamic itinerary adjustments."
                technologies={["Node.js", "Express/NestJS", "WebSockets", "Firebase Realtime DB"]}
              />
              
              <TechStack 
                title="Data & Storage"
                description="Hybrid database architecture combining Firebase for real-time sync and MongoDB for structured travel data and user preferences."
                technologies={["Firebase", "MongoDB", "Cloud Storage"]}
              />

              <TechStack 
                title="API Integrations"
                description="Comprehensive integration with maps, hotels, transport, and navigation services for complete travel planning capabilities."
                technologies={["Google Maps API", "Hotel APIs", "Transport APIs", "Navigation Services"]}
              />

              <TechStack 
                title="Deployment & CI/CD"
                description="Automated deployment pipeline with continuous integration and delivery for rapid updates and reliable releases."
                technologies={["GitHub Actions", "Firebase Hosting", "Cloud Functions"]}
              />
            </div>
          </div>

          {/* Core Features Deep Dive */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Core Capabilities</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <CapabilityCard 
                title="Smart Itinerary Generation"
                description="Auto day-wise plans based on must-visit spots, hotel ratings, and timing preferences with intelligent scheduling."
              />
              <CapabilityCard 
                title="Time-Window Optimization"
                description="Keeps your day within a user-set end time, ensuring you finish sightseeing by 7 PM or whenever you prefer."
              />
              <CapabilityCard 
                title="Role-Based Group Access"
                description="Planner, Viewer, Expense Manager, Photo Contributor roles ensure everyone has the right level of control."
              />
              <CapabilityCard 
                title="Group Preference Balancer"
                description="Temples, cafes, shopping—everyone gets a fair plan with live polls for instant decision-making."
              />
              <CapabilityCard 
                title="Smart Budget Insights"
                description="Track spending, set daily budgets, identify who's splurging, and get cost-saving recommendations."
              />
              <CapabilityCard 
                title="Crowd-Aware Suggestions"
                description="Avoid rush hours, hit attractions at perfect times, with real-time 'What's Near Me?' assistance."
              />
              <CapabilityCard 
                title="Place-Stamped Photos"
                description="Upload, view, and share photos by location and day with automatic organization and timeline creation."
              />
              <CapabilityCard 
                title="Emergency & Offline Mode"
                description="Smart emergency assist with hospitals and police locations, plus offline survival mode with essential data."
              />
            </div>
          </div>

          {/* Innovation Points */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Game-Changing Features</h2>
            <div className="space-y-4">
              <InnovationPoint 
                title="Reality-Aware Itinerary"
                description="Plans bend to you—late start? Linger longer? No problem! Dynamic adjustments in real-time."
              />
              <InnovationPoint 
                title="Energy-Based Days"
                description="Relaxed, Balanced, or Packed—your day, your pace with intelligent rest breaks."
              />
              <InnovationPoint 
                title="Live Trip Polls"
                description="'Cafe or Museum next?' You vote, plan updates instantly with group consensus."
              />
              <InnovationPoint 
                title="Cost vs Time Intelligence"
                description="Save money or save time—your call. All travel options compared: public transport, taxis, rentals."
              />
              <InnovationPoint 
                title="Split & Share Expenses"
                description="Paid the cafe bill? Split it right here, no extra app needed with instant notifications."
              />
              <InnovationPoint 
                title="Timeline Trip Story"
                description="Auto-generated story of your trip—places, photos, expenses in a beautiful shareable format."
              />
            </div>
          </div>

          {/* Feasibility Analysis */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Feasibility Analysis</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <FeasibilityCard 
                title="Technical Feasibility"
                points={[
                  "Built with Flutter for cross-platform compatibility",
                  "Integrates Google Maps & APIs for comprehensive travel data",
                  "Real-time database for instant group coordination",
                  "Leverages proven technologies and frameworks"
                ]}
              />
              <FeasibilityCard 
                title="Operational Feasibility"
                points={[
                  "Easy-to-use interface for solo and group trips",
                  "Offline mode ensures functionality without internet",
                  "Real-time adjustments and emergency assistance",
                  "Flexible planning supports various travel styles"
                ]}
              />
              <FeasibilityCard 
                title="Financial Feasibility"
                points={[
                  "Moderate budget for development and API subscriptions",
                  "Cloud-based architecture ensures scalability",
                  "Small development team with minimal hardware needs",
                  "Cost-effective use of existing API services"
                ]}
              />
              <FeasibilityCard 
                title="Economic Feasibility"
                points={[
                  "Consolidates multiple apps into one platform",
                  "Saves users time and money on travel planning",
                  "Leverages existing APIs to reduce development costs",
                  "Strong market demand for unified travel solutions"
                ]}
              />
            </div>
          </div>

          {/* How It Works */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
            
            <div className="space-y-8">
              <WorkflowStep 
                number="01"
                title="Plan Your Trip"
                description="Input destinations, dates, and preferences. Choose your energy level (Relaxed/Balanced/Packed) and set time windows. The AI generates an optimal day-wise itinerary."
              />
              
              <WorkflowStep 
                number="02"
                title="Collaborate with Your Group"
                description="Invite travel companions with role-based access. Balance preferences automatically, vote on activities with live polls, and coordinate seamlessly."
              />
              
              <WorkflowStep 
                number="03"
                title="Adapt in Real-Time"
                description="Running late? Staying longer? The itinerary auto-adjusts. Get crowd-aware suggestions, nearby recommendations, and cost-time tradeoffs on the go."
              />

              <WorkflowStep 
                number="04"
                title="Track & Share Memories"
                description="Upload place-stamped photos, split expenses instantly, and generate an auto-timeline story of your entire trip to share with friends and family."
              />
            </div>
          </div>

          {/* Impact */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Expected Impact</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <ImpactCard 
                metric="One App"
                description="Replace 5+ fragmented travel apps"
              />
              <ImpactCard 
                metric="Real-Time"
                description="Dynamic plans that adapt instantly"
              />
              <ImpactCard 
                metric="Stress-Free"
                description="Effortless group coordination"
              />
            </div>
          </div>

          {/* Team */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Team Hellfire Club</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <TeamMember 
                name="Ram Kantharia"
                role="Full Stack Developer"
                institution="Atharva College of Engineering"
              />
              <TeamMember 
                name="Mohit Makwana"
                role="Developer"
                institution="K. J. Somaiya Institute of Technology"
              />
              <TeamMember 
                name="Harshini Mishal"
                role="Developer"
                institution="Thakur College of Engineering & Technology"
              />
              <TeamMember 
                name="Arya Pawar"
                role="Developer"
                institution="Thakur College of Engineering & Technology"
              />
            </div>
          </div>

          {/* Key Learnings */}
          <div className="mb-20">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">Key Learnings</h2>
            <div className="space-y-4">
              <LearningPoint text="Building adaptive systems requires careful balance between automation and user control to ensure plans feel intelligent but not intrusive" />
              <LearningPoint text="Real-time synchronization across multiple users demands robust conflict resolution and optimistic UI updates for seamless collaboration" />
              <LearningPoint text="Integrating multiple travel APIs requires careful error handling and fallback strategies to ensure reliability across different services" />
              <LearningPoint text="User experience in travel apps must prioritize simplicity despite complex backend logic—hiding complexity while surfacing value" />
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

function InnovationPoint({ title, description }: { title: string; description: string }) {
  return (
    <div className="p-6 rounded-xl bg-card border border-border">
      <h3 className="text-lg font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

function FeasibilityCard({ title, points }: { title: string; points: string[] }) {
  return (
    <div className="p-6 rounded-xl bg-card border border-border">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-3">
        {points.map((point, index) => (
          <li key={index} className="flex gap-3 items-start">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span className="text-muted-foreground leading-relaxed">{point}</span>
          </li>
        ))}
      </ul>
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

function TeamMember({ name, role, institution }: { name: string; role: string; institution: string }) {
  return (
    <div className="p-6 rounded-xl bg-card border border-border">
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-primary mb-2">{role}</p>
      <p className="text-sm text-muted-foreground">{institution}</p>
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