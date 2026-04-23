/* ── Contact form submission ── */
function isPrivatePreviewHost(hostname) {
  return hostname === "localhost"
    || hostname === "127.0.0.1"
    || hostname === "0.0.0.0"
    || hostname === "[::1]"
    || /^10\./.test(hostname)
    || /^192\.168\./.test(hostname)
    || /^172\.(1[6-9]|2\d|3[0-1])\./.test(hostname)
    || hostname.endsWith(".local");
}

const isLocalContactApi = window.location.protocol === "file:" || isPrivatePreviewHost(window.location.hostname);
const contactApiBaseUrl = isLocalContactApi
  ? "http://localhost:3000"
  : "https://asvakas-backend.onrender.com";

const contactForm = document.getElementById("contactForm");
const formSuccess = document.getElementById("formSuccess");
const submitBtn = document.getElementById("submitBtn");
const captchaBlock = document.getElementById("captchaBlock");
const captchaHelp = document.getElementById("captchaHelp");
const captchaImage = document.getElementById("captchaImage");
const imageCaptchaFields = document.getElementById("imageCaptchaFields");
const captchaAnswerInput = document.getElementById("captchaAnswer");
const captchaTokenInput = document.getElementById("captchaToken");
const captchaRefreshBtn = document.getElementById("captchaRefresh");
const recaptchaMount = document.getElementById("recaptchaMount");
const captchaStatus = document.getElementById("captchaStatus");
const submittedAtInput = document.getElementById("submittedAt");
const captchaEnabled = Boolean(
  contactForm
  && captchaBlock
  && captchaHelp
  && imageCaptchaFields
  && captchaImage
  && captchaAnswerInput
  && captchaTokenInput
  && captchaRefreshBtn
  && recaptchaMount
  && captchaStatus
  && submittedAtInput
);
let captchaRequest = null;
let captchaMode = "image";
let recaptchaToken = "";
let recaptchaWidgetId = null;
let recaptchaScriptPromise = null;
const recaptchaOnloadCallbackName = "__asvakasRecaptchaOnload";

function getSubmitLabels(isFrench) {
  return {
    sending: isFrench ? "Envoi…" : "Sending…",
    waking: isFrench ? "Toujours en cours d’envoi…" : "Still sending…",
    idle: isFrench ? "Envoyer le message →" : "Send Message →"
  };
}

function getCaptchaLabels(isFrench) {
  return {
    loading: isFrench ? "Chargement de la vérification de sécurité…" : "Loading security check…",
    loadingSlow: isFrench ? "La vérification prend plus de temps que prévu…" : "Security check is still loading…",
    refreshing: isFrench ? "Actualisation du code de sécurité…" : "Refreshing security code…",
    imageHelp: isFrench ? "Entrez le code affiché ci-dessous pour bloquer les envois automatisés." : "Enter the code shown below so we can block automated spam submissions.",
    imageReady: isFrench ? "Entrez le code affiché pour continuer." : "Enter the code shown to continue.",
    imageUnavailable: isFrench ? "La vérification n’a pas pu être chargée. Réessayez ou écrivez-nous à info@asvakas.com." : "Security check could not load. Refresh it or email us at info@asvakas.com.",
    imageMissing: isFrench ? "Veuillez compléter le code de sécurité avant l’envoi." : "Please complete the security code before sending.",
    recaptchaHelp: isFrench ? "Complétez la vérification Google ci-dessous pour bloquer les envois automatisés." : "Complete the Google security check below so we can block automated spam submissions.",
    recaptchaPrompt: isFrench ? "Complétez la vérification Google pour continuer." : "Complete the Google security check to continue.",
    recaptchaVerified: isFrench ? "Vérification Google effectuée." : "Google security check completed.",
    recaptchaUnavailable: isFrench ? "La vérification Google n’a pas pu être chargée. Réessayez ou écrivez-nous à info@asvakas.com." : "Google security check could not load. Refresh it or email us at info@asvakas.com.",
    recaptchaMissing: isFrench ? "Veuillez compléter la vérification Google avant l’envoi." : "Please complete the Google security check before sending."
  };
}

