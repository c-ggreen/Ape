import axios from "axios";
import React, { useEffect, useState } from "react";
import NavComp from "./NavComp";
import StockCard from "./StockCard";
import { Container } from "react-bootstrap";

function Stocks() {
  const [stock, setStock] = useState([]);

  // The function responsible for getting the stock data from the API
  // WARNING: THIS FUNCTION MAKES AN API CALL WITH EACH RENDER, BE CAREFUL NOT TO RE-RENDER THE PAGE MULTIPLE TIMES AS THE MONTHLY REQUEST LIMIT IS 500.
  const getData = () => {
    const options = {
      method: "GET",
      url: "https://apidojo-yahoo-finance-v1.p.rapidapi.com/market/v2/get-quotes",
      params: {
        region: "US",
        symbols: "GME,AMC,TSLA,CLOV,BB,BBY,WKHS,PLTR,SPCE,CLF",
      },
      headers: {
        "x-rapidapi-key": process.env.REACT_APP_RAPIDAPIKEY,
        "x-rapidapi-host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data.quoteResponse.result);
        setStock(response.data.quoteResponse.result);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <NavComp />
      <Container>
        <h1>Stocks</h1>
      </Container>
      {stock.map((item, i) => {
        return (
          <Container key={i}>
            <StockCard
              name={item.longName}
              symbol={item.symbol}
              current={item.regularMarketPrice}
              low={item.regularMarketDayLow}
              high={item.regularMarketDayHigh}
              open={item.regularMarketOpen}
            />
          </Container>
        );
      })}
    </div>
  );
}

export default Stocks;
