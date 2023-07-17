const verificar = document.getElementById("verificar")
const data = new Date()
const ano = data.getFullYear()
const sexo = document.getElementById("sexo")
const res = document.getElementById("res")
const img = document.getElementById("img")


verificar.addEventListener("click", () => {
    var idadeValor = document.getElementById("idade").value
    
    var idade = ano - idadeValor

    if(idadeValor == 0 || idadeValor > ano){
        alert("[ERRO] Preencha todos os campos corretamente")
    }

   if(sexo.value === "Masculino" || sexo.value === "masculino"){
    res.innerHTML = `Você é <mark>homem</mark> e tem <mark>${idade}</mark> anos`
    img.setAttribute("src", "src/download.jpeg")
   }

   if(sexo.value === "Feminino" || sexo.value === "feminino"){
    res.innerHTML = `Você é <mark>mulher</mark> e tem <mark>${idade}</mark> anos`
    img.setAttribute("src", "src/muie.jpeg")
   }


})