
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Languages, MapPin, GraduationCap } from 'lucide-react';

export const About = () => {
  const languages = [
    { name: 'Hindi', level: 'Native' },
    { name: 'English', level: 'Native/Fluent' },
    { name: 'German', level: 'A2' },
  ];

  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">About Me</h2>
          <p className="text-xl text-muted-foreground">Get to know more about my journey and passion</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <GraduationCap className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Current Focus</h3>
                </div>
                <p className="text-muted-foreground">
                  Currently pursuing Master of Science in Machine Learning at Eberhard Karls University of Tübingen, 
                  with expected graduation in 2026. My research interests span deep learning, neural networks, and AI applications.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <MapPin className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Location</h3>
                </div>
                <p className="text-muted-foreground">
                  Currently based in Tübingen, Germany. Originally from India, bringing diverse cultural perspectives 
                  to my work in technology and research.
                </p>
              </CardContent>
            </Card>

            <Card className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Languages className="h-6 w-6 text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Languages</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {languages.map((lang) => (
                    <Badge key={lang.name} variant="secondary">
                      {lang.name} ({lang.level})
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">My Story</h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I'm a highly accomplished and driven individual with a strong academic background in computer science 
                and machine learning. My journey in technology began with my Bachelor's degree in Computer Science 
                from BITS Pilani, where I achieved a CGPA of 8.49/10.
              </p>
              <p>
                Throughout my academic and professional journey, I've gained valuable experience through internships 
                at leading companies like Cisco and Palmtree Infotech, where I've worked on cutting-edge projects 
                involving natural language processing, automated testing, and system optimization.
              </p>
              <p>
                My passion lies in bridging theoretical knowledge with practical applications, evident in my diverse 
                portfolio of projects ranging from neural style transfer to building full-stack applications. 
                I'm particularly interested in the intersection of AI and human-computer interaction.
              </p>
              <p>
                When I'm not coding or researching, you'll find me exploring new technologies, contributing to 
                open-source projects, or sharing knowledge with the developer community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
