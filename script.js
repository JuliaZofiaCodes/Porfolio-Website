document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".links");
  
    // Kliknięcie w ikonę hamburgera rozwija/zamyka menu
    hamburger.addEventListener("click", function (event) {
      event.stopPropagation(); // Zapobiega zamknięciu menu od razu po otwarciu
      menu.classList.toggle("show");
    });
  
    // Kliknięcie poza menu zamyka je
    document.addEventListener("click", function (event) {
      if (!menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove("show");
      }
    });
  });
  