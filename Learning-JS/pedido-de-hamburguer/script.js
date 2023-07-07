const plus = document.getElementById("plus")
const less = document.getElementById("less")
const preco = document.getElementById("preco")
let valor = 1 



plus.addEventListener("click", () => {
  const counter = document.getElementById("counter")
  valor ++
  counter.innerHTML = valor
  const calcPreco = 7 * valor
  preco.innerHTML = `Preço: ${calcPreco},00 R$`
})

less.addEventListener("click", () => {
  const counter = document.getElementById("counter")
  counter.innerHTML = valor
  const calcPreco = 7 * valor
  preco.innerHTML = `Preço: ${calcPreco},00 R$`

  if(valor > 1){
     valor --
  }
})

const comprar = document.querySelector("#comprar")

comprar.addEventListener("click", () => {
  alert("thanks :)")
})