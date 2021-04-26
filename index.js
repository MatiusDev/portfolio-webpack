const btnOpen = document.querySelector('#contact__btnOpen');
const btnClose = document.querySelector('#contact__btnClose');
const frmContact = document.querySelector('.contact__form-container');

btnOpen.addEventListener('click', () => {
    console.log('opened');
    frmContact.style.left = 0;
});

btnClose.addEventListener('click', () => {
    console.log('closed');
    frmContact.style.left = '-2000px';
});

const container = document.querySelector("#contact");
const mainContainer = document.querySelector(".main__container");

console.log(container, mainContainer);