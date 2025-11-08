import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Send } from "lucide-react";

interface ContactSectionProps {
  content: {
    title: string;
    description: string;
    email: string;
    social: {
      linkedin: string;
      github: string;
    };
    cta: string;
  };
}

const ContactSection = ({ content }: ContactSectionProps) => {
  return (
    <section id="contact">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
            {content.description}
          </p>
        </div>

        <Card className="max-w-2xl mx-auto shadow-card border-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6">
              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <a
                    href={`mailto:${content.email}`}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {content.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                <div className="p-3 rounded-full bg-primary/10">
                  <Linkedin className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">LinkedIn</p>
                  <a
                    href={content.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-lg bg-accent/50 hover:bg-accent transition-colors">
                <div className="p-3 rounded-full bg-primary/10">
                  <Github className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">GitHub</p>
                  <a
                    href={content.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>

              <Button
                size="lg"
                className="w-full gradient-primary shadow-soft hover:shadow-card transition-all"
                asChild
              >
                <a href={`mailto:${content.email}`}>
                  <Send className="mr-2 h-5 w-5" />
                  {content.cta}
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;
