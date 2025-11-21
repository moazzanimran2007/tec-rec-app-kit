import { ReactNode } from "react";
import { BottomNav } from "./BottomNav";
import { TopNav } from "./TopNav";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
  showTopNav?: boolean;
}

export const Layout = ({ children, showTopNav = false }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      {showTopNav && <TopNav />}
      <div className="pb-20">
        {children}
      </div>
      <Footer />
      <BottomNav />
    </div>
  );
};
