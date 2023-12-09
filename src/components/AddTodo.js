import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo} from '../features/todo/todoSlice';

function AddTodo() {

    const [input, setInput] = useState('');
    const Dispatch = useDispatch();

    const addTodoHandle = (e) =>{
        e.preventDefault();
        Dispatch(addTodo(input));
        setInput('');
    }
  return (
    <form onSubmit={addTodoHandle}
        className='space-x-3 mt-12'
    >
        <input type="text"
        className='bg-gray-700 text-white border-green-500 p-2 rounded'
        placeholder='Enter a Todo...'
        value={input}
        onChange={(e) => setInput(e.target.value)}        
        />

        <button type='submit' className='bg-blue-500 p-3 rounded-full hover:text-white'>
            Add Todo
        </button>
    </form>
  )
}

export default AddTodo