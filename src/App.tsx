import { useState, useCallback } from "react";
import "./App.css";
import Cards from "./components/Cards";
import { v4 as uuid } from 'uuid';
import AddNoteForm from "./components/AddNote";

// let notes = [
//   {
//     noteID: uuid(),
//     body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis veritatis suscipit ab impedit magnam voluptates, eligendi aliquam dolores vitae! Distinctio architecto minima, voluptate doloribus eveniet dolores magni neque tenetur excepturi?',
//   },
//   {
//     noteID: uuid(),
//     body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis veritatis suscipit ab impedit magnam voluptates, eligendi aliquam dolores vitae!'
//   }
// ]

function App() {
  const [cards, setCards] = useState([
    {
      noteID: uuid(),
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis veritatis suscipit ab impedit magnam voluptates, eligendi aliquam dolores vitae! Distinctio architecto minima, voluptate doloribus eveniet dolores magni neque tenetur excepturi?',
    },
    {
      noteID: uuid(),
      body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis veritatis suscipit ab impedit magnam voluptates, eligendi aliquam dolores vitae!'
    }
  ]);

  const addNote = useCallback((text: string): void => {
    console.log(cards);
    const newNote = {
      noteID: uuid(),
      body: text,
    }
    setCards((prevNotes) => [...prevNotes, newNote]);
  }, [cards]);

  const deleteNote = useCallback((id: string): void => {
    console.log(id);
    console.log(cards);
    setCards(
      // cards.filter((card) => card.noteID !== id)
      (prevNotes) => prevNotes.filter((note) => note.noteID !== id)
    );
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const addNote = (text: string): void => {
  //   notes = [
  //     ...notes,
  //     {
  //       noteID: uuid(),
  //       body: text,
  //     }
  //   ];
  //   console.log(notes);
  // }

  // const deleteNote = (id: string): void => {
  //   notes = notes.filter((note) => note.noteID !== id);
  // }

  console.log(new Date());
  return (
    <div className="app">
      <div className="notes">
        <div className="header">
          <h2 className="header-title">Notes</h2>
          <button type="button" className="btn btn-update" />
          { console.log('header') }
        </div>
        <Cards textCards={cards} onDelete={deleteNote} />
        <AddNoteForm onAddNote={addNote}/>
      </div>
    </div>
  );
}

export default App;
