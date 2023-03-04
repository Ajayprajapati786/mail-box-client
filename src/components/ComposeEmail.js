import React, { useState, useRef } from 'react';
import { EditorState } from 'draft-js';
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Form, Button } from 'react-bootstrap';

const ComposeEmail = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const toRef = useRef();
  const subjectRef = useRef();

  const onEditorStateChange = (newEditorState) => {
    setEditorState(newEditorState);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    // Submit the form data here
    console.log('To:', toRef.current.value);
    console.log('Subject:', subjectRef.current.value);
    console.log('Content:', editorState.getCurrentContent().getPlainText());
  };

  return (
    <Form onSubmit={onSubmit} className="container mt-5" style={{border:'2px solid black'}}>
      <h1>Compose Email</h1>
      <Form.Group controlId="to">
        <Form.Label style={{ textAlign: 'left' }}>To:</Form.Label>
        <Form.Control type="text" ref={toRef} />
      </Form.Group>
      <Form.Group controlId="subject">
        <Form.Label style={{ textAlign: 'left' }}>Subject:</Form.Label>
        <Form.Control type="text" ref={subjectRef} />
      </Form.Group>
      <Form.Group controlId="content">
        <Form.Label style={{ textAlign: 'left' }}>Content:</Form.Label>
        <div style={{border:'solid black 1px',  boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.3)' }}>
        <Editor
          editorState={editorState}
          toolbarClassName="toolbarClassName"
          wrapperClassName="wrapperClassName"
          editorClassName="editorClassName"
          onEditorStateChange={onEditorStateChange}
          
        />
        </div>
      </Form.Group>
      <Button variant="primary" type="submit">Send</Button>
    </Form>
  );
}

export default ComposeEmail;
