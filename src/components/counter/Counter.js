import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

export const Counter = () => {
    const todos = useSelector(state => state);
    console.log(todos)
    const dispatch = useDispatch();
    const [input,setInput]  = useState('');
    const incCounter = () => {
        dispatch({type: 'INC'})
    }
    const decCounter = () => {
        dispatch({type: 'DEC'})
    }
    const ADD = () => {
        dispatch({type:'Reset'})
    }
    const add = () => {
        dispatch({type:'ADD', payload: input, id: Math.random()})
    }
    const deleteTodo = (id) => {
        dispatch({type:'DELETE', id})
    }

    return (
        <div>
            {/*<h3>Counter: {counter}</h3>*/}
            <button onClick={incCounter}>INC</button>
            <br/>
            <button onClick={decCounter}>DEC</button>
            <br/>
            <input type="text" name={ADD} value={input} onChange={(e) => setInput(e.target.value)}/>
            <button onClick={add}>Add</button>
            {
                todos.map(todo => <p>{todo.todo} <button onClick={() => deleteTodo(todo.id)}>del</button></p>)
            }
        </div>
    )
}

