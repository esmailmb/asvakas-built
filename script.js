const navToggle = document.getElementById("navToggle");
const mainNav = document.getElementById("mainNav");
const siteHeader = document.querySelector(".site-header");
const headerInner = document.querySelector(".header-inner");
const brand = headerInner?.querySelector(".brand");
const headerControls = headerInner?.querySelector(".header-controls, .region-picker");
const motionEnabled = typeof window.matchMedia !== "function" || !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (motionEnabled) {
  document.body.classList.add("motion-enhanced");
}

const motionTargets = Array.from(document.querySelectorAll(".fade-up, .slide-left, .slide-right, .slide-up"));

if (motionTargets.length > 0) {
  if ("IntersectionObserver" in window) {
    const motionObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px"
    });

    motionTargets.forEach((el) => motionObserver.observe(el));
  } else {
    motionTargets.forEach((el) => el.classList.add("in-view"));
  }
}

function setNavOpen(isOpen) {
  const shouldOpen = Boolean(isOpen && mainNav && navToggle);
  mainNav?.classList.toggle("active", shouldOpen);
  document.body.classList.toggle("nav-open", shouldOpen);
  navToggle?.setAttribute("aria-expanded", shouldOpen ? "true" : "false");
}

navToggle?.setAttribute("aria-expanded", "false");

navToggle?.addEventListener("click", (event) => {
  event.stopPropagation();
  setNavOpen(!document.body.classList.contains("nav-open"));
});

function normalizeNavHref(href, isCanadaSection) {
  if (!href) return "";

  let normalized = href.trim();

  if (!normalized) return "";

  normalized = normalized.replace(/^https?:\/\/[^/]+/i, "");

  if (!normalized.startsWith("/")) {
    if (normalized.startsWith("../")) {
      normalized = normalized.replace(/^\.\.\//, isCanadaSection ? "/canada/" : "/");
    } else if (normalized.startsWith("./")) {
      normalized = normalized.replace(/^\.\//, isCanadaSection ? "/canada/" : "/");
    } else {
      normalized = `${isCanadaSection ? "/canada/" : "/"}${normalized}`;
    }
  }

  normalized = normalized
    .replace(/index\.html$/i, "")
    .replace(/\.html$/i, "")
    .replace(/\/+$/, "");

  return normalized || "/";
}

function getHeaderActiveKey(normalizedPath, isCanadaSection) {
  const homePath = isCanadaSection ? "/canada" : "/";
  const aboutPath = isCanadaSection ? "/canada/about" : "/about";
  const servicesPath = isCanadaSection ? "/canada/services" : "/services";
  const engineeringPath = isCanadaSection ? "/canada/engineering-systems" : "/engineering-systems";
  const projectsPath = isCanadaSection ? "/canada/projects" : "/projects";
  const resourcesPath = isCanadaSection ? "/canada/resources" : "/resources";
  const helpPath = isCanadaSection ? "/canada/help" : "/help";
  const faqPath = isCanadaSection ? "/canada/faq" : "/faq";
  const contactPath = isCanadaSection ? "/canada/contact" : "/contact";
  const blogPrefix = isCanadaSection ? "/canada/blog" : "/blog";

  if (document.body.classList.contains("about-page") || normalizedPath === aboutPath) return "about";
  if (document.body.classList.contains("projects-page") || normalizedPath === projectsPath) return "projects";
  if (document.body.classList.contains("contact-page") || normalizedPath === contactPath) return "contact";
  if (document.body.classList.contains("engineering-page") || normalizedPath === engineeringPath) return "engineering";
  if (
    document.body.classList.contains("resources-page") ||
    document.body.classList.contains("blog-hub-page") ||
    document.body.classList.contains("blog-article-page") ||
    document.body.classList.contains("help-center-page") ||
    normalizedPath === resourcesPath ||
    normalizedPath === helpPath ||
    normalizedPath === faqPath ||
    normalizedPath === blogPrefix ||
    normalizedPath.startsWith(`${blogPrefix}/`)
  ) {
    return "resources";
  }
  if (
    document.body.classList.contains("services-page") ||
    document.body.classList.contains("service-detail-page") ||
    normalizedPath === servicesPath
  ) {
    return "services";
  }

  return normalizedPath === homePath ? "home" : "home";
}

function normalizeHeaderNavigation() {
  if (!mainNav) return;

  const rawPath = window.location.pathname.replace(/\\/g, "/");
  const normalizedPath = rawPath
    .replace(/index\.html$/i, "")
    .replace(/\.html$/i, "")
    .replace(/\/+$/, "") || "/";
  const isCanadaSection = normalizedPath === "/canada" || normalizedPath.startsWith("/canada/");
  const navItems = isCanadaSection
    ? [
        { key: "home", label: "Home", href: "/canada/" },
        { key: "about", label: "About", href: "/canada/about" },
        { key: "services", label: "Services", href: "/canada/services" },
        { key: "engineering", label: "Engineering Systems", href: "/canada/engineering-systems" },
        { key: "projects", label: "Projects", href: "/canada/projects" },
        { key: "resources", label: "Resources", href: "/canada/resources" },
        { key: "contact", label: "Contact", href: "/canada/contact" }
      ]
    : [
        { key: "home", label: "Home", href: "/" },
        { key: "about", label: "About", href: "/about" },
        { key: "services", label: "Services", href: "/services" },
        { key: "engineering", label: "Engineering Systems", href: "/engineering-systems" },
        { key: "projects", label: "Projects", href: "/projects" },
        { key: "resources", label: "Resources", href: "/resources" },
        { key: "contact", label: "Contact", href: "/contact" }
      ];

  const currentLinks = Array.from(mainNav.querySelectorAll("a"));
  const needsNormalization =
    currentLinks.length < navItems.length ||
    navItems.some(item => !currentLinks.some(link => normalizeNavHref(link.getAttribute("href"), isCanadaSection) === item.href));

  if (!needsNormalization) return;

  const activeKey = getHeaderActiveKey(normalizedPath, isCanadaSection);
  mainNav.innerHTML = "";

  navItems.forEach(item => {
    const link = document.createElement("a");
    link.href = item.href;
    link.textContent = item.label;
    if (item.key === activeKey) {
      link.classList.add("active");
    }
    mainNav.appendChild(link);
  });
}

normalizeHeaderNavigation();

mainNav?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    setNavOpen(false);
  });
});

