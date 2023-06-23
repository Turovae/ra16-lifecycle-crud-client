import { useState } from "react";
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

  const addNote = (text: string): void => {
    setCards([
      ...cards,
      {
        noteID: uuid(),
        body: text,
      }
    ]);
  }

  const deleteNote = (id: string): void => {
    setCards(
      cards.filter((card) => card.noteID !== id)
    );
  }

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
