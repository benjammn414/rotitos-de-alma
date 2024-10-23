document.addEventListener("DOMContentLoaded", function () {
    const botonEnviar = document.getElementById('button'); 
    if (botonEnviar) {
      botonEnviar.addEventListener('click', function () {
        const nombres = document.getElementById('nombres').value.trim();
        const apellidos = document.getElementById('apellidos').value.trim();
        const telefonos = document.getElementById('telefonos').value.trim();
        const correos = document.getElementById('correos').value.trim();
        const direccion = document.getElementById('direccion').value.trim();
        const asuntos = document.getElementById('asuntos').value.trim();
        if (!nombres || !apellidos || !telefonos || !correos) {
          alert("Por favor, completa todos los campos obligatorios.");
          return;
        }
        const textoMensaje = `
  Formulario de Contacto:
  - Nombre: ${nombres} ${apellidos}
  - Teléfono: ${telefonos}
  - Correo: ${correos}
  - Dirección: ${direccion || 'N/A'}
  - Asuntos: ${asuntos || 'N/A'}
        `;
        const mensajeCodificado = encodeURIComponent(textoMensaje.trim());
        const numeroWhatsApp = "5491124515763"; 
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
        window.open(urlWhatsApp, '_blank');
      });
    } else {
      console.error("El botón no se encontró.");
    }
  });