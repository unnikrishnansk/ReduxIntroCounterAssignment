import React,{useState} from 'react';
import {store} from '../Redux/store';

const Countervalue = () => {

    const {counter} = store.getState();

    const [state, setstate] = useState(0);

    store.subscribe(() => {
        setstate((prev) => prev+1);
    });



  return (
    <div>
        <h1>Counter : {counter}</h1>
    </div>
  )
}

export default Countervalue;