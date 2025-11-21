import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface NewsletterSignupProps {
  title: string;
  body: string;
  emailPlaceholder: string;
  submitLabel: string;
}

export const NewsletterSignup = ({
  title,
  body,
  emailPlaceholder,
  submitLabel,
}: NewsletterSignupProps) => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation(0.2);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Thank you!",
        description: "You've been subscribed to our newsletter.",
      });
      setEmail("");
    }
  };

  return (
    <section ref={ref} className="py-16 px-4 bg-muted/50">
      <div className={`container mx-auto max-w-2xl transition-all duration-700 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground">{body}</p>
        </div>
        
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
          <Input
            type="email"
            placeholder={emailPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1"
          />
          <Button type="submit" size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
            {submitLabel}
          </Button>
        </form>
      </div>
    </section>
  );
};
