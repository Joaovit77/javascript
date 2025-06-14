function carregar(){
    let msg = document.getElementById('msg');
    let msg2 = document.getElementById('msg2')
    let img = document.getElementById('imagem');
    let fundo = document.querySelector('div#foto')
    let data = new Date();
    let hora = data.getHours();
    msg.innerHTML = `Agora são ${hora} horas...`;
    if (hora >= 0 && hora < 12){
        img.src = "dia.jpg"
        document.body.style.background = 'rgb(122, 152, 216)'
        fundo.style.background = 'blue'
        msg2.innerHTML = `Bom dia!!`        
    } else if (hora >= 12 && hora < 18){
        img.src = "tarde.jpg"
        document.body.style.background = 'rgb(214, 139, 56)'
        fundo.style.background = 'orange'
        msg2.innerHTML = `Boa Tarde!!`
    } else{
        img.src = "noite.jpg"
        document.body.style.background = 'rgb(148, 121, 174)'
        fundo.style.background = 'black'
        msg2.innerHTML = `Boa noite!!` 
    }
}

