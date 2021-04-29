const Main = {

    //criando os atributos
    $weight: null,
    $height: null,
    $button: null,
    $resultIMC: null,
    $resultASC: null,
    $resultPI: null,
    $details: null,

    init: function () {
        this.cacheSelectors(),
            this.bindEvents()
    },

    //pegando os elementos do HTML
    cacheSelectors: function () {
        this.$weight = document.querySelector('#weight');
        this.$height = document.querySelector('#height');
        this.$button = document.querySelector('button');
        this.$resultIMC = document.querySelector('#resultIMC');
        this.$resultASC = document.querySelector('#resultASC');
        this.$resultPI = document.querySelector('#resultPI');
        this.$details = document.querySelector('#details');

        console.log(this.$weight);
        console.log(this.$height);
        console.log(this.$button);
        console.log(this.$resultIMC);
        console.log(this.$resultASC);
        console.log(this.$resultPI);
        console.log(this.$details);
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
            let resultIMC = 0;
            let resultASC = 0;
            let resultPI = 0;

            if (weight && height) {
                resultIMC = (weight / (height * height)).toFixed(2);
                resultASC = Math.sqrt((height / 0.01) * (weight / 3600)).toFixed(2);
                resultPI = ((height / 0.01) - 100);
            }
            console.log(resultIMC, "resultados");
            return Main.Events.showResults(resultIMC, resultASC, resultPI);
        },

        showResults: function (resultIMC, resultASC, resultPI) {
            let info;

            if (resultIMC <= 18.5) {
                info = 'IMC menor do que 18.5 kg/m² - Peso abaixo do Normal. Você está com o peso abaixo do normal. Consulte um especialista para saber se há algum problema com sua saúde que esteja causando este peso abaixo do normal, ou se o peso abaixo do normal pode estar de alguma forma ameaçando sua saúde.';
            } else if (resultIMC <= 24.4) {
                info = 'IMC entre 18.5 a 24.4 kg/m² - Normal. Seu peso está dentro da faixa considerada normal pela Organização Mundial de Saúde. Algumas pessoas, no entanto, já podem ter um maior risco de problemas metabólicas mesmo dentro desta faixa, principalmente se acumularem gordura na região interna do abdome. Uma maneira simples de avaliar isto é medir a circunferência da cintura. Mais de 80 cm de cintura em mulheres e 94 cm em homens podem indicar um possível excesso de gordura no interior do abdome. Riscos à parte, muita gente que se encontra nesta faixa de peso considerada normal tenta emagrecer, principalmente por razões estéticas. Para estas pessoas recomenda-se apenas um planejamento alimentar saudável e a prática regular de atividades físicas. Os remédios para emagrecer em princípio não estão indicados.';
            } else if (resultIMC <= 29.9) {
                info = 'IMC entre 24.5 a 29.9 kg/m² - Pré-Obesidade ou Sobrepeso. Você está dentro da faixa chamada de pré-obesidade pela Organização Mundial de Saúde. Sabe-se que este peso já pode representar um risco considerável para a saúde. Se você também está com a pressão alta, diabetes ou aumento de colesterol, os remédios para emagrecer serão indicados se você não conseguir emagrecer sem eles. Nunca utilize nenhum deles sem um acompanhamento médico cuidadoso. Mesmo utilizando medicamentos, lembre-se de que é muito importante um planejamento alimentar e a prática de atividades físicas. A eficácia dos medicamentos aumenta muito quando estes fundamentos não são esquecidos.';
            } else if (resultIMC <= 34.9) {
                info = 'IMC entre 30.0 a 34.9 kg/m² - Obesidade classe I. Você está na faixa de peso denominada "obesidade classe I" pela Organização Mundial de Saúde. Seu peso já está causando um risco aumentado para várias doenças, incluindo o diabetes, a hipertensão arterial, o infarto do miocárdio e diversos tipos de câncer. Sua obesidade, por si só, já é considerada uma doença e necessita ser tratada com remédios. Procure seu médico para uma orientação adequada. Nunca utilize medicamentos sem acompanhamento médico, e lembre-se de que é muito importante um planejamento alimentar e a prática de atividades físicas. A eficácia dos medicamentos aumenta muito quando estes fundamentos não são esquecidos.';
            } else if (resultIMC <= 39.9) {
                info = 'IMC entre 35.0 a 39.9 kg/m² - Obesidade classe II. Você está na faixa de peso denominada "obesidade classe II" pela Organização Mundial de Saúde. Seu peso já está causando um risco muito aumentado para várias doenças, incluindo o diabetes, a hipertensão arterial, o infarto do miocárdio e diversos tipos de câncer. Sua obesidade, por si só, já é considerada uma doença e necessita ser tratada com remédios. Se você além disso tem também diabetes, hipertensão arterial ou outra complicação importante da obesidade, a cirurgia para emagrecer pode ser a melhor solução para o seu caso. Procure seu médico para uma orientação adequada.';
            } else if (resultIMC >= 40.9) {
                info = 'IMC de 40 ou mais kg/m² - Obesidade classe III ou Obesidade mórbida. Você está na faixa de peso denominada "obesidade classe III" pela Organização Mundial de Saúde. Esta categoria engloba todos as pessoas com mais de 40 kg/m2 de IMC. Muitas vezes é chamada também de obesidade mórbida. Seu peso já está causando um risco altíssimo para várias doenças, incluindo o diabetes, a hipertensão arterial, o infarto do miocárdio e diversos tipos de câncer. A obesidade neste grau é considerada uma doença grave e necessita ser tratada com todos os recursos disponíveis, incluindo os remédios e a cirurgia para emagrecer. Procure seu médico para uma orientação adequada.';
            }
            let IMC = Main.$resultIMC.textContent = `IMC = ${resultIMC}`;
            let ASC = Main.$resultASC.textContent = `ASC = ${resultASC} metros quadrados (m²)`;
            let PI = Main.$resultPI.textContent = `PI = ${resultPI} kg`;
            let det = Main.$details.textContent = info;
            return (IMC, ASC, PI, det);
        },
    },
};

Main.init();