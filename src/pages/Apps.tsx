import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Smartphone } from "lucide-react";

const Apps = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const apps = [
    {
      title: "Scratch Programming",
      description: "Visual programming language for creating interactive stories and games.",
      platform: "Web, iOS, Android",
    },
    {
      title: "Tinkercad",
      description: "3D modeling and circuit simulation for beginners.",
      platform: "Web",
    },
    {
      title: "Khan Academy Kids",
      description: "Educational games and lessons for various subjects.",
      platform: "iOS, Android",
    },
    {
      title: "Arduino Science Journal",
      description: "Record and analyze data from experiments using phone sensors.",
      platform: "iOS, Android",
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Educational Apps" 
        subtitle="Recommended apps for STEM learning and exploration" 
      />
      
      <section ref={ref} className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6">
          {apps.map((app, index) => (
            <div
              key={app.title}
              className={`bg-card rounded-xl p-6 border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-card-foreground mb-2">
                    {app.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-3">
                    {app.description}
                  </p>
                  <div className="text-sm text-primary font-semibold">
                    {app.platform}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Apps;
