import { Layout } from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const Showcase = () => {
  const parallaxOffset = useParallax(0.5);
  const { ref: gamesRef, isVisible: gamesVisible } = useScrollAnimation(0.2);
  const { ref: videosRef, isVisible: videosVisible } = useScrollAnimation(0.2);
  const { ref: galleryRef, isVisible: galleryVisible } = useScrollAnimation(0.2);

  return (
    <Layout showTopNav={true}>
      {/* Hero Section with Parallax */}
      <section 
        className="relative h-[500px] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(/placeholder.svg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${parallaxOffset}px)`,
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <h1 className="relative text-5xl md:text-7xl font-bold text-white z-10 text-center px-4">
          Share your creations
        </h1>
      </section>

      {/* Games Section */}
      <section 
        ref={gamesRef}
        className="bg-[#5a3030] py-20 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-12 transition-all duration-1000 ${gamesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">GAMES</h2>
            <p className="text-xl text-white/90">Play student-created games on your computer.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((game, index) => (
              <div
                key={game}
                className={`transition-all duration-700 ${gamesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-xl">
                  <div className="aspect-[4/3] bg-gray-200 flex items-center justify-center">
                    <div className="text-6xl">🎮</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section 
        ref={videosRef}
        className="bg-white py-20 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-12 transition-all duration-1000 ${videosVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-4">VIDEOS</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {['Battle Bots', 'Chompsaw Maze Creations', 'Edible Water Bottles Final Product'].map((video, index) => (
              <div
                key={video}
                className={`transition-all duration-700 ${videosVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >
                <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden shadow-lg flex items-center justify-center">
                  <div className="text-6xl">▶️</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section 
        ref={galleryRef}
        className="bg-[#2a2a2a] py-20 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className={`text-center mb-12 transition-all duration-1000 ${galleryVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-5xl md:text-6xl font-bold text-[#f5a623] mb-4">GALLERY</h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item, index) => (
              <div
                key={item}
                className={`transition-all duration-700 ${galleryVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square bg-gray-300 rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full flex items-center justify-center text-4xl">
                    🔧
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Showcase;
