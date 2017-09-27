{
    'use strict';

    new Vue({
        el: 'main#app',
        data: {
            tasks: [
                {title: "Apprendre Vue.js", isDone: false},
                {title: "Faire une To Do List", isDone: true},
                {title: "Envoyer un mail au prof", isDone: true}
            ],
            title : ""
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
            },

            addTask: function (title) {
                if (title !== "") {
                    Vue.set(this.tasks, this.tasks.length, {title, isDone: false});
                }
            }
        }
    });
}
