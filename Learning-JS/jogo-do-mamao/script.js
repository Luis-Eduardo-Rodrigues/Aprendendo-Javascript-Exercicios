const button = document.getElementById("rodar")
const res = document.getElementById("res")


button.addEventListener("click", () => {
  const imitar = [
    "Imite uma galinha",
    "Imite um gato",
    "Imite um cachorro",
    "Imite um pássaro",
    "Imite o Manoel Gomes e cante caneta azul",
    "Imite o Faustão",
    "Imite um macaco",
    "Imite um cão chupando manga",
    "Imite o Luciano Hulk",
    "Imite o João Cléber",
    "Conte um piada",
    "Faça o máximo de flexões em 1 minuto",
    "Engolir um gelo em menos de 1 minuto",
    "Faça uma estrelinha",
    "Cante um música",
    "Dê um grito bem alto em público",
    "Falar um trava-lingua",
    "Mastigar um alho cru",
    "Chupar um limão como se fosse uma laranja doce",
    "Imitar um famoso",
    "Mostrar a última mensagem enviada no Whatsapp",
    "Dar um beijo em uma fruta como se fosse em uma pessoa",
    "Pedir pra dar um abraço em uma pessoa desconhecida",
    "Fazer uma mímica pra os outros adivinharem",
    "Rastejar-se como uma cobra",
    "Admitir qual é a maior coisa ridícula que você já fez"
  ]
const elementoAleatorio = imitar[Math.floor(Math.random() * imitar.length)];

res.innerHTML = `${elementoAleatorio}`
})