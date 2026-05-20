import React from 'react'
import { useState } from 'react'
const App = () => {
    const [value, setValue] = useState(0);
    const decrementHandler = () => setValue(value - 1);
    const incrementHandler = () => setValue(value + 1)
    return (
        <div>
            <h2>Counter App</h2>
            <button onClick={decrementHandler}>Decrement</button>
            <span>{value}</span>
            <button onClick={incrementHandler}>Increment</button>
        </div>
    )
}

export default App