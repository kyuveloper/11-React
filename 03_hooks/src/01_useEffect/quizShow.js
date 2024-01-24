import { useState, useEffect } from "react";

const QuizShow = () => {

    const [input, setInput] = useState('');
    const [isDone, setIsDone] = useState(false);

    const result = '1892'

    useEffect(() => {
        // alert('환영합니다')
        input===result ? setIsDone(true):setIsDone(false)
    },[input])

    const onChange = (e) => {
        setInput(e.target.value)
    }
    const onClick = () => {
        setInput('')
    }

    return (
        <>
            <div>
                <h1>Quiz Show!</h1>
                <h3>리버풀 창단연도</h3>
                <input type='text' placeholder="정답은?" value={input} onChange={onChange}/>
                <button onClick={onClick}>리셋</button>
                {isDone && '정답입니다!'}
            </div>
        </>
    )
}

export default QuizShow