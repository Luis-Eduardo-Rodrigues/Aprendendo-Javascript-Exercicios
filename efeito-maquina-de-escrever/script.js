function maquinaDeEscrever(elemento){
    const textoArray = elemento.innerHTML.split("")
    elemento.innerHTML = ""
    textoArray.forEach((letra, i) => {
      setTimeout(() => {
        elemento.innerHTML += letra 
      }, 75 * i)
    })
  }
  
  const texto = document.querySelector("h1")
  maquinaDeEscrever(texto)