import React, { useState } from 'react';

const UserForm = (props) => {
    const [state, setState] = useState({
        name: "",
        email: "",
        gen: ""
    });

    const handleChange = (e) => {
        e.preventDefault();
        setState({ ...state, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addUser(state);
        setState({
            name: "",
            email: "",
            gen: ""
        });
    };

    return (
        <div className='signupForm'>
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Name: </label>
                    <input
                        type="text"
                        name="name"
                        value={state.name}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={state.email}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label>Gen: </label>
                    <input
                        type="text"
                        name="gen"
                        value={state.gen}
                        onChange={handleChange}
                    />
                </div>
                <button className='button'>Submit</button>
            </form>
        </div>
    );
};

export default UserForm