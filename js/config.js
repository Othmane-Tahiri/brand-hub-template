
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
  // LOGO COLOR COMPATIBILITY
  // ========================================

  /*
   * Each object creates one compatibility card.
   *
   * background = outer card color
   * logoColor  = inner logo/square color
   * label      = combination name
   *
   * Add or remove objects to change the
   * number of cards for each client.
   *
   * These are sample combinations only.
   * Replace them with approved brand pairings.
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
