// let count = 1;
// while (count <= 10) {
//     console.log(count);
//     count++;
// }
// let originalString = "Hello";
// let reversedString = "";
// let index = originalString.length - 1;
// while (index >= 0) {
//     reversedString += originalString[index];
//     index--;
// }
// console.log(reversedString);


// var faixa, qtdFaixa1 = 0, qtdFaixa2 = 0; qtdFaixa3 = 0, qtdFaixa4 = 0;
// var fimProg = 'N';

// while (fimProg === 'N') { 

//         faixa = parseInt(prompt("Informe a faixa"));
//         switch (faixa) {
//         case 1: qtdFaixa1 = qtdFaixa1 + 1;
//                 break;
//         case 2: qtdFaixa2 = qtdFaixa2 + 1;
//                 break;
//         case 3: qtdFaixa3 = qtdFaixa3 + 1;
//                 break;
//         case 4: qtdFaixa4 = qtdFaixa4 + 1;
//                 break;
//         }
//         fimProg = prompt("Finaliza o programa?(S/N)");
// }

// document.write("Faixa 1 : " + qtdFaixa1 + "\n");
// document.write("Faixa 2 : " + qtdFaixa2 + "\n");
// document.write("Faixa 3 : " + qtdFaixa3 + "\n");
// document.write("Faixa 4 : " + qtdFaixa4 + "\n");



// var faixa, qtdFaixa1 = 0, qtdFaixa2 = 0; qtdFaixa3 = 0, qtdFaixa4 = 0;

// for (var i = 1; i <= 6; i++){
//         faixa = parseInt(prompt("Informe a faixa"));
//         switch (faixa) {
//         case 1: qtdFaixa1 = qtdFaixa1 + 1;
//                 break;
//         case 2: qtdFaixa2 = qtdFaixa2 + 1;
//                 break;
//         case 3: qtdFaixa3 = qtdFaixa3 + 1;
//                 break;
//         case 4: qtdFaixa4 = qtdFaixa4 + 1;
//                 break;
//         }
// }


// op=0;
// do{
//     var sexo = prompt("Informe o sexo: \nF - feminino - \nM - Masculino \nI -Indefinido" );
//     idade = parseInt(prompt("Informe a idade: "))
//         if(sexo == "F" || sexo == "f"){
//             alert("Sexo feminino");
//             op = 1;

//         }else if(sexo == "M" || sexo == "m"){
//             alert("Sexo Masculino");
//             op =1;
//         }else if(sexo == "I"|| sexo == "i"){
//             alert("Sexo indefinido");
//             op =1;
//         } else {
//             alert("Informe uma das opções")
//         }
// }  

// while (op === 0)

// Solicita ao usuário que digite uma letra
// var letra = prompt("Digite uma letra:").toLowerCase(); // Converte a letra para minúscula para facilitar a comparação

// // Verifica se a entrada é uma única letra
// if (letra.length === 1) {
//     // Verifica se a letra é uma vogal
//     if (letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u") {
//         alert("A letra digitada é uma vogal.");
//     } else {
//         alert("A letra digitada é uma consoante.");
//     }
// } else {
//     alert("Por favor, digite apenas uma letra.");
// }



// // Solicita ao usuário que digite o turno de estudo
// var turno = prompt("Em que turno você estuda?\nDigite M para matutino, V para vespertino ou N para noturno:").toUpperCase(); // Converte a entrada para maiúsculas

// // Verifica o turno e imprime a mensagem apropriada
// if (turno === "M") {
//     alert("Bom dia!");
// } else if (turno === "V") {
//     alert("Boa tarde!");
// } else if (turno === "N") {
//     alert("Boa noite!");
// } else {
//     alert("Valor inválido");
// }






// // Solicita ao usuário que digite o salário atual do colaborador
// var salarioAtual = parseFloat(prompt("Digite o salário atual do colaborador:"));

// // Variáveis para armazenar o percentual de aumento e o novo salário
// var percentualAumento, novoSalario;

// // Calcula o reajuste com base nas faixas de salário
// if (salarioAtual <= 280) {
//     percentualAumento = 20;
// } else if (salarioAtual <= 700) {
//     percentualAumento = 15;
// } else if (salarioAtual <= 1500) {
//     percentualAumento = 10;
// } else {
//     percentualAumento = 5;
// }





// // Calcula o valor do aumento e o novo salário
// var aumento = (percentualAumento / 100) * salarioAtual;
// novoSalario = salarioAtual + aumento;

// // Exibe as informações
// alert("Salário antes do reajuste: R$ " + salarioAtual.toFixed(2) +
//     "\nPercentual de aumento aplicado: " + percentualAumento + "%" +
//     "\nValor do aumento: R$ " + aumento.toFixed(2) +
//     "\nNovo salário após o aumento: R$ " + novoSalario.toFixed(2));





// Solicita ao usuário que responda às perguntas
var telefone = prompt("Telefonou para a vítima? (sim ou não)").toLowerCase();
var local = prompt("Esteve no local do crime? (sim ou não)").toLowerCase();
var moraPerto = prompt("Mora perto da vítima? (sim ou não)").toLowerCase();
var deve = prompt("Devia para a vítima? (sim ou não)").toLowerCase();
var trabalhou = prompt("Já trabalhou com a vítima? (sim ou não)").toLowerCase();

// Variável para contar as respostas positivas
var respostasPositivas = 0;

// Verifica as respostas e conta as positivas
if (telefone === "sim") {
    respostasPositivas++;
}
if (local === "sim") {
    respostasPositivas++;
}
if (moraPerto === "sim") {
    respostasPositivas++;
}
if (deve === "sim") {
    respostasPositivas++;
}
if (trabalhou === "sim") {
    respostasPositivas++;
}

// Classifica a pessoa com base nas respostas
var classificacao;
if (respostasPositivas === 2) {
    classificacao = "Suspeita";
} else if (respostasPositivas >= 3 && respostasPositivas <= 4) {
    classificacao = "Cúmplice";
} else if (respostasPositivas === 5) {
    classificacao = "Assassino";
} else {
    classificacao = "Inocente";
}

// Exibe a classificação
alert("Classificação: " + classificacao);
