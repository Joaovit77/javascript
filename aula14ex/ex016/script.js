let botao = document.getElementById('button');
botao.addEventListener('click', contar);
function contar(){
    let ini = document.getElementById('txti');
    let fim = document.getElementById('txtf');
    let passo = document.getElementById('txtp');
    let resultado = document.getElementById('res');
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] Faltam dados!');
        resultado.innerHTML = 'Impossivel Contar!'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(ini.value);
        let f = Number(fim.value);
        let p = Number(passo.value);
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1');
            p = 1;
        }
        if (i < f){
            // Contagem crescente
            for (let c = i; c <= f; c += p){
                resultado.innerHTML += ` ${c} \u{1f449}`;
            }
        } else{
            // Contagem regressiva
            for (let c = i; c >= f; c -= p){
                resultado.innerHTML += ` ${c} \u{1f449}`;
            }
        }
        resultado.innerHTML += `\u{1f3c1}`;
    }
}