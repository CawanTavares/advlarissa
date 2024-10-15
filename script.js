// Scroll suave para âncoras
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

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

// Evento de scroll para ativar a animação
window.addEventListener('scroll', handleScrollAnimations);

// Chama a função assim que a página carrega para verificar elementos visíveis
document.addEventListener('DOMContentLoaded', handleScrollAnimations);

// Função para a animação de deslizar para os itens de serviço
function handleSlideInAnimations() {
    const elements = document.querySelectorAll('.slide-in');
    elements.forEach(el => {
        const position = el.getBoundingClientRect();
        if (position.top <= window.innerHeight && position.bottom >= 0) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    });
}

// Ativar animação no scroll
window.addEventListener('scroll', handleSlideInAnimations);

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', handleSlideInAnimations);

// Função para a animação de escala para os itens de serviço
function handleScaleUpAnimations() {
    const elements = document.querySelectorAll('.scale-up');
    elements.forEach(el => {
        const position = el.getBoundingClientRect();
        if (position.top <= window.innerHeight && position.bottom >= 0) {
            el.classList.add('show');
        } else {
            el.classList.remove('show');
        }
    });
}

// Ativar animação no scroll
window.addEventListener('scroll', handleScaleUpAnimations);

// Chama a função ao carregar a página
document.addEventListener('DOMContentLoaded', handleScaleUpAnimations);
