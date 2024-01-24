import { useRef, useState } from "react"


const UseRefCounter = () => {

    console.log('useRefCounter 렌더링 됨');

    const [count, setCount] = useState(0);

    let variable = 0;

    const countRef = useRef(0);

    const increaseCount = () => {
        setCount(count + 1);
    }

    const increaseVariable = () => {
        variable += 1;
        console.log('variable :'+ variable);
    }

    const increaseCountRef = () => {
        countRef.current = countRef.current + 1;
        console.log('CountRef : ' + countRef.current);
    }

    return (
        <>
            <h1>counter : {count}</h1>
            <h1>variable : {variable}</h1>
            <h1>countRef : {countRef.current}</h1>
            <button onClick={increaseCount}>Count 증가</button>
            <button onClick={increaseVariable}>Variable 증가</button>
            <button onClick={increaseCountRef}>CountRef 증가</button>
        </>
    )
}

export default UseRefCounter;