 // Obtener el elemento del video
 const videoElement = document.getElementById("videoSrc");

 // Obtener el marcador
 const markerVideo = document.getElementById("markerVideo");

 // Event listener cuando el marcador se detecta
 markerVideo.addEventListener('markerFound', () => {
     videoElement.play(); // Reproducir el video
 });

 // Event listener cuando el marcador se pierde
 markerVideo.addEventListener('markerLost', () => {
     videoElement.pause(); // Pausar el video
 });