document.addEventListener("click", (event) => {
  if (!document.body.classList.contains("nav-open") || !mainNav || !navToggle) return;

  const target = event.target;
  if (!(target instanceof Node)) return;
  if (mainNav.contains(target) || navToggle.contains(target)) return;

  setNavOpen(false);
});

function updateHeaderState() {
  if (!siteHeader) return;
  siteHeader.classList.toggle("scrolled", window.scrollY > 120);
}

function syncHeaderColumns() {
  if (!headerInner || !brand || !headerControls || !mainNav) return;

  headerInner.style.removeProperty("--header-side-width");

  if (window.innerWidth < 1221) return;

  const brandWidth = Math.ceil(brand.getBoundingClientRect().width);
  const controlsWidth = Math.ceil(headerControls.getBoundingClientRect().width);
  const navWidth = Math.ceil(mainNav.getBoundingClientRect().width);
  const headerWidth = Math.ceil(headerInner.getBoundingClientRect().width);
  const sideWidth = Math.max(brandWidth, controlsWidth);

  if ((sideWidth * 2) + navWidth > headerWidth) return;

  headerInner.style.setProperty("--header-side-width", `${sideWidth}px`);
}

function normalizeFooterSocialLinks() {
  const socialLinks = {
    linkedin: "https://www.linkedin.com/company/asvakas",
    instagram: "https://www.instagram.com/",
    facebook: "https://www.facebook.com/",
    twitterx: "https://twitter.com/",
    twitter: "https://twitter.com/",
    x: "https://twitter.com/"
  };

  document.querySelectorAll('.footer .footer-col a[href="#"]').forEach((link) => {
    const label = link.textContent.toLowerCase().replace(/[^a-z]/g, "");
    const href = socialLinks[label];
    if (!href) return;

    link.href = href;
    link.target = "_blank";
    link.rel = "noopener";
  });
}

function normalizeFooterBlogLinks() {
  const pathname = window.location.pathname.replace(/\\/g, "/");
  const isCanadaSection = pathname === "/canada" || pathname.startsWith("/canada/");
  const blogHubHref = isCanadaSection ? "/canada/blog/" : "/blog/";

  document.querySelectorAll(".footer a, .site-footer a").forEach((link) => {
    const label = link.textContent.toLowerCase().replace(/[^a-z]/g, "");
    const href = link.getAttribute("href")?.trim();
    const isBlogLabel = label === "blog" || label === "allarticles";
    const isBlogHref = href === "/blog/" || href === "/blog" || href === "/blog/#top" || href === "/blog/index.html" || href === "/blog/index.html#top" || href === "blog/index.html" || href === "blog/index.html#top" || href === "/canada/blog/" || href === "/canada/blog" || href === "/canada/blog/#top" || href === "/canada/blog/index.html" || href === "/canada/blog/index.html#top" || href === "index.html" || href === "index.html#top";

    if (!isBlogLabel || !isBlogHref) return;

    link.setAttribute("href", blogHubHref);
  });
}

