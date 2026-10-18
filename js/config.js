
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
   * STEP 19.5 — TEMPORARY GALLERY TEST
   *
   * These photographs are examples only.
   * They are not approved client assets.
   *
   * Replace the images and descriptions
   * when preparing a real brand guideline.
   *
   * The system supports:
   *
   * - One optional featured photograph
   * - Unlimited photography categories
   * - Unlimited images per category
   * - Unlimited editorial gallery images
   * - Unlimited art-direction guidelines
   * - Unlimited Do / Don't comparisons
   *
   * Empty collections are automatically
   * hidden by the Photography renderer.
   *
   * For real client projects, use paths
   * such as:
   *
   * "assets/photography/product-01.jpg"
   *
   * Recommended formats:
   * JPG, PNG, WebP, AVIF.
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
     * enabled: true / false
     * fit: "cover" / "contain"
     *
     * Use a high-resolution landscape image.
     *
     * This test photograph is from Unsplash.
     */

    featured: {
      enabled: true,

      title: "A Sense of Place",
      category: "Signature Photography / Test",

      description:
        "A defining visual atmosphere built through natural light, considered composition, and a quiet sense of storytelling.",

      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1800&auto=format&fit=crop&q=85",

      alt:
        "Atmospheric forest landscape with soft natural light",

      fit: "cover"
    },

    // ------------------------------------
    // 02 — PHOTOGRAPHY CATEGORIES
    // ------------------------------------

    /*
     * Each category can contain any
     * number of photographs.
     *
     * Each image creates a gallery card.
     *
     * You can add more categories or
     * more images without changing HTML.
     *
     * Categories below are test examples.
     */

    categories: [

      {
        title: "Product Photography",

        description:
          "Objects photographed with clarity, material sensitivity, and careful control of light.",

        images: [

          {
            title: "Object Study",
            description:
              "A clean, minimal approach that allows the subject to remain the focus.",

            image:
              "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&auto=format&fit=crop&q=85",

            alt:
              "Red sneaker photographed against a red background",

            fit: "cover"
          },

          {
            title: "Product Detail",
            description:
              "Close framing highlights the design, surface, and character of the object.",

            image:
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1000&auto=format&fit=crop&q=85",

            alt:
              "Minimal wristwatch photographed on a light background",

            fit: "cover"
          }

        ]
      },

      {
        title: "Environment Photography",

        description:
          "Spaces and environments captured with a strong sense of composition, atmosphere, and scale.",

        images: [

          {
            title: "Architectural Rhythm",
            description:
              "Structured lines and quiet geometry establish a strong visual rhythm.",

            image:
              "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000&auto=format&fit=crop&q=85",

            alt:
              "Modern white architectural building photographed from below",

            fit: "cover"
          },

          {
            title: "Natural Atmosphere",
            description:
              "An environmental image shaped by soft light and natural texture.",

            image:
              "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1000&auto=format&fit=crop&q=85",

            alt:
              "Warm sunlight falling across an atmospheric landscape",

            fit: "cover"
          }

        ]
      },

      {
        title: "Lifestyle Photography",

        description:
          "Everyday moments presented with an authentic, understated editorial quality.",

        images: [

          {
            title: "Human Connection",
            description:
              "Natural expressions and authentic moments create a sense of personality.",

            image:
              "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&auto=format&fit=crop&q=85",

            alt:
              "Group of friends together outdoors",

            fit: "cover"
          }

        ]
      }

    ],

    // ------------------------------------
    // 03 — EDITORIAL PHOTOGRAPHY GALLERY
    // ------------------------------------

    /*
     * Each object creates one image card.
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
     * Change the layout value to test
     * different editorial compositions.
     *
     * You can add unlimited photographs.
     */

    gallery: [

      {
        title: "The Atmosphere",
        category: "Landscape / Test",

        description:
          "A full-width photograph establishes mood and gives the editorial gallery a strong visual opening.",

        image:
          "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1800&auto=format&fit=crop&q=85",

        alt:
          "Mountain landscape reflected in a calm lake",

        fit: "cover",
        layout: "full"
      },

      {
        title: "Material & Form",
        category: "Architecture / Test",

        description:
          "Architectural structure, repetition, and light create a considered composition.",

        image:
          "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000&auto=format&fit=crop&q=85",

        alt:
          "Minimal modern architecture",

        fit: "cover",
        layout: "half"
      },

      {
        title: "The Human Element",
        category: "Lifestyle / Test",

        description:
          "Human presence introduces warmth and emotional connection.",

        image:
          "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1000&auto=format&fit=crop&q=85",

        alt:
          "People sharing a moment outdoors",

        fit: "cover",
        layout: "half"
      },

      {
        title: "A Study in Light",
        category: "Atmosphere / Test",

        description:
          "Soft light and natural shadows create a quiet, cinematic photographic direction.",

        image:
          "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1400&auto=format&fit=crop&q=85",

        alt:
          "Sunlight filtering through a forest",

        fit: "cover",
        layout: "split"
      },

      {
        title: "The Natural World",
        category: "Environment / Test",

        description:
          "A carefully composed natural scene provides visual balance and breathing room.",

        image:
          "https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=1400&auto=format&fit=crop&q=85",

        alt:
          "Soft sunlight over a natural landscape",

        fit: "cover",
        layout: "split-reverse"
      },

      {
        title: "Quiet Geometry",
        category: "Composition / Test",

        description:
          "A wide photographic composition explores balance, negative space, and architectural form.",

        image:
          "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=1600&auto=format&fit=crop&q=85",

        alt:
          "Minimal geometric architecture",

        fit: "cover",
        layout: "wide"
      }

    ],

    // ------------------------------------
    // 04 — ART DIRECTION GUIDELINES
    // ------------------------------------

    /*
     * Add or remove any number of rules.
     *
     * These are sample guidelines only.
     *
     * Actual art direction must be
     * defined for each branding client.
     */

    artDirection: [

      {
        title: "Lighting",
        description:
          "Test direction: prioritize natural or carefully controlled directional light. Preserve depth through subtle highlights and believable shadows."
      },

      {
        title: "Composition",
        description:
          "Test direction: create deliberate compositions with clear visual hierarchy, balanced framing, and intentional negative space."
      },

      {
        title: "Color & Tone",
        description:
          "Test direction: maintain a consistent color atmosphere across photographs. Avoid uncontrolled shifts in saturation and white balance."
      },

      {
        title: "Mood & Emotion",
        description:
          "Test direction: select imagery that communicates an authentic emotional quality rather than an overly staged appearance."
      },

      {
        title: "Background & Styling",
        description:
          "Test direction: choose backgrounds and supporting objects that complement the subject without creating unnecessary visual distractions."
      },

      {
        title: "Retouching",
        description:
          "Test direction: preserve realistic texture, natural contrast, and material detail. Avoid excessive sharpening or artificial effects."
      }

    ],

    // ------------------------------------
    // 05 — PHOTOGRAPHY DO / DON'T
    // ------------------------------------

    /*
     * Each comparison includes:
     *
     * approved = What to use
     * avoid    = What not to use
     *
     * Both image paths are required
     * for a comparison to appear.
     *
     * These are layout-testing examples,
     * not approved client standards.
     *
     * Replace them with carefully selected
     * visual comparisons for each client.
     */

    comparisons: [

      {
        title: "Composition",

        approved: {
          image:
            "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1000&auto=format&fit=crop&q=85",

          alt:
            "Modern architecture with structured lines and clear composition",

          title: "Intentional Framing",

          description:
            "DO — Use deliberate framing, balanced geometry, and clear focal points."
        },

        avoid: {
          image:
            "https://images.unsplash.com/photo-1500534623283-312aade485b7?w=1000&auto=format&fit=crop&q=85",

          alt:
            "Broad natural landscape used as a comparison placeholder",

          title: "Unfocused Composition",

          description:
            "DON'T — Avoid imagery without a clear subject or intentional visual hierarchy."
        }
      },

      {
        title: "Lighting",

        approved: {
          image:
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1000&auto=format&fit=crop&q=85",

          alt:
            "Forest with directional natural light",

          title: "Natural Depth",

          description:
            "DO — Preserve natural light transitions, atmospheric depth, and realistic shadows."
        },

        avoid: {
          image:
            "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1000&auto=format&fit=crop&q=85",

          alt:
            "Highly saturated red product photograph used as a test comparison",

          title: "Uncontrolled Saturation",

          description:
            "DON'T — Avoid color treatments that conflict with the intended photographic atmosphere."
        }
      }

    ]

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
