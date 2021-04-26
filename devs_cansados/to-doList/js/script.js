const Main = {

    $checkButtons: [],
    $inputTask: null,
    $list: null,
    $removeButtons: [],

    init: function () {
        this.cacheSelectors(),
            this.bindEvents()
    },

    cacheSelectors: function () {
        //alert('olar');
        this.$checkButtons = document.querySelectorAll('.check');
        this.$inputTask = document.querySelector('#inputTask');
        this.$list = document.querySelector('#list');
        this.$removeButtons = document.querySelectorAll('.remove');

        console.log(this.$checkButtons, 'checkbutton');
        console.log(this.$inputTask);
        console.log(this.$list);
        console.log(this.$removeButtons);
    },

    //setando eventos
    bindEvents: function () {
        const self = this;

        this.$checkButtons.forEach(function (button) {
            button.onclick = self.Events.checkButtons_click;
        });

        this.$inputTask.onkeypress = self.Events.inputTask_keypress.bind(this);

        this.$removeButtons.forEach(function (button) {
            button.onclick = self.Events.removeButtons_click;;
        }); 
    },

    Events: {
        //tratando tudo o que esta sendo digitado no input
        inputTask_keypress: function (e) {
            console.log(e, "evento");
            const key = e.key;
            console.log(key); //cada clique no teclado
            const value = e.target.value;
            console.log(value); //é o que está dentro do input

            if (key === "Enter") {
                //alert('tá dando certo')
                this.$list.innerHTML +=
                    `<li>
                        <div class="check"></div>
                        <label class="task">
                            ${value}
                        </label>
                        <button class="remove"></button>
                    </li>`

                //limpando o input
                e.target.value = '';

                //esses daqui garantem que o array está sendo preenchido com cada tarefa inserida para podermos manipular posteriormente
                this.cacheSelectors();
                this.bindEvents();
            }
        },

        //controlando tarefa pronta
        checkButtons_click: function (e) {
            const li = e.target.parentElement;
            const isDone = li.classList.contains('done');

            if (!isDone) {
                return li.classList.add('done');
            }

            li.classList.remove('done');
        },

        //removendo a task. Função que recebe um evento(e)
        removeButtons_click: function (e) {
            //console.log(e, "removendo");
            const li = e.target.parentElement;
            //console.log(li, "remove");
            li.classList.add('removed');

            setTimeout(function(){
                li.classList.add('hidden');
            }, 300)
        },


    },
};

Main.init();