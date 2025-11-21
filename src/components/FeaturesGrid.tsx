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
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          {title}
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, index) => {
            const Icon = iconMap[item.icon] || Rocket;
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-feature-icon-bg w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="h-6 w-6 text-feature-icon-fg" />
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
