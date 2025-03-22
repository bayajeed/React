/* eslint-disable react/prop-types */
import { useContext } from "react";
import { NoteContext } from "../contexts/Note";

export const NoteFilterOptions = () => {
  const { filteredTerm, setFilteredTerm } = useContext(NoteContext);
  return (
    <>
      <select
        name=""
        id=""
        value={filteredTerm}
        onChange={(e) => setFilteredTerm(e.target.value)}
      >
        <option value="all">All Item</option>
        <option value="completed">Completed</option>
        <option value="uncompleted">Uncompleted</option>
      </select>
    </>
  );
};
