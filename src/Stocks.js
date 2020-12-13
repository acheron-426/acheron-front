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
            <h5>Last</h5>
          </td>
          <td>
            <h5>PE</h5>
          </td>
          <td>
            <p>avg daily vol.</p>
          </td>
        </th>
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

const Stock = ({ code, last_price, pe, average_daily_volume }) => {
  if (!code) return <div />;
  return (
        <tr>
          <td>
            <h5>{code}</h5>
          </td>
          <td>
            <h5>{last_price}</h5>
          </td>
          <td>
            <h5>{pe}</h5>
          </td>
          <td>
            <p>{average_daily_volume}</p>
          </td>
        </tr>
  );
};
