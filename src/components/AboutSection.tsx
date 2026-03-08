  import aboutImage from "@/assets/about-barber.jpg";
  import { CheckCircle2 } from "lucide-react";

  const strengths = [
    "Ekspert i moderne skin fade",
    "Professionel skægtrimning",
    "Personlig og dedikeret service",
    "Husker dine præferencer",
    "Afslappet og indbydende atmosfære",
  ];

const AboutSection = () => {
  return (
    <section id="om" className="py-20 md:py-30 relative overflow-hidden">
      <div className="absolute -right-60 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl md:max-w-6xl mx-auto glass-card p-8 md:p-12 lg:p-16">
          <div className="grid md:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Placeholder instead of image */}
            <div className="relative">
              <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-primary/10 flex items-center justify-center">
                <p className="text-muted-foreground text-sm text-center px-6">Dit foto kommer her</p>
              </div>
            </div>

            <div>
              <div className="section-badge mb-8">Om Frisør Bella</div>
              <h2 className="font-display text-3xl md:text-4xl font-normal text-foreground mb-2 leading-tight">
                Mød <span className="italic text-primary/80">Daniel</span>
              </h2>

              <div className="section-divider !mx-0 !w-12 mb-8 mt-6" />

              <div className="space-y-4 font-body text-base text-muted-foreground font-light leading-[1.8] mb-10">
                <p>
                  Med mange års erfaring har Daniel opbygget et stærkt ry for præcision og kvalitet.
                  Hans specialer er moderne skin fades og professionel skægpleje — altid udført med
                  omhu og øje for detaljen.
                </p>
                <p>
                  Salonen er kendt for sin afslappede atmosfære, hvor hver kunde behandles som en ven.
                  Det er denne kombination af håndværk og varme, der gør Frisør Bella unik.
                </p>
              </div>

              <div className="space-y-4">
                {strengths.map((s, i) => (
                  <div key={i} className="flex items-center gap-3.5 group">
                    <CheckCircle2 className="w-4 h-4 text-primary/60 group-hover:text-primary flex-shrink-0 transition-colors duration-300" />
                    <span className="font-body text-sm text-foreground/70 group-hover:text-foreground/90 transition-colors duration-300">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
  export default AboutSection;
