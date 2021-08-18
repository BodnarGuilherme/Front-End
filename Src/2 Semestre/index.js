function calcularImc(){
    var peso = document.getElementById("Peso").value
    var altura = document.getElementById("Altura").value
    var imc = peso / (altura * altura)
    console.log(imc)

    alert("Seu imc é: " + Math.round(imc))
}