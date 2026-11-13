
// =====================================
// 1. ESPERAR A QUE CARGUE LA PÁGINA
// =====================================

document.addEventListener("DOMContentLoaded", function () {

    // =====================================
    // 2. MODO OSCURO Y MODO CLARO
    // =====================================

    const themeButton = document.getElementById("theme-toggle");
    const themeIcon = themeButton.querySelector("i");

    // Recuperar el modo guardado
    const savedTheme = localStorage.getItem("theme");

    // Aplicar el modo guardado
    if (savedTheme === "light") {
        document.body.classList.add("light-mode");
        themeIcon.classList.replace("fa-moon", "fa-sun");
    }

    // Cambiar el modo al presionar el botón
    themeButton.addEventListener("click", function () {

        document.body.classList.toggle("light-mode");

        if (document.body.classList.contains("light-mode")) {

            themeIcon.classList.replace("fa-moon", "fa-sun");

            localStorage.setItem("theme", "light");

        } else {

            themeIcon.classList.replace("fa-sun", "fa-moon");

            localStorage.setItem("theme", "dark");

        }

    });


    // =====================================
    // 3. FORMULARIO DE CONTACTO
    // =====================================

    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("nombre").value;

        alert("¡Gracias, " + name + "! Tu mensaje ha sido recibido. 📧");

        contactForm.reset();

    });


    // =====================================
    // 4. ANIMACIÓN DE LOS ENLACES
    // =====================================

    const menuLinks = document.querySelectorAll(".nav-link");

    menuLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const menu = document.getElementById("menu");

            menu.classList.remove("show");

        });

    });

});
// =================================
// ANIMACIONES AL DESPLAZARSE
// =================================

document.addEventListener("DOMContentLoaded", function () {

    // Elementos que tendrán animaciones
    const elementos = document.querySelectorAll(
        ".section-title, .skill-card, .project-card, " +
        ".experience-card, .contact-description, .social-section"
    );

    // Activar las animaciones
    document.body.classList.add("animations-ready");

    elementos.forEach(function (elemento) {
        elemento.classList.add("reveal");
    });

    // Detectar cuando los elementos aparecen en pantalla
    const observador = new IntersectionObserver(function (entradas) {

        entradas.forEach(function (entrada) {

            if (entrada.isIntersecting) {
                entrada.target.classList.add("active");
            } else {
                entrada.target.classList.remove("active");
            }

        });

    }, {
        threshold: 0.15
    });

    // Observar cada elemento
    elementos.forEach(function (elemento) {
        observador.observe(elemento);
    });

});