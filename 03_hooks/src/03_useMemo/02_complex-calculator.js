import { useState } from "react";

const hardCaculator = (num) => {
    console.log('어려운 계산기')

    for (let i = 0; i <= 9999999; i++) {

    }

    return num + 9999999;
}

const easyCaculator = (num) => {
    console.log('쉬운 계산기')

    return num+1
}

const ComplexCalculator = () => {
    const [hardNumber, setHardNumber] = useState(0)
    const [easyNumber, setEasyNumber] = useState(0)

    const hardSum = hardCaculator(hardNumber)
    const easySum = easyCaculator(easyNumber)

    return (
        <>
            <h3>어려운 계산기</h3>
            <input type="number" value={hardNumber} onChange={e=>setHardNumber(parseInt(e.target.value))} />
            <span>+9999999 = {hardSum}</span>
            <br/>
            <h3>쉬운 계산기</h3>
            <input type="number" value={easyNumber} onChange={e=>setEasyNumber(parseInt(e.target.value))} />
            <span>+1 = {easySum}</span>
        </>
    )
}

export default ComplexCalculator;