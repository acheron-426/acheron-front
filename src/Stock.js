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
                isin_code={data.isin_code}
                desc_full={data.desc_full}
                last_price={data.last_price}
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
      <h2>Stock List</h2>
    </header>
  );
};

const Stock = ({ code, isin_code, desc_full, last_price }) => {
  if (!code) return <div />;
  return (
    <table>
      <tbody>
        <tr>
          <td>
            <h5>{code}</h5>
          </td>
          <td>
            <h5>{isin_code}</h5>
          </td>
          <td>
            <h4>{desc_full}</h4>
          </td>
          <td>
            <p>{last_price}</p>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default Stocks;