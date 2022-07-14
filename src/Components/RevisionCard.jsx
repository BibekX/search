import React from "react";
import { Button, Card } from "react-bootstrap";
import "../RevisionCard.css";

export default function RevisionCard(props) {
  return (
    <div>
      <Card
        style={{ width: "22.3rem", margin: "10px auto", border: "2px solid" }}
      >
        <Card.Body>
          <Card.Title className="card-title">{props.title}</Card.Title>
          <Card.Text className="card-title">{props.count}</Card.Text>
          <Button onClick={() => props.upVote(props.index)} variant="primary">
            Up Vote
          </Button>
          <Button onClick={() => props.downVote(props.index)} variant="dark">
            Down Vote
          </Button>
          <Button onClick={() => props.delete(props.index)} variant="danger">
            Delete
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
