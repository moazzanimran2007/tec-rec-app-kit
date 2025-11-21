import { Layout } from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const Videos = () => {
  const { ref: contentRef, isVisible } = useScrollAnimation(0.1);
  const parallaxOffset = useParallax(0.5);

  const featuredVideo = {
    id: "yFJp2x87H3k",
    title: "Elon Musk Just Dropped This Video of Tesla Optimus Robot",
  };

  const videoRows = [
    [
      { id: "P6SOXMGXB6g", title: "We Are the Explorers" },
      { id: "gsSzz_-KQpU", title: "3 Liquid Nitrogen Experiments You Must See" },
      { id: "8eZtC6bEq0k", title: "Space Rocks" },
    ],
    [
      { id: "xvIHF5K2fPM", title: "11 Questions About Stegosaurus" },
      { id: "ub82Xb1C8os", title: "World's Longest Ever Ski Jump" },
    ],
    [
      { id: "0O2aH4XLbto", title: "Epic Sandcastles" },
      { id: "vKA4w2O61Xo", title: "Why do Hot Things Glow?" },
      { id: "f5pMvpQ8f3c", title: "Two Geese Species" },
    ],
    [
      { id: "DXf2k8vRZFA", title: "13 Levels of Beatboxing" },
      { id: "n_6p-1J551Y", title: "Working LEGO Omni-Directional Treadmill" },
    ],
  ];

  return (
    <Layout showTopNav={true}>
      {/* Hero Section with Parallax */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ 
            backgroundImage: 'url(https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070)',
            transform: `translateY(${parallaxOffset}px)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>
        
        <h1 className="relative text-6xl md:text-7xl font-bold text-white z-10">
          Videos
        </h1>

        {/* Curved Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-12 md:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-background"></path>
          </svg>
        </div>
      </section>

      {/* Video Content */}
      <section ref={contentRef} className="bg-background py-12">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Featured Video */}
          <div 
            className={`mb-16 transition-all duration-700 ${
              isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${featuredVideo.id}`}
                title={featuredVideo.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Video Grid Rows */}
          {videoRows.map((row, rowIndex) => (
            <div 
              key={rowIndex}
              className={`grid gap-6 mb-12 transition-all duration-700 ${
                row.length === 2 ? 'md:grid-cols-2' : 'md:grid-cols-3'
              } ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'}`}
              style={{ animationDelay: `${(rowIndex + 1) * 0.15}s` }}
            >
              {row.map((video, videoIndex) => (
                <div 
                  key={videoIndex}
                  className="relative aspect-video rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
