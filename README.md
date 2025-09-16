# Wanderlust Packages

Modern travel packages site built with Next.js, Tailwind CSS, and Radix UI.

— Showcase curated trips, accommodations, and vehicles, and collect inquiries.

## Highlights

- Elegant, responsive UI with Tailwind + Radix UI primitives
- Travel package grid with details and modals
- Booking/inquiry flow with pre-filled context
 

## Tech Stack

- Framework: Next.js 15, React 18
- Styling: Tailwind CSS, Radix UI
- Charts/UX: Recharts, Embla Carousel
- Forms & Validation: React Hook Form, Zod
 
 

## Quick Start

Prerequisites:

- Node.js 18+ and npm 10+

1) Install dependencies

```bash
npm install
```

2) Run the app

```bash
npm run dev
```

- App: http://localhost:9002
 

## Available Scripts

- `npm run dev` – Next dev server (Turbopack) on port 9002
- `npm run build` – Production build
- `npm run start` – Start production server
- `npm run lint` – Lint with Next/ESLint
- `npm run typecheck` – TypeScript type check
 

## Project Structure

```
src/
	app/
		page.tsx                # Homepage: hero, packages, contact
		admin/
			image-qa/             # Admin-only AI image QA feature
				page.tsx
				actions.ts
	
	components/               # UI components (Radix-based, modals, sections)
	lib/                      # Data, placeholders, utils
docs/
	blueprint.md              # Design and feature blueprint
 
```

 

## Deployment

Choose your preferred platform. Two common options:

- Vercel: Import the repo and deploy. Framework preset: Next.js.
- Self-host/VM: Build and run

```bash
npm run build
npm run start
```

Serve behind a reverse proxy (Nginx/Caddy) and set `GOOGLE_API_KEY` in your environment.

## Notes

- Image domains for Next/Image are whitelisted in `next.config.ts`.
- Typescript and ESLint errors are ignored during build as configured; adjust as needed.

## License

Add your preferred license in `LICENSE`.

//reference for contributors:
# **App Name**: Wanderlust Packages

## Core Features:

- Homepage Hero Section: Display a banner image and a captivating tagline to immediately grab visitors' attention.
- Travel Package Grid: Showcase travel packages in a responsive and visually appealing grid, highlighting key details like image, title, short description, price, and duration.
- Accommodation Listings: Showcase Hotels and resorts in a similar card layout to travel packages.
- Booking/Inquiry Form: Implement a modal form that pops up when a user clicks 'Book Now,' pre-filling the selected package and collecting necessary user details.
- Email Submission: Send the data captured from the submission form, via FormSubmit.co, to the site owner.
- Contact Information: Display key contact details such as email, phone number, and social media links, accompanied by an embedded Google Map for location context.
- Image Optimization: Use a tool that assesses images for their descriptive characteristics, and flags potentially low-quality or irrelevant images for the website administrator's review, prior to publishing the page.

## Style Guidelines:

- Primary color: Deep ocean blue (#2980B9) to evoke trust and serenity, relating to travel and reliability.
- Background color: Very light blue (#F0F8FF) to provide a clean, calming backdrop.
- Accent color: Sunset orange (#E67E22) to highlight call-to-action buttons and important information, adding warmth and excitement.
- Body text: 'PT Sans', a humanist sans-serif providing a modern yet approachable feel for readability.
- Headline Font: 'Playfair', for titles and headings; pairing this font with 'PT Sans' maintains elegance and modernity.
- Use simple, line-based icons for navigation and amenities, ensuring clarity and consistency throughout the design.
- Implement a responsive grid layout with generous spacing, using rounded corners to soften the overall appearance and create a welcoming feel.