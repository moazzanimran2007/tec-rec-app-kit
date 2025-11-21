import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#b8b8b8] text-foreground py-12 px-6 mt-20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">TEC REC CLUB</h3>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">Info</h4>
            <div className="flex flex-col gap-2">
              <Link to="/contact" className="hover:underline">Contact</Link>
              <Link to="/about" className="hover:underline">About</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
