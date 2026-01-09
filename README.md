<p align='center'>
  <img src='https://i.imgur.com/KVmyXyo.png' alt='Vital React Template' width='600'/>
</p>

<p align='center'>
Create modern React apps with <b>Vital</b><sup><em>(speed)</em></sup><br>
</p>

<br>

<p align='center'>
<a href="https://github.com/asif7774/vital">🐙 GitHub</a> •
<a href="https://github.com/asif7774/vital/issues">🐛 Issues</a> •
<a href="https://github.com/asif7774/vital/stargazers">⭐ Stars</a>
</p>

<br>

## ✨ Features

- ⚡️ [React 19](https://react.dev) - Latest React with modern patterns
- 🦾 [TypeScript 5.9](https://www.typescriptlang.org/) - Strict typing with latest features
- 🎨 [Tailwind CSS 4](https://tailwindcss.com/) - Next-gen utility-first CSS with optimized setup
- 🚀 [Vite 7](https://vitejs.dev/) - Lightning-fast build tool
- 👑 [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) - Component organization
- 🗂 [Path Aliases](https://github.com/vitejs/vite/issues/88#issuecomment-762415200) - Clean imports
- 🎨 [SVG Sprites](SVG_SPRITE_GUIDE.md) - Optimized SVG sprite system with caching
- 🧪 [Vitest](https://vitest.dev/) - Fast unit testing
- 🎭 [Playwright](https://playwright.dev/) - End-to-end testing
- ☁️ [Netlify](https://www.netlify.com/) - Zero-config deployment

### 🎨 Tailwind CSS 4 Optimizations

- **Component Classes**: Pre-built `.btn-primary`, `.card`, `.container-responsive`
- **Utility Classes**: `.hover-lift`, `.focus-ring`, `.animate-fade-in`
- **Performance**: Optimized CSS bundle with proper layering
- **Modern Setup**: CSS-first configuration approach

### 🛠 Development Tools

- [ESLint 9](https://eslint.org/) - Latest linting with React/TypeScript rules
- [Prettier 3.6](https://prettier.io/) - Code formatting
- [TypeScript ESLint](https://typescript-eslint.io/) - TypeScript-specific linting
- [Lint-staged](https://github.com/okonet/lint-staged) - Pre-commit hooks
- [PostCSS](https://postcss.org/) - CSS processing with Autoprefixer

## 🚀 Quick Start

### Create a new project

```bash
npx degit asif7774/vital my-awesome-app
cd my-awesome-app
npm install
npm run dev
```

### Or clone directly

```bash
git clone https://github.com/asif7774/vital.git my-awesome-app
cd my-awesome-app
npm install
npm run dev
```

## 📋 Setup Checklist

When you use this template, follow this checklist to customize it:

- [ ] Update `name` and `author` fields in `package.json`
- [ ] Change the title in `index.html`
- [ ] Update favicon in `public/favicon.svg`
- [ ] Modify the manifest in `public/manifest.webmanifest`
- [ ] Update this README with your project info

## 🛠 Usage

### Development

Start the development server:

```bash
npm run dev
```

Visit http://localhost:3000/ to see your app.

### Build

Create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

### Testing

This project uses two types of tests:

- **Unit & Integration Tests:** Powered by `vitest`, these tests check individual components and functions.
- **End-to-End (E2E) Tests:** Powered by `Playwright`, these tests simulate real user interactions in a browser.

Run the tests using these commands:

```bash
npm run test        # Run unit/integration tests once
npm run test:ui     # Run unit/integration tests with UI
npm run test:e2e    # Run end-to-end tests
```

### Linting

Check code quality:

```bash
npm run lint        # Run ESLint
npm run tsc         # Type check
```

### Preview

Preview the production build:

```bash
npm run preview
```

## 🚀 Deployment

### Netlify (Recommended)

1. Go to [Netlify](https://app.netlify.com/start)
2. Select your repository
3. Deploy with zero configuration!

### Other Platforms

The `dist` folder contains static files that can be deployed to any static hosting service.

## 🎨 Tailwind CSS 4 Features

This template includes optimized Tailwind CSS 4 setup with:

### Component Classes
- `.btn-primary` - Primary button styling
- `.btn-secondary` - Secondary button styling  
- `.card` - Card component with hover effects
- `.container-responsive` - Responsive container
- `.heading-primary` - Main heading styles
- `.text-code` - Code snippet styling

### Utility Classes
- `.hover-lift` - Smooth lift animation
- `.focus-ring` - Consistent focus states
- `.animate-fade-in` - Fade in animation
- `.animate-slide-up` - Slide up animation

## 📦 Package Versions

All packages are updated to their latest versions:

- **React**: 19.1.1
- **TypeScript**: 5.9.2
- **Tailwind CSS**: 4.1.13
- **Vite**: 7.1.7
- **ESLint**: 9.36.0
- **Vitest**: 3.2.4
- **Playwright**: 1.57.0


## 🎯 Why Vital?

I created this template because setting up modern React projects with all the latest tooling was becoming a bottleneck for rapid prototyping and development.

**Vital** provides:
- ⚡️ **Zero-config setup** - Everything works out of the box
- 🎨 **Optimized Tailwind CSS 4** - Latest features with component classes
- 🚀 **Latest tooling** - React 19, TypeScript 5.9, Vite 7
- 📦 **One command** - `npx degit asif7774/vital my-app` and you're ready to code
- 🛠 **Best practices** - ESLint, Prettier, testing, and more

Perfect for:
- 🚀 **Rapid prototyping** - Get started in seconds
- 🎨 **Modern web apps** - Latest React and TypeScript features
- 🎯 **Production ready** - Optimized build and deployment
- 👥 **Team projects** - Consistent tooling and standards

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## ⭐ Star this repo

If you found this template helpful, please give it a star! ⭐
