import React, {useState} from 'react'

function Inputs() {
    const [info, setInfo] = useState({
        name: '',
        year: '',
        isSpecial: false
    })

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
            year: '',
            isSpecial: false
        })
    }

    return (
        <>
            <div>
                <input name='name' placeholder='name' onChange={onChange} value={name}/>
                <input name='year' placeholder='year' onChange={onChange} value={year}/>
                <button onClick={onReset}>초기화</button>
                <div>
                    값 : {name}, {year}
                </div>
            </div>
        </>
    )

}

export default Inputs