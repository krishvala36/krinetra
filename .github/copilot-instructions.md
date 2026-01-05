# Krinetra Codebase Guide

## Project Overview
This is a **Next.js 16** portfolio/marketing website for Krinetra, featuring advanced animation libraries and custom visual effects. Built with TypeScript, React 19, Tailwind CSS 4, and GSAP for animations.

## Key Architecture Patterns

### Component Structure
- **Single-page application**: All sections orchestrated in [src/app/page.tsx](../src/app/page.tsx)
- **Section components**: Each major page section (`HeroSection`, `ServicesSection`, etc.) is a self-contained component in `src/components/`
- **Reusable effect components**: Animation wrappers like `ClickSpark`, `Particles`, `SplitText` wrap content to add effects
- **Effect composition**: Components are designed to wrap children, not just standalone usage (e.g., `<ClickSpark><div>...</div></ClickSpark>`)

### Animation System
The project uses **three distinct animation libraries** working together:

1. **GSAP + ScrollTrigger + SplitText**: For text animations and scroll-based reveals
   - `SplitText` component splits text into chars/words/lines for staggered animations
   - Always call `gsap.registerPlugin()` at top of component files that use GSAP features
   - Font loading is critical: `SplitText` waits for `document.fonts.ready` before animating
   
2. **OGL (WebGL)**: For 3D particle systems via the `Particles` component
   - Uses custom GLSL shaders (vertex/fragment) defined inline
   - Canvas rendering managed via OGL's `Renderer`, `Camera`, `Geometry`, `Program`, `Mesh`
   - Point-based rendering with size and color variations
   
3. **Framer Motion**: Currently only in `ui/sticky-scroll-reveal.tsx`
   - Uses `useScroll`, `useMotionValueEvent`, and `motion` components

### Styling Conventions
- **Tailwind CSS 4** with inline theme configuration in [globals.css](../src/app/globals.css)
- **Inline styles for dynamic values**: Use `style={{}}` prop for gradients, rgba colors, backdrop filters
- **Fixed background logo**: Applied via `body::before` pseudo-element in `globals.css` (z-index: 1)
- **Custom animations**: Defined in `globals.css` with `@keyframes` (e.g., `shine`, `star-movement-*`)
- **Glass morphism pattern**: Navbar and cards use `backgroundColor: rgba(255,255,255,0.55)` + `backdropFilter: blur(9px)`

### State Management Pattern
- Local component state with `useState` for visibility/interaction tracking
- `useEffect` hooks trigger visibility states on mount for fade-in animations
- No global state management library used

## Development Workflow

### Running the Project
```bash
npm run dev     # Development server on localhost:3000
npm run build   # Production build
npm run start   # Production server
npm run lint    # ESLint check
```

### File Naming Conventions
- Components: **PascalCase** (e.g., `HeroSection.tsx`, `ClickSpark.tsx`)
- Utility directories: lowercase (e.g., `ui/`)
- All component files have `.tsx` extension (TypeScript + JSX)

### Path Aliases
- `@/*` maps to `src/*` (configured in [tsconfig.json](../tsconfig.json))
- Always use `@/components/...` imports, never relative paths from `app/`

## Component Design Patterns

### Effect Wrapper Components
Components like `ClickSpark`, `Particles`, and `MagicBento/ParticleCard` are designed to **wrap children**:
```tsx
<ClickSpark sparkColor="#6366f1" sparkSize={12}>
  <div className="content">...</div>
</ClickSpark>
```

### Section Components Structure
Each section follows this pattern:
1. Local visibility state managed with `useState(false)` + `useEffect`
2. Transition classes applied based on visibility: `${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`
3. Semantic HTML: sections have `id` attributes for anchor navigation
4. Responsive design with Tailwind breakpoints (`sm:`, `md:`, `lg:`, `xl:`)

### Text Animation Pattern
Use `SplitText` component for staggered text reveals:
```tsx
<SplitText
  text="Your Text"
  splitType="chars"
  delay={50}
  duration={0.8}
  ease="power3.out"
  from={{ opacity: 0, y: 50, rotateX: -90 }}
  to={{ opacity: 1, y: 0, rotateX: 0 }}
/>
```
- Always provide `from` and `to` objects for animation properties
- Common split types: `'chars' | 'words' | 'lines' | 'words, chars'`

### Custom Canvas Components
`Particles` and `ClickSpark` both use `<canvas>` with `useRef`:
- Canvas resizing handled via `ResizeObserver` on parent element
- Animation loops use `requestAnimationFrame`
- Canvas dimensions must match parent's `getBoundingClientRect()`

## Critical Technical Details

### TypeScript Configuration
- Target: **ES2017** (not ES6/ES5)
- JSX mode: `react-jsx` (not `preserve`)
- Module resolution: **bundler** (Next.js 16 requirement)
- Strict mode enabled

### ESLint Setup
- Uses Next.js flat config format (`eslint.config.mjs`)
- Imports from `eslint/config`, `eslint-config-next/core-web-vitals`, `eslint-config-next/typescript`
- Custom global ignores for `.next/`, `out/`, `build/`, `next-env.d.ts`

### Image Handling
- Logo file: `/krinetra-logo.png` (public folder)
- Background logo: `/krinetra-logo-2.png` (referenced in `globals.css`)
- Always use Next.js `<Image>` component with `fill` prop for dynamic sizing
- Set `priority` on above-the-fold images

### Dependencies to Note
- **GSAP**: Must manually register plugins in each file that uses them
- **OGL**: For WebGL, not Three.js - different API patterns
- **@gsap/react**: Provides `useGSAP` hook for React integration
- **Tailwind CSS 4**: Uses new `@import "tailwindcss"` syntax, not `@tailwind` directives

## Common Gotchas

1. **GSAP SplitText**: Requires separate registration with `gsap.registerPlugin(SplitText)` and is a premium plugin
2. **Canvas sizing**: Must be set via `canvas.width` and `canvas.height` properties, not CSS
3. **Smooth scrolling**: Enabled globally via `html { scroll-behavior: smooth; }` in `globals.css`
4. **Client components**: Most components use `'use client'` directive due to hooks and browser APIs
5. **Color scheme**: Project intentionally uses light theme even in dark mode preference (see `globals.css` media query)

## Brand Guidelines
- Primary colors: Orange (`#F2AB01`, `#F7B602`) and Navy (`#01435F`)
- Secondary: Indigo (`#6366f1`), Gray scale for text
- Gold shiny effect: Use `ShinyText` component with gradient `#C38F2F` → `#FFD700`
- Logo brand name: "Krinetra" with text stroke effect
