# Blog Setup Guide - GitHub Markdown Integration

## Overview
Your blog is now set up to automatically pull content from a GitHub repository. This allows you to manage blog posts remotely using markdown files.

## Setup Instructions

### 1. Create a GitHub Repository
1. Create a new repository (e.g., `paibupai-blog`)
2. Make it public or ensure your website has access to it
3. Create a `posts` folder in the repository

### 2. Configure Repository Settings
Update the configuration in `/lib/blog-config.ts`:

```typescript
export const blogConfig = {
  github: {
    owner: 'your-github-username', // Replace with your GitHub username
    repo: 'paibupai-blog', // Replace with your repository name
    branch: 'main', // Branch where markdown files are stored
    path: 'posts', // Directory in repo where posts are stored
  },
  // ... rest of config
}
```

### 3. Blog Post Format
Create markdown files in your repository's `posts` folder with the following frontmatter:

```markdown
---
title: "Your Blog Post Title"
excerpt: "A brief description of your post"
date: "2024-01-15"
author: "Author Name"
tags: ["Photography", "Tips", "Singapore"]
featured: true
coverImage: "/images/your-cover-image.jpg"
---

# Your Blog Post Content

Write your blog post content here using markdown syntax.

## Features Supported

- **Bold text**
- *Italic text*
- [Links](https://example.com)
- Images: ![Alt text](image-url)
- Code blocks
- Lists
- Tables
- And more!
```

### 4. File Naming Convention
- Use kebab-case for filenames: `my-blog-post.md`
- The slug will be generated from the filename
- Or specify a custom slug in the frontmatter

## Features

### ✅ Automatic Content Updates
- Blog posts are fetched from GitHub automatically
- Content updates when you push to your repository
- Caching for performance (1 hour cache)

### ✅ Rich Markdown Support
- GitHub Flavored Markdown (GFM)
- Code syntax highlighting
- Tables, lists, images
- Custom styling with Tailwind CSS

### ✅ SEO Optimized
- Automatic meta tags generation
- Open Graph and Twitter Card support
- Structured data for search engines

### ✅ Responsive Design
- Mobile-friendly layout
- Optimized images with Next.js Image component
- Fast loading times

### ✅ Dynamic Features
- Automatic category generation from tags
- Reading time calculation
- Author information display
- Featured posts support

## API Endpoints

- `GET /api/blog` - Fetch all blog posts
- `GET /api/blog?page=1` - Paginated posts
- `GET /api/blog?featured=true` - Featured posts only
- `GET /api/blog/[slug]` - Specific blog post

## Content Management

### Adding New Posts
1. Create a new `.md` file in your repository's `posts` folder
2. Add frontmatter with required fields
3. Write your content in markdown
4. Commit and push to your repository
5. The post will appear on your website automatically

### Updating Posts
1. Edit the markdown file in your repository
2. Commit and push changes
3. The website will update within the cache period (1 hour)

### Deleting Posts
1. Delete the markdown file from your repository
2. Commit and push changes
3. The post will be removed from the website

## Troubleshooting

### No Posts Showing
- Check your repository configuration in `blog-config.ts`
- Ensure the repository is public or accessible
- Verify the `posts` folder exists in your repository
- Check the browser console for any API errors

### Posts Not Updating
- The system caches content for 1 hour
- Force refresh your browser or wait for cache to expire
- Check if your repository changes were pushed successfully

### Markdown Not Rendering
- Ensure your markdown files have proper frontmatter
- Check for syntax errors in your markdown
- Verify all required fields are present

## Customization

### Styling
The blog uses Tailwind CSS classes for styling. You can customize the appearance by modifying:
- `/app/(default)/blog/page.tsx` - Blog listing page
- `/app/(default)/blog/[slug]/page.tsx` - Individual post pages

### Content Processing
Modify `/lib/markdown.ts` to customize:
- Excerpt generation
- Reading time calculation
- Date formatting
- Slug generation

### API Behavior
Update `/lib/github-api.ts` to modify:
- Caching behavior
- Error handling
- Data processing

## Support

For issues or questions:
1. Check the browser console for errors
2. Verify your GitHub repository settings
3. Ensure all required dependencies are installed
4. Review the configuration files

The system is designed to be robust and handle errors gracefully, showing appropriate fallback content when needed.
