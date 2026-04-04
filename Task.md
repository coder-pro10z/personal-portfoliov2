# Portfolio Improvement — Task Tracker
### Based on: Portfolio Professional Audit (April 4, 2026)
**Target:** Move score from 6.2 → 8.5+ | **Constraint:** Content & UX only — zero design changes

---

## 🔑 Legend

| Symbol | Meaning |
|---|---|
| `[ ]` | Not started |
| `[/]` | In progress |
| `[x]` | Done |
| `[!]` | Blocked / needs decision |
| ✅ | Phase verified & cleared |
| 🔒 | Phase locked — do NOT start until previous phase is verified |

---

## Phase 1 — Fix & Clean
> **Goal:** Remove broken elements, fix dead links, add SEO basics.
> **File scope:** `index.html`, `data.js`
> **Estimated time:** ~1 hour
> **Verification:** Open portfolio in browser. All links work. No broken secondary buttons. Browser tab shows correct title. Page source has meta description.

| # | Task | File | Status | Notes |
|---|---|---|---|---|
| 1.1 | Fix `RentIt` broken demo link — set `demoLink: ""` AND clear `demoLabel: ""` so no broken secondary button renders | `data.js` | `[ ]` | Line ~105 |
| 1.2 | Remove `"Currently in active development"` from Interview Prep Platform description | `data.js` | `[ ]` | Line ~110 |
| 1.3 | Update `<title>` from `"Portfolio \| Obsidian Grid"` to `"Praveen Kashyap \| Full Stack .NET Developer"` | `index.html` | `[ ]` | Line 6 |
| 1.4 | Add `<meta name="description">` tag with meaningful content | `index.html` | `[ ]` | After `<meta charset>` |
| 1.5 | Add Open Graph meta tags (`og:title`, `og:description`, `og:type`) | `index.html` | `[ ]` | For LinkedIn share preview |
| 1.6 | Add `<link rel="icon">` favicon tag | `index.html` | `[ ]` | Currently missing — blank tab icon |
| 1.7 | Delete commented-out dead code (old project block, lines 24–67) | `data.js` | `[ ]` | Clean dead code |

### Phase 1 — Verification Checklist
```
Before moving to Phase 2, confirm all of these pass:

[ ] Browser tab shows: "Praveen Kashyap | Full Stack .NET Developer"
[ ] RentIt project card has ONE link only (View Repository) — no broken second link
[ ] Interview Prep card description has NO "in active development" text
[ ] View Page Source → <meta name="description"> exists with real content
[ ] View Page Source → og:title / og:description exist
[ ] Browser tab shows a favicon (not a blank square)
[ ] data.js has no commented-out block (lines 24~67 gone)
```

> 🔒 **Phase 2 is locked until all Phase 1 checks pass.**

---

## Phase 2 — Content Rewrite
> **Goal:** Replace every generic/template-level content block with specific, outcome-driven copy.
> **File scope:** `data.js` only
> **Estimated time:** ~2 hours
> **Verification:** Read every visible text block in browser. Nothing should read like a template. All bullets are outcomes, not tasks.

### 2A — Hero & Global Profile

| # | Task | Field in `data.js` | Status | Rewrite Target |
|---|---|---|---|---|
| 2.1 | Update hero eyebrow | `hero.eyebrow` | `[ ]` | `"Full Stack .NET Developer · 3 Years"` |
| 2.2 | Rewrite tagline (hero copy paragraph) | `profile.tagline` | `[ ]` | `"Specializing in ASP.NET Core APIs, Angular SPAs, and full-stack web architecture — with a focus on clean code, DI patterns, and systems that are easy to maintain."` |
| 2.3 | Rewrite subtitle (role line under name) | `profile.title` | `[ ]` | `"Building production-grade .NET systems and Angular interfaces that ship clean and scale."` |
| 2.4 | Reduce hero CTAs from 3 to 2 — remove the `"About"` action | `hero.actions` | `[ ]` | Keep: Projects (primary) + Resume (success) |
| 2.5 | Update brand mark to initials only | `profile.brandMark` | `[ ]` | `"PK"` instead of `"Praveen Kashyap"` |

