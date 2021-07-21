
let pessoas = ["Igor", "Amanda", "Barbara", "Caio", "Diego", "Eduardo", "Fagner", "Giovanna", "Hugo", "Jaqueline", "Karine", "Leandro", "Mariano", "Nair", "Oscar", "Paulo", "Quessi", "Rhayane", "Salvador", "Tulio", "Uirá", "Vanessa", "Wesley", "Xica", "Yara", "Zenaide"]

function sortear() {
  let participantes = pessoas.length;
  let numSorteado = Math.floor(Math.random() * participantes);

  let sortudo = document.getElementById("num");
  sortudo.innerHTML = pessoas[numSorteado];
}