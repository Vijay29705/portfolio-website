var typed = new Typed(".text", {
    strings: ["Programming" ,"Web Development"],
    typeSpeed:100,
    backSpeed:100,
    loop:true
});
  

var typed = new Typed(".typing-text", {
    strings: [
        "I am an aspiring IT professional",
        "Specialized in Web Development and AI",
        "Passionate about creating impactful solutions",
        "Currently pursuing my B-Tech in IT"
    ],
    typeSpeed: 60,
    backSpeed: 50,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
    showCursor: false,  // Optional: to hide the cursor after typing
});



// Get the button
const scrollToTopBtn = document.querySelector('.scroll-to-top');

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.classList.add('show-scroll');
    } else {
        scrollToTopBtn.classList.remove('show-scroll');
    }
};
function toggleMenu() {
    const navbar = document.getElementById('myLinks');
    navbar.classList.toggle('active');
}