### 2B — About Section

| # | Task | Field in `data.js` | Status | Rewrite Target |
|---|---|---|---|---|
| 2.6 | Rewrite about section meta descriptor | `sections.about.meta` | `[ ]` | `"Focused on clean architecture and shipping quality software"` |
| 2.7 | Rewrite about copy paragraph | `sections.about.copy` | `[ ]` | `"I build full-stack web applications using ASP.NET Core on the backend and Angular on the frontend. My focus is on clean architecture, separation of concerns, and systems that are easy to extend and maintain. Outside of my day job at Coforge, I'm building an interview prep platform for the .NET community."` |

### 2C — Achievements Bullets

| # | Task | Field in `data.js` | Status | Rewrite Target |
|---|---|---|---|---|
| 2.8 | Rewrite achievement bullet 1 | `achievements[0]` | `[ ]` | `"3 years delivering full-stack web applications across .NET Core, Angular, and React"` |
| 2.9 | Rewrite achievement bullet 2 | `achievements[1]` | `[ ]` | `"Strong focus on clean architecture: separation of concerns, DI patterns, and maintainable service layers"` |
| 2.10 | Rewrite achievement bullet 3 | `achievements[2]` | `[ ]` | `"Experienced building both RESTful APIs and Angular SPAs end-to-end — from schema design to deployment"` |
| 2.11 | Rewrite achievement bullet 4 | `achievements[3]` | `[ ]` | `"Actively building an Interview Prep Platform for the .NET community — in use for self-assessment"` |

### 2D — Money Pilot Project

| # | Task | Field in `data.js` | Status | Rewrite Target |
|---|---|---|---|---|
| 2.12 | Update service label | `projects[0].service` | `[ ]` | `"Full Stack · ASP.NET Core + Angular"` |
| 2.13 | Rewrite description | `projects[0].description` | `[ ]` | `"Personal finance tracker with a clean service-layer backend and component-driven Angular frontend — focused on data accuracy, secure flows, and responsive UX."` |
| 2.14 | Rewrite highlight 1 | `projects[0].highlights[0]` | `[ ]` | `"Designed RESTful API endpoints using ASP.NET Core with Dependency Injection and repository pattern architecture"` |
| 2.15 | Rewrite highlight 2 | `projects[0].highlights[1]` | `[ ]` | `"Built a fully responsive Angular SPA with modular components and efficient state management"` |
| 2.16 | Rewrite highlight 3 | `projects[0].highlights[2]` | `[ ]` | `"Implemented role-based access control and secure user authentication with JWT"` |

### 2E — RentIt Project

| # | Task | Field in `data.js` | Status | Rewrite Target |
|---|---|---|---|---|
| 2.17 | Update service label | `projects[1].service` | `[ ]` | `"Full Stack · React + Node.js + MongoDB"` |
| 2.18 | Rewrite description | `projects[1].description` | `[ ]` | `"Property rental marketplace with a flexible NoSQL data layer, interactive React UI, and secure booking workflows — designed to support multi-landlord listings at scale."` |
| 2.19 | Rewrite highlight 1 | `projects[1].highlights[0]` | `[ ]` | `"Designed a document-based MongoDB schema to support flexible listing attributes and efficient query patterns"` |
| 2.20 | Rewrite highlight 2 | `projects[1].highlights[1]` | `[ ]` | `"Developed reusable React components with search, filter, and booking flows"` |
| 2.21 | Rewrite highlight 3 | `projects[1].highlights[2]` | `[ ]` | `"Implemented JWT-based authentication and protected API routes for landlord and tenant role separation"` |

### 2F — Interview Prep Platform Project

