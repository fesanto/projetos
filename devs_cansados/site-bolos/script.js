let div_festa = document.querySelector(".container_festa");
let div_caseiro = document.querySelector(".container_caseiro");

function fechar() {
  div_festa.style.height = "0px";
  div_festa.style.padding = "0px";
  div_festa.innerHTML = "";
  div_caseiro.style.height = "0px";
  div_caseiro.style.padding = "0px";
  div_caseiro.innerHTML = "";
}

function abrirfesta(botao) {
  let tipoDeBotao;
  switch (botao) {
    case 'bolo-festa-chocolate':
      tipoDeBotao = `<div class="content">
        <img src="./img/bolo-chocolate.JPG" alt="bolo de chocolate">
        <div class="content_text">
        <p>Bolo de chocolate</p>
        <p>Bolo de chocolate com recheios de brigadeiro e de mousse de leite, e cobertura de calda de chocolate.</p>
        </div>
        <p class="fechar" onclick="fechar()"> fechar </p>
      </div>`
      break;
    case 'bolo-festa-chocolatebranco':
      tipoDeBotao = `<div class="content">
        <img src="./img/bolo-chocolatebco.JPG" alt="bolo de chocolate branco">
        <div class="content_text">
        <p>Bolo de chocolate branco</p>
        <p>Bolo de chocolate branco com recheios de brigadeiro branco e de mousse de leite, e cobertura de mousse branca.</p>
       </div>
       <p class="fechar" onclick="fechar()"> fechar </p>
      </div>`
      break;
    case 'bolo-festa-limao':
      tipoDeBotao = `<div class="content">
        <img src="./img/bolo-limao.JPG" alt="bolo de limão">
        <div class="content_text">
        <p>Bolo de limão</p>
        <p>Bolo branco com recheio de creme gelado e ganache de limão, e cobertura de marshmallow e raspas de limão.</p>
        </div>
        <p class="fechar" onclick="fechar()"> fechar </p>
      </div>`
      break;
    case 'bolo-festa-ameixa':
      tipoDeBotao = `<div class="content">
        <img src="./img/bolo-ameixa.JPG" alt="bolo de ameixa">
        <div class="content_text">
        <p>Bolo de ameixa</p>
        <p>Bolo branco com recheio de creme gelado e doce de leite com ameixas, e cobertura mousse branca, ameixas e doce de leite.</p>
        </div>
        <p class="fechar" onclick="fechar()"> fechar </p>
      </div>`
      break;
    case 'bolo-festa-nozes':
      tipoDeBotao = `<div class="content">
          <img src="./img/bolo-nozes.JPG" alt="bolo de nozes">
          <div class="content_text">
          <p>Bolo de nizes</p>
          <p>Bolo branco com recheio de creme gelado e doce de leite com nozes, cobertura de marshmallow e nozes.</p>
          </div>
          <p class="fechar" onclick="fechar()"> fechar </p>
        </div>`
      break;
    case 'bolo-festa-churros':
      tipoDeBotao = `<div class="content">
        <img src="./img/bolo-churros.JPG" alt="bolo de churros">
        <div class="content_text">
        <p>Bolo de churros</p>
        <p>Bolo branco com recheios de creme de churros e mousse de canela, e cobertura de mousse branco, creme de churros e crocante de canela.</p>
        </div>
        <p class="fechar" onclick="fechar()"> fechar </p>
      </div>`
      break;
    case 'bolo-festa-morango':
      tipoDeBotao = `<div class="content">
        <img src="./img/bolo-morango.JPG" alt="bolo de morango">
        <div class="content_text">
        <p>Bolo de morango</p>
        <p>Bolo branco com recheios de creme de morango e mousse de morango, e cobertura de mousse branca.</p>
        </div>
        <p class="fechar" onclick="fechar()"> fechar </p>
      </div>`
      break;
    case 'bolo-festa-maracuja':
      tipoDeBotao = `<div class="content">
        <img src="./img/bolo-maracuja.JPG" alt="bolo de maracuja">
        <div class="content_text">
        <p>Bolo de maracujá</p>
        <p>Bolo branco com recheios de creme de maracujá e mousse de maracujá, e cobertura de mousse branca e geléia de maracujá.</p>
        </div>
        <p class="fechar" onclick="fechar()"> fechar </p>
      </div>`
      break;
    case 'bolo-festa-redvelvet':
      tipoDeBotao = `<div class="content">
        <img src="./img/bolo-redvelvet.JPG" alt="bolo red velvet">
        <div class="content_text">
        <p>Bolo de red velvet</p>
        <p>Massa red velvet com recheios de leite condensado e mousse de cream cheese, e cobertura de mousse branca.</p>
        </div>
        <p class="fechar" onclick="fechar()"> fechar </p>
      </div>`
      break;
    case 'bolo-festa-damasco':
      tipoDeBotao = `<div class="content">
        <img src="./img/bolo-damasco.JPG" alt="bolo damasco">
        <div class="content_text">
        <p>Bolo de damasco</p>
        <p>Bolo branco com recheios de trufa branca com nozes e mousse branca com geleia de damasco, e cobertura de mousse branca, geléia de damasco e nozes.</p>
        </div>
        <p class="fechar" onclick="fechar()"> fechar </p>
      </div>`
      break;
    default:
      break;
  }

  if (div_festa.style.height === "0px") {
    div_festa.style.height = "345px";
    div_festa.style.padding = "20px";
    div_festa.innerHTML = tipoDeBotao;
  } else {
    console.log(botao);
    div_festa.innerHTML = tipoDeBotao;
    console.log(div_festa.innerHTML);
  }
}

