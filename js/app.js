
/*
 * BRAND HUB — MAIN APPLICATION
 * Logo, Colors, Typography, Graphic Elements,
 * Photography, Layout & Composition, and Navigation
 */

document.addEventListener("DOMContentLoaded", () => {

  // ========================================
  // 01 — CLIENT CONFIGURATION
  // ========================================

  if (typeof BRAND_CONFIG === "undefined") {
    console.error("Brand configuration not found.");
    return;
  }

  const config = BRAND_CONFIG;
  const brand = config.brand || {};
  const sections = config.sections || {};

  // ========================================
  // 02 — BRAND INFORMATION
  // ========================================

  document.title = `${brand.name || "Brand"} — Brand Hub`;

  const brandName = document.getElementById("brand-name");
  const sidebarBrand = document.getElementById("sidebar-brand");
  const brandTagline = document.getElementById("brand-tagline");

  if (brandName) brandName.textContent = brand.name || "";
  if (sidebarBrand) sidebarBrand.textContent = brand.name || "";
  if (brandTagline) brandTagline.textContent = brand.tagline || "";

  // ========================================
  // 03 — WEBSITE THEME
  // ========================================

  document.body.dataset.theme = config.theme || "swiss";

  // ========================================
  // 04 — OPTIONAL SECTIONS
  // ========================================

  document.querySelectorAll(".nav-link").forEach(link => {
    const href = link.getAttribute("href") || "";
    if (!href.startsWith("#")) return;

    const sectionId = href.slice(1);

    if (sections[sectionId] === false) {
      link.style.display = "none";
      const section = document.getElementById(sectionId);
      if (section) section.hidden = true;
    }
  });

  // ========================================
  // 05 — PUBLISHING MODE
  // ========================================

  if (config.publishingMode === "showcase") {
    const resourcesLink = document.querySelector('a[href="#resources"]');
    const resourcesSection = document.getElementById("resources");

    if (resourcesLink) resourcesLink.style.display = "none";
    if (resourcesSection) resourcesSection.hidden = true;
  }

  // ========================================
  // 06 — SHARED HELPERS
  // ========================================

  const isValidColor = value =>
    typeof value === "string" &&
    /^#[0-9a-fA-F]{6}$/.test(value);

  function createTextElement(tag, className, value) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    element.textContent = String(value ?? "");
    return element;
  }

  function setElementText(id, value) {
    const element = document.getElementById(id);
    if (element && value !== undefined && value !== null) {
      element.textContent = String(value);
    }
  }

  function formatIndex(number) {
    return String(number).padStart(2, "0");
  }

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
    if (!isValidColor(base)) return [];

    const count = Number.isFinite(Number(steps))
      ? Math.max(2, Math.min(21, Math.round(Number(steps))))
      : 11;

    const shades = [];

    for (let index = 0; index < count; index++) {
      const position = index / (count - 1);

      if (position < 0.5) {
        shades.push(mixColors("#FFFFFF", base, position / 0.5));
      } else {
        shades.push(
          mixColors(
            base,
            "#000000",
            ((position - 0.5) / 0.5) * 0.82
          )
        );
      }
    }

    return shades;
  }

  function getDisplayedBackgroundColor() {
    const color = getComputedStyle(document.body).backgroundColor;
    const channels = color.match(/[\d.]+/g);

    if (!channels || channels.length < 3) return "#FFFFFF";

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
    const result = [...shades];

    while (
      result.length > 2 &&
      getColorDistance(result[0], background) < 20
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
        : Math.pow((channel + 0.055) / 1.055, 2.4);
    });

    const luminance =
      channels[0] * 0.2126 +
      channels[1] * 0.7152 +
      channels[2] * 0.0722;

    return luminance > 0.179 ? "#202020" : "#FFFFFF";
  }

  async function copyHexCode(hex) {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(hex);
      } else {
        const temporaryInput = document.createElement("textarea");
        temporaryInput.value = hex;
        temporaryInput.style.position = "fixed";
        temporaryInput.style.opacity = "0";
        document.body.appendChild(temporaryInput);
        temporaryInput.focus();
        temporaryInput.select();

        const copied = document.execCommand("copy");
        temporaryInput.remove();

        if (!copied) throw new Error("Copy command failed.");
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

    const code = createTextElement("span", "color-swatch-hex", hex);
    code.style.color = getReadableTextColor(hex);
    button.appendChild(code);

    button.addEventListener("click", async () => {
      const copied = await copyHexCode(hex);
      code.textContent = copied ? "Copied!" : "Copy failed";
      button.classList.add("is-copied");

      window.setTimeout(() => {
        code.textContent = hex;
        button.classList.remove("is-copied");
      }, 1400);
    });

    return button;
  }

  // ========================================
  // 07 — LOGO COLOR COMPATIBILITY
  // ========================================

  const compatibilityGrid = document.getElementById(
    "logo-compatibility-grid"
  );

  if (compatibilityGrid) {
    compatibilityGrid.replaceChildren();

    const combinations = Array.isArray(config.logoColorCombinations)
      ? config.logoColorCombinations
      : [];

    combinations.forEach(combination => {
      if (
        !combination ||
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
      card.style.backgroundColor = combination.background;

      const square = document.createElement("div");
      square.className = "compatibility-square";
      square.style.backgroundColor = combination.logoColor;

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

  const brandPaletteContainer = document.getElementById(
    "brand-color-palette"
  );

  if (brandPaletteContainer) {
    brandPaletteContainer.replaceChildren();

    const palette = Array.isArray(config.brandPalette)
      ? config.brandPalette
      : [];

    palette.forEach(color => {
      if (!color || !isValidColor(color.hex)) {
        console.warn("Skipped invalid brand palette color:", color);
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

      details.appendChild(
        createTextElement(
          "span",
          "brand-color-role",
          color.role || "Brand color"
        )
      );

      details.appendChild(
        createTextElement(
          "h4",
          "brand-color-name",
          color.name || "Unnamed Color"
        )
      );

      details.appendChild(
        createTextElement("span", "brand-color-code", hex)
      );

      card.appendChild(swatch);
      card.appendChild(details);
      brandPaletteContainer.appendChild(card);
    });
  }

  // ========================================
  // 09 — TONAL COLOR SCALES
  // ========================================

  const tonalScalesContainer = document.getElementById(
    "brand-tonal-scales"
  );

  if (tonalScalesContainer) {
    tonalScalesContainer.replaceChildren();

    const tonalScales = Array.isArray(config.tonalScales)
      ? config.tonalScales
      : [];

    tonalScales.forEach(scale => {
      if (!scale) return;

      let shades = [];

      if (scale.generate === false) {
        shades = Array.isArray(scale.shades)
          ? scale.shades.filter(isValidColor).map(hex => hex.toUpperCase())
          : [];
      } else {
        shades = removeBlendingShades(
          generateTonalScale(scale.base, scale.steps)
        );
      }

      if (!shades.length) {
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

      heading.appendChild(
        createTextElement(
          "h4",
          "tonal-scale-name",
          scale.name || "Color Scale"
        )
      );

      heading.appendChild(
        createTextElement(
          "span",
          "tonal-scale-count",
          `${shades.length} shades`
        )
      );

      const row = document.createElement("div");
      row.className = "tonal-scale-row";
      row.style.setProperty("--shade-count", String(shades.length));

      shades.forEach((hex, index) => {
        row.appendChild(
          createColorButton(
            hex,
            "tonal-scale-swatch",
            `${scale.name || "Color"} shade ${index + 1}`
          )
        );
      });

      group.appendChild(heading);
      group.appendChild(row);
      tonalScalesContainer.appendChild(group);
    });
  }

  // ========================================
  // 10 — DYNAMIC TYPOGRAPHY SYSTEM
  // ========================================

  const typographyConfig = config.typography || {};

  const typographyFonts = Array.isArray(typographyConfig.fonts)
    ? typographyConfig.fonts.filter(font =>
        font &&
        typeof font === "object" &&
        typeof font.family === "string" &&
        font.family.trim() !== ""
      )
    : [];

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

      if (regular) return 400;

      const firstWeight = font.weights[0];

      if (Number.isFinite(Number(firstWeight.value))) {
        return Number(firstWeight.value);
      }
    }

    return 400;
  }

  // ========================================
  // 10.1 — LOAD CLIENT FONTS
  // ========================================

  function loadTypographyFonts() {
    const loadedSources = new Set();

    typographyFonts.forEach(font => {
      const source = typeof font.source === "string"
        ? font.source.trim()
        : "";

      if (!source || loadedSources.has(source)) return;

      const isAllowedSource =
        source.startsWith("https://") ||
        source.startsWith("./") ||
        source.startsWith("css/") ||
        source.startsWith("assets/");

      if (!isAllowedSource) {
        console.warn("Skipped unsupported typography source:", source);
        return;
      }

      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = source;

      link.addEventListener("error", () => {
        console.warn("Unable to load typography stylesheet:", source);
      });

      document.head.appendChild(link);
      loadedSources.add(source);
    });
  }

  loadTypographyFonts();

  // ========================================
  // 10.2 — TYPOGRAPHY INTRO
  // ========================================

  const typographyIntro = typographyConfig.intro || {};

  setElementText("typography-intro-eyebrow", typographyIntro.eyebrow);
  setElementText("typography-intro-headline", typographyIntro.headline);
  setElementText(
    "typography-intro-description",
    typographyIntro.description
  );

  // ========================================
  // 10.3 — EDITORIAL TYPEFACE GALLERY
  // ========================================

  const typefaceGallery = document.getElementById(
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
      showcase.className = "typography-typeface-showcase";

      showcase.classList.add(
        index === 0
          ? "typography-primary-showcase"
          : "typography-secondary-showcase"
      );

      showcase.style.setProperty(
        "--typeface-family",
        getFontFamily(font)
      );

      const topline = document.createElement("div");
      topline.className = "typography-showcase-topline";

      topline.appendChild(
        createTextElement(
          "span",
          "",
          `${role.toUpperCase()} / ${category.toUpperCase()}`
        )
      );

      topline.appendChild(
        createTextElement("span", "", category.toUpperCase())
      );

      const specimen = createTextElement(
        "div",
        "typography-hero-specimen",
        font.specimen || "Ag"
      );

      specimen.style.fontFamily = getFontFamily(font);
      specimen.style.fontWeight = String(getFontWeight(font));

      const bottom = document.createElement("div");
      bottom.className = "typography-showcase-bottom";

      const details = document.createElement("div");

      details.appendChild(
        createTextElement(
          "h4",
          "",
          font.name || "Unnamed Typeface"
        )
      );

      details.appendChild(
        createTextElement(
          "p",
          "",
          font.description || role
        )
      );

      bottom.appendChild(details);

      bottom.appendChild(
        createTextElement(
          "span",
          "typography-showcase-index",
          `${number} / ${total}`
        )
      );

      showcase.appendChild(topline);
      showcase.appendChild(specimen);
      showcase.appendChild(bottom);

      typefaceGallery.appendChild(showcase);
    });
  }

  // ========================================
  // 10.4 — CHARACTER SET GALLERY
  // ========================================

  const characterGallery = document.getElementById(
    "typography-character-gallery"
  );

  const characterSet = typographyConfig.characterSet || {};

  const uppercase =
    characterSet.uppercase || "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const lowercase =
    characterSet.lowercase || "abcdefghijklmnopqrstuvwxyz";

  const numbers =
    characterSet.numbers || "0123456789";

  const punctuation =
    characterSet.punctuation || "&@!?%*";

  if (characterGallery) {
    characterGallery.replaceChildren();

    typographyFonts.forEach((font, index) => {
      const block = document.createElement("div");
      block.className = "typography-character-block";

      if (index > 0) {
        block.classList.add("typography-character-secondary");
      }

      const header = document.createElement("div");
      header.className = "typography-character-header";

      header.appendChild(
        createTextElement(
          "span",
          "",
          `${(font.role || "Brand").toUpperCase()} TYPEFACE — ${font.name || "Unnamed"}`
        )
      );

      header.appendChild(
        createTextElement("span", "", formatIndex(index + 1))
      );

      const content = document.createElement("div");
      content.className = "typography-character-content";
      content.style.fontFamily = getFontFamily(font);
      content.style.fontWeight = String(getFontWeight(font));

      const midpoint = Math.ceil(uppercase.length / 2);

      [
        uppercase.slice(0, midpoint),
        uppercase.slice(midpoint),
        lowercase,
        `${numbers} ${punctuation}`
      ].forEach(characters => {
        content.appendChild(
          createTextElement("p", "", characters)
        );
      });

      block.appendChild(header);
      block.appendChild(content);
      characterGallery.appendChild(block);
    });
  }

  // ========================================
  // 10.5 — APPROVED FONT WEIGHTS
  // ========================================

  const weightsGallery = document.getElementById(
    "typography-weights-gallery"
  );

  if (weightsGallery) {
    weightsGallery.replaceChildren();

    typographyFonts.forEach((font, fontIndex) => {
      const group = document.createElement("div");
      group.className = "typography-weight-group";

      const groupHeader = document.createElement("div");
      groupHeader.className = "typography-weight-header";

      groupHeader.appendChild(
        createTextElement(
          "h4",
          "",
          font.name || "Unnamed Typeface"
        )
      );

      groupHeader.appendChild(
        createTextElement(
          "span",
          "",
          `${formatIndex(fontIndex + 1)} / ${(font.role || "Brand").toUpperCase()}`
        )
      );

      group.appendChild(groupHeader);

      const approvedWeights = Array.isArray(font.weights)
        ? font.weights
        : [];

      approvedWeights.forEach(weight => {
        if (!weight || typeof weight !== "object") return;

        const row = document.createElement("div");
        row.className = "typography-weight-row";

        const sample = createTextElement(
          "span",
          "typography-weight-sample",
          "The quick brown fox"
        );

        sample.style.fontFamily = getFontFamily(font);
        sample.style.fontWeight = String(weight.value ?? 400);
        sample.style.fontStyle =
          weight.style === "italic" ? "italic" : "normal";

        const information = document.createElement("div");
        information.className = "typography-weight-info";

        information.appendChild(
          createTextElement(
            "span",
            "typography-weight-name",
            weight.name || "Regular"
          )
        );

        information.appendChild(
          createTextElement(
            "span",
            "typography-weight-value",
            `${weight.value ?? 400} / ${weight.style || "normal"}`
          )
        );

        row.appendChild(sample);
        row.appendChild(information);
        group.appendChild(row);
      });

      weightsGallery.appendChild(group);
    });
  }

  // ========================================
  // 10.6 — TYPOGRAPHY IN CONTEXT
  // ========================================

  const contextConfig = typographyConfig.context || {};

  const contextShowcase = document.getElementById(
    "typography-context-showcase"
  );

  if (contextShowcase) {
    const primaryFont = typographyFonts[0];
    const supportingFont = typographyFonts[1] || primaryFont;

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

    const contextBackground = isValidColor(brandColors.primary)
      ? brandColors.primary
      : "#202020";

    const contextText = getReadableTextColor(contextBackground);

    const contextAccent = isValidColor(brandColors.accent)
      ? brandColors.accent
      : contextText;

    contextShowcase.style.backgroundColor = contextBackground;
    contextShowcase.style.color = contextText;

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
      (brand.name || "").toUpperCase()
    );

    const headline = document.getElementById(
      "typography-context-headline"
    );

    if (headline) {
      const lines = String(
        contextConfig.headline || "Made to\nbe remembered."
      ).split("\n");

      const italicLine = Number(contextConfig.italicLine);

      headline.replaceChildren();

      headline.style.fontFamily = primaryFont
        ? getFontFamily(primaryFont)
        : "Georgia, serif";

      lines.forEach((line, index) => {
        const isItalic = italicLine === index + 1;

        const lineElement = document.createElement(
          isItalic ? "em" : "span"
        );

        lineElement.textContent = line;

        if (isItalic) {
          lineElement.style.fontStyle = "italic";
        }

        headline.appendChild(lineElement);

        if (index < lines.length - 1) {
          headline.appendChild(document.createElement("br"));
        }
      });
    }

    const description = document.getElementById(
      "typography-context-description"
    );

    const eyebrow = document.getElementById(
      "typography-context-eyebrow"
    );

    const contextBrand = document.getElementById(
      "typography-context-brand"
    );

    if (supportingFont) {
      [description, eyebrow, contextBrand].forEach(element => {
        if (element) {
          element.style.fontFamily = getFontFamily(supportingFont);
        }
      });
    }
  }

  // ========================================
  // 11 — GRAPHIC ELEMENTS SYSTEM
  // Concept 02 — Visual Identity Canvas
  // ========================================

  const graphicsConfig = config.graphicElements || {};
  const graphicsSection = document.getElementById("graphics");

  if (graphicsSection && sections.graphics !== false) {
    const graphicsIntro = graphicsConfig.intro || {};

    setElementText(
      "graphics-intro-eyebrow",
      graphicsIntro.eyebrow
    );

    setElementText(
      "graphics-intro-headline",
      graphicsIntro.headline
    );

    setElementText(
      "graphics-intro-description",
      graphicsIntro.description
    );

    const graphicsLayouts = new Set([
      "full",
      "half",
      "wide",
      "tall",
      "split",
      "split-reverse"
    ]);

    // ----------------------------------------
    // 11.1 — GRAPHIC HELPERS
    // ----------------------------------------

    function graphicsImagePath(value) {
      if (typeof value !== "string") return "";

      const path = value.trim();

      if (!path) return "";

      if (/^(?:javascript|data|blob):/i.test(path)) {
        return "";
      }

      if (/^https:\/\//i.test(path)) {
        return path;
      }

      if (/^(?:\/\/|\/|[a-z][a-z\d+.-]*:)/i.test(path)) {
        return "";
      }

      return path;
    }

    function graphicsBackground(node, color) {
      if (isValidColor(color)) {
        node.style.setProperty(
          "--graphics-artwork-background",
          color
        );
      }
    }

    function graphicsImage(source, className, title, fit) {
      const image = document.createElement("img");

      image.className = className;
      image.src = source;
      image.alt = title || "Brand graphic element";
      image.loading = "lazy";
      image.decoding = "async";

      image.style.setProperty(
        "--graphics-image-fit",
        fit === "contain" ? "contain" : "cover"
      );

      image.addEventListener("error", () => {
        console.warn(
          "Graphic asset could not be loaded:",
          source
        );

        const card = image.closest(
          ".graphics-hero-artwork, " +
          ".graphics-asset-card, " +
          ".graphics-detail-card"
        );

        if (card) {
          const feature = card.closest(".graphics-feature");
          card.remove();

          const gallery = feature && feature.querySelector(
            ".graphics-hero-canvas, " +
            ".graphics-asset-gallery, " +
            ".graphics-details-gallery"
          );

          if (
            feature &&
            gallery &&
            gallery.children.length === 0
          ) {
            feature.hidden = true;
          }
        }
      });

      return image;
    }

    function graphicsLabel(item) {
      if (!item.label) return null;

      const label = createTextElement(
        "span",
        "graphics-artwork-label",
        item.label
      );

      if (item.labelTheme === "dark") {
        label.classList.add("is-dark");
      }

      return label;
    }

    function graphicsVisual(item, frameClass, imageClass) {
      const visual = document.createElement("div");
      visual.className = frameClass;

      graphicsBackground(visual, item.background);

      visual.appendChild(
        graphicsImage(
          graphicsImagePath(item.image),
          imageClass,
          item.title,
          item.fit
        )
      );

      const label = graphicsLabel(item);
      if (label) visual.appendChild(label);

      return visual;
    }

    function graphicsFeature(id, count) {
      const feature = document.getElementById(id);
      if (feature) feature.hidden = count === 0;
    }

    // ========================================
    // 11.2 — SIGNATURE ARTWORK
    // ========================================

    const heroContainer = document.getElementById(
      "graphics-hero-canvas"
    );

    const featured = graphicsConfig.featured || {};

    if (heroContainer) {
      heroContainer.replaceChildren();

      if (
        featured.enabled === true &&
        graphicsImagePath(featured.image)
      ) {
        const artwork = document.createElement("article");
        artwork.className = "graphics-hero-artwork";

        artwork.appendChild(
          graphicsVisual(
            featured,
            "graphics-artwork-frame",
            "graphics-artwork-image"
          )
        );

        const caption = document.createElement("div");
        caption.className = "graphics-hero-caption";

        const main = document.createElement("div");
        main.className = "graphics-hero-caption-main";

        main.appendChild(
          createTextElement(
            "span",
            "graphics-hero-category",
            featured.category || "Signature graphic"
          )
        );

        main.appendChild(
          createTextElement(
            "h4",
            "graphics-hero-title",
            featured.title || "Signature artwork"
          )
        );

        if (featured.description) {
          main.appendChild(
            createTextElement(
              "p",
              "graphics-hero-description",
              featured.description
            )
          );
        }

        caption.appendChild(main);

        caption.appendChild(
          createTextElement(
            "span",
            "graphics-hero-index",
            "01 / FEATURED"
          )
        );

        artwork.appendChild(caption);
        heroContainer.appendChild(artwork);
      }

      graphicsFeature(
        "graphics-hero-feature",
        heroContainer.children.length
      );
    }

    // ========================================
    // 11.3 — GRAPHIC ASSET GALLERY
    // ========================================

    const assetsContainer = document.getElementById(
      "graphics-asset-gallery"
    );

    if (assetsContainer) {
      assetsContainer.replaceChildren();

      const assets = Array.isArray(graphicsConfig.assets)
        ? graphicsConfig.assets
        : [];

      const validAssets = assets.filter(item =>
        item && graphicsImagePath(item.image)
      );

      validAssets.forEach((item, index) => {
        const card = document.createElement("article");
        card.className = "graphics-asset-card";

        const layout = graphicsLayouts.has(item.layout)
          ? item.layout
          : "half";

        card.classList.add(`graphics-layout-${layout}`);

        card.appendChild(
          graphicsVisual(
            item,
            "graphics-asset-visual",
            "graphics-asset-image"
          )
        );

        const content = document.createElement("div");
        content.className = "graphics-asset-content";

        content.appendChild(
          createTextElement(
            "span",
            "graphics-asset-category",
            item.category || "Graphic element"
          )
        );

        content.appendChild(
          createTextElement(
            "h4",
            "graphics-asset-title",
            item.title || "Untitled graphic"
          )
        );

        if (item.description) {
          content.appendChild(
            createTextElement(
              "p",
              "graphics-asset-description",
              item.description
            )
          );
        }

        content.appendChild(
          createTextElement(
            "span",
            "graphics-asset-number",
            `${formatIndex(index + 1)} / ${formatIndex(validAssets.length)}`
          )
        );

        card.appendChild(content);
        assetsContainer.appendChild(card);
      });

      graphicsFeature(
        "graphics-gallery-feature",
        assetsContainer.children.length
      );
    }

    // ========================================
    // 11.4 — DETAILS AND APPLICATIONS
    // ========================================

    const detailsContainer = document.getElementById(
      "graphics-details-gallery"
    );

    if (detailsContainer) {
      detailsContainer.replaceChildren();

      const details = Array.isArray(graphicsConfig.details)
        ? graphicsConfig.details
        : [];

      details
        .filter(item => item && graphicsImagePath(item.image))
        .forEach(item => {
          const card = document.createElement("article");
          card.className = "graphics-detail-card";

          if (item.layout === "full") {
            card.classList.add("graphics-layout-full");
          }

          card.appendChild(
            graphicsVisual(
              item,
              "graphics-detail-visual",
              "graphics-detail-image"
            )
          );

          const content = document.createElement("div");
          content.className = "graphics-detail-content";

          content.appendChild(
            createTextElement(
              "span",
              "graphics-detail-category",
              item.category || "Detail"
            )
          );

          content.appendChild(
            createTextElement(
              "h4",
              "graphics-detail-title",
              item.title || "Graphic detail"
            )
          );

          if (item.description) {
            content.appendChild(
              createTextElement(
                "p",
                "graphics-detail-description",
                item.description
              )
            );
          }

          card.appendChild(content);
          detailsContainer.appendChild(card);
        });

      graphicsFeature(
        "graphics-details-feature",
        detailsContainer.children.length
      );
    }

    // ========================================
    // 11.5 — GRAPHIC USAGE GUIDELINES
    // ========================================

    const guidelinesContainer = document.getElementById(
      "graphics-guidelines-list"
    );

    if (guidelinesContainer) {
      guidelinesContainer.replaceChildren();

      const guidelines = Array.isArray(graphicsConfig.guidelines)
        ? graphicsConfig.guidelines
        : [];

      guidelines
        .filter(item => item && (item.title || item.description))
        .forEach((item, index) => {
          const card = document.createElement("article");
          card.className = "graphics-guideline-card";

          card.appendChild(
            createTextElement(
              "span",
              "graphics-guideline-number",
              formatIndex(index + 1)
            )
          );

          card.appendChild(
            createTextElement(
              "h4",
              "graphics-guideline-title",
              item.title || "Usage principle"
            )
          );

          if (item.description) {
            card.appendChild(
              createTextElement(
                "p",
                "graphics-guideline-description",
                item.description
              )
            );
          }

          guidelinesContainer.appendChild(card);
        });

      graphicsFeature(
        "graphics-guidelines-feature",
        guidelinesContainer.children.length
      );
    }
  }

  // ========================================
  // 12 — DYNAMIC PHOTOGRAPHY SYSTEM
  // Concept 02 — Editorial Photography Gallery
  // ========================================

  const photographyConfig = config.photography || {};
  const photographySection = document.getElementById("photography");

  if (photographySection && sections.photography !== false) {

    const photoIntro = photographyConfig.intro || {};

    setElementText(
      "photography-intro-eyebrow",
      photoIntro.eyebrow
    );

    setElementText(
      "photography-intro-headline",
      photoIntro.headline
    );

    setElementText(
      "photography-intro-description",
      photoIntro.description
    );

    const photoLayouts = new Set([
      "full",
      "half",
      "wide",
      "tall",
      "split",
      "split-reverse"
    ]);

    // ========================================
    // 12.1 — PHOTOGRAPHY HELPERS
    // ========================================

    function photoPath(value) {
      if (typeof value !== "string") return "";

      const path = value.trim();

      if (!path) return "";

      if (/^(?:javascript|data|blob):/i.test(path)) {
        return "";
      }

      if (/^https:\/\//i.test(path)) {
        return path;
      }

      if (/^(?:\/\/|\/|[a-z][a-z\d+.-]*:)/i.test(path)) {
        return "";
      }

      return path;
    }

    function photoFeature(id, container) {
      const feature = document.getElementById(id);

      if (feature && container) {
        feature.hidden = container.children.length === 0;
      }
    }

    function photoImage(
      item,
      className,
      card,
      featureId,
      container
    ) {
      const source = photoPath(item.image);
      const image = document.createElement("img");

      image.className = className;
      image.alt = item.alt || item.title || "Brand photography";
      image.loading = "lazy";
      image.decoding = "async";

      image.style.setProperty(
        "--photo-image-fit",
        item.fit === "contain" ? "contain" : "cover"
      );

      image.addEventListener("error", () => {
        console.warn(
          "Photography image could not be loaded:",
          source
        );

        if (card.isConnected) {
          card.remove();
        }

        photoFeature(featureId, container);
      });

      image.src = source;

      return image;
    }

    function photoVisual(
      item,
      visualClass,
      imageClass,
      card,
      featureId,
      container
    ) {
      const visual = document.createElement("div");
      visual.className = visualClass;

      visual.appendChild(
        photoImage(
          item,
          imageClass,
          card,
          featureId,
          container
        )
      );

      return visual;
    }

    function photoCaption(
      item,
      contentClass,
      categoryClass,
      titleClass,
      descriptionClass,
      fallback
    ) {
      const content = document.createElement("div");
      content.className = contentClass;

      if (item.category) {
        content.appendChild(
          createTextElement(
            "span",
            categoryClass,
            item.category
          )
        );
      }

      if (item.title || fallback) {
        content.appendChild(
          createTextElement(
            "h4",
            titleClass,
            item.title || fallback
          )
        );
      }

      if (item.description) {
        content.appendChild(
          createTextElement(
            "p",
            descriptionClass,
            item.description
          )
        );
      }

      return content;
    }

    // ========================================
    // 12.2 — FEATURED PHOTOGRAPHY
    // ========================================

    const photoHeroContainer = document.getElementById(
      "photography-hero-canvas"
    );

    if (photoHeroContainer) {
      photoHeroContainer.replaceChildren();

      const featuredPhoto = photographyConfig.featured || {};

      if (
        featuredPhoto.enabled === true &&
        photoPath(featuredPhoto.image)
      ) {
        const card = document.createElement("article");
        card.className = "photography-hero-card";

        card.appendChild(
          photoVisual(
            featuredPhoto,
            "photography-hero-visual",
            "photography-hero-image",
            card,
            "photography-hero-feature",
            photoHeroContainer
          )
        );

        const caption = document.createElement("div");
        caption.className = "photography-hero-caption";

        caption.appendChild(
          photoCaption(
            featuredPhoto,
            "photography-hero-caption-main",
            "photography-hero-category",
            "photography-hero-title",
            "photography-hero-description",
            "Signature Photography"
          )
        );

        caption.appendChild(
          createTextElement(
            "span",
            "photography-hero-index",
            "01 / FEATURED"
          )
        );

        card.appendChild(caption);
        photoHeroContainer.appendChild(card);
      }

      photoFeature(
        "photography-hero-feature",
        photoHeroContainer
      );
    }

    // ========================================
    // 12.3 — PHOTOGRAPHY CATEGORIES
    // Unlimited categories and photographs
    // ========================================

    const photoCategoriesContainer = document.getElementById(
      "photography-categories-gallery"
    );

    if (photoCategoriesContainer) {
      photoCategoriesContainer.replaceChildren();

      const categories = Array.isArray(
        photographyConfig.categories
      )
        ? photographyConfig.categories
        : [];

      categories.forEach(category => {
        if (
          !category ||
          !Array.isArray(category.images)
        ) {
          return;
        }

        const validImages = category.images.filter(
          item => item && photoPath(item.image)
        );

        validImages.forEach((item, index) => {
          const card = document.createElement("article");
          card.className = "photography-category-card";

          card.appendChild(
            photoVisual(
              item,
              "photography-category-visual",
              "photography-category-image",
              card,
              "photography-categories-feature",
              photoCategoriesContainer
            )
          );

          const captionItem = {
            title:
              item.title ||
              category.title ||
              "Photography category",

            description:
              item.description ||
              category.description ||
              "",

            category:
              category.title ||
              "Photography"
          };

          card.appendChild(
            photoCaption(
              captionItem,
              "photography-category-content",
              "photography-category-label",
              "photography-category-title",
              "photography-category-description",
              "Photography category"
            )
          );

          card.dataset.categoryIndex = String(index);
          photoCategoriesContainer.appendChild(card);
        });
      });

      photoFeature(
        "photography-categories-feature",
        photoCategoriesContainer
      );
    }

    // ========================================
    // 12.4 — EDITORIAL IMAGE GALLERY
    // ========================================

    const photoGalleryContainer = document.getElementById(
      "photography-image-gallery"
    );

    if (photoGalleryContainer) {
      photoGalleryContainer.replaceChildren();

      const gallery = Array.isArray(
        photographyConfig.gallery
      )
        ? photographyConfig.gallery.filter(
            item => item && photoPath(item.image)
          )
        : [];

      gallery.forEach(item => {
        const card = document.createElement("article");
        card.className = "photography-gallery-card";

        const layout = photoLayouts.has(item.layout)
          ? item.layout
          : "half";

        card.classList.add(
          `photography-layout-${layout}`
        );

        card.appendChild(
          photoVisual(
            item,
            "photography-gallery-visual",
            "photography-gallery-image",
            card,
            "photography-gallery-feature",
            photoGalleryContainer
          )
        );

        card.appendChild(
          photoCaption(
            item,
            "photography-gallery-content",
            "photography-gallery-category",
            "photography-gallery-title",
            "photography-gallery-description",
            ""
          )
        );

        photoGalleryContainer.appendChild(card);
      });

      photoFeature(
        "photography-gallery-feature",
        photoGalleryContainer
      );
    }

    // ========================================
    // 12.5 — ART DIRECTION GUIDELINES
    // ========================================

    const photoDirectionContainer = document.getElementById(
      "photography-direction-list"
    );

    if (photoDirectionContainer) {
      photoDirectionContainer.replaceChildren();

      const directions = Array.isArray(
        photographyConfig.artDirection
      )
        ? photographyConfig.artDirection
        : [];

      directions
        .filter(item =>
          item && (item.title || item.description)
        )
        .forEach((item, index) => {
          const card = document.createElement("article");
          card.className = "photography-direction-card";

          card.appendChild(
            createTextElement(
              "span",
              "photography-direction-number",
              formatIndex(index + 1)
            )
          );

          card.appendChild(
            createTextElement(
              "h4",
              "photography-direction-title",
              item.title || "Art direction"
            )
          );

          if (item.description) {
            card.appendChild(
              createTextElement(
                "p",
                "photography-direction-description",
                item.description
              )
            );
          }

          photoDirectionContainer.appendChild(card);
        });

      photoFeature(
        "photography-direction-feature",
        photoDirectionContainer
      );
    }

    // ========================================
    // 12.6 — PHOTOGRAPHY DO / DON'T
    // ========================================

    const photoComparisonContainer = document.getElementById(
      "photography-comparison-gallery"
    );

    if (photoComparisonContainer) {
      photoComparisonContainer.replaceChildren();

      const comparisons = Array.isArray(
        photographyConfig.comparisons
      )
        ? photographyConfig.comparisons
        : [];

      comparisons.forEach(comparison => {
        if (
          !comparison ||
          !comparison.approved ||
          !comparison.avoid ||
          !photoPath(comparison.approved.image) ||
          !photoPath(comparison.avoid.image)
        ) {
          return;
        }

        const pairCards = [];

        const pair = document.createElement("div");

        // Keeps both cards aligned with the
        // existing two-column comparison grid.
        pair.style.display = "contents";

        const pairFailure = () => {
          pairCards.forEach(card => card.remove());
          pair.remove();

          photoFeature(
            "photography-comparison-feature",
            photoComparisonContainer
          );
        };

        [
          {
            item: comparison.approved,
            approved: true
          },
          {
            item: comparison.avoid,
            approved: false
          }
        ].forEach(({ item, approved }) => {
          const card = document.createElement("article");
          card.className = "photography-comparison-card";

          pairCards.push(card);

          const visual = photoVisual(
            item,
            "photography-comparison-visual",
            "photography-comparison-image",
            card,
            "photography-comparison-feature",
            photoComparisonContainer
          );

          const image = visual.querySelector("img");

          if (image) {
            image.addEventListener("error", pairFailure);
          }

          card.appendChild(visual);

          const content = document.createElement("div");
          content.className = "photography-comparison-content";

          const status = createTextElement(
            "span",
            "photography-comparison-status",
            approved
              ? "DO / APPROVED"
              : "DON'T / AVOID"
          );

          status.classList.add(
            approved ? "is-approved" : "is-avoid"
          );

          content.appendChild(status);

          content.appendChild(
            createTextElement(
              "h4",
              "photography-comparison-title",
              item.title ||
                comparison.title ||
                (approved ? "Approved" : "Avoid")
            )
          );

          if (item.description) {
            content.appendChild(
              createTextElement(
                "p",
                "photography-comparison-description",
                item.description
              )
            );
          }

          card.appendChild(content);
          pair.appendChild(card);
        });

        photoComparisonContainer.appendChild(pair);
      });

      photoFeature(
        "photography-comparison-feature",
        photoComparisonContainer
      );
    }
  }

  // ========================================
  // 13 — LAYOUT & COMPOSITION SYSTEM
  // Concept 02 — Editorial Layout Framework
  // ========================================

  const layoutConfig = config.layoutComposition || {};
  const layoutSection = document.getElementById("layout");

  if (layoutSection && sections.layout !== false) {
    const intro = layoutConfig.intro || {};
    setElementText("layout-intro-eyebrow", intro.eyebrow);
    setElementText("layout-intro-headline", intro.headline);
    setElementText("layout-intro-description", intro.description);

    const layoutTypes = new Set([
      "full", "half", "wide", "tall", "split", "split-reverse"
    ]);

    function layoutItems(value) {
      return Array.isArray(value)
        ? value.filter(item => item && typeof item === "object")
        : [];
    }

    function layoutFeature(id, container) {
      const feature = document.getElementById(id);
      if (feature && container) {
        feature.hidden = container.children.length === 0;
      }
    }

    function layoutImagePath(value) {
      if (typeof value !== "string") return "";
      const path = value.trim();
      if (!path || /^(?:javascript|data|blob):/i.test(path)) return "";
      if (/^https:\/\//i.test(path)) return path;
      if (/^(?:\/\/|\/|[a-z][a-z\d+.-]*:)/i.test(path)) return "";
      return path;
    }

    function layoutImage(item, card, container, featureId) {
      const img = document.createElement("img");
      img.className = card.classList.contains("layout-example-card")
        ? "layout-example-image"
        : "layout-comparison-image";
      img.alt = item.alt || item.title || "Layout composition example";
      img.loading = "lazy";
      img.decoding = "async";
      img.style.setProperty(
        "--layout-image-fit", item.fit === "contain" ? "contain" : "cover"
      );
      img.addEventListener("error", () => {
        console.warn("Layout image could not be loaded:", img.src);
        if (card.isConnected) card.remove();
        layoutFeature(featureId, container);
      });
      img.src = layoutImagePath(item.image);
      return img;
    }

    function layoutCaption(item, categoryClass, titleClass, descriptionClass) {
      const content = document.createElement("div");
      content.className = "layout-example-content";
      if (item.category) {
        content.appendChild(createTextElement(
          "span", categoryClass, item.category
        ));
      }
      content.appendChild(createTextElement(
        "h4", titleClass, item.title || "Composition example"
      ));
      if (item.description) {
        content.appendChild(createTextElement(
          "p", descriptionClass, item.description
        ));
      }
      return content;
    }

    // 13.1 — LAYOUT PHILOSOPHY

    const principlesGallery = document.getElementById(
      "layout-principles-gallery"
    );
    if (principlesGallery) {
      principlesGallery.replaceChildren();
      layoutItems(layoutConfig.principles)
        .filter(item => item.title || item.description)
        .forEach((item, index) => {
          const card = document.createElement("article");
          card.className = "layout-principle-card";
          card.appendChild(createTextElement(
            "span", "layout-principle-number", formatIndex(index + 1)
          ));
          card.appendChild(createTextElement(
            "h4", "layout-principle-title", item.title || "Layout principle"
          ));
          if (item.description) {
            card.appendChild(createTextElement(
              "p", "layout-principle-description", item.description
            ));
          }
          principlesGallery.appendChild(card);
        });
      layoutFeature("layout-philosophy-feature", principlesGallery);
    }

    // 13.2 — GRID SYSTEM

    const gridGallery = document.getElementById("layout-grid-gallery");
    if (gridGallery) {
      gridGallery.replaceChildren();
      layoutItems(layoutConfig.grids).forEach(item => {
        const columns = Math.max(1, Math.min(24, Math.round(
          Number(item.columns) || 4
        )));
        const card = document.createElement("article");
        card.className = "layout-grid-card";
        const visual = document.createElement("div");
        visual.className = "layout-grid-visual";
        const grid = document.createElement("div");
        grid.className = "layout-grid-columns";
        grid.style.setProperty("--layout-grid-columns", String(columns));
        const cssLength = /^(?:\d+(?:\.\d+)?)(?:px|rem|em|%)$/;
        if (typeof item.gutter === "string" && cssLength.test(item.gutter)) {
          grid.style.setProperty("--layout-grid-gutter", item.gutter);
        }
        if (typeof item.margin === "string" && cssLength.test(item.margin)) {
          visual.style.setProperty("--layout-grid-margin", item.margin);
        }
        for (let i = 0; i < columns; i++) {
          const column = document.createElement("span");
          column.className = "layout-grid-column";
          grid.appendChild(column);
        }
        visual.appendChild(grid);
        const content = document.createElement("div");
        content.className = "layout-grid-content";
        content.appendChild(createTextElement(
          "span", "layout-grid-meta", item.category || `${columns} COLUMNS`
        ));
        content.appendChild(createTextElement(
          "h4", "layout-grid-title", item.title || "Grid system"
        ));
        if (item.description) {
          content.appendChild(createTextElement(
            "p", "layout-grid-description", item.description
          ));
        }
        card.append(visual, content);
        gridGallery.appendChild(card);
      });
      layoutFeature("layout-grid-feature", gridGallery);
    }

    // 13.3 — SPACING & HIERARCHY

    const spacingGallery = document.getElementById(
      "layout-spacing-gallery"
    );
    if (spacingGallery) {
      spacingGallery.replaceChildren();
      layoutItems(layoutConfig.spacing).forEach((item, index) => {
        const card = document.createElement("article");
        card.className = "layout-spacing-card";
        card.appendChild(createTextElement(
          "span", "layout-spacing-number", formatIndex(index + 1)
        ));
        const demo = document.createElement("div");
        demo.className = "layout-spacing-demo";
        const bars = Array.isArray(item.bars) && item.bars.length
          ? item.bars.slice(0, 8) : [80, 50, 25];
        bars.forEach(value => {
          const bar = document.createElement("span");
          bar.className = "layout-spacing-bar";
          const height = Math.max(5, Math.min(100, Number(value) || 5));
          bar.style.setProperty("--layout-bar-height", `${height}%`);
          demo.appendChild(bar);
        });
        card.appendChild(demo);
        card.appendChild(createTextElement(
          "h4", "layout-spacing-title", item.title || "Spacing principle"
        ));
        if (item.description) {
          card.appendChild(createTextElement(
            "p", "layout-spacing-description", item.description
          ));
        }
        spacingGallery.appendChild(card);
      });
      layoutFeature("layout-spacing-feature", spacingGallery);
    }

    // 13.4 — COMPOSITION EXAMPLES

    const examplesGallery = document.getElementById(
      "layout-examples-gallery"
    );
    if (examplesGallery) {
      examplesGallery.replaceChildren();
      layoutItems(layoutConfig.examples)
        .filter(item => layoutImagePath(item.image))
        .forEach(item => {
          const card = document.createElement("article");
          card.className = "layout-example-card";
          const type = layoutTypes.has(item.layout) ? item.layout : "half";
          card.classList.add(`layout-layout-${type}`);
          const visual = document.createElement("div");
          visual.className = "layout-example-visual";
          visual.appendChild(layoutImage(
            item, card, examplesGallery, "layout-examples-feature"
          ));
          card.appendChild(visual);
          card.appendChild(layoutCaption(
            item,
            "layout-example-category",
            "layout-example-title",
            "layout-example-description"
          ));
          examplesGallery.appendChild(card);
        });
      layoutFeature("layout-examples-feature", examplesGallery);
    }

    // 13.5 — COMPOSITION DO / DON'T

    const comparisonsGallery = document.getElementById(
      "layout-comparison-gallery"
    );
    if (comparisonsGallery) {
      comparisonsGallery.replaceChildren();
      layoutItems(layoutConfig.comparisons).forEach(comparison => {
        if (!comparison.approved || !comparison.avoid ||
            !layoutImagePath(comparison.approved.image) ||
            !layoutImagePath(comparison.avoid.image)) return;

        const pair = document.createElement("div");
        pair.className = "layout-comparison-pair";
        let failed = false;
        const removePair = () => {
          if (failed) return;
          failed = true;
          pair.remove();
          layoutFeature("layout-comparison-feature", comparisonsGallery);
        };

        [
          { item: comparison.approved, approved: true },
          { item: comparison.avoid, approved: false }
        ].forEach(({ item, approved }) => {
          const card = document.createElement("article");
          card.className = "layout-comparison-card";
          card.classList.add(
            approved ? "layout-comparison-approved" : "layout-comparison-avoid"
          );
          const visual = document.createElement("div");
          visual.className = "layout-comparison-visual";
          const img = layoutImage(
            item, card, comparisonsGallery, "layout-comparison-feature"
          );
          img.addEventListener("error", removePair);
          visual.appendChild(img);
          card.appendChild(visual);
          card.appendChild(createTextElement(
            "span", "layout-comparison-status",
            approved ? "DO / APPROVED" : "DON'T / AVOID"
          ));
          card.appendChild(createTextElement(
            "h4", "layout-comparison-title",
            item.title || comparison.title || (approved ? "Approved" : "Avoid")
          ));
          if (item.description) {
            card.appendChild(createTextElement(
              "p", "layout-comparison-description", item.description
            ));
          }
          pair.appendChild(card);
        });
        comparisonsGallery.appendChild(pair);
      });
      layoutFeature("layout-comparison-feature", comparisonsGallery);
    }
  }

  // ========================================
  // 14 — BRAND VOICE & MESSAGING
  // Concept 02 — Editorial Verbal Identity
  // ========================================

  const voiceConfig = config.brandVoice || {};
  const voiceSection = document.getElementById("voice");

  if (voiceSection && sections.voice !== false) {
    const voiceIntro = voiceConfig.intro || {};
    setElementText("voice-intro-eyebrow", voiceIntro.eyebrow);
    setElementText("voice-intro-headline", voiceIntro.headline);
    setElementText("voice-intro-description", voiceIntro.description);

    function voiceItems(items) {
      return Array.isArray(items)
        ? items.filter(item => item && typeof item === "object")
        : [];
    }

    function voiceFeature(featureId, gallery) {
      const feature = document.getElementById(featureId);
      if (feature && gallery) feature.hidden = gallery.children.length === 0;
    }

    function voiceAppend(parent, tag, className, value) {
      if (value !== undefined && value !== null && String(value).trim()) {
        parent.appendChild(createTextElement(tag, className, value));
      }
    }

    // 14.1 — BRAND PERSONALITY
    const personalityGallery = document.getElementById("voice-personality-gallery");
    if (personalityGallery) {
      personalityGallery.replaceChildren();
      voiceItems(voiceConfig.personality)
        .filter(item => item.title || item.description)
        .forEach((item, index) => {
          const card = document.createElement("article");
          card.className = "voice-personality-card";
          voiceAppend(card, "span", "voice-personality-number", formatIndex(index + 1));
          voiceAppend(card, "h4", "voice-personality-title", item.title);
          voiceAppend(card, "p", "voice-personality-description", item.description);
          personalityGallery.appendChild(card);
        });
      voiceFeature("voice-personality-feature", personalityGallery);
    }

    // 14.2 — TONE OF VOICE
    const toneGallery = document.getElementById("voice-tone-gallery");
    if (toneGallery) {
      toneGallery.replaceChildren();
      const tones = voiceConfig.tone || voiceConfig.tones;
      voiceItems(tones)
        .filter(item => item.title || item.description || item.example)
        .forEach((item, index) => {
          const card = document.createElement("article");
          card.className = "voice-tone-card";
          const heading = document.createElement("div");
          const details = document.createElement("div");
          voiceAppend(heading, "span", "voice-tone-number", formatIndex(index + 1));
          voiceAppend(heading, "span", "voice-tone-category", item.category);
          voiceAppend(heading, "h4", "voice-tone-title", item.title);
          voiceAppend(details, "p", "voice-tone-description", item.description);
          voiceAppend(details, "blockquote", "voice-tone-example", item.example);
          card.append(heading, details);
          toneGallery.appendChild(card);
        });
      voiceFeature("voice-tone-feature", toneGallery);
    }

    // 14.3 — MESSAGING PILLARS
    const pillarsGallery = document.getElementById("voice-pillars-gallery");
    if (pillarsGallery) {
      pillarsGallery.replaceChildren();
      voiceItems(voiceConfig.pillars)
        .filter(item => item.title || item.description || item.statement)
        .forEach((item, index) => {
          const card = document.createElement("article");
          card.className = "voice-pillar-card";
          voiceAppend(card, "span", "voice-pillar-number", formatIndex(index + 1));
          voiceAppend(card, "h4", "voice-pillar-title", item.title);
          voiceAppend(card, "p", "voice-pillar-description", item.description);
          voiceAppend(card, "p", "voice-pillar-statement", item.statement);
          pillarsGallery.appendChild(card);
        });
      voiceFeature("voice-pillars-feature", pillarsGallery);
    }

    // 14.4 — WRITING EXAMPLES
    const examplesGallery = document.getElementById("voice-examples-gallery");
    if (examplesGallery) {
      examplesGallery.replaceChildren();
      voiceItems(voiceConfig.examples)
        .filter(item => item.copy || item.title || item.description)
        .forEach((item, index) => {
          const card = document.createElement("article");
          card.className = "voice-example-card";
          const layout = ["full", "half", "wide"].includes(item.layout)
            ? item.layout : "half";
          card.classList.add(`voice-layout-${layout}`);
          voiceAppend(card, "span", "voice-example-number", formatIndex(index + 1));
          voiceAppend(card, "span", "voice-example-category", item.category || item.title);
          voiceAppend(card, "p", "voice-example-copy", item.copy);
          voiceAppend(card, "p", "voice-example-description", item.description);
          examplesGallery.appendChild(card);
        });
      voiceFeature("voice-examples-feature", examplesGallery);
    }

    // 14.5 — VOICE DO / DON'T
    const comparisonGallery = document.getElementById("voice-comparison-gallery");
    if (comparisonGallery) {
      comparisonGallery.replaceChildren();
      voiceItems(voiceConfig.comparisons)
        .filter(item => item.approved && item.avoid)
        .forEach(item => {
          const pair = document.createElement("div");
          pair.className = "voice-comparison-pair";
          [
            { data: item.approved, approved: true },
            { data: item.avoid, approved: false }
          ].forEach(({ data, approved }) => {
            const card = document.createElement("article");
            card.className = `voice-comparison-card ${approved ? "is-approved" : "is-avoid"}`;
            voiceAppend(card, "span", "voice-comparison-status",
              approved ? "DO / APPROVED" : "DON'T / AVOID");
            voiceAppend(card, "p", "voice-comparison-copy", data.copy);
            voiceAppend(card, "h4", "voice-comparison-title", data.title || item.title);
            voiceAppend(card, "p", "voice-comparison-description", data.description);
            pair.appendChild(card);
          });
          comparisonGallery.appendChild(pair);
        });
      voiceFeature("voice-comparison-feature", comparisonGallery);
    }
  }

  // ========================================
  // 15 — ACTIVE SIDEBAR NAVIGATION
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
    brand.name
  );

});
