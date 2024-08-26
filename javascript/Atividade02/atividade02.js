function calc(id1,id2,respID,operador){
      
        var num1 = parseFloat(document.getElementById(id1).value)
        var num2 = parseFloat(document.getElementById(id2).value)
        var resultado
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
        document.getElementById(respID).textContent = resultado
}