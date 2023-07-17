const form = document.querySelector("form")
const divW = document.querySelector("#welcome")
const logoutbtn = document.querySelector("#logout")

function user(){
    const username = localStorage.getItem("name")

    if(username){
        form.style.display = "none"
        divW.style.display = "block"
        const usernameElement = document.querySelector("#username").textContent = username
    }else{
        form.style.display = "block"
        divW.style.display = "none"
    }
}

logoutbtn.addEventListener("click", () => {
    
    localStorage.removeItem("name")
    
    user()
})

form.addEventListener("submit", (e) => {
    e.preventDefault()

    const name = document.querySelector("#name")
    localStorage.setItem("name", name.value)

    name.value = ""
    user()
})

user()