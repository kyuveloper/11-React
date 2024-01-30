import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { callLoginAPI } from "../../api/UserAPICalls";
import { resetLoginUser } from "../../moduls/UserModule";


const LoginForm = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const result = useSelector(state => state.userReducer);
    const loginStatus = !!localStorage.getItem('isLogin');

    const [loginInfo, setLoginInfo] = useState({
        id: '',
        password: ''
    });

    // login form 입력값을 state로 묶어줌
    const onChangeHandler = e => {
        setLoginInfo({
            ...loginInfo,
            [e.target.name]: e.target.value
        })
    }

    // 로그인 요청
    const onClickHandler = () => {
        dispatch(callLoginAPI(loginInfo));
    }

    useEffect(() => {
        if(result?.message) {
            alert('아이디와 비밀번호를 확인해주세요.');
            setLoginInfo({
                id: '',
                password: ''
            });
            dispatch(resetLoginUser());
        } else if(loginStatus) {
            navigate('/');
        }
    },[result])

    return (
        <>
            <div>
                <label>ID : </label>
                <input type='text' name='id' value={loginInfo.id} onChange={onChangeHandler} />
                <br />
                <input type='password' name='password' value={loginInfo.password} onChange={onChangeHandler} />
                <button onClick={onClickHandler}>로그인</button>
            </div>
        </>
    )

}

export default LoginForm;