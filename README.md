# LatentFolio Free

An evidence-first Astro portfolio starter for AI, ML, and GenAI engineers. It helps technical professionals explain the problem, engineering decisions, evaluation method, and outcome behind their work—not just list tools.

Created and maintained by [Dharani Eswaramurthi](https://github.com/Dharani-Eswaramurthi).

> Every person, employer, project, and metric in the demo is fictional. Replace the sample content before publishing.

## Included

- One-page portfolio with hero, project snapshots, expertise, experience, writing, education, and contact sections
- Interactive hero demonstration using lightweight browser JavaScript
- Persistent light and dark themes with system-preference fallback
- Responsive layouts, keyboard support, visible focus, and reduced-motion handling
- Canonical URLs, Open Graph and X metadata, JSON-LD, sitemap, robots file, and `llms.txt`
- Central profile and portfolio content in `src/data/site.ts`
- Static Astro output, self-hosted fonts, and GitHub Actions build checks

## Free and Pro

| Free | Pro |
|---|---|
| One-page starter | Full portfolio product |
| Project snapshots | Dedicated evidence-led case-study pages |
| Interactive hero demo | Hero demo plus three-mode AI systems lab |
| Core profile sections | Richer modules and release documentation |
| MIT License | Commercial single-user license |

## Requirements

- Node.js 22.12 or later
- npm 10 or later

## Start locally

```bash
npm install
npm run dev
```

Run the production checks:

```bash
npm run build
npm run preview
```

You can also start a new Astro project directly from this repository after it is public:

```bash
npm create astro@latest -- --template Dharani-Eswaramurthi/latentfolio
```

## Customize

1. Replace the fictional profile, projects, experience, skills, writing, and education in `src/data/site.ts`.
2. Replace `public/avatar-placeholder.svg`, `public/resume-placeholder.pdf`, `public/og-cover.svg`, and `public/og-cover.png`.
3. Set `SITE_URL` to the exact public production origin in your deployment environment.
4. Update the favicon and web manifest, then test every email and external link.
5. Run `npm run build` and inspect the site on mobile and desktop in both themes.

Do not publish claims or metrics you cannot substantiate. If work is confidential, describe the evaluation method and use an approved range or qualitative outcome.

## Deploy

The output is static and can be deployed to Vercel, Netlify, Cloudflare Pages, GitHub Pages, or another static host. For Vercel, import the repository, keep the Astro defaults, add `SITE_URL`, and redeploy so canonical and social URLs use the production origin.

## License

LatentFolio Free is available under the [MIT License](LICENSE). You may use, modify, and distribute it, including commercially, while preserving the copyright and license notice. The visible creator link is appreciated but not required by the MIT License.

Third-party notices are listed in [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).

