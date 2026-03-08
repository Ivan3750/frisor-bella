import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Forside", href: "#hjem" },
  { label: "Ydelser", href: "#ydelser" },
  { label: "Om Os", href: "#om" },
  { label: "Kontakt", href: "#kontakt" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass-header ">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#hjem" className="font-display text-2xl font-semibold tracking-wide text-primary">
          Frisør Bella
        </a>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body text-xs tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
          <a href="tel:42766225" className="ml-2 btn-primary !py-2.5 !px-6">
            Book Tid
          </a>
        </nav>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground p-2 rounded-xl hover:bg-card/60 transition-colors"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <nav className="lg:hidden border-t border-border/30 animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="font-body text-sm tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-card/60"
              >
                {item.label}
              </a>
            ))}
            <a href="tel:42766225" className="mt-3 btn-primary text-center">
              Book Tid
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
