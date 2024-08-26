function soma(){
    var numero01 = document.getElementById("number1").valueAsNumber
    var numero02 = parseFloat (document.getElementById("number2").value)
    var resposta = document.getElementById("respSoma")
    console.log(numero01,numero02,resposta)
    resposta.textContent =numero01+numero02
}
function subtracao(){
    var numero03 = document.getElementById("number3").valueAsNumber
    var numero04 = parseFloat (document.getElementById("number4").value)
    var resposta = document.getElementById("respSub")
    console.log(numero03,numero04,resposta)
    resposta.textContent =numero03-numero04
}
function mutiplicacao(){
    var numero05 = document.getElementById("number5").valueAsNumber
    var numero06 = parseFloat (document.getElementById("number6").value)
    var resposta = document.getElementById("respMuti")
    console.log(numero05,numero06,resposta)
    resposta.textContent =numero05*numero06 }

    function divisao(){
        var numero07 = document.getElementById("number7").valueAsNumber
        var numero08 = parseFloat (document.getElementById("number8").value)
        var resposta = document.getElementById("respDiv")
        console.log(numero07,numero08,resposta)
        resposta.textContent =numero07/numero08 }