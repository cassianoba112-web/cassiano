// ===== Coloca o ano atual no rodapé =====
document.getElementById("ano").textContent = new Date().getFullYear();

// ===== Menu do celular =====
const botao = document.querySelector(".menu-botao");
const menu = document.querySelector(".menu");

// Ao clicar no ☰, abre ou fecha o menu
botao.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", aberto);
});

// Ao clicar em um link do menu, fecha o menu
menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        menu.classList.remove("aberto");
        botao.setAttribute("aria-expanded", false);
    });
});
