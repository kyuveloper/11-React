import { useEffect, useMemo, useState } from "react"

/* 
    useMemo : 성능 최적화를 위하여 연산된 값을 useMemo라는 hook을 사용하여 재사용하는 것
*/

const LocationComponent = () => {

    const [isKorea, setIsKorea] = useState(true)
    const [number, setNumber] = useState(0)

    console.log('렌더링')

    // 1. 지역 변수에 문자열로 초기화 (number state 변화 시 location 에 변화가 없음 (재할당) - 기본 자료형))
    // const location = isKorea? 'Korea' : 'USA'

    // 2. 지역 변수에 객체로 초기화 (number state 변화 시 location에 변화가 있음 (재할당) - 객체의 주소값이므로))
    const location = {
        country : isKorea? 'Korea' : 'USA',
    }

    // 3. 지역 변수에 useMemo의 반환값으로 초기화 (number state 변화 시 location에 변화가 없음 (재할당 x) - isKorea가 동일)
    // const location = useMemo(() => {
    //     return {
    //         country : isKorea? 'Korea' : 'USA'
    //     }
    // }, [isKorea/* 만약 값에 변화가 없다면 이전값 재사용 */])


    useEffect(() => {
        console.log('useEffect 호출')
    }, [location.country])
    
    return (
        <>
            <h2>지금 당신이 있는 위치는?</h2>
                    <p>국가: {location.country}</p>
                    <button onClick={() => setIsKorea(!isKorea)}>국가 토글 하기</button>
                    <hr/>
                    <h2>좋아하는 숫자를 입력해 주세요</h2>
                    <input 
                      type="number"
                      value={number}
                      onChange={e => setNumber(e.target.value)}
                    />
        </>
    )
}

export default LocationComponent;