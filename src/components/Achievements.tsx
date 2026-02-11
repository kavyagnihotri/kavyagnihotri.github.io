import { Trophy, Star, Award, Target, GraduationCap, Medal } from 'lucide-react';

export const Achievements = () => {
  const achievements = [
    {
      title: 'ELIZA Stipend',
      organization: 'DAAD Zuse School ELIZA',
      year: '2024 - 2026',
      icon: <Trophy className="h-5 w-5" />,
      color: 'bg-yellow-500/10 text-yellow-600',
    },
    {
      title: 'AI Incubator Batch 6 Selection',
      organization: 'Cyber Valley, Tübingen',
      year: '2025',
      icon: <Star className="h-5 w-5" />,
      color: 'bg-purple-500/10 text-purple-600',
    },
    {
      title: 'Code for Good Hackathon Finalist',
      organization: 'JPMorgan Chase & Co',
      year: '2023',
      icon: <Medal className="h-5 w-5" />,
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      title: 'Google Girl Hackathon - Top 2.5%',
      organization: 'Google',
      year: '2023',
      icon: <Award className="h-5 w-5" />,
      color: 'bg-green-500/10 text-green-600',
    },
    {
      title: 'JEE Advanced 2020',
      organization: 'National Testing Agency',
      year: '2020',
      icon: <Target className="h-5 w-5" />,
      color: 'bg-orange-500/10 text-orange-600',
    },
    {
      title: 'Academic Performance Scholarship',
      organization: 'State Government',
      year: '2020',
      icon: <GraduationCap className="h-5 w-5" />,
      color: 'bg-indigo-500/10 text-indigo-600',
    }
  ];

  return (
    <section id="achievements" className="section-padding">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h2 className="text-2xl font-bold mb-3 text-foreground">Achievements</h2>

        <div className="grid md:grid-cols-2 gap-3">
          {achievements.map((achievement, index) => (
            <div key={index} className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <div className={`p-2.5 rounded-lg ${achievement.color} flex-shrink-0`}>
                  <div className="scale-75">{achievement.icon}</div>
                </div>
                <h3 className="text-base font-semibold leading-tight flex-1">{achievement.title}</h3>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{achievement.year}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 flex-shrink-0 opacity-0">
                  <div className="scale-75">{achievement.icon}</div>
                </div>
                <p className="text-sm text-muted-foreground">{achievement.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
