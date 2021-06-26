import React, { useEffect, useState } from "react";
import PostService from "../Services/PostService";
import NavComp from "./NavComp";
import Post from "./Post";
import { Form, Container, Button } from "react-bootstrap";

function Community() {
  // The state variables for topic, name, post, and postItems
  // Topic, name, and post are the variables related to the Database
  const [topic, setTopic] = useState("");
  const [name, setName] = useState("");
  const [post, setPost] = useState("");
  const [postItems, setPostItems] = useState([]);

  // Handles the input for Topic
  const handleTopic = (e) => {
    setTopic(e.target.value);
  };
  // Handles the input for Name
  const handleName = (e) => {
    setName(e.target.value);
  };

  // Handles the input for Post
  const handlePost = (e) => {
    setPost(e.target.value);
  };

  // The GET request that calls the posts from the database
  const getPosts = () => {
    PostService.getPost().then((res) => {
      setPostItems(res.data);
      console.log(res.data);
    });
  };
  // The POST request responsible for submitting the posts to the database
  const submitPost = (event) => {
    event.preventDefault();
    PostService.postPost({
      topic: topic,
      name: name,
      post: post,
    }).then((res) => {
      console.log(res.data);
      getPosts();
    });
  };

  useEffect(() => {
    // Calling the GET request every time the DOM renders
    getPosts();
  }, []);

  return (
    <div>
      <NavComp />
      <Container>
        <h1>Community</h1>
      </Container>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Topic</Form.Label>
            <Form.Control type="text" onChange={handleTopic} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" onChange={handleName} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Make a post</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={handlePost} />
          </Form.Group>
          <Button onClick={submitPost} variant="outline-dark">
            Submit
          </Button>
        </Form>
      </Container>

      {postItems.map((item, i) => {
        return (
          <Post key={i} topic={item.topic} name={item.name} post={item.post} />
        );
      })}
    </div>
  );
}

export default Community;
