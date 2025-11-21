import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  image: string;
  alt: string;
  headline: string;
  subheadline: string;
  primaryCta?: { label: string; to: string };
  secondaryCta?: { label: string; to: string };
}

export const Hero = ({
  image,
  alt,
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
}: HeroProps) => {
  const navigate = useNavigate();

  return (
    <section className="relative bg-background overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={image}
          alt={alt}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex justify-center mb-8">
            <img
              src="/logo.png"
              alt="TEC REC Club Logo"
              className="h-32 md:h-40"
            />
          </div>
          
          <h1 className="text-xl md:text-2xl font-bold leading-tight text-white tracking-wide">
            {headline}
          </h1>
          
          <p className="text-sm md:text-base text-white/90 max-w-2xl mx-auto">
            {subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            {primaryCta && (
              <Button
                size="lg"
                onClick={() => navigate(primaryCta.to)}
                className="bg-accent text-black hover:bg-accent/90 font-bold px-8"
              >
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate(secondaryCta.to)}
                className="border-white text-white hover:bg-white/10"
              >
                {secondaryCta.label}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
