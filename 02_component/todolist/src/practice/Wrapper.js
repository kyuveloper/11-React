import React from 'react'

function Wrapper({children}) { // {children} property 정의
    const style = { // style 정의
        border:'1px solid black',
        padding: '1rem'
    }

    return(
        <>
            <div className='liverpool' style={style}>
                {children} {/* <Wrapper></Wrapper> 태그 안에 들어오는 {children} */}
            </div>
        </>
    )
}

export default Wrapper