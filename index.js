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
