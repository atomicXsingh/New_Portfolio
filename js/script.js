// TYPED.JS
var typed = new Typed('#typed', {
    strings: [
        'Data Science & Machine Learning Enthusiast',
        'AI Researcher',
        'Python Developer'
    ],
    typeSpeed: 50,
    backSpeed: 25,
    loop: true
});

// FADE-IN ON SCROLL
const sections = document.querySelectorAll('.section');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });

sections.forEach(section => {
    observer.observe(section);
});

// BACK TO TOP BUTTON
const backToTop = document.getElementById('backToTop');
window.onscroll = function() {
    if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
        backToTop.style.display = "block";
    } else {
        backToTop.style.display = "none";
    }
}
backToTop.addEventListener('click', () => {
    window.scrollTo({top:0, behavior:'smooth'});
});
