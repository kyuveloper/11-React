import { useState } from "react";

// list를 출력하기 위한 컴포넌트
const Item = ({todo,setTodoList, todoList, qwe}) =>{
console.log(qwe)

  // check 되었을 경우 취소선 처리

    const [check, setCheck] = useState(false);
    
    const style={
        textDecoration : check ? 'line-through' : "none"
    }
    
    const changeBox = ()=>{
        setCheck(!check);
    }

    const removeTodo = () =>{
        const result = todoList.filter(item => item !== todo);
        setTodoList(result);
    }

    return(
        <div>
            <input type="checkBox" onChange={changeBox}/>
            <label style={style}>{todo}</label>
            <button onClick={removeTodo}>삭제하기</button>
        </div>
    );
}

//tolist를 화면에 출력하기 위한 컨테이너
const Container = ({todoList, setTodoList}) =>{

    return (
        todoList.map((current, index) => {
            return <Item todo={current} key={index} setTodoList={setTodoList} todoList={todoList} qwe={"kj gogo"}/>
        })
    );
}

const InputContainer = ({todoList,setTodo}) =>{
    const [input, setInput] = useState("");


    const addList = ()=>{
        setTodo([...todoList, input])
    }

    const changInput = (e)=>{
        setInput(e.target.value);
    }
    
    return (
        <>
        <input type="text" value={input} onChange={changInput} />
        <button onClick={addList}> 추가 </button>
        </>

    );
}



// 애플리케이션의 전체 화면
function App2() {

    const [todoList,setTodoList] = useState(["안녕"]);
    
    return (
        <div className="mainBox">
        <h1>todo list</h1>
        <Container todoList={todoList} setTodoList={setTodoList}/>
        <InputContainer setTodo={setTodoList} todoList={todoList}/>
        
        </div>
    );
}

export default App2;


