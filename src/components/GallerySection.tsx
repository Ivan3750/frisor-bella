import serviceFade from "@/assets/service-fade.jpg";
import serviceBeard from "@/assets/service-beard.jpg";
import heroImage from "@/assets/hero-salon.jpg";
import aboutImage from "@/assets/about-barber.jpg";
import { Camera } from "lucide-react";

const images = [
  { src: serviceFade, alt: "Skin fade klipning" },
  { src: serviceBeard, alt: "Skægtrimning" },
  { src: heroImage, alt: "Salon interiør" },
  { src: aboutImage, alt: "Frisør Daniel" },
];

const GallerySection = () => {
  return (
    <section id="galleri" className="py-20 md:py-30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="section-badge mx-auto mb-8">
            <Camera className="w-3.5 h-3.5" />
            Galleri
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-5 leading-tight">
            Vores <span className="italic text-primary/80">Arbejde</span>
          </h2>
          <p className="font-body text-muted-foreground font-light max-w-md mx-auto">
            Et udvalg af klipninger og styles fra salonen
          </p>
        </div>

        <div className="max-w-5xl md:max-w-6xl mx-auto columns-1 sm:columns-2 gap-5 space-y-5">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative overflow-hidden rounded-3xl break-inside-avoid ${
                i % 2 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"
              }`}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="font-body text-sm text-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                  {img.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
