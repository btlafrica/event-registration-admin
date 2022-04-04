import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

function CreateAdminModal({
  onSubmit,
  onChange,
  loading,
  values,
  onClose,
}) {
  return (
    <div className="bg-white p-4">
    <Form onSubmit={onSubmit}>
      <FormGroup>
        <Label className="col-form-label" for="recipient-name">
         First name 
        </Label>
        <Input
          className="form-control"
          onChange={onChange}
          // value={values.messageExample}
          name="title"
          required
          type="text"
          rows="5"
          placeholder="message"
        />
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label" for="recipient-name">
          Last name
        </Label>
        <Input
          className="form-control"
          onChange={onChange}
          // value={values.messageExample}
          name="message"
          required
          type="textarea"
          rows="5"
          placeholder="message"
        />
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label" for="recipient-name">
          Email
        </Label>
        <Input
          className="form-control"
          onChange={onChange}
          // value={values.messageExample}
          name="message"
          required
          type="textarea"
          rows="5"
          placeholder="message"
        />
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label" for="recipient-name">
          Phone number
        </Label>
        <Input
          className="form-control"
          onChange={onChange}
          // value={values.messageExample}
          name="message"
          required
          type="textarea"
          rows="5"
          placeholder="message"
        />
      </FormGroup>
    
    
      <Button color="danger" onClick={onClose}>
        Close
      </Button>
      <Button disabled={loading} color="primary" className="ml-4" type="submit">
        {!loading ? "Submit" : "Submiting"}
      </Button>
    </Form>
    </div>
  );
}

export default CreateAdminModal;
