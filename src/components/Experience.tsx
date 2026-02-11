import { Calendar, MapPin } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: 'Student Assistant',
      company: 'Scholar Inbox • Eberhard Karls University of Tübingen',
      location: 'Tübingen, Germany',
      duration: 'December 2024 to Present',
    },
    {
      title: 'Technical Intern',
      company: 'Cisco Systems',
      location: 'Bengaluru, India',
      duration: 'January 2024 to June 2024, June 2023 to July 2023',
    },
    {
      title: 'NLP Research Intern',
      company: 'Palmtree Infotech',
      location: 'Chennai, India (Remote)',
      duration: 'May 2022 to July 2022',
    }
  ];

  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* Reduced margin-bottom */}
        <h2 className="text-2xl font-bold mb-3 text-foreground">Experience</h2>

        {/* Reduced vertical spacing between different jobs */}
        <div className="space-y-4">
          {experiences.map((exp, index) => (
            /* Reduced vertical spacing between Company and Role */
            <div key={index} className="space-y-0">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold">{exp.company}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span className="whitespace-nowrap">{exp.location}</span>
                </div>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                <p className="text-base text-primary font-medium">{exp.title}</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <span className="whitespace-nowrap">{exp.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Horizontal Line at the end of section */}
        <div className="mt-6 border-b border-border"></div>
      </div>
    </section>
  );
};