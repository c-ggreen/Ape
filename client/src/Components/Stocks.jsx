import axios from "axios";
import React, { useEffect, useState } from "react";
import NavComp from "./NavComp";
import StockCard from "./StockCard";
import { Container } from "react-bootstrap";

function Stocks() {
  // This is an array that holds all the stock market ticker symbols to be used in the API request
  const stockSymbol = ["GME", "AMC", "TSLA", "CLOV", "WKHS"];
  // Array I'm pushing the objects from the API call into
  const emptyArray = [];
  const emptyNameArray = [];

  const [stock, setStock] = useState([]);

  // The function responsible for getting the stock data from the API
  // WARNING: THIS FUNCTION MAKES MULTIPLE API CALLS WITH EACH RENDER, BE CAREFUL NOT TO RE-RENDER THE PAGE MULTIPLE TIMES WITHIN A 60 SECOND TIME FRAME
  const getStocks = () => {
    // The API call is in a FOR loop connected to the stockSymbol array. The idea is to make an API call for each item in the array
    // Setting the stock
    setStock(emptyArray);
    for (let i = 0; i < stockSymbol.length; i++) {
      // The API call
      axios
        .get(
          `https://finnhub.io/api/v1/quote?symbol=${stockSymbol[i]}&token=${process.env.REACT_APP_FINNHUB_APIKEY}`
        )
        .then((res) => {
          // The API doesn't provide the name of the Stock being called, so this console.log is to identify which object is which in DevTools
          console.log(`STOCK: ${stockSymbol[i]}`);
          console.log(res.data);

          emptyArray.push(res.data);
          emptyNameArray.push(stockSymbol[i]);
        });
    }
  };

  useEffect(() => {
    getStocks();
    // setStock(emptyArray);
    console.log(emptyArray);
    console.log(stock);
  }, []);

  return (
    <div>
      <NavComp />
      <Container>
        <h1>Stocks</h1>
      </Container>
      {stock.forEach((item) =>
        item.map((item, i) => {
          return (
            <Container key={i}>
              <StockCard
                current={item.c}
                low={item.l}
                high={item.h}
                open={item.o}
              />
            </Container>
          );
        })
      )}
    </div>
  );
}

export default Stocks;
