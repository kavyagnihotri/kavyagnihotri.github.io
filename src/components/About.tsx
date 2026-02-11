
import { Badge } from '@/components/ui/badge';
import { Languages } from 'lucide-react';

export const About = () => {
  const languages = [
    { name: 'Hindi', level: 'Native' },
    { name: 'English', level: 'Fluent' },
    { name: 'German', level: 'A2' },
  ];

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h2 className="text-2xl font-bold mb-2 text-foreground">About</h2>
        
        <div className="space-y-2">
          <div className="space-y-2">
            <p className="text-foreground leading-relaxed">
              I'm a highly driven researcher and engineer with a strong academic background in 
              computer science and machine learning. My journey in technology began with my 
              Bachelor's degree in Computer Science from BITS Pilani - Hyderabad Campus, and 
              continues with my current Master's program in Machine Learning at the University 
              of Tübingen.
            </p>
            
            <p className="text-muted-foreground leading-relaxed">
              Throughout my academic and professional journey, I've gained valuable experience 
              through internships at organizations like Cisco and Palmtree Infotech, where I've 
              worked on projects involving natural language processing, automated testing, and 
              system optimization. These experiences have strengthened my ability to bridge 
              theoretical advances with practical implementations.
            </p>
            
            <p className="text-foreground leading-relaxed">
              My research interests are focused on advancing the field of artificial intelligence, 
              particularly in deep learning architectures, natural language understanding, and the 
              development of more capable and ethical large language models. I'm fascinated by 
              human-computer interaction and believe in building AI systems that augment human 
              capabilities while remaining transparent and trustworthy.
            </p>

            <p className="text-foreground leading-relaxed">
              Beyond research and development, I enjoy reading books across various genres, 
              experimenting with baking, and exploring the fascinating intersections of psychology 
              and technology. I believe these diverse interests inform my approach to building 
              more human-centered AI systems.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-border">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Languages className="h-4 w-4 text-primary" />
              Languages
            </h3>
            <div className="flex flex-wrap gap-2">
              {languages.map((lang) => (
                <Badge key={lang.name} variant="secondary" className="text-sm">
                  {lang.name} ({lang.level})
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
