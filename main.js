let popup = document.getElementById('popup')

setTimeout(function() {
    popup.style.display = 'flex';
}, 5000);

let closePopup = document.getElementById('popup-close')

closePopup.addEventListener('click',() => {
    popup.style.display = 'none';
})

let burgerOpen = document.getElementById('burger-open')
let burger = document.getElementById('burger')
let burgerClose = document.getElementById('burger-close')

burgerOpen.addEventListener('click',() => {
    burger.style.display = 'block';
})

burgerClose.addEventListener('click',() => {
    burger.style.display = 'none';
})