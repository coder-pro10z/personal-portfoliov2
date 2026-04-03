const app = document.getElementById("app");

const iconSvgs = {
  linkedin: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
    </svg>
  `,
  resume: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
    </svg>
  `,
  github: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
    </svg>
  `
};

const socialConfig = [
  { key: "linkedin", label: "LinkedIn" },
  { key: "resume", label: "Resume" },
  { key: "github", label: "GitHub" }
];

const skillLabels = {
  backend: "Backend",
  frontend: "Frontend",
  database: "Database",
  tools: "Tools",
  methodologies: "Methodologies"
};

function parseMarkdownEmail(emailValue) {
  const match = /^\[(.+?)\]\((mailto:.+?)\)$/.exec(emailValue || "");
  if (!match) {
    return {
      text: emailValue || "",
      href: emailValue?.startsWith("mailto:") ? emailValue : `mailto:${emailValue || ""}`
    };
  }

  return {
    text: match[1],
    href: match[2]
  };
}

function createSocialIconLink(key, label, href) {
  const link = document.createElement("a");
  link.className = "icon-btn";
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.setAttribute("aria-label", label);
  link.innerHTML = iconSvgs[key];
  return link;
}

function createProjectCard(project) {
  const article = document.createElement("article");
  article.className = "project-card";

  const highlights = project.highlights
    .map((highlight) => `<li>${highlight}</li>`)
    .join("");

  const projectHref = project.link || project.caseStudyLink || "#portfolio";
  const projectLabel = project.linkLabel || "Case Study ->";
  const iconMarkup = typeof project.icon === "object"
    ? `<span class="${project.icon.type}" aria-hidden="true">${project.icon.name}</span>`
    : `<span>${project.icon || project.title.charAt(0)}</span>`;

  article.innerHTML = `
    <div class="project-card__icon">${iconMarkup}</div>
    <h3 class="project-card__title">${project.title}</h3>
    <p class="project-card__service">${project.service || project.tech.join(" | ")}</p>
    <div class="project-card__divider"></div>
    <div class="project-card__body">
      <p>${project.description}</p>
      <ul class="project-card__list">${highlights}</ul>
    </div>
    <div class="project-card__footer">
      <a class="project-card__link" href="${projectHref}" target="_blank" rel="noreferrer">${projectLabel}</a>
    </div>
  `;

  return article;
}

function createSkillLine(category, values) {
  const line = document.createElement("div");
  line.className = "skill-line";
  line.innerHTML = `<strong>${skillLabels[category]}:</strong><span>${values.join(", ")}</span>`;
  return line;
}

function createFooterTextLink(label, href) {
  const link = document.createElement("a");
  link.href = href;
  link.target = "_blank";
  link.rel = "noreferrer";
  link.textContent = label;
  return link;
}

function createMailtoUrl(emailHref, subject, message) {
  const recipient = emailHref.replace(/^mailto:/, "");
  const params = new URLSearchParams();

  if (subject.trim()) {
    params.set("subject", subject.trim());
  }

  if (message.trim()) {
    params.set("body", message.trim());
  }

  const query = params.toString();
  return query ? `mailto:${recipient}?${query}` : `mailto:${recipient}`;
}

function renderPortfolio(data) {
  const { profile, skills, projects, achievements, socialLinks, navigation, sections, hero } = data;
  const email = parseMarkdownEmail(profile.email);

  app.innerHTML = `
    <header class="topbar">
      <div class="container topbar__inner">
        <a class="brand" href="#top" aria-label="Home">
          <div class="brand__mark"></div>
          <span class="brand__name"></span>
        </a>

        <nav class="nav" aria-label="Primary"></nav>

        <div class="actions" aria-label="Social links"></div>
      </div>
    </header>

    <main id="top">
      <section class="hero container">
        <div class="hero__eyebrow"></div>
        <h1 class="hero__title"></h1>
        <div class="hero__subtitle"></div>
        <p class="hero__copy"></p>
        <div class="hero__cta"></div>
      </section>

      <section id="portfolio" class="section container">
        <div class="section__head">
          <h2 class="section__title"></h2>
          <div class="section__meta"></div>
        </div>
        <div class="projects"></div>
      </section>

      <section id="about" class="section container">
        <div class="section__head">
          <h2 class="section__title"></h2>
          <div class="section__meta"></div>
        </div>

        <div class="stack-grid">
          <div class="panel skills" aria-label="Skills"></div>
          <div class="panel about">
            <p></p>
            <ul class="about__bullets"></ul>
          </div>
        </div>
      </section>

      <section id="contact" class="section container">
        <div class="section__head">
          <h2 class="section__title"></h2>
          <div class="section__meta"></div>
        </div>

        <div class="contact-grid">
          <div class="panel contact-copy">
            <p></p>
            <a class="contact-copy__email"></a>
          </div>

          <form class="panel contact-form">
            <label class="contact-form__field">
              <span></span>
              <input type="text" name="subject">
            </label>

            <label class="contact-form__field">
              <span></span>
              <textarea name="message" rows="6"></textarea>
            </label>

            <button type="submit" class="btn btn--primary"></button>
          </form>
        </div>
      </section>

      <footer class="footer">
        <div class="container footer__inner">
          <a class="footer__email"></a>
          <div class="footer__links"></div>
        </div>
      </footer>
    </main>
  `;

  const brandMark = app.querySelector(".brand__mark");
  const brandName = app.querySelector(".brand__name");
  const nav = app.querySelector(".nav");
  const actions = app.querySelector(".actions");
  const heroEyebrow = app.querySelector(".hero__eyebrow");
  const heroTitle = app.querySelector(".hero__title");
  const heroSubtitle = app.querySelector(".hero__subtitle");
  const heroCopy = app.querySelector(".hero__copy");
  const heroCta = app.querySelector(".hero__cta");
  const projectTitle = app.querySelector("#portfolio .section__title");
  const projectMeta = app.querySelector("#portfolio .section__meta");
  const projectsContainer = app.querySelector(".projects");
  const aboutTitle = app.querySelector("#about .section__title");
  const aboutMeta = app.querySelector("#about .section__meta");
  const skillsPanel = app.querySelector(".skills");
  const aboutCopy = app.querySelector(".about p");
  const achievementsList = app.querySelector(".about__bullets");
  const contactTitle = app.querySelector("#contact .section__title");
  const contactMeta = app.querySelector("#contact .section__meta");
  const contactCopy = app.querySelector(".contact-copy p");
  const contactEmail = app.querySelector(".contact-copy__email");
  const contactForm = app.querySelector(".contact-form");
  const subjectLabel = app.querySelector('.contact-form input[name="subject"]').previousElementSibling;
  const subjectInput = app.querySelector('.contact-form input[name="subject"]');
  const messageLabel = app.querySelector('.contact-form textarea[name="message"]').previousElementSibling;
  const messageInput = app.querySelector('.contact-form textarea[name="message"]');
  const submitButton = app.querySelector(".contact-form button");
  const footerEmail = app.querySelector(".footer__email");
  const footerLinks = app.querySelector(".footer__links");

  brandMark.textContent = profile.brandMark;
  brandName.textContent = profile.brandName;

  navigation.forEach((item) => {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    nav.appendChild(link);
  });

  socialConfig.forEach(({ key, label }) => {
    actions.appendChild(createSocialIconLink(key, label, profile.links[key]));
  });

  heroEyebrow.textContent = hero.eyebrow;
  heroTitle.textContent = profile.name;
  heroSubtitle.textContent = profile.title;
  heroCopy.textContent = profile.tagline;

  hero.actions.forEach((action) => {
    const link = document.createElement("a");
    const variantClass = {
      primary: "btn--primary",
      ghost: "btn--ghost",
      success: "btn--success"
    }[action.variant] || "btn--primary";

    link.className = `btn ${variantClass}`;
    link.href = action.href;
    if (!action.href.startsWith("#")) {
      link.target = "_blank";
      link.rel = "noreferrer";
    }
    link.textContent = action.label;
    heroCta.appendChild(link);
  });

  projectTitle.textContent = sections.projects.title;
  projectMeta.textContent = sections.projects.meta;
  projects.forEach((project) => {
    projectsContainer.appendChild(createProjectCard(project));
  });

  aboutTitle.textContent = sections.about.title;
  aboutMeta.textContent = sections.about.meta;

  Object.entries(skills).forEach(([category, values]) => {
    skillsPanel.appendChild(createSkillLine(category, values));
  });

  aboutCopy.textContent = sections.about.copy;
  achievements.forEach((achievement) => {
    const item = document.createElement("li");
    item.textContent = achievement;
    achievementsList.appendChild(item);
  });

  contactTitle.textContent = sections.contact.title;
  contactMeta.textContent = sections.contact.meta;
  contactCopy.textContent = sections.contact.copy;
  contactEmail.href = email.href;
  contactEmail.textContent = email.text;
  subjectLabel.textContent = sections.contact.form.subjectLabel;
  subjectInput.placeholder = sections.contact.form.subjectPlaceholder;
  messageLabel.textContent = sections.contact.form.messageLabel;
  messageInput.placeholder = sections.contact.form.messagePlaceholder;
  submitButton.textContent = sections.contact.form.submitLabel;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    window.location.href = createMailtoUrl(email.href, subjectInput.value, messageInput.value);
  });

  footerEmail.href = email.href;
  footerEmail.textContent = email.text;

  socialLinks.forEach((linkData, index) => {
    footerLinks.appendChild(createFooterTextLink(linkData.label, linkData.href));

    if (index < socialLinks.length - 1) {
      const divider = document.createElement("span");
      divider.className = "divider-dot";
      footerLinks.appendChild(divider);
    }
  });
}

renderPortfolio(portfolioData);

document.addEventListener("click", (event) => {
  const anchor = event.target.closest('a[href^="#"]');

  if (!anchor) {
    return;
  }

  const target = document.querySelector(anchor.getAttribute("href"));

  if (!target) {
    return;
  }

  event.preventDefault();


  const topbar = document.querySelector(".topbar");
  const topbarHeight = topbar ? topbar.offsetHeight : 0;
  const offset = 20;
  const targetTop = target.getBoundingClientRect().top + window.scrollY - topbarHeight - offset;

  window.scrollTo({
    top: targetTop,
    behavior: "smooth"
  });
});
