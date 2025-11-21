import { NavLink } from "./NavLink";
import { Home, Layers, Image, Video, Gamepad2, Newspaper, Lightbulb, Blocks, Smartphone, Brain, HelpCircle, Info } from "lucide-react";

export const BottomNav = () => {
  const navItems = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "about", label: "About", icon: Info, path: "/about" },
    { id: "faq", label: "FAQ", icon: HelpCircle, path: "/faq" },
    { id: "projects", label: "Projects", icon: Layers, path: "/projects" },
    { id: "showcase", label: "Showcase", icon: Image, path: "/showcase" },
    { id: "videos", label: "Videos", icon: Video, path: "/videos" },
    { id: "games", label: "Games", icon: Gamepad2, path: "/games" },
    { id: "news", label: "News", icon: Newspaper, path: "/news" },
    { id: "inventions", label: "Inventions", icon: Lightbulb, path: "/inventions" },
    { id: "toys", label: "Toys", icon: Blocks, path: "/toys" },
    { id: "apps", label: "Apps", icon: Smartphone, path: "/apps" },
    { id: "ai", label: "AI", icon: Brain, path: "/ai" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t-2 border-border z-50 shadow-lg">
      <div className="overflow-x-auto scrollbar-hide">
        <div className="flex min-w-max px-2">
          {navItems.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              className="flex flex-col items-center justify-center px-4 py-2 min-w-[80px] text-muted-foreground transition-all duration-200 hover:text-primary"
              activeClassName="text-primary bg-primary/5"
            >
              <item.icon className="h-5 w-5 mb-1" />
              <span className="text-xs font-medium whitespace-nowrap">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};
