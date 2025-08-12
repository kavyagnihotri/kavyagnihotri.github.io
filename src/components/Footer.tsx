
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-4">Kavyanjali Agnihotri</h3>
            <p className="text-muted-foreground mb-4">
              Master Machine Learning Student
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <a href="https://github.com/kavyagnihotri" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="https://www.linkedin.com/in/kavyagnihotri/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="mailto:kavyagnihotri17@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
              <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
              <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
              <li><a href="#achievements" className="hover:text-primary transition-colors">Achievements</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Current Status */}
          <div>
            <h4 className="font-semibold mb-4">Current Status</h4>
            <div className="text-muted-foreground space-y-2">
              {/* <p>🎓 M.Sc. in Machine Learning @ University of Tübingen</p> */}
              <p>💼 Student Assistant @ Scholar Inbox</p>
              <p>🌍 Based in Tübingen, Germany</p>
              <p>📧 Open to opportunities</p>
            </div>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-muted-foreground">
          <p className="flex items-center justify-center space-x-2">
            <span>© {currentYear} Kavyanjali Agnihotri. Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>using React & TypeScript</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
