/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const NoteContext = createContext(); // create a context

const NoteProvider = (props) => {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [filteredTerm, setFilteredTerm] = useState("all");

  // Note Form.................................................
  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      //or// task.trim() === "";  it also be right
      return alert("Please enter a task");
    }

    // eslint-disable-next-line react/prop-types
    editMode === true ? updateHandler() : addTask();
  };
  const addTask = () => {
    const newnote = {
      id: crypto.randomUUID(), //or// id: Date.now() + "",
      title: task,
      isCompleted: false,
    };
    console.log("Random ID: ", newnote.id);

    setTaskList([newnote, ...taskList]);
    setTask("");
  };
  const updateHandler = () => {
    // alert("Update your item ");
    // const newArr = taskList.map((note)=>{
    //     if (note.id === editableNote.id){
    //         return { ...note, title: task}
    //     }
    //     return {...note};
    // });

    const updateNote = { ...editableNote, title: task };
    // old object is {id: "1", title: "Task 1"} to change title to "Task 2" new object is {id: "1", title: "Task 2"}
    const removePrevNote = taskList.filter(
      (note) => note.id !== editableNote.id
    );

    setTaskList([updateNote, ...removePrevNote]);

    setEditMode(false); // after update logic executed
    setTask("");
  };
  const handleSearchChange = (e) => {
    console.log(e.target.value);
    setSearchTerm(e.target.value);
  };

  // Note List ...............................................
  const filteredNote = taskList.filter((note) => {
    if (filteredTerm === "completed") {
      return note.isCompleted === true;
    } else if (filteredTerm === "uncompleted") {
      return note.isCompleted === false;
    } else {
      return true; // eikhane note use korlam na keno?
    }
  });

  const deleteHandler = (id) => {
    // setTaskList(taskList.filter((task) => task.id !== id));
    const afterDelete = taskList.filter((note) => note.id !== id); //only delete the item with the id that is passed to the function
    setTaskList(afterDelete);
  };
  const editHandler = (task) => {
    setEditableNote(task); // value hold kore rakhbe
    setTask(task.title); // input fields a old value chole asbe
    setEditMode(true); // update mode chalu hobe
  };
  const toggleIsCompletedFlag = (targetedNote) => {
    // note.isCompleted = !note.isCompleted; // Muted hocche

    const checkArry = taskList.map((note) => {
      if (note.id === targetedNote.id) {
        return { ...note, isCompleted: !note.isCompleted }; // isCompleted: True or Fauls
      }
      return { ...note };
    });
    setTaskList(checkArry);
  };

  const ctxValue = {
    task,
    setTask,
    taskList,
    setTaskList,
    editMode,
    setEditMode,
    editableNote,
    setEditableNote,
    searchTerm,
    setSearchTerm,
    currentPage,
    setCurrentPage,
    filteredTerm,
    setFilteredTerm,
    filteredNote,
    deleteHandler,
    editHandler,
    toggleIsCompletedFlag,
    handleTaskChange,
    submitHandler,
    handleSearchChange,
  };

  return (
    <NoteContext.Provider value={ctxValue}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteProvider;
