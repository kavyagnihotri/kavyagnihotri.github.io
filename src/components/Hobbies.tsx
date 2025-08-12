
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Waves, Palette, Dumbbell } from 'lucide-react';

export const Hobbies = () => {
  const hobbies = [
    {
      name: 'Baking',
      icon: <ChefHat className="h-8 w-8" />,
      description: 'Passionate about creating delicious treats and experimenting with new recipes',
      color: 'bg-orange-500/10 text-orange-600'
    },
    {
      name: 'Swimming',
      icon: <Waves className="h-8 w-8" />,
      description: 'Enjoy the mental and physical benefits of this full-body workout',
      color: 'bg-blue-500/10 text-blue-600'
    },
    {
      name: 'Painting',
      icon: <Palette className="h-8 w-8" />,
      description: 'Creative expression through different painting techniques',
      color: 'bg-purple-500/10 text-purple-600'
    },
    {
      name: 'Light Exercising',
      icon: <Dumbbell className="h-8 w-8" />,
      description: 'Maintaining physical fitness through regular light exercise and wellness routines',
      color: 'bg-green-500/10 text-green-600'
    }
  ];

  return (
    <section id="hobbies" className="section-padding bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Hobbies & Interests</h2>
          <p className="text-xl text-muted-foreground">What I enjoy doing in my free time</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hobbies.map((hobby, index) => (
            <Card key={index} className="card-hover text-center cute-border">
              <CardContent className="p-6">
                <div className={`inline-flex p-4 rounded-full ${hobby.color} mb-4`}>
                  {hobby.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{hobby.name}</h3>
                <p className="text-muted-foreground text-sm">{hobby.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
