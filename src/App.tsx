import { useState, useCallback } from "react";
import "./App.css";
import { v4 as uuid } from "uuid";

import Header from "./components/Header";
import Cards from "./components/Cards";
import AddNoteForm from "./components/AddNote";

function App() {
  const [cards, setCards] = useState([
    {
      noteID: uuid(),
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis veritatis suscipit ab impedit magnam voluptates, eligendi aliquam dolores vitae! Distinctio architecto minima, voluptate doloribus eveniet dolores magni neque tenetur excepturi?",
    },
    {
      noteID: uuid(),
      body: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis veritatis suscipit ab impedit magnam voluptates, eligendi aliquam dolores vitae!",
    },
  ]);

  const addNote = useCallback((text: string): void => {
    console.log(cards);
    const newNote = {
      noteID: uuid(),
      body: text,
    };
    setCards((prevNotes) => [...prevNotes, newNote]);
  }, []);

  const deleteNote = useCallback((id: string): void => {
    console.log(id);
    console.log(cards);
    setCards((prevNotes) => prevNotes.filter((note) => note.noteID !== id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(new Date());
  return (
    <div className="app">
      <div className="notes">
        <Header />
        <Cards textCards={cards} onDelete={deleteNote} />
        <AddNoteForm onAddNote={addNote} />
      </div>
    </div>
  );
}

export default App;
