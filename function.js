const inputEl = document.getElementById("input-el")
const nextBtn = document.getElementById("next-btn")
const firstSection = document.getElementById("first-section")
const secondSection = document.getElementById("second-section")
const thirdSection = document.getElementById("third-section")

const slideValue = document.querySelector("span")
const inputSlider = document.querySelector("input")

inputSlider.oninput = (()=>{
    let value = inputSlider.value
    slideValue.textContent = "$" + value
})

nextBtn.addEventListener('click', () =>{
    firstSection.style.display = "none"
    secondSection.style.display = "flex"
})