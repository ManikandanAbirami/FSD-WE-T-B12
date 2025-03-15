import { useEffect, useState } from 'react'
import axios from 'axios';

const API_URL = 'https://67d52005d2c7857431ef72a3.mockapi.io/api/v1/todos';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        // fetch(API_URL)
        //     .then(response => response.json())
        //     .then(data => setTodos(data))
        //     .catch(error => console.error('Error fetching data:', error));

        axios.get(API_URL)
            .then(response => setTodos(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    //Add a new task
    const addTodo = () => {
        //TODO: Implement the logic to add a new task
    }
    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <input type="text"
                    placeholder='Add a new Task...'
                    value={newTodo}
                    onChange={(e) => setNewTodo(e.target.value)} />
                <button onClick={addTodo}>Add</button>
            </div>

            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        <span>
                            {todo.Task}
                        </span>
                        <button>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoApp