import "https://unpkg.com/playhtml";
playhtml.init();

rose.defaultData = true;

const about = document.querySelector('#about');
const aboutBtn = document.querySelector('#about-btn');
const closeBtn = document.querySelector('.exit');

aboutBtn.addEventListener('click', () => {
    about.classList.toggle('show');
})

closeBtn.addEventListener('click', () => {
    about.classList.remove('show');
})