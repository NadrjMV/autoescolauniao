document.addEventListener('DOMContentLoaded', () => {

    // Efeito de "scrolled" no cabeçalho
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Menu de Navegação Móvel (Hamburguer)
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        // Alterna o ícone do menu
        const icon = menuToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Fechar o menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-menu a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                 const icon = menuToggle.querySelector('i');
                 icon.classList.remove('fa-times');
                 icon.classList.add('fa-bars');
            }
        });
    });

    // Efeito de aparição suave em elementos ao rolar a página
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '50px',
        duration: 2000,
        reset: false
    });

    sr.reveal('.service-card', { interval: 200 });
    sr.reveal('.about-image, .contact-map', { origin: 'left' });
    sr.reveal('.about-content, .contact-info', { origin: 'right' });
    sr.reveal('.approved-card', { interval: 150 });
    sr.reveal('.section-title', {});

});
// Para usar o ScrollReveal, adicione o seguinte script no seu HTML, antes de fechar o </body>
// <script src="https://unpkg.com/scrollreveal"></script>