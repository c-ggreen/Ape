import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
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
      <Container>
        <Row>
          <Col xs={4}>
            <h1 className="h3 mb-3 font-size-normal">APE</h1>
            <Link to="/home">
              <Button variant="warning" type="submit">
                Enter
              </Button>
            </Link>
          </Col>

          <Col xs={8}>
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
        </Row>
      </Container>
    </div>
  );
}

export default Login;
