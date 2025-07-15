
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Github, ExternalLink, Code, Brain, Database, Smartphone, Image, Search } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'Generating Lecture Notes',
      description: 'AI-powered system that creates structured lecture notes by analyzing prerequisite knowledge graphs and optimizing content placement using advanced NLP techniques.',
      icon: <Brain className="h-8 w-8" />,
      technologies: ['Python', 'BeautifulSoup', 'PyTorch', 'BERT', 'LDA', 'NLP'],
      features: [
        'Prerequisite knowledge graph analysis',
        'Content optimization using LDA segmentation',
        'Bagging techniques for improved accuracy',
        'Automated note structure generation'
      ],
      category: 'AI/ML'
    },
    {
      title: 'ProSys - Project Management System',
      description: 'Full-stack MERN application designed for comprehensive academic project management with advanced features for collaboration and assessment.',
      icon: <Database className="h-8 w-8" />,
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'Socket.io', 'JWT'],
      features: [
        'Real-time chat system for project collaboration',
        'Advanced student grading and assessment tools',
        'Proposal approval workflow management',
        'Project timeline and milestone tracking'
      ],
      category: 'Full-stack'
    },
    {
      title: 'Boolean Retrieval System & Page Ranking',
      description: 'Sophisticated information retrieval system with advanced query processing and ranking algorithms for efficient document search and retrieval.',
      icon: <Search className="h-8 w-8" />,
      technologies: ['Python', 'PageRank', 'HITS Algorithm', 'Levenshtein Distance', 'Information Retrieval'],
      features: [
        'Spell correction using Levenshtein Distance',
        'Wildcard query handling and processing',
        'PageRank algorithm implementation',
        'HITS Algorithm for authority ranking'
      ],
      category: 'Algorithms'
    },
    {
      title: 'Neural Style Transfer',
      description: 'Advanced image stylization system using deep learning techniques with novel depth-preserving loss function for enhanced visual quality.',
      icon: <Image className="h-8 w-8" />,
      technologies: ['PyTorch', 'VGGNet', 'ADAM Optimizer', 'Computer Vision', 'Deep Learning'],
      features: [
        'Enhanced VGGNet architecture implementation',
        'Novel depth-preserving loss function',
        'Improved convergence speed optimization',
        'High-quality artistic style transfer'
      ],
      category: 'Computer Vision'
    },
    {
      title: 'Spatial Indexing with QuadTrees',
      description: 'High-performance geometric query processing system implemented in C++ using QuadTree data structures for optimal spatial indexing.',
      icon: <Code className="h-8 w-8" />,
      technologies: ['C++', 'QuadTrees', 'Data Structures', 'Spatial Indexing', 'Algorithms'],
      features: [
        'Efficient QuadTree implementation',
        'Optimized geometric query processing',
        'Fast spatial indexing and retrieval',
        'Scalable architecture for large datasets'
      ],
      category: 'Systems'
    },
    {
      title: 'Chatbot for Visually Impaired Students',
      description: 'Inclusive multilingual chatbot built with Microsoft AI tools to assist visually impaired students with natural language processing capabilities.',
      icon: <Smartphone className="h-8 w-8" />,
      technologies: ['Python', 'Microsoft AI Services', 'NLP', 'NLTK', 'Intent Classification'],
      features: [
        'Multilingual support for accessibility',
        'Advanced NLP and intent classification',
        'Voice-based interaction capabilities',
        'Specialized assistance for visually impaired users'
      ],
      category: 'AI/Accessibility'
    }
  ];

  const categoryColors = {
    'AI/ML': 'bg-blue-500/10 text-blue-600',
    'Full-stack': 'bg-green-500/10 text-green-600',
    'Algorithms': 'bg-purple-500/10 text-purple-600',
    'Computer Vision': 'bg-orange-500/10 text-orange-600',
    'Systems': 'bg-red-500/10 text-red-600',
    'AI/Accessibility': 'bg-indigo-500/10 text-indigo-600'
  };

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Projects</h2>
          <p className="text-xl text-muted-foreground">Showcasing my technical expertise and innovation</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover h-full">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    {project.icon}
                  </div>
                  <Badge className={categoryColors[project.category as keyof typeof categoryColors]}>
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {project.features.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3 pt-4">
                    <Button size="sm" variant="outline" className="flex-1">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