function setCaptchaStatus(message, state) {
  if (!captchaStatus) return;
  captchaStatus.textContent = message;
  captchaStatus.classList.remove("is-ready", "is-error");
  if (state === "ready") {
    captchaStatus.classList.add("is-ready");
  } else if (state === "error") {
    captchaStatus.classList.add("is-error");
  }
}

function setElementDisplay(element, isVisible, visibleDisplay) {
  if (!element) return;
  element.hidden = !isVisible;
  element.style.display = isVisible ? visibleDisplay : "none";
}

function setCaptchaMode(mode, labels) {
  const useRecaptcha = mode === "recaptcha";

  captchaMode = mode;
  captchaHelp.textContent = useRecaptcha ? labels.recaptchaHelp : labels.imageHelp;
  setElementDisplay(imageCaptchaFields, !useRecaptcha, "grid");
  setElementDisplay(captchaAnswerInput, !useRecaptcha, "block");
  captchaAnswerInput.required = !useRecaptcha;
  captchaAnswerInput.disabled = useRecaptcha;
  setElementDisplay(recaptchaMount, useRecaptcha, "block");
  setElementDisplay(captchaRefreshBtn, !useRecaptcha, "inline-flex");

  if (useRecaptcha) {
    captchaImage.innerHTML = "";
    captchaTokenInput.value = "";
    captchaAnswerInput.value = "";
    captchaRefreshBtn.disabled = true;
  } else {
    recaptchaToken = "";
  }
}

async function loadCaptchaConfig() {
  const res = await fetch(contactApiBaseUrl + "/captcha-config", {
    method: "GET",
    headers: { "Accept": "application/json" }
  });

  if (res.status === 404) {
    return { ok: true, provider: "image" };
  }

  const json = await res.json();
  if (!res.ok || !json.ok || !json.provider) {
    throw new Error(json.error || "Could not load security check configuration.");
  }

  return json;
}

function loadRecaptchaScript() {
  if (window.grecaptcha && typeof window.grecaptcha.render === "function") {
    return Promise.resolve(window.grecaptcha);
  }
  if (recaptchaScriptPromise) {
    return recaptchaScriptPromise;
  }

  recaptchaScriptPromise = new Promise(function (resolve, reject) {
    function cleanup() {
      delete window[recaptchaOnloadCallbackName];
    }

    function handleError() {
      cleanup();
      recaptchaScriptPromise = null;
      reject(new Error("reCAPTCHA unavailable"));
    }

    window[recaptchaOnloadCallbackName] = function () {
      const script = document.querySelector('script[data-recaptcha-script="true"]');
      if (script) {
        script.dataset.loaded = "true";
      }
      cleanup();
      if (window.grecaptcha && typeof window.grecaptcha.render === "function") {
        resolve(window.grecaptcha);
        return;
      }
      recaptchaScriptPromise = null;
      reject(new Error("reCAPTCHA unavailable"));
    };

    const existing = document.querySelector('script[data-recaptcha-script="true"]');
    if (existing) {
      if (existing.dataset.loaded === "true" && window.grecaptcha && typeof window.grecaptcha.render === "function") {
        cleanup();
        resolve(window.grecaptcha);
        return;
      }
      existing.addEventListener("error", handleError, { once: true });
      return;
    }

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js?onload=" + recaptchaOnloadCallbackName + "&render=explicit";
    script.async = true;
    script.defer = true;
    script.dataset.recaptchaScript = "true";
    script.onerror = handleError;
    document.head.appendChild(script);
  });

  return recaptchaScriptPromise;
}

async function loadRecaptchaChallenge(config, submitLabels, captchaLabels) {
  if (!captchaEnabled) {
    return false;
  }

  setCaptchaMode("recaptcha", captchaLabels);
  recaptchaToken = "";
  captchaRefreshBtn.disabled = true;
  submittedAtInput.value = "";
  if (submitBtn) {
    submitBtn.disabled = false;
    submitBtn.textContent = submitLabels.idle;
  }
  setCaptchaStatus(captchaLabels.recaptchaPrompt);

  try {
    const grecaptcha = await loadRecaptchaScript();
    if (recaptchaWidgetId === null) {
      recaptchaMount.innerHTML = "";
      recaptchaWidgetId = grecaptcha.render(recaptchaMount, {
        sitekey: config.siteKey,
        callback: function (token) {
          recaptchaToken = token;
          submittedAtInput.value = String(Date.now());
          setCaptchaStatus(captchaLabels.recaptchaVerified, "ready");
        },
        "expired-callback": function () {
          recaptchaToken = "";
          submittedAtInput.value = "";
          setCaptchaStatus(captchaLabels.recaptchaPrompt);
        },
        "error-callback": function () {
          recaptchaToken = "";
          submittedAtInput.value = "";
          setCaptchaStatus(captchaLabels.recaptchaUnavailable, "error");
        }
      });
    } else {
      grecaptcha.reset(recaptchaWidgetId);
    }
    return true;
  } catch (_error) {
    recaptchaToken = "";
    submittedAtInput.value = "";
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = submitLabels.idle;
    }
    setCaptchaStatus(captchaLabels.recaptchaUnavailable, "error");
    return false;
  }
}

