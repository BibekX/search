import React, { useState } from "react";
import { Form, InputGroup, Button } from "react-bootstrap";

export default function AddCard(props) {
  const [name, setName] = useState("");
  return (
    <div>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Title"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <InputGroup.Text id="card-title">Card Title</InputGroup.Text>
      </InputGroup>
      <Button
        variant="success"
        onClick={() => {
          name.length > 0 && props.getName(name);
          setName("");
        }}
      >
        New Item
      </Button>
    </div>
  );
}
