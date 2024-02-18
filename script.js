let contatos = [];

function incluirContato() {
    const nome = document.getElementById('nomeContato').value.trim();
    let celular = document.getElementById('celularContato').value.trim();
    
    // Remover todos os caracteres que não são números
    celular = celular.replace(/\D/g, '');

    // Formatar o número no padrão (99) 99999-9999
    celular = `(${celular.substring(0, 2)}) ${celular.substring(2, 7)}-${celular.substring(7)}`;

    if (nome !== '' && celular !== '') {
        const contato = {
            nome: nome,
            celular: celular
        };
        contatos.push(contato);
        contatos.sort((a, b) => a.nome.localeCompare(b.nome));
        exibirContatos();
        limparCampos();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

function exibirContatos() {
    const listaContatos = document.getElementById('listaContatos');
    listaContatos.innerHTML = '';
    contatos.forEach(contato => {
        const li = document.createElement('li');
        li.textContent = `${contato.nome} - ${contato.celular}`;

        // Botão para deletar contato
        const botaoDeletar = document.createElement('button');
        botaoDeletar.textContent = 'Deletar';
        botaoDeletar.classList.add('botao-deletar');
        botaoDeletar.onclick = function() {
            deletarContato(contato.nome);
        };
        li.appendChild(botaoDeletar);

        listaContatos.appendChild(li);
    });
}

function limparCampos() {
    document.getElementById('nomeContato').value = '';
    document.getElementById('celularContato').value = '';
}

function pesquisarContato() {
    const termoPesquisa = document.getElementById('pesquisarContato').value.trim().toLowerCase();
    const contatosFiltrados = contatos.filter(contato => contato.nome.toLowerCase().includes(termoPesquisa));
    const listaContatos = document.getElementById('listaContatos');
    listaContatos.innerHTML = '';
    contatosFiltrados.forEach(contato => {
        const li = document.createElement('li');
        li.textContent = `${contato.nome} - ${contato.celular}`;

        // Botão para deletar contato
        const botaoDeletar = document.createElement('button');
        botaoDeletar.textContent = 'Deletar';
        botaoDeletar.classList.add('botao-deletar');
        botaoDeletar.onclick = function() {
            deletarContato(contato.nome);
        };
        li.appendChild(botaoDeletar);

        listaContatos.appendChild(li);
    });
}

function deletarContato(nome) {
    contatos = contatos.filter(contato => contato.nome !== nome);
    exibirContatos();
}