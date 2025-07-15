
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Database, Brain, Wrench, Globe, GitBranch } from 'lucide-react';

export const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="h-6 w-6" />,
      skills: [
        { name: 'Python', level: 'Advanced' },
        { name: 'Java', level: 'Advanced' },
        { name: 'C++', level: 'Advanced' },
        { name: 'JavaScript', level: 'Intermediate' },
        { name: 'C', level: 'Intermediate' },
        { name: 'HTML/CSS', level: 'Intermediate' }
      ]
    },
    {
      title: 'Machine Learning & AI',
      icon: <Brain className="h-6 w-6" />,
      skills: [
        { name: 'PyTorch', level: 'Advanced' },
        { name: 'TensorFlow', level: 'Advanced' },
        { name: 'BERT', level: 'Advanced' },
        { name: 'GPT Models', level: 'Advanced' },
        { name: 'Computer Vision', level: 'Intermediate' },
        { name: 'NLP', level: 'Advanced' },
        { name: 'Deep Learning', level: 'Advanced' },
        { name: 'Neural Networks', level: 'Advanced' }
      ]
    },
    {
      title: 'Web Technologies',
      icon: <Globe className="h-6 w-6" />,
      skills: [
        { name: 'React', level: 'Advanced' },
        { name: 'Node.js', level: 'Intermediate' },
        { name: 'Express.js', level: 'Intermediate' },
        { name: 'MongoDB', level: 'Intermediate' },
        { name: 'MERN Stack', level: 'Advanced' },
        { name: 'Django', level: 'Intermediate' }
      ]
    },
    {
      title: 'Tools & Technologies',
      icon: <Wrench className="h-6 w-6" />,
      skills: [
        { name: 'Docker', level: 'Advanced' },
        { name: 'Jenkins', level: 'Intermediate' },
        { name: 'Git', level: 'Advanced' },
        { name: 'Postman', level: 'Intermediate' },
        { name: 'Azure AI Services', level: 'Intermediate' },
        { name: 'Selenium', level: 'Intermediate' }
      ]
    },
    {
      title: 'Data Science & Analytics',
      icon: <Database className="h-6 w-6" />,
      skills: [
        { name: 'NumPy', level: 'Advanced' },
        { name: 'Pandas', level: 'Advanced' },
        { name: 'PostgreSQL', level: 'Advanced' },
        { name: 'MySQL', level: 'Intermediate' },
        { name: 'NLTK', level: 'Advanced' },
        { name: 'Data Visualization', level: 'Intermediate' }
      ]
    },
    {
      title: 'Development Practices',
      icon: <GitBranch className="h-6 w-6" />,
      skills: [
        { name: 'Unit Testing', level: 'Advanced' },
        { name: 'CI/CD', level: 'Intermediate' },
        { name: 'Agile', level: 'Intermediate' },
        { name: 'Code Review', level: 'Advanced' },
        { name: 'Documentation', level: 'Advanced' },
        { name: 'Version Control', level: 'Advanced' }
      ]
    }
  ];

  const levelColors = {
    'Advanced': 'bg-green-500/10 text-green-600 border-green-500/20',
    'Intermediate': 'bg-blue-500/10 text-blue-600 border-blue-500/20',
    'Beginner': 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20'
  };

  return (
    <section id="skills" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Skills</h2>
          <p className="text-xl text-muted-foreground">My technical expertise and proficiency levels</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover h-full">
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {category.skills.map((skill, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <span className="text-muted-foreground">{skill.name}</span>
                      <Badge 
                        variant="outline" 
                        className={levelColors[skill.level as keyof typeof levelColors]}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-card rounded-lg p-6 shadow-lg">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years of Programming</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Technologies Mastered</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