async function loadImageCaptchaChallenge(options, submitLabels, captchaLabels) {
  if (!captchaEnabled) {
    return false;
  }
  if (captchaRequest) {
    return captchaRequest;
  }

  setCaptchaMode("image", captchaLabels);
  recaptchaToken = "";
  if (recaptchaWidgetId !== null && window.grecaptcha && typeof window.grecaptcha.reset === "function") {
    try {
      window.grecaptcha.reset(recaptchaWidgetId);
    } catch (_error) {
      // Ignore widget reset issues and continue with image captcha.
    }
  }

  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = submitLabels.idle;
  }
  captchaRefreshBtn.disabled = true;
  captchaAnswerInput.disabled = true;
  captchaTokenInput.value = "";
  captchaAnswerInput.value = "";
  captchaImage.innerHTML = "";
  setCaptchaStatus(options && options.refresh ? captchaLabels.refreshing : captchaLabels.loading);

  const slowTimer = setTimeout(function () {
    setCaptchaStatus(captchaLabels.loadingSlow);
  }, 8000);

  captchaRequest = fetch(contactApiBaseUrl + "/captcha-challenge", {
    method: "GET",
    headers: { "Accept": "application/json" }
  })
    .then(async function (res) {
      const json = await res.json();
      if (!res.ok || !json.ok || !json.svg || !json.token) {
        throw new Error(json.error || "Could not load security check.");
      }

      captchaImage.innerHTML = json.svg;
      captchaTokenInput.value = json.token;
      submittedAtInput.value = String(Date.now());
      captchaAnswerInput.disabled = false;
      captchaRefreshBtn.disabled = false;
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = submitLabels.idle;
      }
      setCaptchaStatus(captchaLabels.imageReady, "ready");
      return true;
    })
    .catch(function () {
      captchaRefreshBtn.disabled = false;
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.textContent = submitLabels.idle;
      }
      setCaptchaStatus(captchaLabels.imageUnavailable, "error");
      return false;
    })
    .finally(function () {
      clearTimeout(slowTimer);
      captchaRequest = null;
    });

  return captchaRequest;
}

async function initializeCaptcha(options) {
  if (!captchaEnabled) {
    return false;
  }

  const isFrench = document.documentElement.lang === "fr";
  const submitLabels = getSubmitLabels(isFrench);
  const captchaLabels = getCaptchaLabels(isFrench);

  try {
    const config = await loadCaptchaConfig();
    if (config.provider === "recaptcha" && config.siteKey) {
      return loadRecaptchaChallenge(config, submitLabels, captchaLabels);
    }
  } catch (_error) {
    // Fall back to the local image captcha if Google config is unavailable.
  }

  return loadImageCaptchaChallenge(options, submitLabels, captchaLabels);
}

if (captchaEnabled) {
  submittedAtInput.value = String(Date.now());
  captchaRefreshBtn.addEventListener("click", function () {
    initializeCaptcha({ refresh: true });
  });
  initializeCaptcha();
}

