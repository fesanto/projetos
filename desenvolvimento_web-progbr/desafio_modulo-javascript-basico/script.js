//Nome do aluno - nota 1 - nota 2 - média - Aprovado/Reprovado

var alunos = ["Igor", "Catarina", "Luciano", "José", "Tais", "Leandro"];
var notasP1 = [7.0, 8.5, 7.5, 7.5, 9.0, 5.0];
var notasP2 = [7.5, 9.5, 5.0, 9.0, 9.0, 7.0];

function mediaP(notasP1, notasP2) {
  return ((notasP1 + notasP2) / 2)
}

function resultado(media) {
  if (media >= 7) {
    return "Aprovade";
  } else {
    return "Reprovade";
  }
}

for (var index in alunos) {
  var nota1 = notasP1[index];
  var nota2 = notasP2[index];
  var media = mediaP(nota1, nota2);

  console.log(index + " | " + alunos[index] + " - " + nota1 + " - " + nota2 + " - " + "Média Final: " + media + " - " + resultado(media));
}