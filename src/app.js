import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import ToDoItems from './components/ToDoItems';

const AppLayout = () => {
    const [toDoList, setToDoList] = useState([]);
    const [toDo, setToDo] = useState('');
    console.log('todo: ', toDoList)
    return (
        <>
        <div className="app">
      <div className="mainHeading">
        <h1>To-Do List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e) => setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={() => setToDoList([...toDoList, {id:Date.now(), text: toDo, status: false}])} className="fas fa-plus"></i>
      </div>
      {toDoList.map((item, index) => {
      return <ToDoItems item={item} key={index} allItems={toDoList} setItems={setToDoList}/>
      })}
    </div>
    </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayout/>);