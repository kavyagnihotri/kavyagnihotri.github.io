
import { useState, useEffect } from 'react';
import { Menu, X, Home, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate, useLocation } from 'react-router-dom';

/**
 * Header Component
 * 
 * Provides navigation for both:
 * 1. Main page sections (About, Education, etc.) - smooth scroll navigation
 * 2. Separate pages (Blogs) - React Router navigation
 * 
 * Features:
 * - Responsive design with mobile menu
 * - Scroll-based background changes
 * - Different navigation modes based on current page
 */
export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  // Check if we're on the main page or a separate page
  const isMainPage = location.pathname === '/';
  const isBlogsPage = location.pathname.startsWith('/blogs');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation items for main page sections
  const mainPageNavigation = [
    { name: 'Home', href: '#about' },
    // { name: 'Education', href: '#education' },
    // { name: 'Experience', href: '#experience' },
    // { name: 'Projects', href: '#projects' },
    // { name: 'Skills', href: '#skills' },
    // { name: 'Achievements', href: '#achievements' },
    // { name: 'Contact', href: '#contact' },
  ];

  /**
   * Handles smooth scrolling to sections on the main page
   */
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  /**
   * Handles navigation to separate pages
   */
  const navigateToPage = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
      scrolled ? 'bg-background/95 backdrop-blur-sm shadow-sm' : 'bg-background/95 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 md:px-8 py-3">
        <div className="flex items-center justify-between">
          {/* Logo/Name - Academic Pages style */}
          <button
            onClick={() => navigateToPage('/')}
            className="text-xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            Kavyanjali Agnihotri
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {/* Main page sections - only show on main page */}
            {isMainPage && mainPageNavigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted/50 rounded transition-colors duration-200"
              >
                {item.name}
              </button>
            ))}
            
            {/* Page navigation buttons */}
            <div className="flex items-center space-x-1 border-l ml-2 pl-2">
              {!isMainPage && (
                <button
                  onClick={() => navigateToPage('/')}
                  className="flex items-center space-x-1 px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted/50 rounded transition-colors duration-200"
                >
                  <Home size={14} />
                  <span>Home</span>
                </button>
              )}
              
              {!isBlogsPage && (
                <button
                  onClick={() => navigateToPage('/blogs')}
                  className="flex items-center space-x-1 px-3 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-muted/50 rounded transition-colors duration-200"
                >
                  <FileText size={14} />
                  <span>Blogs</span>
                </button>
              )}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              {/* Main page sections - only show on main page */}
              {isMainPage && mainPageNavigation.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground/80 hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              
              {/* Page navigation - always show */}
              <div className="border-t pt-4 space-y-4">
                {!isMainPage && (
                  <button
                    onClick={() => navigateToPage('/')}
                    className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    <Home size={16} />
                    <span>Home</span>
                  </button>
                )}
                
                {!isBlogsPage && (
                  <button
                    onClick={() => navigateToPage('/blogs')}
                    className="flex items-center space-x-2 text-foreground/80 hover:text-primary transition-colors duration-200"
                  >
                    <FileText size={16} />
                    <span>Blogs & Posts</span>
                  </button>
                )}
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
