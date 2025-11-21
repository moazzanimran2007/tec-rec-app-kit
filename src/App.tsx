import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Projects from "./pages/Projects";
import Showcase from "./pages/Showcase";
import Videos from "./pages/Videos";
import More from "./pages/More";
import StartClub from "./pages/StartClub";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Install from "./pages/Install";
import About from "./pages/About";
import Games from "./pages/Games";
import News from "./pages/News";
import Inventions from "./pages/Inventions";
import Toys from "./pages/Toys";
import Apps from "./pages/Apps";
import AI from "./pages/AI";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/showcase" element={<Showcase />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/games" element={<Games />} />
          <Route path="/news" element={<News />} />
          <Route path="/inventions" element={<Inventions />} />
          <Route path="/toys" element={<Toys />} />
          <Route path="/apps" element={<Apps />} />
          <Route path="/ai" element={<AI />} />
          <Route path="/more" element={<More />} />
          <Route path="/start-club" element={<StartClub />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/install" element={<Install />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
