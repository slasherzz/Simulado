function nData(){
    data = new Date()
    dia = data.getDate()
    mes = data.getMonth() + 1
    ano = data.getFullYear()
    if (dia < 10){  
        dia = "0" + dia
    }
    if (mes < 10){
        mes = "0" + mes
    }
    document.getElementById("n_data").innerHTML = dia + " / " + mes + " / " + ano;
}

function correcao1(){
    let questao1 = document.getElementById("resposta1").value
    let questao2 = document.getElementById("resposta2").value
    let questao3 = document.getElementById("resposta3").value
    resposta1 = "60"
    resposta2 = "6"
    resposta3 = "0"
    let a = document.createElement('a');
    a.target='_blank';
    a.href='Home_1.html';

    acertos = 0
    if (questao1 == resposta1)
    {
        acertos = acertos + 1
    }
    if (questao2 == resposta2)
    {
        acertos = acertos + 1
    }
    if (questao3 == resposta3)
    {
        acertos = acertos + 1
    }
    if (acertos >= 2)
    {
        if (window.confirm('Parabéns você passou!')) 
        {
        a.click();
        }
    }else{
        alert("Reprovado")
    }
}
function correcao2(){
    let questao4 = document.getElementById("resposta1").value
    let questao5 = document.getElementById("resposta2").value
    let questao6 = document.getElementById("resposta3").value
    resposta4 = "177.376"
    resposta5 = "182.500"
    resposta6 = "1"
    let a = document.createElement('a');
    a.target='_blank';
    a.href='Home_2.html';

    acertos = 0
    if (questao4 == resposta4)
    {
        acertos = acertos + 1
    }
    if (questao5 == resposta5)
    {
        acertos = acertos + 1
    }
    if (questao6 == resposta6)
    {
        acertos = acertos + 1
    }
    if (acertos >= 2)
    {
        if (window.confirm('Parabéns você passou!')) 
        {
        a.click();
        }
    }else{
        alert("Reprovado")
    }
}
function correcao3(){
    let questao7 = document.getElementById("resposta1").value
    let questao8 = document.getElementById("resposta2").value
    let questao9 = document.getElementById("resposta3").value
    resposta7 = "-3"
    resposta8 = "29,7"
    resposta9 = "16 m"
    let a = document.createElement('a');
    a.target='_blank';
    a.href='Finalizar.html';

    acertos = 0
    if (questao7 == resposta7)
    {
        acertos = acertos + 1
    }
    if (questao8 == resposta8)
    {
        acertos = acertos + 1
    }
    if (questao9 == resposta9)
    {
        acertos = acertos + 1
    }
    if (acertos >= 2)
    {
        if (window.confirm('Parabéns você passou!')) 
        {
        a.click();
        }
    }else{
        alert("Reprovado")
    }
}
function nomear()
{
    var nome = prompt("Digite seu nome aqui:")
    document.getElementById("nome").innerHTML = "Bem Vindo " + nome + " aqui começa seu teste, Boa sorte"
}
