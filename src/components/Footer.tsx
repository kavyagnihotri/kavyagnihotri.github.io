
import { Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-6">
      <div className="container mx-auto px-4 md:px-8 py-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-muted-foreground">
          <div>
            <p>© {currentYear} Kavyanjali Agnihotri. Powered by React & Vite.</p>
          </div>
          
          <div className="flex items-center space-x-4">
            <a href="https://github.com/kavyagnihotri" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="GitHub">
              <Github className="h-4 w-4" />
            </a>
            <a href="https://www.linkedin.com/in/kavyagnihotri/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="mailto:kavyagnihotri17@gmail.com" className="hover:text-primary transition-colors" aria-label="Email">
              <Mail className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
