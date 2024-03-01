import React from "react";

function Stock({stock, onCardClick}) {
  const { name, price, ticker } = stock;

  function handleCardClicked(event) {
    onCardClick(stock);
  }

  return (
    <div>
      <div className="card" >
        <div className="card-body" onClick={handleCardClicked} >
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{`${ticker} : ${price}`}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
