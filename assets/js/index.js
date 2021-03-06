//menu mobile
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links');

burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
});



const homeTab = document.querySelector('#tabHome');

homeTab.addEventListener('click', () => {
    homeTab.style.color = "red";
});