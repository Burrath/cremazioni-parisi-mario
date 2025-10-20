import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contatti" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Dove Trovarci</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contattaci per qualsiasi esigenza relativa ai servizi di cremazione
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-primary" />
                  La Nostra Sede
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="font-medium">Cremazioni Parisi Mario</p>
                  <p>Viale Don Minzoni, 12</p>
                  <p>95014 - Giarre (CT)</p>
                  <p>C.F. 9203321087</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-primary" />
                  Contatti Diretti
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <a href="tel:+393484191693" className="font-medium hover:text-primary transition-colors">+39 348 419 1693</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <a href="mailto:info@cremazioniparisi.it" className="font-medium hover:text-primary transition-colors">info@cremazioniparisi.it</a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-4 w-4 text-muted-foreground" />
                    <a href="https://wa.me/393484191693" className="font-medium hover:text-primary transition-colors">WhatsApp disponibile</a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Clock className="mr-2 h-5 w-5 text-primary" />
                  Disponibilità
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Servizi Funebri</span>
                    <span className="font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cremazione</span>
                    <span className="font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Ufficio</span>
                    <span className="font-medium">8:00 - 18:00</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="bg-gradient-to-r from-primary/10 to-orange-600/10 rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Emergenza 24/7</h3>
              <p className="text-sm text-muted-foreground mb-4">
                In caso di emergenza, il nostro servizio è disponibile 24 ore su 24, 
                7 giorni su 7. Siamo qui per supportarvi in ogni momento.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="sm" className="flex-1" asChild>
                  <a href="tel:+393484191693">
                    <Phone className="mr-2 h-3 w-3" />
                    Chiama Ora
                  </a>
                </Button>
                <Button size="sm" variant="outline" className="flex-1" asChild>
                  <a href="https://wa.me/393484191693">
                    <MessageCircle className="mr-2 h-3 w-3" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="space-y-6">
            <Card className="h-96">
              <CardContent className="p-6 h-full flex items-center justify-center">
                <div className="text-center space-y-4">
                  <MapPin className="h-16 w-16 mx-auto text-muted-foreground" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Viale Don Minzoni, 12</h3>
                    <p className="text-muted-foreground">95014 - Giarre (CT)</p>
                  </div>
                  <Button variant="outline" asChild>
                    <a href="https://maps.google.com/?q=Viale+Don+Minzoni+12+95014+Giarre+CT" target="_blank" rel="noopener noreferrer">
                      Apri in Google Maps
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}