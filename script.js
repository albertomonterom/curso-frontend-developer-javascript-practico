const menuEmail = document.querySelector('.navbar-email');
const menuHamIcon = document.querySelector('.menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');



menuEmail.addEventListener('click', toggleDesktopMenu);
menuHamIcon.addEventListener('click', toggleMobilepMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu(){
    desktopMenu.classList.toggle('inactive');
    aside.classList.add('inactive');
}
function toggleMobilepMenu(){
    mobileMenu.classList.toggle('inactive');
    // Al utilizar los métodos .add() o .remove(), en el caso de que se añada una clase CSS que ya existía previamente, o que se elimine una clase CSS que no existía, simplemente no ocurrirá nada.
    aside.classList.add('inactive');
}
function toggleCarritoAside(){
    aside.classList.toggle('inactive');
    // Al utilizar los métodos .add() o .remove(), en el caso de que se añada una clase CSS que ya existía previamente, o que se elimine una clase CSS que no existía, simplemente no ocurrirá nada.
    mobileMenu.classList.add('inactive');
    desktopMenu.classList.add('inactive');
}


