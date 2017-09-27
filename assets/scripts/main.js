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
        },

        methods: {
            remaining: function () {
                var remains = 0;
                this.tasks.forEach(function (task) {
                    if (task.isDone === false) {
                        remains++;
                    }
                });
                return remains;
            },

            deleteTask: function (index) {
                Vue.delete(this.tasks, index);
            }
        }
    });
}
