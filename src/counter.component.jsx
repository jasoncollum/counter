import React, { useState } from 'react';
import './counter.styles.css';

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>The Count is: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Plus 1</button>
            <button onClick={() => setCount(count - 1)}>Minus 1</button>
            <button onClick={() => setCount(0)}>Reset</button>
        </div>
    )
}

export default Counter;