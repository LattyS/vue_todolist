{
    'use strict';

    new Vue({
        el: 'main#app',
        data: {
            tasks: [
                {title: "Apprendre Vue.js", isDone: true},
                {title: "Faire une To Do List", isDone: false},
                {title: "Envoyer un mail au prof", isDone: false}
            ]
        }
    });
}
