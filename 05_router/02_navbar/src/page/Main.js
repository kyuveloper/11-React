import { useState } from "react";


const Main = () => {

    const [main, setMain] = useState(0)

    return (
        <div>
            <h1>main : {main}</h1>
            <button onClick={()=>setMain(main+1)}>click</button>
        </div>
    )
}

export default Main;