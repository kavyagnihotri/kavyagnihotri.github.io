
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Globe, BookOpen } from 'lucide-react';

export const Volunteering = () => {
  const volunteerExperiences = [
    {
      organization: 'National Service Scheme (NSS)',
      role: 'Active Member',
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
            <Card key={index} className="card-hover">
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

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Volunteer Impact</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2+</div>
                <div className="text-sm text-muted-foreground">Active Volunteer Programs</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">100+</div>
                <div className="text-sm text-muted-foreground">Hours of Service</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground">People Helped</div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-card rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Detailed Stories Coming Soon</h3>
            <p className="text-muted-foreground">
              I'll be sharing more detailed stories about my volunteer experiences, 
              including specific projects, achievements, and the impact we made together.
            </p>
            <Badge variant="outline" className="mt-4">
              Content In Progress
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};
