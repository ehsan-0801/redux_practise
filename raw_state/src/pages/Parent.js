import React, { useContext } from 'react';
import { COUNTER_CONTEXT } from '../App';
import Child from './Child';
import './style.css';

const Parent = () => {
    const { count, setCount } = useContext(COUNTER_CONTEXT);
    return (
        <div>
            <div className="App">
                <div className='calculator-box'>
                    <h1>Parent</h1>
                    <h3>{ count }</h3>
                </div>
            </div>
            <Child></Child>
        </div>
    );
};

export default Parent;