import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { useNavigate } from "react-router-dom";
import { ChevronRight, HelpCircle, Gamepad2, Newspaper, Lightbulb, Blocks, Smartphone, Brain, Mail } from "lucide-react";

const More = () => {
  const navigate = useNavigate();

  const menuItems = [
    { label: "FAQ", route: "/faq", icon: HelpCircle },
    { label: "Games", route: "/games", icon: Gamepad2 },
    { label: "News", route: "/news", icon: Newspaper },
    { label: "Inventions", route: "/inventions", icon: Lightbulb },
    { label: "Toys", route: "/toys", icon: Blocks },
    { label: "Apps", route: "/apps", icon: Smartphone },
    { label: "AI", route: "/ai", icon: Brain },
    { label: "Contact", route: "/contact", icon: Mail },
  ];

  return (
    <Layout>
      <PageHeader title="More" subtitle="Explore additional resources and content" />
      
      <div className="container mx-auto px-4 py-8 max-w-2xl">
        <div className="bg-card rounded-lg border border-border overflow-hidden">
          {menuItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <button
                key={item.route}
                onClick={() => navigate(item.route)}
                className={`w-full flex items-center justify-between p-4 hover:bg-muted/50 transition-colors ${
                  index !== menuItems.length - 1 ? "border-b border-border" : ""
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-5 w-5 text-primary" />
                  <span className="font-medium text-card-foreground">{item.label}</span>
                </div>
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              </button>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default More;
