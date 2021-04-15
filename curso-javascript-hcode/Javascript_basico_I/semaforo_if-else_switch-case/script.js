let cor = "azul";

//IF ELSE
/*if (cor === "verde") {
    console.log("Siga");
} else if (cor === "amarelo") {
    console.log("Atenção"); 
} else if (cor === "vermelho") {
    console.log("Pare");
} else {
    console.log("A cor em questão não consta no semáforo");
}*/

//SWITCH CASE
switch (cor) {
    case "verde":
        console.log("Siga");
        break;

    case "amarelo":
        console.log("Atenção");
        break;

    case "vermelho":
        console.log("Pare");
        break;

    default:
        console.log("A cor em questão não consta no semáforo")
}