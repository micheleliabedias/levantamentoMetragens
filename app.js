buttonElementCalc = document.querySelector("#btnCalc")

buttonElementCalc.onclick = function calc(){
    var nome = document.querySelector("#nome").value
    var altura = document.querySelector("#altura").value
    var peso = document.querySelector("#peso").value
    
    /*var resultado = peso / (altura* altura)
    alert("Seu IMC é de: "+ resultado.toFixed(2))
    */

    var resultado = (peso / (altura * altura)).toFixed(0)
    
    /*var pResult = document.createElement("p")
    pResult.innerText = "Resultado:"

    var novoinput = document.createElement("input")
    var divPai = document.querySelector("#resultado")
    
    novoinput.value = resultado
    divPai.appendChild(pResult)
    divPai.appendChild(novoinput)
*/
    document.querySelector("#textResultado").value = resultado
    document.querySelector("#resultado").style.display = "flex"
    document.querySelector("#app").style.display = "none"

}


buttonElementClear = document.querySelector("#clear")
buttonElementClear.onclick = function clear(){
    document.querySelector("#resultado").style.display = "none"
    document.querySelector("#app").style.display = "flex"


    document.querySelector("#nome").value = ""
    document.querySelector("#altura").value = ""
    document.querySelector("#peso").value = ""

}


