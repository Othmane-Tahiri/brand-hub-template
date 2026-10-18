
/*
 * BRAND HUB — MAIN APPLICATION
 * Dynamic Logo Color Compatibility
 * Dynamic Brand Color Palette
 * Interactive Tonal Color Scales
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
  // 06 — SHARED COLOR UTILITIES
  // ========================================

  const isValidColor = value =>
    typeof value === "string" &&
    /^#[0-9a-fA-F]{6}$/.test(value);

  function hexToRgb(hex) {

    return {
      r: parseInt(hex.slice(1, 3), 16),
      g: parseInt(hex.slice(3, 5), 16),
      b: parseInt(hex.slice(5, 7), 16)
    };

  }

  function rgbToHex(r, g, b) {

    const toHex = value =>
      Math.max(0, Math.min(255, Math.round(value)))
        .toString(16)
        .padStart(2, "0");

    return `#${toHex(r)}${toHex(g)}${toHex(b)}`.toUpperCase();

  }

  function mixColors(first, second, amount) {

    const a = hexToRgb(first);
    const b = hexToRgb(second);

    return rgbToHex(
      a.r + (b.r - a.r) * amount,
      a.g + (b.g - a.g) * amount,
      a.b + (b.b - a.b) * amount
    );

  }

  function generateTonalScale(base, steps = 11) {

    if (!isValidColor(base)) {
      return [];
    }

    const count = Number.isFinite(Number(steps))
      ? Math.max(2, Math.min(21, Math.round(Number(steps))))
      : 11;

    const shades = [];

    for (let index = 0; index < count; index++) {

      const position = index / (count - 1);

      let shade;

      if (position < 0.5) {

        const strength = position / 0.5;

        shade = mixColors(
          "#FFFFFF",
          base,
          strength
        );

      } else {

        const strength = (position - 0.5) / 0.5;

        shade = mixColors(
          base,
          "#000000",
          strength * 0.82
        );

      }

      shades.push(shade);

    }

    return shades;

  }

  function getReadableTextColor(hex) {

    const { r, g, b } = hexToRgb(hex);

    const channels = [r, g, b].map(value => {

      const channel = value / 255;

      return channel <= 0.04045
        ? channel / 12.92
        : Math.pow((channel + 0.055) / 1.055, 2.4);

    });

    const luminance =
      channels[0] * 0.2126 +
      channels[1] * 0.7152 +
      channels[2] * 0.0722;

    return luminance > 0.179
      ? "#202020"
      : "#FFFFFF";

  }

  async function copyHexCode(hex) {

    try {

      if (
        navigator.clipboard &&
        window.isSecureContext
      ) {

        await navigator.clipboard.writeText(hex);

      } else {

        const temporaryInput =
          document.createElement("textarea");

        temporaryInput.value = hex;
        temporaryInput.style.position = "fixed";
        temporaryInput.style.opacity = "0";

        document.body.appendChild(temporaryInput);

        temporaryInput.focus();
        temporaryInput.select();

        const copied = document.execCommand("copy");

        temporaryInput.remove();

        if (!copied) {
          throw new Error("Copy command failed.");
        }

      }

      return true;

    } catch (error) {

      console.warn("Unable to copy HEX code:", error);
      return false;

    }

  }

  function createColorButton(hex, className, label) {

    const button = document.createElement("button");

    button.type = "button";
    button.className = className;
    button.style.backgroundColor = hex;

    button.setAttribute(
      "aria-label",
      `${label}: ${hex}. Click to copy.`
    );

    button.title = `Copy ${hex}`;

    const code = document.createElement("span");

    code.className = "color-swatch-hex";
    code.textContent = hex;
    code.style.color = getReadableTextColor(hex);

    button.appendChild(code);

    button.addEventListener("click", async () => {

      const copied = await copyHexCode(hex);

      code.textContent = copied
        ? "Copied!"
        : "Copy failed";

      button.classList.add("is-copied");

      window.setTimeout(() => {

        code.textContent = hex;
        button.classList.remove("is-copied");

      }, 1400);

    });

    return button;

  }

  // ========================================
  // 07 — LOGO COLOR COMPATIBILITY GRID
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
  // 08 — MAIN BRAND COLOR PALETTE
  // ========================================

  const brandPaletteContainer =
    document.getElementById("brand-color-palette");

  if (brandPaletteContainer) {

    brandPaletteContainer.replaceChildren();

    const palette = Array.isArray(config.brandPalette)
      ? config.brandPalette
      : [];

    palette.forEach(color => {

      if (!isValidColor(color.hex)) {

        console.warn(
          "Skipped invalid brand palette color:",
          color
        );

        return;

      }

      const hex = color.hex.toUpperCase();

      const card = document.createElement("div");
      card.className = "brand-color-card";

      const swatch = createColorButton(
        hex,
        "brand-color-swatch",
        color.name || "Brand color"
      );

      const details = document.createElement("div");
      details.className = "brand-color-details";

      const role = document.createElement("span");
      role.className = "brand-color-role";
      role.textContent = color.role || "Brand color";

      const name = document.createElement("h4");
      name.className = "brand-color-name";
      name.textContent = color.name || "Unnamed Color";

      const hexLabel = document.createElement("span");
      hexLabel.className = "brand-color-code";
      hexLabel.textContent = hex;

      details.appendChild(role);
      details.appendChild(name);
      details.appendChild(hexLabel);

      card.appendChild(swatch);
      card.appendChild(details);

      brandPaletteContainer.appendChild(card);

    });

  }

  // ========================================
  // 09 — TONAL COLOR SCALES
  // ========================================

  const tonalScalesContainer =
    document.getElementById("brand-tonal-scales");

  if (tonalScalesContainer) {

    tonalScalesContainer.replaceChildren();

    const tonalScales = Array.isArray(config.tonalScales)
      ? config.tonalScales
      : [];

    tonalScales.forEach(scale => {

      let shades = [];

      if (scale.generate === false) {

        shades = Array.isArray(scale.shades)
          ? scale.shades
              .filter(isValidColor)
              .map(hex => hex.toUpperCase())
          : [];

      } else {

        shades = generateTonalScale(
          scale.base,
          scale.steps
        );

      }

      if (shades.length === 0) {

        console.warn(
          "Skipped tonal scale without valid shades:",
          scale
        );

        return;

      }

      const group = document.createElement("div");
      group.className = "tonal-scale-group";

      const heading = document.createElement("div");
      heading.className = "tonal-scale-heading";

      const name = document.createElement("h4");
      name.className = "tonal-scale-name";
      name.textContent = scale.name || "Color Scale";

      const count = document.createElement("span");
      count.className = "tonal-scale-count";
      count.textContent = `${shades.length} shades`;

      heading.appendChild(name);
      heading.appendChild(count);

      const row = document.createElement("div");
      row.className = "tonal-scale-row";

      row.style.setProperty(
        "--shade-count",
        String(shades.length)
      );

      shades.forEach((hex, index) => {

        const swatch = createColorButton(
          hex,
          "tonal-scale-swatch",
          `${scale.name || "Color"} shade ${index + 1}`
        );

        row.appendChild(swatch);

      });

      group.appendChild(heading);
      group.appendChild(row);

      tonalScalesContainer.appendChild(group);

    });

  }

  // ========================================
  // 10 — ACTIVE SIDEBAR NAVIGATION
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