const blogImageLibrary = {
  "anchorage-and-fastening-design-guide": {
    file: "11-anchorage-connection.png",
    alt: "Anchorage and fastening connection detail"
  },
  "anchorage-connections-nyc": {
    file: "11-anchorage-connection.png",
    alt: "Structural anchorage connection detail"
  },
  "anchorage-connections-ontario": {
    file: "11-anchorage-connection.png",
    alt: "Structural anchorage connection detail"
  },
  "anchor-bolt-design-and-anchorage-systems": {
    file: "11-anchorage-connection.png",
    alt: "Anchor bolt and anchorage system detail"
  },
  "bridge-demolition-nyc": {
    file: "9-bridge-demolition-removal.png",
    alt: "Bridge demolition and removal operation"
  },
  "bridge-demolition-ontario": {
    file: "9-bridge-demolition-removal.png",
    alt: "Bridge demolition and removal operation"
  },
  "bridge-structural-engineering-nyc": {
    file: "9-bridge-demolition-removal.png",
    alt: "Bridge structural engineering works"
  },
  "bridge-structural-engineering-ontario": {
    file: "9-bridge-demolition-removal.png",
    alt: "Bridge structural engineering works"
  },
  "building-openings-nyc": {
    file: "19-building-opening.png",
    alt: "Structural opening and lintel framing"
  },
  "building-openings-ontario": {
    file: "19-building-opening.png",
    alt: "Structural opening and lintel framing"
  },
  "cofferdam-nyc": {
    file: "8-cofferdam-diversion.png",
    alt: "Cofferdam and diversion support system"
  },
  "cofferdam-ontario": {
    file: "8-cofferdam-diversion.png",
    alt: "Cofferdam and diversion support system"
  },
  "construction-administration-guide": {
    file: "construction-administration.png",
    alt: "Construction administration site coordination"
  },
  "construction-defect-ontario": {
    file: "structural-failure-analysis.png",
    alt: "Construction defect and failure analysis review"
  },
  "cost-estimation-guide": {
    file: "construction-costestimation.png",
    alt: "Construction cost estimation review"
  },
  "erection-plans-nyc": {
    file: "7-erection-plan.png",
    alt: "Steel erection sequencing plan"
  },
  "erection-plans-ontario": {
    file: "7-erection-plan.png",
    alt: "Steel erection sequencing plan"
  },
  "expert-witness-engineering": {
    file: "expertwitness-engineering.png",
    alt: "Engineering expert witness case review"
  },
  "facade-inspection-guide": {
    file: "4-facade-inspection.png",
    alt: "Facade inspection at an existing building"
  },
  "facade-inspection-ontario": {
    file: "4-facade-inspection.png",
    alt: "Facade inspection at an existing building"
  },
  "facade-renovation-nyc": {
    file: "20-facade-renov-rest.png",
    alt: "Facade renovation and restoration work"
  },
  "facade-renovation-ontario": {
    file: "20-facade-renov-rest.png",
    alt: "Facade renovation and restoration work"
  },
  "failure-analysis-guide": {
    file: "structural-failure-analysis.png",
    alt: "Structural failure analysis investigation"
  },
  "forensic-structural-investigation": {
    file: "forensic-structural-investigation.png",
    alt: "Forensic structural investigation at an existing building"
  },
  "formwork-nyc": {
    file: "12-form-work-design.png",
    alt: "Concrete formwork design system"
  },
  "formwork-ontario": {
    file: "12-form-work-design.png",
    alt: "Concrete formwork design system"
  },
  "heritage-restoration-ontario": {
    file: "inspection-historicbuilding-facade.png",
    alt: "Heritage building facade restoration"
  },
  "historic-restoration-nyc": {
    file: "inspection-historicbuilding-facade.png",
    alt: "Historic building facade restoration"
  },
  "insurance-claim-structural-ontario": {
    file: "forensic-structural-investigation.png",
    alt: "Insurance claim structural investigation"
  },
  "local-law-inspections-guide": {
    file: "inspection-nyclocallaw11.png",
    alt: "NYC local law facade inspection"
  },
  "project-scheduling-guide": {
    file: "construction-project-scheduling.png",
    alt: "Construction project scheduling plan"
  },
  "retrofitting-nyc": {
    file: "21-building-structural-renov.png",
    alt: "Building structural retrofit and renovation"
  },
  "retrofitting-ontario": {
    file: "21-building-structural-renov.png",
    alt: "Building structural retrofit and renovation"
  },
  "roof-renovation-nyc": {
    file: "10-roof-repair.png",
    alt: "Roof renovation and repair work"
  },
  "roof-renovation-ontario": {
    file: "10-roof-repair.png",
    alt: "Roof renovation and repair work"
  },
  "roof-safety-nyc": {
    file: "specialty-structural-roof-anchorage.png",
    alt: "Roof safety anchorage system"
  },
  "roof-safety-ontario": {
    file: "specialty-structural-roof-anchorage.png",
    alt: "Roof safety anchorage system"
  },
  "shoring-systems-guide": {
    file: "temporarywork-shoringsystems.png",
    alt: "Construction shoring support system"
  },
  "sidewalk-repair-ontario": {
    file: "6-sidewalk-slab-renovation.png",
    alt: "Sidewalk slab renovation work"
  },
  "sidewalk-vault-nyc": {
    file: "6-sidewalk-slab-renovation.png",
    alt: "Sidewalk slab renovation and vault engineering"
  },
  "specialty-engineering-guide": {
    file: "specialty-structural-roof-anchorage.png",
    alt: "Specialty structural roof anchorage system"
  },
  "structural-engineering-guide": {
    file: "structural-engineering-property.png",
    alt: "Structural engineering plans and property review"
  },
  "structural-renovation-nyc": {
    file: "1-structural-renovation.png",
    alt: "Structural renovation and alteration works"
  },
  "structural-renovation-ontario": {
    file: "1-structural-renovation.png",
    alt: "Structural renovation and alteration works"
  },
  "temporary-works-engineering": {
    file: "temporarywork-shoring-scaffolding.png",
    alt: "Temporary works shoring and scaffolding system"
  }
};

const blogImageSharedAssets = {
  "structural-design-generic": {
    file: "2-structural-design.png",
    alt: "Structural design plans and engineering review"
  },
  "field-review-generic": {
    file: "3-supervision-consultancy1.png",
    alt: "Engineering field review and site coordination"
  },
  "building-inspection-generic": {
    file: "5-parking-garage-inspection.png",
    alt: "Building inspection and permit review"
  },
  "construction-admin-generic": {
    file: "18-construction-administration.png",
    alt: "Construction administration and project coordination"
  },
  "cost-value-generic": {
    file: "construction-costestimation.png",
    alt: "Construction value engineering and cost review"
  },
  "facade-envelope-generic": {
    file: "inspection-historicbuilding-facade.png",
    alt: "Building envelope and facade condition review"
  },
  "facade-rehab-generic": {
    file: "20-facade-renov-rest.png",
    alt: "Facade rehabilitation and protective systems work"
  },
  "forensic-survey-generic": {
    file: "forensic-structural-investigation.png",
    alt: "Structural investigation and condition survey"
  },
  "below-grade-generic": {
    file: "8-cofferdam-diversion.png",
    alt: "Below-grade support and water control system"
  },
  "wood-retrofit-generic": {
    file: "1-structural-renovation.png",
    alt: "Structural renovation and rehabilitation work"
  }
};

