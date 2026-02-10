import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Database, FileText, Lightbulb } from "lucide-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-background">
        {/* Abstract Background Elements */}
        <div className="absolute inset-0 z-0 opacity-10">
          <img 
            src="/images/hero-bg.jpg" 
            alt="Data Network Background" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left Column: Text */}
          <div className="flex flex-col gap-6 animate-in slide-in-from-bottom-8 duration-700 fade-in">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-accent-foreground text-sm font-medium w-fit">
              <span className="flex h-2 w-2 rounded-full bg-accent mr-2"></span>
              Strategy & Operations / Data Analytics
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-primary leading-tight">
              Hi, I’m Jiyeon Park.
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
              I’m a strategy, operations, and data analytics professional. I’ve worked with organizations like NVIDIA, a UN agency, LVMH, and a global manufacturer to turn messy data into decisions that grow revenue and keep operations lean. I do this partly because I care about impact—and partly because my dog has very expensive taste in kibble.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/showcase">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/resume">
                <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5">
                  Download Resume
                  <FileText className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
          
          {/* Right Column: Dog Image */}
          <div className="flex justify-center lg:justify-end animate-in slide-in-from-right-8 duration-1000 fade-in delay-200">
            <div className="relative group">
              <div className="absolute -inset-4 bg-accent/20 rounded-2xl blur-xl group-hover:bg-accent/30 transition-all duration-500"></div>
              <div className="relative bg-card rounded-2xl overflow-hidden shadow-2xl border border-border/50 max-w-md transform transition-transform duration-500 hover:scale-[1.02]">
                <img 
                  src="/images/june-dog.png" 
                  alt="My Dog - Chief Motivation Officer" 
                  className="w-full h-auto object-cover aspect-[4/5]"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-12">
                  <p className="text-white font-medium text-lg">Chief Motivation Officer</p>
                  <p className="text-white/80 text-sm">Expert in Kibble Quality Assurance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Summary Section */}
      <section className="w-full py-20 bg-secondary/30 border-y border-border/40">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-card p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 group">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Lightbulb className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Strategy & GTM</h3>
              <p className="text-muted-foreground leading-relaxed">
                Data‑driven strategy, operations, and GTM work across tech, UN, luxury, and manufacturing organizations.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 group">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <Database className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Analytics Pipelines</h3>
              <p className="text-muted-foreground leading-relaxed">
                Building analytics pipelines and dashboards using SQL, Python, BigQuery, Power BI/Tableau, and Excel/VBA, for campaigns, revenue, and supply‑chain and inventory health.
              </p>
            </div>

            <div className="bg-card p-8 rounded-xl shadow-sm border border-border/50 hover:shadow-md transition-all duration-300 group">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">Measurable Outcomes</h3>
              <p className="text-muted-foreground leading-relaxed">
                Turning ambiguous stakeholder questions into clear, measurable outcomes (revenue lift, cost reduction, improved forecast accuracy, better pipeline visibility).
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
