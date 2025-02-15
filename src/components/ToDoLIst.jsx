import { useState } from "react";
import './../App.css';

function ToDoList () {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [editMode, setEditMode] = useState(false)
    const [editableNote, setEditableNote] = useState(null)

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(!task.trim()){ //or// task.trim() === "";  it also be right
            return alert("Please enter a task");
        }
        
        editMode === true ? updateHandler() : createHamdler();
    }

    const createHamdler = () =>{
        const newnote = {
            id: crypto.randomUUID(),  //or// id: Date.now() + "", 
            title: task,
        }
        console.log("Random ID: ", newnote.id);

        setTaskList([newnote, ...taskList]);
        setTask("");

    }

    const updateHandler = (e) => {

        alert("Update your item ");

        const newArr = taskList.map((note)=>{
            if (note.id === editableNote.id){
                return { ...note, title: task}
            }
            return {...note};
        });

        setTaskList(newArr);

        setEditMode(false); // after update logic executed
        setTask('')
    }

    const deleteHandler = (id) => {
        // setTaskList(taskList.filter((task) => task.id !== id));
        const afterDelete = taskList.filter((note) => note.id !== id) //only delete the item with the id that is passed to the function
        setTaskList(afterDelete);
    }

    const editHandler = (task)=> {
        setTask(task.title)
        setEditMode(true)
        setEditableNote(task)
    }
    
    return(
        <>
            <div className="todo">
                <h1>ToDo List</h1>
                <form onSubmit={submitHandler}>
                    < input type="text" value={task} onChange={handleTaskChange} />
                    <button type="submit">{editMode ?  "Update Task" : "Add Task"}</button>
                </form>

                <ul className="task-list">
                    {taskList.map((task) =>(
                        <li key={task.id}>
                            <span>{task.title}</span>
                            <button onClick={() => editHandler(task)}>Edit</button>
                            <button onClick={() => deleteHandler(task.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
export default ToDoList;