if (contactForm) {
  contactForm.addEventListener("submit", async function (e) {
    e.preventDefault();

    const isFrench = document.documentElement.lang === "fr";
    const submitLabels = getSubmitLabels(isFrench);
    const captchaLabels = getCaptchaLabels(isFrench);
    if (captchaEnabled) {
      const hasImageCaptcha = captchaMode === "image";
      const hasRecaptcha = captchaMode === "recaptcha";

      if (hasRecaptcha && !recaptchaToken) {
        alert(captchaLabels.recaptchaMissing);
        return;
      }
      if (hasImageCaptcha && (!captchaTokenInput.value || !captchaAnswerInput.value.trim())) {
        if (!captchaTokenInput.value) {
          initializeCaptcha({ refresh: true });
        }
        alert(captchaLabels.imageMissing);
        return;
      }
    }
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = submitLabels.sending;
    }

    /* Build the data payload */
    const data = {};

    /* (1) Service type — human-readable label */
    const svcSel = document.getElementById("serviceType");
    if (svcSel && svcSel.value) {
      const opt = svcSel.options[svcSel.selectedIndex];
      data["Service Type"] = opt ? opt.text : svcSel.value;
    }

    /* (2) Only the currently-active dyn-group fields */
    const activeGroup = contactForm.querySelector(".dyn-group.dyn-active");
    if (activeGroup) {
      activeGroup.querySelectorAll("input, select, textarea").forEach(function (el) {
        if (!el.name || el.type === "hidden") return;
        const val = (el.value || "").trim();
        if (!val || val === "Select...") return;
        data[el.name.replace(/-/g, " ")] = val;
      });
    }

    /* (3) Always-on contact fields */
    const fullName = document.getElementById("fullName");
    const firstName = document.getElementById("firstName");
    const lastName = document.getElementById("lastName");
    const email = document.getElementById("email");
    const message = document.getElementById("message");

    if (fullName && fullName.value.trim()) {
      data[fullName.name.replace(/-/g, " ")] = fullName.value.trim();
    } else {
      const firstNameValue = firstName && firstName.value.trim();
      const lastNameValue = lastName && lastName.value.trim();
      const combinedName = [firstNameValue, lastNameValue].filter(Boolean).join(" ").trim();

      if (firstNameValue) {
        data[firstName.name.replace(/-/g, " ")] = firstNameValue;
      }
      if (lastNameValue) {
        data[lastName.name.replace(/-/g, " ")] = lastNameValue;
      }
      if (combinedName) {
        data["Full Name"] = combinedName;
      }
    }
    if (email && email.value.trim()) {
      data[email.name.replace(/-/g, " ")] = email.value.trim();
    }
    if (message && message.value.trim()) {
      data[message.name.replace(/-/g, " ")] = message.value.trim();
    }
    if (captchaEnabled) {
      data._formStartedAt = submittedAtInput.value || String(Date.now());
      if (captchaMode === "recaptcha") {
        data._recaptchaToken = recaptchaToken;
      } else {
        data._captchaToken = captchaTokenInput.value.trim();
        data._captchaAnswer = captchaAnswerInput.value.trim();
      }
    }

    try {
      /* Keep the user informed on slower first requests without exposing backend details */
      const wakeTimer = setTimeout(function () {
        if (submitBtn) submitBtn.textContent = submitLabels.waking;
      }, 8000);

      const controller = new AbortController();
      const hardTimeout = setTimeout(function () { controller.abort(); }, 120000);

      const res = await fetch(contactApiBaseUrl + "/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(data),
        signal: controller.signal
      });

      clearTimeout(wakeTimer);
      clearTimeout(hardTimeout);

      const json = await res.json();
      if (res.ok && json.ok) {
        contactForm.style.display = "none";
        if (formSuccess) formSuccess.classList.add("visible");
      } else {
        throw new Error(json.error || "Submission failed");
      }
    } catch (err) {
      if (captchaEnabled) {
        initializeCaptcha({ refresh: true });
      }
      const serverMessage = err && err.message ? err.message : "";
      const msg = err.name === "AbortError"
        ? (isFrench
            ? "La demande a expiré. Veuillez réessayer ou nous écrire directement à info@asvakas.com."
            : "Request timed out. Please try again or email us directly at info@asvakas.com")
        : (serverMessage && /security check|google security|too many requests|invalid email|required/i.test(serverMessage)
            ? serverMessage
            : (isFrench
            ? "Désolé, votre message n’a pas pu être envoyé. Veuillez nous écrire directement à info@asvakas.com."
            : "Sorry, your message could not be sent. Please email us directly at info@asvakas.com"));
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = submitLabels.idle;
      }
      alert(msg);
    }
  });
}

