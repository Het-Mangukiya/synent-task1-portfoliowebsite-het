/* ───────────────────────────────────────────────────
   Bio Data — Het Mangukiya Portfolio
   ─────────────────────────────────────────────────── */

const bioData = {
  name: "Het Mangukiya",
  tagline:
    "Computer Engineering student at CHARUSAT, studying at DEPSTAR and building practical projects while improving core computer science fundamentals and DSA skills.",
  avatar: "./profile-photo-web.jpg",
  roles: [
    "Computer Engineering Student",
    "DSA Enthusiast",
    "Problem Solver",
    "Software Developer",
  ],
  stats: [
    { value: "CE", label: "Branch" },
    { value: "DEPSTAR", label: "College" },
    { value: "DSA", label: "Focus" },
    { value: "Builder", label: "Mindset" },
  ],
  highlights: [
    {
      icon: "🎓",
      title: "Education",
      description:
        "Pursuing Computer Engineering at CHARUSAT University — DEPSTAR department.",
    },
    {
      icon: "⚡",
      title: "DSA & Problem Solving",
      description:
        "Actively solving problems on Codeforces and strengthening core data structures and algorithms.",
    },
    {
      icon: "🛠️",
      title: "Projects",
      description:
        "Building practical software projects to bridge the gap between theory and real-world development.",
    },
    {
      icon: "💡",
      title: "Interests",
      description:
        "Software development, system design, competitive programming, and continuous learning.",
    },
  ],
  links: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/het-mangukiya-60b241340/",
      description: "Professional network & updates",
      icon: "data:image/svg+xml,%3Csvg fill='%23ffffff' role='img' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z'/%3E%3C/svg%3E",
      iconBg: "#0A66C2",
    },
    {
      label: "LeetCode",
      url: "https://leetcode.com/u/agnostos0/",
      description: "Problem solving & DSA practice",
      icon: "https://cdn.simpleicons.org/leetcode/ffffff",
      iconBg: "#FFA116",
    },
    {
      label: "GitHub",
      url: "https://github.com/Het-Mangukiya",
      description: "Open source & project repos",
      icon: "https://cdn.simpleicons.org/github/ffffff",
      iconBg: "#24292e",
    },
    {
      label: "Instagram",
      url: "https://www.instagram.com/het._.mangukiya_/",
      description: "Personal moments & stories",
      icon: "https://cdn.simpleicons.org/instagram/ffffff",
      iconBg: "#E4405F",
    },
  ],
};

/* ───────────────────────────────────────────────────
   DOM References
   ─────────────────────────────────────────────────── */

const $ = (id) => document.getElementById(id);

const nameEl = $("name");
const taglineEl = $("tagline");
const avatarEl = $("avatar");
const socialLinksEl = $("socialLinks");
const highlightCardsEl = $("highlightCards");
const statsGridEl = $("statsGrid");
const typedRoleEl = $("typedRole");
const cursorGlowEl = $("cursorGlow");
const signalTitleEl = $("signalTitle");
const signalPillEl = $("signalPill");

const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

/* ───────────────────────────────────────────────────
   Populate Core Content
   ─────────────────────────────────────────────────── */

nameEl.textContent = bioData.name;
taglineEl.textContent = bioData.tagline;
avatarEl.src = bioData.avatar;
avatarEl.alt = `${bioData.name} profile photo`;

/* ───────────────────────────────────────────────────
   Stats Grid
   ─────────────────────────────────────────────────── */

statsGridEl.innerHTML = bioData.stats
  .map(
    (stat) => `
  <div class="stat-card" data-reveal>
    <span class="stat-value">${stat.value}</span>
    <span class="stat-label">${stat.label}</span>
  </div>`
  )
  .join("");

/* ───────────────────────────────────────────────────
   Highlight Cards
   ─────────────────────────────────────────────────── */

highlightCardsEl.innerHTML = bioData.highlights
  .map(
    (h) => `
  <article class="highlight-card magnetic" data-reveal>
    <div>
      <span class="highlight-icon">${h.icon}</span>
      <h3>${h.title}</h3>
      <p>${h.description}</p>
    </div>
  </article>`
  )
  .join("");

/* ───────────────────────────────────────────────────
   Social Link Cards
   ─────────────────────────────────────────────────── */

