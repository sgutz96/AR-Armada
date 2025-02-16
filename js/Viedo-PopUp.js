window.onload = function() {
    var videoPopup = document.getElementById('video-popup');
    var video = document.getElementById('video-banner');
    var contenido = document.querySelector('.contenido');
    var body = document.body;

    // Bloquear el scroll directamente en JavaScript
    function bloquearScroll(e) {
        e.preventDefault();
        e.stopPropagation();
        return false;
    }

    // Función para habilitar el scroll
    function habilitarScroll() {
        window.removeEventListener('wheel', bloquearScroll, { passive: false });
        window.removeEventListener('touchmove', bloquearScroll, { passive: false });
        window.removeEventListener('keydown', bloquearScrollTeclado);
    }

    // Bloquear el scroll al cargar la página
    window.addEventListener('wheel', bloquearScroll, { passive: false });
    window.addEventListener('touchmove', bloquearScroll, { passive: false });
    window.addEventListener('keydown', bloquearScrollTeclado);

    function bloquearScrollTeclado(e) {
        // Bloquear la tecla de "barra espaciadora", "arriba", "abajo", "page up", "page down", etc.
        if (['ArrowUp', 'ArrowDown', 'Space', 'PageUp', 'PageDown'].includes(e.key)) {
            e.preventDefault();
        }
    }

    // Intentar reproducir el video automáticamente
    video.play().catch(function(error) {
        console.error("Error al intentar reproducir el video:", error);
    });

    // Tiempo de duración del video en milisegundos (ajustar según la longitud de tu video)
    var tiempoDesvanecimiento = (video.duration * 1000) - 2000; // 2 segundos antes de que termine el video

    // Retrasar la opacidad hasta que el video se acerque al final
    setTimeout(function() {
        videoPopup.classList.add('fade-out'); // Aplicar clase de desvanecimiento
    }, tiempoDesvanecimiento);

    // Cuando el video termine, cerrar el popup y permitir scroll
    video.onended = function() {
        setTimeout(function() {
            // Permitir el scroll de nuevo
            habilitarScroll();
            videoPopup.style.display = 'none'; // Ocultar el popup
            // contenido.style.display = 'block'; // Mostrar el contenido de la página
        }, 200); // Esperar 2 segundos para completar el desvanecimiento
    };
};
