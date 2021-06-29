import React, { useState, useEffect } from "react";
import { Card, Container, Button, Modal, Form } from "react-bootstrap";
import PostService from "../Services/PostService";
import Reply from "./Reply";
import ReplyService from "../Services/ReplyService";

function Post(props) {
  // For the "Edit" modal.
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // For the "editPost" functionality
  const [newTopic, setNewTopic] = useState("");
  const [newName, setNewName] = useState("");
  const [newPost, setNewPost] = useState("");

  // Handles the new input for Topic
  const handleNewTopic = (e) => {
    setNewTopic(e.target.value);
  };
  // Handles the new input for Name
  const handleNewName = (e) => {
    setNewName(e.target.value);
  };

  // Handles the new input for Post
  const handleNewPost = (e) => {
    setNewPost(e.target.value);
  };

  // Function responsible for deleting a post
  const deletePost = (id) => {
    PostService.deletePost(id).then((res) => {
      console.log(res);
      // When the function executes and the post is deleted, a GET request is called via the getPosts function from the parent component, Community,jsx, which has been passed down to this component via props
      props.getPosts();
    });
  };

  // Function responsible for editing/updating a post
  // Note: for some reason it doesn't like when I add event.preventDefault() to it, and works just fine without it.
  // Note: also this only works if I disable the CORS chrome extension.
  const editPost = () => {
    PostService.patchPost({
      id: props.id,
      topic: newTopic,
      name: newName,
      post: newPost,
    }).then((res) => {
      console.log(res.data);
      props.getPosts();
      handleClose();
    });
  };

  // THE REPLY VARIABLES AND METHODS
  const [replyName, setReplyName] = useState("");
  const [replyPost, setReplyPost] = useState("");
  const [replies, setReplies] = useState([]);

  // For the "Reply" modal.
  const [replyShow, setReplyShow] = useState(false);
  const handleReplyClose = () => setReplyShow(false);
  const handleReplyShow = () => setReplyShow(true);

  const handleReplyName = (e) => {
    setReplyName(e.target.value);
  };
  const handleReplyPost = (e) => {
    setReplyPost(e.target.value);
  };
  const getReplies = () => {
    ReplyService.getReply().then((res) => {
      setReplies(res.data);
      console.log(res.data);
    });
  };
  const submitReply = () => {
    ReplyService.postReply({
      name: replyName,
      post: replyPost,
    }).then((res) => {
      console.log(res.data);
      getReplies();
      handleReplyClose();
    });
  };
  useEffect(() => {
    getReplies();
  }, []);
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
          <Card.Footer>
            <Button
              onClick={() => deletePost(props.id)}
              variant="danger"
              style={{ width: "10%" }}
            >
              Delete
            </Button>
            <Button
              onClick={() => handleShow()}
              variant="secondary"
              style={{ width: "10%" }}
            >
              Edit
            </Button>
            <Button
              onClick={() => handleReplyShow()}
              variant="secondary"
              style={{ width: "10%" }}
            >
              Reply
            </Button>
          </Card.Footer>
        </Card>
        {replies.map((item, i) => {
          return <Reply key={i} name={item.name} post={item.post} />;
        })}
      </Container>
      <br />

      {/* EDIT MODAL */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Topic</Form.Label>
              <Form.Control
                type="text"
                placeholder={props.topic}
                onChange={handleNewTopic}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder={props.name}
                onChange={handleNewName}
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Make a post</Form.Label>
              <Form.Control
                as="textarea"
                placeholder={props.post}
                rows={3}
                onChange={handleNewPost}
              />
            </Form.Group>
          </Form>
        </Container>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="warning" onClick={() => editPost()}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* REPLY MODAL */}
      <Modal
        show={replyShow}
        onHide={handleReplyClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Reply to Post</Modal.Title>
        </Modal.Header>
        <Container>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" onChange={handleReplyName} />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Reply</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={handleReplyPost} />
            </Form.Group>
          </Form>
        </Container>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleReplyClose}>
            Close
          </Button>
          <Button variant="warning" onClick={() => submitReply()}>
            Save Reply
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Post;
