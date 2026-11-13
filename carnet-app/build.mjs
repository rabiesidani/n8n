// Wraps app.html (the single source of the app) into a standalone PWA index.html.
import { readFileSync, writeFileSync } from 'node:fs';
const app = readFileSync(new URL('./app.html', import.meta.url), 'utf8');
const html = `<!doctype html>
<html lang="es">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<meta name="theme-color" content="#1D5BB8">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-title" content="Carnet B">
<link rel="manifest" href="manifest.webmanifest">
<link rel="icon" href="icon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="icon-192.png">
<style>:root{padding-top:env(safe-area-inset-top,0px);padding-bottom:env(safe-area-inset-bottom,0px)}body{margin:0}[hidden]{display:none!important}</style>
</head>
<body>
${app}
<script>if('serviceWorker' in navigator){navigator.serviceWorker.register('sw.js').catch(function(){})}</script>
</body>
</html>
`;
writeFileSync(new URL('./index.html', import.meta.url), html);
console.log('index.html written');
