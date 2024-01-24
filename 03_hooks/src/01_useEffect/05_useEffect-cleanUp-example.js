import { useEffect, useState } from "react"


const Timer = () => {
    useEffect (() => {
        console.log('타이머 시작')
        const timer = setInterval(() => {
            console.log(new Date().toLocaleTimeString())
        }, (1000))

        return () => { // cleanUP 언마운트 시점에 출력
        clearInterval(timer)
        console.log('타이머')
        }
    }, [])

    return (
        <h1>타이머 시작합니다</h1>
    )
}

export const Container = () => {
    const [isTrue, setIsTrue] = useState(false)

    return (
        <>
            <button onClick={() => {setIsTrue(!isTrue)}}>타이머 토글</button>
            {isTrue && <Timer/>}
        </>
    )
}