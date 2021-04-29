const Main = {

    //criando os atributos
    $weight: null,
    $height: null,
    $button: null,
    $result: null,

    init: function () {
        this.cacheSelectors(),
            this.bindEvents()
    },

    //pegando os elementos do HTML
    cacheSelectors: function () {
        this.$weight = document.querySelector('#weight');
        this.$height = document.querySelector('#height');
        this.$button = document.querySelector('button');
        this.$result = document.querySelector('#result');

        console.log(this.$weight);
        console.log(this.$height);
        console.log(this.$button);
    },

    bindEvents: function () {
        const self = this;
        this.$button.onclick = self.Events.Calc;
    },

    Events: {
        Calc: function (e) {
            console.log("clicou")

            let weight = Main.$weight.value;
            let height = Main.$height.value;
            let result = 0;

            if (weight && height) {
                result = (weight / (height * height)).toFixed(2);
            }
            console.log(result, "resultado");
            return Main.Events.showResults(result);
        },

        showResults: function (result) {
            let info

            if (result <= 18.5) {
                info = ' Abaixo do peso';
            } else if (result <= 24.9) {
                info = ' Peso normal';
            } else if (result <= 29.9) {
                info = ' Sobrepeso';
            } else if (resul <= 34.9) {
                info = ' Obesidade grau I';
            } else if (resul <= 39.9) {
                info = ' Obesidade grau II';
            } else if (resul >= 40.9) {
                info = ' Obesidade mórbida';
            }
            return (Main.$result.textContent = result + info);
        },
    },
};

Main.init();