const blogImageAliases = {
  "anchor-bolt-design-basics": "anchor-bolt-design-and-anchorage-systems",
  "building-envelope-consulting-guide": "facade-envelope-generic",
  "certificate-of-occupancy-nyc": "building-inspection-generic",
  "code-compliance-and-engineering-reports-guide": "structural-design-generic",
  "composite-materials-and-retrofit-systems-guide": "retrofitting-nyc",
  "concrete-repair-materials-and-surface-preparation": "facade-rehab-generic",
  "construction-closeout-nyc": "construction-admin-generic",
  "frye-standard-expert-witness-nyc": "expert-witness-engineering",
  "greenhouse-structure-engineering-guide": "structural-design-generic",
  "installation-quality-control-structural-connectors": "anchorage-connections-nyc",
  "insurance-claim-structural-nyc": "forensic-survey-generic",
  "lightweight-steel-and-cold-formed-systems-guide": "structural-design-generic",
  "liquid-applied-waterproofing-and-protective-systems": "facade-rehab-generic",
  "load-path-analysis-structural-systems": "structural-engineering-guide",
  "local-law-152-gas-piping-nyc": "local-law-inspections-guide",
  "local-law-97-carbon-emissions-nyc": "building-inspection-generic",
  "masonry-and-stone-consulting-guide": "facade-envelope-generic",
  "mudsill-anchors-design-installation": "anchorage-connections-nyc",
  "mudsill-anchors-structural-behavior": "anchorage-connections-nyc",
  "nyc-dob-annual-inspections-checklist": "local-law-inspections-guide",
  "nyc-dob-filing-types": "field-review-generic",
  "nyc-dob-violations-guide": "local-law-inspections-guide",
  "nyc-mechanics-lien": "construction-admin-generic",
  "nyc-special-inspections-guide": "local-law-inspections-guide",
  "nyc-zoning-structural-guide": "structural-design-generic",
  "painting-systems-for-construction-and-rehabilitation": "facade-rehab-generic",
  "pre-construction-survey-nyc": "field-review-generic",
  "protective-coatings-for-structural-steel": "facade-rehab-generic",
  "seismic-design-structural-connections": "anchorage-connections-nyc",
  "shear-walls-lateral-load-resistance": "structural-design-generic",
  "structural-connection-failure-mechanisms": "failure-analysis-guide",
  "structural-connectors-in-systems": "anchorage-connections-nyc",
  "structural-fasteners-connection-performance": "anchorage-connections-nyc",
  "structural-glass-and-glazing-systems-guide": "facade-rehab-generic",
  "structural-peer-review-nyc": "field-review-generic",
  "structural-retrofit-rehabilitation": "retrofitting-nyc",
  "timber-and-wood-engineering-guide": "wood-retrofit-generic",
  "underground-waterproofing-and-below-grade-systems-guide": "below-grade-generic",
  "underpinning-methods-nyc": "shoring-systems-guide",
  "underpinning-nyc-guide": "shoring-systems-guide",
  "understanding-structural-connectors": "anchorage-connections-nyc",
  "unsafe-building-nyc": "failure-analysis-guide",
  "value-engineering-nyc": "cost-value-generic",
  "what-is-a-shear-wall": "structural-design-generic",
  "when-need-structural-retrofit": "retrofitting-nyc",
  "building-condition-assessment-ontario": "field-review-generic",
  "construction-closeout-ontario": "construction-admin-generic",
  "csa-standards-ontario-structural": "structural-design-generic",
  "municipal-property-standards-ontario": "field-review-generic",
  "obc-compliance-guide": "building-inspection-generic",
  "obc-permit-types-ontario": "building-inspection-generic",
  "ohsa-construction-safety-ontario": "temporary-works-engineering",
  "ontario-balcony-inspection-oreg-59-20": "facade-inspection-ontario",
  "ontario-building-permit-process": "building-inspection-generic",
  "ontario-construction-act": "construction-admin-generic",
  "peer-review-ontario": "field-review-generic",
  "peo-general-review-ontario": "field-review-generic",
  "tarion-warranty-structural-engineering": "forensic-survey-generic",
  "toronto-eplan-guide": "construction-admin-generic",
  "underpinning-ontario-guide": "shoring-systems-guide",
  "value-engineering-ontario": "cost-value-generic"
};

function getBlogSlugFromPath(path) {
  if (!path) return "";

  const normalizedPath = path
    .trim()
    .replace(/^https?:\/\/[^/]+/i, "")
    .split("#")[0]
    .split("?")[0]
    .replace(/index\.html$/i, "")
    .replace(/\.html$/i, "")
    .replace(/\/+$/, "");

  const segments = normalizedPath.split("/").filter(Boolean);
  const blogIndex = segments.lastIndexOf("blog");

  if (blogIndex !== -1) {
    return segments[blogIndex + 1] || "";
  }

  return segments[segments.length - 1] || "";
}

function getBlogImageBasePath() {
  const pathname = window.location.pathname.replace(/\\/g, "/");
  return pathname.includes("/canada/blog") ? "../../images/" : "../images/";
}

function getBlogImageAsset(slug) {
  const resolvedKey = blogImageAliases[slug] || slug;
  const asset = blogImageLibrary[resolvedKey] || blogImageSharedAssets[resolvedKey];
  if (!asset) return null;

  return {
    ...asset,
    src: `${getBlogImageBasePath()}${asset.file}`
  };
}