/* ── Custom service dropdown ── */
(function initSvcDropdown() {
  const dropdown    = document.getElementById("svcDropdown");
  if (!dropdown) return;

  const trigger     = dropdown.querySelector(".svc-trigger");
  const triggerText = dropdown.querySelector(".svc-trigger-text");
  const panel       = dropdown.querySelector(".svc-panel");
  const nativeSel   = document.getElementById("serviceType");
  const opts        = Array.from(dropdown.querySelectorAll(".svc-opt"));
  const serviceAliases = {
    "elevator": "elevator-consulting",
    "elevator-consulting": "elevator-consulting",
    "elevator-installation": "elevator-consulting",
    "elevator-modernization": "elevator-consulting",
    "elevator-structural": "elevator-consulting",
    "structural-openings": "structural-openings-in-existing-buildings",
    "opening-alterations": "structural-openings-in-existing-buildings",
    "historic-landmark-openings": "historic-and-landmark-opening-consulting",
    "landmark-openings": "historic-and-landmark-opening-consulting",
    "door-window-modifications": "door-and-window-structural-modifications",
    "storefront-structural": "door-and-window-structural-modifications",
    "support-framing": "support-framing-hangers-and-anchors",
    "hangers-anchors": "support-framing-hangers-and-anchors",
    "support-anchors": "support-framing-hangers-and-anchors"
  };
  let focusedIdx    = -1;

  function openPanel() {
    dropdown.setAttribute("aria-expanded", "true");
    const selIdx = opts.findIndex(o => o.getAttribute("aria-selected") === "true");
    focusedIdx = selIdx >= 0 ? selIdx : 0;
    moveFocus(focusedIdx);
  }

  function closePanel() {
    dropdown.setAttribute("aria-expanded", "false");
    opts.forEach(o => o.classList.remove("svc-focused"));
    trigger.focus();
  }

  function moveFocus(idx) {
    opts.forEach((o, i) => o.classList.toggle("svc-focused", i === idx));
    if (opts[idx]) opts[idx].scrollIntoView({ block: "nearest" });
  }

  function syncSelection(opt) {
    const val = opt.dataset.value;
    triggerText.textContent = opt.textContent.trim();
    triggerText.classList.remove("svc-placeholder");
    opts.forEach(o => o.setAttribute("aria-selected", "false"));
    opt.setAttribute("aria-selected", "true");
    nativeSel.value = val;
  }

  function pickOption(opt) {
    syncSelection(opt);
    nativeSel.dispatchEvent(new Event("change", { bubbles: true }));
    closePanel();
  }

  function resolveServiceValue(rawValue) {
    if (!rawValue) return "";
    const normalized = rawValue.trim().toLowerCase();
    return serviceAliases[normalized] || normalized;
  }

  /* Toggle on trigger click */
  trigger.addEventListener("click", () => {
    dropdown.getAttribute("aria-expanded") === "true" ? closePanel() : openPanel();
  });

  /* Click on option */
  opts.forEach((opt, idx) => {
    opt.addEventListener("click", () => pickOption(opt));
    opt.addEventListener("mouseenter", () => { focusedIdx = idx; moveFocus(idx); });
  });

  /* Keyboard */
  trigger.addEventListener("keydown", e => {
    if (["Enter", " ", "ArrowDown", "ArrowUp"].includes(e.key)) {
      e.preventDefault();
      openPanel();
    }
  });

  dropdown.addEventListener("keydown", e => {
    if (dropdown.getAttribute("aria-expanded") !== "true") return;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      focusedIdx = Math.min(focusedIdx + 1, opts.length - 1);
      moveFocus(focusedIdx);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      focusedIdx = Math.max(focusedIdx - 1, 0);
      moveFocus(focusedIdx);
    } else if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      if (focusedIdx >= 0) pickOption(opts[focusedIdx]);
    } else if (e.key === "Escape" || e.key === "Tab") {
      closePanel();
    }
  });

  /* Close on outside click */
  document.addEventListener("click", e => {
    if (dropdown.getAttribute("aria-expanded") === "true" && !dropdown.contains(e.target)) {
      closePanel();
    }
  });

  const requestedService = resolveServiceValue(new URLSearchParams(window.location.search).get("service"));
  const initialServiceValue = requestedService || nativeSel.value;
  if (initialServiceValue) {
    const presetOpt = opts.find(opt => opt.dataset.value === initialServiceValue);
    if (presetOpt) syncSelection(presetOpt);
  }
})();

