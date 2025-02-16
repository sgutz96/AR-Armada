    // Detectar la visibilidad del marcador
    const markerPopUp = document.querySelector('#markerPopUp');
    const popup = document.querySelector('#popup');
    const overlay = document.querySelector('#overlay');

    // Función para mostrar el pop-up y panel
    markerPopUp.addEventListener('markerFound', () => {
      overlay.style.display = 'block'; // Muestra el panel oscuro
      popup.style.display = 'block'; // Muestra el pop-up
    });

    // Función para cerrar el pop-up y panel
    function closePopup() {
      overlay.style.display = 'none'; // Oculta el panel oscuro
      popup.style.display = 'none'; // Oculta el pop-up
    }