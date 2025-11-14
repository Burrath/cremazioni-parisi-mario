import { Button } from "@/components/ui/button";
import { Phone, Mail, MessageCircle } from "lucide-react";
import logoImage from "@/assets/logo.png";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <a
                href="tel:+393484191693"
                aria-label="Chiama Cremazioni Parisi +39 348 4191693"
                className="flex items-center space-x-1 hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4 md:h-3 md:w-3" />
                <span className="hidden md:inline">Tel:</span>
                <span>+39 348 4191693</span>
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="https://wa.me/393484191693"
                aria-label="Apri WhatsApp Cremazioni Parisi +39 348 4191693"
                className="flex items-center space-x-1 hover:text-primary transition-colors"
              >
                <MessageCircle className="h-4 w-4 md:h-3 md:w-3" />
                <span className="hidden md:inline">Whatsapp:</span>
                <span>+39 348 4191693</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <a href="mailto:info@cremazioniparisi.it" className="hover:text-primary transition-colors">info@cremazioniparisi.it</a>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Servizio 24/7</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex flex-wrap items-center justify-between gap-4 py-4">
          <div className="flex items-center">
            <img src={logoImage} alt="Cremazioni Parisi Logo" className="h-10 w-auto" />
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors scroll-smooth">
              Home
            </a>
            <a href="#chi-siamo" className="text-sm font-medium hover:text-primary transition-colors scroll-smooth">
              Chi Siamo
            </a>
            <a href="#cremazione" className="text-sm font-medium hover:text-primary transition-colors scroll-smooth">
              Cremazione
            </a>
            <a href="#territorio" className="text-sm font-medium hover:text-primary transition-colors scroll-smooth">
              Territorio
            </a>
            <a href="#contratti" className="text-sm font-medium hover:text-primary transition-colors scroll-smooth">
              Contratti
            </a>
            <a href="#contatti" className="text-sm font-medium hover:text-primary transition-colors scroll-smooth">
              Dove trovarci
            </a>
          </nav>

          <Button size="sm" className="inline-flex justify-center" asChild>
            <a href="#contatti">Contattaci</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
