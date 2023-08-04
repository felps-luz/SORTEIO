let button= document.getElementById('sortear');

button.addEventListener('click', function () {
    let min = parseInt(document.getElementById('min').value);
    let max = parseInt(document.getElementById('max').value);

    let resultado = Math.floor(Math.random()*(max - min + 1)+min)

    if(isNaN(resultado)){
        resultado = "Você é  B E T A, coloque os numeros na caixa "
    }


    document.querySelector('#resultado').textContent = resultado;
})