
/*
 * BRAND HUB — MAIN APPLICATION
 *
 * Dynamic Logo Color Compatibility
 * Dynamic Brand Color Palette
 * Interactive Tonal Color Scales
 * Dynamic Editorial Typography System
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

  const brandName =
    document.getElementById("brand-name");

  const sidebarBrand =
    document.getElementById("sidebar-brand");

  const brandTagline =
    document.getElementById("brand-tagline");

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

    const sectionId =
      link.getAttribute("href").replace("#", "");

    if (config.sections[sectionId] === false) {

      link.style.display = "none";

      const section =
        document.getElementById(sectionId);

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
      ? Math.max(
          2,
          Math.min(21, Math.round(Number(steps)))
        )
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

  // ========================================
  // REMOVE SHADES THAT BLEND WITH BACKGROUND
  // ========================================

  /*
   * This only affects automatically generated
   * tonal scales.
   *
   * It removes near-background colors from
   * the light end of the scale.
   *
   * Remaining HEX codes are not changed.
   *
   * A minimum of two shades is preserved.
   */

  function getDisplayedBackgroundColor() {

    const color = getComputedStyle(
      document.body
    ).backgroundColor;

    const channels = color.match(/[\d.]+/g);

    if (!channels || channels.length < 3) {
      return "#FFFFFF";
    }

    return rgbToHex(
      Number(channels[0]),
      Number(channels[1]),
      Number(channels[2])
    );

  }

  function getColorDistance(first, second) {

    const a = hexToRgb(first);
    const b = hexToRgb(second);

    return Math.sqrt(
      Math.pow(a.r - b.r, 2) +
      Math.pow(a.g - b.g, 2) +
      Math.pow(a.b - b.b, 2)
    );

  }

  function removeBlendingShades(shades) {

    const background = getDisplayedBackgroundColor();

    const minimumDistance = 20;

    const result = [...shades];

    while (
      result.length > 2 &&
      getColorDistance(result[0], background) <
        minimumDistance
    ) {

      result.shift();

    }

    return result;

  }

  function getReadableTextColor(hex) {

    const { r, g, b } = hexToRgb(hex);

    const channels = [r, g, b].map(value => {

      const channel = value / 255;

      return channel <= 0.04045
        ? channel / 12.92
        : Math.pow(
            (channel + 0.055) / 1.055,
            2.4
          );

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

        const copied =
          document.execCommand("copy");

        temporaryInput.remove();

        if (!copied) {
          throw new Error("Copy command failed.");
        }

      }

      return true;

    } catch (error) {

      console.warn(
        "Unable to copy HEX code:",
        error
      );

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

      const card = document.createElement("div");

      card.className = "compatibility-card";
      card.style.backgroundColor =
        combination.background;

      const square = document.createElement("div");

      square.className = "compatibility-square";
      square.style.backgroundColor =
        combination.logoColor;

      const label =
        combination.label || "Color combination";

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

    const tonalScales = Array.isArray(
      config.tonalScales
    )
      ? config.tonalScales
      : [];

    tonalScales.forEach(scale => {

      let shades = [];

      if (scale.generate === false) {

        // Manually approved shades stay unchanged.

        shades = Array.isArray(scale.shades)
          ? scale.shades
              .filter(isValidColor)
              .map(hex => hex.toUpperCase())
          : [];

      } else {

        // Generate the complete tonal scale.

        shades = generateTonalScale(
          scale.base,
          scale.steps
        );

        // Remove shades that blend into the
        // website background without changing
        // the remaining shades.

        shades = removeBlendingShades(shades);

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
  // 10 — DYNAMIC TYPOGRAPHY SYSTEM
  // ========================================

  /*
   * Typography is generated from:
   *
   * BRAND_CONFIG.typography
   *
   * The system supports any number of fonts.
   *
   * Each font has its own:
   * - Editorial showcase
   * - Character set
   * - Approved weights and styles
   *
   * The typography context uses the first
   * configured font for the headline and
   * the second (or first) for supporting text.
   */

  const typographyConfig = config.typography || {};

  const typographyFonts = Array.isArray(
    typographyConfig.fonts
  )
    ? typographyConfig.fonts.filter(font =>
        font &&
        typeof font === "object" &&
        typeof font.family === "string" &&
        font.family.trim() !== ""
      )
    : [];

  // ========================================
  // 10.1 — TYPOGRAPHY HELPERS
  // ========================================

  function setElementText(id, value) {

    const element = document.getElementById(id);

    if (
      element &&
      value !== undefined &&
      value !== null
    ) {
      element.textContent = String(value);
    }

  }

  function createTextElement(tag, className, value) {

    const element = document.createElement(tag);

    if (className) {
      element.className = className;
    }

    element.textContent = String(value ?? "");

    return element;

  }

  function formatIndex(number) {
    return String(number).padStart(2, "0");
  }

  function getFontFamily(font) {

    return font && font.family
      ? font.family
      : "Arial, sans-serif";

  }

  function getFontWeight(font) {

    if (
      font &&
      Array.isArray(font.weights) &&
      font.weights.length > 0
    ) {

      const regular = font.weights.find(weight =>
        Number(weight.value) === 400 &&
        weight.style !== "italic"
      );

      if (regular) {
        return 400;
      }

      const firstWeight = font.weights[0];

      if (Number.isFinite(Number(firstWeight.value))) {
        return Number(firstWeight.value);
      }

    }

    return 400;

  }

  // ========================================
  // 10.2 — LOAD CLIENT FONTS
  // ========================================

  /*
   * A font's source can be a CSS stylesheet URL,
   * such as a Google Fonts stylesheet.
   *
   * For self-hosted fonts, load a CSS file
   * containing @font-face declarations.
   *
   * If source is empty, the browser uses the
   * configured font-family and its fallbacks.
   */

  function loadTypographyFonts() {

    const loadedSources = new Set();

    typographyFonts.forEach(font => {

      const source =
        typeof font.source === "string"
          ? font.source.trim()
          : "";

      if (!source || loadedSources.has(source)) {
        return;
      }

      const isAllowedSource =
        source.startsWith("https://") ||
        source.startsWith("./") ||
        source.startsWith("css/") ||
        source.startsWith("assets/");

      if (!isAllowedSource) {

        console.warn(
          "Skipped unsupported typography source:",
          source
        );

        return;

      }

      const link = document.createElement("link");

      link.rel = "stylesheet";
      link.href = source;

      link.addEventListener("error", () => {

        console.warn(
          "Unable to load typography stylesheet:",
          source
        );

      });

      document.head.appendChild(link);

      loadedSources.add(source);

    });

  }

  loadTypographyFonts();

  // ========================================
  // 10.3 — EDITORIAL INTRO
  // ========================================

  const typographyIntro = typographyConfig.intro || {};

  setElementText(
    "typography-intro-eyebrow",
    typographyIntro.eyebrow
  );

  setElementText(
    "typography-intro-headline",
    typographyIntro.headline
  );

  setElementText(
    "typography-intro-description",
    typographyIntro.description
  );

  // ========================================
  // 10.4 — EDITORIAL TYPEFACE GALLERY
  // ========================================

  const typefaceGallery =
    document.getElementById(
      "typography-typeface-gallery"
    );

  if (typefaceGallery) {

    typefaceGallery.replaceChildren();

    typographyFonts.forEach((font, index) => {

      const number = formatIndex(index + 1);
      const total = formatIndex(typographyFonts.length);

      const role = font.role || "Brand";
      const category = font.category || "Typeface";

      const showcase = document.createElement("div");

      showcase.className =
        "typography-typeface-showcase";

      if (index === 0) {

        showcase.classList.add(
          "typography-primary-showcase"
        );

      } else {

        showcase.classList.add(
          "typography-secondary-showcase"
        );

      }

      showcase.style.setProperty(
        "--typeface-family",
        getFontFamily(font)
      );

      const topline = document.createElement("div");

      topline.className =
        "typography-showcase-topline";

      const roleLabel = createTextElement(
        "span",
        "",
        `${role.toUpperCase()} / ${category.toUpperCase()}`
      );

      const categoryLabel = createTextElement(
        "span",
        "",
        category.toUpperCase()
      );

      topline.appendChild(roleLabel);
      topline.appendChild(categoryLabel);

      const specimen = createTextElement(
        "div",
        "typography-hero-specimen",
        font.specimen || "Ag"
      );

      specimen.style.fontFamily =
        getFontFamily(font);

      specimen.style.fontWeight =
        String(getFontWeight(font));

      const bottom = document.createElement("div");

      bottom.className =
        "typography-showcase-bottom";

      const details = document.createElement("div");

      const fontName = createTextElement(
        "h4",
        "",
        font.name || "Unnamed Typeface"
      );

      const description = createTextElement(
        "p",
        "",
        font.description || role
      );

      details.appendChild(fontName);
      details.appendChild(description);

      const counter = createTextElement(
        "span",
        "typography-showcase-index",
        `${number} / ${total}`
      );

      bottom.appendChild(details);
      bottom.appendChild(counter);

      showcase.appendChild(topline);
      showcase.appendChild(specimen);
      showcase.appendChild(bottom);

      typefaceGallery.appendChild(showcase);

    });

  }

  // ========================================
  // 10.5 — CHARACTER SET GALLERY
  // ========================================

  const characterGallery =
    document.getElementById(
      "typography-character-gallery"
    );

  const characterSet =
    typographyConfig.characterSet || {};

  const uppercase =
    characterSet.uppercase ||
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const lowercase =
    characterSet.lowercase ||
    "abcdefghijklmnopqrstuvwxyz";

  const numbers =
    characterSet.numbers ||
    "0123456789";

  const punctuation =
    characterSet.punctuation ||
    "&@!?%*";

  if (characterGallery) {

    characterGallery.replaceChildren();

    typographyFonts.forEach((font, index) => {

      const block = document.createElement("div");

      block.className =
        "typography-character-block";

      if (index > 0) {
        block.classList.add(
          "typography-character-secondary"
        );
      }

      const header = document.createElement("div");

      header.className =
        "typography-character-header";

      const label = createTextElement(
        "span",
        "",
        `${(font.role || "Brand").toUpperCase()} TYPEFACE — ${font.name || "Unnamed"}`
      );

      const number = createTextElement(
        "span",
        "",
        formatIndex(index + 1)
      );

      header.appendChild(label);
      header.appendChild(number);

      const content = document.createElement("div");

      content.className =
        "typography-character-content";

      content.style.fontFamily =
        getFontFamily(font);

      content.style.fontWeight =
        String(getFontWeight(font));

      const uppercaseMidpoint =
        Math.ceil(uppercase.length / 2);

      const firstUppercase = uppercase.slice(
        0,
        uppercaseMidpoint
      );

      const secondUppercase = uppercase.slice(
        uppercaseMidpoint
      );

      [
        firstUppercase,
        secondUppercase,
        lowercase,
        `${numbers} ${punctuation}`
      ].forEach(characters => {

        const row = createTextElement(
          "p",
          "",
          characters
        );

        content.appendChild(row);

      });

      block.appendChild(header);
      block.appendChild(content);

      characterGallery.appendChild(block);

    });

  }

  // ========================================
  // 10.6 — APPROVED FONT WEIGHTS
  // ========================================

  const weightsGallery =
    document.getElementById(
      "typography-weights-gallery"
    );

  if (weightsGallery) {

    weightsGallery.replaceChildren();

    typographyFonts.forEach((font, fontIndex) => {

      const group = document.createElement("div");

      group.className =
        "typography-weight-group";

      const groupHeader = document.createElement("div");

      groupHeader.className =
        "typography-weight-header";

      const groupName = createTextElement(
        "h4",
        "",
        font.name || "Unnamed Typeface"
      );

      const groupRole = createTextElement(
        "span",
        "",
        `${formatIndex(fontIndex + 1)} / ${(font.role || "Brand").toUpperCase()}`
      );

      groupHeader.appendChild(groupName);
      groupHeader.appendChild(groupRole);

      group.appendChild(groupHeader);

      const approvedWeights = Array.isArray(
        font.weights
      )
        ? font.weights
        : [];

      approvedWeights.forEach(weight => {

        if (!weight || typeof weight !== "object") {
          return;
        }

        const row = document.createElement("div");

        row.className =
          "typography-weight-row";

        const sample = createTextElement(
          "span",
          "typography-weight-sample",
          "The quick brown fox"
        );

        sample.style.fontFamily =
          getFontFamily(font);

        sample.style.fontWeight =
          String(weight.value ?? 400);

        sample.style.fontStyle =
          weight.style === "italic"
            ? "italic"
            : "normal";

        const information =
          document.createElement("div");

        information.className =
          "typography-weight-info";

        const weightName = createTextElement(
          "span",
          "typography-weight-name",
          weight.name || "Regular"
        );

        const weightValue = createTextElement(
          "span",
          "typography-weight-value",
          `${weight.value ?? 400} / ${weight.style || "normal"}`
        );

        information.appendChild(weightName);
        information.appendChild(weightValue);

        row.appendChild(sample);
        row.appendChild(information);

        group.appendChild(row);

      });

      weightsGallery.appendChild(group);

    });

  }

  // ========================================
  // 10.7 — TYPOGRAPHY IN CONTEXT
  // ========================================

  const contextConfig =
    typographyConfig.context || {};

  const contextShowcase =
    document.getElementById(
      "typography-context-showcase"
    );

  if (contextShowcase) {

    const primaryFont = typographyFonts[0];

    const supportingFont =
      typographyFonts[1] || primaryFont;

    if (primaryFont) {

      contextShowcase.style.setProperty(
        "--context-display-font",
        getFontFamily(primaryFont)
      );

    }

    if (supportingFont) {

      contextShowcase.style.setProperty(
        "--context-body-font",
        getFontFamily(supportingFont)
      );

    }

    const brandColors = config.colors || {};

    const contextBackground =
      isValidColor(brandColors.primary)
        ? brandColors.primary
        : "#202020";

    const contextText =
      getReadableTextColor(contextBackground);

    const contextAccent =
      isValidColor(brandColors.accent)
        ? brandColors.accent
        : contextText;

    contextShowcase.style.backgroundColor =
      contextBackground;

    contextShowcase.style.color =
      contextText;

    contextShowcase.style.setProperty(
      "--context-text-color",
      contextText
    );

    contextShowcase.style.setProperty(
      "--context-accent-color",
      contextAccent
    );

    setElementText(
      "typography-context-eyebrow",
      contextConfig.eyebrow
    );

    setElementText(
      "typography-context-description",
      contextConfig.description
    );

    setElementText(
      "typography-context-brand",
      config.brand.name.toUpperCase()
    );

    const headline =
      document.getElementById(
        "typography-context-headline"
      );

    if (headline) {

      const lines = String(
        contextConfig.headline ||
        "Made to\nbe remembered."
      ).split("\n");

      const italicLine = Number(
        contextConfig.italicLine
      );

      headline.replaceChildren();

      headline.style.fontFamily =
        primaryFont
          ? getFontFamily(primaryFont)
          : "Georgia, serif";

      lines.forEach((line, index) => {

        const isItalic =
          italicLine === index + 1;

        const lineElement =
          document.createElement(
            isItalic ? "em" : "span"
          );

        lineElement.textContent = line;

        if (isItalic) {
          lineElement.style.fontStyle = "italic";
        }

        headline.appendChild(lineElement);

        if (index < lines.length - 1) {

          headline.appendChild(
            document.createElement("br")
          );

        }

      });

    }

    const description =
      document.getElementById(
        "typography-context-description"
      );

    if (description && supportingFont) {

      description.style.fontFamily =
        getFontFamily(supportingFont);

    }

    const eyebrow =
      document.getElementById(
        "typography-context-eyebrow"
      );

    if (eyebrow && supportingFont) {

      eyebrow.style.fontFamily =
        getFontFamily(supportingFont);

    }

    const contextBrand =
      document.getElementById(
        "typography-context-brand"
      );

    if (contextBrand && supportingFont) {

      contextBrand.style.fontFamily =
        getFontFamily(supportingFont);

    }

  }

  // ========================================
  // 11 — ACTIVE SIDEBAR NAVIGATION
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

      if (
        item.section.getBoundingClientRect().top <= 180
      ) {
        current = item;
      }

    });

    if (!current) return;

    navLinks.forEach(link => {

      link.classList.remove("active");
      link.removeAttribute("aria-current");

    });

    current.link.classList.add("active");

    current.link.setAttribute(
      "aria-current",
      "location"
    );

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

  console.log(
    "Brand Hub loaded:",
    config.brand.name
  );

});
