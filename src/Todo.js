import React from 'react';
import {ListItem, ListItemText, Button } from "@material-ui/core";
import db from './firebaseConfig'
const TodoListItem = ({todo, id, inprogress})=>{
    
    const toggleProgress = () =>{
        db.collection("todos").doc(id).update({
            inprogress: !inprogress
        });
    }
    
    const deleteTodo = () =>{
        db.collection("todos").doc(id).delete();
    }
    
    return(
        <div>
            <ListItem>
                <ListItemText primary={todo} secondary={inprogress ? "In Progress" : "Completed"}/>
            </ListItem>
            <Button onClick={toggleProgress}>{inprogress ? "Done" : "UnDone"}</Button>
            <Button onClick={deleteTodo}>X</Button>
        </div>
        
        
    )
}

export default TodoListItem;