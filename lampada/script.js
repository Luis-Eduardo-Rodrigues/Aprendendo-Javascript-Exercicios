const on = document.getElementById("on")
const off = document.getElementById("off")


on.addEventListener("click", () => {
    const lampada = document.getElementById("lampada")

    lampada.setAttribute("src", "assets/ligada.jpeg")
})

off.addEventListener("click", () => {
    const lampada = document.getElementById("lampada")

    lampada.setAttribute("src", "assets/desligada.jpeg")
})