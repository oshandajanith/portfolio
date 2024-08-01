let menuicon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar')

menuicon.onclick =()=>{
    menuicon.classList.toggle('bx-x');
    navbar.classList.toggle('bx-x');

};




let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href').includes(id)) {
                    link.classList.add('active');
                }
            });
        }
    });
    let header=document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuicon.classList.remove('bx-x');
    navbar.classList.remove('bx-x');

};

ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200
});

ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin:'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin:'right' });


const typed = new Typed('.multiple-text', {
    strings: ['Full-Stack Developer', 'Mobile Application Developer'], // Use 'strings' in camelCase
    typeSpeed: 100,       // Speed of typing in milliseconds
    backSpeed: 100,        // Speed of erasing in milliseconds
    backDelay: 1000,       // Delay before starting to erase
    loop: true             // Whether to loop the animation
});
