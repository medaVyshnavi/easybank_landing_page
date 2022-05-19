const btnHamburger=document.getElementById('btnHamburger');
const body=document.querySelector('body');
const header=document.querySelector('.header');
const overlay=document.querySelector('.overlay');
const headerMenu=document.querySelector('.header_menu');

btnHamburger.addEventListener('click',()=>{
    header.classList.toggle('open');
    overlay.classList.toggle('has-fade');
    headerMenu.classList.toggle('has-fade');
    body.classList.toggle('no-scroll')
    if(headerMenu.classList.contains('has-fade')){
        headerMenu.style.animation='fade-out 300ms ease-in-out forwards';
    }
    else{
        headerMenu.style.animation='fade-in 300ms ease-in-out forwards';
    }
})