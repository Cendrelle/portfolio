import { Database, Code, Brain, Server, GitBranch, LineChart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface SkillsSectionProps {
  content: {
    title: string;
    skills: Array<{
      name: string;
      icon: string;
    }>;
  };
}

const SkillsSection = ({ content }: SkillsSectionProps) => {
  const iconMap: Record<string, any> = {
    database: Database,
    code: Code,
    brain: Brain,
    server: Server,
    git: GitBranch,
    chart: LineChart,
  };

  return (
    <section id="skills" className="gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">{content.title}</h2>
          <div className="w-20 h-1 gradient-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {content.skills.map((skill, index) => {
            const Icon = iconMap[skill.icon] || Code;
            return (
              <Card
                key={index}
                className="shadow-card hover:shadow-soft transition-all duration-300 hover:-translate-y-2 border-primary/20"
              >
                <CardContent className="flex flex-col items-center justify-center p-6 aspect-square">
                  <Icon className="h-12 w-12 mb-4 text-primary" />
                  <p className="font-semibold text-center">{skill.name}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
