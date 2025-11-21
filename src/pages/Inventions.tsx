import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Lightbulb } from "lucide-react";

const Inventions = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const inventions = [
    {
      title: "Solar-Powered Phone Charger",
      student: "Student Project",
      description: "A portable solar charging device designed by TEC REC students.",
    },
    {
      title: "Smart Plant Watering System",
      student: "Innovation Challenge Winner",
      description: "Automated plant care system using moisture sensors and Arduino.",
    },
    {
      title: "Recycled Material Robot",
      student: "Community Submission",
      description: "A functional robot built entirely from recycled household materials.",
    },
    {
      title: "Weather Station Kit",
      student: "Monthly Project",
      description: "DIY weather monitoring system that tracks temperature and humidity.",
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Student Inventions" 
        subtitle="Innovative creations from our TEC REC community" 
      />
      
      <section ref={ref} className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6">
          {inventions.map((invention, index) => (
            <div
              key={invention.title}
              className={`bg-card rounded-xl p-6 border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-card-foreground mb-1">
                    {invention.title}
                  </h3>
                  <p className="text-sm text-primary font-semibold">
                    {invention.student}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {invention.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Inventions;
