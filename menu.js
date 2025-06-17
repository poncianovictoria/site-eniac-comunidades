// script.js
document.addEventListener("DOMContentLoaded", () => {
    const btnMenu = document.getElementById("btn-menu");
    const menuMobile = document.getElementById("menu-mobile");
    const btnFechar = document.getElementById("btn-fechar");
    const overlay = document.getElementById("overlay-menu");

    btnMenu.addEventListener("click", () => {
        menuMobile.classList.add("ativo");
        overlay.style.display = "block";
        document.body.classList.add("no-scroll");
    });

    const fecharMenu = () => {
        menuMobile.classList.remove("ativo");
        overlay.style.display = "none";
        document.body.classList.remove("no-scroll");
    };

    btnFechar.addEventListener("click", fecharMenu);
    overlay.addEventListener("click", fecharMenu);

    btnFechar.addEventListener("click", () => {
        menuMobile.classList.remove("ativo");
        overlay.style.display = "none";
    });

    // Fechar menu clicando no overlay
    overlay.addEventListener("click", () => {
        menuMobile.classList.remove("ativo");
        overlay.style.display = "none";
        document.body.classList.remove("no-scroll"); // libera o scroll
    });
});
