import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import NoteProvider from "./contexts/Note.jsx";

createRoot(document.getElementById("root")).render(
  //<StrictMode>
  <NoteProvider>
    <App />
  </NoteProvider>
  //</StrictMode>,
);

/** <App /> is invock for app component.. call kore **/
