
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
   * Add or remove approved colors freely.
   *
   * name = Display name
   * role = Role in the identity
   * hex  = Exact HEX color
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
   * generate: true creates tonal suggestions.
   *
   * generate: false uses exact shades
   * provided in the shades array.
   *
   * Generated shades are not automatically
   * approved brand colors.
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
   * Add or remove combinations as needed.
   *
   * background = Card background
   * logoColor  = Logo preview color
   * label      = Combination name
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
   * Add or remove font objects as needed.
   *
   * Each font supports:
   *
   * name, role, category, family,
   * source, specimen, description,
   * and approved weights.
   *
   * The source is an optional stylesheet URL.
   * Font files must be available to the site.
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
   * FULLY CLIENT-CONFIGURABLE
   *
   * Every client may have:
   *
   * - Zero or one featured graphic
   * - Any number of gallery assets
   * - Any number of detail images
   * - Any number of usage guidelines
   *
   * Add, remove, or reorder objects.
   *
   * The website adapts automatically.
   *
   * No HTML or JavaScript changes needed.
   *
   * ----------------------------------------
   * TEST MODE
   * ----------------------------------------
   *
   * The temporary images below come from
   * an external placeholder service.
   *
   * They test layout, spacing, and rendering.
   *
   * They are NOT approved client artwork.
   *
   * Replace them with real asset paths
   * before publishing a client project.
   *
   * Example real asset path:
   *
   * "assets/graphics/pattern-01.svg"
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
    // FEATURED SIGNATURE GRAPHIC
    // ------------------------------------

    /*
     * enabled:
     * true = Display featured artwork
     * false = Hide featured artwork
     *
     * fit:
     * "cover" or "contain"
     *
     * labelTheme:
     * "light" or "dark"
     */

    featured: {
      enabled: true,

      title: "Signature Graphic",
      category: "Visual Identity / Test Artwork",

      description:
        "A temporary composition used to test the large editorial artwork presentation.",

      image:
        "https://placehold.co/1600x900/202020/B68B59.png?text=SIGNATURE+GRAPHIC",

      background: "#202020",
      fit: "contain",

      label: "TEST ARTWORK",
      labelTheme: "light"
    },

    // ------------------------------------
    // GRAPHIC ASSET GALLERY
    // ------------------------------------

    /*
     * Each object creates ONE graphic card.
     *
     * To add a graphic:
     * Copy an object and change its content.
     *
     * To remove a graphic:
     * Delete its object.
     *
     * To reorder:
     * Move objects up or down.
     *
     * Supported layouts:
     *
     * "full"
     * "half"
     * "wide"
     * "tall"
     * "split"
     * "split-reverse"
     *
     * There is NO fixed number of assets.
     */

    assets: [

      {
        title: "Primary Pattern",
        category: "Pattern / Test",

        description:
          "A full-width placeholder to test the presentation of a primary brand pattern.",

        image:
          "https://placehold.co/1600x900/F0EDE6/202020.png?text=PRIMARY+PATTERN",

        background: "#F0EDE6",
        fit: "cover",
        layout: "full",

        label: "GRAPHIC 01",
        labelTheme: "light"
      },

      {
        title: "Secondary Motif",
        category: "Graphic Motif / Test",

        description:
          "A supporting graphic displayed in a half-width composition.",

        image:
          "https://placehold.co/900x1100/202020/B68B59.png?text=SECONDARY+MOTIF",

        background: "#202020",
        fit: "contain",
        layout: "half",

        label: "GRAPHIC 02",
        labelTheme: "light"
      },

      {
        title: "Geometric Element",
        category: "Shape / Test",

        description:
          "An additional visual element to test how the gallery adapts to an uneven number of assets.",

        image:
          "https://placehold.co/900x1100/B68B59/202020.png?text=GEOMETRIC+ELEMENT",

        background: "#B68B59",
        fit: "contain",
        layout: "half",

        label: "GRAPHIC 03",
        labelTheme: "dark"
      }

    ],

    // ------------------------------------
    // DETAILS AND APPLICATIONS
    // ------------------------------------

    /*
     * Add close-ups, textures, or real
     * applications of graphic elements.
     *
     * Each object creates one detail card.
     *
     * layout:
     * "half" or "full"
     */

    details: [

      {
        title: "Graphic Detail",
        category: "Close-up / Test",

        description:
          "A placeholder for a close-up view of an approved brand graphic.",

        image:
          "https://placehold.co/1000x800/F0EDE6/202020.png?text=GRAPHIC+DETAIL",

        background: "#F0EDE6",
        fit: "cover",
        layout: "half"
      },

      {
        title: "Application Preview",
        category: "Application / Test",

        description:
          "A placeholder for showing how a graphic element works on a real brand application.",

        image:
          "https://placehold.co/1000x800/202020/B68B59.png?text=APPLICATION+PREVIEW",

        background: "#202020",
        fit: "cover",
        layout: "half"
      }

    ],

    // ------------------------------------
    // GRAPHIC USAGE GUIDELINES
    // ------------------------------------

    /*
     * These are example rules for testing.
     *
     * Replace them with approved client
     * guidelines before publishing.
     *
     * Add or remove as many as needed.
     */

    guidelines: [

      {
        title: "Preserve the Original Proportions",
        description:
          "Test guideline: do not stretch or distort the graphic element when placing it in a layout."
      },

      {
        title: "Use Approved Color Combinations",
        description:
          "Test guideline: apply graphic elements using the colors defined in the brand identity system."
      }

    ]

  },

  // ========================================
  // PHOTOGRAPHY SYSTEM
  // ========================================

  /*
   * Concept 02 — Editorial Photography Gallery
   *
   * FULLY CLIENT-CONFIGURABLE
   *
   * Each client can have:
   *
   * - Zero or one featured photograph
   * - Any number of photography categories
   * - Any number of images per category
   * - Any number of editorial gallery images
   * - Any number of art-direction guidelines
   * - Any number of Do / Don't comparisons
   *
   * Empty collections remain hidden once
   * the photography renderer is connected.
   *
   * IMAGE PATH EXAMPLE:
   *
   * "assets/photography/product-01.jpg"
   *
   * Upload actual image files to GitHub
   * before referencing their paths.
   *
   * Recommended image formats:
   * JPG, PNG, WebP, AVIF.
   *
   * Use optimized photographs to keep
   * the website fast on mobile.
   */

  photography: {

    // ------------------------------------
    // EDITORIAL INTRODUCTION
    // ------------------------------------

    intro: {
      eyebrow: "THE PHOTOGRAPHIC LANGUAGE",
      headline: "A world through our lens.",
      description:
        "A considered approach to imagery, balancing atmosphere, composition, lighting, and storytelling."
    },

    // ------------------------------------
    // 01 — FEATURED PHOTOGRAPHY
    // ------------------------------------

    /*
     * Set enabled to true and provide
     * an image to display the hero.
     *
     * enabled: true / false
     * fit: "cover" / "contain"
     *
     * Recommended source image:
     * Landscape, ideally 1600px or wider.
     */

    featured: {
      enabled: false,

      title: "Signature Photography",
      category: "Photography / Art Direction",

      description:
        "The defining photographic expression of the brand.",

      image: "",

      alt: "Signature brand photograph",

      fit: "cover"
    },

    // ------------------------------------
    // 02 — PHOTOGRAPHY CATEGORIES
    // ------------------------------------

    /*
     * Add or remove category objects freely.
     *
     * Each category can have any number
     * of photographs in its images array.
     *
     * A category can be:
     * Product, Lifestyle, Environment,
     * People, Architecture, Detail, etc.
     *
     * These names are examples only.
     *
     * Example category:
     *
     * {
     *   title: "Product",
     *   description: "Clean, considered product imagery.",
     *   images: [
     *     {
     *       image: "assets/photography/product-01.jpg",
     *       alt: "Product photographed on a neutral surface",
     *       title: "Product Study 01",
     *       fit: "cover"
     *     },
     *     {
     *       image: "assets/photography/product-02.jpg",
     *       alt: "Close-up of product materials",
     *       title: "Product Study 02",
     *       fit: "cover"
     *     }
     *   ]
     * }
     *
     * Categories without valid images
     * should be omitted by the renderer.
     */

    categories: [],

    // ------------------------------------
    // 03 — EDITORIAL PHOTOGRAPHY GALLERY
    // ------------------------------------

    /*
     * Add or remove individual photographs.
     *
     * Each object creates one gallery card.
     *
     * Supported layouts:
     *
     * "full"
     * "half"
     * "wide"
     * "tall"
     * "split"
     * "split-reverse"
     *
     * Use different layouts to create
     * a curated editorial rhythm.
     *
     * Example:
     *
     * {
     *   title: "The Details",
     *   category: "Detail Photography",
     *   description: "An intimate look at material and texture.",
     *   image: "assets/photography/detail-01.jpg",
     *   alt: "Close-up of natural material texture",
     *   fit: "cover",
     *   layout: "full"
     * }
     */

    gallery: [],

    // ------------------------------------
    // 04 — ART DIRECTION GUIDELINES
    // ------------------------------------

    /*
     * Each object creates one guideline card.
     *
     * Use only relevant directions
     * for the individual client.
     *
     * Example:
     *
     * {
     *   title: "Lighting",
     *   description:
     *     "Use soft directional lighting with natural shadows."
     * }
     *
     * Other possible topics:
     * Composition, Color, Mood,
     * Styling, Background, Retouching.
     */

    artDirection: [],

    // ------------------------------------
    // 05 — PHOTOGRAPHY DO / DON'T
    // ------------------------------------

    /*
     * Each object represents one comparison
     * between approved and avoided imagery.
     *
     * Both images are optional at the
     * configuration level, but the renderer
     * should show a comparison only when
     * both image paths are provided.
     *
     * Example:
     *
     * {
     *   title: "Lighting Direction",
     *
     *   approved: {
     *     image: "assets/photography/lighting-do.jpg",
     *     alt: "Product with soft directional lighting",
     *     title: "Directional Lighting",
     *     description: "Use intentional highlights and shadows."
     *   },
     *
     *   avoid: {
     *     image: "assets/photography/lighting-dont.jpg",
     *     alt: "Product under harsh flat lighting",
     *     title: "Flat Lighting",
     *     description: "Avoid flat, uncontrolled illumination."
     *   }
     * }
     */

    comparisons: []

  },

  // ========================================
  // OPTIONAL BRAND SECTIONS
  // ========================================

  /*
   * Enable or disable sections per client.
   *
   * true = Show
   * false = Hide
   */

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
