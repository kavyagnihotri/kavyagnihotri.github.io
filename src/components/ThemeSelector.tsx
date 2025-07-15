
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Palette, Waves, Sun, Mountain, TreePine, Tent } from 'lucide-react';

export const ThemeSelector = () => {
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { name: 'cute', label: 'Cute', icon: <Palette className="h-4 w-4" />, className: '' },
    { name: 'sea', label: 'Sea', icon: <Waves className="h-4 w-4" />, className: 'theme-sea' },
    { name: 'beach', label: 'Beach', icon: <Sun className="h-4 w-4" />, className: 'theme-beach' },
    { name: 'mountain', label: 'Mountain', icon: <Mountain className="h-4 w-4" />, className: 'theme-mountain' },
    { name: 'camping', label: 'Camping', icon: <Tent className="h-4 w-4" />, className: 'theme-camping' },
    { name: 'forest', label: 'Forest', icon: <TreePine className="h-4 w-4" />, className: 'theme-forest' }
  ];

  const handleThemeChange = (themeClassName: string) => {
    // Remove all theme classes
    document.body.classList.remove('theme-sea', 'theme-beach', 'theme-mountain', 'theme-camping', 'theme-forest');
    
    // Add selected theme class
    if (themeClassName) {
      document.body.classList.add(themeClassName);
    }
    
    setIsOpen(false);
  };

  return (
    <div className="fixed top-4 right-4 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        className="cute-border cute-shadow"
      >
        <Palette className="h-4 w-4" />
      </Button>
      
      {isOpen && (
        <Card className="absolute top-12 right-0 w-48 cute-border cute-shadow">
          <CardContent className="p-4">
            <h3 className="font-semibold mb-3 text-sm">Choose Theme</h3>
            <div className="grid grid-cols-2 gap-2">
              {themes.map((theme) => (
                <Button
                  key={theme.name}
                  variant="outline"
                  size="sm"
                  onClick={() => handleThemeChange(theme.className)}
                  className="flex items-center gap-2 text-xs"
                >
                  {theme.icon}
                  {theme.label}
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
