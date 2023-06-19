import { useState } from "react";
import "./App.css";

function App() {
  const [cards, setCards] = useState([
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perferendis veritatis suscipit ab impedit magnam voluptates, eligendi aliquam dolores vitae! Distinctio architecto minima, voluptate doloribus eveniet dolores magni neque tenetur excepturi?",
  ]);

  return (
    <div className="app">
      <div className="notes">
        <div className="header">
          <h2 className="header-title">Notes</h2>
          <button type="button" className="btn btn-update" />
        </div>
        <div className="cards">
          <div className="card">
            <div className="card-body">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Perferendis veritatis suscipit ab impedit magnam voluptates,
              eligendi aliquam dolores vitae! Distinctio architecto minima,
              voluptate doloribus eveniet dolores magni neque tenetur excepturi?
            </div>
            <button type="button" className="btn btn-delete" />
          </div>
          <form action="" className="add-note">
            <h3>New Note</h3>
            <textarea name="" id="" cols={40} rows={10}></textarea>
            <button type="submit" className="btn btn-send" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
