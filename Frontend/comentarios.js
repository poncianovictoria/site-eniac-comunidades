const comentarios = [
    {
        nome: "Maria Silva",
        foto: "https://randomuser.me/api/portraits/women/44.jpg",
        estrelas: 5,
        texto: "Atendimento incrível! Fui muito bem recebida e o trabalho é sensacional.",
        local: "Guarulhos, SP"
    },
    {
        nome: "João Pereira",
        foto: "https://randomuser.me/api/portraits/men/36.jpg",
        estrelas: 4,
        texto: "Experiência ótima, só acho que poderia ter mais eventos mensais.",
        local: "Guarulhos, SP"
    },
    {
        nome: "Ana Costa",
        foto: "https://randomuser.me/api/portraits/women/65.jpg",
        estrelas: 5,
        texto: "Amei participar! Me senti acolhida e útil.",
        local: "Guarulhos, SP"
    },
    {
        nome: "Carlos Mendes",
        foto: "https://randomuser.me/api/portraits/men/41.jpg",
        estrelas: 3,
        texto: "Gostei, mas alguns detalhes poderiam melhorar no atendimento.",
        local: "Guarulhos, SP"
    }
];

const container = document.getElementById("comentarios");

comentarios.forEach(comentario => {
    const card = document.createElement("div");
    card.classList.add("card-comentario");

    card.innerHTML = `
    <img src="${comentario.foto}" alt="Foto de ${comentario.nome}" class="foto-usuario">
    <div class="conteudo-comentario">
      <h3>${comentario.nome}</h3>
      <div class="localizacao">📍 ${comentario.local}</div>
      <div class="estrelas">${"⭐".repeat(comentario.estrelas)}${"☆".repeat(5 - comentario.estrelas)}</div>
      <p>${comentario.texto}</p>
    </div>
  `;

    container.appendChild(card);
});
