var faixa, qtdFaixa1 = 0, qtdFaixa2 = 0; qtdFaixa3 = 0, qtdFaixa4 = 0;
var fimProg = 'N';

while (fimProg === 'N') { 

        faixa = parseInt(prompt("Informe a faixa"));
        switch (faixa) {
        case 1: qtdFaixa1 = qtdFaixa1 + 1;
                break;
        case 2: qtdFaixa2 = qtdFaixa2 + 1;
                break;
        case 3: qtdFaixa3 = qtdFaixa3 + 1;
                break;
        case 4: qtdFaixa4 = qtdFaixa4 + 1;
                break;
        }
        fimProg = prompt("Finaliza o programa?(S/N)");
}

document.write("Faixa 1 : " + qtdFaixa1 + "\n");
document.write("Faixa 2 : " + qtdFaixa2 + "\n");
document.write("Faixa 3 : " + qtdFaixa3 + "\n");
document.write("Faixa 4 : " + qtdFaixa4 + "\n");


usando for
var faixa, qtdFaixa1 = 0, qtdFaixa2 = 0; qtdFaixa3 = 0, qtdFaixa4 = 0;

for (var i = 1; i <= 6; i++){
        faixa = parseInt(prompt("Informe a faixa"));
        switch (faixa) {
        case 1: qtdFaixa1 = qtdFaixa1 + 1;
                break;
        case 2: qtdFaixa2 = qtdFaixa2 + 1;
                break;
        case 3: qtdFaixa3 = qtdFaixa3 + 1;
                break;
        case 4: qtdFaixa4 = qtdFaixa4 + 1;
                break;
        }
}

https://edegan.notion.site/Git-101-Guia-Pr-tico-para-Iniciantes-63cfcea6d56b4ec892f11d31e573bb64?pvs=4



2023-08-23
Exercícios de Laço de Repetição

Desenvolva uma aplicação que permita informar 
as notas das avaliações de dois alunos.
Cada aluno tem duas avaliações.
Calcule a média e informe se está aprovado ou reprovado.
Aprovado  -> média >= 7
Reprovado -> média < 7


==> Usando While
// variável para controlar qtde de alunos lidos
var qtdAlunos = 1, qtdNotas = 1, notaAluno = 0.0, acumNotas = 0.0;
var mediaAluno = 0.0;
var nomeAluno = "";

// laço para controlar leitura de alunos
while (qtdAlunos <= 2) {
    nomeAluno = prompt("Informe o nome do aluno nr " + qtdAlunos);
    // para cada aluno vai começar o nr de notas em 1 e zerar o acumulador de notas ("M+")
    qtdNotas = 1;
    acumNotas = 0.0;
    while (qtdNotas <= 2) {
        notaAluno = parseFloat(prompt("Informe a nota nr " + qtdNotas + " do aluno " + nomeAluno));
        //acumNotas+= notaAluno; <= outra forma de acumular as notas
        acumNotas = acumNotas + notaAluno;
        qtdNotas++;
    }
    mediaAluno = acumNotas / 2;
    
    if (mediaAluno >= 7){
        document.write("O aluno " + nomeAluno + " está aprovado com media = " + mediaAluno + "<br>");
    } else {
        document.write("O aluno " + nomeAluno + " está reprovado com media = " + mediaAluno + "<br>");
    }
    /* 
       incrementa qtdAlunos para em algum momento quebrar a condição
       do while 
    */
    qtdAlunos++;
}

document.write("Programa Finalizado...");



==> Usando For
// variável para controlar qtde de alunos lidos
var notaAluno = 0.0, acumNotas = 0.0;
var mediaAluno = 0.0;
var nomeAluno = "";

// laço para controlar leitura de alunos
for (var qtdAlunos = 1;qtdAlunos <= 2;qtdAlunos++) {
    nomeAluno = prompt("Informe o nome do aluno nr " + qtdAlunos);
    // para cada aluno vai começar o nr de notas em 1 e zerar o acumulador de notas ("M+")
    qtdNotas = 1;
    acumNotas = 0.0;
    for (var qtdNotas = 1;qtdNotas <= 2;qtdNotas++) {
        notaAluno = parseFloat(prompt("Informe a nota nr " + qtdNotas + " do aluno " + nomeAluno));
        //acumNotas+= notaAluno; <= outra forma de acumular as notas
        acumNotas = acumNotas + notaAluno;
    }
    mediaAluno = acumNotas / 2;
    if (mediaAluno >= 7){
        document.write("O aluno " + nomeAluno + " está aprovado com media = " + mediaAluno + "<br>");
    } else {
        document.write("O aluno " + nomeAluno + " está reprovado com media = " + mediaAluno + "<br>");
    }
}

document.write("Programa Finalizado...");

let o = { x: 1, y: 2, z: 3 };
let keys = "";
for(let k of Object.keys(o)) {
keys += k;
}
keys // => "xyz"