To make your portfolio feel truly "premium" on mobile, we need to apply **Modular Spacing**. This ensures the layout is never "squeezed" and the user's eye is led naturally from your name to your call-to-action buttons.

Here is the refined implementation for the **Hero**, **Navbar**, and **Footer**, wrapped in a clean media query.

### 1. The HTML Structure
Ensure your main content is wrapped in a container that allows the navbar and footer to stay pinned.

```html
<nav class="mobile-navbar">
  <div class="nav-inner">
    <span class="logo">PK</span>
    <button class="menu-btn" aria-label="Menu">
      <span class="hamburger"></span>
    </button>
  </div>
</nav>

<section class="hero-container">
  <div class="hero-content">
    <header class="hero-header">
      <p class="eyebrow-text">Full Stack .NET Developer • 3 Years</p>
      <h1 class="main-name">Praveen Kashyap</h1>
      <h2 class="sub-title">Software Engineer at Coforge</h2>
    </header>

    <p class="hero-description">
      ASP.NET Core APIs, Angular SPAs, and full-stack .NET architecture — 
      <strong>clean code</strong>, DI patterns, and systems built to last.
    </p>

    <div class="hero-cta">
      <a href="#projects" class="btn-primary">View Projects</a>
      <a href="/resume.pdf" class="btn-secondary">Download Resume</a>
    </div>
  </div>
</section>

<footer class="mobile-footer">
  <p class="footer-tag">Let's connect</p>
  <div class="footer-links">
    <a href="mailto:email@example.com" class="social-icon">✉️</a>
    <a href="#" class="social-icon">🐙</a>
    <a href="#" class="social-icon">🔗</a>
    <a href="tel:+123" class="social-icon">📞</a>
  </div>
</footer>
```

---

### 2. The CSS (Responsive Fixes)
This CSS specifically targets the **Width**, **Hierarchy**, and **Breathability** issues we identified.

```css
/* Only applies to mobile screens */
@media (max-width: 768px) {
  
  /* --- 1. NAVBAR FIX --- */
  .mobile-navbar {
    position: fixed;
    top: 0;
    width: 100%;
    height: 60px;
    z-index: 1000;
    background: rgba(10, 15, 28, 0.75);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  .nav-inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 0 24px; /* Essential side breathing room */
  }

  /* --- 2. HERO "BREATHABILITY" FIX --- */
  .hero-container {
    padding: 100px 24px 140px 24px; /* Top to clear nav, Bottom to clear footer */
    min-height: 100vh;
    display: flex;
    align-items: center;
    text-align: center;
  }

  .hero-content {
    width: 100%;
    max-width: 450px; /* Prevents text from stretching too wide */
    margin: 0 auto;
  }

  .eyebrow-text {
    font-size: 0.75rem;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #94a3b8;
    margin-bottom: 1rem;
  }

  .main-name {
    font-size: 2.2rem;
    font-weight: 800;
    margin-bottom: 0.5rem;
    letter-spacing: -0.02em;
  }

  .sub-title {
    font-size: 1.1rem;
    color: #60a5fa;
    margin-bottom: 2.5rem; /* Creates a clear break after branding */
  }

  .hero-description {
    font-size: 1rem;
    line-height: 1.7; /* Increases 'air' between lines */
    color: #cbd5e1;
    margin-bottom: 3.5rem; /* Massive space before buttons */
  }

  .hero-cta {
    display: flex;
    flex-direction: column;
    gap: 16px; /* Space between buttons */
  }

  .btn-primary, .btn-secondary {
    padding: 16px;
    border-radius: 12px;
    font-weight: 600;
    text-decoration: none;
  }

  .btn-primary { background: #2563eb; color: white; }
  .btn-secondary { background: #22c55e; color: white; }

  /* --- 3. FOOTER FIX --- */
  .mobile-footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background: rgba(15, 23, 42, 0.9);
    backdrop-filter: blur(15px);
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    padding: 15px 0 30px 0; /* Padding for iPhone home bar */
    border-radius: 24px 24px 0 0;
    z-index: 1000;
  }

  .footer-tag {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-bottom: 12px;
    color: #64748b;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 30px;
  }

  .social-icon {
    font-size: 1.4rem;
    width: 48px; /* High-quality tap target */
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 50%;
  }
}
```

---

### Key Visual Improvements Made:
* **The "Frame" Effect:** By setting a `max-width: 450px` and `padding: 24px` on the hero, the text no longer hits the edges of the phone. It feels "contained" and professional.
* **Vertical Rhythm:** We increased the margins between the Title, the Description, and the Buttons. This allows the user to digest one piece of information at a time.
* **Legibility:** `line-height: 1.7` prevents the 4-line description from looking like a dark block. It now looks like a professional summary.
* **Thumb-Friendly Footer:** The icons are now centered in `48x48px` circles, making them incredibly easy to click while commuting.

Does this more "airy" layout feel better on your test device, or should we tighten the space between the name and the subtitle?