# Asif Shaikh - Personal Website

A modern, responsive personal website built with Next.js, TypeScript, and Tailwind CSS. Features MDX support for content management and a clean, professional design.

## 🚀 Features

- **Modern Stack**: Next.js 14 with App Router and TypeScript
- **Styling**: Tailwind CSS for responsive, utility-first styling
- **Content Management**: MDX support for dynamic content pages
- **Components**: Reusable React components (Header, Footer, ProjectCard)
- **Pages**: Home, Resume, Projects, and Contact pages
- **Performance**: Optimized for speed and SEO
- **Responsive**: Mobile-first design that works on all devices

## 📁 Project Structure

```
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── globals.css        # Global styles
│   │   ├── layout.tsx         # Root layout
│   │   ├── page.tsx           # Home page
│   │   ├── contact/           # Contact page
│   │   ├── resume/            # Resume page
│   │   └── projects/          # Projects pages
│   └── components/            # Reusable components
│       ├── Header.tsx
│       ├── Footer.tsx
│       └── ProjectCard.tsx
├── content/                   # MDX content files
│   ├── resume.mdx            # Resume content
│   └── projects/             # Project MDX files
├── public/                   # Static assets
└── ...config files
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Content**: MDX with next-mdx-remote
- **Deployment**: Vercel (recommended)

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd asifshaikh-site
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📝 Content Management

### Adding Projects

1. Create a new `.mdx` file in `content/projects/`
2. Add frontmatter with project metadata:

```mdx
---
title: "Project Name"
description: "Project description"
technologies: ["React", "Node.js", "TypeScript"]
githubUrl: "https://github.com/username/repo"
liveUrl: "https://project-demo.com"
---

# Project Name

Your project content here...
```

### Updating Resume

Edit the `content/resume.mdx` file to update your resume content. The file supports full Markdown syntax.

## 🎨 Customization

### Styling

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Use Tailwind classes directly in components

### Branding

- Update personal information in:
  - `src/components/Header.tsx` (name)
  - `src/components/Footer.tsx` (social links)
  - `src/app/page.tsx` (hero section)
  - `content/resume.mdx` (resume content)

### Colors

The site uses a blue color scheme. To change colors, update the Tailwind classes in components or modify the color palette in `tailwind.config.js`.

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will automatically detect Next.js

2. **Deploy**
   - Vercel will build and deploy automatically
   - Your site will be available at `https://your-project.vercel.app`

### Other Platforms

The site can be deployed to any platform that supports Next.js:

- **Netlify**: Use the Next.js build command
- **AWS Amplify**: Connect your repository
- **Railway**: Deploy directly from GitHub

### Environment Variables

No environment variables are required for basic functionality. Add any needed variables in your deployment platform's dashboard.

## 📱 Features Overview

### Home Page
- Hero section with name and tagline
- Technology stack showcase
- Call-to-action buttons

### Resume Page
- Renders content from `content/resume.mdx`
- Professional formatting
- Responsive design

### Projects Page
- Grid layout of project cards
- Dynamic project loading from MDX files
- Links to live demos and GitHub repos

### Contact Page
- Contact form (placeholder functionality)
- Direct contact information
- Social media links

## 🔧 Development

### Adding New Pages

1. Create a new directory in `src/app/`
2. Add a `page.tsx` file
3. Export a default React component

### Creating Components

1. Add new components in `src/components/`
2. Use TypeScript for type safety
3. Follow the existing component patterns

### MDX Content

- Use frontmatter for metadata
- Support full Markdown syntax
- Can include React components

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Support

If you have any questions or need help, feel free to reach out:

- Email: asif@example.com
- LinkedIn: [linkedin.com/in/asifshaikh](https://linkedin.com/in/asifshaikh)
- GitHub: [github.com/asifshaikh](https://github.com/asifshaikh)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
