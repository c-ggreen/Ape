import React from "react";
import { Card } from "react-bootstrap";
function StockCard(props) {
  return (
    <div>
      <Card>
        <Card.Header>$tock Ticker</Card.Header>
        <Card.Body>
          <Card.Title>Current Price: {props.current}</Card.Title>
          <Card.Text>Low Price: {props.low}</Card.Text>
          <Card.Text>High Price: {props.high}</Card.Text>
          <Card.Text>Open Price: {props.open}</Card.Text>
        </Card.Body>
      </Card>

      {/* <h1>--------------</h1>
      <h1>{props.current}</h1>
      <h1>{props.low}</h1>
      <h1>{props.high}</h1>
      <h1>{props.open}</h1> */}
    </div>
  );
}

export default StockCard;
