
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Brain, Database, Search, Image, Cpu, Users } from 'lucide-react';

export const Projects = () => {
  const projects = [
    {
      title: 'ProSys - Project Management System',
      description: 'MERN Stack Application for managing project proposals, applications, project approvals and submissions for admin, students, and professors.',
      icon: <Database className="h-8 w-8" />,
      technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'MERN Stack'],
      features: [
        'Developed a web platform for managing project proposals, applications, project approvals and submissions for admin, students, and professors',
        'Added functionality to grade students and chat'
      ],
      category: 'Full-stack',
      timeline: 'January 2023 - April 2023'
    },
    {
      title: 'Generating Lecture Notes',
      description: 'Python-based system that creates structured lecture notes using prerequisite knowledge graphs and advanced NLP techniques.',
      icon: <Brain className="h-8 w-8" />,
      technologies: ['Python', 'BeautifulSoup', 'PyTorch', 'BERT', 'SimpleTransformers', 'LDA'],
      features: [
        'Created a Prerequisite Knowledge Graph via hub and authority scores to combine data on different topics to develop scientific lecture notes to understand a concept',
        'Preprocessed the scraped data and fine-tuned a BERT model using SimpleTransformers to predict the optimal placement for images, pseudocodes, and formulas within the definition',
        'Leveraging LDA segmentation and bagging techniques notably minimized bias, improving the depth and inclusivity of the lecture notes'
      ],
      category: 'AI/ML',
      timeline: 'January 2023 - March 2024'
    },
    {
      title: 'Boolean Retrieval System & Page Ranking',
      description: 'Information retrieval system with advanced query processing and ranking algorithms for efficient document search.',
      icon: <Search className="h-8 w-8" />,
      technologies: ['Python', 'NLTK', 'PageRank', 'HITS Algorithm', 'Levenshtein Distance'],
      features: [
        'Implemented a boolean information retrieval system with stopword removal and lemmatization',
        'Optimized search with spell correction by Levenshtein Distance and wildcard query handling using the bigram technique',
        'Implemented Page Rank algorithm using Power Iteration method to rank web pages for a given query and analyzed Random Teleportation with varying probabilities',
        'Implemented HITS Algorithm to evaluate web pages based on hubs score and authority score'
      ],
      category: 'NLP / Information Retrieval',
      timeline: 'March 2022 - May 2022'
    },
    {
      title: 'Neural Style Transfer',
      description: 'Image stylization system using deep learning with enhanced VGGNet architecture and novel depth-preserving loss function.',
      icon: <Image className="h-8 w-8" />,
      technologies: ['Python', 'PyTorch', 'TensorFlow', 'VGGNet', 'ADAM Optimizer'],
      features: [
        'Leveraged VGGNet architecture and ADAM optimizer for efficient image stylization',
        'Significantly enhanced stylization quality by introducing a novel depth preserving function into the loss function, leading to faster convergence, fewer iterations, and more visually appealing results'
      ],
      category: 'Computer Vision',
      timeline: 'November 2022 - December 2022'
    },
    {
      title: 'Spatial Indexing with QuadTrees',
      description: 'High-performance geometric query processing system implemented in C++ using QuadTree data structures.',
      icon: <Code className="h-8 w-8" />,
      technologies: ['C++', 'QuadTrees', 'Data Structures', 'Spatial Indexing'],
      features: [
        'Designed and implemented an efficient system for executing geometric queries',
        'Utilized QuadTrees to achieve faster query processing time compared to other indexing methods'
      ],
      category: 'Algorithms',
      timeline: 'February 2022'
    },
    {
      title: 'Matrix Multiplication with OS Concepts',
      description: 'Multi-threaded matrix multiplication system with scheduling algorithm analysis and synchronization.',
      icon: <Cpu className="h-8 w-8" />,
      technologies: ['Linux', 'C', 'Multi-threading', 'Synchronization', 'OS Concepts'],
      features: [
        'Developed a program to perform matrix multiplication efficiently using multi-threading',
        'Used multi-threading and synchronization for reading input matrices in parallel',
        'Analyzed and compared the response time, turnaround time, and waiting time for different scheduling techniques such as FCFS, SJF, and Round Robin with different time quanta'
      ],
      category: 'Systems',
      timeline: 'November 2022'
    },
    {
      title: 'Chatbot for Visually Impaired Students',
      description: 'Multilingual chatbot using NLP techniques to assist visually impaired students with natural language processing.',
      icon: <Users className="h-8 w-8" />,
      technologies: ['Python', 'Microsoft AI Tools', 'NLP', 'Intent Classification'],
      features: [
        'Built a simple multilingual chatbot using NLP techniques to answer questions and assist visually impaired students',
        'Integrated basic NLP pipelines and early-stage intent classification to improve user interaction'
      ],
      category: 'AI/Accessibility',
      timeline: 'November 2022'
    }
  ];

  const categoryColors = {
    'AI/ML': 'bg-blue-500/10 text-blue-600',
    'Full-stack': 'bg-green-500/10 text-green-600',
    'NLP / Information Retrieval': 'bg-purple-500/10 text-purple-600',
    'Computer Vision': 'bg-orange-500/10 text-orange-600',
    'Algorithms': 'bg-red-500/10 text-red-600',
    'Systems': 'bg-yellow-500/10 text-yellow-600',
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
            <Card key={index} className="card-hover h-full cute-border">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="bg-primary/10 p-3 rounded-lg text-primary">
                    {project.icon}
                  </div>
                  <Badge className={categoryColors[project.category as keyof typeof categoryColors]}>
                    {project.category}
                  </Badge>
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{project.timeline}</p>
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
