import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const News = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  const newsItems = [
    {
      title: "New Monthly Project: 3D Printing Challenge",
      date: "March 15, 2024",
      excerpt: "This month's project focuses on learning 3D modeling and printing basics.",
    },
    {
      title: "TEC REC Club Expands to 50 Schools",
      date: "March 10, 2024",
      excerpt: "We're excited to announce that TEC REC Club has now reached 50 schools nationwide.",
    },
    {
      title: "Student Showcase: Amazing Robot Builds",
      date: "March 5, 2024",
      excerpt: "Check out the incredible robot projects submitted by our community members.",
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Latest News" 
        subtitle="Stay updated with TEC REC Club announcements and achievements" 
      />
      
      <section ref={ref} className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="space-y-6">
          {newsItems.map((item, index) => (
            <article
              key={item.title}
              className={`bg-card rounded-xl p-6 border border-border hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                <span className="text-primary font-semibold">{item.date}</span>
              </div>
              <h3 className="text-xl font-bold mb-3 text-card-foreground hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {item.excerpt}
              </p>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default News;
