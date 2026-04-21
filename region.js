/* ── Region Picker ── */
(function () {
  const STORAGE_KEY = "asvakas_region";
  const LANG_KEY    = "asvakas_lang";
  const SHARED_BLOG_FILES = new Set([
    "index.html",
    "temporary-works-engineering.html",
    "cost-estimation-guide.html",
    "project-scheduling-guide.html",
    "construction-administration-guide.html",
    "forensic-structural-investigation.html",
    "failure-analysis-guide.html",
    "expert-witness-engineering.html",
    "specialty-engineering-guide.html",
    "structural-engineering-guide.html",
    "shoring-systems-guide.html"
  ]);

  const USA_TO_CANADA = {
    "index.html": "canada/index.html",
    "about.html": "canada/about.html",
    "services.html": "canada/services.html",
    "projects.html": "canada/projects.html",
    "contact.html": "canada/contact.html",
    "faq.html": "canada/faq.html",
    "help.html": "canada/help.html",
    "privacy-policy.html": "canada/privacy-policy.html",
    "engineering-systems.html": "canada/services.html",
    "resources.html": "canada/help.html",
    "blog/index.html": "canada/blog/index.html",
    "blog/temporary-works-engineering.html": "canada/blog/temporary-works-engineering.html",
    "blog/cost-estimation-guide.html": "canada/blog/cost-estimation-guide.html",
    "blog/project-scheduling-guide.html": "canada/blog/project-scheduling-guide.html",
    "blog/construction-administration-guide.html": "canada/blog/construction-administration-guide.html",
    "blog/forensic-structural-investigation.html": "canada/blog/forensic-structural-investigation.html",
    "blog/failure-analysis-guide.html": "canada/blog/failure-analysis-guide.html",
    "blog/expert-witness-engineering.html": "canada/blog/expert-witness-engineering.html",
    "blog/specialty-engineering-guide.html": "canada/blog/specialty-engineering-guide.html",
    "blog/structural-engineering-guide.html": "canada/blog/structural-engineering-guide.html",
    "blog/shoring-systems-guide.html": "canada/blog/shoring-systems-guide.html"
  };

  const CANADA_TO_USA = {
    "index.html": "index.html",
    "about.html": "about.html",
    "services.html": "services.html",
    "projects.html": "projects.html",
    "contact.html": "contact.html",
    "faq.html": "faq.html",
    "help.html": "help.html",
    "privacy-policy.html": "privacy-policy.html",
    "blog/index.html": "blog/index.html",
    "blog/temporary-works-engineering.html": "blog/temporary-works-engineering.html",
    "blog/cost-estimation-guide.html": "blog/cost-estimation-guide.html",
    "blog/project-scheduling-guide.html": "blog/project-scheduling-guide.html",
    "blog/construction-administration-guide.html": "blog/construction-administration-guide.html",
    "blog/forensic-structural-investigation.html": "blog/forensic-structural-investigation.html",
    "blog/failure-analysis-guide.html": "blog/failure-analysis-guide.html",
    "blog/expert-witness-engineering.html": "blog/expert-witness-engineering.html",
    "blog/specialty-engineering-guide.html": "blog/specialty-engineering-guide.html",
    "blog/structural-engineering-guide.html": "blog/structural-engineering-guide.html",
    "blog/shoring-systems-guide.html": "blog/shoring-systems-guide.html"
  };

  const REGIONS = {
    usa:    { flag: "🇺🇸", label: "USA",    heroTag: "NYC Structural Engineering",       heroSub: "Asvakas Engineering helps owners and developers deliver safer, smarter projects across New York City." },
    canada: { flag: "🇨🇦", label: "Canada", heroTag: "Canadian Structural Engineering", heroSub: "Asvakas Engineering helps owners and developers deliver safer, smarter projects across Canada." },
  };

  function normalizePath(pathname) {
    let path = (pathname || window.location.pathname || "").replace(/^\/+/, "");
    if (!path) return "index.html";
    if (path.endsWith("/")) return path + "index.html";
    return path;
  }

  function toAbsolutePath(path) {
    const normalized = path.replace(/^\/+/, "");
    if (normalized === "index.html") return "/";
    if (normalized === "blog/index.html") return "/blog/";
    if (normalized === "canada/index.html") return "/canada/";
    if (normalized === "canada/blog/index.html") return "/canada/blog/";
    return "/" + normalized.replace(/\.html$/, "");
  }

  function mapPathToRegion(currentPath, region) {
    const normalized = normalizePath(currentPath);

    if (region === "canada") {
      if (normalized.startsWith("canada/")) return normalized;
      if (USA_TO_CANADA[normalized]) return USA_TO_CANADA[normalized];
      if (normalized.startsWith("blog/")) {
        const blogFile = normalized.slice(5);
        return SHARED_BLOG_FILES.has(blogFile) ? `canada/${normalized}` : "canada/blog/index.html";
      }
      return `canada/${normalized}`;
    }

    const localPath = normalized.startsWith("canada/") ? normalized.slice(7) : normalized;
    if (CANADA_TO_USA[localPath]) return CANADA_TO_USA[localPath];
    if (localPath.startsWith("blog/")) {
      const blogFile = localPath.slice(5);
      return SHARED_BLOG_FILES.has(blogFile) ? localPath : "blog/index.html";
    }
    return localPath;
  }

  /* ── Auto-detect region + language on very first visit ── */
  function autoDetect() {
    if (localStorage.getItem(STORAGE_KEY)) return; // user already chose, respect it

    const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
    const isFrench    = browserLang.startsWith('fr');
    const isCanadaLang = isFrench || browserLang.includes('-ca');

    let timezone = '';
    try { timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || ''; } catch (e) {}

    const canadaTZPrefixes = [
      'America/Toronto','America/Vancouver','America/Edmonton','America/Winnipeg',
      'America/Halifax','America/St_Johns','America/Moncton','America/Glace_Bay',
      'America/Goose_Bay','America/Thunder_Bay','America/Nipigon','America/Rainy_River',
      'America/Resolute','America/Rankin_Inlet','America/Regina','America/Swift_Current',
      'America/Yellowknife','America/Inuvik','America/Creston','America/Dawson_Creek',
      'America/Fort_Nelson','America/Whitehorse','America/Dawson','America/Cambridge_Bay',
      'America/Atikokan','America/Blanc-Sablon','America/Iqaluit','America/Pangnirtung'
    ];
    const isCanadaTZ = canadaTZPrefixes.some(tz => timezone === tz || timezone.startsWith(tz + '/'));

    const isCanada = isCanadaTZ || isCanadaLang;

    if (isCanada) {
      localStorage.setItem(STORAGE_KEY, 'canada');
      if (isFrench) localStorage.setItem(LANG_KEY, 'fr');
    } else {
      localStorage.setItem(STORAGE_KEY, 'usa');
    }
  }

  autoDetect();

  function applyRegion(region, fromUserClick) {
    const currentPath = normalizePath(window.location.pathname);
    const isCanada = currentPath.startsWith("canada/");

    // Redirect when user actively picks a different region
    if (fromUserClick) {
      if (region === 'canada' && !isCanada) {
        localStorage.setItem(STORAGE_KEY, region);
        window.location.href = toAbsolutePath(mapPathToRegion(currentPath, "canada"));
        return;
      }
      if (region === 'usa' && isCanada) {
        localStorage.setItem(STORAGE_KEY, region);
        window.location.href = toAbsolutePath(mapPathToRegion(currentPath, "usa"));
        return;
      }
    }

    localStorage.setItem(STORAGE_KEY, region);
    const data = REGIONS[region];

    // Update button display
    document.querySelectorAll(".rp-flag").forEach(el => el.textContent = data.flag);
    document.querySelectorAll(".rp-label").forEach(el => el.textContent = data.label);

    // Mark active option
    document.querySelectorAll(".rp-option").forEach(el => {
      el.classList.toggle("active", el.dataset.region === region);
    });

      // Removed lang-toggle logic; no language toggle present anymore.

    // Update hero text (index.html only)
    const heroTag = document.querySelector("[data-region-tag]");
    const heroSub = document.querySelector("[data-region-sub]");
    if (heroTag) heroTag.textContent = data.heroTag;
    if (heroSub) heroSub.textContent = data.heroSub;
  }

  function closeAll() {
    document.querySelectorAll(".rp-dropdown.open").forEach(d => d.classList.remove("open"));
    document.querySelectorAll(".rp-btn").forEach(b => b.setAttribute("aria-expanded", "false"));
  }

  // Toggle dropdown on button click
  document.querySelectorAll(".rp-btn").forEach(btn => {
    btn.addEventListener("click", e => {
      e.stopPropagation();
      const dropdown = btn.nextElementSibling;
      const isOpen = dropdown.classList.contains("open");
      closeAll();
      if (!isOpen) {
        dropdown.classList.add("open");
        btn.setAttribute("aria-expanded", "true");
      }
    });
  });

  // Select option
  document.querySelectorAll(".rp-option").forEach(opt => {
    opt.addEventListener("click", () => {
      applyRegion(opt.dataset.region, true);
      closeAll();
    });
  });

  // Close on outside click
  document.addEventListener("click", closeAll);

  // On load — default to Canada when on /canada/ path, otherwise USA
  const isCanadaPath = window.location.pathname.includes('/canada/');
  applyRegion(isCanadaPath ? "canada" : "usa");
})();
