import { memo } from "react";
import { TextCard } from "../interfaces";

const Card = memo(function Card({ id, text, onDelete }: {
  id: string,
  text: string,
  onDelete: CallableFunction,
}) {
  console.log(id);
  const handleDeleteCard = ():void => {
    onDelete(id);
  }

  return (
    <div className="card">
      <div className="card-body">
        { text }
      </div>
      <button type="button" className="btn btn-delete" onClick={handleDeleteCard} />
    </div>
  );
})

const Cards = memo(function Cards({ textCards = [], onDelete }: {
  textCards: TextCard[] | [];
  onDelete: CallableFunction;
}) {
  return (
    <div className="cards">
      {textCards.map((card) => <Card key={card.noteID} id={card.noteID} text={card.body} onDelete={onDelete} />)}
    </div>
  )
})

export default Cards;
