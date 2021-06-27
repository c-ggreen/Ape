import React from "react";
import { Card, Container, Button } from "react-bootstrap";
import PostService from "../Services/PostService";

function Post(props) {
  // Function responsible for deleting a post
  const deletePost = (id) => {
    PostService.deletePost(id).then((res) => {
      console.log(res);
      // When the function executes and the post is deleted, a GET request is called via the getPosts function from the parent component, Community,jsx, which has been passed down to this component via props
      props.getPosts();
    });
  };

  const editPost = () => {};
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
          <Button
            onClick={() => deletePost(props.id)}
            variant="danger"
            style={{ width: "10%" }}
          >
            Delete
          </Button>
          <Button
            onClick={() => editPost()}
            variant="secondary"
            style={{ width: "10%" }}
          >
            Edit
          </Button>
        </Card>
      </Container>
      <br />
    </div>
  );
}

export default Post;
