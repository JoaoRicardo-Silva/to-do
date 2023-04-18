import React, { Component } from 'react';

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, text: 'Lavar a louça', done: true },
        { id: 2, text: 'Estudar react', done: false },
        { id: 3, text: 'Fazer exercício', done: true },
      ],
    };
  }

  addTodo = () => {
    const newTodo = prompt('Digite o texto da nova tarefa');
    if (newTodo) {
      this.setState(prevState => ({
        todos: [
          ...prevState.todos,
          { id: prevState.todos.length + 1, text: newTodo, done: false },
        ],
      }));
    }
  };

  removeTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.filter(todo => todo.id !== id),
    }));
  };

  toggleTodo = id => {
    this.setState(prevState => ({
      todos: prevState.todos.map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      ),
    }));
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.todos.map(todo => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => this.toggleTodo(todo.id)}
              />
              {todo.text}
              <button onClick={() => this.removeTodo(todo.id)}>Remover</button>
            </li>
          ))}
        </ul>
        <button onClick={this.addTodo}>Adicionar</button>
      </div>
    );
  }
}

export default TodoList;