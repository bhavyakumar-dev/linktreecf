# 🌐 Bhavya Kumar — Cloudflare Projects Linktree

A high-performance, modern linktree showcasing Cloudflare Pages and Cloudflare Worker projects. Built with pure HTML5, modern CSS3, and JavaScript with zero external dependencies.

🔗 **Live GitHub Pages URL:** [https://bhavyakumar-dev.github.io/linktreecf/](https://bhavyakumar-dev.github.io/linktreecf/)

---

## 🎨 Two Distinct Editions Included

| Edition | Description | Direct Link |
| :--- | :--- | :--- |
| **Unified Master Hub** | Dynamic view switcher between V1 and V2 with URL hash and localStorage memory | [Open Master Hub](https://bhavyakumar-dev.github.io/linktreecf/) |
| **Version 1: Minimalist Studio** | Clean, typography-first card layout with dark/light mode toggle and verified badge | [Open Version 1](https://bhavyakumar-dev.github.io/linktreecf/v1/) |
| **Version 2: Cyber Bento** | Deep obsidian glassmorphism with ambient aurora mesh, glowing bento cards, and interactive cursor spotlight | [Open Version 2](https://bhavyakumar-dev.github.io/linktreecf/v2/) |

---

## 🚀 Featured Deployments

1. 🧠 **[Memory Lab](https://memorylab.pages.dev)**
   - *Memory: An English Exploration & Interactive Cognitive Lab*
   - Platform: Cloudflare Pages
   
2. 🎓 **[Career With English](https://careerwithenglish.pages.dev)**
   - *English Careers Forum 2026 — Every Career Speaks English*
   - Platform: Cloudflare Pages

3. 🍳 **[Food Fusion](https://foodfusionweb.pages.dev/)**
   - *Fusion Food Family Lab — Interactive Culinary Science & Games*
   - Platform: Cloudflare Pages

4. ⚡ **[Careers With English (Worker)](https://careerswithenglish.bhavyakumar.workers.dev)**
   - *Career Fair & Speech Lab powered by Cloudflare Workers at the Edge*
   - Platform: Cloudflare Workers

---

## 🛠️ Features

- ⚡ **Zero Dependencies & Blazing Fast:** 100/100 Lighthouse score potential.
- 🌓 **Dynamic Theme Switching:** System theme detection + manual light/dark toggle.
- 📱 **Fully Responsive:** Pixel-perfect across desktop, tablet, and mobile screens.
- 📱 **QR Code Sharing:** Built-in instant QR code generator for easy mobile testing.
- 📋 **One-Click Clipboard Copy:** Instant link sharing with toast notifications.
- 🚀 **GitHub Actions Automated Deployment:** Auto-deploys to GitHub Pages upon push.

---

## 📁 Repository Structure

```
linktreecf/
├── index.html         # Master Linktree (Dynamic V1 / V2 Switcher)
├── style.css          # Master stylesheet for both themes
├── script.js          # Switcher logic, spotlight effect, copy & QR tools
├── v1/
│   ├── index.html     # Standalone Version 1 (Minimalist Studio)
│   └── style.css      # V1 dedicated stylesheet
├── v2/
│   ├── index.html     # Standalone Version 2 (Cyber Bento Glassmorphism)
│   └── style.css      # V2 dedicated stylesheet
├── original/          # Original downloaded files backup
├── .github/
│   └── workflows/
│       └── pages.yml  # GitHub Actions Pages deployment workflow
└── README.md
```

---

## ⚙️ Enabling GitHub Pages (If not yet active)

1. Go to repository **Settings** > **Pages** (or [click here](https://github.com/bhavyakumar-dev/linktreecf/settings/pages)).
2. Under **Build and deployment** > **Source**:
   - Choose **GitHub Actions** (recommended, deploys automatically via `.github/workflows/pages.yml`), OR
   - Choose **Deploy from a branch** -> branch: `main` / folder: `/ (root)`.
3. Save and wait 30 seconds for the site to go live at `https://bhavyakumar-dev.github.io/linktreecf/`.