| # | Task | Field in `data.js` | Status | Rewrite Target |
|---|---|---|---|---|
| 2.22 | Update service label | `projects[2].service` | `[ ]` | `"Full Stack · .NET Core + Angular"` |
| 2.23 | Rewrite description | `projects[2].description` | `[ ]` | `"Structured interview preparation platform for .NET and Angular developers — featuring Mock Quizzes, timed assessments, and a curated knowledge base across System Design, OOP, and Security."` |
| 2.24 | Rewrite highlight 1 | `projects[2].highlights[0]` | `[ ]` | `"Engineered two evaluation modes: instant-feedback Mock Quizzes and timed 'Interview Ready' professional assessments"` |
| 2.25 | Rewrite highlight 2 | `projects[2].highlights[1]` | `[ ]` | `"Curated a knowledge base spanning System Design, OOP, Backend, Frontend, Database, and Security topics"` |
| 2.26 | Rewrite highlight 3 | `projects[2].highlights[2]` | `[ ]` | `"Built modular ASP.NET Core APIs with clean service-layer abstractions for scalable content delivery"` |

### 2G — Skills Cleanup

| # | Task | Field in `data.js` | Status | Notes |
|---|---|---|---|---|
| 2.27 | Remove `"REST APIs"` from backend skills (it's a pattern, not a technology) | `skills.backend` | `[ ]` | Replace with `"Entity Framework Core"` |
| 2.28 | Remove `"Visual Studio"` and `"VS Code"` from tools (universal, not differentiating) | `skills.tools` | `[ ]` | Add `"Docker"` if applicable |
| 2.29 | Rename methodologies entries to show architecture awareness | `skills.methodologies` | `[ ]` | Add `"Clean Architecture"`, `"Repository Pattern"`, `"DI / IoC"` |

### Phase 2 — Verification Checklist
```
Before moving to Phase 3, confirm all of these pass:

[ ] Hero eyebrow reads: "Full Stack .NET Developer · 3 Years"
[ ] Hero tagline is the rewritten version (not the old generic one)
[ ] Hero has exactly 2 CTA buttons (Projects + Resume), NOT 3
[ ] Brand mark shows "PK" not "Praveen Kashyap"
[ ] About copy is the rewritten paragraph (no template language)
[ ] All 4 achievement bullets are outcomes, not traits
[ ] All 3 project service labels show the tech stack
[ ] All 3 project descriptions are rewritten (no "currently in active development")
[ ] All 9 project highlights are rewritten in outcome/decision language
[ ] Skills: no "REST APIs", no "Visual Studio", "Clean Architecture" present
[ ] Read each section aloud — nothing sounds like a template
```

> 🔒 **Phase 3 is locked until all Phase 2 checks pass.**

---

## Phase 3 — Add Missing Features
> **Goal:** Render tech tags on cards, add location/availability, fix skill label display.
> **File scope:** `script.js`, `data.js`
> **Estimated time:** ~1.5 hours
> **Verification:** Cards show tech pill badges. Footer/hero show location. Skill "Methodologies" renders properly labeled.

| # | Task | File | Status | Notes |
|---|---|---|---|---|
| 3.1 | Add `location` and `availability` fields to `profile` in data.js | `data.js` | `[ ]` | e.g. `location: "Hyderabad, India"`, `availability: "Open to opportunities"` |
| 3.2 | Render `project.tech` array as pill tags inside `createProjectCard()` — below the highlights `<ul>` | `script.js` | `[ ]` | Reuse existing `.skill-tag` + `.skill-tags` CSS classes — zero new styling needed |
| 3.3 | Render `location` and `availability` from profile — add to footer inner or hero eyebrow | `script.js` | `[ ]` | Can append to footer email row or inject into eyebrow text |
| 3.4 | Update `skillLabels` object — rename `methodologies` label to `"Architecture & Methods"` | `script.js` | `[ ]` | Line ~32 in script.js |
| 3.5 | Add `profile.location` / `profile.availability` rendering to `renderPortfolio()` | `script.js` | `[ ]` | Add DOM update after `footerEmail` setup |

### Phase 3 — Verification Checklist
```
Before moving to Phase 4, confirm all of these pass:

[ ] Each project card shows a row of tech pill badges (e.g., "ASP.NET Core", "Angular", "C#")
[ ] Skill section shows "Architecture & Methods:" label (not lowercase "methodologies:")
[ ] Location appears somewhere visible (footer or hero eyebrow or about section)
[ ] Availability signal is visible to a visitor (even small text)
[ ] No visual layout breakage on desktop (1280px) or mobile (375px)
[ ] No console errors in browser DevTools
```

> 🔒 **Phase 4 is locked until all Phase 3 checks pass.**

---

## Phase 4 — Polish & Harden
> **Goal:** Accessibility fixes, performance guard on canvas, SEO final pass.
> **File scope:** `script.js`, `index.html`
> **Estimated time:** ~1 hour
> **Verification:** DevTools Accessibility audit passes. Canvas pauses when tab is backgrounded. All form inputs have aria attributes.

| # | Task | File | Status | Notes |
|---|---|---|---|---|
| 4.1 | Add `document.visibilitychange` listener to pause `requestAnimationFrame` loop when tab is hidden | `script.js` | `[ ]` | Prevents CPU burn on background tabs |
| 4.2 | Add debounce (~150ms) to the `resize` event handler for grid rebuild | `script.js` | `[ ]` | Prevents thrashing on resize |
| 4.3 | Add `role="button"` + `tabindex="0"` to hero title element in `renderPortfolio()` | `script.js` | `[ ]` | Enables keyboard focus on the charge element |
| 4.4 | Add `keydown` (Enter / Space) event listener to hero title to trigger charge effect | `script.js` | `[ ]` | Mirrors `pointerdown` / `pointerup` behavior |
| 4.5 | Add `aria-required="true"` to subject input and message textarea in contact form | `script.js` | `[ ]` | Line ~614, ~619 in renderPortfolio HTML template |
| 4.6 | Add `aria-label` to contact form submit button | `script.js` | `[ ]` | `aria-label="Send Email"` |
| 4.7 | Verify all `target="_blank"` project links have `rel="noreferrer"` | `script.js` | `[ ]` | Security baseline — especially RentIt and Interview Prep links |
| 4.8 | Add `<meta name="robots" content="index, follow">` to index.html | `index.html` | `[ ]` | Ensures search engines index the page |

### Phase 4 — Verification Checklist
```
Final verification before declaring the portfolio complete:

[ ] Open browser DevTools → Performance tab → record idle — canvas loop stops when tab is hidden
[ ] Resize browser window rapidly — no performance lag
[ ] Press Tab key on portfolio → hero title should be focusable
[ ] Press Enter/Space on focused hero title → charge effect fires
[ ] Inspect contact form inputs in DevTools → aria-required="true" present
[ ] Run Lighthouse Accessibility audit → score improved vs. baseline
[ ] View Page Source → <meta name="robots"> present
[ ] All project "View Repository" links open GitHub correctly in new tab
[ ] Test on mobile (375px) — layout intact, no content overflow
[ ] Test on tablet (768px) — cards stack correctly, about/skills stack correctly
```

---

## 📊 Phase Progress Dashboard

| Phase | Description | Tasks | Done | Status |
|---|---|---|---|---|
| **Phase 1** | Fix & Clean | 7 | 0 / 7 | 🔴 Not Started |
| **Phase 2** | Content Rewrite | 29 | 0 / 29 | 🔒 Locked |
| **Phase 3** | Add Missing Features | 5 | 0 / 5 | 🔒 Locked |
| **Phase 4** | Polish & Harden | 8 | 0 / 8 | 🔒 Locked |
| **Total** | | **49** | **0 / 49** | |

---

## 🎯 Score Projections

| After Phase | Projected Score | Key Gain |
|---|---|---|
| Baseline (now) | 6.2 / 10 | — |
| After Phase 1 | 6.5 / 10 | Broken elements removed, SEO foundation |
| After Phase 2 | 7.8 / 10 | Content reads senior-level — biggest jump |
| After Phase 3 | 8.2 / 10 | Tech stack visible, recruiter signals present |
| After Phase 4 | 8.6 / 10 | Accessible, performant, hardened |
