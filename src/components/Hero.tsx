
import { Github, Linkedin, Mail, MapPin, GraduationCap, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export const Hero = () => {
  return (
    <section className="pt-20 pb-4">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="grid lg:grid-cols-[260px,1fr] gap-8 items-start">
          {/* Left sidebar - Profile Picture and Quick Info */}
          <aside className="lg:sticky lg:top-24">
            <Card className="p-4 border shadow-sm">
              {/* Profile Picture */}
              <div className="mb-3">
                <img
                  src="/profile/profile.jpg"
                  alt="Kavyanjali Agnihotri"
                  className="w-full aspect-square object-cover rounded-lg border-2 border-border"
                  loading="lazy"
                />
              </div>

              {/* Quick Bio */}
              <div className="space-y-2 text-sm border-b pb-3">
                <div className="flex items-start gap-2">
                  <GraduationCap className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-medium">M.Sc. Machine Learning</p>
                    <p className="text-muted-foreground text-xs">University of Tübingen</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-xs">Tübingen, Germany</p>
                  </div>
                </div>

                <div className="flex items-start gap-2">
                  <Languages className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground text-xs">English (C2) • German (A2) • Hindi (Native)</p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-3 pb-3 border-b flex gap-2">
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href="https://github.com/kavyagnihotri" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href="https://www.linkedin.com/in/kavyagnihotri/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="flex-1">
                  <a href="mailto:kavyagnihotri17@gmail.com" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              {/* CV */}
              <div className="pt-3">
                <Button className="w-full" size="sm" asChild>
                  <a href="/cv/Agnihotri_CV.pdf" target="_blank" rel="noopener noreferrer">
                    View CV
                  </a>
                </Button>
              </div>
            </Card>
          </aside>

          {/* Main content - Name and Introduction */}
          <main className="space-y-2">
            <div className="border-b pb-2">
              <h1 className="text-4xl md:text-5xl font-bold mb-1 text-foreground">
                Kavyanjali Agnihotri
              </h1>
              <p className="text-xl text-muted-foreground">
                Machine Learning Engineer & Researcher
              </p>
            </div>

            <div className="space-y-1.5 text-base leading-relaxed">
              <p className="text-foreground text-justify">
                Hi there! I am a Master's student in Machine Learning at the 
                <a href='https://uni-tuebingen.de/'>University of Tübingen</a>, Germany. 
                I completed my undergraduate in Computer Science from 
                <a href='https://www.bits-pilani.ac.in/hyderabad/'>BITS Pilani, Hyderabad</a>. 
                My research interests lie at the intersection of <strong>Natural Language Processing</strong>
                , <strong>AI Safety</strong>, and <strong>Large Language Models</strong>. 
                I'm passionate about bridging theoretical 
                advances in AI with practical applications that make a real-world impact.
              </p>

              <p className="text-foreground text-justify">
                When I'm not immersed in research or coding, you'll find me exploring new 
                books, experimenting with baking, or diving into the fascinating world of 
                psychology and human behavior.
              </p>
            </div>

            {/* Research Interests */}
            <div className="pt-1">
              <h2 className="text-xl font-semibold mb-1.5 text-foreground">Research Interests</h2>
              <div className="flex flex-wrap gap-2">
                {['NLP', 'LLMs', 'AI Alignment and Safety',
                   'Human-Computer Interaction'].map((interest) => (
                  <span 
                    key={interest}
                    className="px-3 py-1 bg-muted border border-border rounded text-sm hover:bg-muted/80 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};
