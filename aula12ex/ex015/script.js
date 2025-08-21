let botao = document.getElementById('button');
botao.addEventListener('click', verificar);
function verificar(){
    let data = new Date();
    let ano = data.getFullYear();
    let fano = document.getElementById('txtano');
    let resultado = document.querySelector('div#res');
    if (fano.value == 0 || Number(fano.value) > ano){
        window.alert('[ERRO] VERIFIQUE OS DADOS E TENTE NOVAMENTE')
    } else{
        let fsex = document.getElementsByName('radsex');
        let idade = ano - Number(fano.value);
        let genero = '';
        let img = document.createElement('img');
        img.setAttribute('id', 'foto'); 
        if (fsex[0].checked){
            genero = 'Homem'
            img.style.background = 'rgb(0, 182, 255)'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'bebeH.jpg');
            } else if (idade >= 10 && idade < 21){
                // Jovem
                img.setAttribute('src', 'jovemH.jpg');
            } else if (idade > 21 && idade < 60){
                // Adulto
                img.setAttribute('src', 'adultoH.jpg');
            } else{
                // Idoso
                img.setAttribute('src', 'idosoH.jpg');
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            document.body.style.background = 'pink'
            img.style.background = 'pink'
            if (idade >= 0 && idade < 10){
                // Criança
                img.setAttribute('src', 'bebeM.jpg');
            } else if (idade >= 10 && idade < 21){
                // Jovem
                img.setAttribute('src', 'jovemM.jpg');
            } else if (idade >= 21 && idade < 60){
                // Adulto
                img.setAttribute('src', 'adultoM.jpg');
            } else{
                // Idoso
                img.setAttribute('src', 'idosaM.jpg');
            }
        }
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        resultado.appendChild(img);
    }
}
    