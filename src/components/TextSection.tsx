import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface TextSectionProps {
  title: string;
  body: string;
}

export const TextSection = ({ title, body }: TextSectionProps) => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  
  return (
    <section ref={ref} className="py-16 px-4 bg-secondary/30">
      <div className={`container mx-auto max-w-4xl transition-all duration-700 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0 translate-y-10'}`}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-foreground">
          {title}
        </h2>
        <p className="text-lg text-muted-foreground leading-relaxed text-center">
          {body}
        </p>
      </div>
    </section>
  );
};
