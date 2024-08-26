function calcular(){
      
    var peso = parseFloat(document.getElementById("peso").value)
    var altura = parseFloat(document.getElementById("altura").value)
    var altura2= altura*altura
    var resultado= peso/altura2
    
    document.getElementById("resultado").textContent= "seu IMC É:" + resultado.toFixed(2)
}

    
    