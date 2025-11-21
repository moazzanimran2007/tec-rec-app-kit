import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Gamepad2, Zap, Brain, Rocket } from "lucide-react";

const Games = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const games = [
    {
      title: "Code Quest",
      description: "Learn programming basics through interactive challenges",
      icon: Zap,
      color: "from-accent to-primary",
    },
    {
      title: "Math Maze",
      description: "Solve math puzzles and navigate through digital mazes",
      icon: Brain,
      color: "from-primary to-destructive",
    },
    {
      title: "Space Explorer",
      description: "Explore the solar system and learn about planets",
      icon: Rocket,
      color: "from-destructive to-accent",
    },
    {
      title: "Circuit Builder",
      description: "Design and test electrical circuits virtually",
      icon: Gamepad2,
      color: "from-accent to-primary",
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Educational Games" 
        subtitle="Learn through play with interactive STEM games" 
      />
      
      <section ref={ref} className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6">
          {games.map((game, index) => {
            const Icon = game.icon;
            return (
              <button
                key={game.title}
                className={`group relative overflow-hidden bg-card rounded-2xl p-8 border-2 border-border hover:border-primary/50 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 text-left ${
                  isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${game.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="relative">
                  <div className="w-16 h-16 rounded-full bg-feature-icon-bg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-feature-icon-fg" />
                  </div>
                  
                  <h3 className="text-2xl font-bold mb-3 text-card-foreground">
                    {game.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {game.description}
                  </p>
                  
                  <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform duration-300">
                    Play Now
                    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Games;
