function controlarVideoConMarcador(videoId, marcadorId) {
    // Obtener el elemento del video
    const videoElement = document.getElementById(videoId);

    // Obtener el marcador
    const markerVideo = document.getElementById(marcadorId);

    // Event listener cuando el marcador se detecta
    markerVideo.addEventListener('markerFound', () => {
        videoElement.play(); // Reproducir el video
    });

    // Event listener cuando el marcador se pierde
    markerVideo.addEventListener('markerLost', () => {
        videoElement.pause(); // Pausar el video
    });
}

controlarVideoConMarcador("video_DB", "markerVideo_DB");
controlarVideoConMarcador("video_CB", "markerVideo_CB");
controlarVideoConMarcador("video_MC", "markerVideo_MC");
controlarVideoConMarcador("video_VB", "markerVideo_VB");
controlarVideoConMarcador("video_AE", "markerVideo_AE");
