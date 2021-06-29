import React, { useState, useEffect } from "react";
import NavComp from "./NavComp";
import { Card, Container } from "react-bootstrap";
import ManagementService from "../Services/ManagementService";

function Homepage() {
  const [post, setPost] = useState([]);
  const getData = (x) => {
    ManagementService.getManagement().then((res) => {
      setPost(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    getData(1);
  }, []);
  return (
    <div>
      <NavComp />
      <br />
      <br />
      <Container>
        <Card bg="dark" text="light">
          <Card.Header>
            {post.map((item, i) => {
              return <span key={i}>{item.title}</span>;
            })}
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {post.map((item, i) => {
                  return <span key={i}>{item.post}</span>;
                })}
              </p>
              <footer className="blockquote-footer">
                {post.map((item, i) => {
                  return <span key={i}>{item.source}</span>;
                })}
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default Homepage;
