import React, { useReducer } from 'react';
import './style.css';
const Counter = () => {

    const initialstate = 0;
    const reducer = (state, action) => {
        console.log(action)
        if (action.type == "incline") {
            return state + action.payload;
        }
        else if (action.type == "decline") {
            return state - action.payload;
        }

    }
    const [state, dispatch] = useReducer(reducer, initialstate);
    return (
        <div className="App">
            <div className='calculator-box
      '>
                <h1>Counter</h1>
                <h3>{ state }</h3>
                <div className='butns'>
                    <button
                        className='butn butn-minus'
                        onClick={ () => dispatch({ type: "decline", payload: 5 }) }>
                        Decline
                    </button>
                    <button
                        className='butn butn-plus'
                        onClick={ () => dispatch({ type: "incline", payload: 5 }) }>
                        Incline
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Counter;