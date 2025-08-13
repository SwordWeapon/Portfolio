import { Sword } from "lucide-react";

const Footer = () => {
  return (
    <footer className="medieval-card border-t-2 border-ancient-bronze py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Sword className="h-5 w-5 text-royal-gold" />
            <span className="font-medieval font-semibold text-royal-gold">SwordWeapon</span>
          </div>
          
          <p className="font-body text-muted-foreground text-center md:text-left">
            © SwordWeapon – Todos os direitos reservados.
          </p>
          
          <div className="hidden md:block">
            <span className="font-body text-muted-foreground italic">
              "A qualidade é a melhor defesa"
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;