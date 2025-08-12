
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Users, Mic, Heart } from 'lucide-react';

export const Volunteering = () => {
  const experiences = [
    {
      title: 'Speaker Research and Logistics Member',
      organization: 'TEDxBITSHYD',
      location: 'Hyderabad, India',
      duration: 'During Bachelor\'s',
      description: 'Contributed to organizing TEDx events at BITS Hyderabad by researching potential speakers and managing logistics for the event',
      icon: <Mic className="h-8 w-8" />,
      category: 'Event Organization',
      color: 'bg-red-500/10 text-red-600'
    },
    {
      title: 'Volunteer Member',
      organization: 'National Service Scheme (NSS)',
      location: 'Hyderabad, India',
      duration: 'During Bachelor\'s',
      description: 'Participated in community service activities and social initiatives during my undergraduate studies',
      icon: <Heart className="h-8 w-8" />,
      category: 'Community Service',
      color: 'bg-orange-500/10 text-orange-600'
    },
    {
      title: 'Buddy Program Participant',
      organization: 'University of Tübingen',
      location: 'Tübingen, Germany',
      duration: 'Current',
      description: 'Supporting international students with their integration into university life and German culture',
      icon: <Users className="h-8 w-8" />,
      category: 'Student Support',
      color: 'bg-blue-500/10 text-blue-600'
    }
  ];

  return (
    <section id="volunteering" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Volunteering</h2>
          <p className="text-xl text-muted-foreground">Giving back to the community</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-lg ${experience.color}`}>
                    {experience.icon}
                  </div>
                  <Badge variant="secondary">{experience.category}</Badge>
                </div>

                <h3 className="text-xl font-semibold mb-2">{experience.title}</h3>
                <p className="text-primary font-medium mb-3">{experience.organization}</p>
                
                <div className="flex items-center text-muted-foreground mb-4 space-x-4">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span className="text-sm">{experience.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span className="text-sm">{experience.duration}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm">{experience.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
