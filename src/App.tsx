import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CremationService } from "./components/CremationService";
import { Territory } from "./components/Territory";
import { WhyChoose } from "./components/WhyChoose";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900 dark:to-gray-900">
      <Header />
      <Hero />
      <CremationService />
      <Territory />
      <WhyChoose />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
