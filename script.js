const menu = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

const navbarHTML = `
    <ul class="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Me</a></li>
        <li><a href="#services">Skills</a></li>
        <li><a href="#plans">Projects</a></li>
        <li><a href="#review">Contact</a></li>
    </ul>
`;

menu.onclick = () => {
    menu.classList.toggle('bx-x');

    if (navbar.textContent.trim() === "") {
        navbar.innerHTML = navbarHTML;
    } else {
        navbar.textContent = "";
    }
};
const  typed = new Typed('.multiple-text', {
    strings: ['Maharana Pratap College of Professional Studies', 'BCA Student CGPA: 7.8'],
    typeSpeed: 60,
    backSpeed:60,
    backDelay:1000,
    loop:true,
  });
