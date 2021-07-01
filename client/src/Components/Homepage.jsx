import React, { useState, useEffect } from "react";
import NavComp from "./NavComp";
import { Card, Container, Tab, Tabs } from "react-bootstrap";
import ManagementService from "../Services/ManagementService";

function Homepage() {
  const [post, setPost] = useState([]);
  const getData = () => {
    ManagementService.getManagement().then((res) => {
      setPost(res.data);
      console.log(res.data);
    });
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <NavComp />

      <Container className="mt-2">
        <Card bg="dark" text="light">
          <Card.Header>
            {post.slice(2).map((item, i) => {
              return <span key={i}>{item.title}</span>;
            })}
          </Card.Header>
          <Card.Body>
            <blockquote className="blockquote mb-0">
              <p>
                {post.slice(2).map((item, i) => {
                  return <span key={i}>{item.post}</span>;
                })}
              </p>
              <footer className="blockquote-footer">
                {post.slice(2).map((item, i) => {
                  return <span key={i}>{item.source}</span>;
                })}
              </footer>
            </blockquote>
          </Card.Body>
        </Card>
      </Container>

      <Container className="mt-2 d-flex flex-column justify-content-center align-items-center">
        <h1>Welcome to APE</h1>
        <p>
          We are "<span className="text-danger">A</span>{" "}
          <span className="text-danger">P</span>eople{" "}
          <span className="text-danger">E</span>nlightened".
        </p>
        <p>We think we are great, but we are actually stupid.</p>
        <p>But that's okay, because we're stupid together.</p>
      </Container>

      <Container className="mt-2 d-flex flex-column justify-content-center align-items-center">
        <h3>What We Offer</h3>
        <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
          <Tab eventKey="home" title="Community" tabClassName="text-dark">
            <p>
              Our Community page houses the forum submissions from our users.
              There you can find conversations about any topic an APE can think
              of
            </p>
          </Tab>
          <Tab eventKey="profile" title="Stocks" tabClassName="text-dark">
            <p>
              Our Stock page tracks all the stocks that matter to an APE. In our
              opinion, these are the only stocks that should matter at all,
              everything else is fluff for the suits to play with.
            </p>
          </Tab>
          <Tab eventKey="contact" title="Crypto" tabClassName="text-dark">
            <p>
              Our Crypto page tracks the currencies that matter. All hail lord
              Elon.
            </p>
          </Tab>
        </Tabs>
      </Container>
    </div>
  );
}

export default Homepage;
