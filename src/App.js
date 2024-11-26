
import './App.css';
import React,{useState} from 'react';

function App() {
  const [todos,setTodos]=useState([]);
  const [todo,setTodo]=useState("");
  return (
    <div className="app">
    <div className="mainHeading">
      <h1>ToDo List</h1>
    </div>
    <div className="subHeading">
      <br />
      <h2>Whoop, Lets plan buddy 🌝 ☕ </h2>
    </div>
    <div className="input">
      <input value={todo} onChange={(e)=>setTodo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
      <i onClick={()=>{if(todo.trim()){
        setTodos([...todos,{id:Date.now(), text:todo,status:false}]);
        setTodo("");
      }
    }
  
        
      }  className="fas fa-plus"></i>
    </div>
    <div className="todos">

      {
        todos.map((obj)=>{
        return(
      <div className="todo">
        <div className="left">
          <input onChange={(e)=>
            setTodos(todos.filter(obj2=>{
              if(obj.id===obj2.id){
                obj2.status=e.target.checked
              }
              return obj2
            }
            ))
          } 
          
         checked={obj.status} type="checkbox" name="" id="" />
          <p>{obj.text}{obj.status}</p>
        </div>
        <div className="right">
          <i

          onClick={()=>setTodos(todos.filter((del)=>del.id!==obj.id))}

           className="fas fa-times"></i>
        </div>
      </div>
          )}

  )}
  
  
    </div>
  </div>
  );
}

export default App;
