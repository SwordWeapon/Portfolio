import { ExternalLink, Github, Code, Shield, Gamepad2, Zap, Users } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "ChatWeb",
      description: "Uma aplicação web inovadora para comunicação e interação digital, demonstrando habilidades em desenvolvimento front-end e integração de APIs.",
      tech: ["Web Development", "JavaScript", "API Integration"],
      icon: <Code className="h-6 w-6" />,
      link: "https://github.com/SwordWeapon/ChatWeb",
      color: "royal-gold"
    },
    {
      title: "CypressEbac",
      description: "Projeto educacional focado em automação de testes com Cypress, desenvolvido durante o curso da EBAC para demonstrar técnicas avançadas de QA.",
      tech: ["Cypress", "Test Automation", "Quality Assurance"],
      icon: <Shield className="h-6 w-6" />,
      link: "https://github.com/SwordWeapon/CypressEbac",
      color: "royal-red"
    },
    {
      title: "Projeto Teste Automatizado Cypress",
      description: "Suite completa de testes automatizados utilizando Cypress, showcasing das melhores práticas em automação e validação de aplicações web.",
      tech: ["Cypress", "E2E Testing", "Automation"],
      icon: <Zap className="h-6 w-6" />,
      link: "https://github.com/SwordWeapon/projeto-teste-automatizado-cypress",
      color: "ancient-bronze"
    },
    {
      title: "Projetinho Pokédex",
      description: "Uma aplicação divertida e interativa que lista e exibe informações de Pokémon, demonstrando skills em consumo de APIs e design responsivo.",
      tech: ["JavaScript", "API", "Responsive Design"],
      icon: <Gamepad2 className="h-6 w-6" />,
      link: "https://github.com/SwordWeapon/projetinho-pokedex",
      color: "royal-gold"
    },
    {
      title: "LuizPauloAvante70",
      description: "Projeto colaborativo focado em desenvolvimento de soluções personalizadas, demonstrando capacidade de trabalho em equipe e adaptabilidade.",
      tech: ["Collaboration", "Custom Solutions", "Team Work"],
      icon: <Users className="h-6 w-6" />,
      link: "https://github.com/SwordWeapon/LuizPauloAvante70",
      color: "royal-red"
    }
  ];

  return (
    <section id="projetos" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-medieval font-bold text-gradient-gold mb-4">
            Conquistas & Artefatos
          </h2>
          <p className="text-xl font-body text-muted-foreground max-w-2xl mx-auto">
            As batalhas vencidas e os tesouros forjados ao longo da jornada no Reino Digital
          </p>
          <div className="w-24 h-1 bg-royal-gold mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="medieval-card p-6 hover:shadow-[var(--shadow-glow)] transition-all duration-300 group hover:scale-105"
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className={`text-${project.color} group-hover:scale-110 transition-transform duration-300`}>
                  {project.icon}
                </div>
                <h3 className="text-xl font-medieval font-semibold text-royal-gold">
                  {project.title}
                </h3>
              </div>
              
              <p className="font-body text-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-muted rounded-full text-sm font-body text-muted-foreground border border-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center justify-between">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-royal-gold hover:text-royal-red transition-colors font-body font-semibold"
                >
                  <Github className="h-5 w-5" />
                  <span>Ver Código</span>
                </a>
                
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 royal-button py-2 px-4 text-sm"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>Explorar</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;