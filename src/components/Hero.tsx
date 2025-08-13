import { ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="inicio" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.6)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay pattern */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-transparent to-background/40"></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="medieval-card p-8 sm:p-12 border-ancient-bronze border-2">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-medieval font-bold mb-6">
            <span className="text-gradient-gold block mb-2">SwordWeapon</span>
            <span className="text-ink-brown text-2xl sm:text-3xl lg:text-4xl font-body drop-shadow-lg">
              Guardião da Qualidade Digital
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-ancient-bronze mb-8 font-body max-w-2xl mx-auto leading-relaxed drop-shadow-md font-semibold">
            Nas vastas terras do Reino Digital, um cavaleiro defende a qualidade das criações tecnológicas 
            com a precisão de uma espada bem afiada.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={() => scrollToSection('sobre')}
              className="hero-button"
            >
              Conheça a Jornada
            </button>
            <button 
              onClick={() => scrollToSection('projetos')}
              className="royal-button"
            >
              Ver Conquistas
            </button>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={() => scrollToSection('sobre')}
          className="text-white/80 hover:text-white transition-colors"
        >
          <ChevronDown className="h-8 w-8" />
        </button>
      </div>
    </section>
  );
};

export default Hero;