import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
function Todo() {
    let [tasks, setTasks] = useState([]);
    let [newTask, setNewTask] = useState("")
    let [isDoneForAll , setIsDoneForAll] = useState(false)
    function addTask() {
        setTasks((prevtask) => {
            return [...tasks, { task: newTask, id: uuidv4() , isDone :false }];
        })
        setNewTask("");
    }

    function deleteTask(id) {
        let newTasks = tasks.filter((task) => task.id != id)
        setTasks(newTasks);
    }

    let upperCaseAll = () => {
        setTasks((prevTask) => 
            prevTask.map((task) => {
                return {
                    ...task,
                    task: task.task.toUpperCase(),
                };
            })
        
        )
    }

    let upperCaseOne = (id) =>{
        setTasks((prevTasks)=>
            prevTasks.map((task)=>{
                if(task.id === id){
                    return{
                        ...task ,
                        task : task.task.toUpperCase()
                    }
                }else{
                    return task;
                }
            })
        )
    }

    let markAsDone = ( id) => {
        setTasks((prevTasks)=>
            prevTasks.map((task)=>{
                if(task.id === id){
                    return{
                        ...task ,
                        isDone : true
                    }
                }else{
                    return task;
                }
            })
        )
    }

    return (
        <>
            <h1>Todo App</h1>
            <input type="text" name="" id="" value={newTask} placeholder="Add a task" onChange={(e) => setNewTask(e.target.value)} />
            <button onClick={addTask}>Add task</button>
            <hr />
            <h1>Todo List</h1>
            {/* {
                task.map((tas, index)=>(
                    <ul key={index}>
                        <li>{tas}</li>
                    </ul>
                ))
            } */}


            {/* NEW METHOD TO USE MAP()  : But this is bad practice */}

            <ul>
                {
                    isDoneForAll ? (tasks.map((task) => {
                        return <li key={task.id} >
                            <p style={{textDecoration:"line-through"}}>{task.task}</p>
                            
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                            <button onClick={() => upperCaseOne(task.id)}>Upper Case</button>
                            

                        </li>
                    })) : (tasks.map((task) => {

                        return <li key={task.id}>
                            {task.isDone ? <p style={{textDecoration:"line-through"}}>{task.task}</p> : <p>{task.task}</p>}
                            
                            <button onClick={() => deleteTask(task.id)}>Delete</button>
                            <button onClick={() => upperCaseOne(task.id)}>Upper Case</button>
                            {task.isDone ? "" : <button onClick={() => markAsDone(task.id)}>Mark as done</button>}
                            

                        </li>
                    }))
                }
                
            </ul>
            <br /><br />
            <button onClick={upperCaseAll}>UpperCase All</button>
            <button onClick={()=>setIsDoneForAll(true)}>Mark as done for all</button>
        </>
    );
}
export default Todo;