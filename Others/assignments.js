document.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const header = document.querySelector('.header');
    
    if (scrollTop > 100) {
        header.classList.add('bg-opacity-90');
    } else {
        header.classList.remove('bg-opacity-90');
    }
});
