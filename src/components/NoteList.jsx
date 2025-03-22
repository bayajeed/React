/* eslint-disable react/prop-types */
import { useContext } from "react";
import { NoteContext } from "../contexts/Note";

export const NoteList = () => {
  // const {filteredTerm, setTask} = props;
  const { filteredNote, toggleIsCompletedFlag, editHandler, deleteHandler } =
    useContext(NoteContext);

  // const searchedTasks = filteredNote.filter((note) => {
  //   return note.title.toLowerCase().includes(searchTerm.toLowerCase());
  // });

  // const itemsPerPage = 5;
  // const indexOfLastItem = currentPage * itemsPerPage; // শেষ আইটেমের index
  // const indexOfFirstItem = indexOfLastItem - itemsPerPage; // প্রথম আইটেমের index
  // const currentTasks = searchedTasks.slice(indexOfFirstItem, indexOfLastItem);

  // const totalPages = Math.ceil(searchedTasks.length / itemsPerPage);

  // const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <ul className="task-list">
        {filteredNote.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.isCompleted}
              onChange={() => toggleIsCompletedFlag(task)}
            />
            <span>{task.title}</span>
            <button onClick={() => editHandler(task)}>Edit</button>
            <button onClick={() => deleteHandler(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </>
  );
};
