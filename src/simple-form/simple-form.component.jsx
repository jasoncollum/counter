import React from 'react';
import useInputState from '../hooks/useInputState';
import './simple-form.styles.css';

function SimpleForm() {
    const [email, handleEmailChange, resetEmail] = useInputState('');
    const [name, handleNameChange, resetName] = useInputState('');

    return (
        <div className='simple-form-container'>
            <h1>Your email is... {email}</h1>
            <input type='text' value={email} onChange={handleEmailChange} placeholder='Enter email address' />
            <button onClick={resetEmail}>Submit</button>

            <h1>Your name is... {name}</h1>
            <input type='text' value={name} onChange={handleNameChange} placeholder='Enter your name' />
            <button onClick={resetName}>Submit</button>
        </div>
    )
}

export default SimpleForm;