
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
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

// Sample blog posts - same as in Blog.tsx
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

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real implementation, you would fetch the specific markdown file here
    const foundPost = samplePosts.find(p => p.slug === slug);
    setPost(foundPost || null);
    setLoading(false);
  }, [slug]);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-20 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
            <p className="text-muted-foreground mb-8">The blog post you're looking for doesn't exist.</p>
            <Button asChild>
              <Link to="/blog">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Back to Blog */}
        <div className="container mx-auto px-4 py-8">
          <Button variant="ghost" asChild className="mb-8">
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>

        {/* Article Header */}
        <article className="container mx-auto px-4 max-w-4xl">
          <header className="mb-12">
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              {post.description}
            </p>
            
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
          </header>

          {/* Article Content */}
          <Card className="mb-12">
            <CardContent className="pt-8">
              <div className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-pre:bg-muted">
                <ReactMarkdown>{post.content}</ReactMarkdown>
              </div>
            </CardContent>
          </Card>
        </article>
      </main>

      <Footer />
    </div>
  );
}
