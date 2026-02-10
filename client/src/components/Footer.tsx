import { Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background py-8 mt-auto">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex flex-col items-center md:items-start gap-2">
          <p className="text-sm font-semibold text-primary">Jiyeon Park</p>
          <p className="text-xs text-muted-foreground">Bay Area, CA</p>
        </div>
        
        <div className="text-center text-sm text-muted-foreground">
          <p>Always open to chatting about data, strategy, and dogs.</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:Jiyeon.park1208@gmail.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/jiyeon-park-182b28135"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
