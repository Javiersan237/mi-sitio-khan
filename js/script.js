// ===== Menú activo según la página actual =====
document.addEventListener("DOMContentLoaded", () => {
    const paginaActual = window.location.pathname.split("/").pop() || "index.html";
    const enlaces = document.querySelectorAll(".menu a");

    enlaces.forEach(enlace => {
        const href = enlace.getAttribute("href");
        if (href === paginaActual) {
            enlace.classList.add("activo");
        }
    });

    console.log("✅ Sitio cargado correctamente");
});

// ===== Pequeña animación de bienvenida =====
window.addEventListener("load", () => {
    const hero = document.querySelector(".hero");
    if (hero) {
        hero.style.opacity = "0";
        hero.style.transition = "opacity 0.8s ease";
        setTimeout(() => { hero.style.opacity = "1"; }, 100);
    }
});