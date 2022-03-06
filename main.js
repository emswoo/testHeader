// document.getElementById("navbtn").onclick = function() {
//     document.querySelector('html').classList.toggle('open');
// }

const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.nav-menu');

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});

// vanta.js
VANTA.NET ({
    el: "#vanta-canvas",
    mouseControls: true,
    touchControls: true,
    gyroControls: true,
    minHeight: 200.00,
    minWeight: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x3fbbff
});