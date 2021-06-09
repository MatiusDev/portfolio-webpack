// const btnOpen = document.getElementById('contact__btnOpen');
// const btnClose = document.getElementById('contact__btnClose');
// const frmContact = document.querySelector('.contact__form-container');

// btnOpen.addEventListener('click', () => {
//     frmContact.style.left = 0;
// });

// btnClose.addEventListener('click', () => {
//     frmContact.style.left = '-2000px';
// });

import App from './App';

const router = async () => {
    const app = document.getElementById('app') || null;
    app.innerHTML = await App();
};

window.addEventListener('load', router);