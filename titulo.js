const texto = " Bem-vindo!";
const alvo = document.getElementById("digitando");

let i = 0;

function digitar() {
    if (i <= texto.length) {
        alvo.textContent = texto.substring(0, i);
        i++;
        setTimeout(digitar, 150);
    } else {
        setTimeout(() => {
            i = 0;
            alvo.textContent = "";
            digitar();
        }, 1000);
    }
}

digitar();
