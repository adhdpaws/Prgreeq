---
title: Welcome to Our Blog
slug: welcome-to-our-blog
description: This is our first blog post showcasing our new content management system.
date: 2025-10-25
published: true
category: Announcements
image: /blog/thumbnail.png
---

# Welcome to Our Blog

This is a sample blog post created with Velite.js and markdown. You can write rich content here with full markdown support.

## Features

- **Easy to write**: Use markdown syntax
- **Type-safe**: Full TypeScript support
- **Fast**: Built during compilation
- **Flexible**: Extend with custom schemas

### GitHub Flavored Markdown

We now support GFM features:
- [x] Task lists
- [x] Tables
- [x] ~~Strikethrough~~
- [ ] Coming soon items

## Code Examples

Here's some inline code: `const greeting = "Hello, World!"`

And a code block with syntax highlighting:

```typescript
// TypeScript example with syntax highlighting
interface User {
  name: string
  email: string
  role: 'admin' | 'user'
}

const user: User = {
  name: "John Doe",
  email: "john@example.com",
  role: "admin"
}

console.log(`Welcome, ${user.name}!`)
```

## Tables

| Feature | Status | Priority |
|---------|--------|----------|
| Markdown | ✅ Done | High |
| Syntax Highlighting | ✅ Done | High |
| Anchor Links | ✅ Done | Medium |
| GFM Support | ✅ Done | Medium |

## Heading Anchors

All headings now have automatic IDs! You can link directly to any section:
- [Jump to Features](#features)
- [Jump to Code Examples](#code-examples)
- [Jump to Tables](#tables)

## Getting Started

Start writing your content in markdown files and Velite will automatically convert them to type-safe data that you can use in your Next.js application.

> **Note**: This is a blockquote example. Use it for important callouts or quotes.

Stay tuned for more updates!
