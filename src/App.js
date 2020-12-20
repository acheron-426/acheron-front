import React, { useState } from 'react';
import "./App.css";
//import Stocks from "./Stocks";
import axios from 'axios';

function App() {
  const [stocks, setStocks] = useState(null);
  const [symbols, setSymbols] = useState("NIC.AX,GOR.AX,ADT.AX,ADV.AX,ATR.AX");
  
  const options = {
    method: 'GET',
    url: 'https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes',
    params: {region: 'US', symbols: symbols},
    headers: {
      'x-rapidapi-key': 'b1aa1b5067msh270379b26c5df56p184571jsn81ff8931fefc',
      'x-rapidapi-host': 'apidojo-yahoo-finance-v1.p.rapidapi.com'
    }
  };

  const doTheThing = (e) => {
    setSymbols(e.target.value);
  }

  const fetchData = async (e) => {
    e.target.disabled=true;
    const response = await axios.request(options);
    setStocks(response.data["quoteResponse"].result);
    e.target.disabled=false;
  }

  return (
    <div className="App">
      
      <header className="header">
        <h2>Enter symbols</h2>
      </header>

      <div>
        <input className="symbol-input" id="test" type="text" onChange={doTheThing} onBlur={fetchData} value={symbols} />&nbsp;
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
      </div>

      <div className="stocks">
        {stocks &&
          stocks.map((stock, index) => {
            const cleanSymbol = stock.symbol.replace('.AX','');
            const currentQuarterEstimate = (stock.quoteSummary.earnings === undefined)? "": stock.quoteSummary.earnings.earningsChart.currentQuarterEstimate;
            const currentQuarterEstimateDate = (stock.quoteSummary.earnings === undefined)? "": stock.quoteSummary.earnings.earningsChart.currentQuarterEstimateDate;
            const currentQuarterEstimateYear = (stock.quoteSummary.earnings === undefined)? "": stock.quoteSummary.earnings.earningsChart.currentQuarterEstimateYear;
            const prevEarningsActual0 = (stock.quoteSummary.earnings === undefined || stock.quoteSummary.earnings.earningsChart.quarterly[0] === undefined)? "": stock.quoteSummary.earnings.earningsChart.quarterly[0].actual;
            const prevEarningsEstimate0 = (stock.quoteSummary.earnings === undefined || stock.quoteSummary.earnings.earningsChart.quarterly[0] === undefined)? "": stock.quoteSummary.earnings.earningsChart.quarterly[0].estimate;
            const prevEarningsDate0 = (stock.quoteSummary.earnings === undefined || stock.quoteSummary.earnings.earningsChart.quarterly[0] === undefined)? "": stock.quoteSummary.earnings.earningsChart.quarterly[0].date;
            const prevEarningsActual1 = (stock.quoteSummary.earnings === undefined || stock.quoteSummary.earnings.earningsChart.quarterly[1] === undefined)? "": stock.quoteSummary.earnings.earningsChart.quarterly[1].actual;
            const prevEarningsEstimate1 = (stock.quoteSummary.earnings === undefined) || stock.quoteSummary.earnings.earningsChart.quarterly[1] === undefined? "": stock.quoteSummary.earnings.earningsChart.quarterly[1].estimate;
            const prevEarningsDate1 = (stock.quoteSummary.earnings === undefined || stock.quoteSummary.earnings.earningsChart.quarterly[1] === undefined)? "": stock.quoteSummary.earnings.earningsChart.quarterly[1].date;
            const prevEarningsActual2 = (stock.quoteSummary.earnings === undefined || stock.quoteSummary.earnings.earningsChart.quarterly[2] === undefined)? "": stock.quoteSummary.earnings.earningsChart.quarterly[2].actual;
            const prevEarningsEstimate2 = (stock.quoteSummary.earnings === undefined || stock.quoteSummary.earnings.earningsChart.quarterly[2] === undefined)? "": stock.quoteSummary.earnings.earningsChart.quarterly[2].estimate;
            const prevEarningsDate2 = (stock.quoteSummary.earnings === undefined || stock.quoteSummary.earnings.earningsChart.quarterly[2] === undefined)? "": stock.quoteSummary.earnings.earningsChart.quarterly[2].date;
            const prevEarningsActual3 = (stock.quoteSummary.earnings === undefined || stock.quoteSummary.earnings.earningsChart.quarterly[3] === undefined)? "": stock.quoteSummary.earnings.earningsChart.quarterly[3].actual;
            const prevEarningsEstimate3 = (stock.quoteSummary.earnings === undefined || stock.quoteSummary.earnings.earningsChart.quarterly[3] === undefined)? "": stock.quoteSummary.earnings.earningsChart.quarterly[3].estimate;
            const prevEarningsDate3 = (stock.quoteSummary.earnings === undefined || stock.quoteSummary.earnings.earningsChart.quarterly[3] === undefined)? "": stock.quoteSummary.earnings.earningsChart.quarterly[3].date;
            return (
              <div className="stock" key={index}>
                <h3>{stock.shortName}</h3>
                <h2>{cleanSymbol}</h2>
                <div className="earnings-details">
                <p>{currentQuarterEstimateDate}{currentQuarterEstimateYear} estimate: {currentQuarterEstimate}</p>
                <p>{prevEarningsDate3} earnings {prevEarningsActual3} (estimate {prevEarningsEstimate3})</p>
                <p>{prevEarningsDate2} earnings {prevEarningsActual2} (estimate {prevEarningsEstimate2})</p>
                <p>{prevEarningsDate1} earnings {prevEarningsActual1} (estimate {prevEarningsEstimate1})</p>
                <p>{prevEarningsDate0} earnings {prevEarningsActual0} (estimate {prevEarningsEstimate0})</p>
                </div>
                <hr/>
                <div className="price-details">
                <p>Last price: {stock.regularMarketPrice}</p>
                <p>Bid: {stock.bid}</p>
                <p>Ask: {stock.ask}</p>
                <p>Target price high: {stock.targetPriceHigh}</p>
                <p>Target price low: {stock.targetPriceLow}</p>
                <p>Target price mean: {stock.targetPriceMean}</p>
                <p>Target price median: {stock.targetPriceMedian}</p>
                <p>Post-market change %: {stock.postMarketChangePercent}</p>
                <p>Post-market time: {stock.postMarketTime}</p>
                <p>Post-market price: {stock.postMarketPrice}</p>
                <p>Post-market change: {stock.postMarketChange}</p>
                <p>Change: {stock.regularMarketChange}</p>
                <p>Change %: {stock.regularMarketChangePercent}</p>
                <p>Day high: {stock.regularMarketDayHigh}</p>
                <p>Day range: {stock.regularMarketDayRange}</p>
                <p>Day low: {stock.regularMarketDayLow}</p>
                <p>Volume: {stock.regularMarketVolume}</p>
                <p>Prev close: {stock.regularMarketPreviousClose}</p>
                <p>Bid size: {stock.bidSize}</p>
                <p>Ask size: {stock.askSize}</p>
                <p>Avg daily volume (3 month): {stock.averageDailyVolume3Month}</p>
                <p>Avg daily volume (10 day): {stock.averageDailyVolume10Day}</p>
                <p>Beta: {stock.beta}</p>
                <p>52 week range: {stock.fiftyTwoWeekRange}</p>
                <p>52 week high: {stock.fiftyTwoWeekHigh}</p>
                <p>52 week high change: {stock.fiftyTwoWeekHighChange}</p>
                <p>52 week high change %: {stock.fiftyTwoWeekHighChangePercent}</p>
                <p>52 week low: {stock.fiftyTwoWeekLow}</p>
                <p>52 week low change: {stock.fiftyTwoWeekLowChange}</p>
                <p>52 week low change %: {stock.fiftyTwoWeekLowChangePercent}</p>
                <p>50 day average: {stock.fiftyDayAverage}</p>
                <p>50 day average change: {stock.fiftyDayAverageChange}</p>
                <p>50 day average change %: {stock.fiftyDayAverageChangePercent}</p>
                <p>200 day average: {stock.twoHundredDayAverage}</p>
                <p>200 day average change: {stock.twoHundredDayAverageChange}</p>
                <p>200 day average change %: {stock.twoHundredDayAverageChangePercent}</p>
                </div>
                <hr/>
                <div className="book-details">
                <p>Book value: {stock.bookValue}</p>
                <p>Total cash: {stock.totalCash}</p>
                <p>EBITDA: {stock.ebitda}</p>
                <p>Revenue: {stock.revenue}</p>
                <p>Price to sales: {stock.priceToSales}</p>
                <p>Market cap: {stock.marketCap}</p>
                <p>Price to book: {stock.priceToBook}</p>
                <p>Trailing PE: {stock.trailingPE}</p>
                <p>PEG ratio: {stock.pegRatio}</p>
                <p>Dividends per share: {stock.dividendsPerShare}</p>
                <p>EPS trailing twelve months: {stock.epsTrailingTwelveMonths}</p>
                <p>EPS forward: {stock.epsForward}</p>
                <p>EPS current year: {stock.epsCurrentYear}</p>
                <p>EPS next quarter: {stock.epsNextQuarter}</p>
                <p>Price EPS current year: {stock.priceEpsCurrentYear}</p>
                <p>Price EPS next quarter: {stock.priceEpsNextQuarter}</p>
                <p>Forward PE: {stock.forwardPE}</p>
                </div>
                <hr/>
                <div className="share-details">
                <p>First trade date: {stock.firstTradeDateMilliseconds}</p>
                <p>Price hint: {stock.priceHint}</p>
                <p>Float shares: {stock.floatShares}</p>
                <p>Short ratio: {stock.shortRatio}</p>
                <p>Held by insiders %: {stock.heldPercentInsiders}</p>
                <p>Held by institutions %: {stock.heldPercentInstitutions}</p>
                <p>Shares short: {stock.sharesShort}</p>
                <p>Shares short prev month: {stock.sharesShortPrevMonth}</p>
                <p>Short % of float: {stock.shortPercentFloat}</p>
                <p>Ex div date: {stock.exDividendDate}</p>
                <p>Earnings timestamp: {stock.earningsTimestamp}</p>
                <p>Earnings start timestamp: {stock.earningsTimestampStart}</p>
                <p>Earnings end timestamp: {stock.earningsTimestampEnd}</p>
                <p>Shares outstanding: {stock.sharesOutstanding}</p>
                <p>Tradeable: {stock.tradeable}</p>
                </div>
                <hr/>
                <div className="market-details">
                <p>Market time: {stock.regularMarketTime}</p>
                <p>Exchange: {stock.exchange}</p>
                <p>Market: {stock.market}</p>
                <p>Market open: {stock.regularMarketOpen}</p>
                <p>Market state: {stock.marketState}</p>
                <p>Source Interval: {stock.sourceInterval}</p>
                <p>Exchange data delayed by: {stock.exchangeDataDelayedBy}</p>
                <p>Exchange timezone name: {stock.exchangeTimezoneName}</p>
                <p>Exchange timezone short name: {stock.exchangeTimezoneShortName}</p>
                <p>GMT off-by ms: {stock.gmtOffSetMilliseconds}</p>
                <p>ESG populated: {stock.esgPopulated}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default App;
