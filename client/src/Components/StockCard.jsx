import React from "react";
import { Card } from "react-bootstrap";
function StockCard(props) {
  return (
    <div>
      <Card bg="dark" text="light">
        <Card.Header className="text-warning">
          {props.name}
          <Card.Text className="text-muted">${props.symbol}</Card.Text>
        </Card.Header>
        <Card.Body>
          <Card.Title>Current Price: ${props.current}</Card.Title>
          <Card.Text>Low: {props.low}</Card.Text>
          <Card.Text>High: {props.high}</Card.Text>
          <Card.Text>Open: {props.open}</Card.Text>
        </Card.Body>
      </Card>
      <br />
    </div>
  );
}

export default StockCard;
