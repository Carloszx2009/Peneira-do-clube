let formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function(event) {
    event.preventDefault();
    
    let nome = document.getElementById('nome').value;
    let idade = document.getElementById('idade').value;
    let posicao = document.getElementById('posicao').value;
    let telefone = document.getElementById('telefone').value;

    alert(
        "Inscrição realizada com sucesso!\n\n" +
        "Nome: " + nome +
        "\nIdade: " + idade +
        "\nPosição: " + posicao + 
        "\nTelefone: " + telefone
    );

    formulario.reset();
});