import { Calendar, MapPin, Award } from 'lucide-react';

export const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Machine Learning',
      institution: 'Eberhard Karls University of Tübingen',
      location: 'Tübingen, Germany',
      duration: '2024 - 2026 (Expected)',
      gpa: null,
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Birla Institute of Technology & Science (BITS), Pilani',
      location: 'Hyderabad, India',
      duration: '2020 - 2024',
      gpa: 'CGPA: 8.49/10 (German Grade: 1.8)',
    },
  ];

  return (
    <section id="education" className="w-full">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        {/* mb-0 keeps the heading touching the first education entry */}
        <h2 className="text-2xl font-bold text-foreground leading-none mb-0">Education</h2>
        
        <div className="flex flex-col">
          {education.map((edu, index) => (
            /* mb-0 ensures no vertical gap between different degrees */
            <div key={index} className="flex flex-col mb-0">
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="text-lg font-semibold leading-none">{edu.institution}</h3>
                <div className="flex items-center gap-1 text-sm text-muted-foreground leading-none">
                  <MapPin className="h-3 w-3" />
                  <span className="whitespace-nowrap">{edu.location}</span>
                </div>
              </div>
              
              <div className="flex items-baseline justify-between gap-2">
                <div className="flex items-center gap-1">
                  {!edu.gpa && (
                    <p className="text-base text-primary font-medium leading-none">{edu.degree}</p>
                  )}
                  {edu.gpa && (
                    <div className="flex items-center gap-1 leading-none">
                      <p className="text-base text-primary font-medium leading-none">{edu.degree} | </p>
                      {/* Reduced icon size to prevent line height expansion */}
                      {/* <Award className="h-3.5 w-3.5 text-muted-foreground" /> */}
                      <p className="text-base font-medium text-muted-foreground leading-none">{edu.gpa}</p>
                    </div>
                  )}
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground leading-none">
                  <Calendar className="h-3 w-3" />
                  <span className="whitespace-nowrap">{edu.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};