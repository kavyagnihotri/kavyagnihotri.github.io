
# Kavya's Personal Website

A personal portfolio website built with React, TypeScript, and Tailwind CSS, optimized for GitHub Pages deployment.

## Project Info

**URL**: https://lovable.dev/projects/cfa8c0df-d49e-48e7-821e-001b2f938572

## GitHub Pages Deployment

This website is specifically configured for GitHub Pages deployment. To deploy:

1. **Fork or create a repository** named `<your-username>.github.io`
2. **Push your code** to the main branch
3. **Enable GitHub Pages** in repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` (this will be created automatically)
4. **Wait for deployment** - GitHub Actions will automatically build and deploy

### Manual Deployment

If you prefer manual deployment:

```bash
# Build the project
npm run build

# The dist/ folder contains your built website
# Copy contents to your GitHub Pages repository
```

## Local Development

### Prerequisites

- Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

### Setup

```bash
# Clone the repository
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>

# Install dependencies
npm install

# Start development server
npm run dev
```

## Adding Blog Posts

To add new blog posts:

1. Create a new `.md` file in the `public/blogs/` directory
2. Use the following frontmatter format:

```markdown
---
title: "Your Blog Post Title"
date: "2024-01-15"
readTime: "5 min read"
tags: ["tag1", "tag2"]
author: "Your Name"
excerpt: "Brief description of your post"
---

# Your Blog Post Title

Your content here...
```

3. The blog will automatically appear on the website

## Technology Stack

- **React** - UI framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool
- **shadcn/ui** - UI components
- **React Router** - Navigation
- **React Query** - Data fetching

## Project Structure

```
src/
├── components/          # UI components
├── pages/              # Page components
├── lib/                # Utilities
├── hooks/              # Custom hooks
└── index.css           # Global styles

public/
├── blogs/              # Blog markdown files
└── .nojekyll          # Prevents Jekyll processing
```

## Features

- **Responsive design** - Works on all devices
- **Theme system** - Multiple color themes
- **Blog system** - Markdown-based blog posts
- **Smooth animations** - Engaging user experience
- **SEO optimized** - Meta tags and proper structure
- **GitHub Pages ready** - Optimized for deployment

## Editing

### Using Lovable

Visit the [Lovable Project](https://lovable.dev/projects/cfa8c0df-d49e-48e7-821e-001b2f938572) to edit with AI assistance.

### Using Your IDE

Make changes locally and push to GitHub. All changes will sync automatically.

### GitHub Codespaces

Use GitHub Codespaces for a cloud-based development environment.

## Deployment Notes

- The website uses relative paths for GitHub Pages compatibility
- A `.nojekyll` file prevents Jekyll processing
- GitHub Actions automatically builds and deploys changes
- All assets are properly bundled and optimized

## Custom Domain

To use a custom domain:

1. Add a `CNAME` file to the `public/` directory with your domain
2. Configure your domain's DNS to point to GitHub Pages
3. Enable custom domain in GitHub Pages settings

## Support

For issues with the website, please check:
- [GitHub Pages documentation](https://docs.github.com/en/pages)
- [Vite documentation](https://vitejs.dev/)
- [React documentation](https://react.dev/)
