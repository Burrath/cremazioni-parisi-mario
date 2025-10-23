import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Car } from "lucide-react";

const cataniaAreas = [
  "Catania", "Acireale", "Paternò", "Misterbianco", "Adrano", "Giarre", "Biancavilla", "Belpasso", "Aci Catena"
];

export function Territory() {
  return (
    <section id="territorio" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Servizi a Catania e Provincia</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Cremazioni Parisi Mario offre i propri servizi di cremazione e funerali 
            a Catania e in tutta la sua provincia, garantendo professionalità e rispetto 
            in ogni comune dell'area etnea.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Copertura Provinciale</h3>
              <p className="text-muted-foreground leading-relaxed">
                Operiamo a Catania e in tutta la sua provincia, garantendo un servizio capillare 
                e professionale. La nostra esperienza e la nostra rete di collaboratori ci 
                permettono di offrire assistenza completa in ogni comune dell'area etnea.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {cataniaAreas.map((area, index) => (
                <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-3 text-center shadow-sm">
                  <span className="text-sm font-medium">{area}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <MapPin className="h-16 w-16 mx-auto text-primary" />
                <div>
                  <h3 className="text-xl font-semibold">Catania e Provincia</h3>
                  <p className="text-muted-foreground">Area etnea coperta</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Disponibilità 24/7</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                Servizio di emergenza attivo 24 ore su 24, 7 giorni su 7, 
                su tutto il territorio siciliano per garantire assistenza immediata.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Car className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Trasporto Specializzato</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                Autofunebri e mezzi specializzati per il trasporto in sicurezza 
                da ogni località siciliana al forno crematorio di Misterbianco.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="h-16 w-16 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Phone className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="text-xl">Assistenza Completa</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-sm leading-relaxed">
                Coordinamento completo delle pratiche burocratiche e assistenza 
                familiare in ogni provincia della Sicilia.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 bg-gradient-to-r from-primary/10 to-orange-600/10 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Esperienza e Professionalità</h3>
          <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            Con anni di esperienza nel settore funerario, Cremazioni Parisi Mario 
            rappresenta un punto di riferimento affidabile per le famiglie siciliane. 
            La nostra conoscenza del territorio e delle normative regionali ci permette 
            di offrire un servizio completo e personalizzato, rispettando le tradizioni 
            locali e garantendo la massima dignità in ogni momento.
          </p>
        </div>
      </div>
    </section>
  );
}
