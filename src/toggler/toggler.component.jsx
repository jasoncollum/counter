import React from 'react';
import useToggle from '../hooks/useToggle';
import './toggler.styles.css';

const Toggler = () => {
    const [isHappy, toggleIsHappy] = useToggle(true);
    const [isMonkey, toggleIsMonkey] = useToggle(true);

    return (
        <div className='toggler-container'>
            <p>Click to toggle the emojis below...</p>
            <h1 onClick={toggleIsHappy}>{isHappy ? '😁' : '🤬'}</h1>
            <h1 onClick={toggleIsMonkey}>{isMonkey ? '🐒' : '🕺'}</h1>
        </div>
    )
}

export default Toggler;