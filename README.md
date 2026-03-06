# ITL Website - Mittal Alliance

![ITL Website](https://img.shields.io/badge/status-active-success)
![License](https://img.shields.io/badge/license-MIT-blue)
![React](https://img.shields.io/badge/React-18+-blue)
![Vite](https://img.shields.io/badge/Vite-5+-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3+-06B6D4)

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [Building](#building)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [Environment Setup](#environment-setup)
- [Troubleshooting](#troubleshooting)
- [License](#license)

## About

ITL Website is a modern, responsive website for the Mittal Alliance organization. Built with React and Vite, it showcases the organization's mission, vision, and various sections including founder information, pathways, and transformation initiatives. The website is optimized for performance and accessibility with a clean, professional design using Tailwind CSS.

## Features

✨ **Key Features:**

- 🎨 **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- ⚡ **High Performance** - Fast load times with Vite's optimized bundling
- 🎯 **Modern UI/UX** - Clean and professional interface using Tailwind CSS
- 📱 **Mobile-First Approach** - Optimized mobile experience with adaptive layouts
- ✅ **Code Quality** - ESLint configuration for consistent code standards
- 🔧 **Developer Friendly** - Hot Module Replacement (HMR) for smooth development
- 🚀 **Optimized Build** - Production-ready build with minification and optimization
- 🌐 **SEO Ready** - Semantic HTML structure for better search engine visibility

## Tech Stack

### Frontend
- **React** 18+ - UI library for building interactive components
- **Vite** 5+ - Next-generation frontend build tool with lightning-fast HMR
- **Tailwind CSS** 3+ - Utility-first CSS framework for rapid UI development
- **PostCSS** - CSS transformation tool for Tailwind integration

### Development Tools
- **ESLint** - JavaScript linter for code quality
- **Vercel** - Deployment platform configuration

## Project Structure

```
itl-website/
├── public/                          # Static assets
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation bar component
│   │   ├── HeroSection.jsx         # Hero banner section
│   │   ├── NorthStarSection.jsx    # Organization's vision/north star
│   │   ├── PathwaysSection.jsx     # Programs and pathways section
│   │   ├── WhyWeExistSection.jsx   # Mission and values section
│   │   ├── TransformSection.jsx    # Transformation initiatives section
│   │   ├── FounderSection.jsx      # Founder/leadership information
│   │   └── Footer.jsx              # Footer component
│   ├── assets/                      # Images, icons, and other media
│   ├── App.jsx                      # Main App component
│   ├── index.css                    # Global styles and Tailwind imports
│   └── main.jsx                     # React entry point
├── index.html                       # HTML entry point
├── package.json                     # Project dependencies and scripts
├── package-lock.json                # Locked dependency versions
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
├── eslint.config.js                 # ESLint configuration
├── vercel.json                      # Vercel deployment configuration
└── README.md                        # This file
```

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js 16+ or higher
- npm 8+ or yarn 1.22+

You can check your versions with:
```bash
node --version
npm --version
```

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/SohamB4746Y/ITL-WEBSITE.git
   cd ITL-Website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   or if using yarn:
   ```bash
   yarn install
   ```

3. **Verify installation**
   ```bash
   npm --version
   node --version
   ```

## Development

Start the development server with hot module replacement:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` by default. The page will automatically reload when you make changes to the code.

### Key Commands

- **`npm run dev`** - Start development server with HMR
- **`npm run build`** - Build for production
- **`npm run preview`** - Preview production build locally
- **`npm run lint`** - Run ESLint to check code quality

## Building

Create a production-optimized build:

```bash
npm run build
```

This command will:
- Compile all React components
- Bundle and minify JavaScript
- Optimize CSS files
- Generate static assets in the `dist/` folder

### Preview Production Build

To test the production build locally:

```bash
npm run preview
```

This starts a local server to preview the optimized build before deployment.

## Deployment

### Vercel (Recommended)

The project includes a `vercel.json` configuration file for easy deployment to Vercel.

**Steps:**

1. Push your code to GitHub
2. Go to [Vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect the configuration and deploy
6. Your site will be live at `https://your-project-name.vercel.app`

**Manual Deployment:**

```bash
npm install -g vercel
vercel
```

### Other Platforms

The `dist/` folder generated by `npm run build` can be deployed to:
- **GitHub Pages** - Push `dist` folder to `gh-pages` branch
- **Netlify** - Connect repository and auto-deploy from main branch
- **AWS S3** - Upload contents of `dist/` folder
- **Any static hosting** - Upload the `dist/` folder contents

## Contributing

We welcome contributions! Here's how you can help:

### Getting Started

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit with clear messages (`git commit -m 'feat: Add amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

### Code Standards

- Follow the existing code style
- Use meaningful variable and function names
- Add comments for complex logic
- Ensure all code is properly formatted
- Run ESLint before committing: `npm run lint`

### Component Guidelines

When creating new components:
- Use functional components with hooks
- Keep components focused and single-responsibility
- Use descriptive component names (PascalCase)
- Include PropTypes or TypeScript for prop validation
- Document complex component logic

### Commit Message Convention

Follow conventional commits format:
- `feat: Add new feature`
- `fix: Fix a bug`
- `docs: Update documentation`
- `style: Format code`
- `refactor: Refactor code structure`
- `perf: Improve performance`
- `test: Add tests`

## Environment Setup

### System Requirements

- macOS, Windows, or Linux
- Modern web browser with ES6 support
- Text editor or IDE (VS Code recommended)

### Development Setup

1. Install Node.js from [nodejs.org](https://nodejs.org)
2. Clone the repository
3. Run `npm install`
4. Run `npm run dev`
5. Open browser to `http://localhost:5173`

## Troubleshooting

### Port Already in Use

If port 5173 is already in use:
```bash
npm run dev -- --port 3000
```

### Clear Cache

If experiencing issues:
```bash
rm -rf node_modules
rm package-lock.json
npm install
```

### ESLint Errors

To fix ESLint issues:
```bash
npm run lint
```

## Performance Tips

- **Code Splitting**: Vite automatically splits code for better performance
- **Image Optimization**: Use modern formats like WebP
- **Lazy Loading**: Use React.lazy() for route-based code splitting
- **CSS Purging**: Tailwind automatically purges unused styles in production
- **Asset Optimization**: Minimize the size of images and assets

## Accessibility Considerations

- Use semantic HTML elements
- Maintain proper heading hierarchy (h1 → h6)
- Add alt text to all images
- Ensure color contrast meets WCAG standards
- Use ARIA attributes where necessary
- Test with keyboard navigation

## Browser Support

This website supports:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Future Enhancements

Planned features for future versions:
- [ ] Dark mode support
- [ ] Multi-language support
- [ ] Blog section
- [ ] Contact form with email integration
- [ ] Analytics dashboard
- [ ] User testimonials section

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Support

For issues, questions, or suggestions:
- Open an issue on GitHub: [Issues](https://github.com/SohamB4746Y/ITL-WEBSITE/issues)
- Contact the development team
- Check existing documentation

## Acknowledgments

- Built with React and Vite
- Styled with Tailwind CSS
- Deployed on Vercel
- Maintained by Mittal Alliance team

---

**Last Updated**: March 6, 2026  
**Version**: 1.0.1  
**Status**: Active Development
