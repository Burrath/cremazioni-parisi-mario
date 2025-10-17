import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Tony P.",
    text: "Cortesi e professionali!!!",
    rating: 5
  },
  {
    name: "Peppe M.",
    text: "Ho trovato tanta cordialità, disponibilità e cortesia, hanno pensato a tutto loro, hanno reso meno doloroso quel momento già così triste. Non posso che ringraziare tutti, dal titolare della ditta, sempre cordialissimo e gentile, a Giuseppe, la persona che si è occupata di tutto. Grazie.",
    rating: 5
  },
  {
    name: "Marco C.",
    text: "Vivo in Germania! Lì il servizio di cremazione pensato da mamma, è civilmente utilizzato. Ma in Sicilia? E a Barcellona Pozzo di Gotto? Invece è bastata una telefonata e una serie di cuscini di azioni, parole, premure confortevoli si sono materializzate attorno alla famiglia al gentile suoni delle parole \"Tranquillo, ci pensiamo noi\"! Non mi aspettavo tanta garbata professionalità. Grazie. Sentitamente grazie.",
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Cosa Dicono di Noi</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Le testimonianze delle famiglie che si sono affidate ai nostri servizi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm text-muted-foreground">5/5</span>
                </div>
                <p className="text-sm leading-relaxed mb-4">
                  {testimonial.text}
                </p>
                <p className="text-sm font-medium text-muted-foreground">
                  {testimonial.name}
                </p>
                <p className="text-xs text-muted-foreground">Recensioni Google</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
