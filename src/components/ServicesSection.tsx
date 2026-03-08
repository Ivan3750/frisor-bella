import serviceFade from "@/assets/img.jpeg";
import serviceBeard from "@/assets/service-beard.jpg";
import { Scissors, Clock, Award, Users, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Skin Fade",
    description: "Perfekt gradueret fade ned til bar hud. Skarpt, præcist og moderne — hver eneste gang.",
    image: serviceFade,
  },
  {
    title: "Skægtrimning",
    description: "Professionel skægtrimning og formning. En velplejet skæg er en central del af dit udtryk.",
    image: serviceBeard,
  },
];

const additionalServices = [
  { name: "Herreklip", price: "250 kr", duration: "30 min" },
  { name: "Skin Fade", price: "300 kr", duration: "45 min" },
  { name: "Skægtrimning", price: "150 kr", duration: "20 min" },
  { name: "Klip + Skæg", price: "400 kr", duration: "60 min" },
  { name: "Børneklip (0-12 år)", price: "180 kr", duration: "20 min" },
  { name: "Styling & Vask", price: "100 kr", duration: "15 min" },
];

const highlights = [
  { icon: Award, label: "Premium kvalitet", desc: "Top-bedømt i Horsens" },
  { icon: Clock, label: "Flexible tider", desc: "Man–Lør åben" },
  { icon: Users, label: "Loyal kundebase", desc: "Kunder fra hele Danmark" },
];

const ServicesSection = () => {
  return (
    <section id="ydelser" className="py-20 md:py-30 relative">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="section-badge mx-auto mb-8">
            <Scissors className="w-3.5 h-3.5" />
            Hvad vi tilbyder
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-5 leading-tight">
            Vores <span className="italic text-primary/80">Ydelser</span>
          </h2>
          <p className="font-body text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
            Specialiserede behandlinger med fokus på moderne teknikker og personlig service
          </p>
        </div>

        <div className="max-w-5xl md:max-w-6xl mx-auto">
          {/* Highlights row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-20">
            {highlights.map((h, i) => (
              <div key={i} className="glass-card-hover p-7 flex items-center gap-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center flex-shrink-0">
                  <h.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-body text-sm text-foreground font-medium mb-0.5">{h.label}</p>
                  <p className="font-body text-xs text-muted-foreground font-light">{h.desc}</p>
                </div>
              </div>
            ))}
          </div>
 
          {/* Price list */}
          <div className="glass-card p-10 md:p-14">
            <div className="text-center mb-12">
              <h3 className="font-display text-3xl text-foreground mb-3">Prisliste</h3>
              <div className="section-divider" />
            </div>
            <div className="max-w-5xl mx-auto">
              {additionalServices.map((service, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between py-5 border-b border-border/30 last:border-0 group hover:bg-primary/5 px-5 -mx-5 rounded-2xl transition-all duration-500"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary transition-colors duration-300" />
                    <div>
                      <span className="font-body text-base text-foreground font-light block">{service.name}</span>
                      <span className="font-body text-[11px] text-muted-foreground flex items-center gap-1.5 mt-0.5">
                        <Clock className="w-3 h-3" /> {service.duration}
                      </span>
                    </div>
                  </div>
                  <span className="font-body text-sm text-primary tracking-wider font-semibold">
                    {service.price}
                  </span>
                </div>
              ))}
            </div>
            <div className="mt-10 text-center">
              <a href="tel:42766225" className="btn-primary inline-block">
                Ring & Book
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
