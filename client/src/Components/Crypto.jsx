import React, { useState, useEffect } from "react";
import NavComp from "./NavComp";
import { Container } from "react-bootstrap";
import axios from "axios";

function Crypto() {
  const [btc, setBTC] = useState([]);
  const to = Date.now() - 86400000;
  const from = to - 86400000;

  const handleCrypto = () => {
    axios
      .get(
        `https://finnhub.io/api/v1/crypto/candle?symbol=BINANCE:BTCUSDT&resolution=D&from=${from}&to=${to}&token=${process.env.REACT_APP_FINNHUB_APIKEY}`
      )
      .then((res) => {
        setBTC(res.data);
        console.log(res.data);
      });
  };

  useEffect(() => {
    handleCrypto();
  }, []);

  return (
    <div>
      <NavComp />
      <Container>
        <h1>Crypto</h1>
      </Container>
    </div>
  );
}

export default Crypto;
