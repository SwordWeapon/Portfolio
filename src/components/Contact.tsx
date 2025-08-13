import { Linkedin, MessageCircle, Mail } from "lucide-react";

const Contact = () => {
  return (
    <section id="contato" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-medieval font-bold text-gradient-gold mb-4">
            Chame para a Aventura
          </h2>
          <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
            Pronto para uma nova missão? Entre em contato e vamos construir algo épico juntos!
          </p>
          <div className="w-24 h-1 bg-royal-gold mx-auto mt-6"></div>
        </div>

        <div className="medieval-card p-12 max-w-2xl mx-auto">
          <div className="mb-8">
            <MessageCircle className="h-16 w-16 text-royal-gold mx-auto mb-6" />
            <h3 className="text-2xl font-medieval font-semibold text-royal-gold mb-4">
              Inicie uma Conversa
            </h3>
            <p className="font-body text-foreground mb-8 leading-relaxed">
              Seja para discutir uma oportunidade, compartilhar conhecimento ou simplesmente 
              trocar experiências sobre o mundo da qualidade de software, estarei sempre 
              disponível para uma boa conversa.
            </p>
          </div>

          <div className="space-y-6">
            <a
              href="https://www.linkedin.com/in/mthqa/"
              target="_blank"
              rel="noopener noreferrer"
              className="hero-button inline-flex items-center space-x-3 group"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
              <span className="text-lg">Entrar em Contato</span>
            </a>
            
            <p className="font-body text-muted-foreground text-sm">
              Clique para acessar meu perfil profissional no LinkedIn
            </p>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex justify-center items-center space-x-8 text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-royal-gold" />
                <span className="font-body">Resposta rápida</span>
              </div>
              <div className="flex items-center space-x-2">
                <MessageCircle className="h-5 w-5 text-royal-gold" />
                <span className="font-body">Disponível para networking</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;