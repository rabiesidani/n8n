# Carnet B Trainer

Mobile study app for the Spanish DGT theory exam (permiso B). Spanish/English toggle.

- **Theory**: 14 topics (signs, speed, priority, overtaking, parking, lights, alcohol, safety, vehicle, motorways/weather, first aid, points, eco-driving, the exam itself).
- **Mock exam**: 30 questions, 30-minute timer, pass with 3 mistakes or fewer, like the real exam.
- **Always different**: every run shuffles the questions and the answer order, and generators create fresh variants (road signs with random speeds, reaction/braking/stopping distances, speed limits by road type, alcohol limits, points per offence). Questions you have seen recently show up less; ones you failed show up more.
- **Practice** by topic with instant explanations, and a **Mistakes** list that clears as you get them right.
- Progress is stored on the device (localStorage). Works offline after the first visit (service worker).

## Files
- `app.html`: the whole app (styles, content, logic). Edit this.
- `build.mjs`: run `node build.mjs` to regenerate `index.html` (adds manifest + service worker).
- `index.html`, `manifest.webmanifest`, `sw.js`, `icon*`: the installable PWA.

## Run / install
Serve the folder over HTTPS (e.g. GitHub Pages, Netlify, or `npx serve .` locally), open it on your phone and use "Add to Home Screen".

Study aid based on rules in force in 2026; not an official DGT tool.
