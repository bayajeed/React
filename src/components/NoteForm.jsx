/* eslint-disable react/prop-types */
import { useContext } from "react";
import { NoteContext } from "../contexts/Note";
export const NoteForm = () => {
  // props destructuring
  // const {editMode, setTaskList, taskList, editableNote, setEditMode } = props;
  const {
    task,
    editMode,
    searchTerm,
    handleTaskChange,
    submitHandler,
    handleSearchChange,
  } = useContext(NoteContext);

  return (
    <>
      <h1>ToDo List</h1>
      <form onSubmit={submitHandler}>
        <label>Search </label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search note..."
        />
      </form>
      <form onSubmit={submitHandler}>
        <input type="text" value={task} onChange={handleTaskChange} />
        <button type="submit">
          {editMode === true ? "Update Task" : "Add Task"}
        </button>
      </form>
    </>
  );
};
