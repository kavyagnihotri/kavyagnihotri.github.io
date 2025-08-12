
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, AlertCircle } from 'lucide-react';

/**
 * Blog Post Metadata Interface
 */
interface BlogPostData {
  title: string;
  date: string;
  content: string;
  readTime?: string;
  tags?: string[];
  author?: string;
}

/**
 * BlogPost Component
 * 
 * Displays an individual blog post loaded from a markdown file.
 * 
 * Features:
 * - Markdown rendering
 * - Metadata display (date, read time, tags)
 * - Navigation back to blog listing
 * - Responsive typography
 * 
 * URL Structure: /blogs/:slug
 * File Structure: /public/blogs/:slug.md
 */
const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  /**
   * Loads and parses the markdown file for the blog post
   */
  useEffect(() => {
    const loadBlogPost = async () => {
      if (!slug) {
        setError('Blog post not found');
        setLoading(false);
        return;
      }

      try {
        // TODO: Replace with actual markdown file loading
        // const response = await fetch(`/blogs/${slug}.md`);
        // const markdownContent = await response.text();
        // const parsedPost = parseMarkdown(markdownContent);

        // Sample blog post data - replace with actual markdown parsing
        const samplePosts: Record<string, BlogPostData> = {
//           'welcome-to-my-blog': {
//             title: 'Welcome to My Blog',
//             date: '2024-01-15',
//             content: `# Welcome to My Blog

// Hello and welcome to my personal blog! I'm excited to share my thoughts, experiences, and insights with you.

// ## What You Can Expect

// In this blog, I'll be writing about:

// - **Technology**: My experiences with machine learning, software development, and emerging technologies
// - **Career**: Lessons learned, challenges faced, and growth opportunities
// - **Learning**: New skills I'm developing and resources I find valuable
// - **Life**: Personal reflections and experiences that shape my perspective

// ## Why I Started This Blog

// I believe in the power of sharing knowledge and experiences. Through this blog, I hope to:

// 1. Document my journey as a machine learning engineer
// 2. Share insights that might help others in similar paths
// 3. Connect with like-minded individuals
// 4. Practice articulating complex technical concepts

// ## Stay Connected

// I'll be posting regularly, so be sure to check back often. Thank you for visiting, and I look forward to sharing this journey with you!

// ---

// *This is just the beginning. More exciting content coming soon!*`,
//             readTime: '3 min read',
//             tags: ['introduction', 'personal'],
//             author: 'Kavyanjali Agnihotri'
//           },
//           'machine-learning-journey': {
//             title: 'My Machine Learning Journey',
//             date: '2024-01-10',
//             content: `# My Machine Learning Journey

// Machine learning has been one of the most fascinating and challenging fields I've had the pleasure to work in. Here's my story.

// ## The Beginning

// It all started during my undergraduate studies when I first encountered the concept of neural networks. The idea that machines could "learn" patterns from data seemed almost magical.

// ## Key Milestones

// ### First Project
// My first machine learning project was a simple image classifier. Despite its simplicity, seeing the model correctly identify images was incredibly rewarding.

// ### Academic Growth
// During my master's program, I dove deeper into:
// - **Deep Learning**: Understanding the mathematics behind neural networks
// - **Computer Vision**: Working with image and video data
// - **Natural Language Processing**: Exploring how machines understand text

// ### Professional Experience
// Transitioning from academia to industry taught me:
// - The importance of data quality over algorithm complexity
// - How to deploy models in production environments
// - The value of interpretable models in business contexts

// ## Lessons Learned

// 1. **Start with simple models**: Often, a well-implemented simple model outperforms a complex one
// 2. **Data is king**: Quality data beats fancy algorithms every time
// 3. **Continuous learning**: The field evolves rapidly; staying updated is crucial
// 4. **Practical impact**: Focus on solving real problems, not just theoretical challenges

// ## Looking Forward

// I'm excited about the future of machine learning, particularly in areas like:
// - Explainable AI
// - Edge computing
// - Responsible AI development

// The journey continues, and I'm grateful to be part of this exciting field!`,
//             readTime: '8 min read',
//             tags: ['machine-learning', 'career', 'learning'],
//             author: 'Kavyanjali Agnihotri'
//           }
        };

        const postData = samplePosts[slug];
        if (!postData) {
          setError('Blog post not found');
        } else {
          setPost(postData);
        }
        setLoading(false);
      } catch (err) {
        setError('Failed to load blog post');
        setLoading(false);
      }
    };

    loadBlogPost();
  }, [slug]);

  /**
   * Formats date for display
   */
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  /**
   * Simple markdown to HTML converter
   * TODO: Replace with a proper markdown parser like react-markdown
   */
  const renderMarkdown = (content: string) => {
    return content
      .split('\n')
      .map((line, index) => {
        // Headers
        if (line.startsWith('# ')) {
          return <h1 key={index} className="text-3xl font-bold mt-8 mb-4">{line.slice(2)}</h1>;
        }
        if (line.startsWith('## ')) {
          return <h2 key={index} className="text-2xl font-semibold mt-6 mb-3">{line.slice(3)}</h2>;
        }
        if (line.startsWith('### ')) {
          return <h3 key={index} className="text-xl font-semibold mt-4 mb-2">{line.slice(4)}</h3>;
        }
        
        // Bold text
        const boldPattern = /\*\*(.*?)\*\*/g;
        const withBold = line.replace(boldPattern, '<strong>$1</strong>');
        
        // Lists
        if (line.startsWith('- ')) {
          return <li key={index} className="ml-4 mb-1">{line.slice(2)}</li>;
        }
        if (/^\d+\./.test(line)) {
          return <li key={index} className="ml-4 mb-1 list-decimal">{line.replace(/^\d+\.\s/, '')}</li>;
        }
        
        // Horizontal rule
        if (line.trim() === '---') {
          return <hr key={index} className="my-8 border-border" />;
        }
        
        // Empty lines
        if (line.trim() === '') {
          return <br key={index} />;
        }
        
        // Regular paragraphs
        return (
          <p 
            key={index} 
            className="mb-4 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: withBold }}
          />
        );
      });
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading blog post...</p>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <Button
              variant="ghost"
              onClick={() => navigate('/blogs')}
              className="mb-8"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blogs
            </Button>
            
            <div className="text-center py-12">
              <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
              <h1 className="text-2xl font-bold mb-2">Blog Post Not Found</h1>
              <p className="text-muted-foreground">
                {error || 'The blog post you\'re looking for doesn\'t exist.'}
              </p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20 pb-12">
        <article className="container mx-auto px-4 max-w-4xl">
          {/* Navigation */}
          <Button
            variant="ghost"
            onClick={() => navigate('/blogs')}
            className="mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blogs
          </Button>

          {/* Article Header */}
          <header className="mb-8 pb-8 border-b">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>{formatDate(post.date)}</span>
              </div>
              
              {post.readTime && (
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              )}
              
              {post.author && (
                <span>by {post.author}</span>
              )}
            </div>
            
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
          </header>

          {/* Article Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {renderMarkdown(post.content)}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
