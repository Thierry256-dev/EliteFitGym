// Navbar scroll effect
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 100) {
    navbar.classList.add("bg-secondary", "shadow-lg");
    navbar.classList.remove("py-4");
    navbar.classList.add("py-2");
  } else {
    navbar.classList.remove("bg-secondary", "shadow-lg");
    navbar.classList.remove("py-2");
    navbar.classList.add("py-4");
  }
});

// Mobile menu toggle
const mobileMenuBtn = document.getElementById("mobile-menu");
const closeMenuBtn = document.getElementById("close-menu");
const mobileNav = document.getElementById("mobile-nav");

mobileMenuBtn.addEventListener("click", function () {
  mobileNav.classList.remove("hidden");
});

closeMenuBtn.addEventListener("click", function () {
  mobileNav.classList.add("hidden");
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: "smooth",
      });

      // Close mobile menu if open
      mobileNav.classList.add("hidden");
    }
  });
});
