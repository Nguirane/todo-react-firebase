import Re4act, { useState, useEffect } from 'react';
import { TextField, Button } from '@material-ui/core';
import './App.css';
import firebase from 'firebase';
import db from './firebaseConfig';
import TodoListIem from './Todo'

function App() {
    const [todos, setTodos ] = useState([]);
    const [todoInput, setTodoInput] = useState("");
    
    const addTodo = (e) =>{
        e.preventDefault();
        
        db.collection("todos").add({
            inprogress:true,
            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
            todo:todoInput
        })
        
        setTodoInput("");
    }
    
     useEffect(() => {
    getTodos();
  }, []);
    
   function getTodos() {
    db.collection("todos").onSnapshot(function (querySnapshot) {
      setTodos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          todo: doc.data().todo,
          inprogress: doc.data().inprogress,
        }))
      );
    });
  }
    
  return (
    <div className="App">
      <h1>Aliounes todo</h1>
      <form>
      <div>
       <TextField label="write a todo" value={todoInput} onChange={(e)=>{setTodoInput(e.target.value)}}/> 
        <Button type="submit" onClick={addTodo}></Button>
        {todos.map((todo) => (
            <TodoListIem todo={todo.todo} inprogress={todo.inprogress} id={todo.id}/>
        ))}
    </div>
      </form>
    </div>
  );
}

export default App;
