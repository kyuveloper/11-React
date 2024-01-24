import { useState } from "react";


const CounterRef = () => {
    const [count, setCount] = useState(0);

    console.log('counter 렌더링 됨')
    
    const increaseCount = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h1>Counter : {count}</h1>
            <button onClick={increaseCount}>카운트 증가</button>
        </>
    )
}

export default CounterRef;