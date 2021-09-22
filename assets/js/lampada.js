// Serve como um verificador para os códigos de JavaScript, verificando os erros mais comuns, como variável indefinida, por exemplo:

/* 

    nota = 10 * Forma de declaração não aceita

    alert (nota) * ERRO

*/

"use strict"

const lampada = document.getElementById('lampada')
let idLigar
let idDesligar

function lampaInteira() {
    return lampada.src.includes("ligada")

    /* 
    
        includes pega uma palavra do elemento para de uma vez podemos manipular eles

    */
}

function ligarLampada() {
    
    // Entramos com uma estrutura de decisão para validar se a lâmpada está inteira ou quebrada
    if (lampaInteira()) {
        lampada.src = "assets/img/ligada.jpg"
    }
}

function DesligarLampada() {

    if (lampaInteira()) {
        lampada.src = "assets/img/desligada.jpg"
    }
}

function QuebarLampada() {
    lampada.src = "assets/img/quebrada.jpg"
}

function pararPiscar() {
    clearInterval(idLigar)
    clearInterval(idDesligar)
}

function piscar() {
    const botaoPiscar = document.getElementById("piscar")
    
    if (botaoPiscar.textContent == "Piscar") {
        
        idLigar = setInterval(ligarLampada, 300)
        idDesligar = setInterval(DesligarLampada, 500)
        botaoPiscar.textContent = "Parar"
    
    } else {
        
        pararPiscar()
        botaoPiscar.textContent = "Piscar"
    }
}



// Eventos

document.getElementById('ligar').addEventListener("click", ligarLampada)
document.getElementById('desligar').addEventListener("click", DesligarLampada)
document.getElementById("piscar").addEventListener("click", piscar)

// Usamos os proprios eventos para adicionar um evento de ao passar o mouse, e um para ao sair o mouse, tendo em mente que desfrutamos de uma função pronta

lampada.addEventListener("mouseover", ligarLampada)
lampada.addEventListener("mouseout", DesligarLampada)
lampada.addEventListener("dblclick", QuebarLampada)