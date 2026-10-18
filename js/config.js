
/*
 * BRAND HUB — CLIENT CONFIGURATION
 * Edit this file for each branding client.
 */

const BRAND_CONFIG = {
  // Basic brand information
  brand: {
    name: "Sample Brand",
    tagline: "A distinctive brand identity",
    description: "Explore our visual identity system."
  },

  // Available themes:
  // "swiss", "editorial", "dashboard"
  theme: "swiss",

  // Available publishing modes:
  // "client", "showcase"
  publishingMode: "client",

  // Brand colors (sample values)
  colors: {
    primary: "#202020",
    secondary: "#F0EDE6",
    accent: "#B68B59",
    background: "#FFFFFF",
    text: "#202020"
  },

  // Enable or disable sections for each client
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
