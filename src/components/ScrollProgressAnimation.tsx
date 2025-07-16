
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
    return scrollProgress * 0.7; // 70% of screen width
  };

  return (
    <div className="fixed bottom-4 left-0 right-0 h-20 pointer-events-none z-30">
      {/* Cute theme - cat walking to ball of yarn */}
      {currentTheme === 'cute' && (
        <div className="relative w-full h-full">
          {/* Path line */}
          <div className="absolute bottom-8 left-[15%] w-[70%] h-0.5 bg-primary/20 rounded-full">
            <div 
              className="h-full bg-primary/40 rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
          
          {/* Moving cat - made thinner */}
          <div 
            className="absolute bottom-6 transition-all duration-300"
            style={{ left: `${15 + getProgressPosition()}%` }}
          >
            <div className="w-6 h-4 bg-primary/80 rounded-full relative">
              {/* Body - made thinner */}
              <div className="absolute top-0.5 left-0.5 w-5 h-2 bg-primary/80 rounded-full"></div>
              {/* Head */}
              <div className="absolute -top-1 right-0.5 w-2.5 h-2.5 bg-primary rounded-full"></div>
              {/* Ears */}
              <div className="absolute -top-2 right-0.5 w-0.5 h-1 bg-primary/60 rounded-full"></div>
              <div className="absolute -top-2 right-1.5 w-0.5 h-1 bg-primary/60 rounded-full"></div>
              {/* Tail */}
              <div className="absolute top-0 -left-1 w-0.5 h-3 bg-primary/60 rounded-full rotate-45"></div>
              {/* Legs */}
              <div className="absolute bottom-0 left-1.5 w-0.5 h-1.5 bg-primary/60 rounded-full"></div>
              <div className="absolute bottom-0 left-3 w-0.5 h-1.5 bg-primary/60 rounded-full"></div>
            </div>
          </div>
          
          {/* Ball of yarn */}
          <div className="absolute bottom-6 right-[15%]">
            <div className="w-6 h-6 bg-primary/80 rounded-full relative">
              <div className="absolute top-1 left-1 w-4 h-4 bg-primary/60 rounded-full"></div>
              <div className="absolute top-0 left-2 w-2 h-1 bg-primary/40 rounded-full"></div>
              <div className="absolute top-2 left-0 w-3 h-1 bg-primary/40 rounded-full"></div>
              <div className="absolute top-4 left-3 w-2 h-1 bg-primary/40 rounded-full"></div>
            </div>
          </div>
        </div>
      )}

      {/* Sea theme - boat sailing to treasure chest */}
      {currentTheme === 'sea' && (
        <div className="relative w-full h-full">
          {/* Wave path */}
          <div className="absolute bottom-8 left-[15%] w-[70%] h-1">
            <div className="w-full h-full">
              <svg className="w-full h-full" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path 
                  d="M0,5 Q25,2 50,5 T100,5" 
                  stroke="currentColor" 
                  strokeWidth="1" 
                  fill="none" 
                  className="text-primary/30"
                />
              </svg>
            </div>
          </div>
          
          {/* Moving boat */}
          <div 
            className="absolute bottom-6 transition-all duration-300"
            style={{ left: `${15 + getProgressPosition()}%` }}
          >
            <div className="relative">
              {/* Hull */}
              <div className="w-10 h-4 bg-primary/80 relative">
                <div className="absolute bottom-0 left-1 right-1 h-3 bg-primary/80 rounded-b-full"></div>
              </div>
              {/* Mast */}
              <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0.5 h-5 bg-primary/60"></div>
              {/* Sail */}
              <div className="absolute -top-2 left-3 w-4 h-3 bg-primary/60 rounded-r-lg"></div>
              {/* Flag */}
              <div className="absolute -top-2 left-4 w-1 h-1 bg-red-400"></div>
            </div>
          </div>
          
          {/* Treasure chest */}
          <div className="absolute bottom-6 right-[15%]">
            <div className="w-8 h-6 bg-primary/80 relative rounded-sm">
              {/* Chest body */}
              <div className="absolute bottom-0 left-0 right-0 h-4 bg-primary/80 rounded-sm border-2 border-primary/60"></div>
              {/* Chest lid */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-primary/60 rounded-t-sm border-2 border-primary/40"></div>
              {/* Lock */}
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-yellow-400 rounded-full"></div>
              {/* Metal bands */}
              <div className="absolute top-1 left-0 right-0 h-0.5 bg-primary/40"></div>
              <div className="absolute bottom-1 left-0 right-0 h-0.5 bg-primary/40"></div>
            </div>
          </div>
          
          {/* Bubbles along the way */}
          {scrollProgress > 20 && (
            <div className="absolute bottom-10" style={{ left: `${25 + (scrollProgress * 0.2)}%` }}>
              <div className="w-1 h-1 bg-primary/40 rounded-full animate-bounce"></div>
            </div>
          )}
          {scrollProgress > 60 && (
            <div className="absolute bottom-12" style={{ left: `${45 + (scrollProgress * 0.15)}%` }}>
              <div className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></div>
            </div>
          )}
        </div>
      )}

      {/* Beach theme - bucket with sand to sandcastle */}
      {currentTheme === 'beach' && (
        <div className="relative w-full h-full">
          {/* Sand path */}
          <div className="absolute bottom-8 left-[15%] w-[70%] h-0.5 bg-primary/30 rounded-full">
            <div 
              className="h-full bg-primary/50 rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
          
          {/* Moving bucket with sand */}
          <div 
            className="absolute bottom-6 transition-all duration-300"
            style={{ left: `${15 + getProgressPosition()}%` }}
          >
            <div className="relative">
              {/* Bucket */}
              <div className="w-6 h-5 bg-primary/80 relative">
                <div className="absolute bottom-0 left-0 right-0 h-4 bg-primary/80 rounded-b-sm border-2 border-primary/60"></div>
                {/* Handle */}
                <div className="absolute -top-1 left-1 right-1 h-1 border-t-2 border-primary/60 rounded-full"></div>
                {/* Sand inside */}
                <div className="absolute top-0 left-1 right-1 h-2 bg-primary/60 rounded-sm"></div>
              </div>
            </div>
          </div>
          
          {/* Sandcastle */}
          <div className="absolute bottom-6 right-[15%]">
            <div className="relative">
              {/* Main castle */}
              <div className="w-8 h-6 bg-primary/80 relative rounded-sm">
                {/* Base */}
                <div className="absolute bottom-0 left-0 right-0 h-3 bg-primary/80 rounded-sm"></div>
                {/* Towers */}
                <div className="absolute -top-2 left-0 w-2 h-3 bg-primary/60 rounded-sm"></div>
                <div className="absolute -top-3 left-3 w-2 h-4 bg-primary/60 rounded-sm"></div>
                <div className="absolute -top-2 right-0 w-2 h-3 bg-primary/60 rounded-sm"></div>
                {/* Flags */}
                <div className="absolute -top-3 left-1 w-1 h-1 bg-red-400 rounded-full"></div>
                <div className="absolute -top-4 left-4 w-1 h-1 bg-blue-400 rounded-full"></div>
                <div className="absolute -top-3 right-1 w-1 h-1 bg-yellow-400 rounded-full"></div>
                {/* Door */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-2 bg-primary/40 rounded-t-sm"></div>
              </div>
            </div>
          </div>
          
          {/* Shells along the way */}
          {scrollProgress > 30 && (
            <div className="absolute bottom-7" style={{ left: `${30 + (scrollProgress * 0.2)}%` }}>
              <Shell size={12} className="text-primary/60" />
            </div>
          )}
        </div>
      )}

      {/* Mountain theme - hiker climbing to flag */}
      {currentTheme === 'mountain' && (
        <div className="relative w-full h-full">
          {/* Mountain path */}
          <div className="absolute bottom-6 left-[15%] w-[70%] h-8">
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
          
          {/* Moving hiker - mage-like with hat and staff */}
          <div 
            className="absolute transition-all duration-300"
            style={{ 
              left: `${15 + getProgressPosition()}%`,
              bottom: `${6 + (scrollProgress * 0.3)}px`
            }}
          >
            <div className="relative">
              {/* Wizard hat */}
              <div className="w-1 h-3 bg-primary/80 rounded-t-full mx-auto mb-0.5 transform rotate-12"></div>
              {/* Head */}
              <div className="w-2 h-2 bg-primary/80 rounded-full mx-auto mb-0.5"></div>
              {/* Body/robe */}
              <div className="w-1.5 h-4 bg-primary/80 mx-auto rounded-b-sm"></div>
              {/* Arms */}
              <div className="absolute top-3 -left-1 w-2 h-0.5 bg-primary/80 rotate-12"></div>
              <div className="absolute top-3 -right-1 w-2 h-0.5 bg-primary/80 -rotate-12"></div>
              {/* Legs */}
              <div className="absolute bottom-0 left-0 w-2 h-0.5 bg-primary/80 rotate-12"></div>
              <div className="absolute bottom-0 right-0 w-2 h-0.5 bg-primary/80 -rotate-12"></div>
              {/* Staff */}
              <div className="absolute top-0 -left-1.5 w-0.5 h-6 bg-primary/60"></div>
              {/* Staff orb */}
              <div className="absolute -top-1 -left-1.5 w-1 h-1 bg-primary/80 rounded-full"></div>
            </div>
          </div>
          
          {/* Flag at summit */}
          <div className="absolute bottom-10 right-[15%]">
            <div className="relative">
              <div className="w-0.5 h-6 bg-primary/60"></div>
              <Flag size={16} className="text-primary absolute -top-1 left-0.5" />
            </div>
          </div>
        </div>
      )}

      {/* Camping theme - girl walking to campfire */}
      {currentTheme === 'camping' && (
        <div className="relative w-full h-full">
          {/* Ground path */}
          <div className="absolute bottom-8 left-[15%] w-[70%] h-0.5 bg-primary/30 rounded-full">
            <div 
              className="h-full bg-primary/50 rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
          
          {/* Moving girl stick figure - improved standing posture */}
          <div 
            className="absolute bottom-6 transition-all duration-300"
            style={{ left: `${15 + getProgressPosition()}%` }}
          >
            <div className="relative">
              {/* Head */}
              <div className="w-2 h-2 bg-primary/80 rounded-full mx-auto mb-0.5"></div>
              {/* Body */}
              <div className="w-0.5 h-4 bg-primary/80 mx-auto"></div>
              {/* Arms */}
              <div className="absolute top-2 -left-1 w-2 h-0.5 bg-primary/80 rotate-12"></div>
              <div className="absolute top-2 -right-1 w-2 h-0.5 bg-primary/80 -rotate-12"></div>
              {/* Legs */}
              <div className="absolute bottom-0 left-0 w-2 h-0.5 bg-primary/80 rotate-12"></div>
              <div className="absolute bottom-0 right-0 w-2 h-0.5 bg-primary/80 -rotate-12"></div>
              {/* Hair */}
              <div className="absolute -top-1 left-0.5 w-1 h-1 bg-primary/60 rounded-full"></div>
            </div>
          </div>
          
          {/* Campfire and tent */}
          <div className="absolute bottom-6 right-[15%] flex items-end gap-2">
            <Tent size={20} className="text-primary" />
            <div className="relative">
              {/* Fire logs */}
              <div className="w-4 h-1 bg-primary/60 rounded"></div>
              <div className="w-4 h-1 bg-primary/60 rounded rotate-45 absolute top-0"></div>
              {/* Flames */}
              <div className="absolute -top-2 left-1 w-1 h-3 bg-red-500/80 rounded-full animate-pulse"></div>
              <div className="absolute -top-1 left-2 w-1 h-2 bg-orange-500/80 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      )}

      {/* Forest theme - fox walking to mushroom house */}
      {currentTheme === 'forest' && (
        <div className="relative w-full h-full">
          {/* Forest path */}
          <div className="absolute bottom-8 left-[15%] w-[70%] h-0.5 bg-primary/30 rounded-full">
            <div 
              className="h-full bg-primary/50 rounded-full transition-all duration-300"
              style={{ width: `${scrollProgress}%` }}
            ></div>
          </div>
          
          {/* Moving fox - improved to look more fox-like */}
          <div 
            className="absolute bottom-6 transition-all duration-300"
            style={{ left: `${15 + getProgressPosition()}%` }}
          >
            <div className="relative">
              {/* Body */}
              <div className="w-6 h-2 bg-orange-600/80 rounded-full"></div>
              {/* Head */}
              <div className="absolute -top-1 right-0 w-3 h-3 bg-orange-600/80 rounded-full"></div>
              {/* Snout */}
              <div className="absolute -top-1 right-0 w-2 h-2 bg-orange-700/80 rounded-full"></div>
              {/* Ears */}
              <div className="absolute -top-2 right-0 w-1 h-1.5 bg-orange-600/80 rounded-full"></div>
              <div className="absolute -top-2 right-1 w-1 h-1.5 bg-orange-600/80 rounded-full"></div>
              {/* White chest */}
              <div className="absolute top-0 right-1 w-1.5 h-1.5 bg-white/80 rounded-full"></div>
              {/* Tail */}
              <div className="absolute top-0 -left-3 w-4 h-1.5 bg-orange-600/80 rounded-full"></div>
              <div className="absolute top-0 -left-2 w-1 h-1 bg-white/80 rounded-full"></div>
              {/* Legs */}
              <div className="absolute bottom-0 left-1 w-0.5 h-1 bg-orange-700/80 rounded-full"></div>
              <div className="absolute bottom-0 left-2 w-0.5 h-1 bg-orange-700/80 rounded-full"></div>
              <div className="absolute bottom-0 right-1 w-0.5 h-1 bg-orange-700/80 rounded-full"></div>
              <div className="absolute bottom-0 right-2 w-0.5 h-1 bg-orange-700/80 rounded-full"></div>
            </div>
          </div>
          
          {/* Mushroom house */}
          <div className="absolute bottom-6 right-[15%]">
            <div className="relative">
              {/* Mushroom cap */}
              <div className="w-8 h-4 bg-red-500/80 rounded-t-full border-2 border-primary/60 relative">
                <div className="absolute top-1 left-1 w-1.5 h-1.5 bg-white/80 rounded-full"></div>
                <div className="absolute top-2 right-1 w-1 h-1 bg-white/80 rounded-full"></div>
              </div>
              {/* Stem/house */}
              <div className="w-5 h-4 bg-primary/60 mx-auto rounded-b relative">
                <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-1.5 h-2 bg-primary/40 rounded"></div>
              </div>
            </div>
          </div>
          
          {/* Fireflies along the way */}
          {scrollProgress > 25 && (
            <div className="absolute bottom-12" style={{ left: `${25 + (scrollProgress * 0.2)}%` }}>
              <div className="w-1 h-1 bg-yellow-400/80 rounded-full animate-pulse"></div>
            </div>
          )}
          {scrollProgress > 70 && (
            <div className="absolute bottom-10" style={{ left: `${55 + (scrollProgress * 0.15)}%` }}>
              <div className="w-1 h-1 bg-yellow-400/80 rounded-full animate-pulse"></div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
