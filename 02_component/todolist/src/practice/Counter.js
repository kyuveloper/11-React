/* useState는 리액트 함수형 컴포넌트의 hooks 중에 하나이다 */
import React, {useState} from 'react' // React 라이브러리를 사용할 수 있게 선언하는 것 (jsx 등등) 하지만 리액트 17버전 이후부터는 꼭 적어두지 않아도 자동 적용된다.

function Counter() {
    const [number, setNumber] = useState(0)

    const increse = () => {
        setNumber(prevNumber => prevNumber + 1)
    }

    const decrese = () => {
        setNumber(prevNumber => prevNumber - 1)
    }

    return (
        <>
            <h1>{number}</h1>
            <button onClick={increse}>+1</button>
            <button onClick={decrese}>-1</button>
        </>
    )
}

export default Counter