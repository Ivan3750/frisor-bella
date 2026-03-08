import heroImage from "@/assets/hero.jpeg";
import { Sparkles, Star, ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="hjem" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Frisør Bella salon interiør" className="w-full h-full object-cover scale-105" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/70" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/3 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-[100px] animate-float" />
      <div className="absolute bottom-1/3 -right-40 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: "3s" }} />
      <div className="absolute top-20 right-20 w-2 h-2 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center pt-20">
        <div className="section-badge mx-auto mt-10 mb-10 opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <Sparkles className="w-3.5 h-3.5" />
          Barbersalon · Horsens
        </div>

        <h1
          className="font-display text-5xl md:text-7xl lg:text-8xl font-normal text-foreground mb-8 opacity-0 animate-fade-up leading-[0.9] tracking-tight"
          style={{ animationDelay: "0.4s" }}
        >
          Din stil, <span className="italic text-primary/90">vores håndværk</span>
        </h1>

        <div className="w-0 h-[2px] bg-gradient-to-r from-primary/0 via-primary to-primary/0 mx-auto mb-10 animate-line-grow" style={{ animationDelay: "0.8s" }} />

        <p
          className="font-body text-base md:text-lg text-muted-foreground max-w-lg mx-auto mb-14 opacity-0 animate-fade-up font-light leading-relaxed text-white"
          style={{ animationDelay: "0.6s" }}
        >
          Eksperter i moderne herreklip, skin fade og professionel skægpleje.
          Din frisør i hjertet af Horsens.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fade-up" style={{ animationDelay: "0.8s" }}>
          <a href="tel:42766225" className="btn-primary">Book Tid Nu</a>
          <a href="#ydelser" className="btn-outline">Se Ydelser</a>
        </div>

        {/* Stats bar */}
        <div
          className="mt-20 glass-card inline-flex items-center gap-8 md:gap-12 px-10 py-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "1s" }}
        >
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-3.5 h-3.5 text-primary fill-primary" />
              ))}
            </div>
            <span className="font-display text-lg text-foreground">4.3</span>
          </div>
          <div className="w-px h-10 bg-border/50" />
          <div className="text-center">
            <p className="font-display text-2xl text-foreground">69+</p>
            <p className="font-body text-[10px] text-muted-foreground uppercase tracking-widest">Anmeldelser</p>
          </div>
          <div className="w-px h-10 bg-border/50" />
          <div className="text-center">
            <p className="font-display text-2xl text-foreground">8+</p>
            <p className="font-body text-[10px] text-muted-foreground uppercase tracking-widest">Års erfaring</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 animate-float">
        <span className="font-body text-[10px] uppercase tracking-[0.3em] text-muted-foreground/60">Scroll</span>
        <ArrowDown className="w-4 h-4 text-muted-foreground/40" />
      </div>
    </section>
  );
};

export default HeroSection;
