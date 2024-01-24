import React, {useRef, useState} from 'react'
import Hello from './Hello'
import Wrapper from './Wrapper'
import Counter from './Counter'
import Input from './Input'
import Inputs from './Inputs'
import Ref from './Ref'
import UserList from './UserList'
import CreateUser from './CreateUser'

function App() {

    const [inputs, setInputs] = useState({
        name: '',
        email: ''
    })

    const {name, email} = inputs;

    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value // []의 의미는 key값으로 쓰겠다는 의미이다
        })
    }

    const [users, setUsers] = useState([ // users도 state에서 관리
        { // user
            id: 1,
            name: '홍길동',
            email: 'dycjh@example.com',
            active: true
        },
        { // user
            id: 2,
            name: '홍이동',
            email: 'dycjh123@example.com',
            active: false
        },
        { // user
            id: 3,
            name: '홍삼동',
            email: 'dycjh4124@example.com',
            active: false
        }
    ])

    const nextId = useRef(4); // 새로 생성되는 id값 설정 (현재 3까지 있으니 다음은 4로 기본 설정)

    const onCreate = () => {

        const user = {
            id: nextId.current,
            name,
            email
        }
        setUsers([...users, user]) // spread 문법.. 기존 users배열에 user를 추가하여 새로운 배열 생성 (기존의 배열 자체를 바꾸지는 않음?)
        // setUsers(users.concat(user)) // concat 문법.. 

        setInputs({ // 생성이후 setInputs 값 초기화
            name: '',
            email: ''
        })
        nextId.current += 1; // 최근 nextId에 +1
    }

    const onRemove = id => {
        // user.id가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
        // = user.id가 id인 것을 제거함
        setUsers(users.filter(user => user.id!== id))
    }

    const onToggle = id => {
        setUsers(
            users.map(user => 
            user.id === id? {...user, active: !user.active} : user))
    }

    return (
        <>
            <Wrapper>
                <Hello name='liverpool' year='1892' isSpecial={true}/>
                <Hello name='FC Seoul' year='----' isSpecial={false}/>
                <Counter/>
                <Input/>
                <Inputs/>
                <Ref/>
                <UserList users={users} onRemove={onRemove} onToggle={onToggle}/>
                <CreateUser name={name} email={email} onChange={onChange} onCreate={onCreate}/>
            </Wrapper>
        </>
    )
}

export default App