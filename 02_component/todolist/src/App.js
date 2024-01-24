import React from "react";
import './style.css'

const { useState } = React;

function App() {

  console.log(useState)

  const [todo, setTodo] = useState([
    { id: 1, todo: 'Semi ~ing', completed: false },
    { id: 2, todo: 'Portfolio', completed: false },
    { id: 3, todo: 'Final Idea', completed: false }
  ]);

  const [inputTodo, setInputTodo] = useState('');
  const [didOrNot, setDidOrNot] = useState(false);
  const [nextId, setNextId] = useState(4);

  const onChangeHandler = e => setInputTodo(e.target.value);

  const onDidChangeHandler = (e, id) => {
    const updatedTodo = todo.map((item) =>
      item.id === id ? { ...item, completed: e.target.checked } : item
    );
    setTodo(updatedTodo);
  };

  const onClickHandler = () => {
    const addTodo = todo.concat({
      id: nextId,
      todo: inputTodo,
      completed: didOrNot
    });
    setNextId(nextId + 1);
    setTodo(addTodo);
    setInputTodo('');
    setDidOrNot(false);
  };

  const onRemove = (id) => {
    console.log('삭제된 list id ' + id);
    const updatedTodo = todo.filter((item) => item.id !== id);
    setTodo(updatedTodo);
  };

  const todoList = todo.map((todo) => {
    return (
      <li key={todo.id} className={todo.completed ? 'completed' : ''} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={(e) => onDidChangeHandler(e, todo.id)}
        />
        {todo.todo}
        <button onClick={() => onRemove(todo.id)}>삭제</button>
      </li>
    );
  });


  
  function toggleClass() {
    document.getElementsByClassName('listContainer').classList.toggle('test')
  }
  



  return (
    <>
      <button onClick={toggleClass}>Dark Mode</button>
      <div className="listContainer">
        <h1>ToDo List</h1>
        <ul>{todoList}</ul>
        <div className="inputContainer">
          <input value={inputTodo} onChange={onChangeHandler} />
          <button onClick={onClickHandler}>추가</button>
        </div>
      </div>
    </>
  );
}

export default App;



// import React from "react";

// const {useState} = React;

// function App() {

//   const [todo, setTodo] = useState([
//     {id: 1, todo: 'Semi ~ing', completed: false},
//     {id: 2, todo: 'Portfolio', completed: false},
//     {id: 3, todo: 'Final Idea', completed: false}
//   ])

//   const [inputTodo, setInputTodo] = useState('')
//   const [didOrNot, setDidOrNot] = useState(false)
//   const [nextId, setNextId] = useState(4)

//   const onChangeHandler = e => setInputTodo(e.target.value)

//   // const onDidChangeHandler = e => {
    
//   // }
  
//   const onClickHandler = () => {
//     const addTodo = todo.concat({
//       id: nextId,
//       todo: inputTodo,
//       completed: didOrNot
//     })
//     setNextId(nextId+1)
//     setTodo(addTodo)
//     setInputTodo('')
//     setDidOrNot(false)
//   }

//   const onRemove = id => {
//     console.log('삭제된 list id ' + id)
//     const addTodo = todo.filter(todo => todo.id !==id)
//     setTodo(addTodo)
//   }

//   const todoList = todo.map(
//     todo => {
//       return (
//         <>
//           <li key={todo.id}>
//             <input type="checkbox"/> {todo.todo}
//           </li>
//           <button onClick={()=>onRemove(todo.id)}>삭제</button>
//         </>
//       )
//     }
//   )

//   console.log(todo)

//   return (
//     <>
//       <div style={{width:'50rem',height:'200rem',margin:'0 auto'}}>
//         <h1 style={{textAlign:'center'}}>ToDo List</h1>
//         <ul style={{listStyle:'none'}}>
//           {todoList}
//         </ul>
//         <input value={inputTodo} onChange={onChangeHandler}/>
//         <button onClick={onClickHandler}>추가</button>
//       </div>
//     </>
//   );
// }

// export default App;