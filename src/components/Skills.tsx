export const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['Python', 'Java', 'C++', 'JavaScript', 'C', 'SQL']
    },
    {
      title: 'Machine Learning',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'NLTK', 'Transformers']
    },
    {
      title: 'Web Technologies',
      skills: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Django', 'PostgreSQL']
    },
    {
      title: 'Tools & Technologies',
      skills: ['Docker', 'Jenkins', 'Git', 'Azure AI Services']
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <h2 className="text-2xl font-bold mb-4 text-foreground">Skills & Technologies</h2>

        <div className="space-y-3">
          {skillCategories.map((category, index) => (
            <div key={index}>
              <h3 className="text-sm font-semibold text-muted-foreground mb-1">{category.title}</h3>
              <p className="text-base text-foreground">{category.skills.join(' • ')}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
