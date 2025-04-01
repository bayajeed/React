import "./App.css";
// import ToDoList from "./components/ToDoList";
import Reducer from "./components/Reducer";

function App() {
  return (
    <>
      {/* <ToDoList /> */}
      <Reducer />
    </>
  );
}

export default App;

/**
 * 3 rules to be a component
 * 1. It should be a function
 * 2. That function should return "something"
 * 3. That "something" should be a JSX / html-ish code
 *
 */
