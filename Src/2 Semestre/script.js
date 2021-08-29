function classificarImc(){
    var img = document.getElementById("img");
    var peso = document.getElementById("Peso").value;
    var altura = document.getElementById("Altura").value;
    var imc = (peso / (altura * altura)).toFixed(1);
    var res = document.getElementById("res");

    if(imc <= 18.5){
        img.src = "https://abeso.org.br/wp-content/uploads/2019/12/imc_06.png";
        res.innerText = "Seu imc: " + imc + " - Abaixo do normal";
    }else if(imc <= 24.9){
        img.src = "https://abeso.org.br/wp-content/uploads/2019/12/imc_05.png";
        res.innerText = "Seu imc: " + imc + " - Normal";
    }else if(imc <= 29.9){
        img.src = "https://abeso.org.br/wp-content/uploads/2019/12/imc_04.png";
        res.innerText = "Seu imc: " + imc + " - Sobrepeso";
    }else if(imc <= 34.9){
        img.src = "https://abeso.org.br/wp-content/uploads/2019/12/imc_03.png";
        res.innerText = "Seu imc: " + imc + " - Obesidade grau I";
    }else if(imc <= 39.9){
        img.src = "https://abeso.org.br/wp-content/uploads/2019/12/imc_02.png";
        res.innerText = "Seu imc: " + imc + " - Obesidade grau II";
    }else{
        img.src = "https://abeso.org.br/wp-content/uploads/2019/12/imc_01.png";
        res.innerText = "Seu imc: " + imc + " - Obesidade grau III";
    }

}