/* ── Dynamic service-aware form fields ── */
(function initDynamicForm() {
  const svcSelect = document.getElementById("serviceType");
  if (!svcSelect) return;

  const groups = document.querySelectorAll(".dyn-group");

  /* Save original required state from HTML, then clear them all initially */
  groups.forEach(group => {
    group.querySelectorAll("input, select, textarea").forEach(el => {
      el.dataset.origRequired = el.required ? "1" : "0";
      el.required = false;
    });
  });

  function activateGroup(svcValue) {
    groups.forEach(group => {
      const isMatch = group.dataset.group === svcValue;
      group.classList.toggle("dyn-active", isMatch);

      /* Restore or clear required based on visibility */
      group.querySelectorAll("input, select, textarea").forEach(el => {
        el.required = isMatch && el.dataset.origRequired === "1";

        /* Clear values when group is hidden so stale data isn't sent */
        if (!isMatch && el.type !== "hidden") {
          if (el.tagName === "SELECT") el.selectedIndex = 0;
          else if (el.type !== "submit") el.value = "";
        }
      });
    });
  }

  svcSelect.addEventListener("change", () => activateGroup(svcSelect.value));
  activateGroup(svcSelect.value); /* apply on page load if value pre-selected */
})();

/* ── FAQ accordion ── */
const faqEntries = Array.from(document.querySelectorAll(".faq-entry"));
const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const setEntryState = (entry, isOpen) => {
  const trigger = entry.querySelector(".faq-item");
  const icon = entry.querySelector(".icon");

  entry.classList.toggle("open", isOpen);

  if (trigger) {
    trigger.classList.toggle("open", isOpen);
    trigger.setAttribute("aria-expanded", isOpen ? "true" : "false");
  }

  if (icon) {
    icon.textContent = isOpen ? "⌄" : "⌃";
  }
};

faqEntries.forEach(entry => {
  const trigger = entry.querySelector(".faq-item");
  if (!trigger) return;

  // Respect markup state so items stay closed until clicked.
  setEntryState(entry, entry.classList.contains("open"));

  trigger.addEventListener("click", () => {
    const willOpen = !entry.classList.contains("open");

    faqEntries.forEach(otherEntry => setEntryState(otherEntry, false));
    setEntryState(entry, willOpen);

    if (willOpen) {
      const topOffset = 120;
      const targetY = window.scrollY + trigger.getBoundingClientRect().top - topOffset;

      window.scrollTo({
        top: Math.max(targetY, 0),
        behavior: prefersReducedMotion ? "auto" : "smooth"
      });
    }
  });
});

const faqScrollItems = Array.from(document.querySelectorAll(".faq-item"));

if (faqScrollItems.length > 0) {
  const reduceMotion = prefersReducedMotion;

  if (!reduceMotion && "IntersectionObserver" in window) {
    const faqObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px"
    });

    faqScrollItems.forEach(item => faqObserver.observe(item));
  } else {
    faqScrollItems.forEach(item => item.classList.add("is-visible"));
  }

  let faqTicking = false;

  const updateFaqDynamics = () => {
    const viewportAnchor = window.innerHeight * 0.55;
    const maxDistance = window.innerHeight * 0.7;

    faqScrollItems.forEach(item => {
      const rect = item.getBoundingClientRect();
      const center = rect.top + (rect.height / 2);
      const distance = Math.abs(center - viewportAnchor);
      const focus = Math.max(0, 1 - (distance / maxDistance));
      const floatY = focus * 10;

      item.style.setProperty("--faq-float", `${floatY.toFixed(2)}px`);
      item.classList.toggle("is-active", focus > 0.68);
    });

    faqTicking = false;
  };

  const requestFaqUpdate = () => {
    if (faqTicking) return;
    faqTicking = true;
    window.requestAnimationFrame(updateFaqDynamics);
  };

  updateFaqDynamics();
  window.addEventListener("scroll", requestFaqUpdate, { passive: true });
  window.addEventListener("resize", requestFaqUpdate);
}
