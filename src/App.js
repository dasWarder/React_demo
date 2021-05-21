import React from "react";
import TodoList from "./Todo/TodoList";


function App() {
    const [todos, setTodos] = React.useState([
        {id: 1, completed: true, title: 'Buy a bread'},
        {id: 2, completed: false, title: 'Buy a pack of eggs'},
        {id: 3, completed: false, title: 'Buy a pack of milk'}
    ]);

    function toggleTodo(id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                };

                return todo;
            })
        );
    };

    function removeTodo(id) {
        setTodos(todos.filter(todo => todo.id !== id));
    };

  return (

            <div className='wrapper'>
              <h1>Hello React world!</h1>
                <TodoList todos={todos} onToggle={ toggleTodo }/>
            </div>
  );
}

export default App;
