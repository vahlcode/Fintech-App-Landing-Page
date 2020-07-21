let button = document.querySelector('.toggle-button');
let menu = document.querySelector('.mobile-menu');
let icon = document.querySelector('.toggle-button img');
let news = document.querySelector('.news');
let why = document.querySelector('.why');
let scrollPos = window.scrollY;

function scrollAnimate(element) {
    window.addEventListener('scroll', () => {
        let sectionHeight = element.offsetHeight;
        if (scrollPos >= sectionHeight) {
            element.classList.add('animated', "rotateInUp");
            console.log('Added')
        }
    })
}

scrollAnimate(why);
scrollAnimate(news);

button.addEventListener('click', () => {
    if (menu.style.display == "block") {
        menu.style.display = "none";
        icon.classList.add('animated', 'rotateInUpRight');
        icon.addEventListener('animationend', () => {
            icon.classList.remove('animate', 'rotateInUpRight');
        });
        icon.src = "./Images/icon-hamburger.svg"
    } else {
        menu.style.display = "block";
        menu.classList.add('animated', 'fadeInDown');
        menu.addEventListener('animationend', () => {
            menu.classList.remove('animate', 'fadeInDown');
        });
        icon.classList.add('animated', 'rotateInDownRight');
        icon.addEventListener('animationend', () => {
            icon.classList.remove('animate', 'rotateInDownRight');
        });
        icon.src = "./Images/icon-close.svg";
    }
})