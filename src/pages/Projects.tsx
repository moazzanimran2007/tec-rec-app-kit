import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const otherActivities = [
    {
      title: "WEB BLASTER",
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
    },
    {
      title: "MARBLE MAZE",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=400&fit=crop",
    },
    {
      title: "BLOXELS",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=400&fit=crop",
    },
  ];

  return (
    <Layout showTopNav>
      {/* Hero Section with Background Image */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?w=1200&h=600&fit=crop"
          alt="Projects"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#4a7c8a]/70 to-[#4a7c8a]/90"></div>
        <h1 className="relative text-6xl md:text-7xl font-bold text-white z-10">
          Projects
        </h1>
      </section>

      {/* Project of the Month Section */}
      <section className="bg-[#b8b8b8] py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground tracking-wide">
            PROJECT OF THE MONTH
          </h2>
          
          {/* YouTube Embed */}
          <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden shadow-2xl mb-8">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="TEC REC CLUB - Cool Car Challenge"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0"
            ></iframe>
          </div>

          {/* Start Building Button */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-black font-bold text-lg px-12 py-6 rounded-md"
            >
              Start Building
            </Button>
          </div>
        </div>
      </section>

      {/* Other Activities Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground tracking-wide">
            OTHER ACTIVITIES
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {otherActivities.map((activity) => (
              <div key={activity.title} className="text-center group cursor-pointer">
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                  <img
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-foreground tracking-wide">
                  {activity.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
