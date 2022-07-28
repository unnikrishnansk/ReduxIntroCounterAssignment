import React from 'react';
import { store } from '../Redux/store';

const Counterbutton = () => {

    const {dispatch} = store;

    const increment = () => {
        dispatch({type:"INCREMENT", payload:1});
    }

    const decrement = () => {
        dispatch({type:"DECREMENT", payload:1});
    }

  return (
    <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counterbutton;