import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Heart, MessageCircle, Share2 } from "lucide-react";

const Showcase = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const showcaseItems = [
    {
      student: "Alex M.",
      project: "Solar-Powered Car",
      description: "Modified the March project to include a custom chassis and improved solar panels!",
      likes: 45,
    },
    {
      student: "Sarah K.",
      project: "LED Music Visualizer",
      description: "Created a sound-reactive LED display that syncs with music beats.",
      likes: 38,
    },
    {
      student: "James L.",
      project: "Mini Weather Station",
      description: "Built a complete weather monitoring system with temperature, humidity, and pressure sensors.",
      likes: 52,
    },
    {
      student: "Emma R.",
      project: "Recycled Robot",
      description: "Designed a robot using 100% recycled materials from around the house.",
      likes: 67,
    },
    {
      student: "Michael T.",
      project: "3D Printed Drone",
      description: "Created custom drone parts with 3D printing and assembled a working quadcopter.",
      likes: 91,
    },
    {
      student: "Olivia P.",
      project: "Smart Plant Monitor",
      description: "Arduino-based system that monitors soil moisture and sends alerts when plants need water.",
      likes: 43,
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Student Showcase" 
        subtitle="Amazing projects from our global TEC REC community" 
      />
      
      <section ref={ref} className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-6">
          {showcaseItems.map((item, index) => (
            <div
              key={`${item.student}-${item.project}`}
              className={`bg-card rounded-xl overflow-hidden border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 group ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-48 bg-gradient-to-br from-primary/20 via-accent/20 to-destructive/20 flex items-center justify-center">
                <div className="text-6xl">🚀</div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-bold text-primary">
                    {item.student.charAt(0)}
                  </div>
                  <span className="text-sm font-semibold text-card-foreground">{item.student}</span>
                </div>
                <h3 className="text-lg font-bold text-card-foreground mb-2">
                  {item.project}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>{item.likes}</span>
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <MessageCircle className="w-4 h-4" />
                  </button>
                  <button className="flex items-center gap-1 hover:text-primary transition-colors">
                    <Share2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Showcase;
