import { useState } from "react";
import { CreateTodo } from "./components/CreateTodo"
import {Todos} from "./components/Todos";
import { useEffect } from "react";


function App() {
  const[todos, setTodos] = useState([])

  // fetch("http://localhost:5173/todos")
  // .then(async function(res){
  //   const json = await res.json();
  //   setTodos(json.todos)
  // })
  

  return (

    <>
      <CreateTodo setTodos={setTodos}></CreateTodo>
      <Todos todos={todos} setTodos={setTodos}></Todos>
    </>
  )
}

export default App
