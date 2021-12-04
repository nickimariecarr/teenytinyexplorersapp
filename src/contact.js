import React from "react";
import "./App.css";
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

const SERVICE_ID = "teenytinyexplorers";
const TEMPLATE_ID = "testcontact";
const USER_ID = "user_a5jwzuX6kSAOK7KdHVqVM";

const Contact = () => {
  
  {const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm( SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: "success",
          title: "Thank you for reaching out to us! Please allow us 2-3 business days to respond to your initial email."
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: "error",
          title: "Ooops, something went wrong. Please try again, if the problem continues please email us at teenytinyexplorers@gmail.com",
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <div className="ContactApp">
    <h1>Contact Us</h1>
      <Form onSubmit={handleOnSubmit}>
        <Form.Field
          id="form-input-control-email"
          control={Input}
          label="Email"
          name="email"
          placeholder="Email..."
          required
          icon="mail"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-first-name"
          control={Input}
          label="First Name"
          name="firstname"
          placeholder="FirstName…"
          required
          icon="user circle"
          iconPosition="left"
        />
        <Form.Field
          id="form-input-control-last-name"
          control={Input}
          label="Last Name"
          name="lastname"
          placeholder="Last Name…"
          required
          icon="user circle"
          iconPosition="left"
        />

        <Form.Field
          id="form-textarea-control-Phone"
          control={Input}
          label="Phone"
          name="phone"
          placeholder="Phone…"
          required
          icon= "phone"
          iconPosition="left"
        />

        <Form.Field
          id="form-textarea-control-opinion"
          control={Input}
          label="Preferred Contact Time"
          name="message"
          icon= "clock"
            iconPosition="left"
          placeholder="Please let us know if you rather be contact in the morning, afternoon, or evening…"
          required
        />

        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Comments"
          name="message"
          placeholder="Please provide questions and concerns you would like to send to us, here…"
          required
        />
        <Button type="submit" color="lightmaincolor">Submit</Button>
      </Form>
    </div>
  );
}};
export default Contact;