let home = document.querySelector(".home")
let luck = document.querySelector(".luck")
let cookie = document.querySelector("#cookie")
let moreCookie = document.querySelector("#moreCookie")
let message = document.querySelector(".message")
let message1 = document.querySelector(".message1")
let message2 = document.querySelector(".message2")
let message3 = document.querySelector(".message3")
let message4 = document.querySelector(".message4")
// let luckMessageList = [0, 1,2,3,4]

let luckMessage;

cookie.addEventListener('click', cookieClick)
moreCookie.addEventListener('click', moreCookieClick)

function toggleScreen () {
  home.classList.toggle("hide")
  luck.classList.toggle("hide")
}

function sortMessage (luckMessage) {
  message.classList.add("hide")
  message1.classList.add("hide")
  message2.classList.add("hide")
  message3.classList.add("hide")
  message4.classList.add("hide")
  
  switch (luckMessage) {
      case 0:
        message.classList.remove("hide")
        break
      case 1:
        message1.classList.remove("hide")
        break
      case 2:
        message2.classList.remove("hide")
        break
      case 3:
        message3.classList.remove("hide")
        break
      case 4:
        message4.classList.remove("hide")
        break
      default:
        break      
  }
}

function cookieClick(event) {
  event.preventDefault()
  
  toggleScreen()
  // luckMessage = Math.floor(Math.random() * luckMessageList.length) 
  luckMessage = Math.floor(Math.random() * 4) 
  sortMessage(luckMessage)
  // A = luckMessageList[luckMessage]

}
  
function moreCookieClick(event) {
  event.preventDefault()

  toggleScreen()
  
}