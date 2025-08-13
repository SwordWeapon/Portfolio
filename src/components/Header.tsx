import { useState } from "react";
import { Menu, X, Sword } from "lucide-react";
import coatOfArms from "@/assets/coat-of-arms.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 medieval-card border-b-2 border-ancient-bronze">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => scrollToSection('inicio')}>
            <img src={coatOfArms} alt="SwordWeapon Coat of Arms" className="h-10 w-10" />
            <div className="flex items-center space-x-2">
              <Sword className="h-6 w-6 text-royal-gold" />
              <span className="text-2xl font-medieval font-bold text-gradient-gold">
                SwordWeapon
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { id: 'inicio', label: 'Início' },
              { id: 'sobre', label: 'Sobre' },
              { id: 'projetos', label: 'Projetos' },
              { id: 'contato', label: 'Contato' }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-royal-gold transition-colors duration-300 font-body font-semibold relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-royal-gold transition-all duration-300 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-foreground hover:text-royal-gold transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-ancient-bronze">
            <nav className="flex flex-col space-y-4">
              {[
                { id: 'inicio', label: 'Início' },
                { id: 'sobre', label: 'Sobre' },
                { id: 'projetos', label: 'Projetos' },
                { id: 'contato', label: 'Contato' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-foreground hover:text-royal-gold transition-colors duration-300 font-body font-semibold"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;