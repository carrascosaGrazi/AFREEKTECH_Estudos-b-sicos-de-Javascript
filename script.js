function calcular() {
    var nota1 = document.getElementById("nota1").valueAsNumber

    var nota2 = document.getElementById("nota2").valueAsNumber

    var nota3 = document.getElementById("nota3").valueAsNumber

    var nota4 = document.getElementById("nota4").valueAsNumber

    var media = (nota1 + nota2 + nota3 + nota4) / 4;

    var status

    if (media >= 7) {
        status = "Aprovação!"
    } else if (media >= 5 || media < 7) {
        status = "Recuperação."
    } else {
        status = "Reprovação"
    }

    var resultado = document.getElementById("resultado")
    resultado.textContent = media + " " + status
}

