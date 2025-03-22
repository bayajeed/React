import { useContext } from "react";
import { NoteContext } from "../contexts/Note";
import { NoteFilterOptions } from "./NoteFilterOptions";
import { NoteList } from "./NoteList";

export const NoteSection = (props) => {
  const { filteredTerm, setFilteredTerm } = useContext(NoteContext);

  const propsForNoteList = { ...props, filteredTerm, setFilteredTerm };
  return (
    <>
      <h3>All Task</h3>
      <NoteFilterOptions />
      <NoteList {...propsForNoteList} />
    </>
  );
};
