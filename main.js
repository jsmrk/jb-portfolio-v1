// To make the navigation stick when scrolling
const sectionHeroEl = document.querySelector(".hero-section");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    } else {
      document.body.classList.remove("sticky");
    }
  },
  {
    // in the viewport
    root: null,
    threshold: 0,
    rootMargin: "90px",
  }
);
obs.observe(sectionHeroEl);

// Smooth scrolling animation for all browsers within main-nav
const mainNav = document.querySelector(".main-nav");

if (mainNav) {
  const allLinks = mainNav.querySelectorAll("a:link");
  allLinks.forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      const href = link.getAttribute("href");

      // to scroll back to top
      if (href === "#") {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }

      // Scroll to other links section
      if (href !== "#" && href.startsWith("#")) {
        const sectionEl = document.querySelector(href);
        sectionEl.scrollIntoView({
          behavior: "smooth",
        });
      }

      // to close mobile nav after clicking links to section
      if (link.classList.contains("main-nav-link")) {
        headerEl.classList.toggle("nav-open");
      }
    });
  });
}

// Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});
