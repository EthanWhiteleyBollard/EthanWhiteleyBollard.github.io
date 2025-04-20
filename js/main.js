//Moblie Menu
document.addEventListener('DOMContentLoaded', () =>{
    const hamburgerButton = document.querySelector('.hamburger-button');
    const mobileMenu = document.querySelector('.mobile-menu');
     
    hamburgerButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));

    //About Me
    const aboutMe = document.querySelector('.hero');
    const aboutMeButton = document.querySelector('.about-me-button-mm');

    aboutMeButton.addEventListener('click', () => {aboutMe.scrollIntoView({behavior: "smooth", block: "start"})});
    aboutMeButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));

    //Projects
    const projects = document.querySelector('.project');
    const projectsButton = document.querySelector('.projects-button-mm');

    projectsButton.addEventListener('click', () => {projects.scrollIntoView({behavior: "smooth", block: "start"})}, () => mobileMenu.classList.toggle('active'));
    projectsButton.addEventListener('click', () => mobileMenu.classList.toggle('active'));
})

// Scroll
document.addEventListener('DOMContentLoaded', () =>{
    //About Me
    const aboutMe = document.querySelector('.hero');
    const aboutMeButton = document.querySelector('.about-me-button');

    aboutMeButton.addEventListener('click', () => {aboutMe.scrollIntoView({behavior: "smooth", block: "start"})});

    //Projects
    const projects = document.querySelector('.project');
    const projectsButton = document.querySelector('.projects-button');

    projectsButton.addEventListener('click', () => {projects.scrollIntoView({behavior: "smooth", block: "start"})});
})