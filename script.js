let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('bx-x'); 
    navbar.classList.remove('active');

}
// Typing Text Code 
const  typed = new Typed('.multiple-text', {
    strings: ['Maharana Pratap College of Professional Studies', 'BCA Student CGPA: 7.8'],
    typeSpeed: 60,
    backSpeed:60,
    backDelay:1000,
    loop:true,
  });