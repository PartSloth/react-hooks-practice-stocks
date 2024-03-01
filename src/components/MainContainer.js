import React, { useEffect, useState } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  const [filterBy, setFilterBy] = useState("");

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(res => res.json())
    .then(stocks => setStocks(stocks))
  }, []);

  function handleStockBought(clickedStock) {
    if(portfolio.includes(clickedStock)) {
      return portfolio;
    } else {
      const updatePortfolio = [...portfolio, clickedStock];
      setPortfolio(updatePortfolio);
    }
  }

  function handlePortfolioSell(clickedStock) {
    const updatePortfolio = portfolio.filter(stock => stock.id !== clickedStock.id)
    setPortfolio(updatePortfolio);
  }

  function handleSortFilter(sortBy) {
    if(sortBy === "Alphabetically") {
      const updateStocks = stocks.sort(( a, b ) => {
        if(a.name < b.name) {
          return - 1;
        }
        return 1;
      });
      setStocks([...updateStocks]);
    } else {
      const updateStocks = stocks.sort(( a, b ) => a.price - b.price)
      setStocks([...updateStocks]);
    }
  }

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  const stocksDisplayed = stocks.filter(stock => {
    if(filterBy === "") {
      return true;
    }
    return stock.type === filterBy;
  })

  console.log(stocksDisplayed)

  return (
    <div>
      <SearchBar onSort={handleSortFilter} onFilterChange={handleFilterChange} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocksDisplayed} onCardClick={handleStockBought} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolio={portfolio} onPortfolioClick={handlePortfolioSell} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
