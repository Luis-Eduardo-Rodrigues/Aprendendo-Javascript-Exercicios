const btn = document.getElementById("apply")
const box = document.getElementById("box")
const res = document.getElementById("res")

btn.addEventListener("click", () => {
  const val1 = document.getElementById("input1").value
  const val2 = document.getElementById("input2").value
  const val3 = document.getElementById("input3").value
  const val4 = document.getElementById("input4").value

  box.style.borderRadius = `${val1}px ${val2}px ${val3}px ${val4}px`

  res.innerHTML = `border-radius: ${val1}px ${val2}px ${val3}px ${val4}px`

})