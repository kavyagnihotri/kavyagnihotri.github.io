
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Award } from 'lucide-react';

export const Education = () => {
  const education = [
    {
      degree: 'Master of Science in Machine Learning',
      institution: 'Eberhard Karls University of Tübingen',
      location: 'Tübingen, Germany',
      duration: '2024 - 2026 (Expected)',
      // description: 'Specializing in deep learning, neural networks, and AI applications with focus on practical implementations',
      coursework: ['Deep Learning', 'Natural Language Processing', 'Probalistic Machine Learning', 'Statistical Machine Learning'],
    },
    {
      degree: 'Bachelor of Engineering in Computer Science',
      institution: 'Birla Institute of Technology & Science (BITS), Pilani',
      location: 'Hyderabad, India',
      duration: '2020 - 2024',
      gpa: '8.49/10',
      description: 'Comprehensive computer science education with strong foundation in algorithms, software engineering, and mathematics',
      coursework: [
        'Machine Learning',
        'Deep Learning',
        'Data Visualization',
        'Data Structures and Algorithms',
        'Software Engineering',
        'Database Systems',
        'Operating Systems',
        'Computer Networks'
        // 'Probability and Statistics',
        // 'Linear Algebra',
      ],
    },
  ];

  return (
    <section id="education" className="section-padding">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Education</h2>
          <p className="text-xl text-muted-foreground">My academic journey and learning experiences</p>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold mb-2">{edu.degree}</h3>
                        <p className="text-xl text-primary font-medium">{edu.institution}</p>
                      </div>
                      {edu.gpa && (
                        <div className="flex items-center">
                          <Award className="h-5 w-5 text-primary mr-2" />
                          <span className="text-lg font-semibold">{edu.gpa}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center text-muted-foreground mb-4 space-x-6">
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{edu.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{edu.description}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-3">Key Coursework:</h4>
                    <div className="flex flex-wrap gap-2">
                      {edu.coursework.map((course) => (
                        <Badge key={course} variant="secondary" className="text-xs">
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
