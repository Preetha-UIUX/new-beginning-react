import React, { useState } from 'react'
import { Plus, X, Check, Pencil } from 'lucide-react';

const TodoList = () => {
    const [input, setInput] = useState([]);
    const [todos, setTodos] = useState([])
    const [editID, setEditID] = useState(null);

    const addTodo = (e) => {
        e.preventDefault();

        if(!input.trim()) return;

        if(editID) {
            saveEditData()
        } else {
            setTodos([...todos, {id: Date.now(), title: input, completed: false}])

            setInput('');
        }

    }

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const toggleTodo = (id) => {
        setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed} : todo))
    }

    const startEdit = (id, title) => {
        setEditID(id);
        setInput(title);
    }

    const saveEditData = () => {
        setTodos(todos.map((todo) => 
            todo.id === editID ? {...todo, title: input} : todo
        ));
        setEditID(null);
        setInput('')
    }

    return (
        <div className="space-y-4">
            <form className="flex gap-2" onSubmit={addTodo}>
                <input type='text' placeholder='Add a new todo...' value={input} onChange={(e) => setInput(e.target.value)} className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" />
                <button type='submit' className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2">
                    <Plus className="w-4 h-4" />
                    Add
                </button>
            </form>

            <ul className="space-y-2">
                {todos.map((todo) => (
                    <li key={todo.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <span className={todo.completed ? 'line-through text-gray-500' : ''}>{todo.title}</span>

                        <div className="flex gap-2">
                            <button  className="p-1 hover:bg-gray-200 rounded" onClick={() => toggleTodo(todo.id)}><Check className="w-4 h-4"/></button>
                            <button  className="p-1 hover:bg-gray-200 rounded" onClick={() =>  startEdit(todo.id, todo.title)}><Pencil className="w-4 h-4"/></button>
                            <button  className="p-1 hover:bg-gray-200 rounded" onClick={() => handleDelete(todo.id)}><X className="w-4 h-4"/></button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList
