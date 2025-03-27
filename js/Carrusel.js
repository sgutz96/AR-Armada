  let time = 0;  // Tiempo inicial
  const radius = 2;  // Radio del círculo (tamaño del carrusel)
  const totalImages = 3;  // Número total de imágenes en el carrusel

  // Obtén todas las imágenes del carrusel
  const carouselImages = [
    document.getElementById("image1"),
    document.getElementById("image2"),
    document.getElementById("image3")
  ];

  function animateCarousel() {
    // Incrementa el tiempo
    time += 0.001;

    // Calcula el ángulo en función del tiempo
    const angle = time * Math.PI * 2;  // 2 * PI para completar un círculo

    // Para cada imagen, asigna una posición basada en seno y coseno
    carouselImages.forEach((image, index) => {
      const angleOffset = (index / totalImages) * Math.PI * 2;  // Espaciado equidistante entre las imágenes
      const x = radius * Math.cos(angle + angleOffset);  // Calcula la posición en el eje X
      const y = radius * Math.sin(angle + angleOffset);  // Calcula la posición en el eje Y

      // Asigna la nueva posición de la imagen
      image.setAttribute('position', `${x} 0 ${y}`);
    });

    // Vuelve a llamar a la función de animación en el siguiente fotograma
    requestAnimationFrame(animateCarousel);
  }

  // Llamar a la función para iniciar la animación
  animateCarousel();
