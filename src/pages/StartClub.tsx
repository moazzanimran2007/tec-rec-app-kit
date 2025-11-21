import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const StartClub = () => {
  const steps = [
    {
      title: "Assign a Lead",
      description: "Designate a primary contact point for your local club. This person will be responsible for coordinating activities and communicating with the TEC REC team.",
    },
    {
      title: "Complete the Application",
      description: "Fill out a brief application form with information about your school or organization, expected number of participants, and your goals for the club.",
    },
    {
      title: "Zoom Onboarding",
      description: "Participate in a Zoom onboarding session to review best practices, get access to resources, and connect with other club leaders.",
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Start a Club"
        subtitle="Establish a club for your school or organization for FREE"
      />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6 text-card-foreground">
            Join the Global TEC REC Community
          </h2>
          <p className="text-lg text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            Build STEAM projects with your students and share with clubs worldwide. 
            Join online challenges and hackathon events. Follow these simple steps to get started:
          </p>
          
          <div className="space-y-8 mb-10">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-4 items-start">
                <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 font-bold text-lg">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-xl mb-2 text-card-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
                <CheckCircle2 className="h-7 w-7 text-accent flex-shrink-0 mt-1" />
              </div>
            ))}
          </div>
          
          <div className="bg-muted/50 rounded-xl p-6 mb-8">
            <h3 className="font-semibold text-lg mb-2 text-foreground">What You'll Get:</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Access to monthly curated STEAM projects</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Digital Activities Passport for tracking progress</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Connection to global community of student makers</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                <span>Participation in online challenges and events</span>
              </li>
            </ul>
          </div>
          
          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-lg px-8"
              onClick={() => window.open("https://www.tecrecclub.org/start-a-club", "_blank")}
            >
              Complete Application
            </Button>
            <p className="text-sm text-muted-foreground mt-4">
              Takes less than 5 minutes to complete
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default StartClub;
