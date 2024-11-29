import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';
function App() {
  const[listTodo, setListTodo] = useState([]);

  let addList = (inputText) =>{
    if(inputText !=='')
      setListTodo([...listTodo,inputText]);
  }

  const deleteListItem = (key) =>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1);
    setListTodo([...newListTodo]);
  }
  return (
    <div className="main-container">
      <div className='center-container'>
        
        <TodoInput addList={addList}/>
        <h1 className='app-heading'> Your TODO's</h1>
        <hr/>
        {
          listTodo.map((listItem, i) =>{
            return(
              <TodoList key={i} index = {i}item = {listItem}
              deleteItem = {deleteListItem}/>
            )
          })
        }
      </div>      
    </div>
  );
}

export default App;