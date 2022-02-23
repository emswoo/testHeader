// document.getElementById("navbtn").onclick = function() {
//     document.querySelector('html').classList.toggle('open');
// }

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});
