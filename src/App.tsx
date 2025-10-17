import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { CremationService } from "./components/CremationService";
import { WhyChoose } from "./components/WhyChoose";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <CremationService />
      <WhyChoose />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
