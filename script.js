// Função para adicionar a classe 'show' quando o elemento entra na viewport
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in, .slide-in, .scale-up');
    elements.forEach(el => {
        const position = el.getBoundingClientRect();
        // Verifica se o elemento está dentro da janela de visualização
        if (position.top <= window.innerHeight && position.bottom >= 0) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    });
}

// Ativar animação no scroll
window.addEventListener('scroll', handleScrollAnimations);

// Chama a função assim que a página carrega
document.addEventListener('DOMContentLoaded', handleScrollAnimations);

// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Função para verificar se todos os campos obrigatórios estão preenchidos
document.getElementById('contactForm').addEventListener('submit', function(e) {
    const form = this;
    if (!form.checkValidity()) {
        e.preventDefault(); // Impede o envio se os campos não forem válidos
        alert('Por favor, preencha todos os campos obrigatórios.');
    }
});
