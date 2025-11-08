import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@/assets/profile-photo.png";

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
            <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
              <div className="flex-shrink-0">
                <img
                  src={profilePhoto}
                  alt="Photo de profil"
                  className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-4 border-primary/20 shadow-card"
                />
              </div>
              <div className="space-y-6 text-lg leading-relaxed flex-1">
                {content.description.map((paragraph, index) => (
                  <p key={index} className="text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
