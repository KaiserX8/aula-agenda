function cadastrar() {

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
    
    inserirNaTabela(nome, fone, sexo, cidade);

    limparFormulario();

}

function limparFormulario() {
    document.getElementById('nome').value = '';
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

function teste() {
    let tabela = document
        .getElementById("lista-contatos");
        .getElementById("tbody")

    let ultimaLinha = tabela.rows.length;

    let linha  = tabela.insertRow(ultimaLinha);
    let id = linha.insertCell(0);
    let nome = linha.insertCell(1);
    let fone = linha.insertCell(2);
    let sexo = linha.insertCell(3);
    let cidade = linha.insertCell(4);
    let acoes ;

    id.innnerHTML = ultimaLinha;
    nome.innnerHTML = nome;
    fone.innnerHTML = fone;
    sexo.innnerHTML = sexo;
    cidade.innnerHTML = cidade;
    acoes.innnerHTML = document.write(insereBotoesAcoes());
    
}

function inserebotoesacoes() {
    let botaoEditar = '<button class="btn btn-primary btn-sm">';
    botaoEditar += '<i class="fas fa-pencil-alt"></i>';
    botaoEditar += '</button>';

    let botaoRemover = '<button class="btn btn-danger btn-sm">';
    botaoRemover += '<i class="fas fa-trash-alt"></i>';
    botaoRemover += '</button>';

        return botaoEditar + botaoRemover;
}