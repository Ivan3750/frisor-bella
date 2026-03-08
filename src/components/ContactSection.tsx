import { MapPin, Phone, Clock, Navigation } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="kontakt" className="py-20 md:py-30 relative overflow-hidden">
      <div className="absolute -right-40 bottom-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[150px]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <div className="section-badge mx-auto mb-8">
            <Navigation className="w-3.5 h-3.5" />
            Find Os
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-5 leading-tight">
            Kontakt<br />
            <span className="italic text-primary/80">& Info</span>
          </h2>
          <p className="font-body text-muted-foreground font-light max-w-md mx-auto">
            Vi glæder os til at byde dig velkommen i salonen
          </p>
        </div>

        <div className="max-w-5xl md:max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-14">
            {/* Address */}
            <div className="glass-card-hover p-9 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">Adresse</h3>
              <p className="font-body text-sm text-muted-foreground font-light leading-relaxed">
                Kattesund 12A<br />
                8700 Horsens<br />
                Danmark
              </p>
            </div>

            {/* Phone */}
            <div className="glass-card-hover p-9 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mx-auto mb-6">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">Telefon</h3>
              <a
                href="tel:42766225"
                className="font-body text-xl text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
              >
                42 76 62 25
              </a>
              <p className="font-body text-[11px] text-muted-foreground mt-2 font-light uppercase tracking-wider">
                Ring for at bestille tid
              </p>
            </div>

            {/* Hours */}
            <div className="glass-card-hover p-9 text-center">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mx-auto mb-6">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl text-foreground mb-3">Åbningstider</h3>
              <div className="font-body text-sm text-muted-foreground font-light space-y-2">
                <p>Man – Fre: 09:00 – 17:30</p>
                <p>Lørdag: 09:00 – 14:00</p>
                <p className="text-primary/50">Søndag: Lukket</p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="glass-card p-8 md:p-10">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2 leading-tight">
                  Klar til en
                </h3>
                <h3 className="font-display text-2xl md:text-3xl italic text-primary/80 mb-5">
                  ny frisure?
                </h3>
                <div className="section-divider !mx-0 !w-12 mb-6" />
                <p className="font-body text-sm text-muted-foreground font-light leading-relaxed mb-8">
                  Ring til os eller kig forbi salonen. Vi anbefaler at bestille tid i forvejen for at sikre dig en plads.
                </p>
                <a href="tel:42766225" className="btn-primary inline-block">
                  Ring & Book Nu
                </a>
              </div>
              <div className="rounded-3xl overflow-hidden">
                <iframe
                  title="Frisør Bella lokation"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2234.5!2d9.8504!3d55.8607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c9f5e5e5e5e5f%3A0x0!2sKattesund%2012A%2C%208700%20Horsens!5e0!3m2!1sda!2sdk!4v1"
                  width="100%"
                  height="280"
                  style={{ border: 0, filter: "grayscale(1) brightness(0.4) contrast(1.3)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
