import React from "react";
import "./App.css";
import { stockData } from "./data";

export const Stocks = () => {
  return (
    <>
      <HomePageHeader />
      <div className="stock-container">
        {stockData.map((data, key) => {
          return (
            <div key={key}>
              <Stock
                key={key}
                code={data.code}
                last_price={data.last_price}
                pe={data.pe}
                average_daily_volume={data.average_daily_volume}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

const HomePageHeader = () => {
  return (
    <header className="header">
      <h2>Your Stock Tracker</h2>
    </header>
  );
};

const Stock = ({ code, last_price, pe, average_daily_volume }) => {
  if (!code) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{code}</h5>
          </td>
          <td>
            <h5>{last_price}</h5>
          </td>
          <td>
            <h4>{pe}</h4>
          </td>
          <td>
            <p>{average_daily_volume}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
