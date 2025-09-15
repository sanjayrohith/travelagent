# Wanderlust Packages

Modern travel packages site built with Next.js, Tailwind CSS, Radix UI, and Genkit (Google AI), ready for Firebase App Hosting.

— Showcase curated trips, accommodations, and vehicles, collect inquiries, and use AI to pre-check image quality before publishing.

## Highlights

- Elegant, responsive UI with Tailwind + Radix UI primitives
- Travel package grid with details and modals
- Booking/inquiry flow with pre-filled context
- Image Quality Assurance (AI) for admins at `/admin/image-qa`
- Type-safe server actions and flows via Genkit + Google AI
- Firebase App Hosting config included (`apphosting.yaml`)

## Tech Stack

- Framework: Next.js 15, React 18
- Styling: Tailwind CSS, Radix UI
- Charts/UX: Recharts, Embla Carousel
- Forms & Validation: React Hook Form, Zod
- AI: Genkit + @genkit-ai/googleai (Gemini 2.5 Flash)
- Platform: Firebase App Hosting

## Quick Start

Prerequisites:

- Node.js 18+ and npm 10+
- A Google AI Studio API Key for image QA (env var `GOOGLE_API_KEY`)

1) Install dependencies

```bash
npm install
```

2) Configure environment

Create `.env.local` in the project root with:

```bash
GOOGLE_API_KEY=your_google_ai_studio_key
```

3) Run the app

```bash
npm run dev
```

- App: http://localhost:9002
- Admin (AI Image QA): http://localhost:9002/admin/image-qa

Optional: Start the Genkit Dev UI alongside to inspect flows and prompts:

```bash
npm run genkit:dev
```

## Available Scripts

- `npm run dev` – Next dev server (Turbopack) on port 9002
- `npm run build` – Production build
- `npm run start` – Start production server
- `npm run lint` – Lint with Next/ESLint
- `npm run typecheck` – TypeScript type check
- `npm run genkit:dev` – Start Genkit Dev UI for `src/ai/dev.ts`
- `npm run genkit:watch` – Genkit Dev UI with TSX watch

## Project Structure

```
src/
	app/
		page.tsx                # Homepage: hero, packages, contact
		admin/
			image-qa/             # Admin-only AI image QA feature
				page.tsx
				actions.ts
	ai/
		genkit.ts               # Genkit setup (Google AI plugin)
		flows/
			image-quality-assurance.ts  # AI flow: assess image quality
	components/               # UI components (Radix-based, modals, sections)
	lib/                      # Data, placeholders, utils
docs/
	blueprint.md              # Design and feature blueprint
apphosting.yaml             # Firebase App Hosting config
```

## Image Quality Assurance (AI)

The admin can upload an image at `/admin/image-qa`. The flow analyzes clarity, composition, relevance, and lighting, returning a verdict and reason if flagged. This uses Genkit with the Google AI plugin and the `GOOGLE_API_KEY` runtime environment variable.

## Deployment (Firebase App Hosting)

This repo includes `apphosting.yaml` for Firebase App Hosting. High-level steps:

1) Install Firebase CLI and sign in

```bash
npm install -g firebase-tools
firebase login
```

2) Create/Select a Firebase project and connect it in your repo (via Firebase Console → App Hosting) and set required environment variables (e.g., `GOOGLE_API_KEY`).

3) Configure build (Next.js) and deploy from the console or CI. See official docs:
https://firebase.google.com/docs/app-hosting/configure

If you prefer, you can also deploy to other platforms (e.g., Vercel) without changes.

## Notes

- Image domains for Next/Image are whitelisted in `next.config.ts`.
- Typescript and ESLint errors are ignored during build as configured; adjust as needed.

## License

Add your preferred license in `LICENSE`.

