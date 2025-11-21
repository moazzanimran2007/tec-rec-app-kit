import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

interface Step {
  title: string;
  description: string;
  link?: string;
}

interface StartClubCalloutProps {
  title: string;
  body: string;
  steps: Step[];
  ctaLabel: string;
  ctaTo: string;
}

export const StartClubCallout = ({
  title,
  body,
  steps,
  ctaLabel,
  ctaTo,
}: StartClubCalloutProps) => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-card rounded-2xl p-8 md:p-12 border-2 border-primary/20 shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-12 bg-accent rounded-full"></div>
            <div className="w-2 h-12 bg-primary rounded-full"></div>
            <div className="w-2 h-12 bg-destructive rounded-full"></div>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-card-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
            {body}
          </p>
          
          <div className="space-y-8 mb-10">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6 items-center">
                <div className="relative flex-shrink-0">
                  <div className="w-20 h-20 rounded-full border-4 border-primary bg-primary/10 flex items-center justify-center">
                    <span className="text-3xl font-bold text-primary">{index + 1}</span>
                  </div>
                </div>
                <div className="flex-1 bg-muted/50 rounded-lg p-6">
                  <h3 className="font-bold text-xl mb-2 text-card-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Button
              size="lg"
              onClick={() => navigate(ctaTo)}
              className="bg-primary hover:bg-primary/90"
            >
              {ctaLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
