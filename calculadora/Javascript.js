

function calcula(op){
    let numero1 = Number(document.getElementById("numero1").value);
    let numero2 = Number(document.getElementById("numero2").value);
    let operacion;

    switch (op){
        case "+":
            operacion = (a,b) => {
                return a + b;
            };
            break;
        case "-":
            operacion = (a,b) => a - b;
            break;
        case "*":
            operacion = (a,b) => a * b;
            break;
        case "/":
            operacion = (a,b) => a / b;
            break;
    }
}
    document.getElementById("resultado").innerHTML = op(numero1, numero2);
