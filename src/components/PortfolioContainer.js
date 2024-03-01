import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolio, onPortfolioClick}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {portfolio.map(stock => <Stock key={stock.name} stock={stock} onCardClick={onPortfolioClick}/>)}
    </div>
  );
}

export default PortfolioContainer;
