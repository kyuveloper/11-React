import { useCallback, useEffect, useState } from "react"


const FunctionMemorization = () => {

    const [number, setNumber] = useState(0);
    const [toggle, setToggle] = useState(false);

    /* 
        함수 생성이 불필요하게 계속 될 때 useCallBack을 이용하게 된다
        함수를 memorization해서 사용할 수 있다
    */
    const printNumber = useCallback(() => {
        console.log('current number : ' + number)
    },[number]) // 의존성 배열 자리에 빈 배열을 두게 되면 마운트 시점에 한 번 지역변수 초기화를 위해 사용되고 나서 함수는 새로 정의 되지 않으므로 항상 number의 초기값인 0만 나오게 된다

    useEffect(() => {
        console.log('printNumber 값 변화 인지됨')
    },[printNumber])

    return (
        <>
            <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
            <button onClick={()=>setToggle(!toggle)}>{String(toggle)}</button>
            <br/>
            <button onClick={printNumber}>printNumberState</button>
        </>
    )

}

export default FunctionMemorization;