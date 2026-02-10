import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Database, Info, Lightbulb } from "lucide-react";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis
} from "recharts";
import dashboardData from "../data/dashboard-data.json";

export default function Showcase() {
  const [activeTab, setActiveTab] = useState(dashboardData.projects[0].id);

  // Custom tooltip for charts
  // Formatter for Y-axis and Tooltips
  const formatValue = (value: number | string, chartTitle?: string) => {
    if (typeof value !== 'number') return value;
    
    // Percentage handling
    if (chartTitle?.includes('%') || chartTitle?.includes('Win Rate') || chartTitle?.includes('Conversion')) {
      return `${value}%`;
    }
    
    // Currency handling
    if (chartTitle?.includes('$') || chartTitle?.includes('Revenue') || chartTitle?.includes('CAC') || chartTitle?.includes('Spend')) {
      if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
      if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
      return `$${value}`;
    }
    
    // Standard Number handling
    if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
    if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
    return value.toLocaleString();
  };

  const CustomTooltip = ({ active, payload, label, chartTitle }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card p-3 border border-border shadow-lg rounded-lg text-sm z-50">
          <p className="font-bold text-primary mb-1">{label}</p>
          {payload.map((entry: any, index: number) => (
            <div key={index} style={{ color: entry.color }} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: entry.color }}></span>
              <div className="flex items-center gap-1">
                {entry.name.includes('&') ? (
                  <span className="flex flex-col">
                    <span>{entry.name.split('&')[0].trim()}</span>
                    <span className="text-xs opacity-80">{entry.name.split('&')[1].trim()}</span>
                  </span>
                ) : (
                  <span>{entry.name}:</span>
                )}
                <span className="font-mono">
                  {formatValue(entry.value, chartTitle)}
                </span>
              </div>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  const renderChart = (chart: any) => {
    const commonProps = {
      width: "100%",
      height: "100%",
    };

    switch (chart.type) {
      case "line":
        return (
          <ResponsiveContainer {...commonProps}>
            <RechartsLineChart data={chart.data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
              <XAxis dataKey={chart.config.xKey} stroke="#888888" fontSize={12} tickLine={false} axisLine={false} dy={10} />
              <YAxis 
                stroke="#888888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                tickFormatter={(value) => formatValue(value, chart.title)}
                domain={['dataMin - 0.5', 'dataMax + 0.5']} 
              />
              <Tooltip content={<CustomTooltip chartTitle={chart.title} />} />
              <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                formatter={(value) => {
                  if (typeof value === 'string' && value.includes('&')) {
                    const parts = value.split('&');
                    return (
                      <span className="inline-flex flex-col text-left leading-tight align-middle ml-1">
                        <span>{parts[0].trim()}</span>
                        <span className="text-xs opacity-70">{parts[1].trim()}</span>
                      </span>
                    );
                  }
                  return value;
                }}
              />
              {chart.config.lines.map((line: any, i: number) => (
                <Line
                  key={i}
                  type="monotone"
                  dataKey={line.key}
                  name={line.name}
                  stroke={line.color}
                  strokeWidth={3}
                  dot={{ r: 4, fill: line.color }}
                  activeDot={{ r: 6 }}
                />
              ))}
            </RechartsLineChart>
          </ResponsiveContainer>
        );
      case "bar":
        return (
          <ResponsiveContainer {...commonProps}>
            <BarChart
              layout={chart.layout || "horizontal"}
              data={chart.data}
              margin={{ top: 10, right: 10, left: chart.title === "Pipeline Funnel Conversion" ? 15 : 0, bottom: 0 }} 
              style={chart.title === "Pipeline Funnel Conversion" ? { marginLeft: '-25px' } : undefined}
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={chart.layout !== "vertical"} vertical={chart.layout === "vertical"} stroke="#e5e7eb" />
              <XAxis 
                type={chart.layout === "vertical" ? "number" : "category"}
                dataKey={chart.layout === "vertical" ? undefined : chart.config.xKey}
                stroke="#888888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                dy={10}
              />
              <YAxis 
                type={chart.layout === "vertical" ? "category" : "number"}
                dataKey={chart.layout === "vertical" ? chart.config.xKey : undefined}
                stroke="#888888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false}
                tickFormatter={chart.layout === "vertical" ? undefined : (value) => formatValue(value, chart.title)}
                width={chart.layout === "vertical" ? 120 : 40} 
              />
              <Tooltip content={<CustomTooltip chartTitle={chart.title} />} />
              <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                formatter={(value) => {
                  if (typeof value === 'string' && value.includes('&')) {
                    const parts = value.split('&');
                    return (
                      <span className="inline-flex flex-col text-left leading-tight align-middle ml-1">
                        <span>{parts[0].trim()}</span>
                        <span className="text-xs opacity-70">{parts[1].trim()}</span>
                      </span>
                    );
                  }
                  return value;
                }}
              />
              {chart.config.bars.map((bar: any, i: number) => (
                <Bar
                  key={i}
                  dataKey={bar.key}
                  name={bar.name}
                  fill={bar.color}
                  radius={chart.layout === "vertical" ? [0, 4, 4, 0] : [4, 4, 0, 0]}
                  barSize={chart.layout === "vertical" ? 32 : undefined} // Thicker bars for funnel
                />
              ))}
            </BarChart>
          </ResponsiveContainer>
        );
      case "scatter":
        return (
          <ResponsiveContainer {...commonProps}>
            <ScatterChart margin={{ top: 10, right: 10, bottom: 0, left: 0 }}> {/* Standardized margins matching BarChart */}
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis 
                type="number" 
                dataKey={chart.config.xKey} 
                name="CAC" 
                stroke="#888888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                dy={10} 
                domain={['dataMin - 50', 'dataMax + 50']} 
                tickFormatter={(value) => formatValue(value, "CAC (USD)")}
              />
              <YAxis 
                type="number" 
                dataKey={chart.config.yKey} 
                name="Win Rate" 
                stroke="#888888" 
                fontSize={12} 
                tickLine={false} 
                axisLine={false} 
                domain={['dataMin - 5', 'dataMax + 5']}
                width={40} 
                tickFormatter={(value) => formatValue(value, "Win Rate (%)")}
              />
              <ZAxis type="number" dataKey={chart.config.zKey} range={[100, 800]} name="Volume" />
              <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip chartTitle={chart.title} />} />
              <Legend 
                wrapperStyle={{ paddingTop: '10px' }} 
                formatter={(value) => {
                  if (typeof value === 'string' && value.includes('&')) {
                    const parts = value.split('&');
                    return (
                      <span className="inline-flex flex-col text-left leading-tight align-middle ml-1">
                        <span>{parts[0].trim()}</span>
                        <span className="text-xs opacity-70">{parts[1].trim()}</span>
                      </span>
                    );
                  }
                  return value;
                }}
              />
              <Scatter name="Channels" data={chart.data} fill="#001f3f">
                {chart.data.map((entry: any, index: number) => (
                  <Cell key={`cell-${index}`} fill={index % 2 === 0 ? "#001f3f" : "#39CCCC"} />
                ))}
              </Scatter>
            </ScatterChart>
          </ResponsiveContainer>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full bg-background min-h-screen pb-20">
      {/* Header */}
      <div className="bg-secondary/30 border-b border-border/40 py-12">
        <div className="container">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-2">Data Work Showcase</h1>
          <p className="text-muted-foreground max-w-2xl mb-4">
            Demonstrating analytics capabilities across GTM, revenue, operations, and supply‑chain using realistic dummy data.
          </p>
          <div className="flex items-start gap-2 text-xs text-muted-foreground/80 bg-accent/10 p-3 rounded-lg max-w-2xl border border-accent/20">
            <Info className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
            <p>
              These projects use realistic dummy data to demonstrate analytical approach and business problem-solving. 
              All insights and methods reflect real-world techniques applied in previous roles.
            </p>
          </div>
        </div>
      </div>

      <div className="container py-8">
        <Tabs defaultValue={dashboardData.projects[0].id} className="w-full" onValueChange={setActiveTab}>
          {/* Updated TabsList: Compact, bordered, and distinctly styled */}
          <div className="mb-8 flex justify-center">
            <TabsList className="flex flex-col md:flex-row w-full max-w-5xl h-auto bg-transparent gap-3 p-0">
              {dashboardData.projects.map((project) => (
                <TabsTrigger 
                  key={project.id} 
                  value={project.id} 
                  className="flex-1 w-full text-sm font-medium py-2.5 px-4 rounded-md border
                    data-[state=active]:bg-[#001f3f] data-[state=active]:text-white data-[state=active]:border-[#001f3f] data-[state=active]:shadow-sm data-[state=active]:font-semibold
                    data-[state=inactive]:bg-gray-50 data-[state=inactive]:text-gray-600 data-[state=inactive]:border-gray-200
                    data-[state=inactive]:hover:bg-gray-100 data-[state=inactive]:hover:border-gray-300
                    transition-all duration-200 ease-in-out h-auto min-h-[42px] whitespace-normal text-center"
                >
                  {project.title.split(":")[0]}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {dashboardData.projects.map((project) => (
            <TabsContent 
              key={project.id} 
              value={project.id} 
              className="space-y-8 animate-in fade-in slide-in-from-bottom-2 duration-300 fill-mode-both"
            >
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Left Column: Title, Problem, Charts */}
                <div className="lg:col-span-2 space-y-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="border-primary text-primary">
                        {project.category}
                      </Badge>
                    </div>
                    <h2 className="text-2xl font-bold text-primary">{project.title}</h2>
                    
                    {/* Business Problem Box - Now aligned with Insights box via grid items-start */}
                    <div className="bg-card border border-border/50 rounded-xl p-6 shadow-sm h-full">
                      <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">Business Problem</h3>
                      <p className="text-foreground leading-relaxed">
                        {project.problem}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {project.charts.map((chart, index) => (
                      <Card key={index} className={`border-border/50 shadow-sm ${index === 0 && project.charts.length > 2 ? 'md:col-span-2' : ''}`}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-base text-center">{chart.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="h-[300px]" style={chart.title === "Pipeline Funnel Conversion" ? { marginTop: '-23px', marginLeft: '-10px' } : undefined}>
                          {renderChart(chart)}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Right Column: Tools & Insights */}
                <div className="space-y-6 lg:mt-[92px]"> {/* Added margin-top to align with Business Problem box below title */}
                  {/* Tools Section - Swapped back to top, removed Card styling */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 px-1">
                      <Database className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-bold text-primary">Tools Used</h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tools.map((tool) => (
                        <Badge key={tool} variant="secondary" className="bg-secondary text-secondary-foreground hover:bg-secondary/80 border border-border/50">
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Insights Card */}
                  <Card className="bg-primary/5 border-primary/10 shadow-sm">
                    <CardHeader>
                      <div className="flex items-center gap-2 text-primary">
                        <Lightbulb className="h-5 w-5" />
                        <CardTitle className="text-lg">Key Insights & Impact</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-4">
                        {project.insights.map((insight, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0"></span>
                            <span>{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
}
