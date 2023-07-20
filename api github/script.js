async function buscarUser() {
    const username = document.querySelector("#username").value
    const imagem = document.querySelector("#imagem")
    const name = document.querySelector("#name")
    const bio = document.querySelector("#bio")
    const seguidores = document.querySelector("#seguidores")
    const seguindo = document.querySelector("#seguindo")
    const res = document.querySelector(".res")
    res.style.opacity = 1

    const response = await fetch(`https://api.github.com/users/${username}`)
        .then(response => {
            response.json()
                .then(data => {
                    imagem.src = data.avatar_url
                    name.innerHTML = data.name
                    bio.innerHTML = data.bio
                    seguidores.innerHTML = data.followers + " Seguidores"
                    seguindo.innerHTML = "Seguindo " + data.following
                    console.log(data)
                })
        })

}