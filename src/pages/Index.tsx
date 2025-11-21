import { Layout } from "@/components/Layout";
import { Hero } from "@/components/Hero";
import { TextSection } from "@/components/TextSection";
import { FeaturesGrid } from "@/components/FeaturesGrid";
import { StartClubCallout } from "@/components/StartClubCallout";
import { NewsletterSignup } from "@/components/NewsletterSignup";

const Index = () => {
  return (
    <Layout>
      <Hero
        image="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=500&fit=crop"
        alt="TEC REC Club - STEM Education"
        headline="SCIENCE · TECHNOLOGY · NATURE · SPORTS · COOKING · SPACE · ARTS · GADGETS · ANIMALS"
        subheadline="The TEC REC Club serves as a bridge to Silicon Valley and tech centers around the world, providing students with access to cutting-edge ideas and technologies."
        primaryCta={{ label: "Start a Club", to: "/start-club" }}
        secondaryCta={{ label: "Still have questions?", to: "/faq" }}
      />

      <TextSection
        title="What is TEC REC Club?"
        body="The TEC REC Club serves as a bridge to Silicon Valley and tech centers around the world, providing students with access to cutting-edge ideas and technologies, offering innovative projects that put academic learning into practice in fun & inspiring ways. TEC REC Clubs are meant to compliment classroom instruction, providing safe, curated, stimulating, learning opportunities. Our goal is simply to inspire, instruct & entertain students so that they learn without even realizing they are 'learning'."
      />

      <FeaturesGrid
        title="Core Features of TEC REC Club"
        items={[
          {
            icon: "project",
            title: "Monthly Projects",
            body: "TEC REC Club posts a 'Project of the Month' which includes building instructions and supplies lists. Each project is wildly different than the next to keep you engaged!",
          },
          {
            icon: "showcase",
            title: "Student Showcase",
            body: "Share your final builds with the TEC REC community! Each person adds their own creative twists to the projects so show off your uniqueness and get ideas for the future.",
          },
          {
            icon: "passport",
            title: "Activities Passport",
            body: "Track your completed projects by collecting digital stamps across the STEAM subjects. Encourages exploring a variety of topics and following through on activities.",
          },
          {
            icon: "play",
            title: "Explore & Play",
            body: "Exposure to new ideas is a core tenet of TEC REC. Peruse a curated database of articles, videos, influencers, and much more. Even play educational games (some developed by students).",
          },
        ]}
      />

      <StartClubCallout
        title="Start Local, Share Global"
        body="Establish a club for your school or organization for FREE. Build STEAM projects with your students then share with the global TEC REC Community. You can even join online challenges and hackathon events. Follow the steps below to enroll:"
        steps={[
          {
            title: "Assign a Lead",
            description: "Designate a primary contact point for your local club.",
          },
          {
            title: "Complete the Application",
            description: "Follow the link to complete a brief application.",
          },
          {
            title: "Zoom Onboarding",
            description: "Participate in a Zoom onboarding to review best practices.",
          },
        ]}
        ctaLabel="Start a Club"
        ctaTo="/start-club"
      />

      <NewsletterSignup
        title="Subscribe to our newsletter."
        body="Sign up with your email address to receive at-home projects and upcoming events."
        emailPlaceholder="Email Address"
        submitLabel="Sign Up"
      />
    </Layout>
  );
};

export default Index;
