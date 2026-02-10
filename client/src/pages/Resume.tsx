import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Building2, GraduationCap, Award, Calendar, MapPin } from "lucide-react";
import { useEffect } from "react";
import { useLocation } from "wouter";

export default function Resume() {
  const [location] = useLocation();

  useEffect(() => {
    if (window.location.hash === "#resume-download") {
      const element = document.getElementById("resume-download");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const experience = [
    {
      company: "NVIDIA",
      role: "Business Operations Analyst",
      period: "May 2025 – Present",
      location: "Santa Clara, CA",
      type: "Contract",
      bullets: [
"Owned the NVIDIA App Catalog as the sole data owner, curating 4,000+ partner applications to surface verified high‑impact use cases and GTM assets.",
        "Led a strategic initiative to harvest 4,000+ application records from 3,000+ key accounts, providing verified ecosystem insights to support sales enablement.",
        "Engineered an automated validation framework using Python and LLM tools, increasing weekly data processing throughput by 275% (from 40 to 150+ items).",
        "Built automated market intelligence dashboards with Hugging Face API signals in Python to align stakeholders on high‑priority AI models.",
        "Audited and maintained Salesforce data integrity for NVIDIA accelerated applications, ensuring high-quality data for internal AI tools used by Sales and DevRel teams.",
        "Automated project management for the TPM team by integrating request data via Power Automate and Excel VBA, developing a live dashboard for real-time status visibility.",
        "Redesigned Salesforce workflows by diagnosing critical logic inefficiencies and collaborating with engineering to remove friction in GTM processes."
      ]
    },
    {
      company: "UNHCR, the UN Refugee Agency",
      role: "Senior Data Analyst",
      period: "Sep 2022 – Aug 2024",
      location: "Seoul, South Korea",
      type: "",
      bullets: [
        "Synthesized insights from large‑scale donor and campaign data to advise executive leadership on growth strategies, driving a 2.3% recurring revenue increase in Q4 2023 by recommending an increase in retry attempts for regular donors from 1 to 4.",
        "Redesigned the cash appeal donation flow in Q2 2023, which increased one-off donor numbers and overall engagement.",
        "Orchestrated a new pipeline in the CRM, defining data standards and supporting 40+ users through training to reach 95% data compliance.",
        "Analyzed paid media and landing page performance, running A/B tests that improved lead conversion by 15% and reduced acquisition costs by ~10%.",
        "Segmented 400,000+ donors using K‑means clustering and SQL to identify high‑value segments, optimize retention strategies, and boost campaign targeting efficiency.",
        "Accelerated executive decision-making by 50% by establishing a centralized data warehouse on Google Cloud Platform (GCP) and automating KPI pipelines."
      ]
    },
    {
      company: "LVMH Perfumes & Cosmetics",
      role: "Supply and Forecasting Coordinator",
      period: "Sep 2019 – May 2022",
      location: "Tokyo, Japan",
      type: "",
      bullets: [
        "Achieved +7% sales growth in Q2 2021 by launching the GIVENCHY official e-commerce site in Japan and coordinating demand, inventory, and digital analytics.",
        "Increased forecast accuracy by 8% (Q4 vs Q3 2019) via SQL analysis and end-of-life landing analysis, reducing excess inventory costs by 12%.",
        "Partnered with directors to overhaul stock strategy, building Tableau dashboards improving turnover by 15% and refining merchandising decisions.",
        "Enhanced e-commerce conversion rates by 10% by analyzing user funnels to address drop-offs and refining UX.",
        "Optimized cross-border shipments between France and Japan, achieving 98% on-time delivery and reducing expedited shipping costs."
      ]
    },
    {
      company: "MinebeaMitsumi",
      role: "Operations Management Associate",
      period: "Feb 2018 – Sep 2019",
      location: "Kanagawa, Japan",
      type: "",
      bullets: [
        "Managed operations and supply‑chain forecasting across Japan and Cebu, improving lead times, reducing stockouts, and achieving 98% on-time delivery.",
        "Standardized KPIs across plants and increased reporting efficiency by 30% through the development of automated KPI tracking tools in Excel VBA and SQL."
      ]
    }
  ];

  const education = [
    {
      school: "MITx MicroMasters Program",
      degree: "Statistics and Data Science",
      year: "2024",
      details: "Supporting Women in Data Science Scholarship\nCompleted coursework in probability, statistics, statistical modeling, and machine learning with Python."
    },
    {
      school: "Korea University",
      degree: "Bachelor of Arts",
      year: "2016",
      details: "GPA: 4.05/4.5 | Academic Excellence Scholarship (recipient for 3 consecutive years)"
    }
  ];

  const certifications = [
    "NVIDIA DLI Fundamentals of Deep Learning (2025)",
    "Probability: The Science of Uncertainty and Data (2024)",
    "Fundamentals of Statistics (2024)",
    "Data Analysis: Statistical Modeling and Computation in Applications (2024)",
    "Machine Learning with Python: From Linear Models to Deep Learning (2024)",
    "Snowflake Data Warehousing (2024)",
    "Google Analytics Individual Qualification (2022)"
  ];

  const skills = {
    "Analytics & Data Science": ["SQL", "Python (Pandas, NumPy, Scikit‑learn)", "BigQuery", "GCP", "Power BI", "Tableau", "Experimentation/A‑B testing", "Clustering and Segmentation"],
    "Strategy & Operations": ["GTM and Sales Operations", "Growth Strategy", "Pipeline Management", "CRM/Salesforce Analytics", "KPI Design", "Executive Reporting"],
    "Operations & Supply‑Chain": ["Demand Forecasting", "Inventory Optimization", "Supply‑Chain and Logistics KPIs", "S&OP Support", "Scenario Analysis"],
    "Tools & Communication": ["Excel (Advanced, VBA)", "Dashboard Automation", "ETL and API Integrations", "Stakeholder Management", "Executive Storytelling"]
  };

  return (
    <div className="w-full bg-background min-h-screen pb-20">
      {/* Header */}
      <div className="bg-secondary/30 border-b border-border/40 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Experience & Resume</h1>
            <p className="text-muted-foreground max-w-2xl">
              Strategy / Ops / Data Analytics professional with experience across GTM, revenue, and operations, including supply‑chain and inventory analytics.
            </p>
          </div>
          <Button 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => window.open('/resume.pdf', '_blank')}
          >
            <Download className="mr-2 h-4 w-4" />
            Download PDF
          </Button>
        </div>
      </div>

      <div className="container py-12 max-w-4xl mx-auto space-y-16">
        
        {/* Professional Experience */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Building2 className="h-6 w-6 text-accent-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-primary">Professional Experience</h2>
          </div>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border/50 hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{job.company}</h3>
                    <div className="flex items-center gap-2 text-primary/80 font-medium mt-1">
                      <span>{job.role}</span>
                      {job.type && <span className="text-[10px] px-1.5 py-0.5 rounded-full border border-border text-muted-foreground/60 font-normal">{job.type}</span>}
                    </div>
                  </div>
                  <div className="flex flex-col md:items-end gap-1 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{job.period}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-3.5 w-3.5" />
                      <span>{job.location}</span>
                    </div>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {job.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground leading-relaxed">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent shrink-0"></span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Education & Certifications */}
        <section className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-accent/10 rounded-lg">
              <GraduationCap className="h-6 w-6 text-accent-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-primary">Education & Certifications</h2>
          </div>
          
          <div className="space-y-12">
            {/* Education */}
            <div className="space-y-8">
              <h3 className="text-lg font-bold text-primary border-b border-border/40 pb-2">Education</h3>
              {education.map((edu, index) => (
                <div key={index} className="relative pl-4 border-l-2 border-border">
                  <div className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-accent"></div>
                  <h4 className="font-bold text-primary">{edu.school}</h4>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{edu.degree}</p>
                  <p className="text-xs text-muted-foreground mb-2">{edu.year}</p>
                  <p className="text-xs text-muted-foreground/80 leading-relaxed whitespace-pre-line">{edu.details}</p>
                </div>
              ))}
            </div>
            
            {/* Certifications */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-primary border-b border-border/40 pb-2">Certifications</h3>
              <ul className="space-y-3">
                {certifications.map((cert, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0"></span>
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="bg-card rounded-xl p-6 md:p-8 shadow-sm border border-border/50">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-accent/10 rounded-lg">
              <Award className="h-6 w-6 text-accent-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-primary">Skills</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4 border-b border-border/40 pb-2">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 py-1 px-3">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

      {/* Bottom Download CTA */}
      <div id="resume-download" className="container py-12 flex justify-center">
        <div className="bg-primary text-primary-foreground rounded-2xl p-8 md:p-12 w-full max-w-4xl flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex-1 flex items-center">
            <p className="text-lg md:text-xl font-medium text-primary-foreground">Download my resume to save a copy.</p>
          </div>
          <div className="flex items-center">
            <Button 
              size="lg" 
              variant="secondary"
              className="whitespace-nowrap bg-white text-primary hover:bg-white/90 font-bold h-auto py-3"
              onClick={() => window.open('/resume.pdf', '_blank')}
            >
              <Download className="mr-2 h-4 w-4" />
              Download PDF Resume
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
