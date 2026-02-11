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
    <section id="experience" className="w-full">
      {/* Centering container restored with mx-auto and horizontal padding */}
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        
        {/* Zero margin bottom keeps heading touching the first item */}
        <h2 className="text-2xl font-bold text-foreground leading-none mb-0">Experience</h2>

        <div className="flex flex-col">
          {experiences.map((exp, index) => (
            /* mb-0 ensures no gap between the end of one job and start of next */
            <div key={index} className="flex flex-col mb-0">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold leading-none">{exp.company}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground leading-none">
                  <MapPin className="h-3 w-3" />
                  <span className="whitespace-nowrap">{exp.location}</span>
                </div>
              </div>
              
              <div className="flex items-baseline justify-between gap-2">
                <p className="text-base text-primary font-medium leading-none">{exp.title}</p>
                <div className="flex items-center gap-1 text-sm text-muted-foreground leading-none">
                  <Calendar className="h-3 w-3" />
                  <span className="whitespace-nowrap">{exp.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};