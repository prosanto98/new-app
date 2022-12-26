import React, { useEffect, useState } from 'react'
import "./todo.css"
import { getDatabase,ref, set,push,onValue  } from "firebase/database";
const Todo = () => {
    

    const db = getDatabase();
    const[todo,setTodo] = useState ("")
    const[todoshow,setTodoshow] = useState ([])
    const[todoerr,setTodoerr] = useState ("")

    let handleInput = (e) => {
        setTodo(e.target.value);
    }
    
    let handleSubmit = (e) => {
        e.preventDefault()
        if(todo){
            set(push(ref(db, 'todo')), {
               todo:todo
                
              });
              setTodoerr("Successfully Submitted")
              setTodo("")
        }else{
            setTodoerr("Please Enter Your Value")
        }
    }
    useEffect(() =>{
        
        const starCountRef = ref(db, 'todo');
            onValue(starCountRef, (snapshot) => {
                let todoarr = []
                snapshot.forEach((item) =>{
                    todoarr.push(item.val());
                })     
                setTodoshow(todoarr)
        });

    },[])

  return (
    <div className='container py-5'>
       <h2 style={{textAlign:"center",paddingTop:"20px"}}>Todo Page</h2>
        <div className='text-center'>
            <form>
                <input type="text" placeholder='Add Tasks' onChange={handleInput} 
                className='inputtodo' value={todo}/>
               <br/> 
               {todoerr} 
               <br/>
                <button type='submit' className='todobtn' onClick={handleSubmit}>Add</button>
            </form>  

            <div className='show-data'>
                  <ul>
                    {todoshow.map((showdata) =>(
                      <li>{showdata.todo}</li>
                    ))}
                    
                  </ul>
            </div>
        </div>      
      
    </div>
  )
}

export default Todo