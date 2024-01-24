import { useEffect, useState } from "react"


const UseEffectUpdate = () => {
    const [user, setUser] = useState({
        username: '',
        password: ''
    })

    const onChange = e => {
        setUser({
            ...user, [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        console.log('username update')
    }, [user.username])

    useEffect(() => {
        console.log('password update')
    }, [user.password])

    return (
        <>
            <label>username : </label>
            <input type="text" name="username" onChange={onChange} />
            <br />
            <label>password :</label>
            <input type="password" name="password" onChange={onChange} />
            <h3>username : {user.username}</h3>
            <h3>password : {user.password}</h3>
        </>
    )
}

export default UseEffectUpdate;