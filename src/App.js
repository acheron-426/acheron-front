import React, { useState } from 'react';
import "./App.css";
//import Stocks from "./Stocks";
import axios from 'axios';

function App() {
  const [stocks, setStocks] = useState(null);
  const inputSymbols = "NIC.AX,GOR.AX, ADT.AX,ADV.AX,ATR.AX";
  //const apiURL = "https://apidojo-yahoo-finance-v1.p.rapidapi.com/auto-complete?q=TLS.AX&region=US";

  const options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes',
    params: {region: 'US', symbols: inputSymbols},
    headers: {
      'x-rapidapi-key': 'b1aa1b5067msh270379b26c5df56p184571jsn81ff8931fefc',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };

  const fetchData = async () => {
    const response = await axios.request(options);
    setStocks(response.data["quoteResponse"].result);
  }

  return (
    <div className="App">
      
      <header className="header">
        <h2>Enter symbols</h2>
      </header>

      <div>
        <input className="symbol-input" type="text" />&nbsp;
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
      </div>

      <div className="stocks">
        {stocks &&
          stocks.map((stock, index) => {

            return (
              <div className="stock" key={index}>
                <h3>{stock.shortName}</h3>
                <h2>{stock.symbol}</h2>

                <div className="details">
                <p>Last price: {stock.regularMarketPrice}</p>
                <p>Bid: {stock.bid}</p>
                <p>Ask: {stock.ask}</p>

                <p>Total cash: {stock.totalCash}</p>
                <p>EBITDA: {stock.ebitda}</p>
                <p>Revenue: {stock.revenue}</p>
                <p>Price to sales: {stock.priceToSales}</p>
                <p>Market cap: {stock.marketCap}</p>
                <p>Price to book: {stock.priceToBook}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
