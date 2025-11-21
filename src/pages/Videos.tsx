import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Play, Clock } from "lucide-react";

const Videos = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const videos = [
    {
      title: "How to Build a Solar Oven",
      duration: "12:45",
      category: "Project Tutorial",
      views: "2.3K",
    },
    {
      title: "Introduction to Circuit Design",
      duration: "18:30",
      category: "Educational",
      views: "4.1K",
    },
    {
      title: "3D Printing Basics for Beginners",
      duration: "15:20",
      category: "Tutorial",
      views: "5.7K",
    },
    {
      title: "Student Showcase: Amazing Robots",
      duration: "10:15",
      category: "Showcase",
      views: "3.2K",
    },
    {
      title: "Coding Your First Arduino Project",
      duration: "22:40",
      category: "Programming",
      views: "6.8K",
    },
    {
      title: "Science Experiments at Home",
      duration: "14:55",
      category: "Science",
      views: "4.5K",
    },
  ];

  return (
    <Layout>
      <PageHeader 
        title="Educational Videos" 
        subtitle="Tutorials, demonstrations, and student-created content" 
      />
      
      <section ref={ref} className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <div
              key={video.title}
              className={`group bg-card rounded-xl overflow-hidden border-2 border-border hover:border-primary/50 hover:shadow-xl transition-all duration-500 hover:-translate-y-1 cursor-pointer ${
                isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-40 bg-gradient-to-br from-destructive/30 via-primary/30 to-accent/30 flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
                <div className="relative w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <span className="text-xs font-semibold px-2 py-1 rounded-full bg-primary/10 text-primary">
                  {video.category}
                </span>
                <h3 className="text-base font-bold text-card-foreground mt-3 mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{video.views} views</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Videos;
