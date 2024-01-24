/* 
리액트에서 가끔 특정 DOM을 선택해야하는 상황이 발생하는데, (특정 엘리먼트 크기, 라이브러리 사용시) 
그럴 때 리액트에선 ref 라는 것을 사용해서 지정한다
함수형 컴포넌트에서는 useRef라는 hooks로 ref를 사용한다
*/

import React, {useState, useRef} from 'react'

function Ref() {
    const [info, setInfo] = useState({
        name: '',
        year: '',
        isSpecial: false
    })

    const nameInput = useRef();

    const {name, year} = info

    const onChange = (e) => {
        const {value, name} = e.target; // e.target에서 value와 name을 정의함 (input 태그 안의 키)
        setInfo({
            ...info, [name]: value // 해당 name의 value 값을 info에 추가
        });
    };

    const onReset = () => {
        setInfo ({
            name: '',
            year: ''
        })
        nameInput.current.focus(); // ref를 사용해서 onRest 후에도 nameInput 쪽으로 focus 이동..
    }

    return (
        <>
            <div>
                <input name='name' placeholder='name' onChange={onChange} value={name} ref={nameInput}/>
                <input name='year' placeholder='year' onChange={onChange} value={year}/>
                <button onClick={onReset}>초기화</button>
                <div>
                    값 : {name}, {year}
                </div>
            </div>
        </>
    )

}

export default Ref