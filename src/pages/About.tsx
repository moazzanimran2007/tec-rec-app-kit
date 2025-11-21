import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const About = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <Layout>
      <PageHeader 
        title="About TEC REC Club" 
        subtitle="Our mission to inspire the next generation of innovators" 
      />
      
      <section ref={ref} className="container mx-auto px-4 py-8 max-w-4xl">
        <div className={`space-y-8 ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}>
          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 text-card-foreground">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              TEC REC Club serves as a bridge to Silicon Valley and tech centers around the world, 
              providing students with access to cutting-edge ideas and technologies. We offer 
              innovative projects that put academic learning into practice in fun and inspiring ways.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Our clubs complement classroom instruction, providing safe, curated, and stimulating 
              learning opportunities. Our goal is to inspire, instruct, and entertain students so 
              they learn without even realizing they are "learning".
            </p>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border">
            <h2 className="text-2xl font-bold mb-4 text-card-foreground">What We Do</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">●</span>
                <span>Monthly hands-on STEAM projects with building instructions</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">●</span>
                <span>Global community for sharing student creations and ideas</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">●</span>
                <span>Activities passport to track progress across subjects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary mt-1">●</span>
                <span>Curated database of educational content and games</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
