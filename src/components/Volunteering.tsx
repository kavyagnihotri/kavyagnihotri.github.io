import { Mic, Heart, Users } from 'lucide-react';

export const Volunteering = () => {
  const experiences = [
    {
      title: 'Speaker Research and Logistics Member',
      organization: 'TEDxBITSHYD',
      duration: "During Bachelor's",
      icon: <Mic size={20} />,
      color: 'bg-red-500/10 text-red-600',
    },
    {
      title: 'Volunteer Member',
      organization: 'National Service Scheme (NSS)',
      duration: "During Bachelor's",
      icon: <Heart size={20} />,
      color: 'bg-pink-500/10 text-pink-600',
    },
    {
      title: 'Buddy Program Participant',
      organization: 'University of Tübingen',
      duration: 'Current',
      icon: <Users size={20} />,
      color: 'bg-blue-500/10 text-blue-600',
    }
  ];

  return (
    <section id="volunteering" className="py-4">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Volunteering</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {experiences.map((experience, index) => (
            <div key={index} className="flex gap-3">
              <div className="flex items-center gap-2">
                <div className={`p-5 rounded-lg ${experience.color} flex-shrink-0`}>
                  <div>{experience.icon}</div>
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-base font-semibold leading-tight flex-1">{experience.title}</h3>
                  <p className="text-sm text-muted-foreground leading-none">
                    {experience.organization} <span className="text-foreground">•</span> {experience.duration}
                  </p>
                </div>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};