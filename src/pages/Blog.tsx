
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tags: string[];
  content: string;
}

// Sample blog posts - in a real implementation, these would be loaded from markdown files
const samplePosts: BlogPost[] = [
  {
    slug: 'getting-started-with-machine-learning',
    title: 'Getting Started with Machine Learning: A Beginner\'s Guide',
    description: 'An introduction to the fundamentals of machine learning, covering key concepts, algorithms, and practical applications.',
    date: '2024-01-15',
    readTime: '8 min read',
    tags: ['Machine Learning', 'AI', 'Beginner'],
    content: `# Getting Started with Machine Learning

Machine learning has become one of the most exciting and rapidly growing fields in technology. Whether you're a complete beginner or looking to transition into ML, this guide will help you understand the fundamentals.

## What is Machine Learning?

Machine learning is a subset of artificial intelligence that enables computers to learn and make decisions without being explicitly programmed for every task.

## Key Concepts

1. **Supervised Learning**: Learning with labeled data
2. **Unsupervised Learning**: Finding patterns in unlabeled data
3. **Reinforcement Learning**: Learning through trial and error

## Getting Started

To begin your ML journey, focus on understanding these core areas:
- Statistics and probability
- Programming (Python/R)
- Linear algebra
- Data preprocessing

The key is to start with projects and learn by doing!`
  },
  {
    slug: 'building-scalable-web-applications',
    title: 'Building Scalable Web Applications with React and TypeScript',
    description: 'Best practices for creating maintainable and scalable web applications using modern React patterns and TypeScript.',
    date: '2024-01-10',
    readTime: '12 min read',
    tags: ['React', 'TypeScript', 'Web Development'],
    content: `# Building Scalable Web Applications

Creating scalable web applications requires careful planning, good architecture decisions, and following best practices from the start.

## Key Principles

1. **Component Architecture**: Build reusable, composable components
2. **Type Safety**: Leverage TypeScript for better development experience
3. **State Management**: Choose the right state management solution
4. **Performance**: Optimize for speed and user experience

## Tools and Technologies

- React with TypeScript
- Modern bundlers (Vite, Webpack)
- CSS-in-JS or Tailwind CSS
- Testing frameworks (Jest, React Testing Library)

The foundation you build today determines how easily you can scale tomorrow.`
  },
  {
    slug: 'ai-in-everyday-life',
    title: 'AI in Everyday Life: How Machine Learning Shapes Our World',
    description: 'Exploring the various ways artificial intelligence and machine learning technologies impact our daily lives.',
    date: '2024-01-05',
    readTime: '6 min read',
    tags: ['AI', 'Technology', 'Society'],
    content: `# AI in Everyday Life

Artificial intelligence isn't just science fiction anymore – it's woven into the fabric of our daily lives in ways we might not even notice.

## Where We Encounter AI

- **Recommendation Systems**: Netflix, Spotify, Amazon
- **Navigation**: Google Maps, GPS systems
- **Communication**: Email spam detection, language translation
- **Shopping**: Price optimization, inventory management

## The Future Impact

As AI continues to evolve, we can expect even more integration into:
- Healthcare diagnostics
- Educational personalization
- Smart home automation
- Autonomous vehicles

Understanding AI helps us make better decisions about the technology we use every day.`
  }
];

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // In a real implementation, you would fetch markdown files here
    // For now, we'll use the sample posts
    setPosts(samplePosts);
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-background via-background to-muted/20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gradient">
              Blog & Insights
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts on machine learning, software development, and technology trends
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:gap-12">
              {posts.map((post, index) => (
                <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300">
                  <CardHeader className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <CardTitle className="text-2xl md:text-3xl group-hover:text-primary transition-colors">
                      <Link to={`/blog/${post.slug}`}>
                        {post.title}
                      </Link>
                    </CardTitle>
                    
                    <CardDescription className="text-base leading-relaxed">
                      {post.description}
                    </CardDescription>
                    
                    <div className="flex items-center gap-6 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        {formatDate(post.date)}
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        {post.readTime}
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium"
                    >
                      Read more <ArrowRight className="h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
