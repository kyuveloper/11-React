import { useEffect, useRef, useState } from "react"


const LoginComponent = () => {

    const [form, setForm] = useState({
        username : '',
        password : ''
    });

    const userNameRef = useRef();

    useEffect(() => {
        console.log(userNameRef.current)
        userNameRef.current.focus();
    },[])

    const onClickHandler = () => {
        alert(`username : ${form.username} \n password : ${form.password}`);
        setForm({
            username : '',
            password : ''
        })
        userNameRef.current.focus();
    }

    const onChangeHandler = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
            <input type="text" name="username" placeholder="name" ref={userNameRef} value={form.username} onChange={onChangeHandler}/>
            <br/>
            <input type="password" name="password" placeholder="password" value={form.password} onChange={onChangeHandler}/>
            <br/>
            <button onClick={onClickHandler}>Login</button>
        </>
    )
}

export default LoginComponent;