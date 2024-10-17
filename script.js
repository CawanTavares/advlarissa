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

// Função para aplicar a máscara no campo de telefone em tempo real
function applyPhoneMask(input) {
    let value = input.value;

    // Remove qualquer caractere que não seja número
    value = value.replace(/\D/g, '');

    // Aplica a máscara com espaço após o DDD e hífen no número
    if (value.length > 2 && value.length <= 6) {
        value = value.replace(/^(\d{2})(\d{1,4})/, "$1 $2");
    } else if (value.length > 6) {
        value = value.replace(/^(\d{2})(\d{5})(\d{0,4})/, "$1 $2-$3");
    }

    // Atualiza o valor do campo com a máscara
    input.value = value;
}

// Função para exibir o pop-up de erro no centro da tela
function showModal(message) {
    const modal = document.getElementById("errorModal");
    const modalMessage = document.getElementById("modalMessage");
    
    modalMessage.textContent = message;
    modal.style.display = "block";
}

// Função para fechar o modal ao clicar no "X"
document.getElementById("closeModal").addEventListener("click", function() {
    const modal = document.getElementById("errorModal");
    modal.style.display = "none";
});

// Fechar o modal se o usuário clicar fora da caixa de conteúdo
window.onclick = function(event) {
    const modal = document.getElementById("errorModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Função para validar o formulário e abrir o cliente de e-mail com os dados preenchidos
document.getElementById("sendEmail").addEventListener("click", function(event) {
    event.preventDefault(); // Previne o redirecionamento padrão do link

    // Obtenção dos valores dos campos
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    // Expressão regular para validar o telefone no formato DDD + TELEFONE
    const phonePattern = /^\d{2}\s\d{4,5}-\d{4}$/;

    // Verificação de campos vazios
    if (name === "" || email === "" || phone === "" || message === "") {
        showModal("Todos os campos devem ser preenchidos!"); // Exibe o modal com a mensagem
        return false; // Prevenção do envio do formulário
    }

    // Validação do telefone
    if (!phonePattern.test(phone)) {
        showModal("O telefone deve estar no formato DDD + Número (Ex: 11 98765-4321)");
        return false; // Prevenção do envio do formulário
    }

    // Se tudo estiver correto, abrir o cliente de e-mail com o conteúdo preenchido
    const mailtoLink = `mailto:seuemail@dominio.com?subject=Contato&body=Nome: ${name}%0D%0AE-mail: ${email}%0D%0ATelefone: ${phone}%0D%0AMensagem: ${message}`;
    window.location.href = mailtoLink;

    return true;
});
