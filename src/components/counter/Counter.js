import React from "react";
import {useDispatch, useSelector} from "react-redux";

export const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const incCounter = () => {
        dispatch({type: 'INC'})
    }
    const decCounter = () => {
        dispatch({type: 'DEC'})
    }

    return (
        <div>
            <h3>Counter: {counter}</h3>
            <button onClick={incCounter}>INC</button>
            <br/>
            <button onClick={decCounter}>DEC</button>
            br
        </div>
    )
}

