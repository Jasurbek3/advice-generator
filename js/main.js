const cardBtn = document.querySelector('.card-btn')
let url = "https://api.adviceslip.com/advice"

async function setProgramm() {
    let cardText = document.querySelector('.card__text')
    let cardId = document.querySelector('.card__id')
    cardText.textContent = null
    cardId.textContent = null

    let response = await fetch(url)
    let data = await response.json()

    let adviceId = data.slip.id
    let advice = data.slip.advice
    
    cardText.innerHTML = advice
    cardId.innerHTML = adviceId
}
setProgramm()
cardBtn.addEventListener("click", function (event) {
    location.reload()
})







