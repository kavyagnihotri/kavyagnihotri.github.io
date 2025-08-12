
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

export const Experience = () => {
  const experiences = [
    {
      title: 'Student Assistant',
      company: 'Eberhard Karls University of Tübingen',
      location: 'Tübingen, Germany',
      duration: 'December 2024 to Present',
      type: 'Part-time',
      description: 'Contributing to the development of Scholar Inbox, a comprehensive platform for academic research.',
      achievements: [
        // 'Developing Scholar Inbox platform using Python, PostgreSQL, and React',
        // 'Implementing full-stack solutions for academic workflow management',
        // 'Collaborating with research teams on user experience optimization',
        // 'Building scalable database architectures for research data management'
      ],
      technologies: ['Deep Learning', 'Python', 'PostgreSQL', 'React', 'Full-stack Development']
    },
    {
      title: 'Technical Intern',
      company: 'Cisco Systems',
      location: 'Bengaluru, India',
      duration: 'January 2024 to June 2024, June 2023 to July 2023',
      type: 'Internship',
      description: 'Contributed to multiple projects focusing on software optimization, automation, and quality assurance.',
      achievements: [
        'Updated Java libraries across multiple repositories, improving system compatibility',
        'Enhanced error logging in Secure Network Analytics, reducing debugging time',
        'Developed Jenkins pipeline for automated error report generation',
        'Built QA bot for module updates, streamlining testing processes',
        'Increased unit test coverage to over 95% across targeted modules',
        'Containerized repositories using Docker, improving deployment efficiency'
      ],
      technologies: ['Java', 'Jenkins', 'Docker', 'Python', 'Bash Scripting', 'Unit Testing']
    },
    // {
    //   title: 'Technical Intern',
    //   company: 'Cisco Systems',
    //   location: 'Bengaluru, India',
    //   duration: 'June 2023 - July 2023',
    //   type: 'Internship',
    //   description: 'Focused on automation and workflow optimization projects during first internship tenure.',
    //   achievements: [
    //     'Automated directory data extraction using Python and Bash scripting',
    //     'Optimized existing workflows, reducing manual processing time by 60%',
    //     'Collaborated with cross-functional teams on system integration projects',
    //     'Contributed to documentation and knowledge sharing initiatives'
    //   ],
    //   technologies: ['Python', 'Bash Scripting', 'Automation', 'System Integration']
    // },
    {
      title: 'NLP Research Intern',
      company: 'Palmtree Infotech',
      location: 'Chennai, India (Remote)',
      duration: 'May 2022 to July 2022',
      type: 'Internship',
      description: 'Contributed to NLP research projects, focusing on medical entity recognition using advanced language models.',
      achievements: [
        'Implemented zero-shot and few-shot learning techniques',
        'Worked with GPT-6B and GPT-NeoX models for medical text processing',
        'Achieved significant accuracy improvements in entity extraction tasks',
      ],
      technologies: ['NLP', 'GPT-6B', 'GPT-NeoX', 'Zero-shot Learning', 'Few-shot Learning', 'Medical NLP']
    }
  ];

  return (
    <section id="experience" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Experience</h2>
          <p className="text-xl text-muted-foreground">My professional journey and contributions</p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-primary/10 p-3 rounded-lg">
                      <Briefcase className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-xl text-primary font-medium">{exp.company}</p>
                    </div>
                  </div>
                  <Badge variant="outline">{exp.type}</Badge>
                </div>

                <div className="flex items-center text-muted-foreground mb-6 space-x-6">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">{exp.description}</p>

                {/* Only show if achievements is not empty and defined */}
                {exp.achievements && exp.achievements.length > 0 && (
                  <div className="space-y-4 mb-6">
                    <h4 className="font-semibold">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
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
