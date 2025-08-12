
# Blog Setup Guide

This guide explains how to add blog posts to your personal website.

## Directory Structure

Create the following directory structure in your project:

```
public/
├── blogs/
│   ├── my-first-post.md
│   ├── machine-learning-thoughts.md
│   └── coding-tips.md
└── ...
```

In `index.json`, add the following entry for your blog post:

```json
  {
    "slug": "welcome-to-my-blog",
    "title": "Welcome to My Blog",
    "date": "2024-01-15",
    "readTime": "3 min read",
    "tags": ["introduction", "personal"],
    "author": "Kavyanjali Agnihotri"
  }
```

## Markdown File Format

Each blog post should be a markdown file with the following structure:

```markdown
---
title: "Your Blog Post Title"
date: "2024-01-15"
readTime: "5 min read"
tags: ["tag1", "tag2", "tag3"]
author: "Your Name"
excerpt: "A brief description of your blog post that will appear in the blog listing."
---

# Your Blog Post Title

Your blog content goes here. You can use all standard markdown features:

## Subheadings

- Lists
- **Bold text**
- *Italic text*
- [Links](https://example.com)

### Code blocks

```javascript
console.log("Hello, world!");
```

And much more!
```

## Adding a New Blog Post

1. Create a new `.md` file in the `public/blogs/` directory
2. Use a URL-friendly filename (e.g., `my-awesome-post.md`)
3. Add frontmatter with metadata at the top of the file
4. Write your content using markdown syntax
5. The blog will automatically appear on your website

## File Naming Convention

- Use lowercase letters
- Separate words with hyphens
- Use descriptive names
- Example: `getting-started-with-react.md`

## Metadata Fields

- **title**: The display title of your blog post
- **date**: Publication date in YYYY-MM-DD format
- **readTime**: Estimated reading time (optional)
- **tags**: Array of relevant tags (optional)
- **author**: Author name (optional)
- **excerpt**: Brief description for the blog listing (optional)

## Development vs Production

In development mode, the blog system uses sample posts for demonstration.
In production, it will look for actual markdown files in the `/public/blogs/` directory.

## Future Enhancements

To enhance the blog system, consider adding:

1. **Automatic file discovery**: Scan the blogs directory for markdown files
2. **Full markdown parser**: Use libraries like `react-markdown` for better rendering
3. **Search functionality**: Allow users to search through blog posts
4. **Categories**: Organize posts by categories
5. **Comments**: Add a commenting system
6. **RSS feed**: Generate RSS feeds for subscribers

## GitHub Pages Deployment

This website is optimized for GitHub Pages deployment:

1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. Set source to "GitHub Actions" or "Deploy from a branch"
4. Your site will be available at `https://<username>.github.io`

Make sure your repository is named `<username>.github.io` for automatic deployment to the root domain.
```
