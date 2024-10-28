let total = 0;

// Função para adicionar itens à comanda
function adicionarComanda(nome, preco) {
    const comandaContainer = document.getElementById('itens-comanda');
    
    // Verificar se o item já está na comanda
    let itemExistente = document.querySelector(`.item-comanda[data-nome="${nome}"]`);
    
    if (itemExistente) {
        // Se o item já está na comanda, aumentar a quantidade
        let quantidade = itemExistente.querySelector('.quantidade');
        quantidade.innerText = parseInt(quantidade.innerText) + 1;
    } else {
        // Criar o item da comanda
        const item = document.createElement('div');
        item.classList.add('item-comanda');
        item.setAttribute('data-nome', nome);
        item.innerHTML = `
            <p><strong>${nome}</strong> - R$ ${preco} 
            <span> - </span>
            <span class="quantidade">1</span></p>
            <button class="remover-item"> - </button>
            <button class="adicionar-item"> + </button>`;
        
        // Adicionar o item ao container
        comandaContainer.appendChild(item);
        
        // Adicionar evento para remover o item
        item.querySelector('.remover-item').addEventListener('click', () => {
            removerItem(nome, preco, item);
        });

        // Adicionar evento para aumentar a quantidade do item
        item.querySelector('.adicionar-item').addEventListener('click', () => {
            aumentarQuantidade(nome, preco);
        });
    }

    // Atualizar o total
    atualizarTotal(preco);
}

// Função para aumentar a quantidade de um item
function aumentarQuantidade(nome, preco) {
    let itemExistente = document.querySelector(`.item-comanda[data-nome="${nome}"]`);
    if (itemExistente) {
        let quantidade = itemExistente.querySelector('.quantidade');
        quantidade.innerText = parseInt(quantidade.innerText) + 1;
        atualizarTotal(preco);  // Atualiza o total ao aumentar a quantidade
    }
}

// Função para remover um item da comanda
function removerItem(nome, preco, item) {
    let quantidade = item.querySelector('.quantidade');
    
    if (parseInt(quantidade.innerText) > 1) {
        // Reduzir a quantidade se for maior que 1
        quantidade.innerText = parseInt(quantidade.innerText) - 1;
        atualizarTotal(-preco);  // Atualiza o total ao reduzir a quantidade
    } else {
        // Remover o item se a quantidade for 1
        item.remove();
        atualizarTotal(-preco);  // Atualiza o total ao remover o item
    }
}

// Função para atualizar o total
function atualizarTotal(preco) {
    total += parseFloat(preco);
    document.getElementById('total-comanda').innerText = `Total: R$ ${total.toFixed(2)}`;
}

// Função para adicionar evento ao botão de adicionar
const buttons = document.querySelectorAll('.menu-item button');
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        const item = event.target.closest('.menu-item');
        const nome = item.querySelector('h3').innerText;
        const preco = parseFloat(item.querySelector('span').innerText.replace('R$', '').trim());

        adicionarComanda(nome, preco);
    });
});

// Função para finalizar a comanda
document.getElementById('finalizar-comanda').addEventListener('click', () => {
    const observacoes = document.getElementById('observacoes').value; // Captura as observações
    alert("Comanda finalizada! Observações: " + observacoes);

    // Limpa a comanda e as observações
    document.getElementById('itens-comanda').innerHTML = ''; 
    document.getElementById('observacoes').value = ''; 
    total = 0; // Resetar o total
    document.getElementById('total-comanda').innerText = `Total: R$ 0.00`;
});

// Função para alternar a visibilidade da comanda
const comanda = document.querySelector('.comanda-section');
const toggleButton = document.querySelector('.toggle-comanda');

// Alterna a visibilidade da comanda e a seta
toggleButton.addEventListener('click', () => {
    comanda.classList.toggle('visible');  // Alterna a visibilidade
    comanda.classList.toggle('hidden');   // Alterna a visibilidade
    toggleButton.classList.toggle('open');  // Alterna a rotação da seta
});
