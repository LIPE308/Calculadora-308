document.getElementById("somar").onclick = function(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let resultado = n1 + n2;

    document.getElementById("resultado").innerText = "Resultado:" + resultado

}

document.getElementById("subtrair").onclick = function(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let resultado = n1 - n2;

    document.getElementById("resultado").innerText = "Resultado:" + resultado

}

document.getElementById("multiplicar").onclick = function(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let resultado = n1 * n2;

    document.getElementById("resultado").innerText = "Resultado:" + resultado

}

document.getElementById("dividir").onclick = function(){
    let n1 = Number(document.getElementById("num1").value);
    let n2 = Number(document.getElementById("num2").value);

    let resultado = n1 / n2;

    document.getElementById("resultado").innerText = "Resultado:" + resultado

}