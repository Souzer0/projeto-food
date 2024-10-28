// Evento para mostrar o formulário de login
document.getElementById('btn-entrar').addEventListener('click', function() {
    document.getElementById('forms-container').style.display = 'block'; // Mostra o contêiner de formulários
    document.getElementById('login-form').style.display = 'block'; // Mostra o formulário de login
    document.getElementById('cadastro-form').style.display = 'none'; // Garante que o formulário de cadastro esteja oculto
});

// Evento para mostrar o formulário de cadastro
document.getElementById('btn-cadastrar').addEventListener('click', function() {
    document.getElementById('forms-container').style.display = 'block'; // Mostra o contêiner de formulários
    document.getElementById('login-form').style.display = 'none'; // Garante que o formulário de login esteja oculto
    document.getElementById('cadastro-form').style.display = 'block'; // Mostra o formulário de cadastro
});

// Evento para o formulário de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário
    document.getElementById('forms-container').style.display = 'none'; // Oculta o contêiner de formulários
    document.getElementById('pedidos-ativos').style.display = 'block'; // Mostra a seção de pedidos ativos (certifique-se de que ela esteja visível)
});
// Evento para o formulário de login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Oculta os botões "Entrar" e "Cadastrar"
    document.getElementById('btn-entrar').style.display = 'none';
    document.getElementById('btn-cadastrar').style.display = 'none';

    // Exibe a seção de pedidos
    document.getElementById('pedidos-ativos').style.display = 'block';
});


// Lógica para avaliação com estrelas
const stars = document.querySelectorAll('.star');
let selectedRating = 0;

stars.forEach(star => {
    star.addEventListener('mouseover', handleMouseOver);
    star.addEventListener('click', handleClick);
    star.addEventListener('mouseout', handleMouseOut);
});

function handleMouseOver(e) {
    const value = e.target.getAttribute('data-value');
    highlightStars(value);
}

function handleClick(e) {
    selectedRating = e.target.getAttribute('data-value');
    highlightStars(selectedRating, true); // Fixar as estrelas

    // Exibir a caixa de comentário
    document.getElementById('comment-section').style.display = 'block';
}

// Função para enviar o comentário
document.getElementById('submit-comment').addEventListener('click', function() {
    const comment = document.getElementById('comment').value;
    if (comment) {
        alert(`Comentário enviado: ${comment}`);
        // Aqui você pode fazer o envio do comentário para o backend, se necessário
        document.getElementById('comment-section').style.display = 'none';
        document.getElementById('comment').value = ''; // Limpa o input
    } else {
        alert('Por favor, deixe um comentário antes de enviar.');
    }
});


function handleMouseOut(e) {
    if (selectedRating === 0) {
        resetStars();
    } else {
        highlightStars(selectedRating, true); // Manter a seleção ao sair com o mouse
    }
}

function highlightStars(value, fix = false) {
    stars.forEach(star => {
        if (star.getAttribute('data-value') <= value) {
            star.classList.add(fix ? 'selected' : 'hovered');
        } else {
            star.classList.remove('hovered', 'selected');
        }
    });
}

function resetStars() {
    stars.forEach(star => {
        star.classList.remove('hovered');
    });
}

// Lógica para alternar entre os formulários de login e cadastro
document.addEventListener('DOMContentLoaded', () => {
    const btnEntrar = document.getElementById('btn-entrar');
    const btnCadastrar = document.getElementById('btn-cadastrar');
    const formsContainer = document.getElementById('forms-container');
    const loginForm = document.getElementById('login-form');
    const cadastroForm = document.getElementById('cadastro-form');

    // Mostra os formulários ao clicar em um dos botões
    btnEntrar.addEventListener('click', () => {
        formsContainer.style.display = 'block';
        loginForm.style.display = 'block';
        cadastroForm.style.display = 'none';
    });

    btnCadastrar.addEventListener('click', () => {
        formsContainer.style.display = 'block';
        loginForm.style.display = 'none';
        cadastroForm.style.display = 'block';
    });
});
