let botao1 = document.getElementById('button1');
let botao2 = document.getElementById('button2');
let numero = document.getElementById('txtn');
let resultado = document.getElementById('res');
let lista = document.getElementById('ilista');
let vetor = [];
botao1.addEventListener('click', Adicionar);
botao2.addEventListener('click', Finalizar);
function Adicionar(){
    let valor = Number(numero.value);
    vetor.unshift(valor);
    let semDuplicados = [... new Set(vetor)] 
    if (numero.value.length == 0){
        alert('[ERRO] Preencha os dados corretamente!')
    }else if (numero.value > 100 || numero.value < 1){
        alert('[ERRO] Digite um número entre 1 e 100!')
    }else if (vetor.length !== semDuplicados.length){
        alert('[ERRO] Número duplicado')
    } else{
        let item = document.createElement('option');
        item.innerHTML = `${valor} valor adicionado`;
        lista.appendChild(item);
    }
}

function Finalizar(){
    let maior = vetor[0];
    let menor = vetor[0];
    let soma = 0
    for (let c = 0; vetor.length > c; c++){
        if (vetor[c] > maior){
            maior = vetor[c];
        }
    }

    for (let i = 0; vetor.length > i; i++){
        if (vetor[i] < menor){
            menor = vetor[i]
        }
    }

    for (let s = 0; vetor.length > s; s++){
        soma += vetor[s];
    }

    resultado.innerHTML = `A o todo temos ${vetor.length} números cadastrados <br>`
    resultado.innerHTML += `O maior número é o ${maior} <br>`
    resultado.innerHTML += `O menor número é o ${menor} <br>`
    resultado.innerHTML += `Somando todos os valores temos ${soma} <br>`;
}
