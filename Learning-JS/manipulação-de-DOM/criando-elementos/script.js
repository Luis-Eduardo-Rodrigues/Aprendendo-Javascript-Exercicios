const btn = document.getElementById("btn")


btn.addEventListener("click", () => {
   const p = document.createElement("p")
   p.innerHTML = "Paragrafo criando com JS!"
   const div = document.querySelector("div").appendChild(p)
})