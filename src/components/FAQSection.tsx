import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Skal jeg bestille tid på forhånd?",
    a: "Vi anbefaler at bestille tid i forvejen, da vi ofte er fuldt booket. Ring til os på 42 76 62 25 for at sikre dig en tid.",
  },
  {
    q: "Hvilke betalingsmetoder accepterer I?",
    a: "Vi accepterer kontanter, MobilePay og alle gængse betalingskort.",
  },
  {
    q: "Laver I også dameklip?",
    a: "Vi specialiserer os primært i herreklip, skin fade og skægpleje. Kontakt os for at høre mere om vores tilbud.",
  },
  {
    q: "Hvor lang tid tager en klipning?",
    a: "En standard herreklip tager ca. 30 minutter. En skin fade med skægtrimning tager ca. 60 minutter.",
  },
  {
    q: "Er der parkering i nærheden?",
    a: "Ja, der er offentlig parkering tæt på salonen på Kattesund i Horsens centrum.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-20 md:py-30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <div className="section-badge mx-auto mb-8">
            <HelpCircle className="w-3.5 h-3.5" />
            Spørgsmål
          </div>
          <h2 className="font-display text-4xl md:text-5xl font-normal text-foreground mb-5 leading-tight">
            Ofte stillede<br />
            <span className="italic text-primary/80">spørgsmål</span>
          </h2>
          <p className="font-body text-muted-foreground font-light max-w-md mx-auto">
            Find svar på de mest almindelige spørgsmål
          </p>
        </div>

        <div className="max-w-5xl md:max-w-6xl mx-auto glass-card p-8 md:p-12">
          <Accordion type="single" collapsible className="space-y-1">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border/30 px-4">
                <AccordionTrigger className="font-body text-base text-foreground font-light hover:text-primary hover:no-underline py-6">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="font-body text-sm text-muted-foreground font-light leading-[1.8] pb-6">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
