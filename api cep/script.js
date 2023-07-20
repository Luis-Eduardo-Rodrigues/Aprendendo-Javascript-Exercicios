async function consultaCep() {
    const cep = document.querySelector("#cep").value
    const bairro = document.querySelector("#bairro")
    const localidade = document.querySelector("#localidade")
    const txtCEP = document.querySelector("#txtCEP")
    const ddd = document.querySelector("#DDD")
    const logradouro = document.querySelector("#logradouro")
    const uf = document.querySelector("#uf")

    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
            response.json()
                .then(data => {
                    bairro.innerHTML = "Bairro: " + data.bairro
                    localidade.innerHTML = "Localidade: " + data.localidade
                    txtCEP.innerHTML = "CEP: " + data.cep
                    ddd.innerHTML = "DDD: " + data.ddd
                    logradouro.innerHTML = "Logradouro: " + data.logradouro
                    uf.innerHTML = "Unidade Federativa: " + data.uf

                    if (data.erro) {
                        alert("CEP não encontrado!\nDigite outro cep...")
                    }
                })
        })

}