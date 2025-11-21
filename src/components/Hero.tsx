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
    <section className="relative bg-gradient-to-br from-hero-gradient-from to-hero-gradient-to text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDE2YzAtNi42MjctNS4zNzMtMTItMTItMTJzLTEyIDUuMzczLTEyIDEyIDUuMzczIDEyIDEyIDEyIDEyLTUuMzczIDEyLTEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-block">
            <img
              src={image}
              alt={alt}
              className="w-full max-w-md mx-auto rounded-lg shadow-2xl mb-6"
              onError={(e) => {
                e.currentTarget.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop";
              }}
            />
          </div>
          
          <h1 className="text-2xl md:text-3xl font-bold leading-tight">
            {headline}
          </h1>
          
          <p className="text-base md:text-lg opacity-95 max-w-2xl mx-auto">
            {subheadline}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            {primaryCta && (
              <Button
                size="lg"
                onClick={() => navigate(primaryCta.to)}
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
              >
                {primaryCta.label}
              </Button>
            )}
            {secondaryCta && (
              <Button
                size="lg"
                variant="outline"
                onClick={() => navigate(secondaryCta.to)}
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
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
