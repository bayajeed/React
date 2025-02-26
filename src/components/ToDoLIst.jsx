import { useState } from "react";
import './../App.css';
import { NoteForm } from "./NoteForm";
import { NoteSection } from "./NoteSection";

function ToDoList () {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editableNote, setEditableNote] = useState(null);
    return(
        <>
            <div className="todo">
                <NoteForm
                task={task}
                setTask={setTask}
                taskList={taskList}
                setTaskList={setTaskList}
                editMode={editMode}
                setEditMode={setEditMode}
                editableNote={editableNote}              
                />    
                <NoteSection 
                setTask={setTask}
                taskList={taskList}
                setTaskList={setTaskList}
                setEditMode={setEditMode}
                setEditableNote={setEditableNote}
                />
            </div>
        </>
    );
}
export default ToDoList;


