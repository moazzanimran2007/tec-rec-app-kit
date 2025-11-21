import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Rocket, CircuitBoard, Beaker, Wrench } from "lucide-react";

const Projects = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const projects = [
    {
      title: "Build a Solar Oven",
      month: "March 2024",
      description: "Learn about renewable energy by constructing a working solar oven using household materials.",
      icon: Rocket,
      difficulty: "Beginner",
    },
    {
      title: "LED Circuit Design",
      month: "February 2024",
      description: "Create colorful light patterns using basic electronic components and Arduino programming.",
      icon: CircuitBoard,
      difficulty: "Intermediate",
    },
    {
      title: "Water Filtration System",
      month: "January 2024",
      description: "Design and build a water purification device using natural filtering materials.",
      icon: Beaker,
      difficulty: "Beginner",
    },
    {
      title: "Robotic Arm Prototype",
      month: "December 2023",
      description: "Construct a simple robotic arm using servos, sensors, and basic programming.",
      icon: Wrench,
      difficulty: "Advanced",
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Monthly Projects" 
        subtitle="Hands-on STEAM projects with complete instructions and supplies lists" 
      />
      
      <section ref={ref} className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={project.title}
                className={`bg-card rounded-2xl p-6 border-2 border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group ${
                  isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-primary">{project.month}</span>
                      <span className={`text-xs px-2 py-1 rounded-full font-semibold ${
                        project.difficulty === 'Beginner' ? 'bg-green-100 text-green-700' :
                        project.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {project.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground mb-2">
                      {project.title}
                    </h3>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <button className="mt-4 text-primary font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                  View Instructions
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
