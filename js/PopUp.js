// Detectar la visibilidad del marcador
const markerPopUp = document.getElementById('markerPopUp_Web');
const popup = document.getElementById('popupAR');
const overlay = document.getElementById('overlay');

// Función para mostrar el pop-up y panel
markerPopUp.addEventListener('markerFound', () => {
  overlay.style.display = 'block'; // Muestra el panel oscuro
  popup.style.display = 'block'; // Muestra el pop-up
});

// Event listener cuando el marcador se pierde
markerPopUp.addEventListener('markerLost', () => {
});

// Función para cerrar el pop-up y panel
function closePopup() {
  overlay.style.display = 'none'; // Oculta el panel oscuro
  popup.style.display = 'none'; // Oculta el pop-up
}