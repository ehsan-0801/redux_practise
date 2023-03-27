import React, { useReducer } from 'react';
import { initialState } from '../State/initialState';
import { reducer } from '../State/Reducer';
import "./LongForm.css";

const LongForm = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const submit = (e) => {
        e.preventDefault();
        console.log(state)
    }

    return (
        <div className='longform'>
            <form action="" onSubmit={ submit }>
                <div className='row'>
                    <div className="col-6">
                        <div className='input-box'>
                            <label htmlFor="">Firstname</label>
                            <input type="text" name="firstName" id=""
                                onBlur={ (e) => {
                                    dispatch({
                                        type: "INPUT",
                                        payload: {
                                            name: e.target.name,
                                            value: e.target.value,
                                        }
                                    })
                                } } />
                        </div>
                        <div className='input-box'>
                            <label htmlFor="">Email</label>
                            <input type="email" name="email" id=""
                                onBlur={ (e) => {
                                    dispatch({
                                        type: "INPUT",
                                        payload: {
                                            name: e.target.name,
                                            value: e.target.value,
                                        }
                                    })
                                } } />
                        </div>
                        <div className='input-box'>
                            <label htmlFor="">Education</label>
                            <select name='education'
                                onChange={ (e) => {
                                    dispatch({
                                        type: "INPUT",
                                        payload: {
                                            name: e.target.name,
                                            value: e.target.value,
                                        }
                                    })
                                } }
                            >
                                <option value="SSC">SSC</option>
                                <option value="HSC">HSC</option>
                                <option value="Bachelor">Bachelor</option>
                                <option value="Masters">Masters</option>
                                <option value="Phd">Phd</option>
                            </select>
                        </div>
                        <div className='input-box'>
                            <label htmlFor="">Feedback</label>
                            <textarea name="feedback" id="" cols="10" rows="2" onBlur={ (e) => {
                                dispatch({
                                    type: "INPUT",
                                    payload: {
                                        name: e.target.name,
                                        value: e.target.value,
                                    }
                                })
                            } }></textarea>
                        </div>

                        <input type="checkbox" name="terms" id=""
                            onClick={ () => {
                                dispatch({
                                    type: "TOGGLE",
                                })
                            } } />
                        <label htmlFor="">I agree to terms and conditions</label>
                    </div>
                    <div className="col-6 right-form-box">
                        <div className='input-box'>
                            <label htmlFor="">Lastname</label>
                            <input type="text" name="lastName" id=""
                                onBlur={ (e) => {
                                    dispatch({
                                        type: "INPUT",
                                        payload: {
                                            name: e.target.name,
                                            value: e.target.value,
                                        }
                                    })
                                } } />
                        </div>
                        <div className='input-box'>
                            <label htmlFor="">Gender</label>
                            <div>
                                <input type="radio" name="gender" value="Male" id="" className='select-gender'
                                    onClick={ (e) => {
                                        dispatch({
                                            type: "INPUT",
                                            payload: {
                                                name: e.target.name,
                                                value: e.target.value,
                                            }
                                        })
                                    } }
                                />
                                <label htmlFor="">Male</label>
                                <input type="radio" name="gender" value="Female" id="" className='select-gender'
                                    onClick={ (e) => {
                                        dispatch({
                                            type: "INPUT",
                                            payload: {
                                                name: e.target.name,
                                                value: e.target.value,
                                            }
                                        })
                                    } }
                                />
                                <label htmlFor="">Female</label>
                                <input type="radio" name="gender" value="Others" id="" className='select-gender'
                                    onClick={ (e) => {
                                        dispatch({
                                            type: "INPUT",
                                            payload: {
                                                name: e.target.name,
                                                value: e.target.value,
                                            }
                                        })
                                    } }
                                />
                                <label htmlFor="">Others</label>
                            </div>
                        </div>
                        <div className='input-box'>
                            <label htmlFor="">Number of PC"s</label>
                            <div className='Number-box'>
                                <button className='butn'
                                    onClick={ (e) => {
                                        dispatch({
                                            type: "INCREASE",
                                            payload: 1,
                                        })
                                    } }
                                >+</button>
                                <input type="number" name="quantity" id="" value={ state.quantity }

                                />
                                <button className='butn'
                                    onClick={ (e) => {
                                        dispatch({
                                            type: "DECREASE",
                                            payload: 1,
                                        })
                                    } }
                                >-</button>
                            </div>
                        </div>
                        <div className="submit-btn-box">
                            <button type='submit' className='submit-btn' disabled={ !state.terms }>Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default LongForm;