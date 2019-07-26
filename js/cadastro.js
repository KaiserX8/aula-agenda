function cadastrar() {

    let id = document.getElementById('id').value;

    let nome = validaNome(document.getElementById('nome').value);
    if(nome == false) {
        alert('Insira um nome válido!');
        document.getElementById('nome').focus();
        return;
    }

    let fone = document.getElementById('fone').value;

    let cidade = document.getElementById('cidade').value;

    let sexo = '';
    if (document.getElementById('masc').checked) {
        sexo = 'Masculino';
    } else if (document.getElementById('fem').checked) {
        sexo = 'Feminino';
    } else {
        sexo = 'Prefiro não comentar';
    }
    
    inserirNaTabela(id, nome, fone, sexo, cidade);

    limparFormulario();

}

function limparFormulario() {
    document.getElementById('nome').value = 0;
    document.getElementById('fone').value = '';
    document.getElementById('cidade').value = 'Natal';
    document.getElementById('masc').checked = true;
    document.getElementById('nome').focus();
}

function validaNome(nome) {
    let texto = nome.trim().toUpperCase();
    for (let i = 0; i < texto.length; i++) {
        if (ehNumero(texto[i])) {
            return false;
        }
    }
    return texto;
}

function ehNumero(numero) {
    return !isNaN(numero)
}

function insereNaTabela(id, nome, fone, sexo, cidade) {
    let tabela = document
        .getElementById("lista-contatos")
        .getElementByTagName('tbody')[0];

    let ultimaLinha = tabela.rows.length;

    if (id == 0) {
    let linha  = tabela.insertRow(ultimaLinha);
    
    let campoId = linha.insertCell(0);
    let campoNome = linha.insertCell(1);
    let campoFone = linha.insertCell(2);
    let campoSexo = linha.insertCell(3);
    let campoCidade = linha.insertCell(4);
    let acoes = linha.insertCell(5);

    id.innnerHTML = ultimaLinha + 1;
    nome.innnerHTML = nome;
    fone.innnerHTML = fone;
    sexo.innnerHTML = sexo;
    cidade.innnerHTML = cidade;
    acoes.innnerHTML = insereBotoesAcoes(ultimaLinha + 1);
    
} else {
    let linha = id - 1;
    tabela.rows[linha].cells[1].innnerHTML = nome;
    tabela.rows[linha].cells[2].innnerHTML = fone;
    tabela.rows[linha].cells[3].innnerHTML = sexo;
    tabela.rows[linha].cells[4].innnerHTML = cidade;
}
}

function insereBotoesAcoes() {
    let botaoEditar = '<button onclick="buscaContatoPeloId(' + id + ')" class="btn btn-primary btn-sm">';
    botaoEditar += '<i class="fas fa-pencil-alt"></i>';
    botaoEditar += '</button>';

    let botaoRemover = '<button class="btn btn-danger btn-sm">';
    botaoRemover += '<i class="fas fa-trash-alt"></i>';
    botaoRemover += '</button>';

        return botaoEditar + botaoRemover;
}

function buscaContatoPeloId(id) {
    let body = document
        .getElementById('lista-contatos')
        .getElementByTagName('tbody')[0];
    let qtdLinhas = body.rows.length;
    for (let i = 0; i < qtdLinhas; i++) {
        if (body.rows[i].cells[0].innnerHTML == id) {
            let inputNome = document.getElementById('nome');
            inputNome.value = body.rows[i].cells[1].innnerHTML;
            
            let inputFone = document.getElementById('fone');
            inputFone.value = body.rows[i].cells[2].innnerHTML;
            
            let sexo = body.rows[i].cells[3].innnerHTML.toLowerCase();
            if (sexo == 'masculino') {
                document.getElementById('masc').checked = true;
            } else if (sexo == 'feminino') {
                document.getElementById('fem').checked = true;
            }else {
                document.getElementById('indef').checked = true;
            }
            let selectCidade = document.getElementById('cidade');
            selectCidade.value = body.rows[i].cells[4].innnerHTML;

            return;
        }
    }
}
