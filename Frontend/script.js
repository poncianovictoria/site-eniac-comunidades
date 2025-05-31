const comentarios = [
    {
        nome: "Maria Silva",
        texto: "Ótimo atendimento, recomendo demais!",
        foto: "img/maria.jpg"
    },
    {
        nome: "João Santos",
        texto: "Equipe muito profissional e atenciosa!",
        foto: "img/joao.jpg"
    },
    {
        nome: "Ana Oliveira",
        texto: "Fiquei super satisfeita com o serviço.",
        foto: "img/ana.jpg"
    }
];

const container = document.getElementById('comentarios');

comentarios.forEach(comentario => {
    const card = document.createElement('div');
    card.classList.add('card-comentario');

    card.innerHTML = `
        <img src="${comentario.foto}" alt="Foto de ${comentario.nome}" class="foto-comentario">
        <h3>${comentario.nome}</h3>
        <p>${comentario.texto}</p>
    `;

    container.appendChild(card);
});
