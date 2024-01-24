import React, { useEffect } from 'react'

// App에서 user와 onRemove props를 전달 받아옴..
function User({user, onRemove, onToggle}) {

    useEffect(() => {
        // 첫번째 파라미터에는 함수, 두번째 파라미터에는 의존값이 들어있는 배열(deps)을 넣는다 만약 이 배열이 비우게되면 
        // 컴포넌트가 처음 나타났을 때만 useEffct에 등록한 함수가 호출된다. 
        console.log('컴포넌트 등장')
        // console.log(user)
        return () => {
            console.log('컴포넌트 사라짐')
            // console.log(user)
        }
    }, [])

    return (
        <>
            <div>
                <span style={{
                    cursor: 'pointer', color: user.active? 'aqua' : 'black'
                }} onClick={()=>onToggle(user.id)}>
                    {user.name}
                </span>, {user.email}
                <button onClick={()=>onRemove(user.id)}>삭제</button>
                {/* onClick{onRemove(user.id)}가 안되는 이유
                    보통 onClick{function()}을 하면 해당 컴퍼넌트가 렌더링 되는것과 동시에 함수를 실행해버린다
                    그래서 onClick{function}으로 해서 ()를 제외하는 방법으로 함수가 즉시 실행되지 않도록 하는데,
                    onRemove의 경우 아이디 값을 받아와야 하므로,  onClick{onRemove(user.id)}로 작성하면
                    user.id를 받아오기 전에 실행되어버린다*/}
            </div>
        </>
    )
}

function UserList({users, onRemove, onToggle}) {

    return (
        <>
            <div>
                {users.map(user => (
                    <User key={user.id} user={user} onRemove={onRemove} onToggle={onToggle}/>
                ))}
            </div>
        </>
    )
}

export default UserList