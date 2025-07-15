
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Trophy, Award, Medal, Star, Target, Users } from 'lucide-react';

export const Achievements = () => {
  const achievements = [
    {
      title: 'ELIZA Stipend 2024-26',
      organization: 'Zuse School ELIZA',
      description: 'Awarded a 24-month stipend for academic excellence in machine learning research.',
      icon: <Trophy className="h-8 w-8" />,
      category: 'Scholarship',
      year: '2024',
      color: 'bg-yellow-500/10 text-yellow-600'
    },
    {
      title: 'AI Incubator Batch 6 Selection',
      organization: 'AI Incubator Program',
      description: 'Selected for prestigious AI Incubator program for innovative AI projects.',
      icon: <Star className="h-8 w-8" />,
      category: 'Program',
      year: '2025',
      color: 'bg-purple-500/10 text-purple-600'
    },
    {
      title: 'JPMC Code for Good Hackathon Finalist',
      organization: 'JPMorgan Chase & Co.',
      description: 'Selected as finalist among 25+ teams for developing impactful social good solutions.',
      icon: <Medal className="h-8 w-8" />,
      category: 'Hackathon',
      year: '2023',
      color: 'bg-blue-500/10 text-blue-600'
    },
    {
      title: 'Google Girl Hackathon - Top 2.5%',
      organization: 'Google',
      description: 'Ranked in the top 2.5% of participants in Google\'s prestigious hackathon for women in tech.',
      icon: <Award className="h-8 w-8" />,
      category: 'Hackathon',
      year: '2023',
      color: 'bg-green-500/10 text-green-600'
    },
    {
      title: 'ICPC Amritapuri Regionals',
      organization: 'ACM ICPC',
      description: 'Secured 1197th rank out of 5000+ competitors in the prestigious programming contest.',
      icon: <Target className="h-8 w-8" />,
      category: 'Competition',
      year: '2023',
      color: 'bg-orange-500/10 text-orange-600'
    },
    {
      title: 'JEE Advanced 2020',
      organization: 'National Testing Agency',
      description: 'Achieved outstanding rank of 4860 among 43,000+ candidates in India\'s toughest engineering exam.',
      icon: <Trophy className="h-8 w-8" />,
      category: 'Examination',
      year: '2020',
      color: 'bg-red-500/10 text-red-600'
    },
    {
      title: 'Academic Performance Scholarship',
      organization: 'State Government',
      description: 'Awarded by the state government for exceptional academic merit and performance.',
      icon: <Award className="h-8 w-8" />,
      category: 'Scholarship',
      year: '2020',
      color: 'bg-indigo-500/10 text-indigo-600'
    }
  ];

  const categoryIcons = {
    'Scholarship': <Trophy className="h-4 w-4" />,
    'Program': <Star className="h-4 w-4" />,
    'Hackathon': <Users className="h-4 w-4" />,
    'Competition': <Target className="h-4 w-4" />,
    'Examination': <Award className="h-4 w-4" />
  };

  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Achievements</h2>
          <p className="text-xl text-muted-foreground">Recognition and accolades for excellence</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${achievement.color}`}>
                    {achievement.icon}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Badge variant="secondary" className="flex items-center">
                      {categoryIcons[achievement.category as keyof typeof categoryIcons]}
                      <span className="ml-1">{achievement.category}</span>
                    </Badge>
                    <Badge variant="outline">{achievement.year}</Badge>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                <p className="text-primary font-medium mb-3">{achievement.organization}</p>
                <p className="text-muted-foreground text-sm">{achievement.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
