const express = require("express")
const cors = require("cors")

const port = 3000
const app = express()

app.use(cors())

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/api", (req, res) => {
    res.send(
        pizzas = [
        {nome: "Pizza de Calabresa", valor: "R$ 42,00"},
        {nome: "PIzza de Catupiry", valor: "R$ 40,00"},
        {nome: "Pizza de Cogumelo", valor: "R$ 30,00"},
        {nome: "Pizza Doce", valor: "R$ 35,00"},
        {nome: "Pizza Vegana", valor: "R$ 40,00"},
        {nome: "Moda da Casa", valor: "R$ 45,00"},
        {nome: "Pizza de Calabresa", valor: "R$ 42,00"},
        {nome: "PIzza de Catupiry", valor: "R$ 40,00"},
        {nome: "Pizza de Cogumelo", valor: "R$ 30,00"},
        {nome: "Pizza Doce", valor: "R$ 35,00"},
        {nome: "Pizza Vegana", valor: "R$ 40,00"},
        {nome: "Moda da Casa", valor: "R$ 45,00"},
        {nome: "Pizza de Calabresa", valor: "R$ 42,00"},
        {nome: "PIzza de Catupiry", valor: "R$ 40,00"},
        {nome: "Pizza de Cogumelo", valor: "R$ 30,00"},
        {nome: "Pizza Doce", valor: "R$ 35,00"},
        {nome: "Pizza Vegana", valor: "R$ 40,00"},
        {nome: "Moda da Casa", valor: "R$ 45,00"},
        {nome: "Pizza Doce", valor: "R$ 35,00"},
        {nome: "Pizza Vegana", valor: "R$ 40,00"},
        {nome: "Moda da Casa", valor: "R$ 45,00"},
        {nome: "Pizza Doce", valor: "R$ 35,00"},
        {nome: "Pizza Vegana", valor: "R$ 40,00"},
        {nome: "Moda da Casa", valor: "R$ 45,00"},
        {nome: "Pizza Doce", valor: "R$ 35,00"},
        {nome: "Pizza Vegana", valor: "R$ 40,00"},
        {nome: "Moda da Casa", valor: "R$ 45,00"},
        {nome: "Pizza Doce", valor: "R$ 35,00"},
        {nome: "Pizza Vegana", valor: "R$ 40,00"},
        {nome: "Moda da Casa", valor: "R$ 45,00"},
        {nome: "Pizza Doce", valor: "R$ 35,00"},
        {nome: "Pizza Vegana", valor: "R$ 40,00"},
        {nome: "Moda da Casa", valor: "R$ 45,00"},
        {nome: "Pizza Doce", valor: "R$ 35,00"},
        {nome: "Pizza Vegana", valor: "R$ 40,00"},
        {nome: "Moda da Casa", valor: "R$ 45,00"},
        {nome: "Pizza Doce", valor: "R$ 35,00"},
        {nome: "Pizza Vegana", valor: "R$ 40,00"},
        {nome: "Moda da Casa", valor: "R$ 45,00"},
        {nome: "Pizza Doce", valor: "R$ 35,00"},
        {nome: "Pizza Vegana", valor: "R$ 40,00"},
        {nome: "Moda da Casa", valor: "R$ 45,00"},
        {nome: "Pizza Doce", valor: "R$ 35,00"},
        {nome: "Pizza Vegana", valor: "R$ 40,00"},
        {nome: "Moda da Casa", valor: "R$ 45,00"},
        ]
    )
})

app.listen(port, () => console.log("Servidor rodando a porta 3000"))