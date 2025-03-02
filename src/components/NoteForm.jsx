/* eslint-disable react/prop-types */
import { useCallback, useState, useMemo } from "react";

export const NoteForm = (props) => {
  const {
    task,
    setTask,
    taskList,
    setTaskList,
    editMode,
    setEditMode,
    editableNote,
    searchTerm,
    setSearchTerm,
  } = props;

  const [isSearching, setIsSearching] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Adjust this number based on your preference

  // Filter tasks based on search term
  const filteredTasks = useMemo(() => {
    return taskList.filter((note) =>
      note.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [taskList, searchTerm]);

  // Calculate pagination
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredTasks.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredTasks.length / itemsPerPage);

  // Pagination handlers
  const goToNextPage = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  const goToPreviousPage = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleTaskChange = (e) => {
    setTask(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!task.trim()) {
      return alert("Please enter a task");
    }
    editMode === true ? updateHandler() : addTask();
  };

  const addTask = () => {
    const newnote = {
      id: crypto.randomUUID(),
      title: task,
      isCompleted: false,
    };
    console.log("Random ID: ", newnote.id);
    setTaskList([newnote, ...taskList]);
    setTask("");
  };

  const updateHandler = () => {
    const updateNote = { ...editableNote, title: task };
    const removePrevNote = taskList.filter(
      (note) => note.id !== editableNote.id
    );
    setTaskList([updateNote, ...removePrevNote]);
    setEditMode(false);
    setTask("");
  };

  const debouncedSearch = useCallback((value) => {
    setIsSearching(true);
    const timeoutId = setTimeout(() => {
      setIsSearching(false);
    }, 300);
    return () => clearTimeout(timeoutId);
  }, []);

  const handleSearchChange = useCallback(
    (e) => {
      const value = e.target.value;
      setSearchTerm(value);
      debouncedSearch(value);
      setCurrentPage(1); // Reset to first page on new search
    },
    [debouncedSearch, setSearchTerm]
  );

  // Generate page numbers
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <h1>ToDo List</h1>

      {/* Search Form */}
      <div className="search-container">
        <label>Search </label>
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Search note..."
        />
        {isSearching && <span>Searching...</span>}
      </div>

      {/* Add/Update Form */}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="Enter a task..."
        />
        <button type="submit">
          {editMode === true ? "Update Task" : "Add Task"}
        </button>
      </form>

      {/* Display filtered tasks with pagination */}
      <div className="task-list">
        {/* <h2>Tasks {searchTerm ? (filtered by: ${searchTerm}) : ''}</h2> */}
        {filteredTasks.length === 0 ? (
          <p>{searchTerm ? "No matching tasks found" : "No tasks yet"}</p>
        ) : (
          <>
            <ul>
              {currentItems.map((note) => (
                <li key={note.id}>{note.title}</li>
              ))}
            </ul>

            {/* Pagination controls */}
            <div className="pagination">
              <button onClick={goToPreviousPage} disabled={currentPage === 1}>
                Previous
              </button>

              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => goToPage(number)}
                  className={currentPage === number ? "active" : ""}
                >
                  {number}
                </button>
              ))}

              <button
                onClick={goToNextPage}
                disabled={currentPage === totalPages || totalPages === 0}
              >
                Next
              </button>

              <span className="page-info">
                Page {currentPage} of {totalPages || 1}
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default NoteForm;
