function calcular(){
      
    var num1 = parseFloat(document.getElementById("num1").value)
    var num2 = parseFloat(document.getElementById("num2").value)
    var resultado
    var operador=(document.getElementById("operador").value)
    console.log(num1,num2)
    
    switch (operador) {
case "+":
    resultado=num1+num2
    break;
 case "-":
    resultado=num1-num2
    break;
case "*":
    resultado=num1*num2
    break;
                
case "/":
    if (num2 !==0){

    
     resultado=num1/num2
     break;
    }else{  resultado="Erro de divisão"

    }
break;
default: 
resultado = "Operador inválido"

                    
    
        
    }
    document.getElementById("resultado").textContent = resultado
}