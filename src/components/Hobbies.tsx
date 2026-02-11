import { ChefHat, Waves, Palette, Dumbbell, BookOpen, Brain } from 'lucide-react';

export const Hobbies = () => {
  const hobbies = [
    { name: 'Baking', icon: <ChefHat className="h-5 w-5" />, color: 'bg-orange-500/10 text-orange-600' },
    { name: 'Swimming', icon: <Waves className="h-5 w-5" />, color: 'bg-blue-500/10 text-blue-600' },
    { name: 'Painting', icon: <Palette className="h-5 w-5" />, color: 'bg-purple-500/10 text-purple-600' },
    { name: 'Light Exercising', icon: <Dumbbell className="h-5 w-5" />, color: 'bg-green-500/10 text-green-600' },
    { name: 'Reading', icon: <BookOpen className="h-5 w-5" />, color: 'bg-indigo-500/10 text-indigo-600' },
    { name: 'Psychology', icon: <Brain className="h-5 w-5" />, color: 'bg-pink-500/10 text-pink-600' },
  ];

  return (
    <section id="hobbies" className="section-padding">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h2 className="text-2xl font-bold mb-6 text-foreground">Interests & Hobbies</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {hobbies.map((hobby, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className={`p-2.5 rounded-lg ${hobby.color} flex-shrink-0`}>
                {hobby.icon}
              </div>
              <span className="text-base font-medium text-foreground">{hobby.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
