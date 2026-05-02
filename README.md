# Retouchify Frontend

A responsive, single-page marketing and booking website for the **Retouchify** photo editing service. Built with plain HTML, CSS, and JavaScript — no frameworks, no build step.

---

## Pages & Sections

| Section | Description |
|---|---|
| **Hero** | Headline, service tagline, key stats (100+ projects, 24-48h turnaround) |
| **Portfolio** | Filterable image grid across 6 categories |
| **Services** | Service cards with pricing and feature lists |
| **Contact** | Inquiry form + quick photo upload widget |
| **Footer** | Links, contact info, copyright |

---

## Features

- **Filterable Portfolio** — Filter images by category (Portrait, Landscape, Wedding, Fashion, Architecture, Nature) with animated transitions.
- **Contact Form** — Submits client details to the backend `/send-message` endpoint.
- **Quick Photo Upload** — Upload up to 10 photos directly from the contact section to the backend `/upload` endpoint.
- **Responsive Design** — Mobile-first layout with a hamburger navigation menu for small screens.
- **Scroll Animations** — Elements fade in via the Intersection Observer API as the user scrolls.
- **Parallax Hero** — Subtle parallax scroll effect on the hero image.
- **Smooth Scrolling** — All nav links scroll smoothly to their target section.
- **Dynamic Header** — Header background transitions on scroll for improved readability.

---

## Project Structure

```
retouchify-frontend/
├── index.html      # All page markup and sections
├── styles.css      # All styling (layout, components, responsive)
└── script.js       # All interactivity (menu, filters, forms, animations)
```

---

## Getting Started

No installation or build process required.

### Option 1 — Open directly in the browser

```bash
open index.html
```

> **Note:** The contact form and photo upload will fail with CORS errors when opened via `file://`. Use a local server (Option 2) for full functionality.

### Option 2 — Serve locally

Using the VS Code **Live Server** extension, or any static file server:

```bash
# Using Node.js
npx serve .

# Using Python
python -m http.server 8080
```

Then open `http://localhost:8080` in your browser.

---

## Backend Connection

The frontend expects the [Retouchify Backend](https://github.com/your-username/retouchify-backend) to be running at `http://localhost:3000`.

Two endpoints are called from `script.js`:

| Endpoint | Trigger | Payload |
|---|---|---|
| `POST /send-message` | Contact form submission | JSON: `name`, `email`, `service`, `budget`, `message` |
| `POST /upload` | Quick photo upload | `multipart/form-data`: up to 10 image files |

To point the frontend at a deployed backend, find and replace `http://localhost:3000` in `script.js` with your production URL.

---

## Services & Pricing

| Service | Starting Price |
|---|---|
| Color Correction & Grading | ₹150 |
| Portrait Retouching | ₹250 |
| Photo Restoration | ₹350 |

---

## Portfolio Categories

All, Portrait, Landscape, Wedding, Fashion, Architecture, Nature

---

## Fonts & Assets

- **Font:** [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts
- **Images:** [Unsplash](https://unsplash.com) (hotlinked — no local assets required)

---

## Deployment

Since this is a purely static site, it can be deployed to any static hosting platform:

- **GitHub Pages** — Push to a `gh-pages` branch or enable Pages in repo settings.
- **Netlify** — Drag and drop the project folder into the Netlify dashboard.
- **Vercel** — Run `vercel` in the project directory.

Remember to update the backend API URL in `script.js` before deploying.

---

## License

ISC
