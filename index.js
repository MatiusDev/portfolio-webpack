const btnOpen = document.querySelector('#contact__btnOpen');
const btnClose = document.querySelector('#contact__btnClose');
const frmContact = document.querySelector('.contact__form-container');

btnOpen.addEventListener('click', () => {
    frmContact.style.left = 0;
});

btnClose.addEventListener('click', () => {
    frmContact.style.left = '-2000px';
});