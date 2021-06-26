import React from "react";
import { Card, Container } from "react-bootstrap";
function Post(props) {
  return (
    <div>
      <br />
      <Container>
        <Card bg="dark" text="light">
          <Card.Header>Topic: {props.topic}</Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>{props.post}</p>
              <footer className="blockquote-footer">{props.name}</footer>
            </blockquote>
          </Card.Body>
        </Card>
      </Container>
      <br />
    </div>
  );
}

export default Post;
