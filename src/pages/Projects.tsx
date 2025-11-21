import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Card } from "@/components/ui/card";
import { Rocket, Beaker, Cpu, Palette } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Build a Solar Oven",
      category: "Science",
      icon: Beaker,
      description: "Learn about solar energy by building your own working solar oven using cardboard and aluminum foil.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      title: "Code Your First Game",
      category: "Technology",
      icon: Cpu,
      description: "Introduction to game development with Scratch. Create a fun platformer game with custom characters.",
      image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&h=300&fit=crop",
    },
    {
      id: 3,
      title: "Launch a Water Rocket",
      category: "Engineering",
      icon: Rocket,
      description: "Build and launch a water-powered rocket. Learn about Newton's laws of motion through hands-on experimentation.",
      image: "https://images.unsplash.com/photo-1516849841032-87cbac4d88f7?w=400&h=300&fit=crop",
    },
    {
      id: 4,
      title: "Create Stop-Motion Animation",
      category: "Arts",
      icon: Palette,
      description: "Explore animation principles by creating your own stop-motion video using a smartphone and everyday objects.",
      image: "https://images.unsplash.com/photo-1509248961158-e54f6934749c?w=400&h=300&fit=crop",
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Projects"
        subtitle="Monthly STEAM projects with building instructions and supplies lists"
      />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="bg-feature-icon-bg p-2 rounded-lg">
                      <Icon className="h-5 w-5 text-feature-icon-fg" />
                    </div>
                    <span className="text-sm font-semibold text-accent">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default Projects;
