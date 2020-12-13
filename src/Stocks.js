import React from "react";
import "./App.css";
import { stockData } from "./data";

export const Stocks = () => {
  return (
    <>
      <HomePageHeader />
      <div className="stock-container">
    <table>
      <tbody>
        <th>
          <td>
            <h5>Code</h5>
          </td>
          <td>
            <h5>ISIN code</h5>
          </td>
          <td>
            <h5>Description</h5>
          </td>
          <td>
            <h5>Last</h5>
          </td>
          <td>
            <h5>Open</h5>
          </td>
          <td>
            <h5>Day high</h5>
          </td>
          <td>
            <h5>Day low</h5>
          </td>
          <td>
            <h5>Change Price</h5>
          </td>
          <td>
            <h5>Change %</h5>
          </td>
          <td>
            <h5>Volume</h5>
          </td>
          <td>
            <h5>Bid</h5>
          </td>
          <td>
            <h5>Offer</h5>
          </td>
          <td>
            <h5>Prev close</h5>
          </td>
          <td>
            <h5>Prev % chg</h5>
          </td>
          <td>
            <h5>Year high</h5>
          </td>
          <td>
            <h5>Last trade date</h5>
          </td>
          <td>
            <h5>Year high date</h5>
          </td>
          <td>
            <h5>Year low</h5>
          </td>
          <td>
            <h5>Year low date</h5>
          </td>
          <td>
            <h5>Year open</h5>
          </td>
          <td>
            <h5>Year open date</h5>
          </td>
          <td>
            <h5>Year change price</h5>
          </td>
          <td>
            <h5>Year change %</h5>
          </td>
          <td>
            <h5>PE</h5>
          </td>
          <td>
            <h5>EPS</h5>
          </td>
          <td>
            <h5>avg daily vol.</h5>
          </td>
          <td>
            <h5>annual dividend yield</h5>
          </td>
          <td>
            <h5>Market Cap</h5>
          </td>
          <td>
            <h5>Number of shares</h5>
          </td>
        </th>
        {stockData.map((data, key) => {
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
        </tbody>
    </table>
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Market Data</h2>
    </header>
  );
};

const Stock = ({ code, isin_code, desc_full, open_price, day_high_price, day_low_price, change_price, change_in_percent, volume, bid_price, offer_price, previous_close_price, previous_day_percentage_change, year_high_price, last_trade_date, year_high_date, year_low_price, year_low_date, year_open_price, year_open_date, year_change_price, year_change_in_percentage, eps, annual_dividend_yield, market_cap, number_of_shares, last_price, pe, average_daily_volume }) => {
  if (!code) return <div />;
  return (
        <tr>
          <td>
            {code}
          </td>
          <td>
            {isin_code}
          </td>
          <td>
            {desc_full}
          </td>
          <td>
            {last_price}
          </td>
          <td>
            {open_price}
          </td>
          <td>
            {day_high_price}
          </td>
          <td>
            {day_low_price}
          </td>
          <td>
            {change_price}
          </td>
          <td>
            {change_in_percent}
          </td>
          <td>
            {volume}
          </td>
          <td>
            {bid_price}
          </td>
          <td>
            {offer_price}
          </td>
          <td>
            {previous_close_price}
          </td>
          <td>
            {previous_day_percentage_change}
          </td>
          <td>
            {year_high_price}
          </td>
          <td>
            {last_trade_date}
          </td>
          <td>
            {year_high_date}
          </td>
          <td>
            {year_low_price}
          </td>
          <td>
            {year_low_date}
          </td>
          <td>
            {year_open_price}
          </td>
          <td>
            {year_open_date}
          </td>
          <td>
            {year_change_price}
          </td>
          <td>
            {year_change_in_percentage}
          </td>
          <td>
            {pe}
          </td>
          <td>
            {eps}
          </td>
          <td>
            {average_daily_volume}
          </td>
          <td>
            {annual_dividend_yield}
          </td>
          <td>
            {market_cap}
          </td>
          <td>
            {number_of_shares}
          </td>
        </tr>
  );
};

