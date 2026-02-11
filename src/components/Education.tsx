
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
      gpa: '8.49/10 (German Grade: 1.8)',
    },
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h2 className="text-2xl font-bold text-foreground">Education</h2>
        <div >
          {education.map((edu, index) => (
            <div key={index}>
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-lg font-semibold">{edu.institution}</h3>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5" />
                  <span>{edu.location}</span>
                </div>
              </div>
              <div className="flex items-baseline justify-between gap-4">
                {!edu.gpa && (
                  <div className="flex gap-1 text-sm">
                    <p className="text-base text-primary font-medium">{edu.degree}</p>
                  </div>
                )}
                {edu.gpa && (
                  <div className="flex gap-1 text-sm">
                    <p className="text-base text-primary font-medium">{edu.degree} | </p>
                    <Award className="h-5 w-5 text-muted-foreground" />
                    <span className="text-base font-medium text-muted-foreground">{edu.gpa}</span>
                  </div>
                )}
                <div className="flex items-center gap-1 text-sm  text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <span>{edu.duration}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
