"use strict";

window.onload = function() {
    document.getElementById("botao").onclick = function() {
        calcularImc();
    };
};

function calcularImc() {
    let altura = parseFloat(document.getElementById("txtaltura").value);
    let peso = parseFloat(document.getElementById("txtpeso").value);
    let imc = peso / (altura * altura);
    document.getElementById("txtimc").value = imc.toFixed(2);

    let sexo;
    if (document.getElementById("sexH").checked) {
        sexo = 1;
    } else if (document.getElementById("sexF").checked) {
        sexo = 2;
    }

    let mensagem = conceitoImc(imc, sexo);
    document.getElementById("txtcondição").value = mensagem;
}

function conceitoImc(imc, sexo) {
    let condicao = "";
    if (sexo === 1) { // Masculino
        if (imc < 20.7) {
            condicao = "Abaixo do peso";
        } else if (imc >= 20.7 && imc < 26.4) {
            condicao = "No peso normal";
        } else if (imc >= 26.4 && imc < 27.8) {
            condicao = "Acima do peso";
        } else if (imc >= 27.8 && imc < 31.7) {
            condicao = "Acima do peso ideal";
        } else {
            condicao = "Obeso";
        }
    } else { // Feminino
        if (imc < 19.1) {
            condicao = "Abaixo do peso";
        } else if (imc >= 19.1 && imc < 25.8) {
            condicao = "No peso normal";
        } else if (imc >= 25.8 && imc < 27.3) {
            condicao = "Acima do peso";
        } else if (imc >= 27.3 && imc < 32.3) {
            condicao = "Acima do peso ideal";
        } else {
            condicao = "Obeso";
        }
    }
    return condicao;
}
