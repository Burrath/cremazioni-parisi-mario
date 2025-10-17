import { Phone, Mail, MapPin, Clock, Flame } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
                <Flame className="h-5 w-5 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Cremazioni</h3>
                <p className="text-sm text-gray-400">Parisi Mario</p>
              </div>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Impresa Parisi Mario opera dal 1954 per cremazione a Catania, 
              garantendo un intervento immediato in tutta la Sicilia.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contatti</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm">095 93 88 11</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm">info@cremazioniparisi.it</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <div className="text-sm">
                  <p>Via Vincenzo Gioberti, 7/9</p>
                  <p>95014 - Giarre (CT)</p>
                  <p>P.IVA 036338100879</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Servizi</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#cremazione" className="text-gray-300 hover:text-primary transition-colors">Cremazione</a></li>
              <li><a href="#cremazione" className="text-gray-300 hover:text-primary transition-colors">Funerali</a></li>
              <li><a href="#contratti" className="text-gray-300 hover:text-primary transition-colors">Contratti in Vita</a></li>
              <li><a href="#contatti" className="text-gray-300 hover:text-primary transition-colors">Preventivi</a></li>
              <li><a href="#contatti" className="text-gray-300 hover:text-primary transition-colors">Consulenza</a></li>
              <li><a href="#contatti" className="text-gray-300 hover:text-primary transition-colors">Emergenze</a></li>
            </ul>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Disponibilità</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-300">Servizio</span>
                <span>24/7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Emergenze</span>
                <span>24/7</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Ufficio</span>
                <span>8:00 - 18:00</span>
              </div>
            </div>
            <div className="pt-2">
              <div className="flex items-center space-x-2 text-primary">
                <Clock className="h-4 w-4" />
                <span className="text-sm font-medium">Intervento immediato</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              <p>&copy; 2024 Cremazioni Parisi Mario. Tutti i diritti riservati.</p>
              <p className="mt-1">Dal 1954 al servizio delle famiglie siciliane</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Termini di Servizio</a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
