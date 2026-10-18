
/*
 * BRAND HUB — MAIN APPLICATION
 * Dynamic Logo Color Compatibility
 */

document.addEventListener("DOMContentLoaded", () => {

  // ========================================
  // 01 — LOAD CLIENT CONFIGURATION
  // ========================================

  if (typeof BRAND_CONFIG === "undefined") {
    console.error("Brand configuration not found.");
    return;
  }

  const config = BRAND_CONFIG;

  // ========================================
  // 02 — BRAND INFORMATION
  // ========================================

  document.title = `${config.brand.name} — Brand Hub`;

  const brandName = document.getElementById("brand-name");
  const sidebarBrand = document.getElementById("sidebar-brand");
  const brandTagline = document.getElementById("brand-tagline");

  if (brandName) {
    brandName.textContent = config.brand.name;
  }

  if (sidebarBrand) {
    sidebarBrand.textContent = config.brand.name;
  }

  if (brandTagline) {
    brandTagline.textContent = config.brand.tagline;
  }

  // ========================================
  // 03 — APPLY THE SELECTED THEME
  // ========================================

  document.body.dataset.theme = config.theme;

  // ========================================
  // 04 — OPTIONAL BRAND SECTIONS
  // ========================================

  document.querySelectorAll(".nav-link").forEach(link => {

    const sectionId = link.getAttribute("href").replace("#", "");

    if (config.sections[sectionId] === false) {
      link.style.display = "none";

      const section = document.getElementById(sectionId);

      if (section) {
        section.hidden = true;
      }
    }

  });

  // ========================================
  // 05 — PUBLISHING MODE
  // ========================================

  if (config.publishingMode === "showcase") {

    const resourcesLink =
      document.querySelector('a[href="#resources"]');

    const resourcesSection =
      document.getElementById("resources");

    if (resourcesLink) {
      resourcesLink.style.display = "none";
    }

    if (resourcesSection) {
      resourcesSection.hidden = true;
    }

  }

  // ========================================
  // 06 — LOGO COLOR COMPATIBILITY GRID
  // ========================================

  const compatibilityGrid =
    document.getElementById("logo-compatibility-grid");

  if (compatibilityGrid) {

    compatibilityGrid.replaceChildren();

    const combinations = Array.isArray(
      config.logoColorCombinations
    )
      ? config.logoColorCombinations
      : [];

    const isValidColor = value =>
      typeof value === "string" &&
      /^#[0-9a-fA-F]{6}$/.test(value);

    combinations.forEach(combination => {

      if (
        !isValidColor(combination.background) ||
        !isValidColor(combination.logoColor)
      ) {
        console.warn(
          "Skipped invalid logo color combination:",
          combination
        );
        return;
      }

      // Outer compatibility card

      const card = document.createElement("div");
      card.className = "compatibility-card";
      card.style.backgroundColor = combination.background;

      // Inner logo color square

      const square = document.createElement("div");
      square.className = "compatibility-square";
      square.style.backgroundColor = combination.logoColor;

      // Accessible description

      const label = combination.label || "Color combination";

      card.setAttribute(
        "aria-label",
        `${label}: ${combination.logoColor} on ${combination.background}`
      );

      card.appendChild(square);
      compatibilityGrid.appendChild(card);

    });

  }

  // ========================================
  // 07 — ACTIVE SIDEBAR NAVIGATION
  // ========================================

  const navLinks = [
    ...document.querySelectorAll(".nav-link")
  ];

  const visibleSections = navLinks
    .filter(link => link.style.display !== "none")
    .map(link => {

      const id = link.getAttribute("href").slice(1);

      return {
        link,
        section: document.getElementById(id)
      };

    })
    .filter(item =>
      item.section && !item.section.hidden
    );

  function updateActiveSection() {

    let current = visibleSections[0];

    visibleSections.forEach(item => {

      if (item.section.getBoundingClientRect().top <= 180) {
        current = item;
      }

    });

    if (!current) return;

    navLinks.forEach(link => {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    });

    current.link.classList.add("active");
    current.link.setAttribute("aria-current", "location");

  }

  window.addEventListener(
    "scroll",
    updateActiveSection,
    { passive: true }
  );

  window.addEventListener(
    "resize",
    updateActiveSection
  );

  updateActiveSection();

  console.log("Brand Hub loaded:", config.brand.name);

});
