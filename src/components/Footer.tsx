import { Scissors } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-8">
          <div className="flex items-center gap-3">
            <Scissors className="w-4 h-4 text-primary" />
            <a href="#hjem" className="font-display text-2xl text-primary tracking-wide">
              Frisør Bella
            </a>
          </div>

          <div className="section-divider" />

          <p className="font-body text-xs text-muted-foreground/60 font-light tracking-wider text-center uppercase">
            © {new Date().getFullYear()} Frisør Bella · Kattesund 12A, 8700 Horsens
          </p>

          <a
            href="tel:42766225"
            className="font-body text-sm text-primary/80 hover:text-primary transition-colors duration-300 bg-primary/5 border border-primary/10 px-6 py-2.5 rounded-full"
          >
            42 76 62 25
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
