
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Wrench, Globe, GitBranch } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="h-6 w-6" />,
      skills: ['Python', 'Java', 'C++', 'JavaScript', 'C', 'HTML/CSS']
    },
    {
      title: 'Machine Learning & AI',
      icon: <Brain className="h-6 w-6" />,
      skills: ['PyTorch', 'TensorFlow', 'BERT', 'GPT Models', 'Computer Vision', 'NLP', 'Deep Learning', 'Neural Networks']
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="h-6 w-6" />,
      skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'MERN Stack', 'Django']
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="h-6 w-6" />,
      skills: ['Docker', 'Jenkins', 'Git', 'Postman', 'Azure AI Services', 'Selenium']
    },
    {
      title: 'Data Science & Analytics',
      icon: <Database className="h-6 w-6" />,
      skills: ['NumPy', 'Pandas', 'PostgreSQL', 'MySQL', 'NLTK', 'Data Visualization']
    },
    {
      title: 'Development Practices',
      icon: <GitBranch className="h-6 w-6" />,
      skills: ['Unit Testing', 'CI/CD', 'Agile', 'Code Review', 'Documentation', 'Version Control']
    }
  ];

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Skills</h2>
          <p className="text-xl text-muted-foreground">Technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover h-full cute-border">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <Badge key={i} variant="outline" className="text-sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
