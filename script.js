function handleScroll() {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;
    
    scrollPosition > 50 
        ? navbar.classList.add('scrolled') 
        : navbar.classList.remove('scrolled');
}

window.addEventListener('scroll', handleScroll);
handleScroll();
