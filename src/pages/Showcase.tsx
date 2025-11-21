import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";

const Showcase = () => {
  const showcaseItems = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1581094794329-c8112c4e5190?w=400&h=400&fit=crop",
      title: "Sarah's Solar Oven",
      student: "Sarah, Grade 5",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop",
      title: "Alex's Game Design",
      student: "Alex, Grade 7",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=400&fit=crop",
      title: "Maya's Water Rocket",
      student: "Maya, Grade 6",
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=400&fit=crop",
      title: "Jordan's Animation",
      student: "Jordan, Grade 8",
    },
    {
      id: 5,
      image: "https://images.unsplash.com/photo-1581092583537-20d51b3e4e0b?w=400&h=400&fit=crop",
      title: "Emma's Robot Arm",
      student: "Emma, Grade 9",
    },
    {
      id: 6,
      image: "https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=400&h=400&fit=crop",
      title: "Liam's Circuit Board",
      student: "Liam, Grade 8",
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Student Showcase"
        subtitle="Share your final builds with the TEC REC community"
      />
      
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {showcaseItems.map((item) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg aspect-square hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs opacity-90">{item.student}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Showcase;
