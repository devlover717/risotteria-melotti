const navToggle = document.querySelector('#navToggle'); 
const nav = document.querySelector('.nav-links'); 

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav-close');
})

changeIcon = (icon) => {
    icon.classList.toggle('fa-xmark');
}

