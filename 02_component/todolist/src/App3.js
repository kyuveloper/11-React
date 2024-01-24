import {useState} from "react"

// list를 출력하기 위한 컴포넌트
const Item = ({todo, setTodoList, todoList}) => {
    // check 되었을 경우 최소선 처리..
    const [check, setCheck] = useState(false)
    const style = {
        textDecoration: check? 'line-through':'none'
    }
    const changeBox = () => {
        setCheck(!check)
    }
    // const removeTodo = () => {
    //     const result = todoList.filter(item => item!==todo)
    //     setTodoList(result)
    // }

    return (
        <>
            <div>
                <input type='checkbox' onChange={changeBox}/>
                <label style={style}>{todo}</label>
                {/* <button onClick={removeTodo}>삭제하기</button> */}
            </div>
        </>
    )
}

// todo 리스트를 화면에 출력하기 위한 컨테이너
const Container = ({todoList, setTodoList}) => {
    return (
        todoList.map((current, index) => {
            return <Item todo={current} key={index} setTodoList={setTodoList} todoList={todoList}/>
        })
    )
}


function App3() {
    const [todoList, setTodoList] = useState([//'semi', 'port'
        { id: 1, todo: 'Semi ~ing'},
        { id: 2, todo: 'Portfolio'},
        { id: 3, todo: 'Final idea'}
    ])

    return (
        <>
            <h1>Todo List</h1>
            <Container todoList={todoList} setTodoList={setTodoList}/>
        </>
    )
}

export default App3