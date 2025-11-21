import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Blocks } from "lucide-react";

const Toys = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const toys = [
    {
      title: "Coding Robots",
      description: "Programmable robots that teach the basics of coding through play.",
      category: "Electronics",
    },
    {
      title: "Science Experiment Kits",
      description: "Hands-on kits for chemistry, physics, and biology experiments.",
      category: "Science",
    },
    {
      title: "Building Block Sets",
      description: "Advanced building sets for creating mechanical structures.",
      category: "Engineering",
    },
    {
      title: "Circuit Playground",
      description: "Electronic components for learning circuit design and electronics.",
      category: "Electronics",
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="STEM Toys & Kits" 
        subtitle="Educational toys and kits recommended for hands-on learning" 
      />
      
      <section ref={ref} className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6">
          {toys.map((toy, index) => (
            <div
              key={toy.title}
              className={`bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Blocks className="w-7 h-7 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-card-foreground">
                      {toy.title}
                    </h3>
                    <span className="text-xs font-semibold px-3 py-1 rounded-full bg-accent/10 text-accent">
                      {toy.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {toy.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Toys;
