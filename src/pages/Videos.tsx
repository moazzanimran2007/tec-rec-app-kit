import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Play } from "lucide-react";

const Videos = () => {
  const videos = [
    {
      id: 1,
      title: "How to Build a Solar Oven",
      thumbnail: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=225&fit=crop",
      duration: "8:32",
    },
    {
      id: 2,
      title: "Coding Basics with Scratch",
      thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=225&fit=crop",
      duration: "12:15",
    },
    {
      id: 3,
      title: "Water Rocket Launch Tutorial",
      thumbnail: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&h=225&fit=crop",
      duration: "10:47",
    },
    {
      id: 4,
      title: "Stop-Motion Animation Guide",
      thumbnail: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&h=225&fit=crop",
      duration: "15:20",
    },
    {
      id: 5,
      title: "Build a Simple Robot",
      thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=225&fit=crop",
      duration: "18:03",
    },
    {
      id: 6,
      title: "Electronic Circuits 101",
      thumbnail: "https://images.unsplash.com/photo-1581092916050-98f1b5d67c73?w=400&h=225&fit=crop",
      duration: "14:28",
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Videos"
        subtitle="Curated educational videos and student-made clips"
      />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <Card key={video.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer group">
              <div className="relative">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video object-cover"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors flex items-center justify-center">
                  <div className="bg-primary rounded-full p-4 group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-primary-foreground fill-current" />
                  </div>
                </div>
                <div className="absolute bottom-2 right-2 bg-black/80 text-white text-xs px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-card-foreground line-clamp-2">
                  {video.title}
                </h3>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Videos;
