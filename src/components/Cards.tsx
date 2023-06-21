function Card({ text }: {
  text: string;
}) {
  return (
    <div className="card">
      <div className="card-body">
        { text }
      </div>
      <button type="button" className="btn btn-delete" />
    </div>
  );
}

function Cards({ textCards = [] }: {
  textCards: string[] | [];
}) {
  return (
    <div className="cards">
      {textCards.map((card) => <Card text={card} />)}
    </div>
  )
}

export default Cards;
