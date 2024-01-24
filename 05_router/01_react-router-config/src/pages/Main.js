import { useState } from "react"


export const Main = () => {

    const [main, setMain] = useState(0)

    const onChange = () => setMain(main + 1)

    return (
        <div>
            <h1>메인 : {main}</h1>
            <button onClick={onChange}>Click me!</button>
        </div>
    )
}