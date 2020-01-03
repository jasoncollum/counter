import React, { useState } from 'react';

function SimpleForm() {
    const [email, setEmail] = useState('');
    const handleChange = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div>
            <h1>Your email is... {email}</h1>
            <input type='text' value={email} onChange={handleChange} placeholder='Enter email address' />
        </div>
    )
}

export default SimpleForm;