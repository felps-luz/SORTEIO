const btnSortear= document.querySelector(".sortear");
const textarea= document.querySelector("textarea");
const resultado= document.querySelector(".resultado p");
const popUpResultado= document.querySelector(".resultado");

function pegarDadosForm(){
    const valorCampo= textarea.value; //pegar os valores
    const listaRaca= valorCampo.split(","); // separar por virgula
    const tamanhoArray = listaRaca.length; // contar as raças
    const posicaoRaca = gerarRacaAleatoria(tamanhoArray); //escolher posição
    const raca = listaRaca[posicaoRaca]; // guarda a raça sorteada
    mostrarResultado(raca); 

    textarea.value="" //deixa a textarea vazia
}
btnSortear.addEventListener("click",pegarDadosForm)

function gerarRacaAleatoria(tamanhoArray){
    return Math.floor(Math.random()*(tamanhoArray - 0)+ 0) //retorna a raça
    
}
function mostrarResultado(raca){
    resultado.innerHTML = `Seu cachorro: ${raca}`
    popUpResultado.classList.add("resultado")
}
function clicar(){
    textarea.style.backgroundColor= 'white'
}