function enhanceBlogHubCardImages() {
  if (!document.body.classList.contains("blog-hub-page")) return;

  document.querySelectorAll(".blog-card[href]").forEach((card) => {
    const slug = getBlogSlugFromPath(card.getAttribute("href"));
    const asset = getBlogImageAsset(slug);
    const image = card.querySelector(".blog-card-img img");

    if (!asset || !image) return;

    image.src = asset.src;
    image.alt = asset.alt;
    image.loading = "lazy";
    image.decoding = "async";
  });
}

function enhanceBlogArticleLeadImage() {
  if (!document.body.classList.contains("blog-article-page")) return;

  const slug = getBlogSlugFromPath(window.location.pathname);
  const asset = getBlogImageAsset(slug);
  const articleBody = document.querySelector(".article-layout .article-body");

  if (!asset || !articleBody || articleBody.querySelector(".article-lead-media")) return;

  const figure = document.createElement("figure");
  const image = document.createElement("img");
  const anchor = articleBody.querySelector(".article-meta-row");

  figure.className = "article-lead-media";
  image.src = asset.src;
  image.alt = asset.alt;
  image.loading = "eager";
  image.decoding = "async";
  image.fetchPriority = "high";
  figure.appendChild(image);

  if (anchor) {
    anchor.insertAdjacentElement("afterend", figure);
  } else {
    articleBody.prepend(figure);
  }
}

function normalizeBlogFaqAccordions() {
  if (!document.body.classList.contains("blog-article-page")) return;

  document.querySelectorAll('section#faq').forEach((section) => {
    section.classList.add("faq-section");
  });

  document.querySelectorAll(".faq-list .faq-item").forEach((item) => {
    const existingQuestion = item.querySelector(":scope > .faq-question");
    if (existingQuestion) return;

    const heading = item.querySelector(":scope > h3, :scope > h4, :scope > summary");
    if (!(heading instanceof HTMLElement)) return;

    heading.classList.add("faq-question");

    const answer = document.createElement("div");
    answer.className = "faq-answer";

    Array.from(item.children)
      .filter((child) => child !== heading)
      .forEach((child) => {
        answer.appendChild(child);
      });

    item.appendChild(answer);

    const toggleItem = () => {
      const isOpen = item.classList.toggle("open");
      heading.setAttribute("aria-expanded", isOpen ? "true" : "false");
    };

    heading.setAttribute("role", "button");
    heading.setAttribute("tabindex", "0");
    heading.setAttribute("aria-expanded", "false");
    heading.addEventListener("click", toggleItem);
    heading.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      toggleItem();
    });
  });
}

// ── Scroll Progress Bar ──
const progressBar = document.createElement("div");
progressBar.className = "scroll-progress";
document.body.prepend(progressBar);

// ── Scroll-to-Top Button ──
const scrollTopBtn = document.createElement("button");
scrollTopBtn.className = "scroll-top-btn";
scrollTopBtn.setAttribute("aria-label", "Back to top");
scrollTopBtn.innerHTML = "&#8593;";
document.body.appendChild(scrollTopBtn);
scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

function onScroll() {
  updateHeaderState();

  // Progress bar
  const scrolled = window.scrollY;
  const total = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = total > 0 ? ((scrolled / total) * 100).toFixed(2) + "%" : "0%";

  // Scroll-to-top visibility
  scrollTopBtn.classList.toggle("visible", scrolled > 400);
}

onScroll();
syncHeaderColumns();
normalizeFooterSocialLinks();
normalizeFooterBlogLinks();
enhanceBlogHubCardImages();
enhanceBlogArticleLeadImage();
normalizeBlogFaqAccordions();
window.addEventListener("scroll", onScroll, { passive: true });
window.addEventListener("resize", () => {
  syncHeaderColumns();

  if (window.innerWidth > 1220) {
    setNavOpen(false);
  }
});

const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
  link.addEventListener("click", event => {
    if (link.hash.length > 0) {
      event.preventDefault();
      const target = document.querySelector(link.hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setNavOpen(false);
    }
  });
});

// ── Featured Projects Slider ──
window.projectData = window.projectData || [
  {
    image: "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1400&q=80",
    alt: "The Grand Oak Mansion",
    caption: "A meticulous restoration of a historic mansion, preserving its classic architecture while integrating modern amenities for a luxurious living experience.",
    tag: "Renovation",
    title: "The Grand Oak<br>Mansion",
    year: "2025",
    client: "Miller Estate"
  },
  {
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1400&q=80",
    alt: "Riverside Office Complex",
    caption: "Full structural design and peer review for a six-story mixed-use commercial building with post-tensioned concrete slabs and moment frames.",
    tag: "Structural Design",
    title: "Riverside Office<br>Complex",
    year: "2024",
    client: "Metro Developers LLC"
  },
  {
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    alt: "Brooklyn Shoring System",
    caption: "Custom temporary shoring and underpinning design for a deep-basement excavation adjacent to occupied buildings in a dense urban block.",
    tag: "Temporary Works",
    title: "Brooklyn Shoring<br>System",
    year: "2024",
    client: "Urban Core Construction"
  },
  {
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=80",
    alt: "Hudson Tower Retrofit",
    caption: "Seismic and wind-load retrofit of an occupied high-rise with phased construction planning to keep operations running throughout delivery.",
    tag: "Retrofit",
    title: "Hudson Tower<br>Retrofit",
    year: "2023",
    client: "Hudson Property Group"
  },
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1400&q=80",
    alt: "Queens Community Hub",
    caption: "Ground-up community facility engineered with long-span steel framing, efficient foundations, and streamlined permit coordination.",
    tag: "Ground-Up Build",
    title: "Queens Community<br>Hub",
    year: "2023",
    client: "CityWorks Initiative"
  }
];

