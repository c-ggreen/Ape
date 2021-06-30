import React from "react";
import { Card, Container, Button } from "react-bootstrap";

function Reply(props) {
  return (
    <div>
      <Container className="mt-1">
        <Card bg="dark" text="light" style={{ width: "75%" }}>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>{props.post}</p>
              <footer className="blockquote-footer">{props.name}</footer>
            </blockquote>
          </Card.Body>
          <Card.Footer>
            {/* <Button variant="danger" style={{ width: "10%" }}>
              Delete
            </Button>
            <Button variant="secondary" style={{ width: "10%" }}>
              Edit
            </Button> */}
          </Card.Footer>
        </Card>
      </Container>
    </div>
  );
}

export default Reply;
