import React, { useState, useEffect } from "react";
import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import QuoteService from "../Services/QuoteService";

function Login() {
  const [quotes, setQuotes] = useState([]);
  const [quoteNum, setQuoteNum] = useState();

  // Getting the information from the quotes database
  const getData = () => {
    QuoteService.getQuote().then((res) => {
      setQuotes(res.data);
      setQuoteNum(Math.floor(Math.random() * res.data.length));
      console.log(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="containerAll">
      <video
        className="login-page-video"
        src="https://storage.coverr.co/videos/sXrS02OxltUBR5LU3nGiJ9pyLmgZEVmMl?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjI1MDY5MTkxfQ.iF4NrBQXH6e63iNuLdSHmHpGAQ-DotXLqzxuxqUNGuk"
        autoPlay
        loop
        muted
      />

      <Col
        xs={6}
        className="d-flex flex-column justify-content-center align-items-center"
      >
        <h1 className="h1 mb-3 font-size-normal text-white">APE</h1>
        <Link to="/home">
          <Button variant="warning" type="submit">
            Enter
          </Button>
        </Link>
      </Col>

      <Col xs={6}>
        {/* Quotes should go here */}
        {quotes.slice(quoteNum, quoteNum + 1).map((item, i) => {
          return (
            <div key={i} className="quotes">
              <h1>"{item.quote}"</h1>
              <h5>- {item.source}</h5>
            </div>
          );
        })}
      </Col>
    </div>
  );
}

export default Login;
