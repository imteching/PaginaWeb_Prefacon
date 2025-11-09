document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.querySelector(".overlay");
  const imgSlideshow = document.getElementById("img_slideshow");
  const btnClose = document.getElementById("close-button");
  const btnAdelante = document.querySelector(".adelante");
  const btnAtras = document.querySelector(".atras");
  const galleryImages = document.querySelectorAll(".gallery-img");

  let currentIndex = 0;

  // Mostrar imagen seleccionada
  galleryImages.forEach((img, index) => {
    img.addEventListener("click", () => {
      currentIndex = index;
      mostrarImagen();
    });
  });

  function mostrarImagen() {
    const imagenSeleccionada = galleryImages[currentIndex];
    imgSlideshow.src = imagenSeleccionada.src;
    overlay.classList.add("activo");
  }

  // Cerrar lightbox
  btnClose.addEventListener("click", () => overlay.classList.remove("activo"));

  // Navegar hacia adelante
  btnAdelante.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % galleryImages.length;
    mostrarImagen();
  });

  // Navegar hacia atrás
  btnAtras.addEventListener("click", () => {
    currentIndex =
      (currentIndex - 1 + galleryImages.length) % galleryImages.length;
    mostrarImagen();
  });

  // Cerrar al hacer clic fuera de la imagen
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) overlay.classList.remove("activo");
  });

  // Cerrar con tecla ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") overlay.classList.remove("activo");
  });
});
