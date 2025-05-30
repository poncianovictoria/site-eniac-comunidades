const comentarios = [
    {
        nome: "Maria Silva",
        texto: "Ótimo atendimento, recomendo demais!",
        foto: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
        nome: "João Santos",
        texto: "Equipe muito profissional e atenciosa!",
        foto: "https://randomuser.me/api/portraits/men/46.jpg"
    },
    {
        nome: "Ana Oliveira",
        texto: "Fiquei super satisfeita com o serviço.",
        foto: "https://randomuser.me/api/portraits/women/68.jpg"
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
