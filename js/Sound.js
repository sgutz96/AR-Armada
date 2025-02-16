// Obtener el elemento del video 
const audioElement = document.getElementById("AudioSrc");
// Obtener el marcador
const markerSound = document.getElementById("markerSound");

// Event listener cuando el marcador se detecta
markerSound.addEventListener('markerFound', () => {
   audioElement.play(); // Reproducir el video
});

// Event listener cuando el marcador se pierde
markerSound.addEventListener('markerLost', () => {
   audioElement.pause(); // Pausar el videox   
});