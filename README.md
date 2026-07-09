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

- 🧩 **Full Atomic Component Library** — Production-ready atoms and organisms with consistent design tokens
- ⚡️ [React 19](https://react.dev) — Latest React with modern patterns
- 🦾 [TypeScript 6](https://www.typescriptlang.org/) — Strict typing throughout
- 🎨 [Tailwind CSS 4](https://tailwindcss.com/) — CSS-first configuration with custom properties
- 🚀 [Vite 8](https://vitejs.dev/) — Lightning-fast builds
- 👑 [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/) — Scalable component architecture
- 🗂 [Path Aliases](https://vitejs.dev/config/shared-options.html#resolve-alias) — Clean, consistent imports
- 🎨 [SVG Sprites](SVG_SPRITE_GUIDE.md) — 84-icon optimized sprite system with caching
- 🧪 [Vitest](https://vitest.dev/) — Fast unit testing
- ☁️ [Netlify](https://www.netlify.com/) — Zero-config deployment

---

## 🧩 Component Library

All components live under `src/components/` and follow [Atomic Design](https://bradfrost.com/blog/post/atomic-web-design/). A live showcase is available at the `/components` route when running the app.

### Atoms

| Component | Import path | Description |
|---|---|---|
| `Button` | `components/atoms/button` | 6 variants × 3 sizes, icon, loading state |
| `Input` | `components/atoms/input/input` | Label, error, disabled, right-element slot |
| `Textarea` | `components/atoms/textarea/textarea` | Label, error, disabled |
| `Select` | `components/atoms/select/select` | Searchable custom dropdown |
| `Toggle` | `components/atoms/toggle` | 3 sizes (sm / md / lg), label, description |
| `Stepper` | `components/atoms/stepper` | Number input with min / max / step |
| `Autosearch` | `components/atoms/autosearch` | Autocomplete with keyboard nav and portal dropdown |
| `Tooltip` | `components/atoms/tooltip` | 4 positions, configurable delay |
| `BackButton` | `components/atoms/back-button/back-button` | Wraps `Button` with router `navigate(-1)` |
| `LazyImage` | `components/atoms/lazy-image` | Intersection-Observer lazy loading |
| `Card` | `components/atoms/card` | Composable layout — `CardHeader`, `CardTitle`, `CardContent`, `CardFooter` |
| `SvgIcon` | `components/atoms/svg-sprite-loader` | Renders icons from the SVG sprite |
| `SvgSpriteLoader` | `components/atoms/svg-sprite-loader` | Loads and caches the sprite at app root |
| `ErrorBoundary` | `components/atoms/error-boundary` | Class-based error boundary with render-prop API |
| `AppErrorFallback` | `components/atoms/error-boundary` | Full-page crash UI |
| `PageErrorFallback` | `components/atoms/error-boundary` | Route-level error UI |
| `WidgetErrorFallback` | `components/atoms/error-boundary` | Inline section error UI |
| `Logos.Vite` | `components/atoms/logos` | Vite SVG logo |

### Organisms

| Component | Import path | Description |
|---|---|---|
| `Card` | `components/organisms/card` | Link card with icon, title, description, border accent |
| `Tabs` | `components/organisms/tabs` | Keyboard-navigable WCAG-compliant tab panel |
| `Dropdown` | `components/organisms/dropdown` | Portal dropdown with viewport-collision flip |
| `Modal` | `components/organisms/modal` | Focus-trapped modal via context + `useModal` hook |
| `Toast` / `ToastContainer` | `components/organisms/toast` | Toasts via context + `useToast` hook |
| `Header` | `components/organisms/header` | App-level navigation header |
| `Footer` | `components/organisms/footer` | App footer |

### Button Variants

```tsx
<Button variant="primary" size="sm">Primary</Button>
<Button variant="secondary" size="md">Secondary</Button>
<Button variant="outline" size="lg">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="danger">Danger</Button>
<Button variant="link">Link</Button>

// Icon button
<Button size="icon" icon="settings" aria-label="Settings" />

// Loading state
<Button isLoading>Saving...</Button>
```

### Toggle Sizes

```tsx
<Toggle size="sm" label="Small" />
<Toggle size="md" label="Medium" defaultChecked />   {/* default */}
<Toggle size="lg" label="Large" />
```

---

## 🎨 Design Tokens

CSS custom properties are defined in `src/index.css` and used across all components:

```css
:root {
  --color-brand:       #10b981;   /* brand fill (bg-brand-gradient) */
  --color-brand-hover: #059669;   /* brand hover */
}
```

The primary interactive color (buttons, focus rings, active tabs) uses **blue-600 / blue-500** from Tailwind's palette. Override in `src/index.css` to rebrand the entire system at once.

---

## 🖼 SVG Sprite System

84 icons are bundled in `public/sprites/app-icons.svg`. Regenerate from `icons/` at any time:

```bash
npm run generate-sprite
```

Then bump the `version` prop in `src/app/app.tsx` to invalidate browser cache. See [SVG_SPRITE_GUIDE.md](SVG_SPRITE_GUIDE.md) for full documentation.

```tsx
import { SvgIcon } from 'components/atoms/svg-sprite-loader';

<SvgIcon name="home" width="24" height="24" className="text-blue-600" />
```

---

## 🚀 Quick Start

```bash
npx degit asif7774/vital my-awesome-app
cd my-awesome-app
npm install
npm run dev
```

Visit [http://localhost:5200/](http://localhost:5200/) and [http://localhost:5200/components](http://localhost:5200/components) for the component showcase.

---

## 📋 New Project Checklist

- [ ] Update `name` and `author` in `package.json`
- [ ] Change `<title>` in `index.html`
- [ ] Replace favicon in `public/favicon.svg`
- [ ] Update `public/manifest.webmanifest`
- [ ] Adjust `--color-brand` in `src/index.css`
- [ ] Update this README

---

## 🛠 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server at `localhost:5200` |
| `npm run build` | TypeScript check + Vite production build |
| `npm run lint` | ESLint across the whole project |
| `npm run tsc` | Type-check without emitting |
| `npm run test` | Run Vitest once |
| `npm run test:ui` | Run Vitest with browser UI |
| `npm run preview` | Preview the production build |
| `npm run generate-sprite` | Rebuild SVG sprite from `icons/` |

---

## 🛠 Development Tools

- [ESLint 10](https://eslint.org/) — Strict React + TypeScript rules
- [Prettier 3.9](https://prettier.io/) — Opinionated code formatting
- [TypeScript ESLint 8](https://typescript-eslint.io/) — TypeScript-specific linting
- [Lint-staged 17](https://github.com/okonet/lint-staged) — Pre-commit quality gates via Husky
- [PostCSS](https://postcss.org/) — CSS processing

---

## 📦 Package Versions

| Package | Version |
|---|---|
| React | 19.2.7 |
| TypeScript | 6.0.3 |
| Tailwind CSS | 4.3.2 |
| Vite | 8.1.4 |
| ESLint | 10.6.0 |
| Prettier | 3.9.4 |
| Vitest | 4.1.10 |
| React Router | 7.18.1 |
| TypeScript ESLint | 8.63.0 |

---

## 🚀 Deployment

### Netlify (Recommended)

1. Go to [Netlify](https://app.netlify.com/start)
2. Connect your repository
3. Deploy — zero configuration required

### Any Static Host

The `dist/` folder is self-contained static files deployable to Vercel, GitHub Pages, Cloudflare Pages, or any CDN.

---

## 🎯 Why Vital?

**Vital** eliminates the boilerplate tax on every new React project.

- ⚡️ **Zero-config** — Everything works out of the box
- 🧩 **Real component library** — Not just scaffolding; production-ready UI components included
- 🎨 **Design system ready** — CSS variables, consistent tokens, primary color applied globally
- 🚀 **Latest tooling** — React 19, TypeScript 6, Vite 8, Tailwind 4
- 📦 **One command** — `npx degit asif7774/vital my-app`

Perfect for rapid prototyping, internal tools, and production web apps.

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.

## 🤝 Contributing

Contributions are welcome! Please open a Pull Request.

## ⭐ Star this repo

If Vital saved you time, a star goes a long way. ⭐
