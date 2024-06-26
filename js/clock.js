document.addEventListener("DOMContentLoaded", function () {
  // Función para actualizar el contador cada segundo
  function updateCountdown() {
    var countdownDate = new Date("2024-10-12T00:00:00Z").getTime(); // Fecha y hora del 12 de octubre de 2024 a las 00:00 UTC

    var now = new Date().getTime(); // Tiempo actual en milisegundos

    var distance = countdownDate - now; // Calcula la diferencia de tiempo

    // Calcula días, horas, minutos y segundos restantes
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Actualiza el contenido del elemento #countdown en el HTML
    var countdownElement = document.getElementById("clock_countdown");
    if (countdownElement) {
      countdownElement.innerHTML =
        '<div class="countdown_time">' +
        '<div class="single_countdown"> Faltan ' +
        days +
        "<span> Días</span></div>" +
        '<div class="single_countdown">' +
        hours +
        ":" +
        minutes +
        ":" +
        seconds +
        "</div>";
    }

    // Actualiza el contador cada segundo
    setTimeout(updateCountdown, 1000);
  }

  // Inicia el contador al cargar la página
  updateCountdown();

  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modalImage");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".gallery img").forEach((img) => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  closeBtn.addEventListener("click", function () {
    modal.style.display = "none";
  });

  modal.addEventListener("click", function (e) {
    if (e.target !== modalImg) {
      modal.style.display = "none";
    }
  });
});

window.addEventListener("load", function () {
  document.getElementById("loader").style.display = "none";
  document.getElementById("content_loader").style.display = "block";
});