window.projectDataDefault = window.projectDataDefault || window.projectData;
const slideImg     = document.querySelector(".slide-img");
const slideCaption = document.querySelector(".slide-caption");
const slideTag     = document.querySelector(".slide-tag");
const slideTitle   = document.querySelector(".slide-title");
const slideYear    = document.querySelector(".slide-year");
const slideClient  = document.querySelector(".slide-client");
const navBtns      = document.querySelectorAll(".slide-nav-btn");

let currentSlide = 0;
let autoPlay;

function goToSlide(index) {
  if (index === currentSlide) return;

  const fadeable = [slideImg, slideCaption, slideTag, slideTitle, slideYear, slideClient];
  fadeable.forEach(el => el?.classList.add("fading"));

  setTimeout(() => {
    const p = window.projectData[index];
    if (slideImg)     { slideImg.src = p.image; slideImg.alt = p.alt; }
    if (slideCaption) slideCaption.textContent = p.caption;
    if (slideTag)     slideTag.textContent = p.tag;
    if (slideTitle)   slideTitle.innerHTML  = p.title;
    if (slideYear)    slideYear.textContent = p.year;
    if (slideClient)  slideClient.textContent = p.client;

    fadeable.forEach(el => el?.classList.remove("fading"));
    navBtns.forEach((btn, i) => btn.classList.toggle("active", i === index));
    currentSlide = index;
  }, 400);
}

navBtns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    clearInterval(autoPlay);
    goToSlide(i);
    startAutoPlay();
  });
});

function startAutoPlay() {
  autoPlay = setInterval(() => {
    goToSlide((currentSlide + 1) % window.projectData.length);
  }, 5000);
}

if (slideImg) startAutoPlay();

// Expose slide control for language switching
window.goToSlideForce = function(idx) {
  if (idx === undefined) idx = currentSlide;
  const p = window.projectData[idx];
  if (!p || !slideImg) return;
  [slideImg, slideCaption, slideTag, slideTitle, slideYear, slideClient]
    .forEach(el => el && el.classList.add('fading'));
  setTimeout(() => {
    if (slideImg)     { slideImg.src = p.image; slideImg.alt = p.alt; }
    if (slideCaption) slideCaption.textContent = p.caption;
    if (slideTag)     slideTag.textContent = p.tag;
    if (slideTitle)   slideTitle.innerHTML = p.title;
    if (slideYear)    slideYear.textContent = p.year;
    if (slideClient)  slideClient.textContent = p.client;
    [slideImg, slideCaption, slideTag, slideTitle, slideYear, slideClient]
      .forEach(el => el && el.classList.remove('fading'));
    navBtns.forEach((btn, i) => btn.classList.toggle('active', i === idx));
    currentSlide = idx;
  }, 400);
};
window.getCurrentSlideIndex = function() { return currentSlide; };

// ── Testimonials Slider ──
const testimonialTrack = document.querySelector(".testimonial-track");
const testimonialCards = Array.from(document.querySelectorAll(".testimonial-card"));
const testimonialPrev = document.querySelector(".testimonial-prev");
const testimonialNext = document.querySelector(".testimonial-next");
const testimonialDots = document.querySelector(".testimonial-dots");

let testimonialIndex = 0;
let testimonialPages = 0;
let testimonialAutoPlay;

function testimonialVisibleCount() {
  return window.matchMedia("(max-width: 1040px)").matches ? 1 : 2;
}

function testimonialMaxIndex() {
  return Math.max(0, testimonialCards.length - testimonialVisibleCount());
}

function buildTestimonialDots() {
  if (!testimonialDots) return;
  testimonialDots.innerHTML = "";
  testimonialPages = testimonialMaxIndex() + 1;

  for (let i = 0; i < testimonialPages; i += 1) {
    const dot = document.createElement("button");
    dot.className = "testimonial-dot";
    dot.type = "button";
    dot.setAttribute("aria-label", `Go to testimonial page ${i + 1}`);
    dot.dataset.index = String(i);
    testimonialDots.appendChild(dot);
  }
}

function updateTestimonialSlider() {
  if (!testimonialTrack || testimonialCards.length === 0) return;

  const firstCard = testimonialCards[0];
  const trackStyles = getComputedStyle(testimonialTrack);
  const gap = parseFloat(trackStyles.columnGap || trackStyles.gap || "0");
  const cardWidth = firstCard.getBoundingClientRect().width;
  const translateX = testimonialIndex * (cardWidth + gap);

  testimonialTrack.style.transform = `translateX(-${translateX}px)`;

  const max = testimonialMaxIndex();
  if (testimonialPrev) testimonialPrev.disabled = testimonialIndex <= 0;
  if (testimonialNext) testimonialNext.disabled = testimonialIndex >= max;

  if (testimonialDots) {
    Array.from(testimonialDots.children).forEach((dot, i) => {
      dot.classList.toggle("active", i === testimonialIndex);
    });
  }
}

function startTestimonialAutoPlay() {
  clearInterval(testimonialAutoPlay);
  testimonialAutoPlay = window.setInterval(() => {
    const max = testimonialMaxIndex();
    testimonialIndex = testimonialIndex >= max ? 0 : testimonialIndex + 1;
    updateTestimonialSlider();
  }, 5200);
}

