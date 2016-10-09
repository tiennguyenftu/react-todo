module.exports = {
    setTodos: function (todos) {
        if (Array.isArray(todos)) {
            localStorage.setItem('todos', JSON.stringify(todos));
            return todos;
        }
    },

    getTodos: function () {
        var stringTodos = localStorage.getItem('todos');
        var todos = [];

        try {
            todos = JSON.parse(stringTodos);
        } catch (e) {

        }

        return Array.isArray(todos) ? todos : [];
    },

    filterTodos: function (todos, showCompleted, searchText) {
        var filterTodos = todos;

        //filter by showCompleted
        filterTodos = filterTodos.filter((todo) => {
            return !todo.completed || showCompleted;
        });

        //filter by search text
        filterTodos = filterTodos.filter((todo) => {
            var todoText = todo.text.toLowerCase();
            return searchText.length === 0 || todoText.indexOf(searchText) > -1;
        });

        //sort todos with non-completed first
        filterTodos.sort((a, b) => {
            if (!a.completed && b.completed) return -1;
            if (a.completed && !b.completed) return 1;
            return 0;
        });

        return filterTodos;
    }
};