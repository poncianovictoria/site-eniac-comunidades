document.addEventListener("DOMContentLoaded", () => {
    const contadores = document.querySelectorAll('#Dados .card2 .contador:not(.pizza .contador)');
    const pizzas = document.querySelectorAll('#Dados .pizza');

    const duracaoAnimacao = 1000; // duração total da animação em ms (1s)

    const animarNumero = (contador, timestampStart) => {
        const valorFinal = +contador.getAttribute('data-valor');

        const animar = (timestamp) => {
            if (!timestampStart) timestampStart = timestamp;
            const tempoDecorrido = timestamp - timestampStart;
            const progresso = Math.min(tempoDecorrido / duracaoAnimacao, 1);
            const valorAtual = Math.floor(progresso * valorFinal);
            contador.textContent = valorAtual;

            if (progresso < 1) {
                requestAnimationFrame(animar);
            } else {
                contador.textContent = valorFinal;
            }
        };

        requestAnimationFrame(animar);
    };

    const animarPizza = (pizza, timestampStart) => {
        const contador = pizza.querySelector('.contador');
        const valorFinal = +pizza.getAttribute('data-valor');

        const animar = (timestamp) => {
            if (!timestampStart) timestampStart = timestamp;
            const tempoDecorrido = timestamp - timestampStart;
            const progresso = Math.min(tempoDecorrido / duracaoAnimacao, 1);
            const valorAtual = Math.floor(progresso * valorFinal);

            pizza.style.background = `conic-gradient(#43a43f 0% ${valorAtual}%, #ddd ${valorAtual}% 100%)`;
            contador.textContent = `${valorAtual}%`;

            if (progresso < 1) {
                requestAnimationFrame(animar);
            } else {
                contador.textContent = `${valorFinal}%`;
            }
        };

        requestAnimationFrame(animar);
    };

    const dadosSection = document.querySelector('#Dados');

    const resetarAnimacoes = () => {
        contadores.forEach(contador => {
            contador.textContent = '0';
        });
        pizzas.forEach(pizza => {
            pizza.style.background = 'conic-gradient(#ddd 0% 100%)';
            const contador = pizza.querySelector('.contador');
            if (contador) contador.textContent = '0%';
        });
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                resetarAnimacoes();
                // Para sincronizar o start, capturamos o timestamp inicial e passamos para todos:
                let timestampStart = null;

                // Animar números
                contadores.forEach(contador => {
                    animarNumero(contador, timestampStart);
                });

                // Animar pizzas
                pizzas.forEach(pizza => {
                    animarPizza(pizza, timestampStart);
                });
            }
        });
    }, {
        threshold: 0.5
    });

    if (dadosSection) {
        observer.observe(dadosSection);
    }
});
