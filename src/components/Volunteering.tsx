import { Mic, Heart, Users } from 'lucide-react';

export const Volunteering = () => {
  const experiences = [
    {
      title: 'Speaker Research and Logistics Member',
      organization: 'TEDxBITSHYD',
      duration: 'During Bachelor\'s',
      icon: <Mic className="h-5 w-5" />,
      color: 'bg-red-500/10 text-red-600',
    },
    {
      title: 'Volunteer Member',
      organization: 'National Service Scheme (NSS)',
      duration: 'During Bachelor\'s',
      icon: <Heart className="h-5 w-5" />,
      color: 'bg-pink-500/10 text-pink-600',
    },
    {
      title: 'Buddy Program Participant',
      organization: 'University of Tübingen',
      duration: 'Current',
      icon: <Users className="h-5 w-5" />,
      color: 'bg-blue-500/10 text-blue-600',
    }
  ];

  return (
    <section id="volunteering" className="section-padding">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h2 className="text-2xl font-bold mb-3 text-foreground">Volunteering</h2>

        <div className="grid md:grid-cols-2 gap-3">
          {experiences.map((experience, index) => (
            <div key={index} className="flex flex-col gap-0.5">
              <div className="flex items-center gap-2">
                <div className={`p-1.5 rounded-lg ${experience.color} flex-shrink-0`}>
                  <div className="scale-75">{experience.icon}</div>
                </div>
                <h3 className="text-base font-semibold leading-tight flex-1">{experience.title}</h3>
                <span className="text-xs text-muted-foreground whitespace-nowrap">{experience.duration}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="p-1.5 flex-shrink-0 opacity-0">
                  <div className="scale-75">{experience.icon}</div>
                </div>
                <p className="text-sm text-muted-foreground">{experience.organization}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
