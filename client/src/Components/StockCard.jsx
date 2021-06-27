import React from "react";
import { Card } from "react-bootstrap";
function StockCard(props) {
  return (
    <div>
      <Card bg="dark" text="light" className="mb-4">
        <Card.Header className="text-warning">
          {props.name}
          <Card.Text className="text-muted">${props.symbol}</Card.Text>
        </Card.Header>
        <Card.Body>
          <Card.Title>Current Price: ${props.current}</Card.Title>
          <Card.Text className="text-secondary">Low: {props.low}</Card.Text>
          <Card.Text className="text-secondary">High: {props.high}</Card.Text>
          <Card.Text className="text-secondary">Open: {props.open}</Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default StockCard;
