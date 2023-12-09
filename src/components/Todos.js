import React from 'react'
import { CiCircleRemove } from "react-icons/ci";
import { useDispatch, useSelector } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice';

function Todos() {

  const todos = useSelector((state) => state.todos)
  // console.log("todos = ", todos);
  const Dispatch = useDispatch();

  return (
    <>
      <div className='text-5xl font-bold my-5'>Todos</div>
      <ul className='mt-5'>
          {
            todos.map((todo) =>{
              return <li
                className='flex justify-between pb-3 mb-2 text-bold text-3xl'
                key={todo.id}
               >
                <div className='w-1/2'> {todo.text} </div>
                <button className=' mx-auto text-4xl hover:text-red-700' onClick={() => Dispatch(removeTodo(todo.id))}>
                  <CiCircleRemove/>
                </button>
              </li>
            })
          }
      </ul>
    </>


  )
}

export default Todos