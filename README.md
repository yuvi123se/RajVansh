# SkyLine — immersive multi-page Discord management website

Static HTML/CSS/JS site. No build step required.

Pages:
- index.html — Home
- server.html — Server Info
- team.html — Team
- services.html — Services
- pricing.html — Pricing (custom pricing discussed on Discord; no public INR prices)
- contact.html — Contact

## Run
Open `index.html` directly, or serve the folder with any static web server.

## Branding assets
The three uploaded team photos are bundled locally. The provided Discord CDN logo and banner URLs are referenced in the HTML/CSS because the runtime could not download those external Discord CDN assets. Replace them with local files if you want the deployment to be independent of Discord CDN expiry.

## Notes
Pricing/service content is based on the supplied reference sites and can be edited directly in the HTML files.
