let data = new Date();

console.log("A data de hoje é: " + data);

console.log("O dia de hoje é: " + data.getDate());

console.log("O ano atual é: " + data.getFullYear());

console.log("O mês atual é: " + data.getMonth());

console.log("Mostrando a data no formato Português-Brasil: " + data.toLocaleDateString("pt-br"));
console.log("Mostrando a data no formato Inglês : " + data.toLocaleDateString("en"));
console.log("Mostrando a data no formato Chinês : " + data.toLocaleDateString("zh-cn"));
console.log("Mostrando a data no formato Coreano : " + data.toLocaleDateString("ko"));	
console.log("Mostrando a data no formato Japonês : " + data.toLocaleDateString("ja"));	
//https://www.alphatrad.pt/o-codigo-das-linguas

