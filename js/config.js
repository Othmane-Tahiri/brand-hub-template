
/*
 * BRAND HUB — CLIENT CONFIGURATION
 * Edit this file for each branding client.
 */

const BRAND_CONFIG = {

  // ========================================
  // BASIC BRAND INFORMATION
  // ========================================

  brand: {
    name: "Sample Brand",
    tagline: "A distinctive brand identity",
    description: "Explore our visual identity system."
  },

  // ========================================
  // WEBSITE THEME
  // ========================================

  // Available themes:
  // "swiss", "editorial", "dashboard"

  theme: "swiss",

  // ========================================
  // PUBLISHING MODE
  // ========================================

  // "client" or "showcase"

  publishingMode: "client",

  // ========================================
  // BRAND COLORS
  // ========================================

  colors: {
    primary: "#202020",
    secondary: "#F0EDE6",
    accent: "#B68B59",
    background: "#FFFFFF",
    text: "#202020"
  },

  // ========================================
  // MAIN BRAND COLOR PALETTE
  // ========================================

  /*
   * Add the client's approved brand colors here.
   *
   * Each object creates one color card.
   *
   * name = Display name
   * role = Role in the identity
   * hex  = Exact HEX color
   *
   * Add or remove objects as needed.
   */

  brandPalette: [

    {
      name: "Charcoal",
      role: "Primary",
      hex: "#202020"
    },

    {
      name: "Warm Ivory",
      role: "Secondary",
      hex: "#F0EDE6"
    },

    {
      name: "Muted Gold",
      role: "Accent",
      hex: "#B68B59"
    }

  ],

  // ========================================
  // TONAL COLOR SCALES
  // ========================================

  /*
   * Tonal scales are based on the client's
   * actual brand colors.
   *
   * Set generate to true to create a scale
   * automatically from the base color.
   *
   * Set generate to false and provide a
   * shades array to use exact approved HEX
   * values instead.
   *
   * steps = Number of generated shades.
   *
   * The first shade will be the lightest,
   * and the last will be the darkest.
   *
   * Generated shades are presentation
   * suggestions, not automatically approved
   * brand colors.
   */

  tonalScales: [

    {
      name: "Charcoal",
      base: "#202020",
      generate: true,
      steps: 11,
      shades: []
    },

    {
      name: "Warm Ivory",
      base: "#F0EDE6",
      generate: true,
      steps: 11,
      shades: []
    },

    {
      name: "Muted Gold",
      base: "#B68B59",
      generate: true,
      steps: 11,
      shades: []
    }

  ],

  // ========================================
  // LOGO COLOR COMPATIBILITY
  // ========================================

  /*
   * Each object creates one compatibility card.
   *
   * background = Outer card color
   * logoColor  = Inner logo/square color
   * label      = Combination name
   *
   * Add or remove objects to change the
   * number of cards for each client.
   */

  logoColorCombinations: [

    {
      label: "Dark / White",
      background: "#202020",
      logoColor: "#FFFFFF"
    },

    {
      label: "Dark / Accent",
      background: "#202020",
      logoColor: "#B68B59"
    },

    {
      label: "Light / Dark",
      background: "#F0EDE6",
      logoColor: "#202020"
    },

    {
      label: "White / Accent",
      background: "#FFFFFF",
      logoColor: "#B68B59"
    },

    {
      label: "Accent / White",
      background: "#B68B59",
      logoColor: "#FFFFFF"
    },

    {
      label: "White / Dark",
      background: "#FFFFFF",
      logoColor: "#202020"
    }

  ],

  // ========================================
  // TYPOGRAPHY SYSTEM
  // ========================================

  /*
   * Concept 02 — Editorial Type Gallery
   *
   * This system adapts to the number of
   * typefaces used in each client project.
   *
   * Add or remove font objects freely.
   *
   * Each font object includes:
   *
   * name:
   *   Public-facing typeface name.
   *
   * role:
   *   Primary, Secondary, Supporting,
   *   Display, Body, Accent, etc.
   *
   * category:
   *   Serif, Sans Serif, Display,
   *   Script, Monospace, etc.
   *
   * family:
   *   CSS font-family value.
   *
   * source:
   *   Optional CSS stylesheet URL.
   *   Use an empty string for locally
   *   installed/system fonts or when
   *   font loading is handled elsewhere.
   *
   * specimen:
   *   Large characters shown in the
   *   editorial typeface gallery.
   *
   * description:
   *   Short description of the font.
   *
   * weights:
   *   Only approved weights/styles.
   *
   * Each weight has:
   *   name, value, style.
   *
   * Examples:
   *   Regular = 400
   *   Medium  = 500
   *   Bold    = 700
   *
   * Italic styles use style: "italic".
   *
   * Important:
   * Declaring a font name does not
   * automatically install that font.
   * Its files or stylesheet must be
   * available to the website.
   */

  typography: {

    intro: {
      eyebrow: "THE TYPOGRAPHIC LANGUAGE",
      headline: "A language of form.",
      description:
        "Where expression meets precision. A considered balance of character, rhythm, and function."
    },

    fonts: [

      {
        name: "Cormorant Garamond",
        role: "Primary",
        category: "Serif",

        family: '"Cormorant Garamond", Georgia, serif',

        source:
          "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400&display=swap",

        specimen: "Ag",

        description:
          "Elegant / Expressive / Editorial",

        weights: [
          {
            name: "Regular",
            value: 400,
            style: "normal"
          },
          {
            name: "Medium",
            value: 500,
            style: "normal"
          },
          {
            name: "Semibold",
            value: 600,
            style: "normal"
          },
          {
            name: "Bold",
            value: 700,
            style: "normal"
          },
          {
            name: "Italic",
            value: 400,
            style: "italic"
          }
        ]
      },

      {
        name: "Inter",
        role: "Secondary",
        category: "Sans Serif",

        family: '"Inter", Arial, sans-serif',

        source:
          "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap",

        specimen: "Aa",

        description:
          "Modern / Functional / Precise",

        weights: [
          {
            name: "Regular",
            value: 400,
            style: "normal"
          },
          {
            name: "Medium",
            value: 500,
            style: "normal"
          },
          {
            name: "Semibold",
            value: 600,
            style: "normal"
          },
          {
            name: "Bold",
            value: 700,
            style: "normal"
          }
        ]
      }

    ],

    characterSet: {
      uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
      lowercase: "abcdefghijklmnopqrstuvwxyz",
      numbers: "0123456789",
      punctuation: "&@!?%*"
    },

    context: {
      eyebrow: "A NEW PERSPECTIVE",
      headline: "Made to\nbe remembered.",
      italicLine: 2,
      description:
        "Thoughtful typography creates a lasting impression."
    }

  },

  // ========================================
  // GRAPHIC ELEMENTS SYSTEM
  // ========================================

  /*
   * Concept 02 — Visual Identity Canvas
   *
   * This section presents the client's
   * approved graphic identity assets.
   *
   * All content is optional.
   *
   * The system automatically adapts to
   * different numbers of graphic elements.
   *
   * Images may be PNG, JPG, WEBP, or SVG.
   *
   * Example local image path:
   *
   * "assets/graphics/pattern-01.svg"
   *
   * Upload the corresponding asset to
   * the GitHub repository before using it.
   *
   * IMPORTANT:
   * The content below is demonstration
   * content for the Sample Brand only.
   * Replace it with actual approved
   * client assets and guidelines.
   */

  graphicElements: {

    // ------------------------------------
    // EDITORIAL INTRODUCTION
    // ------------------------------------

    intro: {
      eyebrow: "THE GRAPHIC LANGUAGE",
      headline: "Identity beyond the mark.",
      description:
        "A collection of visual elements that bring character, consistency, and expression to the brand."
    },

    // ------------------------------------
    // SIGNATURE GRAPHIC
    // ------------------------------------

    /*
     * Featured artwork is optional.
     *
     * Set enabled to false to hide it.
     *
     * image:
     *   Path to the approved graphic.
     *
     * background:
     *   Background behind the image.
     *
     * fit:
     *   "cover" or "contain".
     *
     * label:
     *   Optional small label over artwork.
     *
     * labelTheme:
     *   "light" or "dark".
     *
     * If image is empty, no artwork
     * should be presented as approved.
     */

    featured: {
      enabled: false,

      title: "Signature Pattern",
      category: "Brand Pattern",

      description:
        "A distinctive graphic expression that extends the identity beyond the logo.",

      image: "",
      background: "#F0EDE6",
      fit: "contain",

      label: "SIGNATURE GRAPHIC",
      labelTheme: "light"
    },

    // ------------------------------------
    // GRAPHIC ASSET GALLERY
    // ------------------------------------

    /*
     * Add one object for each approved
     * graphic element.
     *
     * There is no fixed asset limit.
     *
     * category examples:
     * "Pattern"
     * "Shape"
     * "Iconography"
     * "Illustration"
     * "Texture"
     * "Graphic Motif"
     *
     * layout options:
     *
     * "full"
     * "half"
     * "wide"
     * "tall"
     * "split"
     * "split-reverse"
     *
     * image:
     *   Actual asset file path.
     *
     * background:
     *   Canvas background HEX value.
     *
     * fit:
     *   "contain" keeps the whole artwork
     *   visible.
     *
     *   "cover" fills the entire canvas.
     *
     * Empty image paths are ignored.
     */

    assets: [

      // Example:
      //
      // {
      //   title: "Geometric Pattern",
      //   category: "Pattern",
      //   description:
      //     "A repeatable graphic pattern.",
      //   image: "assets/graphics/pattern.svg",
      //   background: "#F0EDE6",
      //   fit: "cover",
      //   layout: "full",
      //   label: "PATTERN 01",
      //   labelTheme: "light"
      // }

    ],

    // ------------------------------------
    // DETAILS AND APPLICATIONS
    // ------------------------------------

    /*
     * Use this gallery for close-ups,
     * texture details, and graphic
     * applications.
     *
     * Each entry can have:
     *
     * title
     * category
     * description
     * image
     * background
     * fit
     * layout
     *
     * layout:
     *   "half" or "full"
     *
     * Entries without image paths
     * will not be displayed.
     */

    details: [

      // Example:
      //
      // {
      //   title: "Pattern Detail",
      //   category: "Close-up",
      //   description:
      //     "A closer look at the pattern.",
      //   image: "assets/graphics/detail.jpg",
      //   background: "#F0EDE6",
      //   fit: "cover",
      //   layout: "half"
      // }

    ],

    // ------------------------------------
    // GRAPHIC USAGE GUIDELINES
    // ------------------------------------

    /*
     * Add only approved rules.
     *
     * Each rule creates one card.
     *
     * Rules are optional.
     *
     * Example:
     *
     * {
     *   title: "Maintain Clear Space",
     *   description:
     *     "Keep sufficient space around
     *      the graphic motif."
     * }
     *
     * Avoid adding generic rules that
     * were not approved for the client.
     */

    guidelines: [

      // Add client-specific rules here.

    ]

  },

  // ========================================
  // OPTIONAL BRAND SECTIONS
  // ========================================

  // Enable or disable sections for each client.

  sections: {
    overview: true,
    strategy: true,
    logo: true,
    colors: true,
    typography: true,
    graphics: true,
    photography: true,
    layout: true,
    voice: true,
    applications: true,
    packaging: false,
    motion: false,
    resources: true
  }

};
