
/*
 * BRAND HUB — MAIN APPLICATION
 * Step 17.7: Connect client configuration
 */

document.addEventListener("DOMContentLoaded", () => {
  // Make sure the configuration is available
  if (typeof BRAND_CONFIG === "undefined") {
    console.error("Brand configuration not found.");
    return;
  }

  const config = BRAND_CONFIG;

  // Update brand information
  document.title = `${config.brand.name} — Brand Hub`;

  document.getElementById("brand-name").textContent =
    config.brand.name;

  document.getElementById("sidebar-brand").textContent =
    config.brand.name;

  document.getElementById("brand-tagline").textContent =
    config.brand.tagline;

  // Apply selected theme
  document.body.dataset.theme = config.theme;

  // Hide disabled sections from navigation
  document.querySelectorAll(".nav-link").forEach(link => {
    const sectionId = link.getAttribute("href").replace("#", "");

    if (config.sections[sectionId] === false) {
      link.style.display = "none";
    }
  });

  // Hide Resources in public showcase mode
  if (config.publishingMode === "showcase") {
    const resourcesLink =
      document.querySelector('a[href="#resources"]');

    if (resourcesLink) {
      resourcesLink.style.display = "none";
    }
  }

  console.log("Brand Hub loaded:", config.brand.name);
});
