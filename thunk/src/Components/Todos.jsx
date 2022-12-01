import axios from 'axios'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTodosError, getTodosRequest, getTodosSuccess } from '../Redux/action'
import TodoInput from './TodoInput'

const Todos = () => {
  const dispatch= useDispatch();
  const todos= useSelector(store => store.todos)
  const getTodos=()=>{
    dispatch(getTodosRequest());
    axios
    .get("http://localhost:8080/todos")
    .then((r)=> dispatch(getTodosSuccess(r.data)) )
    .catch((e)=>{
        dispatch(getTodosError());
    });
  }

  useEffect(()=>{
    getTodos();
  },[]);
  
    return (
    <div>
     <h1>todos</h1>
    
     <TodoInput/> 


{todos.length>0 && todos.map(item=>{
    return(
        <div key={item.id}>
            {item.title}
        </div>
    )

})}

    </div>
  )
}

export default Todos
