import React, {useState} from 'react'

function Input() {

    const [text, setText] = useState('')

    const onChange = (e) => {
        setText(e.target.value)
    }

    const onClick = () => {
        setText('')
    }

    return (
        <>
            <div>
                <input onChange={onChange} value={text}/>
                <button onClick={onClick}>초기화</button>
                <div>
                    <b>값 : {text}</b>
                </div>
            </div>
        </>
    )
}

export default Input