
import { useEffect, useState } from 'react';
import { Heart, Fish, Mountain, TreePine, Tent, Flag, Waves, Shell, Sun } from 'lucide-react';

export const ScrollProgressAnimation = () => {
  const [currentTheme, setCurrentTheme] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Initial check
    checkCurrentTheme();

    // Create a mutation observer to detect class changes on body
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          checkCurrentTheme();
        }
      });
    });

    observer.observe(document.body, { attributes: true });

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setScrollProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const checkCurrentTheme = () => {
    const bodyClasses = document.body.classList;
    if (bodyClasses.contains('theme-sea')) {
      setCurrentTheme('sea');
    } else if (bodyClasses.contains('theme-beach')) {
      setCurrentTheme('beach');
    } else if (bodyClasses.contains('theme-mountain')) {
      setCurrentTheme('mountain');
    } else if (bodyClasses.contains('theme-camping')) {
      setCurrentTheme('camping');
    } else if (bodyClasses.contains('theme-forest')) {
      setCurrentTheme('forest');
    } else {
      setCurrentTheme('cute');
    }
  };

  const getProgressPosition = () => {
    return Math.min(scrollProgress, 90); // Max at 90% to reach destination
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 h-20 pointer-events-none z-30">
      {/* Cute theme - kitten walking to food bowl */}
      {currentTheme === 'cute' && (
        <div className="relative w-full h-full">
          {/* Path line */}
          <div className="absolute bottom-8 left-8 right-8 h-0.5 bg-primary/20 rounded-full">
            <div 
              className="h-full bg-primary/40 rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
          
          {/* Moving kitten */}
          <div 
            className="absolute bottom-6 transition-all duration-300"
            style={{ left: `${8 + (getProgressPosition() * 0.8)}%` }}
          >
            <div className="w-8 h-8 bg-primary/80 rounded-full relative">
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-primary rounded-full"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>
          
          {/* Food bowl destination */}
          <div className="absolute bottom-6 right-8">
            <Heart size={24} className="text-primary" fill="currentColor" />
          </div>
        </div>
      )}

      {/* Sea theme - boat sailing to treasure */}
      {currentTheme === 'sea' && (
        <div className="relative w-full h-full">
          {/* Wave path */}
          <div className="absolute bottom-8 left-8 right-8 h-1">
            <Waves className="w-full h-full text-primary/30" />
          </div>
          
          {/* Moving boat */}
          <div 
            className="absolute bottom-6 transition-all duration-300"
            style={{ left: `${8 + (getProgressPosition() * 0.8)}%` }}
          >
            <div className="w-6 h-4 bg-primary/80 rounded-t-full relative">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0.5 h-3 bg-primary"></div>
            </div>
          </div>
          
          {/* Treasure chest */}
          <div className="absolute bottom-6 right-8">
            <div className="w-6 h-4 bg-primary/80 rounded border-2 border-primary"></div>
          </div>
          
          {/* Bubbles along the way */}
          {scrollProgress > 20 && (
            <div className="absolute bottom-10 left-1/4">
              <div className="w-1 h-1 bg-primary/40 rounded-full animate-float"></div>
            </div>
          )}
          {scrollProgress > 60 && (
            <div className="absolute bottom-12 right-1/3">
              <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-float-delay"></div>
            </div>
          )}
        </div>
      )}

      {/* Beach theme - kid building sandcastle */}
      {currentTheme === 'beach' && (
        <div className="relative w-full h-full">
          {/* Sand path */}
          <div className="absolute bottom-8 left-8 right-8 h-0.5 bg-primary/30 rounded-full">
            <div 
              className="h-full bg-primary/50 rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
          
          {/* Moving kid */}
          <div 
            className="absolute bottom-6 transition-all duration-300"
            style={{ left: `${8 + (getProgressPosition() * 0.8)}%` }}
          >
            <div className="w-6 h-8 bg-primary/80 rounded-t-full relative">
              <div className="absolute -bottom-2 -left-1 w-2 h-3 bg-primary/60 rounded"></div>
              <div className="absolute -bottom-2 -right-1 w-2 h-3 bg-primary/60 rounded"></div>
            </div>
          </div>
          
          {/* Sandcastle */}
          <div className="absolute bottom-6 right-8">
            <div className="w-8 h-6 bg-primary/80 relative">
              <div className="absolute -top-2 left-1 w-2 h-3 bg-primary/60"></div>
              <div className="absolute -top-2 right-1 w-2 h-3 bg-primary/60"></div>
            </div>
          </div>
          
          {/* Shells along the way */}
          {scrollProgress > 30 && (
            <div className="absolute bottom-7 left-1/3">
              <Shell size={12} className="text-primary/60" />
            </div>
          )}
        </div>
      )}

      {/* Mountain theme - hiker climbing to flag */}
      {currentTheme === 'mountain' && (
        <div className="relative w-full h-full">
          {/* Mountain path */}
          <div className="absolute bottom-6 left-8 right-8 h-8">
            <svg className="w-full h-full" viewBox="0 0 100 20" preserveAspectRatio="none">
              <path 
                d="M0,20 L20,15 L40,10 L60,8 L80,5 L100,2" 
                stroke="currentColor" 
                strokeWidth="1" 
                fill="none" 
                className="text-primary/30"
              />
            </svg>
          </div>
          
          {/* Moving hiker */}
          <div 
            className="absolute transition-all duration-300"
            style={{ 
              left: `${8 + (getProgressPosition() * 0.8)}%`,
              bottom: `${6 + (getProgressPosition() * 0.3)}px`
            }}
          >
            <div className="w-4 h-6 bg-primary/80 rounded-t-full relative">
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-primary rounded-full"></div>
            </div>
          </div>
          
          {/* Flag at summit */}
          <div className="absolute bottom-10 right-8">
            <Flag size={20} className="text-primary" />
          </div>
        </div>
      )}

      {/* Camping theme - girl walking to campfire */}
      {currentTheme === 'camping' && (
        <div className="relative w-full h-full">
          {/* Ground path */}
          <div className="absolute bottom-8 left-8 right-8 h-0.5 bg-primary/30 rounded-full">
            <div 
              className="h-full bg-primary/50 rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
          
          {/* Moving girl stick figure */}
          <div 
            className="absolute bottom-6 transition-all duration-300"
            style={{ left: `${8 + (getProgressPosition() * 0.8)}%` }}
          >
            <div className="relative">
              {/* Head */}
              <div className="w-3 h-3 bg-primary/80 rounded-full mx-auto mb-1"></div>
              {/* Body */}
              <div className="w-0.5 h-4 bg-primary/80 mx-auto"></div>
              {/* Arms */}
              <div className="absolute top-4 -left-1 w-3 h-0.5 bg-primary/80 rotate-12"></div>
              <div className="absolute top-4 -right-1 w-3 h-0.5 bg-primary/80 -rotate-12"></div>
              {/* Legs */}
              <div className="absolute bottom-0 -left-1 w-3 h-0.5 bg-primary/80 rotate-12"></div>
              <div className="absolute bottom-0 -right-1 w-3 h-0.5 bg-primary/80 -rotate-12"></div>
            </div>
          </div>
          
          {/* Campfire and tent */}
          <div className="absolute bottom-6 right-8 flex items-end gap-2">
            <Tent size={20} className="text-primary" />
            <div className="w-2 h-3 bg-primary/80 relative">
              <div className="absolute -top-1 -left-0.5 w-1 h-2 bg-red-500/80 rounded-full animate-flicker"></div>
            </div>
          </div>
        </div>
      )}

      {/* Forest theme - fox walking to mushroom house */}
      {currentTheme === 'forest' && (
        <div className="relative w-full h-full">
          {/* Forest path */}
          <div className="absolute bottom-8 left-8 right-8 h-0.5 bg-primary/30 rounded-full">
            <div 
              className="h-full bg-primary/50 rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
          
          {/* Moving fox */}
          <div 
            className="absolute bottom-6 transition-all duration-300"
            style={{ left: `${8 + (getProgressPosition() * 0.8)}%` }}
          >
            <div className="w-6 h-4 bg-primary/80 rounded-full relative">
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full"></div>
              <div className="absolute -back-2 left-0 w-4 h-1 bg-primary/60 rounded-full"></div>
            </div>
          </div>
          
          {/* Mushroom house */}
          <div className="absolute bottom-6 right-8">
            <div className="relative">
              <div className="w-6 h-3 bg-primary/80 rounded-t-full"></div>
              <div className="w-4 h-4 bg-primary/60 mx-auto rounded"></div>
            </div>
          </div>
          
          {/* Fireflies along the way */}
          {scrollProgress > 25 && (
            <div className="absolute bottom-12 left-1/4">
              <div className="w-1 h-1 bg-yellow-400/80 rounded-full animate-pulse"></div>
            </div>
          )}
          {scrollProgress > 70 && (
            <div className="absolute bottom-10 right-1/3">
              <div className="w-1 h-1 bg-yellow-400/80 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
