import { useState } from "react"

/* 
    목적 : 많은 연산이 수행되는 문제로 인해 화면에 렌더링이 늦어진다
    의문 : 그렇다면 setTimeout으로 루프를 막아버리면?
    
    위와 같이 생각을 정리해보기
*/

/* 
async : 동기화 서언
await : async 기다려
*/

const hardCaculator = (num) => {
        console.log('어려운 계산')

        // event loop는 영향을 받지 않는다
        // react는 자식 요소에 promise를 가질 수 없다
        setTimeout(() => {console.log('타임아웃 종료')},3000) // 시간이 끝날때까지 이벤트루프에 저장

        // for (let i = 0; i <= 9999999; i++) {
        // // 스레드가 돌아야함 (점유해야해서 다른 작업을 못함)
        // }
        return num + 9999999

    }

const HardCalculator = () => { // useMemo 쓰지 않았을 경우..

    const [hardNumber, setHardNumber] = useState(0)
    const hardSum = hardCaculator(hardNumber)

    return (
        <>
            <h3>어려운 계산기</h3>
            <input type="number" value={hardNumber} onChange={e=>setHardNumber(parseInt(e.target.value))} />
            <span>+9999999 = {hardSum}</span>
        </>
    )
}

export default HardCalculator;