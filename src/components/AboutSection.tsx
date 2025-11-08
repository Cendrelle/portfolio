import { Card, CardContent } from "@/components/ui/card";

interface AboutSectionProps {
  content: {
    title: string;
    description: string[];
  };
}

const AboutSection = ({ content }: AboutSectionProps) => {
  return (
    <section id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </div>

        <Card className="max-w-4xl mx-auto shadow-card border-primary/20">
          <CardContent className="p-8 md:p-12">
            <div className="space-y-6 text-lg leading-relaxed">
              {content.description.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground">
                  {paragraph}
                </p>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
