const btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    const p = document.querySelector("p")
    const txt = prompt("Texto:")
    p.innerHTML = `${txt}`
})