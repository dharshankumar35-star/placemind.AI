"use client";

import Link from "next/link";
import {
  Brain,
  MessageSquare,
  BarChart3,
  Upload,
  ArrowRight,
  Sparkles,
  Database,
  TrendingUp,
  Users,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: MessageSquare,
    title: "Chat with Your Data",
    description: "Ask questions in plain English and get instant insights from your placement datasets.",
  },
  {
    icon: BarChart3,
    title: "AI-Powered Analytics",
    description: "Automatically generate charts, trends, and business intelligence reports.",
  },
  {
    icon: Upload,
    title: "Easy Data Upload",
    description: "Upload CSV or Excel files and start analyzing in seconds.",
  },
  {
    icon: Database,
    title: "Smart Data Processing",
    description: "Our AI understands your data structure and generates meaningful insights.",
  },
];

const stats = [
  { value: "10K+", label: "Records Analyzed" },
  { value: "95%", label: "Accuracy Rate" },
  { value: "50+", label: "Chart Types" },
  { value: "24/7", label: "AI Availability" },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        </div>

        <nav className="relative z-10 flex items-center justify-between p-6 max-w-7xl mx-auto">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-accent rounded-full animate-pulse" />
            </div>
            <span className="font-bold text-xl tracking-tight">
              PlaceMind<span className="text-primary"> AI</span>
            </span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="hidden sm:inline-flex">
                Dashboard
              </Button>
            </Link>
            <Link href="/chat">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </nav>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-16 pb-24">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-6">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">AI-Powered Business Intelligence</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              <span className="text-balance">Chat with your</span>
              <br />
              <span className="gradient-text">placement data</span>
            </h1>
            
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 text-pretty">
              PlaceMind AI transforms how you analyze placement data. Upload your datasets, 
              ask questions in natural language, and get instant insights with beautiful visualizations.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/dashboard">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground glow-primary w-full sm:w-auto">
                  View Dashboard
                  <BarChart3 className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/chat">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Start Chatting
                  <MessageSquare className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="glass-card rounded-xl p-4 text-center">
                <p className="text-2xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to analyze and understand your placement data
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="glass-card rounded-xl p-6 transition-all duration-300 hover:scale-[1.02] hover:glow-primary"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-20 px-6 relative">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Get started in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: Upload,
                title: "Upload Your Data",
                description: "Import your placement dataset in CSV or Excel format",
              },
              {
                step: "02",
                icon: MessageSquare,
                title: "Ask Questions",
                description: "Chat with your data using natural language queries",
              },
              {
                step: "03",
                icon: TrendingUp,
                title: "Get Insights",
                description: "Receive AI-powered analytics and visualizations",
              },
            ].map((item, idx) => (
              <div key={item.step} className="relative">
                {idx < 2 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-px bg-gradient-to-r from-border to-transparent -translate-y-1/2" />
                )}
                <div className="glass-card rounded-xl p-6 text-center">
                  <div className="text-6xl font-bold text-primary/20 mb-4">{item.step}</div>
                  <div className="w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Built for <span className="gradient-text">Placement Officers</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                PlaceMind AI is designed specifically for educational institutions to analyze 
                and improve their placement outcomes. Get actionable insights that matter.
              </p>
              
              <div className="space-y-4">
                {[
                  "Track placement rates across departments",
                  "Analyze salary trends and distributions",
                  "Identify factors affecting placement success",
                  "Generate comprehensive reports instantly",
                  "Compare year-over-year performance",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>

              <Link href="/analytics" className="inline-block mt-8">
                <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                  Explore Analytics
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="glass-card rounded-2xl p-6 lg:p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 glass rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold">215 Students</p>
                    <p className="text-sm text-muted-foreground">Total in dataset</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 glass rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">68.8% Placement Rate</p>
                    <p className="text-sm text-muted-foreground">Successfully placed</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 glass rounded-lg">
                  <div className="w-10 h-10 rounded-lg bg-chart-3/20 flex items-center justify-center">
                    <BarChart3 className="h-5 w-5 text-chart-3" />
                  </div>
                  <div>
                    <p className="font-semibold">₹2.88L Average Package</p>
                    <p className="text-sm text-muted-foreground">Across all placements</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center glass-card rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10" />
          <div className="relative">
            <h2 className="text-3xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Start analyzing your placement data with AI-powered insights today. 
              No setup required, just upload and chat.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/upload">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto">
                  Upload Dataset
                  <Upload className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/chat">
                <Button size="lg" variant="outline" className="w-full sm:w-auto">
                  Try Demo Chat
                  <MessageSquare className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-border">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Brain className="h-5 w-5 text-primary" />
            <span className="font-semibold">PlaceMind AI</span>
          </div>
          <p className="text-sm text-muted-foreground">
            AI-powered placement data analytics platform
          </p>
        </div>
      </footer>
    </div>
  );
}
