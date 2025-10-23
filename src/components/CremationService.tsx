import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Flame, Home, Car, FileText, Clock, Heart } from "lucide-react";

const services = [
  {
    icon: Flame,
    title: "Cremazione",
    description: "Servizio di cremazione presso forno autorizzato di Misterbianco"
  },
  {
    icon: Home,
    title: "Camera Ardente",
    description: "Allestita presso residenza/domicilio del committente"
  },
  {
    icon: Car,
    title: "Feretro",
    description: "In legno, imbottitura in raso, barriera igienico contenitiva"
  },
  {
    icon: FileText,
    title: "Disbrigo Documentazione",
    description: "Per autorizzazione alla cremazione e destinazione delle ceneri"
  },
  {
    icon: Car,
    title: "Autofunebre e Operatori",
    description: "Furgone portafiori, quattro operatori qualificati per celebrazione"
  },
  {
    icon: Clock,
    title: "Prenotazione Cremazione",
    description: "Prenotazione giorno e ora cremazione presso forno di Misterbianco"
  },
  {
    icon: Heart,
    title: "Urna Cineraria",
    description: "Riconsegna della stessa ai familiari dopo la cremazione"
  }
];

export function CremationService() {
  return (
    <section id="cremazione" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Funerale con Cremazione</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Costi e come funziona. La nostra Impresa Parisi Mario opera dal 1954 
            e garantisce un intervento immediato in tutta la Sicilia.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Attenzione ai costi</h3>
              <p className="text-muted-foreground leading-relaxed">
                La nostra Impresa Parisi Mario Servizi Funebri è particolarmente attenta 
                al contenimento dei costi sia per politica ed etica aziendale e grazie 
                alla posizione di leader in Sicilia nell'ambito delle cremazioni.
              </p>
            </div>
          </div>

          <div className="relative">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Flame className="mr-2 h-5 w-5 text-primary" />
                  Servizio Completo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">
                  Intervento immediato a Catania e provincia e in tutta la Sicilia 
                  grazie alle sedi operative distribuite capillarmente su tutto il territorio siciliano.
                </CardDescription>
                <Badge variant="secondary">
                  Servizio 24/7
                </Badge>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <CardHeader>
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="group" asChild>
            <a href="#contatti">
              Contattaci
              <Clock className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
