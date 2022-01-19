burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
container = document.querySelector('.container')




burger.addEventListener('click',()=>{
    navbar.classList.toggle('h-nav');
    container.classList.toggle('v-nav');
})