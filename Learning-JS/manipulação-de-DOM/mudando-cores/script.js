const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    const div = document.querySelector("div")
    const cor = prompt("Cor: (em inglês)")
    div.style.background = `${cor}`
    if(cor == "white"){
        div.style.border = "solid 1px black"
    }
})