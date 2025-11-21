import { NavLink } from "./NavLink";
import { Home, Layers, Image, Video, Menu } from "lucide-react";

export const BottomNav = () => {
  const navItems = [
    { id: "home", label: "Home", icon: Home, path: "/" },
    { id: "projects", label: "Projects", icon: Layers, path: "/projects" },
    { id: "showcase", label: "Showcase", icon: Image, path: "/showcase" },
    { id: "videos", label: "Videos", icon: Video, path: "/videos" },
    { id: "more", label: "More", icon: Menu, path: "/more" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-card border-t border-border z-50">
      <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className="flex flex-col items-center justify-center flex-1 h-full text-muted-foreground transition-colors"
            activeClassName="text-primary"
          >
            <item.icon className="h-5 w-5 mb-1" />
            <span className="text-xs font-medium">{item.label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};
