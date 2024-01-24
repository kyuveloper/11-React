import { useEffect, useReducer } from "react"


const reducer = (state,action) => {
    console.log(action)
    return {
        ...state,
        [action.name]: action.value
    }
}

export const Input = () => {
    const [state, dispatch] = useReducer(reducer, {
        pass:'',
        passCheck:''
    })
    const onChangeHandler = e => dispatch(e.target);

    return (
        <>
            <input type="password" name="pass" onChange={onChangeHandler}/>
            <input type="password" name="passCheck" onChange={onChangeHandler}/>
            <div>
                <h3>{state.pass}</h3>
                <h3>{state.passCheck}</h3>
            </div>
        </>
    )
}

const ReducerFormControl = () => {
    const [state, dispatch] = useReducer(reducer, {
        name:'',
        nickname:''
    });

    const {name, nickname} = state // 위에 것을 가지고 있는 상태
    const onChangeHandler = e => dispatch(e.target);

    return (
        <>
            <label>이름 : </label>
            <input type="text" name="name" onChange={onChangeHandler}/>
            {/* <button onClick={onChangeHandler} name="ss">sss</button> */}
            <br/>
            <label>닉네임 : </label>
            <input type="text" name="nickname" onChange={onChangeHandler}/>
            <br/>
            <div>
                <h3>입력한 이름 : {name}</h3>
                <h3>입력한 닉네임 : {nickname}</h3>
            </div>
        </>
    )

}

export default ReducerFormControl