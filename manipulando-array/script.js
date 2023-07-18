const ul = document.querySelector("ul")

const users = [
    { name: "Luis", age: 16, sex: "Masculino" },
    { name: "João", age: 22, sex: "Masculino" },
    { name: "Pedro", age: 18, sex: "Masculino" },
    { name: "Marillya", age: 16, sex: "Feminino" },
    { name: "José", age: 50, sex: "Masculino" },
    { name: "Maria", age: 16, sex: "Feminino" }
]

users.map((user) => {
    var li = document.createElement("li")
    li.innerHTML = user.name + ", " + user.age + ", " + user.sex
    ul.appendChild(li)
})