async function mostrarDados() {
    const response = await fetch("http://localhost:3000/api");
    const data = await response.json();

    const main = document.querySelector("main");

 
    data.forEach(item => {

        const div = document.createElement("div");
        div.classList.add("card")

        const h2 = document.createElement("h2")
        const valor = document.createElement("h2")
        const btn = document.createElement("button")

        h2.innerHTML = item.nome
        valor.innerHTML = item.valor
        btn.textContent = "Fazer pedido"

        div.appendChild(h2)
        div.appendChild(valor)
        div.appendChild(btn)

        main.appendChild(div);
    });
}

mostrarDados();