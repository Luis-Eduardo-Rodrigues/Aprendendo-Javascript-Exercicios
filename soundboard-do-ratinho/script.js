const sons = [
    {src: "audios/grito.mp3", legenda: "Grito"},
    {src: "audios/jesus.mp3", legenda: "Jesus"},
    {src: "audios/nao-e-o-pai.mp3", legenda: "Nao e o pai"},
    {src: "audios/pare.mp3", legenda: "Pare"},
    {src: "audios/que-isso-meu-filho.mp3", legenda: "Que isso meu filho calma"},
    {src: "audios/ratinhoo.mp3", legenda: "Ratinhoo"},
    {src: "audios/uepa.mp3", legenda: "Uepa!"},
    {src: "audios/vixi-ratinho.mp3", legenda: "Vixi ratinho"},
    {src: "audios/xaropinho.mp3", legenda: "Xaropinho"}
]

const botoes = document.querySelectorAll(".btn")
const legenda = document.querySelectorAll("p")

for (let i = 0; i < 9; i++){
    legenda[i].innerHTML = sons[i].legenda
    botoes[i].setAttribute("data-item", i)
}

const audioTag = document.querySelector("audio")

botoes.forEach(botao => {
    botao.addEventListener("click", () => {
        let som = sons[botao.getAttribute("data-item")]
        audioTag.setAttribute("src", som.src)
        audioTag.addEventListener("loadeddata", () => {
            audioTag.play()
        })
    })
})