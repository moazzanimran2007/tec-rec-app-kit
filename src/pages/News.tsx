import { Layout } from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const News = () => {
  const parallaxOffset = useParallax(0.5);
  const { ref: featuredRef, isVisible: featuredVisible } = useScrollAnimation(0.2);
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.2);

  const newsStories = [
    {
      title: "Super Harvest Moon, 2 meteor showers to light up October nights",
      image: "https://images.unsplash.com/photo-1532693322450-2cb5c511067d?w=800&q=80",
      highlighted: false
    },
    {
      title: "Brains don't all act their age",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80",
      highlighted: false
    },
    {
      title: "Meet the two boys trying to save Scottish oysters",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      highlighted: false
    },
    {
      title: "Robot umpires will take the field at Major League Baseball",
      image: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=800&q=80",
      highlighted: false
    },
    {
      title: "Seismic waves suggest Mars has a solid heart",
      image: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80",
      highlighted: false
    },
    {
      title: "Life Size Camel Sculptures Found in Arabian Desert",
      image: "https://images.unsplash.com/photo-1583836094343-b01e9a1f5f5e?w=800&q=80",
      highlighted: true
    },
    {
      title: "'Last of Us'-type fungus lived alongside dinosaurs",
      image: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=800&q=80",
      highlighted: false
    },
    {
      title: "Men attempt record by popping balloons",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      highlighted: false
    },
    {
      title: "A newly discovered black hole 300 million times the size of the sun is a portal back in time",
      image: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80",
      highlighted: false
    },
    {
      title: "Commuter traffic stops for whales on Australia's humpback highway",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
      highlighted: false
    },
    {
      title: "Humanoid Robots Run a Chinese Half-Marathon Alongside Human Competitors",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80",
      highlighted: false
    },
    {
      title: "This photo of the nearby Sculptor galaxy spans 65,000 light years",
      image: "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800&q=80",
      highlighted: false
    },
    {
      title: "What AI Really Can Do Now: 6 Lessons for Harnessing Artificial Intelligence",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
      highlighted: false
    },
    {
      title: "See Kenya's wildlife in a different light: on horseback",
      image: "https://images.unsplash.com/photo-1516426122078-c23e76319801?w=800&q=80",
      highlighted: false
    },
    {
      title: "Quantum Vacuum Breakthrough: Oxford Physicists Make Light Emerge From \"Nothing\"",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80",
      highlighted: true
    },
    {
      title: "Scientists Uncover \"Alien\" Chemistry Under Earth's Largest Lithium Deposits",
      image: "https://images.unsplash.com/photo-1518152006812-edab29b069ac?w=800&q=80",
      highlighted: false
    },
    {
      title: "Fish Are Smarter Than Previously Thought, Scientists Reveal",
      image: "https://images.unsplash.com/photo-1535591273668-578e31182c4f?w=800&q=80",
      highlighted: false
    }
  ];

  return (
    <Layout showTopNav>
      {/* Hero Section */}
      <section className="relative h-[400px] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=1600&q=80')",
            transform: `translateY(${parallaxOffset}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative h-full flex items-center justify-center">
          <h1 className="text-7xl font-bold text-white">News</h1>
        </div>
        {/* Curved wave divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Featured Story Section */}
      <section 
        ref={featuredRef}
        className={`container mx-auto px-4 py-16 transition-all duration-1000 ${
          featuredVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="max-w-4xl mx-auto">
          <img 
            src="https://images.unsplash.com/photo-1533158326339-7f3cf2404354?w=1200&q=80"
            alt="Parachute"
            className="w-full h-auto rounded-lg shadow-lg mb-6"
          />
          <h2 className="text-4xl font-bold text-center border-b-2 border-black pb-2 inline-block w-full">
            These parachutes unfurl thanks to the Japanese art of kirigami
          </h2>
        </div>
      </section>

      {/* News Grid Section */}
      <section 
        ref={gridRef}
        className="container mx-auto px-4 pb-20"
      >
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          {newsStories.map((story, index) => (
            <article
              key={index}
              className={`transition-all duration-700 ${
                gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ 
                transitionDelay: `${index * 0.1}s`
              }}
            >
              <div className="mb-4 overflow-hidden rounded-lg">
                <img 
                  src={story.image}
                  alt={story.title}
                  className="w-full h-64 object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              <h3 className={`text-2xl font-bold border-b-2 pb-2 ${
                story.highlighted ? 'text-red-600 border-red-600' : 'text-black border-black'
              }`}>
                {story.title}
              </h3>
            </article>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default News;
