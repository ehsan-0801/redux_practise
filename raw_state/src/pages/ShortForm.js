import React, { useState } from 'react';
import "./style.css";

const ShortForm = () => {
    const [name, setName] = useState("");
    const [Email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const formsubmit = (e) => {
        e.preventDefault();
        const data = {
            name,
            Email,
            password,
        };
        console.log(data)

    }

    return (
        <div className='form-box' >
            <form action="" onSubmit={ formsubmit } >
                <div>
                    <label
                        htmlFor=""
                        name="Username">
                        Username:
                    </label>

                    <input
                        type="text"
                        name="Username"
                        id="Username"
                        onBlur={ (e) => { setName(e.target.value) } }
                    />
                </div>
                <div>
                    <label
                        htmlFor=""
                        name="Email">
                        Email:
                    </label>

                    <input
                        type="email"
                        name="Email"
                        id="Email"
                        onBlur={ (e) => { setEmail(e.target.value) } }
                    />
                </div>
                <div>
                    <label
                        htmlFor=""
                        name="Password">
                        Password:
                    </label>

                    <input
                        type="password"
                        name="Password"
                        id="Password"
                        onBlur={ (e) => { setPassword(e.target.value) } }
                    />
                </div>
                <div className="submit-btn-box">
                    <button type='submit'>Submit</button>
                </div>
            </form>
        </div>
    );
};

export default ShortForm;