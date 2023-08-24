// An emergency room has 4 service lanes.
// 1- Emergency
// 2- Ready service
// 3- Little Urgent
// 4- Not Urgent

// Enter the names of 6 people and fit them in the ranges above.
// Show how many were framed in each lane

// Initialize counters for each lane
// let emergencyCount = 0;
// let readyServiceCount = 0;
// let littleUrgentCount = 0;
// let notUrgentCount = 0;

// // Input the names and urgency levels of 6 people
// for (let i = 0; i < 6; i++) {
//   const name = prompt(`Enter the name of person ${i + 1}:`);
//   const urgency = parseInt(prompt(`Enter the urgency level for ${name} (1 for Emergency, 2 for Ready service, 3 for Little Urgent, 4 for Not Urgent):`));

//   if (urgency === 1) {
//     console.log(`${name} goes to Emergency lane.`);
//     emergencyCount++;
//   } else if (urgency === 2) {
//     console.log(`${name} goes to Ready service lane.`);
//     readyServiceCount++;
//   } else if (urgency === 3) {
//     console.log(`${name} goes to Little Urgent lane.`);
//     littleUrgentCount++;
//   } else if (urgency === 4) {
//     console.log(`${name} goes to Not Urgent lane.`);
//     notUrgentCount++;
//   } else {
//     console.log(`Invalid urgency level for ${name}. Please choose a level between 1 and 4.`);
//   }
// }

// // Display the counts in each lane
// console.log(`Number of people in Emergency lane: ${emergencyCount}` + "<br>");
// console.log(`Number of people in Ready service lane: ${readyServiceCount}`+ "<br>");
// console.log(`Number of people in Little Urgent lane: ${littleUrgentCount}`+ "<br>");
// console.log(`Number of people in Not Urgent lane: ${notUrgentCount}` + "<br>") ;

// var faixa, qtdFaixa1 =0, qtdFaixa2 =0, qtdFaixa3 =0;
// var nome;

// faixa = parseInt(prompt("Informe a faixa: "));
// switch (faixa) {
//     case 1:  qtdFaixa1 = qtdFaixa1+1;
//     break;
//     case 2:  qtdFaixa2 = qtdFaixa2+1;
//     break;
//     case 3: qtdFaixa3 = qtdFaixa3 +1;
//     break
//     case 4 : qtdFaixa4 = qtdFaixa4+1;
//     break;
// }

// Inicializa contadores para cada fila de atendimento
// let emergencyCount = 0;
// let readyServiceCount = 0;
// let littleUrgentCount = 0;
// let notUrgentCount = 0;

// // Início do loop para coletar informações sobre 6 pessoas
// for (let i = 0; i < 6; i++) {
//   // Solicita o nome da pessoa atual e armazena na variável 'name'
//   const name = prompt(`Enter the name of person ${i + 1}:`);

//   // Solicita o nível de urgência para a pessoa atual e converte em um número inteiro, armazenando em 'urgency'
//   const urgency = parseInt(prompt(`Enter the urgency level for ${name} (1 for Emergency, 2 for Ready service, 3 for Little Urgent, 4 for Not Urgent):`));

//   // Início do bloco 'switch' para classificar as pessoas nas filas com base no nível de urgência
//   switch (urgency) {
//     case 1:
//       // Se o nível de urgência for 1 (Emergência), exibe a mensagem apropriada e incrementa 'emergencyCount'
//       console.log(`${name} goes to Emergency lane.`);
//       emergencyCount++;
//       break;

//     case 2:
//       // Se o nível de urgência for 2 (Pronto Atendimento), exibe a mensagem apropriada e incrementa 'readyServiceCount'
//       console.log(`${name} goes to Ready service lane.`);
//       readyServiceCount++;
//       break;

//     case 3:
//       // Se o nível de urgência for 3 (Pouco Urgente), exibe a mensagem apropriada e incrementa 'littleUrgentCount'
//       console.log(`${name} goes to Little Urgent lane.`);
//       littleUrgentCount++;
//       break;

//     case 4:
//       // Se o nível de urgência for 4 (Não Urgente), exibe a mensagem apropriada e incrementa 'notUrgentCount'
//       console.log(`${name} goes to Not Urgent lane.`);
//       notUrgentCount++;
//       break;

//     default:
//       // Caso o nível de urgência seja inválido (fora do intervalo 1-4), exibe uma mensagem de erro
//       console.log(`Invalid urgency level for ${name}. Please choose a level between 1 and 4.`);
//   }
//   // Fim do bloco 'switch'

//   // Continua para a próxima pessoa no loop 'for'
// }

// // Exibe o número de pessoas em cada fila de atendimento
// document.write(`Number of people in Emergency lane: ${emergencyCount}` + "<br>");
// document.write(`Number of people in Ready service lane: ${readyServiceCount}` + "<br>");
// document.write(`Number of people in Little Urgent lane: ${littleUrgentCount}` + "<br>");
// document.write(`Number of people in Not Urgent lane: ${notUrgentCount}` + "<br>");

// let $my_var = 15;
// console.log(typeof($my_var))


// var $contador = 10;
// while ($contador >100){
// document.write("Hey! : " + $contador) ;
// $contador--;
// }
// Função para calcular a média



// Função para calcular a média
function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
      soma += notas[i];
    }
    return soma / notas.length;
  }
  
  // Informações do Aluno 1
  const aluno1Nome = prompt("Informe o nome do Aluno 1:");
  const aluno1Nota1 = parseFloat(prompt(`Informe a primeira nota de ${aluno1Nome}:`));
  const aluno1Nota2 = parseFloat(prompt(`Informe a segunda nota de ${aluno1Nome}:`));
  
  // Informações do Aluno 2
  const aluno2Nome = prompt("Informe o nome do Aluno 2:");
  const aluno2Nota1 = parseFloat(prompt(`Informe a primeira nota de ${aluno2Nome}:`));
  const aluno2Nota2 = parseFloat(prompt(`Informe a segunda nota de ${aluno2Nome}:`));
  
  // Calcula a média para cada aluno
  const aluno1Notas = [aluno1Nota1, aluno1Nota2];
  const aluno2Notas = [aluno2Nota1, aluno2Nota2];
  
  const mediaAluno1 = calcularMedia(aluno1Notas);
  const mediaAluno2 = calcularMedia(aluno2Notas);
  
  // Verifica se os alunos estão aprovados ou reprovados
  const mensagemAluno1 = mediaAluno1 >= 7 ? "Aprovado" : "Reprovado";
  const mensagemAluno2 = mediaAluno2 >= 7 ? "Aprovado" : "Reprovado";
  
  // Exibe os resultados
  console.log(`${aluno1Nome}: Média ${mediaAluno1.toFixed(2)} - ${mensagemAluno1}`);
  console.log(`${aluno2Nome}: Média ${mediaAluno2.toFixed(2)} - ${mensagemAluno2}`);

  
  

