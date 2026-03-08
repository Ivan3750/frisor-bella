import { Star, Quote } from "lucide-react";

const reviews = [
  {
    name: "Mikkel S.",
    text: "Perfekt skin fade hver eneste gang. Skarpt og præcist — turen værd, selv fra Aarhus.",
    stars: 5,
    label: "Loyal kunde",
  },
  {
    name: "Jonas H.",
    text: "God stemning og afslappet atmosfære. Man føler sig altid velkommen. Bedste frisør i Horsens.",
    stars: 5,
    label: "Fast kunde",
  },
  {
    name: "Thomas K.",
    text: "Daniel husker præcis, hvad jeg vil have. Sætter mig bare i stolen, og klipningen går i gang. Fantastisk service.",
    stars: 5,
    label: "5+ års kunde",
  },
];

const ReviewsSection = () => {
  return (
    <section id="anmeldelser" className="py-20 md:py-30 relative overflow-hidden">
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="section-badge mx-auto mb-8">
            <Star className="w-3.5 h-3.5" />
            Kunderne siger
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-5 leading-tight">
            Hvad vores kunder<br />
            <span className="italic text-primary/80">siger</span>
          </h2>
          <p className="font-body text-muted-foreground font-light max-w-md mx-auto">
            Se hvad vores kunder siger om deres oplevelse hos Frisør Bella
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl md:max-w-6xl mx-auto">
          {reviews.map((review, i) => (
            <div key={i} className="glass-card-hover p-8 md:p-9 flex flex-col">
              <Quote className="w-10 h-10 text-primary/15 mb-5" />
              <div className="flex gap-1 mb-5">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 text-primary fill-primary" />
                ))}
              </div>
              <p className="font-body text-base text-muted-foreground font-light leading-[1.8] mb-8 italic flex-1">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between pt-5 border-t border-border/30">
                <div>
                  <p className="font-body text-sm text-foreground font-medium">{review.name}</p>
                </div>
                <span className="font-body text-[10px] text-primary/60 bg-primary/10 px-3 py-1.5 rounded-full uppercase tracking-wider font-medium">
                  {review.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
