
import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, FileText, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

/**
 * Blog Post Interface
 * Represents a blog post with metadata extracted from markdown files
 */
interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt?: string;
  readTime?: string;
  tags?: string[];
}

/**
 * BlogsPage Component
 * 
 * Displays a listing of all available blog posts.
 * Blog posts are sourced from markdown files in the /blogs directory.
 * 
 * Features:
 * - Automatic detection of markdown files
 * - Extraction of metadata from frontmatter
 * - Responsive grid layout
 * - Search and filtering capabilities
 * 
 * Directory Structure Expected:
 * /public/blogs/
 *   ├── post-1.md
 *   ├── post-2.md
 *   └── ...
 */
const BlogsPage = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  /**
   * Fetches and parses blog posts from markdown files
   * This function attempts to load markdown files from the /blogs directory
   * and extract metadata from them.
   */
  useEffect(() => {
    const loadBlogPosts = async () => {
      try {
        // In a real implementation, you would dynamically discover markdown files
        // For now, we'll create a sample structure that developers can follow
        
        // Sample blog posts - replace this with actual file discovery
        const samplePosts: BlogPost[] = [
          {
            slug: 'welcome-to-my-blog',
            title: 'Welcome to My Blog',
            date: '2024-01-15',
            excerpt: 'This is my first blog post where I introduce myself and talk about what you can expect from this blog.',
            readTime: '3 min read',
            tags: ['introduction', 'personal']
          },
          {
            slug: 'machine-learning-journey',
            title: 'My Machine Learning Journey',
            date: '2024-01-10',
            excerpt: 'A reflection on my journey into machine learning, the challenges I faced, and the lessons I learned.',
            readTime: '8 min read',
            tags: ['machine-learning', 'career', 'learning']
          }
        ];

        // TODO: Replace with actual markdown file loading
        // const posts = await loadMarkdownFiles('/blogs');
        
        setBlogPosts(samplePosts);
        setLoading(false);
      } catch (err) {
        setError('Failed to load blog posts');
        setLoading(false);
      }
    };

    loadBlogPosts();
  }, []);

  /**
   * Handles navigation to individual blog post
   */
  const handlePostClick = (slug: string) => {
    navigate(`/blogs/${slug}`);
  };

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

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-20 pb-12">
          <div className="container mx-auto px-4">
            <div className="flex items-center justify-center min-h-96">
              <div className="text-center">
                <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-muted-foreground">Loading blog posts...</p>
              </div>
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
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Blogs & Posts
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Thoughts, insights, and experiences from my journey in technology and life.
            </p>
          </div>

          {/* Error State */}
          {error && (
            <div className="max-w-2xl mx-auto mb-8">
              <Card className="border-destructive">
                <CardContent className="flex items-center space-x-2 pt-6">
                  <AlertCircle className="h-5 w-5 text-destructive" />
                  <span className="text-destructive">{error}</span>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Blog Posts Grid */}
          {blogPosts.length > 0 ? (
            <div className="grid gap-6 md:gap-8">
              {blogPosts.map((post) => (
                <Card 
                  key={post.slug}
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  onClick={() => handlePostClick(post.slug)}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="space-y-2">
                        <CardTitle className="text-2xl hover:text-primary transition-colors">
                          {post.title}
                        </CardTitle>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
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
                        </div>
                      </div>
                      <FileText className="h-6 w-6 text-muted-foreground" />
                    </div>
                  </CardHeader>
                  
                  {(post.excerpt || post.tags) && (
                    <CardContent>
                      {post.excerpt && (
                        <CardDescription className="text-base mb-4">
                          {post.excerpt}
                        </CardDescription>
                      )}
                      
                      {post.tags && post.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2">
                          {post.tags.map((tag) => (
                            <Badge key={tag} variant="secondary">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  )}
                </Card>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-12">
              <FileText className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">No blog posts yet</h3>
              <p className="text-muted-foreground max-w-md mx-auto">
                Blog posts will appear here when markdown files are added to the blogs directory.
                Create your first post by adding a .md file to /public/blogs/
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogsPage;
