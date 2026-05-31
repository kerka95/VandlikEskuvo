# Vandlik Esküvő

Hivatalos weboldal a Vandlik Testvérek számára. Esküvőszervezés, prémium dekoráció és rendezvénykoordináció.

## Fejlesztés

A weboldal **Next.js 15 (App Router)** és **SCSS** használatával készült.

### Helyi futtatás
```bash
npm install
npm run dev
```
Az oldal megnyitható a [http://localhost:3000](http://localhost:3000) címen.

### GitHub Pages Deploy
A projekt automatikusan frissül a GitHub Pages felületén, ha módosítást pusholsz a `main` (vagy `master`) ágra. A `next.config.mjs` beállítása (`output: 'export'`) és a GitHub Actions workflow gondoskodik a megfelelő fordításról.
