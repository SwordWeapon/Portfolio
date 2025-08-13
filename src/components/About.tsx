import { Shield, Sword, Crown, Star } from "lucide-react";

const About = () => {
  const skills = [
    {
      category: "Armas de Automação",
      icon: <Sword className="h-6 w-6" />,
      items: ["Cypress", "Selenium", "Appium"]
    },
    {
      category: "Artefatos Mágicos",
      icon: <Shield className="h-6 w-6" />,
      items: ["Postman", "JMeter"]
    },
    {
      category: "Línguas Ancestrais",
      icon: <Crown className="h-6 w-6" />,
      items: ["JavaScript", "Java", "Python", "SQL"]
    },
    {
      category: "Técnicas de Combate",
      icon: <Star className="h-6 w-6" />,
      items: ["Caixa Preta", "Caixa Branca", "Testes Exploratórios"]
    }
  ];

  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-medieval font-bold text-gradient-gold mb-4">
            A Saga do Guardião
          </h2>
          <div className="w-24 h-1 bg-royal-gold mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="medieval-card p-8 space-y-6">
            <h3 className="text-2xl font-medieval font-semibold text-royal-gold mb-6">
              A Jornada do Cavaleiro Digital
            </h3>
            
            <div className="font-body text-lg leading-relaxed space-y-4 text-foreground">
              <p>
                Nas terras vastas do <strong className="text-royal-gold">Reino Digital</strong>, caminha um aventureiro chamado 
                <strong className="text-royal-red"> SwordWeapon</strong>, cujo foco é defender a qualidade das criações 
                tecnológicas como um cavaleiro defende seu castelo.
              </p>
              
              <p>
                Armado com o saber da <strong className="text-ancient-bronze">Engenharia de Qualidade de Software (EBAC)</strong> e 
                da <strong className="text-ancient-bronze">Análise e Desenvolvimento de Sistemas (Descomplica)</strong>, 
                dedica-se a forjar códigos livres de falhas, garantindo que cada funcionalidade chegue ao usuário sem 
                surpresas — como uma espada bem afiada pronta para a batalha.
              </p>
              
              <p>
                Mestre em técnicas como <em>testes de caixa preta</em>, <em>caixa branca</em> e <em>testes exploratórios</em>, 
                SwordWeapon age com precisão cirúrgica, prevenindo problemas antes que se tornem monstros indomáveis.
              </p>
              
              <p>
                De suas aventuras passadas como personal trainer e condutor de carruagem moderna (motorista de aplicativo), 
                trouxe <strong className="text-royal-gold">empatia</strong>, <strong className="text-royal-gold">escuta ativa</strong> e 
                <strong className="text-royal-gold"> foco em soluções rápidas</strong> — virtudes raras e valiosas no campo de batalha da tecnologia.
              </p>
              
              <p className="text-royal-red font-semibold">
                Hoje, busca novas missões onde possa evoluir com a guilda (time), contribuir para a qualidade das grandes 
                construções digitais e, acima de tudo, continuar aprendendo a cada amanhecer.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-medieval font-semibold text-royal-gold mb-8 text-center">
              Arsenal & Habilidades
            </h3>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {skills.map((skill, index) => (
                <div key={index} className="medieval-card p-6 hover:shadow-[var(--shadow-glow)] transition-all duration-300">
                  <div className="flex items-center space-x-3 mb-4">
                    <div className="text-royal-gold">
                      {skill.icon}
                    </div>
                    <h4 className="font-medieval font-semibold text-royal-red">
                      {skill.category}
                    </h4>
                  </div>
                  
                  <ul className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="font-body text-foreground flex items-center">
                        <span className="w-2 h-2 bg-royal-gold rounded-full mr-3 flex-shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;