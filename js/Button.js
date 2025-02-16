document.getElementById("stickyButton").onclick = function() {
    // Capturar solo el área visible de la ventana
    html2canvas(document.body, { 
      x: window.scrollX, // El desplazamiento en el eje X
      y: window.scrollY, // El desplazamiento en el eje Y
      width: window.innerWidth, // El ancho visible de la ventana
      height: window.innerHeight, // La altura visible de la ventana
    }).then(function(canvas) {
      // Convertir el canvas a una imagen en formato PNG
      var imgData = canvas.toDataURL("image/png");
  
      // Crear un enlace temporal para descargar la imagen
      var link = document.createElement('a');
      link.href = imgData;
      link.download = 'screenshot.png';
  
      // Simular el clic en el enlace para descargar la imagen
      link.click();
    });
  };
  