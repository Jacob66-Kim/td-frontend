import { useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <label>count : { count }</label>
            <br/>
            <button onClick={() => setCount(count + 1)}>increase</button>
            <button onClick={() => setCount(count - 1)}>decrease</button>
            <button onClick={() => setCount(0)}>reset</button>
        </div>
    )
};

export default Counter;