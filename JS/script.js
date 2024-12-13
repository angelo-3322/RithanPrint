/*document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Gracias por contactarnos. Te responderemos pronto.');
});*/
// Al enviar el formulario
// Inicializar EmailJS con tu User ID
// Inicializar EmailJS con tu User ID
// Inicializar EmailJS con tu User ID (public key) // Sustituye por tu public key

// Escuchar el evento submit del formulario
const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

const serviceID = 'service_74o3pjq';
const templateID = 'template_e69mdrk';


emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
    btn.value = 'Send Email';
    alert('Sent!');
    }, (err) => {
    btn.value = 'Send Email';
    alert(JSON.stringify(err));
    });
});



    /* Enviar el correo utilizando EmailJS
    emailjs.send("service_ah7r08p", "template_e69mdrk", {
        from_nombre: nombre,  // Parametro con nombre 'from_nombre'
        from_correo: correo,  // Parametro con nombre 'from_correo'
        mensaje: mensaje      // Parametro con nombre 'mensaje'
    })*/