function stopTestimonialAutoPlay() {
  clearInterval(testimonialAutoPlay);
}

if (testimonialTrack && testimonialCards.length > 0) {
  buildTestimonialDots();
  updateTestimonialSlider();
  startTestimonialAutoPlay();

  testimonialPrev?.addEventListener("click", () => {
    testimonialIndex = Math.max(0, testimonialIndex - 1);
    updateTestimonialSlider();
    startTestimonialAutoPlay();
  });

  testimonialNext?.addEventListener("click", () => {
    testimonialIndex = Math.min(testimonialMaxIndex(), testimonialIndex + 1);
    updateTestimonialSlider();
    startTestimonialAutoPlay();
  });

  testimonialDots?.addEventListener("click", event => {
    const target = event.target;
    if (!(target instanceof HTMLButtonElement)) return;
    const index = Number(target.dataset.index);
    if (Number.isNaN(index)) return;
    testimonialIndex = Math.max(0, Math.min(testimonialMaxIndex(), index));
    updateTestimonialSlider();
    startTestimonialAutoPlay();
  });

  testimonialTrack.addEventListener("mouseenter", stopTestimonialAutoPlay);
  testimonialTrack.addEventListener("mouseleave", startTestimonialAutoPlay);

  window.addEventListener("resize", () => {
    const max = testimonialMaxIndex();
    testimonialIndex = Math.min(testimonialIndex, max);
    buildTestimonialDots();
    updateTestimonialSlider();
    startTestimonialAutoPlay();
  });
}

// Scroll reveal for text content only (headlines stay static)
const revealSelectors = [
  "main > section h1",
  "main > section .section-label-pill",
  ".services-section .section-label-pill",
  ".services-section h2",
  ".services-section h3",
  ".services-section .svc-cat-label",
  ".why-section .section-label-pill",
  ".why-section .why-heading",
  ".why-section h4",
  "main > section h2",
  "main > section h3",
  "main > section h4",
  ".process-section .section-label-pill",
  ".process-section h2",
  ".process-section h3",
  ".process-section .process-step",
  ".process-section .process-intro h2",
  "main > section p",
  "main > section li",
  "main > section img",
  "main > section .btn",
  "main > section .stat-card",
  "main > section .why-icon",
  "main > section .svc-num",
  "main > section .slide-tag",
  "main > section .slide-year",
  "main > section .slide-client",
  "main > section .slide-nav",
  "main > section .process-step-count",
  "main > section .testimonial-card",
  "main > section .testimonial-controls",
  "main > section .testimonial-dots",
  ".blog-meta-row time",
  ".blog-pill",
  ".blog-author"
];

const rawRevealTargets = [...new Set(
  revealSelectors.flatMap(selector => Array.from(document.querySelectorAll(selector)))
)];

// Avoid parent+child double animations that can cause text overlap in sections like Process.
const revealTargets = rawRevealTargets.filter(el => {
  if (el.classList.contains("process-step") || el.closest(".process-step")) {
    return false;
  }

  let parent = el.parentElement;

  while (parent) {
    if (rawRevealTargets.includes(parent)) return false;
    parent = parent.parentElement;
  }

  return true;
});

const sectionRevealCounts = new WeakMap();

revealTargets.forEach(el => {
  el.classList.add("reveal-text");
  const section = el.closest("section") || document.body;
  const count = sectionRevealCounts.get(section) || 0;
  const delay = Math.min(count * 70, 420);
  el.style.setProperty("--reveal-delay", `${delay}ms`);
  sectionRevealCounts.set(section, count + 1);
});

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: "0px 0px -8% 0px"
  });

  revealTargets.forEach(el => revealObserver.observe(el));
} else {
  revealTargets.forEach(el => el.classList.add("is-visible"));
}

// Process section: reveal-on-scroll + viewport-focus dynamics
const processSteps = Array.from(document.querySelectorAll(".process-step"));

if (processSteps.length > 0) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!reduceMotion && "IntersectionObserver" in window) {
    const processStepObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.2,
      rootMargin: "0px 0px -10% 0px"
    });

    processSteps.forEach(step => processStepObserver.observe(step));
  } else {
    processSteps.forEach(step => step.classList.add("is-visible"));
  }

  let processTicking = false;

  const updateProcessStepDynamics = () => {
    const viewportAnchor = window.innerHeight * 0.45;
    const maxDistance = window.innerHeight * 0.68;

    processSteps.forEach(step => {
      const rect = step.getBoundingClientRect();
      const center = rect.top + (rect.height / 2);
      const distance = Math.abs(center - viewportAnchor);
      const focus = Math.max(0, 1 - (distance / maxDistance));
      const floatY = focus * 14;

      step.style.setProperty("--focus", focus.toFixed(3));
      step.style.setProperty("--float-y", `${floatY.toFixed(2)}px`);
      step.classList.toggle("is-active", focus > 0.72);
    });

    processTicking = false;
  };

  const requestProcessUpdate = () => {
    if (processTicking) return;
    processTicking = true;
    window.requestAnimationFrame(updateProcessStepDynamics);
  };

  updateProcessStepDynamics();
  window.addEventListener("scroll", requestProcessUpdate, { passive: true });
  window.addEventListener("resize", requestProcessUpdate);
}

// -- Stat Counter Animation --------------------------------
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  if (isNaN(target)) return;
  const suffix = el.dataset.suffix || '';
  const duration = 1600;
  const start = performance.now();
  el.textContent = '0' + suffix;
  function tick(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.round(eased * target) + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el));

