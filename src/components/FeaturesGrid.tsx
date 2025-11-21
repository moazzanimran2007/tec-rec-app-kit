import { Rocket, Image as ImageIcon, MapPin, Gamepad2 } from "lucide-react";

interface Feature {
  icon: string;
  title: string;
  body: string;
}

interface FeaturesGridProps {
  title: string;
  items: Feature[];
}

const iconMap: Record<string, any> = {
  project: Rocket,
  showcase: ImageIcon,
  passport: MapPin,
  play: Gamepad2,
};

export const FeaturesGrid = ({ title, items }: FeaturesGridProps) => {
  return (
    <section className="py-16 px-4 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-center gap-2 mb-3">
          <div className="w-1.5 h-8 bg-accent rounded-full"></div>
          <div className="w-1.5 h-8 bg-primary rounded-full"></div>
          <div className="w-1.5 h-8 bg-destructive rounded-full"></div>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          {title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] || Rocket;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <div className="relative mb-4">
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent via-primary to-destructive rounded-full blur opacity-25 group-hover:opacity-75 transition"></div>
                  <div className="relative bg-feature-icon-bg w-16 h-16 rounded-full flex items-center justify-center border-2 border-primary/20">
                    <Icon className="h-8 w-8 text-feature-icon-fg" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-card-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
