const fadeElements = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    fadeElements.forEach(element => {
        const position = element.getBoundingClientRect().top;

        if(position < window.innerHeight - 100){
            element.classList.add('show');
        }
    });
});