function abrircaseiro(botao) {
  let tipoDeBotao;
  switch (botao) {
    case 'bolo-caseiro-maca':
      tipoDeBotao = `<div class="content">
        <img src="./img/bolo-maca.png" alt="bolo maça">
        <div class="content_text">
        <p>Bolo de maçã</p>
        </div>
        <p class="fechar" onclick="fechar()"> fechar </p>
      </div>`
      break;
    case 'bolo-caseiro-milho':
      tipoDeBotao = `<div class="content">
          <img src="./img/bolo-milho.png" alt="bolo milho">
          <div class="content_text">
          <p>Bolo de milho</p>
          </div>
          <p class="fechar" onclick="fechar()"> fechar </p>
        </div>`
      break;
    case 'bolo-caseiro-limao':
      tipoDeBotao = `<div class="content">
          <img src="./img/bolo-limao.png" alt="bolo limão">
          <div class="content_text">
          <p>Bolo de limão</p>
          </div>
          <p class="fechar" onclick="fechar()"> fechar </p>
        </div>`
      break;
    case 'bolo-caseiro-banana':
      tipoDeBotao = `<div class="content">
          <img src="./img/bolo-banana.png" alt="bolo banana">
          <div class="content_text">
          <p>Bolo de banana</p>
          </div>
          <p class="fechar" onclick="fechar()"> fechar </p>
        </div>`
      break;
    case 'bolo-caseiro-brigadeiro':
      tipoDeBotao = `<div class="content">
            <img src="./img/bolo-brigadeiro.png" alt="bolo brigadeiro">
            <div class="content_text">
            <p>Bolo de brigadeiro</p>
            </div>
            <p class="fechar" onclick="fechar()"> fechar </p>
          </div>`
      break;
    case 'bolo-caseiro-laranja':
      tipoDeBotao = `<div class="content">
            <img src="./img/bolo-laranja.png" alt="bolo laranja">
            <div class="content_text">
            <p>Bolo de laranja</p>
            </div>
            <p class="fechar" onclick="fechar()"> fechar </p>
          </div>`
      break;
    case 'bolo-caseiro-cenoura':
      tipoDeBotao = `<div class="content">
            <img src="./img/bolo-cenoura.png" alt="bolo cenoura">
            <div class="content_text">
            <p>Bolo de cenoura</p>
            </div>
            <p class="fechar" onclick="fechar()"> fechar </p>
          </div>`
      break;
    default:
      break;
  }

  if (div_caseiro.style.height === "0px") {
    div_caseiro.style.height = "345px";
    div_caseiro.style.padding = "20px";
    div_caseiro.innerHTML = tipoDeBotao;
  } else {
    console.log(botao);
    div_caseiro.innerHTML = tipoDeBotao;
    console.log(div_caseiro.innerHTML);
  }
}
