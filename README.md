# Immobilienmakler-Website für Köln

Eine moderne, leistungsfähige Website für einen Immobilienmakler in Köln, optimiert für KI-Suche (Google AI Search) und lokale SEO.

## Übersicht

Dieses Projekt enthält den Quellcode für eine professionelle Immobilienmakler-Website, die Leads über ein interaktives Bewertungstool und lokale SEO-Seiten generiert.

## Technologiestack

- **Frontend**: Astro + Tailwind CSS
- **Styling**: Tailwind CSS (konfiguriert in `tailwind.config.cjs`)
- **Build-Tool**: npm / npx astro
- **Hosting**: Vercel
- **Sprachen**: TypeScript, JavaScript, HTML, CSS

## Projektstruktur

```
Immobilien/
├── public/
│   ├── logo.png                  # Logo-Datei
│   └── ...                       # Weitere statische Assets
├── src/
│   ├── components/
│   │   ├── Header.astro          # Header mit Navigation
│   │   ├── Footer.astro          # Footer mit Links
│   │   ├── Hero.astro            # Hero-Sektion
│   │   ├── Features.astro        # Features/Leistungen
│   │   ├── EvaluationCTA.astro   # Bewertungs-Call-to-Action
│   │   ├── Testimonials.astro    # Kundenstimmen
│   │   ├── ServiceGrid.astro     # Grid der Dienstleistungen
│   │   └── ...                   # Weitere Komponenten
│   ├── layouts/
│   │   └── Layout.astro          # Hauptlayout
│   ├── pages/
│   │   ├── index.astro           # Startseite (Home)
│   │   ├── bewertung.astro       # Bewertungsseite (interaktiv)
│   │   ├── leistungen.astro      # Leistungen
│   │   ├── ueber-uns.astro       # Über uns
│   │   ├── blog.astro            # Blog-Übersicht
│   │   ├── blog/[slug].astro     # Einzelner Blog-Beitrag
│   │   ├── kontakt.astro         # Kontaktseite
│   │   └── koeln-[stadtteil].astro # Lokale SEO-Seiten (Beispiele: koeln-lindenthal, koeln-ehrenfeld)
│   └── styles/
│       └── global.css            # Globale Styles
├── astro.config.mjs              # Astro-Konfiguration
├── tailwind.config.cjs           # Tailwind-Konfiguration
├── package.json                  # Abhängigkeiten und Skripte
├── vercel.json                   # Vercel-Konfiguration
└── README.md                     # Diese Datei
```

## Wichtige Konfigurationen

### astro.config.mjs
```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://immobilien-koeln.example.com', // Aktualisieren mit deiner Domain
  integrations: [tailwind()],
  build: {
    format: 'file',
  },
});
```

### tailwind.config.cjs
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E3A8A', // Indigo-800
        secondary: '#111827', // Gray-900
        accent: '#059669',   // Emerald-600
        // ... weitere Farben
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
```

## Lokale SEO-Seiten

Für bessere lokale Sichtbarkeit wurden spezifische Seiten für Kölner Stadtteile erstellt:
- `/koeln-lindenthal`
- `/koeln-ehrenfeld`
- `/koeln-nippes`
- Weitere können analog erstellt werden.

Jede Seite sollte:
- Lokale Keywords enthalten (z.B. "Immobilienmakler Köln-Lindenthal")
- Adressdaten und Öffnungszeiten anzeigen
- Auflokale Angebote und Bewertungen hinweisen
- Schema.org-Markup für LocalBusiness verwenden

## Deployment auf Vercel

### Voraussetzungen
- Ein Vercel-Konto (kostenlos)
- Dieses Repository bei GitHub gepusht
- Node.js und npm installiert

### Schritt-für-Schritt Anleitung

1. **GitHub Repository**
   - Stelle sicher, dass der Code in einem GitHub-Repository liegt (z.B. `immobilienmakler-koeln`).
   - Das Repository sollte bereits mit Vercel verbunden sein.

2. **Vercel-Projekt**
   - Vercel erkennt das Projekt automatisch über das `vercel.json` und `package.json`.
   - Der Build-Befehl ist `npm run build` und der Ausgabeordner ist `dist`.

3. **Umgebungsvariablen**
   - Aktuell sind keine zusätzlichen Umgebungsvariablen erforderlich.
   - Falls zukünftig ein Backend (z.B. Supabase) angebunden wird, können Variablen hier hinzugefügt werden.

4. **Domain**
   - Füge deine Domain im Vercel-Dashboard hinzu (z.B. immobilien-koeln.de).

5. **Automatische Bereitstellung**
   - Bei jedem Push in den Hauptbranch wird automatisch neu bereitgestellt.

## Entwicklung lokal starten

```bash
# Abhängigkeiten installieren
npm install

# Entwicklungs-Server starten
npm run dev

# Produktionsbuild erstellen
npm run build

# Vorschau des Produktionsbuilds
npm start
```

## Weitere Schritte (Offene Aufgaben)

- [ ] Lokale SEO-Landingpages für weitere Kölner Stadtteile erstellen (z.B. /koeln-mülheim, /koeln-sülz)
- [ ] SEO & KI-Optimierung: Schema.org-Markup (RealEstateAgent, LocalBusiness, FAQPage, Article) einbauen
- [ ] Passage-ready FAQs für häufige Fragen entwickeln
- [ ] i18n-Setup für Deutsch/English (Routing und Übersetzungen)
- [ ] Open Graph und Twitter Cards für Social Sharing
- [ ] Performance & Conversion: Core Web Vitals optimieren, JS-Nutzung minimieren
- [ ] Newsletter-Anbindung einrichten (Mock für jetzt, später mit Dienstleister verbinden)
- [ ] Kontaktformular mit E-Mail-Integration (z.B. über Formspree, EmailJS oder Backend-Service)
- [ ] Blog mit regelmäßigen Posts zum Immobilienmarkt Köln füllen
- [ ] Testimonials mit echten Kundenstimmen aktualisieren

## Verantwortlichkeiten

- **Entwicklung**: Frontend-Entwicklung, SEO-Optimierung, Komponenten-Entwicklung
- **Deployment**: Vercel-Konfiguration, Domain-Setup, CI/CD (bereits eingerichtet)
- **Inhalt**: Erstellung von Inhalten für Seiten, Blog-Beiträge, FAQ
- **SEO**: Keyword-Recherche, Schema-Markup, Performance-Optimierung

## Kontakt

Bei Fragen oder Anregungen bitte über das Kontaktformular auf der Website oder per E-Mail an [deine-email@example.com] wenden.

## Hinweise

- Die Website ist responsiv und für mobile Geräte optimiert.
- Alle Formulare verfügen über clientseitige Validierung.
- Für den Produktiveinsatz werden serverseitige Validierungen und Sicherheitsmaßnahmen empfohlen.
- Die Website verwendet moderne Webtechnologien für beste Leistung und Nutzererfahrung.

## Lizenz

Dieser Code ist für das spezifische Projekt mit dem Immobilienmakler in Köln bestimmt. Eine Weiterverwendung außerhalb dieses Projekts ist ohne Zustimmung nicht gestattet.

--- 
*Letzte Aktualisierung: $(date '+%Y-%m-%d')*