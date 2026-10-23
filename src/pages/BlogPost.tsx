
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, AlertCircle } from 'lucide-react';
import { marked } from 'marked';
import { formatDate } from '@/lib/utils';

type FrontMatter = Record<string, string | string[]>;

/**
 * Splits a markdown file into its YAML frontmatter and body.
 *
 * Supports the simple frontmatter used by the blog posts: `key: value`,
 * quoted values, inline lists (`tags: [a, b]`) and block lists (`- a`).
 * gray-matter can't be used here because it depends on Node's Buffer.
 */
function parseFrontMatter(source: string): { data: FrontMatter; content: string } {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?/.exec(source);
  if (!match) return { data: {}, content: source };

  const unquote = (value: string) => value.trim().replace(/^(['"])(.*)\1$/, '$2');
  const data: FrontMatter = {};
  let currentKey: string | null = null;

  for (const line of match[1].split(/\r?\n/)) {
    const listItem = /^\s*-\s+(.*)$/.exec(line);
    if (listItem && currentKey) {
      const existing = data[currentKey];
      data[currentKey] = [...(Array.isArray(existing) ? existing : []), unquote(listItem[1])];
      continue;
    }

    const pair = /^([\w-]+):\s*(.*)$/.exec(line);
    if (!pair) continue;
    const [, key, rawValue] = pair;
    currentKey = key;
    const value = rawValue.trim();
    if (value.startsWith('[') && value.endsWith(']')) {
      data[key] = value.slice(1, -1).split(',').map(unquote).filter(Boolean);
    } else {
      data[key] = unquote(value);
    }
  }

  return { data, content: source.slice(match[0].length) };
}

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
        // Fetch the markdown file from the public/blogs directory
        const response = await fetch(`/blogs/${slug}.md`);
        if (!response.ok) throw new Error('Blog post not found');
        const markdownContent = await response.text();

        // Parse frontmatter and content
        const { data, content } = parseFrontMatter(markdownContent);
        const str = (value: string | string[] | undefined) =>
          typeof value === 'string' && value ? value : undefined;

        // Convert markdown to HTML
        const htmlContent = await marked(content);

        // Set the post data
        setPost({
          title: str(data.title) || 'Untitled',
          date: str(data.date) || '',
          content: htmlContent,
          readTime: str(data.readTime),
          tags: Array.isArray(data.tags) ? data.tags : undefined,
          author: str(data.author),
        });
        setError(null);
      } catch (err) {
        setError('Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    loadBlogPost();
  }, [slug]);

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
              {post.date && (
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(post.date)}</span>
                </div>
              )}
              
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
          <div
            className="prose prose-gray dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
