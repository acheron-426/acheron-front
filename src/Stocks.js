import React, { Component } from "react";

export default class Stocks extends Component {

  render() {
    return (
      <div>
        <input></input>
        <button id='getStockButton' onClick={getStock}>Get data</button>
        <br/>
        <div className="stock-container">
          {this.state["stockData"].map((data, key) => {
            return (
              <div key={key}>
                <Stock
                  key={key}
                  code={data.code}
                  isin_code={data.isin_code}
                  desc_full={data.desc_full}
                  last_price={data.last_price}
                  open_price={data.open_price}
                  day_high_price={data.day_high_price}
                  day_low_price={data.day_low_price}
                  change_price={data.change_price}
                  change_in_percent={data.change_in_percent}
                  volume={data.volume}
                  bid_price={data.bid_price}
                  offer_price={data.offer_price}
                  previous_close_price={data.previous_close_price}
                  previous_day_percentage_change={data.previous_day_percentage_change}
                  year_high_price={data.year_high_price}
                  last_trade_date={data.last_trade_date}
                  year_high_date={data.year_high_date}
                  year_low_price={data.year_low_price}
                  year_low_date={data.year_low_date}
                  year_open_price={data.year_open_price}
                  year_open_date={data.year_open_date}
                  year_change_price={data.year_change_price}
                  year_change_in_percentage={data.year_change_in_percentage}
                  pe={data.pe}
                  eps={data.eps}
                  year_change_in_percentage={data.average_daily_volume}
                  annual_dividend_yield={data.annual_dividend_yield}
                  market_cap={data.market_cap}
                  number_of_shares={data.number_of_shares}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }

}


const getStock = () => {

  fetch('https://www.asx.com.au/asx/1/share/ASX'
  ,{
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    }
  }
  ).then(function(response){
      //console.log(response)
      return response.json();
    }).then(function(myJson) {
      //console.log(myJson);
      this.setState({ "stockData": myJson });
    });
}

const Stock = ({code, isin_code, desc_full, open_price, day_high_price, day_low_price, change_price, change_in_percent, volume, bid_price, offer_price, previous_close_price, previous_day_percentage_change, year_high_price, last_trade_date, year_high_date, year_low_price, year_low_date, year_open_price, year_open_date, year_change_price, year_change_in_percentage, eps, annual_dividend_yield, market_cap, number_of_shares, last_price, pe, average_daily_volume}) => {
  if (!code) return <div />;
  return (
        <div>
          <div>Code: {code}</div>
          <div>ISIN code: {isin_code}</div>
          <div>Desc: {desc_full}</div>
          <div>Last price: {last_price}</div>
          <div>Open: {open_price}</div>
          <div>Day high: {day_high_price}</div>
          <div>Day low: {day_low_price}</div>
          <div>Change: {change_price}</div>
          <div>Change %: {change_in_percent}</div>
          <div>Volume: {volume}</div>
          <div>Bid: {bid_price}</div>
          <div>Offer: {offer_price}</div>
          <div>Prev close: {previous_close_price}</div>
          <div>Prev day % chg: {previous_day_percentage_change}</div>
          <div>Last trade date: {last_trade_date}</div>
          <div>Year high: {year_high_price}</div>
          <div>Year high date: {year_high_date}</div>
          <div>Year low: {year_low_price}</div>
          <div>Year low date: {year_low_date}</div>
          <div>Year open: {year_open_price}</div>
          <div>Year open date: {year_open_date}</div>
          <div>Year change: {year_change_price}</div>
          <div>Year change %: {year_change_in_percentage}</div>
          <div>PE: {pe}</div>
          <div>EPS: {eps}</div>
          <div>Avg daily volume: {average_daily_volume}</div>
          <div>Annual dividen yield: {annual_dividend_yield}</div>
          <div>Market cap: {market_cap}</div>
          <div>Number of shares: {number_of_shares}</div>
        </div> 
  );
}