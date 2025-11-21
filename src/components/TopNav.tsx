import { Link, useLocation } from "react-router-dom";

export const TopNav = () => {
  const location = useLocation();
  
  const navItems = [
    { label: "About", path: "/about" },
    { label: "FAQ", path: "/faq" },
    { label: "Projects", path: "/projects" },
    { label: "Showcase", path: "/showcase" },
    { label: "Videos", path: "/videos" },
    { label: "Games", path: "/games" },
    { label: "News", path: "/news" },
    { label: "Inventions", path: "/inventions" },
    { label: "Toys", path: "/toys" },
    { label: "Apps", path: "/apps" },
    { label: "AI", path: "/ai" },
  ];

  return (
    <header className="bg-[#424242] text-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="TEC REC CLUB" className="h-12" />
          <span className="text-xl font-bold">TEC REC CLUB</span>
        </Link>
        
        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`text-sm font-medium hover:text-accent transition-colors ${
                location.pathname === item.path ? 'border-b-2 border-white pb-1' : ''
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};
