import { Layout } from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const Apps = () => {
  const { ref: appsRef, isVisible: appsVisible } = useScrollAnimation(0.2);
  const parallaxOffset = useParallax(0.5);

  const apps = [
    {
      name: "Canva",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Canva_icon_2021.svg/240px-Canva_icon_2021.svg.png",
      description: "Online design and publishing tool.",
    },
    {
      name: "CapCut",
      logo: "https://cdn.worldvectorlogo.com/logos/capcut.svg",
      description: "Video editing software great for video editing.",
    },
    {
      name: "GarageBand",
      logo: "https://upload.wikimedia.org/wikipedia/en/thumb/3/35/GarageBand_iOS_icon.svg/200px-GarageBand_iOS_icon.svg.png",
      description: "Create, record, edit, and mix music using virtual instruments, loops, and effect.",
    },
    {
      name: "Hour of Code",
      logo: "https://code.org/images/hour-of-code-logo.png",
      description: "Offers fun and engaging coding activities for students of all ages and backgrounds.",
    },
    {
      name: "Tinkercad",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tinkercad_logo.svg/320px-Tinkercad_logo.svg.png",
      description: "Web app for 3D design, electronics, and coding.",
    },
    {
      name: "Adobe Firefly",
      logo: "https://www.adobe.com/content/dam/cc/us/en/creativecloud/max2023/mnemonics/firefly.svg",
      description: "Create stunning images, audio, and now video, all in one place",
    },
  ];

  return (
    <Layout showTopNav={true}>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/apps-hero-bg.jpg')",
            transform: `translateY(${parallaxOffset}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
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
            Apps
          </h1>
        </div>
      </section>

      {/* Apps Grid Section */}
      <section 
        ref={appsRef}
        className="bg-background py-16 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            {apps.map((app, index) => (
              <div
                key={app.name}
                className={`flex flex-col items-center text-center transition-all duration-1000 ${
                  appsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ 
                  transitionDelay: `${index * 0.15}s`
                }}
              >
                <div className="w-48 h-48 mb-6 flex items-center justify-center">
                  <img 
                    src={app.logo} 
                    alt={app.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.currentTarget.src = 'https://via.placeholder.com/200x200?text=' + app.name;
                    }}
                  />
                </div>
                <h3 className="text-foreground text-2xl font-semibold mb-4">
                  {app.name}
                </h3>
                <p className="text-foreground text-lg leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apps;
