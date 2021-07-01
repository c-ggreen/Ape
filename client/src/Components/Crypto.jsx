import React, { useState, useEffect } from "react";
import NavComp from "./NavComp";
import { Container } from "react-bootstrap";
import axios from "axios";
import CryptoCard from "./CryptoCard";

function Crypto() {
  const [btc, setBTC] = useState([]);
  const [eth, setETH] = useState([]);
  const [ada, setADA] = useState([]);
  const [xrp, setXRP] = useState([]);
  const [doge, setDOGE] = useState([]);

  // These are the individual GET requests for each currency
  const handleBTC = () => {
    const options = {
      method: "GET",
      url: "https://rest.coinapi.io/v1/assets/BTC",
      headers: {
        "X-CoinAPI-Key": process.env.REACT_APP_COINAPI_APIKEY,
      },
    };
    axios.request(options).then((res) => {
      setBTC(res.data);
      console.log(res.data);
    });
  };
  const handleETH = () => {
    const options = {
      method: "GET",
      url: "https://rest.coinapi.io/v1/assets/ETH",
      headers: {
        "X-CoinAPI-Key": process.env.REACT_APP_COINAPI_APIKEY,
      },
    };
    axios.request(options).then((res) => {
      setETH(res.data);
      console.log(res.data);
    });
  };
  const handleADA = () => {
    const options = {
      method: "GET",
      url: "https://rest.coinapi.io/v1/assets/ADA",
      headers: {
        "X-CoinAPI-Key": process.env.REACT_APP_COINAPI_APIKEY,
      },
    };
    axios.request(options).then((res) => {
      setADA(res.data);
      console.log(res.data);
    });
  };
  const handleXRP = () => {
    const options = {
      method: "GET",
      url: "https://rest.coinapi.io/v1/assets/XRP",
      headers: {
        "X-CoinAPI-Key": process.env.REACT_APP_COINAPI_APIKEY,
      },
    };
    axios.request(options).then((res) => {
      setXRP(res.data);
      console.log(res.data);
    });
  };
  const handleDOGE = () => {
    const options = {
      method: "GET",
      url: "https://rest.coinapi.io/v1/assets/DOGE",
      headers: {
        "X-CoinAPI-Key": process.env.REACT_APP_COINAPI_APIKEY,
      },
    };
    axios.request(options).then((res) => {
      setDOGE(res.data);
      console.log(res.data);
    });
  };

  // Calling each currency GET request in useEffect so they execute on page render
  // Note: GET requests for the API are EXTREMELY limited, so only make calls when necessary.
  useEffect(() => {
    handleBTC();
    handleETH();
    handleADA();
    handleXRP();
    handleDOGE();
  }, []);

  return (
    <div>
      <NavComp />
      <Container>
        <h1>Crypto</h1>
      </Container>

      {/* All of the .map's for each of the currency arrays */}
      {/* Note: I used .toFixed to limit the current price of each coin to 2 decimal places */}
      {btc.map((item, i) => {
        return (
          <Container>
            <CryptoCard
              key={i}
              name={item.name}
              symbol={item.asset_id}
              current={item.price_usd.toFixed(2)}
            />
          </Container>
        );
      })}
      {eth.map((item, i) => {
        return (
          <Container>
            <CryptoCard
              key={i}
              name={item.name}
              symbol={item.asset_id}
              current={item.price_usd.toFixed(2)}
            />
          </Container>
        );
      })}
      {ada.map((item, i) => {
        return (
          <Container>
            <CryptoCard
              key={i}
              name={item.name}
              symbol={item.asset_id}
              current={item.price_usd.toFixed(2)}
            />
          </Container>
        );
      })}
      {xrp.map((item, i) => {
        return (
          <Container>
            <CryptoCard
              key={i}
              name={item.name}
              symbol={item.asset_id}
              current={item.price_usd.toFixed(2)}
            />
          </Container>
        );
      })}
      {doge.map((item, i) => {
        return (
          <Container>
            <CryptoCard
              key={i}
              name={item.name}
              symbol={item.asset_id}
              current={item.price_usd.toFixed(2)}
            />
          </Container>
        );
      })}
    </div>
  );
}

export default Crypto;
