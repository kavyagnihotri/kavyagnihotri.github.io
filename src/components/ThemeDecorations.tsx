
import { useEffect, useState } from 'react';
import { Umbrella, Waves, Mountain, TreePine, Tent, Heart, Sun, Shell, Fish, Snowflake, Flame } from 'lucide-react';

export const ThemeDecorations = () => {
  const [currentTheme, setCurrentTheme] = useState('');

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

  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Cute theme decorations */}
      {currentTheme === 'cute' && (
        <>
          <div className="absolute top-20 left-10 animate-float">
            <Heart size={20} className="text-primary" fill="currentColor" />
          </div>
          <div className="absolute top-40 right-20 animate-float-delay">
            <Heart size={16} className="text-primary" fill="currentColor" />
          </div>
          <div className="absolute bottom-40 left-20 animate-float-delay-2">
            <Heart size={24} className="text-primary" fill="currentColor" />
          </div>
          <div className="absolute top-1/3 left-1/4 animate-float-delay-3">
            <Heart size={14} className="text-primary" fill="currentColor" />
          </div>
          <div className="absolute top-2/3 right-1/4 animate-float">
            <Heart size={18} className="text-primary" fill="currentColor" />
          </div>
        </>
      )}

      {/* Sea theme decorations */}
      {currentTheme === 'sea' && (
        <>
          <div className="absolute top-20 left-10 animate-wave">
            <Waves size={24} className="text-primary" />
          </div>
          <div className="absolute top-40 right-20 animate-wave-delay">
            <Waves size={20} className="text-primary" />
          </div>
          <div className="absolute bottom-40 left-20 animate-wave-delay-2">
            <Fish size={28} className="text-primary" />
          </div>
          <div className="absolute top-1/3 right-1/4 animate-float">
            <Shell size={16} className="text-primary" />
          </div>
          <div className="absolute bottom-1/3 left-1/3 animate-float-delay">
            <div className="w-4 h-4 rounded-full bg-primary/30 border border-primary/50"></div>
          </div>
        </>
      )}

      {/* Beach theme decorations */}
      {currentTheme === 'beach' && (
        <>
          <div className="absolute top-20 left-10 animate-float">
            <Umbrella size={24} className="text-primary" />
          </div>
          <div className="absolute top-40 right-20 animate-bounce-slow">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-red-400 to-blue-400 border-2 border-primary/80"></div>
          </div>
          <div className="absolute bottom-40 left-20 animate-float-delay">
            <Sun size={20} className="text-primary" />
          </div>
          <div className="absolute top-2/3 right-1/4 animate-float-delay-2">
            <div className="w-6 h-8 bg-primary/50 rounded-lg rotate-45"></div>
          </div>
          <div className="absolute top-1/2 left-1/3 animate-float">
            <Shell size={14} className="text-primary/70" />
          </div>
          <div className="absolute top-1/4 right-1/3 animate-float-delay-3">
            <div className="w-4 h-4 bg-yellow-400/80 rounded-full"></div>
          </div>
        </>
      )}

      {/* Mountain theme decorations */}
      {currentTheme === 'mountain' && (
        <>
          <div className="absolute top-20 left-10">
            <Mountain size={30} className="text-primary" />
          </div>
          <div className="absolute top-40 right-20">
            <Mountain size={20} className="text-primary" />
          </div>
          <div className="absolute bottom-40 left-20">
            <Mountain size={24} className="text-primary/70" />
          </div>
          <div className="absolute top-60 left-1/3 animate-float-delay">
            <Snowflake size={16} className="text-primary/60" />
          </div>
          <div className="absolute top-40 right-1/3 animate-float-delay-2">
            <Snowflake size={12} className="text-primary/60" />
          </div>
        </>
      )}

      {/* Camping theme decorations */}
      {currentTheme === 'camping' && (
        <>
          <div className="absolute top-20 left-10">
            <Tent size={30} className="text-primary" />
          </div>
          <div className="absolute top-40 right-20 animate-flicker">
            <Flame size={20} className="text-primary" />
          </div>
          <div className="absolute bottom-40 left-20 animate-flicker-delay">
            <div className="w-3 h-5 bg-primary rounded-full blur-[2px] opacity-80"></div>
          </div>
          <div className="absolute top-60 right-60">
            <div className="flex items-center gap-1">
              <div className="w-1 h-8 bg-primary/50 rounded-full"></div>
              <div className="w-1 h-6 bg-primary/50 rounded-full"></div>
              <div className="w-1 h-10 bg-primary/50 rounded-full"></div>
            </div>
          </div>
        </>
      )}

      {/* Forest theme decorations */}
      {currentTheme === 'forest' && (
        <>
          <div className="absolute top-20 left-10">
            <TreePine size={30} className="text-primary" />
          </div>
          <div className="absolute top-40 right-20">
            <TreePine size={20} className="text-primary" />
          </div>
          <div className="absolute bottom-40 left-20">
            <TreePine size={24} className="text-primary/70" />
          </div>
          <div className="absolute top-1/3 left-1/4">
            <div className="w-2 h-2 bg-primary/40 rounded-full"></div>
          </div>
          <div className="absolute bottom-1/3 right-1/4 animate-float-slow">
            <div className="w-3 h-1 bg-primary/30 rounded-full"></div>
          </div>
        </>
      )}
    </div>
  );
};
