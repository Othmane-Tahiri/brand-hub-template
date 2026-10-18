
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

  // Highlight the section currently being viewed
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
    .filter(item => item.section);

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

  window.addEventListener("scroll", updateActiveSection, {
    passive: true
  });

  window.addEventListener("resize", updateActiveSection);

  updateActiveSection();

  console.log("Brand Hub loaded:", config.brand.name);
});
