/* eslint-disable react/prop-types */

export const NoteList = (props) => {
    // const {filteredTerm, setTask} = props;
    const {filteredTerm, setTask, taskList, setTaskList, setEditMode, setEditableNote} = props;

    const filteredNote = taskList.filter((note) =>{
        if (filteredTerm === 'completed'){
            return note.isCompleted === true;
        } else if (filteredTerm === 'uncompleted'){
            return note.isCompleted === false;
        } else {
            return true; // eikhane note use korlam na keno?
        }
    });

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
  return (
    <>
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
    </>
  )
}
