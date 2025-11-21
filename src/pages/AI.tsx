import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Brain, Sparkles } from "lucide-react";

const AI = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const topics = [
    {
      title: "What is Artificial Intelligence?",
      description: "Learn the fundamentals of AI and how machines can learn and make decisions.",
    },
    {
      title: "Machine Learning Basics",
      description: "Understand how computers learn from data without explicit programming.",
    },
    {
      title: "AI in Everyday Life",
      description: "Discover how AI powers recommendation systems, voice assistants, and more.",
    },
    {
      title: "Building Your First AI Model",
      description: "Step-by-step guide to creating simple AI projects for beginners.",
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Artificial Intelligence" 
        subtitle="Explore the exciting world of AI and machine learning" 
      />
      
      <section ref={ref} className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6">
          {topics.map((topic, index) => (
            <div
              key={topic.title}
              className={`relative overflow-hidden bg-card rounded-xl p-6 border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl"></div>
              
              <div className="relative flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-destructive flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  {index % 2 === 0 ? (
                    <Brain className="w-7 h-7 text-white" />
                  ) : (
                    <Sparkles className="w-7 h-7 text-white" />
                  )}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-card-foreground mb-3">
                    {topic.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {topic.description}
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

export default AI;
