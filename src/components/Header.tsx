import { Button } from "@/components/ui/button";
import { Phone, Mail, Flame } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="flex items-center justify-between py-2 text-sm text-muted-foreground">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <Phone className="h-3 w-3" />
              <span>095 93 88 11</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-3 w-3" />
              <span>info@cremazioniparisi.it</span>
            </div>
          </div>
          <div className="hidden md:block">
            <span>Servizio 24/7</span>
          </div>
        </div>

        {/* Main navigation */}
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center">
              <Flame className="h-5 w-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Cremazioni</h1>
              <p className="text-xs text-muted-foreground">Parisi Mario</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#home" className="text-sm font-medium hover:text-primary transition-colors">
              Home
            </a>
            <a href="#chi-siamo" className="text-sm font-medium hover:text-primary transition-colors">
              Chi Siamo
            </a>
            <a href="#cremazione" className="text-sm font-medium hover:text-primary transition-colors">
              Cremazione
            </a>
            <a href="#contratti" className="text-sm font-medium hover:text-primary transition-colors">
              Contratti
            </a>
            <a href="#contatti" className="text-sm font-medium hover:text-primary transition-colors">
              Contatti
            </a>
          </nav>

          <Button size="sm" className="hidden md:inline-flex">
            Richiedi Preventivo
          </Button>
        </div>
      </div>
    </header>
  );
}
