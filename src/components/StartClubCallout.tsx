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
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-card-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-10 max-w-3xl mx-auto">
            {body}
          </p>
          
          <div className="space-y-6 mb-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-8 h-8 flex items-center justify-center flex-shrink-0 font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1 text-card-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                <CheckCircle2 className="h-6 w-6 text-accent flex-shrink-0" />
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
