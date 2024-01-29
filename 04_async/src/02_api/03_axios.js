
/* 
    axios는 데이터 변환 처리기(json()) 등을 하지 않아도 편리하게 사용할 수 있다
    (이미 파싱 된 데이터가 date라는 조회 결과 response 객체의 프로퍼티로 들어가 있다)
*/

import axios from "axios"

const callApi = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
}

const fetchCall = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(r => r.json())
        .then(d => console.log(d))
}

const AxiosCallComponent = () => {
    return (
        <>
            <button onClick={callApi}>axios 요청</button>
            <button onClick={fetchCall}>fetch 요청</button>
        </>
    )
}

export default AxiosCallComponent;