socialLinksEl.innerHTML = bioData.links
  .map(
    (link) => `
  <a class="link-card magnetic" href="${link.url}" target="_blank" rel="noreferrer noopener" style="--icon-bg: ${link.iconBg}" data-reveal>
    <div class="link-top">
      <span class="link-icon">
        <img src="${link.icon}" alt="" aria-hidden="true" width="24" height="24" />
      </span>
      <span class="link-arrow">↗</span>
    </div>
    <div class="link-copy">
      <strong>${link.label}</strong>
      <p>${link.description}</p>
    </div>
  </a>`
  )
  .join("");

/* ───────────────────────────────────────────────────
   Typed Text Animation
   ─────────────────────────────────────────────────── */

if (typedRoleEl && !reduceMotionQuery.matches) {
  const roles = bioData.roles;
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typingSpeed = 90;

  typedRoleEl.textContent = "";
  typedRoleEl.classList.add("typing-cursor");

  const typeLoop = () => {
    const current = roles[roleIndex];

    if (!isDeleting) {
      typedRoleEl.textContent = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        typingSpeed = 2200; // pause at full text
      } else {
        typingSpeed = 70 + Math.random() * 50;
      }
    } else {
      typedRoleEl.textContent = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typingSpeed = 400; // pause before next word
      } else {
        typingSpeed = 35;
      }
    }

    setTimeout(typeLoop, typingSpeed);
  };

  setTimeout(typeLoop, 800);
}

/* ───────────────────────────────────────────────────
   Scroll Reveal (Intersection Observer)
   ─────────────────────────────────────────────────── */

const revealElements = document.querySelectorAll("[data-reveal]");

if (!reduceMotionQuery.matches && revealElements.length) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  revealElements.forEach((el) => revealObserver.observe(el));
} else {
  // If motion is reduced, just show everything
  revealElements.forEach((el) => el.classList.add("is-visible"));
}

/* ───────────────────────────────────────────────────
   Cursor Glow
   ─────────────────────────────────────────────────── */

if (cursorGlowEl && !reduceMotionQuery.matches) {
  let glowX = 0;
  let glowY = 0;
  let currentGlowX = 0;
  let currentGlowY = 0;
  let glowRaf = null;

  const animateGlow = () => {
    currentGlowX += (glowX - currentGlowX) * 0.12;
    currentGlowY += (glowY - currentGlowY) * 0.12;
    cursorGlowEl.style.transform = `translate(${currentGlowX}px, ${currentGlowY}px) translate(-50%, -50%)`;
    glowRaf = requestAnimationFrame(animateGlow);
  };

  document.addEventListener("mousemove", (e) => {
    glowX = e.clientX;
    glowY = e.clientY;
    cursorGlowEl.style.opacity = "0.22";
    if (!glowRaf) glowRaf = requestAnimationFrame(animateGlow);
  });

  document.addEventListener("mouseleave", () => {
    cursorGlowEl.style.opacity = "0";
  });

  glowRaf = requestAnimationFrame(animateGlow);
}

/* ───────────────────────────────────────────────────
   Magnetic Hover Effect
   ─────────────────────────────────────────────────── */

if (!reduceMotionQuery.matches) {
  document.querySelectorAll(".magnetic").forEach((el) => {
    el.style.position = el.style.position || "relative";

    el.addEventListener("mousemove", (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const strength = 0.15;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    });

    el.addEventListener("mouseleave", () => {
      el.style.transform = "translate(0px, 0px)";
    });
  });
}

/* ───────────────────────────────────────────────────
   Signal Card Interactions
   ─────────────────────────────────────────────────── */

if (signalTitleEl) {
  const messages = [
    "Hover and click for interaction",
    "Welcome to my portfolio",
    "Explore my work below ↓",
    "Built with passion ✨",
  ];
  let msgIndex = 0;

  setInterval(() => {
    msgIndex = (msgIndex + 1) % messages.length;
    signalTitleEl.style.opacity = "0";
    setTimeout(() => {
      signalTitleEl.textContent = messages[msgIndex];
      signalTitleEl.style.opacity = "1";
    }, 300);
  }, 4000);
}

/* ───────────────────────────────────────────────────
   Smooth Active Nav Highlight
   ─────────────────────────────────────────────────── */

const navLinks = document.querySelectorAll(".topnav a");
const sections = document.querySelectorAll("section[id]");

if (sections.length && navLinks.length) {
  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle(
              "nav-active",
              link.getAttribute("href") === `#${entry.target.id}`
            );
          });
        }
      });
    },
    { threshold: 0.3 }
  );

  sections.forEach((section) => sectionObserver.observe(section));
}
