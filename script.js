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

// Carregar o SDK mais recente do EmailJS
(function() {
    emailjs.init("Mf7MxPwBkS2gzIPKZ"); // Substitua pela sua chave pública
})();

// Função para aplicar a máscara no campo de telefone em tempo real
function applyPhoneMask(input) {
    let value = input.value;
    value = value.replace(/\D/g, '');  // Remove qualquer caractere que não seja número
    if (value.length > 2 && value.length <= 6) {
        value = value.replace(/^(\d{2})(\d{1,4})/, "$1 $2");
    } else if (value.length > 6) {
        value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, "$1 $2-$3");
    }
    input.value = value;
}

// Função para validar e enviar o formulário
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();  // Evitar o envio padrão do formulário

    // Obtenção dos valores dos campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Expressão regular para validar o telefone no formato DDD + TELEFONE
    const phonePattern = /^\d{2}\s\d{4,5}-\d{4}$/;

    // Validação dos campos
    if (name === "" || email === "" || phone === "" || message === "") {
        alert("Todos os campos devem ser preenchidos!");
        return;
    }

    if (!phonePattern.test(phone)) {
        alert("O telefone deve estar no formato DDD + Número (Ex: 11 98765-4321)");
        return;
    }

    // Parâmetros do e-mail
    const templateParams = {
        from_name: name,
        from_email: email,
        message: message,
        phone: phone
    };

    // Enviando o e-mail usando EmailJS com a versão mais recente do SDK
    emailjs.send("service_se9517z", "template_mmr0m8i", templateParams)
    .then(function(response) {
        alert("E-mail enviado com sucesso!");
    }, function(error) {
        alert("Ocorreu um erro ao enviar o e-mail: " + JSON.stringify(error));
    });
});

