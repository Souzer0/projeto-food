function validateLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const validUsername = 'admin';
    const validPassword = '123456';

    if (username === validUsername && password === validPassword) {
        document.getElementById('login-section').style.display = 'none';
        document.getElementById('admin-section').style.display = 'block';
    } else {
        alert('Usuário ou senha incorretos!');
    }
}

function showSection(sectionId) {
    // Seleciona todas as seções dentro de 'main', exceto a de ações administrativas
    const sections = document.querySelectorAll('main > section[id]');
    sections.forEach(section => {
        if (section.id !== 'admin-actions') {
            section.style.display = 'none'; // Esconde a seção
        }
    });

    // Exibe a seção escolhida, se existir
    const selectedSection = document.getElementById(sectionId);
    if (selectedSection) {
        selectedSection.style.display = 'block';
    }

    // Garante que a seção de ações administrativas permaneça visível
    document.getElementById('admin-actions').style.display = 'flex';
}




document.addEventListener("DOMContentLoaded", function() {
    const increaseButtons = document.querySelectorAll('.increase');
    const decreaseButtons = document.querySelectorAll('.decrease');

    increaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            let currentValue = parseInt(input.value);
            input.value = currentValue + 1;
        });
    });

    decreaseButtons.forEach(button => {
        button.addEventListener('click', function() {
            const input = this.nextElementSibling;
            let currentValue = parseInt(input.value);
            if (currentValue > 0) {
                input.value = currentValue - 1;
            }
        });
    });

    // Simular avaliações de pedidos
    const avaliacoes = [
        { pedidoId: '1234', avaliacao: 4.5 },
        { pedidoId: '5678', avaliacao: 3.0 }
    ];

    // Adicionar as avaliações na página
    avaliacoes.forEach(avaliacao => {
        const pedidoElemento = document.querySelector(`[data-pedido-id="${avaliacao.pedidoId}"]`);
        if (pedidoElemento) {
            const avaliacaoNumero = pedidoElemento.querySelector('.avaliacao-numero');
            avaliacaoNumero.textContent = avaliacao.avaliacao;
        }
    });
});
