import { Layout } from "@/components/Layout";
import { PageHeader } from "@/components/PageHeader";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What is TEC REC Club?",
      answer: "TEC REC Club is a free educational program that provides students with access to cutting-edge STEAM projects and ideas from Silicon Valley and tech centers worldwide. We offer monthly hands-on projects, a student showcase platform, and a global community of learners.",
    },
    {
      question: "How much does it cost to start a club?",
      answer: "Starting a TEC REC Club is completely FREE! We provide all the project instructions, activity guides, and online resources at no cost. You'll only need to purchase supplies for the projects you choose to do.",
    },
    {
      question: "What ages is TEC REC Club designed for?",
      answer: "TEC REC Club is designed primarily for students in grades 4-12, but our projects can be adapted for younger or older learners. We offer projects across various difficulty levels to accommodate different age groups and skill levels.",
    },
    {
      question: "How much time do the monthly projects take?",
      answer: "Most projects are designed to be completed in 1-3 sessions, with each session lasting 45-90 minutes. However, students can work at their own pace, and many enjoy extending projects with their own creative additions.",
    },
    {
      question: "Do I need technical expertise to lead a club?",
      answer: "No technical expertise required! Each project comes with detailed instructions, supply lists, and troubleshooting tips. During your onboarding, we'll provide you with all the resources and support you need. Many of our club leaders are teachers, parents, or community volunteers with no prior technical background.",
    },
    {
      question: "Can students participate from home?",
      answer: "Yes! While TEC REC Clubs are often school or community-based, students can also participate from home. Parents can download project instructions and supplies lists to do activities with their children at home, and students can still share their work in the online showcase.",
    },
    {
      question: "How do I share student projects?",
      answer: "Students can upload photos and descriptions of their completed projects to our Student Showcase. This allows them to share their creativity with the global TEC REC community, get inspired by others' work, and celebrate their achievements.",
    },
    {
      question: "What is the Activities Passport?",
      answer: "The Activities Passport is a digital tracking system where students collect stamps across different STEAM subjects as they complete projects. It encourages students to explore diverse topics and provides a visual record of their learning journey.",
    },
  ];

  return (
    <Layout>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about TEC REC Club"
      />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card border border-border rounded-lg px-6"
            >
              <AccordionTrigger className="text-left font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Layout>
  );
};

export default FAQ;
