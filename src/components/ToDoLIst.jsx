import "./../App.css";
import { NoteForm } from "./NoteForm";
import { NoteSection } from "./NoteSection";

function ToDoList() {


  return (
    <>
      <div className="todo">
        <NoteForm />
        <NoteSection />
      </div>
    </>
  );
}
export default ToDoList;
