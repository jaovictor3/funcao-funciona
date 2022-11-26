function converterCelsiusFahrenhent () {

    var celsius = parseInt(prompt("Informe um valor para Celsius."));

    var convertor = ((celsius * 1.8) + 32);

    alert(` ${celsius}°C é igual a ${convertor}° F.`);
}

function converterFahrenheitCelsius () {

    var Fahrenhent = parseInt(prompt("Informe um valor para Fahrenhent."));

    var convertor = ((Fahrenhent - 32) / 1.8);

    alert(` ${Fahrenhent}°F é igual a ${convertor}°C.`);
}

converterCelsiusFahrenhent();
converterFahrenheitCelsius();