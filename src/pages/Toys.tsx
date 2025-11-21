import { Layout } from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const Toys = () => {
  const { ref: videoRef, isVisible: videoVisible } = useScrollAnimation(0.2);
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation(0.2);
  const parallaxOffset = useParallax(0.5);

  const videos = [
    { id: "e8rURjYzmPc", title: "120 Coolest TOYS On Amazon That Are ACTUALLY Worth It!" },
    { id: "qZPn8xBpLKk", title: "Dr. STEM Toys V8 Model Engine for Kids" },
    { id: "Qj9iHUbHzQc", title: "Is This the Best STEM Toy of the Year?" },
    { id: "xvIuAZ7cPbI", title: "Air Toobz" },
    { id: "K7qO3w-x0uQ", title: "17 Best AI Robot Pets You Can Buy from" },
  ];

  return (
    <Layout showTopNav={true}>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/lego-bg.jpg')",
            transform: `translateY(${parallaxOffset}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="relative z-10 text-center px-4">
          <h1 
            className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in"
            style={{ 
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              animationDelay: '0.2s',
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            Toys
          </h1>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            className="relative block w-full h-[60px]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-[#f59e0b]"
            />
          </svg>
        </div>
      </section>

      {/* Featured Video Section */}
      <section 
        ref={videoRef}
        className="bg-[#f59e0b] py-12 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div 
            className={`transition-all duration-1000 ${
              videoVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div className="relative w-full rounded-xl overflow-hidden shadow-2xl" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videos[0].id}`}
                title={videos[0].title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Grid Section */}
      <section 
        ref={gridRef}
        className="bg-[#f59e0b] pb-20 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-6">
            {videos.slice(1).map((video, index) => (
              <div
                key={video.id}
                className={`transition-all duration-1000 ${
                  gridVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 0.15}s`
                }}
              >
                <div className="relative w-full rounded-xl overflow-hidden shadow-xl" style={{ paddingBottom: '56.25%' }}>
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Toys;
