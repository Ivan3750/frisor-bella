import heroImage from "@/assets/hero.jpg";
import { Scissors, MapPin, ArrowRight } from "lucide-react";

const IntroSection = () => {
  return (
    <section className="py-20 md:py-30 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl md:max-w-6xl mx-auto">
          <div className="glass-card overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image side */}
              <div className="relative aspect-[4/3] md:aspect-auto">
                <img
                  src={heroImage}
                  alt="Frisør Bella interiør"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden md:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent md:hidden" />
              </div>

              {/* Text side */}
              <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
                <div className="section-badge mb-8">
                  <Scissors className="w-3.5 h-3.5" />
                  Velkommen
                </div>

                <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground mb-3 leading-tight">
                  Mere end bare
                </h2>
                <h2 className="font-display text-3xl md:text-4xl font-normal italic text-primary/80 mb-8 leading-tight">
                  en frisør
                </h2>

                <div className="section-divider !mx-0 !w-12 mb-8" />

                <p className="font-body text-base text-muted-foreground font-light leading-[1.8] mb-5">
                  Frisør Bella er en moderne barbersalon i hjertet af Horsens, drevet af Daniel Kristensen.
                  Vi specialiserer os i skarpe skin fades, præcis skægtrimning og moderne herreklip.
                </p>
                <p className="font-body text-base text-muted-foreground font-light leading-[1.8] mb-8">
                  Hos os handler det om hele oplevelsen — en afslappet atmosfære og en frisør,
                  der husker præcis, hvad du vil have.
                </p>

               
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
