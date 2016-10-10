var React = require('react');

var AddTodo = React.createClass({

    onFormSubmit: function (e) {
        e.preventDefault();
        var todoText = this.refs.todoText.value;
        if (todoText.length) {
            this.refs.todoText.value = '';
            this.props.onAddTodo(todoText);
        } else {
            this.refs.todoText.focus();
        }
    },

    render: function () {
        return (
            <div className="container__footer">
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" ref="todoText" placeholder="What do you need to do?"/>
                    <input type="submit" value="Add Todo" className="button expanded"/>
                </form>
            </div>
        )
    }
});

module.exports = AddTodo;