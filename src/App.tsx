import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards";

function App() {
  const [cards, setCards] = useState([
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis veritatis suscipit ab impedit magnam voluptates, eligendi aliquam dolores vitae! Distinctio architecto minima, voluptate doloribus eveniet dolores magni neque tenetur excepturi?',
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis veritatis suscipit ab impedit magnam voluptates, eligendi aliquam dolores vitae!',
  ]);

  return (
    <div className="app">
      <div className="notes">
        <div className="header">
          <h2 className="header-title">Notes</h2>
          <button type="button" className="btn btn-update" />
        </div>
        <Cards textCards={cards} />
        <form action="" className="add-note">
          <h3>New Note</h3>
          <textarea
            className="add-note-textfield"
            name=""
            cols={40} rows={10} />
          <button type="submit" className="btn btn-send" />
        </form>
      </div>
    </div>
  );
}

export default App;
