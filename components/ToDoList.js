import { React, useState } from 'react'
import { addTodo, deleteTodo } from '../redux/action';
import { useDispatch, useSelector } from "react-redux";

const ToDoList = () => {
const [inputText, setInputText] = useState("");
const dispatch = useDispatch();
const selector = useSelector(state => state.todoReducer.list)

console.log(selector);

function onChange(e) {
    setInputText(e.target.value);
}
function onSubmit(e) {
    e.preventDefault();
    setInputText("");
}
function buttonAddTodo() {
    dispatch(addTodo(inputText));
}

function buttonDeleteTodo() {
    dispatch(deleteTodo(item.id));
}
  return (
    <>
        <h1>To Do List</h1>
        <form onSubmit={onSubmit}>
            <input type="text" value={inputText} onChange={onChange} />
            <button onClick={buttonAddTodo}>Add</button>
        </form>
        {selector.map((item) => {
            return (
                <div key={item.id}>
                    <li>{item.data}</li>
                    <button onClick={buttonDeleteTodo}>X</button>
                </div>
            )
        })}
    </>
  )
}

export default ToDoList