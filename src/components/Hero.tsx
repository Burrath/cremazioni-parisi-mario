import { Button } from "@/components/ui/button";
import { ArrowRight, Flame, Shield, Clock, Users } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-950/20 dark:to-red-950/20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Cremazione a{" "}
                <span className="text-primary">Catania e Provincia</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Sempre più persone in Italia optano per la cremazione come ultima volontà. 
                Si tratta di una scelta delicata ed importante affidarsi a professionisti.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="group">
                Richiedi Preventivo
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Chiama Ora
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">Competenza</h3>
                <p className="text-xs text-muted-foreground">Dal 1954</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">Affidabilità</h3>
                <p className="text-xs text-muted-foreground">40.000+ famiglie</p>
              </div>
              <div className="text-center">
                <div className="h-12 w-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-semibold text-sm">Supporto</h3>
                <p className="text-xs text-muted-foreground">Valore umano</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-orange-600/20 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="h-24 w-24 mx-auto rounded-full bg-primary/20 flex items-center justify-center">
                  <Flame className="h-12 w-12 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Cremazione</h3>
                <p className="text-muted-foreground">Con rispetto e dignità</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
