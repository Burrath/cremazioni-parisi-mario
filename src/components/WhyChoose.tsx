import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Leaf, Heart, Infinity, Users } from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "Una scelta ecologica",
    description: "Contro il sovraffollamento e la cementificazione cimiteriale."
  },
  {
    icon: Heart,
    title: "Vivere è un processo di continua rinascita",
    description: "Rinascita attraverso la natura, possibilità di avere un'urna biodegradabile, una vita che continua."
  },
  {
    icon: Infinity,
    title: "Nulla si crea, nulla si distrugge, tutto si trasforma",
    description: "Dispersione delle ceneri, vivere per sempre nel proprio posto del cuore."
  },
  {
    icon: Users,
    title: "Vicini per sempre",
    description: "Restare vicini ai propri cari, senza distanze."
  }
];

export function WhyChoose() {
  return (
    <section className="py-20 bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950/20 dark:to-red-950/20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Perché Scegliere la Cremazione?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            La cremazione è una pratica che ha le proprie radici nel mondo antico
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                  <reason.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{reason.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {reason.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Card className="max-w-4xl mx-auto shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Storia di un Rito Antico</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base leading-relaxed">
                La cremazione è una pratica che ha le proprie radici nel mondo antico. Fu messa in atto in Medio Oriente 
                e in Europa fin dal Neolitico. Per i Greci ed i Romani il rito della cremazione era riservato alle persone 
                più nobili. Con l'affermazione del cristianesimo nell'Impero Romano, la pratica decadde a favore dell'inumazione.
              </CardDescription>
              <CardDescription className="text-base leading-relaxed mt-4">
                Dal 1963, la Chiesa Cattolica, con l'istruzione "Piam et constantem", abolì il divieto della cremazione 
                per i fedeli. Oggi, centinaia di milioni di persone in tutto il mondo, scelgono questa pratica come ultima volontà.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
