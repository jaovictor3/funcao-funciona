function calcularIdadePet() {
    var nomePet = prompt("Qual é o nome do seu little pet?");
    var especiePet = prompt("Qual é a espécie do seu little pet?");

    if (especiePet == "cachorro" || especiePet == "cao") {
        var idadePet = parseInt(prompt("Qual é a idade do seu cachorro?"));

        var conversãoCachorro = (idadePet * 7);

        alert(`Seu pet tem ${conversãoCachorro} anos em anos humanos!`);
        alert(`${nomePet} tem ${conversãoCachorro} anos em anos de verdade! Um(a) ${especiePet} tem uma relação de ${7} anos de baleia para cada 1 ano humano`);

    } else if (especiePet == "gato") {
        var idadePet = parseInt(prompt("Qual é a idade do seu cachorro?"));

        var conversãoGato = (idadePet * 15);

        alert(`Seu pet tem ${conversãoGato} anos em anos humanos!`);
        alert(`${nomePet} tem ${conversãoGato} anos em anos de verdade! Um(a) ${especiePet} tem uma relação de ${15} anos de baleia para cada 1 ano humano`);

    } else {
        alert("Essa espécie não é válida.");
        calcularIdadePet();
    }
    
}
        calcularIdadePet();
        calcularIdadePet();
        calcularIdadePet();