import { useState } from "react";
import './../App.css';

function ToDoList () {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editableNote, setEditableNote] = useState(null);
    const [filteredTerm, setFilteredTerm] = useState('all');

    const filteredNote = taskList.filter((note) =>{
        if (filteredTerm === 'completed'){
            return note.isCompleted === true;
        } else if (filteredTerm === 'uncompleted'){
            return note.isCompleted === false;
        } else {
            return true; // eikhane note use korlam na keno?
        }
    });

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(!task.trim()){ //or// task.trim() === "";  it also be right
            return alert("Please enter a task");
        }
        
        editMode === true ? updateHandler() : addTask();
    }

    const addTask = () =>{
        const newnote = {
            id: crypto.randomUUID(),  //or// id: Date.now() + "", 
            title: task,
            isCompleted: false,
        }
        console.log("Random ID: ", newnote.id);

        setTaskList([newnote, ...taskList]);
        setTask("");

    }

    const updateHandler = () => {

        // alert("Update your item ");
        // const newArr = taskList.map((note)=>{
        //     if (note.id === editableNote.id){
        //         return { ...note, title: task}
        //     }
        //     return {...note};
        // });

        const updateNote = {...editableNote, title: task};
        // old object is {id: "1", title: "Task 1"} to change title to "Task 2" new object is {id: "1", title: "Task 2"}
        const removePrevNote = taskList.filter((note)=> note.id !== editableNote.id)
    
        setTaskList([updateNote, ...removePrevNote]);

        setEditMode(false); // after update logic executed
        setTask('')
    }

    const deleteHandler = (id) => {
        // setTaskList(taskList.filter((task) => task.id !== id));
        const afterDelete = taskList.filter((note) => note.id !== id) //only delete the item with the id that is passed to the function
        setTaskList(afterDelete);
    }

    const editHandler = (task)=> {
        setEditableNote(task) // value hold kore rakhbe 
        setTask(task.title) // input fields a old value chole asbe
        setEditMode(true) // update mode chalu hobe
    }

    const toggleIsCompletedFlag = (targetedNote) =>{
        // note.isCompleted = !note.isCompleted; // Muted hocche

        const checkArry = taskList.map((note) =>{
            if (note.id === targetedNote.id){
                return {...note, isCompleted: !note.isCompleted}; // isCompleted: True or Fauls
            }
            return{...note}
        })
        setTaskList(checkArry)
    }
    
    return(
        <>
            <div className="todo">
                <h1>ToDo List</h1>
                <select name="" id="" value={filteredTerm} onChange={(e)=> setFilteredTerm(e.target.value)}>
                    <option value="all">All Item</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
                <form onSubmit={submitHandler}>
                    < input type="text" value={task} onChange={handleTaskChange} />
                    <button type="submit">{editMode ?  "Update Task" : "Add Task"}</button>
                </form>

                <ul className="task-list">
                    {filteredNote.map((task) =>(
                        <li key={task.id}>
                            <input type="checkbox" checked={task.isCompleted} onChange={()=>toggleIsCompletedFlag(task)} />
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


