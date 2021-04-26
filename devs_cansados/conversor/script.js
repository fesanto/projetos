//primeiro saber se o js tá funcionando. Cria uma função com alert pra ter certeza

function init() {
    //1. fetch acessa a URL
    fetch("https://economia.awesomeapi.com.br/all/USD-BRL")
        //2. então quando a resposta estiver aqui ele fará o que está dentro do bloco. Se vc tem uma resposta positiva do fetch, transforma a resposta em json
        .then((response) => {
            console.log(response);
            return response.json()
        })
        //3. recebida a resposta vamos tratar o data
        .then((data) => {
            console.log(data, "olha ae");
            let moedaAtual = data.USD.low;
            //setando o item no localstorage pra evitar uma variavel global
            localStorage.setItem('valorDaCotacao', moedaAtual);
            let cotacao = document.querySelector("#cotacao");
            console.log(cotacao);
            cotacao.innerHTML = "Cotação do Dólar Americano hoje: R$ " + moedaAtual;
        })
}


function multiply(valorDaCotacao, valorAConverter) {
    return valorDaCotacao * valorAConverter
}

//4. fazer uma função para pegar o valor através do botão
function convert(){
    let value = document.querySelector("#valor");
    //pegando o item no localstorage (colocamos dentro de uma variável) para usar na multiplicação
    let valorDaCotacao = localStorage.getItem('valorDaCotacao');
    //esse está fazendo a operação que queremos
    let operation = this.multiply(valorDaCotacao, value.value); 
    let finalValue = document.querySelector("#valorFinal");
    finalValue.innerHTML = "R$ " + operation.toFixed(2);   
    value.value='';  
}

init();