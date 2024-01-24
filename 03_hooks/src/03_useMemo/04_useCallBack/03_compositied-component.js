import { useCallback, useEffect, useState } from "react";

const CallBackComponent = () => {
    const [size, setSize] = useState(200);
    const [isDark, setIsDark] = useState(false);

    const getSquareSize = useCallback(() => {
        return {
            backgroundColor: 'purple',
            width: size,
            height: size
        }
    }, [size])

    return (
        <>
            <div style={{backgroundColor:isDark?'black':'white'}}>
                <input type='range' min='100' max='300' onChange={e=>setSize(parseInt(e.target.value))}/>
                <button onClick={()=>setIsDark(!isDark)}>{isDark.toString()}</button>
                <Square getSquareSize={getSquareSize}/>
            </div>
        </>
    )
}

const Square = ({getSquareSize}) => {
    const [style, setStyle] = useState({})

    useEffect(() => {
        console.log('style 변경')
        setStyle(getSquareSize())
    },[getSquareSize])

    return <div style={style}></div>
}

export default CallBackComponent;