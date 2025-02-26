/* eslint-disable react/prop-types */



export const NoteForm = (props) => {

    // props destructuring
    // const {editMode, setTaskList, taskList, editableNote, setEditMode } = props;
    const { task, setTask, taskList, setTaskList, editMode, setEditMode, editableNote } = props;

    const handleTaskChange = (e) => {
        setTask(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(!task.trim()){ //or// task.trim() === "";  it also be right
            return alert("Please enter a task");
        }
        
        // eslint-disable-next-line react/prop-types
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
  return (
    <>
        <h1>ToDo List</h1>
        
        <form onSubmit={submitHandler}>
            < input type="text" value={task} onChange={handleTaskChange} />
            <button type="submit">{editMode === true ?  "Update Task" : "Add Task"}</button>
        </form>
    </>
  )
}
