import { Layout } from "@/components/Layout";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";

const AI = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation(0.2);
  const { ref: toolsRef, isVisible: toolsVisible } = useScrollAnimation(0.2);
  const { ref: expectRef, isVisible: expectVisible } = useScrollAnimation(0.2);
  const { ref: impactRef, isVisible: impactVisible } = useScrollAnimation(0.2);
  const { ref: youngRef, isVisible: youngVisible } = useScrollAnimation(0.2);
  const { ref: valleyRef, isVisible: valleyVisible } = useScrollAnimation(0.2);
  const { ref: quoteRef, isVisible: quoteVisible } = useScrollAnimation(0.2);
  const parallaxOffset = useParallax(0.5);

  const aiTools = [
    {
      name: "Adobe Firefly",
      logo: "https://www.adobe.com/content/dam/cc/us/en/creativecloud/max2023/mnemonics/firefly.svg",
      bgColor: "bg-white",
    },
    {
      name: "Teachable Machine",
      logo: "https://teachablemachine.withgoogle.com/assets/img/teachable-machine-logo.png",
      bgColor: "bg-[#f5f5f5]",
    },
    {
      name: "ChatGPT",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png",
      bgColor: "bg-[#10a37f]",
    },
    {
      name: "Scratch",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Scratch_3.0_logo.svg/512px-Scratch_3.0_logo.svg.png",
      bgColor: "bg-[#4D97FF]",
    },
    {
      name: "DALL-E",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/ChatGPT_logo.svg/512px-ChatGPT_logo.svg.png",
      bgColor: "bg-black",
    },
  ];

  return (
    <Layout showTopNav={true}>
      {/* Hero Section */}
      <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/ai-hero-bg.jpg')",
            transform: `translateY(${parallaxOffset}px)`,
          }}
        />
        <div className="absolute inset-0 bg-black/60" />
        
        {/* Curved Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none">
          <svg className="relative block w-full h-[80px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z" fill="#ffffff"></path>
          </svg>
        </div>
        
        <div className="relative z-10 text-center px-4">
          <h1 
            className="text-6xl md:text-8xl font-bold text-white mb-4 animate-fade-in"
            style={{ 
              textShadow: '0 4px 20px rgba(0,0,0,0.5)',
              animationDelay: '0.2s',
              opacity: 0,
              animationFillMode: 'forwards'
            }}
          >
            AI
          </h1>
        </div>
      </section>

      {/* Why Should Kids Learn AI Section */}
      <section 
        ref={contentRef}
        className="bg-background py-16 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className={`transition-all duration-1000 ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Why Should Kids Learn AI?
            </h2>
            <p className="text-lg text-foreground leading-relaxed mb-8">
              Artificial Intelligence (AI) isn't just science fiction anymore. It's in your phone, your car, your home—and now, in your child's reality. TEC REC Club breaks down big ideas like machine learning, robotics, and generative AI into hands-on, age-appropriate, safe projects that spark curiosity and build real tech skills for the future.
            </p>
            <p className="text-2xl md:text-3xl text-[#dc2626] italic font-semibold text-center mb-12">
              "We don't just teach kids how to use AI—we teach them to understand it and shape it."
            </p>
          </div>
        </div>
      </section>

      {/* AI Tools Grid */}
      <section 
        ref={toolsRef}
        className="bg-background py-8 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {aiTools.slice(0, 3).map((tool, index) => (
              <div
                key={tool.name}
                className={`${tool.bgColor} rounded-xl p-8 flex items-center justify-center min-h-[200px] transition-all duration-1000 ${
                  toolsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.15}s` }}
              >
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="max-w-full max-h-[150px] object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/200x150?text=' + tool.name;
                  }}
                />
              </div>
            ))}
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {aiTools.slice(3, 5).map((tool, index) => (
              <div
                key={tool.name}
                className={`${tool.bgColor} rounded-xl p-8 flex items-center justify-center min-h-[200px] transition-all duration-1000 ${
                  toolsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${(index + 3) * 0.15}s` }}
              >
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="max-w-full max-h-[150px] object-contain"
                  onError={(e) => {
                    e.currentTarget.src = 'https://via.placeholder.com/200x150?text=' + tool.name;
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What do we expect kids to do with AI Section */}
      <section 
        ref={expectRef}
        className="bg-background py-16 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className={`transition-all duration-1000 ${expectVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              What do we expect kids to do with AI?
            </h2>
            <ul className="space-y-6 text-foreground">
              <li className="text-lg">
                <strong>• Create games and animations using Scratch with AI tools</strong>
                <ul className="ml-8 mt-2">
                  <li className="text-foreground">○ Make smart games with simple code - coding for the future.</li>
                </ul>
              </li>
              <li className="text-lg">
                <strong>• Generate Images using Canva AI and Adobe Firefly AI</strong>
                <ul className="ml-8 mt-2">
                  <li className="text-foreground">○ Get up to date with free AI software built for now and beyond.</li>
                </ul>
              </li>
              <li className="text-lg">
                <strong>• Train their own image recognition projects with Google's Teachable Machine</strong>
                <ul className="ml-8 mt-2">
                  <li className="text-foreground">○ AI Art Labs - make digital art using tools like DALL-E for kids</li>
                </ul>
              </li>
              <li className="text-lg">
                <strong>• Explore how chatbots like ChatGPT learn and respond</strong>
                <ul className="ml-8 mt-2">
                  <li className="text-foreground">○ Train their own chatbot!</li>
                </ul>
              </li>
              <li className="text-lg">
                <strong>• Learn how to build tech ethically, creatively, and safely</strong>
                <ul className="ml-8 mt-2">
                  <li className="text-foreground">○ Discover how robots "see" and "think" and learn ethical AI—because we build good bots</li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* How this will impact them Section */}
      <section 
        ref={impactRef}
        className="bg-background py-16 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className={`transition-all duration-1000 ${impactVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              How this will impact them:
            </h2>
            <ul className="space-y-4 text-lg text-foreground">
              <li>• Discover how AI impacts education, creativity, and jobs of the future</li>
              <li>• Get simplified explanations of complex tech in a kid friendly way</li>
              <li>• The confidence in that your child is learning safe, age-appropriate AI</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Why Start Young Section */}
      <section 
        ref={youngRef}
        className="bg-background py-16 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className={`transition-all duration-1000 ${youngVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Why Start Young?
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              Kids don't just adapt to technology—they <em>shape</em> it. Our AI programs teach critical thinking, logic, and creativity, giving your child a head start in tomorrow's world (and helping you keep up, too)
            </p>
          </div>
        </div>
      </section>

      {/* Built with Silicon Valley in Mind Section */}
      <section 
        ref={valleyRef}
        className="bg-background py-16 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className={`transition-all duration-1000 ${valleyVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
              Built with Silicon Valley in Mind
            </h2>
            <p className="text-lg text-foreground leading-relaxed">
              We're based in the world's tech capital—and our core concepts reflect that. Inspired by how companies like Google, OpenAI, and Apple train talent, we focus on problem-solving, creativity, and responsible AI use from an early age.
            </p>
          </div>
        </div>
      </section>

      {/* Final Quote Section */}
      <section 
        ref={quoteRef}
        className="bg-background py-16 px-4"
      >
        <div className="container mx-auto max-w-6xl">
          <div className={`transition-all duration-1000 ${quoteVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <p className="text-2xl md:text-4xl text-[#dc2626] italic font-semibold text-center">
              "Let's raise the next generation of ethical, empowered tech creators."
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AI;
