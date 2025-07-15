
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Globe, BookOpen } from 'lucide-react';

export const Volunteering = () => {
  const volunteerExperiences = [
    {
      organization: 'National Service Scheme (NSS)',
      role: 'Previous Member',
      location: 'India',
      period: 'During Bachelor\'s Studies',
      description: 'Participated in community service initiatives and social development programs during undergraduate studies.',
      icon: <Heart className="h-8 w-8" />,
      color: 'bg-red-500/10 text-red-600',
      impact: 'Community Development'
    },
    {
      organization: 'Buddy Program',
      role: 'International Student Mentor',
      location: 'University of Tübingen, Germany',
      period: 'Current',
      description: 'Supporting international students in their transition to German university life and academic culture.',
      icon: <Users className="h-8 w-8" />,
      color: 'bg-blue-500/10 text-blue-600',
      impact: 'Student Support'
    }
  ];

  return (
    <section id="volunteering" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Volunteering</h2>
          <p className="text-xl text-muted-foreground">Giving back to the community through service</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {volunteerExperiences.map((experience, index) => (
            <Card key={index} className="card-hover cute-border">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className={`p-4 rounded-lg ${experience.color}`}>
                    {experience.icon}
                  </div>
                  <Badge variant="outline">{experience.impact}</Badge>
                </div>

                <h3 className="text-2xl font-semibold mb-2">{experience.organization}</h3>
                <p className="text-primary font-medium mb-3">{experience.role}</p>
                
                <div className="flex items-center text-muted-foreground mb-4 space-x-4">
                  <div className="flex items-center">
                    <Globe className="h-4 w-4 mr-2" />
                    <span>{experience.location}</span>
                  </div>
                  <div className="flex items-center">
                    <BookOpen className="h-4 w-4 mr-2" />
                    <span>{experience.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground">{experience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
