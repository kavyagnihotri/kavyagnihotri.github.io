import { useTheme } from 'next-themes';
import { Moon, Sun } from 'lucide-react';

export const ThemeToggle = ({ className = '' }: { className?: string }) => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={`flex items-center justify-center p-2 text-foreground/80 hover:text-primary hover:bg-muted/50 rounded transition-colors duration-200 ${className}`}
    >
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  );
};
