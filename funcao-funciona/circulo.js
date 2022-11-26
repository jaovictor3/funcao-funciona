function calcularCircunferencia() {

   
    var raio = parseFloat(prompt("Informe um valor para o raio de um círculo."));
    var conta = (2 * 3.14) * raio;

    alert(`A circunferência é ${conta}.`);

}

function calcularArea() {
    var raio = parseFloat(prompt("Informe um valor para o raio de um círculo para saber sua area."));
    var contaArea =  ((raio * raio) * 3.14);

    alert("A área é " + contaArea + ".")
}

calcularCircunferencia();
calcularCircunferencia();
calcularCircunferencia();

calcularArea();
calcularArea();
calcularArea();
