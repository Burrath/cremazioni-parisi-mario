import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contatti" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Contattaci</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chiamaci o inviaci un messaggio, saremo lieti di rispondere alle tue domande 
            e proporti un preventivo per i nostri servizi.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Richiedi Preventivo</CardTitle>
              <CardDescription>
                Compila il form per ricevere un preventivo personalizzato
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="nome">Nome *</Label>
                  <Input id="nome" placeholder="Il tuo nome" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cognome">Cognome *</Label>
                  <Input id="cognome" placeholder="Il tuo cognome" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefono">Numero di telefono *</Label>
                <Input id="telefono" placeholder="333 123 4567" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Indirizzo E-mail *</Label>
                <Input id="email" type="email" placeholder="la-tua-email@esempio.com" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="messaggio">Messaggio</Label>
                <Textarea 
                  id="messaggio" 
                  placeholder="Descrivi le tue esigenze..."
                  className="min-h-[120px]"
                />
              </div>

              <div className="flex items-start space-x-2">
                <Checkbox id="privacy" />
                <Label htmlFor="privacy" className="text-sm leading-relaxed">
                  Acconsento al trattamento dei dati personali per essere ricontattato per avere maggiori informazioni sui servizi. (*)
                </Label>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" className="flex-1 group">
                  <Send className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  Invia Richiesta
                </Button>
                <Button size="lg" variant="outline" className="flex-1">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  WhatsApp
                </Button>
              </div>
            </CardContent>
          </Card>

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
                  <p className="font-medium">Parisi Mario</p>
                  <p>Via Vincenzo Gioberti, 7/9</p>
                  <p>95014 - Giarre (CT)</p>
                  <p>P.IVA 036338100879</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Phone className="mr-2 h-5 w-5 text-primary" />
                  Contatti
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">095 93 88 11</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">info@cremazioniparisi.it</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MessageCircle className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">WhatsApp disponibile</span>
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
                    <span>Servizio</span>
                    <span className="font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Emergenze</span>
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
              <h3 className="font-semibold text-lg mb-2">Servizio di Emergenza</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Per emergenze, il nostro servizio è disponibile 24 ore su 24, 
                7 giorni su 7. Contattaci, ti diamo supporto.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="sm" className="flex-1">
                  <Phone className="mr-2 h-3 w-3" />
                  Chiama Ora
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <MessageCircle className="mr-2 h-3 w-3" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
