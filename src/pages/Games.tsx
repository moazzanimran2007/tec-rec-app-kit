import { Layout } from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const Games = () => {
  const { ref: contentRef, isVisible } = useScrollAnimation(0.1);
  const parallaxOffset = useParallax(0.5);

  const games = [
    {
      name: "Prodigy Math Game",
      image: "https://images.unsplash.com/photo-1550985616-10810253b84d?q=80&w=800",
      url: "#",
    },
    {
      name: "Bloxels",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=800",
      url: "#",
    },
    {
      name: "Geometry Dash",
      image: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?q=80&w=800",
      url: "#",
    },
  ];

  const gamesRow2 = [
    {
      name: "ChessKid",
      image: "https://images.unsplash.com/photo-1586165368502-1bad197a6461?q=80&w=800",
      url: "#",
    },
    {
      name: "QuiverVision",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800",
      url: "#",
    },
    {
      name: "Minecraft Education Edition",
      image: "https://images.unsplash.com/photo-1587731556938-38755b4803a6?q=80&w=800",
      url: "#",
    },
  ];

  return (
    <Layout showTopNav={true}>
      {/* Hero Section with Parallax */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1611996575749-79a3a250f948?q=80&w=2070)',
            transform: `translateY(${parallaxOffset}px)`,
            filter: 'grayscale(30%) brightness(1.1)',
          }}
        >
          <div className="absolute inset-0 bg-white/40"></div>
        </div>
        
        <h1 className="relative text-6xl md:text-7xl font-bold text-gray-900 z-10">
          Games
        </h1>

        {/* Curved Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12 md:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
          </svg>
        </div>
      </section>

      {/* Games Content */}
      <section ref={contentRef} className="bg-background py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* First Row of Games */}
          <div 
            className={`grid md:grid-cols-3 gap-8 mb-12 transition-all duration-700 ${
              isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
            }`}
          >
            {games.map((game, index) => (
              <div
                key={game.name}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Second Row of Games */}
          <div 
            className={`grid md:grid-cols-3 gap-8 mb-12 transition-all duration-700 ${
              isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
            }`}
            style={{ animationDelay: '0.3s' }}
          >
            {gamesRow2.map((game, index) => (
              <div
                key={game.name}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                style={{ animationDelay: `${(index + 3) * 0.1}s` }}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={game.image}
                    alt={game.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Spacing before footer */}
          <div className="h-32"></div>
        </div>
      </section>
    </Layout>
  );
};

export default Games;
