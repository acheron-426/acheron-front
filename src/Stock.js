import React, { useState } from "react";
import { stockData } from "./data";

function StocksComponent() {
  const [currentStock, setCurrentStock] = useState("");
  const [stocks, setStocks] = useState([
    {
      stock: "GOR",
      isCompleted: false
    }, 
    {
      stock: "ASX",
      isCompleted: false
    }, 
    {
      stock: "CSL",
      isCompleted: false
    }
  ]);

  function createNewStock(currentStock) {
    let stocksArray = [...stocks];
    stocksArray.push({
      stock: currentStock,
      isCompleted: false
    });
    setStocks(stocksArray);
  }

  function completeStock(index) {
    let stocksArray = [...stocks];
    stocksArray[index].isCompleted = !stocksArray[index].isCompleted;
    setStocks(stocksArray);
  }

  function deleteStock(index) {
    let stocksArray = [...stocks];
    stocksArray.splice(index, 1);
    setStocks(stocksArray);
  }

  return (
    <div>
      <input
        className="stock-input"
        value={currentStock}
        onChange={e => {
          setCurrentStock(e.target.value);
        }}
        onKeyPress={e => {
          if (e.key === "Enter") {
            createNewStock(currentStock);
            setCurrentStock("");
          }
        }}
        placeholder="Add ticker"
      />

      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              {data.code +
                " , " +
                data.last_price +
                " ," +
                data.volume +
                ", " +
                data.pe +
                ", " +
                data.eps +
                ", " +
                data.average_daily_volume +
                ", " +
                data.market_cap +
                ", " +
                data.average_daily_volume +
                ", " +
                data.average_daily_volume +
                ", " +
                data.average_daily_volume +
                ", " +
                data.average_daily_volume}
            </div>
          );
        })}
      </div>
      {/*stocks.map((stock, index) => (
        <div key={stock} className="stock">
          <div className="checkbox" onClick={() => completeStock(index)}>
            {stock.isCompleted && <span>&#x2714;</span>}
          </div>
          <div className={stock.isCompleted ? "done" : ""}>{stock.stock}</div>
          <div className="delete" onClick={() => deleteStock(index)}>
            &#128465;
          </div>
        </div>
      ))*/}
      {/*stocks.length > 0 && `${stocks.length} stocks`*/}
    </div>
  );
}
export default StocksComponent;
