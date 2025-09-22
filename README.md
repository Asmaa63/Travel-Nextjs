## Travel Next.js Website ✈️🌍

A modern, responsive travel landing website built with Next.js, TypeScript, and Tailwind CSS. It showcases beautiful sections like Hero, Services, Destinations, Steps, Testimonials, and more — designed for performance, accessibility, and clean UI/UX.

### Highlights
- **Responsive UI** across mobile, tablet, and desktop
- **Clean, minimal design** with subtle animations and decorative shapes
- **Reusable components** (e.g., background decorations, navbar, footer)
- **TypeScript-first** for safer, more maintainable code

---

## 🚀 Getting Started

### 1) Clone the repository
```bash
git clone https://github.com/Asmaa63/Travel-Nextjs
cd travel-website
```

### 2) Install dependencies
```bash
npm install
```

### 3) Run the development server
```bash
npm run dev
# then open http://localhost:3000
```

### 4) Build for production (optional)
```bash
npm run build
npm start
```

---

## 🧰 Tech Stack
- **Next.js** (App Router) — fast React framework with file‑system routing
- **React** — component-based UI
- **TypeScript** — static typing and DX
- **Tailwind CSS** — utility-first styling
- **Turbopack** (via Next.js) — fast dev and builds

---

## 🗂️ Folder Structure (high-level)
```
travel-website/
├─ public/
│  ├─ images/              # All static images (hero, destinations, brands, etc.)
│  └─ *.svg
├─ src/
│  └─ app/
│     ├─ components/
│     │  └─ Share/
│     │     └─ BackgroundDecorations.tsx
│     ├─ Navbar/           # Top navigation
│     ├─ Footer/           # Footer component
│     ├─ hero/             # Hero section page
│     ├─ services/         # Services section page
│     ├─ destinations/     # Destinations section page
│     ├─ steps/            # How it works / Steps section page
│     ├─ testimonials/     # Testimonials section page
│     ├─ brands/           # Partner brands section page
│     ├─ Newsletter/       # Newsletter signup section page
│     ├─ Forms/
│     │  ├─ login/
│     │  └─ signin/
│     ├─ layout.tsx        # Root layout
│     ├─ page.tsx          # Home
│     └─ globals.css       # Tailwind base styles
├─ next.config.ts
├─ tsconfig.json
├─ eslint.config.mjs
└─ package.json
```

---

## 🧭 Main Features
- Hero section with bold headline and call-to-action
- Services grid with icons and hover effects
- Decorative background animations for visual depth
- Destinations, Steps, Testimonials, Brands, Newsletter sections
- Basic auth screens: `Login` and `Sign in` pages

---

## 📜 Available Scripts
These are the common scripts typically available in a Next.js + TypeScript project setup:

- `npm run dev` — Start the development server
- `npm run build` — Create an optimized production build
- `npm start` — Start the production server (after build)
- `npm run lint` — Run ESLint checks

If a `format` script is configured in `package.json`, you can also run:

- `npm run format` — Format code with Prettier

---

## 🧪 Quality & Conventions
- Strict TypeScript types where practical
- ESLint + recommended rules
- Tailwind CSS for consistent design system
- Minimal, readable components with clear naming

---

## 🔭 Future Improvements
- Internationalization (EN/AR switcher with content localization)
- Dark mode theme
- Real authentication flow and profile pages
- Booking engine integration (search, filter, date pickers)
- CMS integration for content management (e.g., Sanity, Contentful)
- Unit/integration tests (e.g., Jest, Testing Library, Playwright)
- Enhanced SEO and Open Graph metadata per page
- Accessibility audit and improvements (keyboard nav, landmarks, contrasts)

---

## 📄 License
This project is for learning and portfolio purposes. Add a license if you intend to distribute or open-source.

---

## 🙌 Acknowledgements
- Icons and shapes inspired by popular UI patterns in travel landing pages
- Built with love using Next.js, Tailwind, and TypeScript

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
