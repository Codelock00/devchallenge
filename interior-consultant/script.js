document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav ul");

  // Création de la classe pour le menu ouvert
  menuToggle.addEventListener("click", function () {
    this.classList.toggle("active");
    nav.classList.toggle("open");
  });

  // Fermer le menu lorsqu'on clique sur un lien
  document.querySelectorAll(".nav ul li a").forEach((link) => {
    link.addEventListener("click", function () {
      menuToggle.classList.remove("active");
      nav.classList.remove("open");
    });
  });
});
