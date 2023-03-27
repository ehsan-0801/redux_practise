import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';
import './style.css';

const Child = () => {
    const { count, setCount } = useContext(COUNTER_CONTEXT)
    return (
        <div className="App">
            <div className='calculator-box
      '>
                <h1>Child</h1>
                <h3>{ count }</h3>
                <div className='butns'>
                    <button className='butn butn-minus' onClick={ () => setCount(count - 1) }>-</button>
                    <button className='butn butn-plus' onClick={ () => setCount((prevState) => prevState + 1) }>+</button>
                </div>
            </div>
        </div>
    );
};

export default Child;