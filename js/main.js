document.addEventListener("DOMContentLoaded", function () {
  const flyInElements = document.querySelectorAll(".fly-in");
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });
    
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          // Optional: hentikan pengamatan setelah elemen terlihat
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.1, // Picu animasi saat 10% elemen terlihat
    }
  );

  flyInElements.forEach((element) => {
    observer.observe(element);
  });
});
