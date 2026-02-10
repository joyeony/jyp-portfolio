import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Download, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { useTheme } from "./theme-provider";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Experience & Resume", path: "/resume" },
    { name: "Data Work Showcase", path: "/showcase" },
  ];

  const scrollToDownload = () => {
    // If on resume page, scroll to download section
    if (location === "/resume") {
      const element = document.getElementById("resume-download");
      if (element) element.scrollIntoView({ behavior: "smooth" });
    } else {
      // Navigate to resume page and then scroll (handled by useEffect in Resume page)
      window.location.href = "/resume#resume-download";
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-3">
            <button 
              onClick={toggleTheme}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full p-1 relative h-10 w-10"
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              <img 
                src="/images/logo.png" 
                alt="Toggle Dark Mode" 
                className="h-10 w-10 object-contain hover:scale-110 transition-transform duration-200 cursor-pointer dark:hidden absolute inset-0"
              />
              <img 
                src="/images/logo-dark.png" 
                alt="Toggle Light Mode" 
                className="h-10 w-10 object-contain hover:scale-110 transition-transform duration-200 cursor-pointer hidden dark:block absolute inset-0"
              />
            </button>
            <Link href="/" className="text-xl font-bold tracking-tighter text-primary">
              Jiyeon Park
            </Link>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location === item.path
                  ? "text-primary border-b-2 border-accent"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">

          <Button 
            onClick={scrollToDownload}
            variant="default" 
            size="sm" 
            className="bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="flex md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <div className="container py-4 flex flex-col gap-4">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
                className={cn(
                  "text-base font-medium transition-colors hover:text-primary block py-2",
                  location === item.path
                    ? "text-primary font-bold"
                    : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex items-center gap-4 pt-4 border-t border-border/40">
              <Button 
                onClick={() => {
                  scrollToDownload();
                  setIsOpen(false);
                }}
                variant="default" 
                size="sm"
                className="w-full"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