function setupAmbientSections() {
  if (!motionEnabled) return;

  const ambientSections = Array.from(document.querySelectorAll(
    ".hero, .page-hero, .about-hero, .proj-intro, .contact-page .intro, .svc-intro"
  ));

  if (ambientSections.length === 0) return;

  const resetAmbient = (section) => {
    section.style.setProperty("--ambient-frame-x", "0px");
    section.style.setProperty("--ambient-frame-y", "0px");
    section.style.setProperty("--ambient-media-x", "0px");
    section.style.setProperty("--ambient-media-y", "0px");
  };

  ambientSections.forEach(section => {
    section.classList.add("ambient-section");
    resetAmbient(section);

    section.addEventListener("pointermove", event => {
      if (event.pointerType === "touch" || window.innerWidth < 980) return;

      const rect = section.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const x = ((event.clientX - rect.left) / rect.width) - 0.5;
      const y = ((event.clientY - rect.top) / rect.height) - 0.5;
      const shiftX = x * 28;
      const shiftY = y * 18;

      section.style.setProperty("--ambient-frame-x", `${(shiftX * -0.45).toFixed(2)}px`);
      section.style.setProperty("--ambient-frame-y", `${(shiftY * -0.4).toFixed(2)}px`);
      section.style.setProperty("--ambient-media-x", `${(shiftX * 0.6).toFixed(2)}px`);
      section.style.setProperty("--ambient-media-y", `${(shiftY * 0.6).toFixed(2)}px`);
    });

    const resetSection = () => resetAmbient(section);
    section.addEventListener("pointerleave", resetSection);
    section.addEventListener("pointercancel", resetSection);
  });

  let ambientTicking = false;

  const updateAmbientScroll = () => {
    ambientSections.forEach(section => {
      const rect = section.getBoundingClientRect();

      if (rect.bottom < 0 || rect.top > window.innerHeight) return;

      const distance = (window.innerHeight * 0.55) - rect.top;
      const scrollShift = Math.max(-16, Math.min(16, distance * 0.035));
      section.style.setProperty("--ambient-scroll", `${scrollShift.toFixed(2)}px`);
    });

    ambientTicking = false;
  };

  const requestAmbientUpdate = () => {
    if (ambientTicking) return;
    ambientTicking = true;
    window.requestAnimationFrame(updateAmbientScroll);
  };

  updateAmbientScroll();
  window.addEventListener("scroll", requestAmbientUpdate, { passive: true });
  window.addEventListener("resize", requestAmbientUpdate);
}

function setupInteractiveCards() {
  if (!motionEnabled) return;

  const cardSelectors = [
    ".brand-hub-card",
    ".stat-card",
    ".service-card",
    ".why-card",
    ".fp-card",
    ".port-card",
    ".about-team-card",
    ".about-project-card",
    ".metric-card",
    ".link-card",
    ".scope-card",
    ".deliverable-card",
    ".related-card",
    ".resource-card",
    ".category-card",
    ".faq-card",
    ".service-showcase-card",
    ".service-breakdown-card",
    ".svc-detail-card",
    ".svc-why-card",
    ".blog-card",
    ".blog-featured",
    ".blog-item"
  ];

  const cards = [...new Set(
    cardSelectors.flatMap(selector => Array.from(document.querySelectorAll(selector)))
  )];

  if (cards.length === 0) return;

  const resetCardMotion = (card) => {
    card.classList.remove("is-pointer-active");
    card.style.setProperty("--pointer-tilt-x", "0deg");
    card.style.setProperty("--pointer-tilt-y", "0deg");
    card.style.setProperty("--pointer-lift", "0px");
    card.style.setProperty("--pointer-shadow-x", "0px");
    card.style.setProperty("--pointer-shadow-y", "26px");
  };

  cards.forEach(card => {
    card.classList.add("interactive-card");
    resetCardMotion(card);

    let frameId = 0;
    let pointerX = 0;
    let pointerY = 0;

    const applyMotion = () => {
      frameId = 0;

      if (window.innerWidth < 980) {
        resetCardMotion(card);
        return;
      }

      const rect = card.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const relativeX = ((pointerX - rect.left) / rect.width) - 0.5;
      const relativeY = ((pointerY - rect.top) / rect.height) - 0.5;
      const rotateX = relativeY * -10;
      const rotateY = relativeX * 12;
      const shadowX = relativeX * 18;
      const shadowY = 28 + (relativeY * 12);

      card.classList.add("is-pointer-active");
      card.style.setProperty("--pointer-tilt-x", `${rotateX.toFixed(2)}deg`);
      card.style.setProperty("--pointer-tilt-y", `${rotateY.toFixed(2)}deg`);
      card.style.setProperty("--pointer-lift", "-8px");
      card.style.setProperty("--pointer-shadow-x", `${shadowX.toFixed(2)}px`);
      card.style.setProperty("--pointer-shadow-y", `${shadowY.toFixed(2)}px`);
    };

    card.addEventListener("pointermove", event => {
      if (event.pointerType === "touch") return;
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (frameId) return;
      frameId = window.requestAnimationFrame(applyMotion);
    });

    const reset = () => {
      if (frameId) {
        window.cancelAnimationFrame(frameId);
        frameId = 0;
      }
      resetCardMotion(card);
    };

    card.addEventListener("pointerleave", reset);
    card.addEventListener("pointercancel", reset);
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth < 980) {
      cards.forEach(resetCardMotion);
    }
  });
}

setupAmbientSections();
setupInteractiveCards();
