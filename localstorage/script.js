// 1 - Inserir dados
localStorage.setItem("name", "Luis")

// 2 - Restart sem perder dados

// 3 - resgatar item

const name = localStorage.getItem("name")
console.log(name)

// 4 - Resgatr item que n existe == retorna null

const lastName = localStorage.getItem("lastname")
console.log(lastName)

// 5 - remover item

localStorage.removeItem("name")

// - 6 Limpar todos os itens

// localStorage.setItem("a", 1)
// localStorage.setItem("b", 2)

// localStorage.clear()

// - 7 Guardando objetos

const person = {
    nome: "Luis",
    idade: 16,
    sexo: "Forte"
}

// converter para json
localStorage.setItem("person", JSON.stringify(person))

const getperson = localStorage.getItem("person")

console.log(getperson)

const personObj = JSON.parse(getperson)
console.log(personObj.sexo)
