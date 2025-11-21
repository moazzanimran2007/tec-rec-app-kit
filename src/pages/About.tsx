import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useParallax } from "@/hooks/use-parallax";
import { Link } from "react-router-dom";

const About = () => {
  const { ref: goalRef, isVisible: goalVisible } = useScrollAnimation(0.2);
  const { ref: featuresRef, isVisible: featuresVisible } = useScrollAnimation(0.2);
  const { ref: highlightRef, isVisible: highlightVisible } = useScrollAnimation(0.2);
  const { ref: clubsRef, isVisible: clubsVisible } = useScrollAnimation(0.2);
  const { ref: startRef, isVisible: startVisible } = useScrollAnimation(0.2);
  const parallaxOffset = useParallax(0.5);

  return (
    <Layout showTopNav>
      {/* Hero Section with Split Layout */}
      <section className="relative h-[500px] overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{ transform: `translateY(${parallaxOffset}px)` }}
        >
          <img
            src="https://images.unsplash.com/photo-1581092918484-8313e1f7e8d6?w=1200&h=600&fit=crop"
            alt="Students working"
            className="w-full h-[120%] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-white/50"></div>
        </div>
        
        <div className="relative h-full container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Challenge</h1>
            <p className="text-lg leading-relaxed">
              Schools worldwide are struggling to keep pace with rapid technological developments, creating a growing gap between traditional education and the skills needed for tomorrow's economy.
            </p>
          </div>
          
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">TEC REC</h1>
            <p className="text-lg leading-relaxed">
              TEC REC (Technology Recreation) pedagogy is designed to build students' STEAM skills necessary to operate in the new economy.
            </p>
          </div>
        </div>
      </section>

      {/* Goal Quote */}
      <section ref={goalRef} className="py-16 px-4 bg-white">
        <div className={`container mx-auto max-w-5xl text-center transition-all duration-700 ${goalVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-3xl md:text-4xl font-bold text-[#dc2626] leading-relaxed" style={{ fontStyle: 'italic' }}>
            Our goal is to inspire, instruct & entertain students so that they learn without even realizing they are "learning".
          </p>
        </div>
      </section>

      {/* TEC REC Club Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold mb-6">TEC REC Club</h2>
              <p className="text-lg mb-6 leading-relaxed">
                The TEC REC Club serves as a bridge to Silicon Valley and tech centers around the world, providing students with access to cutting-edge ideas and technologies, offering innovative projects that put academic learning into practice in fun & inspiring ways. TEC REC Clubs are meant to complement classroom instruction, providing safe, curated, stimulating learning opportunities.
              </p>
              <p className="text-lg leading-relaxed">
                The TEC REC pedagogy was developed for YouthSF, a 501(c)(3) nonprofit organization, and has yielded positive results for over 10 years.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-primary rounded-lg"></div>
              <img
                src="https://images.unsplash.com/photo-1581092583537-20d51b3e4e0b?w=600&h=600&fit=crop"
                alt="Student with circuit board"
                className="relative rounded-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features & 100+ Schools */}
      <section ref={featuresRef} className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12">
            <div className={`transition-all duration-700 ${featuresVisible ? 'animate-fade-in' : 'opacity-0'}`}>
              <h2 className="text-3xl font-bold mb-8">Features</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">Monthly Resources:</h3>
                  <p className="text-muted-foreground">Keeping your community connected with the latest STEAM opportunities</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">Projects of the Month:</h3>
                  <p className="text-muted-foreground">From AI Modeling and Circuit Electronics to Video Game Creation</p>
                </div>
                
                <div>
                  <h3 className="font-bold text-lg mb-2">Student Showcase:</h3>
                  <p className="text-muted-foreground">Exhibiting student projects from Claymation to original GarageBand music</p>
                </div>
              </div>

              {/* Member Benefits Box */}
              <div className="mt-8 border-4 border-[#dc2626] p-6 rounded-lg">
                <h3 className="text-xl font-bold text-[#dc2626] text-center mb-6">— Member Benefits —</h3>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold mb-1">Passports:</h4>
                    <p className="text-sm text-muted-foreground">Track activities and earn stamps in a STEAM "passport"</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-1">Community:</h4>
                    <p className="text-sm text-muted-foreground">Custom Google Classroom for your club to chat, share ideas, schedule meetups</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-1">Special Access:</h4>
                    <p className="text-sm text-muted-foreground">Use your TEC REC Club account to access premium features for 3rd party tools and programs</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold mb-1">Speaker Series:</h4>
                    <p className="text-sm text-muted-foreground">Hear directly from Astronauts to Zoologists</p>
                  </div>
                </div>
              </div>
            </div>

            <div className={`transition-all duration-700 ${featuresVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
              <div className="relative mb-6">
                <div className="absolute -inset-4 bg-primary rounded-lg"></div>
                <img
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=400&fit=crop"
                  alt="Students learning"
                  className="relative rounded-lg w-full"
                />
              </div>
              
              <h2 className="text-4xl font-bold text-[#dc2626] mb-4">100+ Schools</h2>
              <p className="text-lg leading-relaxed">
                TEC REC has proven wildly successful with students from over one hundred schools participating, and now we are eager to expand TEC REC beyond our physical Labs to an online community of students across the country & around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlight Activities */}
      <section ref={highlightRef} className={`py-16 px-4 transition-all duration-700 ${highlightVisible ? 'opacity-100' : 'opacity-0'}`}>
        <div className="bg-[#dc2626] py-8 mb-16">
          <h2 className="text-4xl font-bold text-white text-center tracking-wider">
            HIGHLIGHT ACTIVITIES
          </h2>
        </div>

        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            {/* World Class Webinars */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">World Class Webinars</h3>
              <div className="mb-6 relative group">
                <img
                  src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=600&h=400&fit=crop"
                  alt="Astronaut"
                  className="rounded-[40px] w-full shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                Leroy Chiao, Ph.D., former NASA astronaut and Commander of the International Space Station, has been a long-time collaborator with the TEC REC Club. In the coming months, we will coordinate a live webinar featuring Dr. Chiao for TEC REC Clubs – a truly inspiring opportunity for students to connect with a real-life space explorer and STEAM leader.
              </p>
            </div>

            {/* Video Game Exchange */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Video Game Exchange</h3>
              <div className="mb-6 relative group">
                <img
                  src="https://images.unsplash.com/photo-1511512578047-dfb367046420?w=600&h=400&fit=crop"
                  alt="Student with tablet"
                  className="rounded-[40px] w-full shadow-2xl group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-base leading-relaxed text-muted-foreground">
                TEC REC Club allows students to learn how games are made & provides licenses to BLOXELS, the tool used to build the games, FREE of charge. Students create their very own game and can then share them with students around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Clubs - Creating Together */}
      <section ref={clubsRef} className="py-16 px-4 bg-white">
        <div className={`container mx-auto max-w-6xl transition-all duration-700 ${clubsVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-4xl font-bold mb-8">Clubs - Creating Together</h2>
          <p className="text-lg mb-12 leading-relaxed max-w-4xl">
            TEC REC Clubs typically meet once a month in schools, makerspaces, community centers, and any other venue to gather. As a club Point-of-Contact, you get members started on something to learn & create, then members work at their own pace to build projects, peruse inspiring videos, play educational games, or just bond with their peers.
          </p>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Meet</h3>
              <p className="mb-6 leading-relaxed">
                Club members come together and the leader presents a project with instructions to focus on for the session. (see <Link to="/projects" className="underline">projects page</Link>) Additionally, kids can peruse TEC REC Club site for inspiration.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-24 h-24 bg-accent rotate-45"></div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold mb-6">Build</h3>
              <p className="mb-6 leading-relaxed">
                Kids gather supplies and split-off to independently start building their unique creations. The Lead answers any questions and helps with any steps along the way.
              </p>
            </div>

            <div className="flex items-center justify-center md:col-start-2">
              <div className="w-24 h-24 bg-accent rotate-45"></div>
            </div>

            <div className="text-center md:col-start-3">
              <h3 className="text-2xl font-bold mb-6">Share</h3>
              <p className="leading-relaxed">
                At the end of the session, everyone presents their creations, recapping decisions or showing off features. The Lead facilitates the show & tell. Don't forget to snap pics and upload to TECRECClub.org.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Start Local, Share Global */}
      <section ref={startRef} className="py-16 px-4 bg-white">
        <div className={`container mx-auto max-w-6xl transition-all duration-700 ${startVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-5xl font-bold mb-6">
            Start Local, <span className="text-[#dc2626]">Share Global</span>
          </h2>
          <p className="text-lg mb-12 leading-relaxed max-w-4xl">
            Establish a club for your school or organization for <span className="text-[#dc2626] font-bold">FREE</span>. Build STEAM projects with your students then share with the global TEC REC Community. You can even join online challenges and hackathon events. Follow the steps below to enroll:
          </p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=600&fit=crop"
              alt="Students working together"
              className="rounded-full w-full max-w-md mx-auto shadow-2xl"
            />

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center flex-shrink-0 text-2xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Assign a Lead</h3>
                  <p className="text-muted-foreground">Designate a primary contact point for your local club.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white">
                  2
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Complete the Application</h3>
                  <p className="text-muted-foreground">Follow <Link to="/start-club" className="underline">the link</Link> to complete a brief application.</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-full bg-destructive flex items-center justify-center flex-shrink-0 text-2xl font-bold text-white">
                  3
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-2">Zoom Onboarding</h3>
                  <p className="text-muted-foreground">Participate in a Zoom onboarding to review best practices.</p>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="bg-destructive hover:bg-destructive/90 text-white font-bold px-12 py-6 rounded-md text-lg mb-4"
                  onClick={() => window.location.href = '/start-club'}
                >
                  Start a Club
                </Button>
                <div>
                  <Link to="/faq" className="text-lg underline hover:text-primary transition-colors">
                    Still have questions?
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
