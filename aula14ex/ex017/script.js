let botao = document.getElementById('button');
botao.addEventListener('click', tabuada);
function tabuada(){
    let num = document.getElementById('txtn');
    let tabuada = document.getElementById('seltab');
    if (num.value.length == 0){
        window.alert('[ERRO] Preencha os dados corretamente! ');
    } else {
        let n = Number(num.value);
        tabuada.innerHTML = '';
        for (let c = 1; c <= 10; c++){
            let item = document.createElement('option');
            item.text = `${n} x ${c} = ${n * c}`;
            item.value = `tab${c}`;
            tabuada.appendChild(item);
        }
    }
    

}