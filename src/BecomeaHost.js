import React from "react";
import "./App.css";
import emailjs from 'emailjs-com';
import { Form, Input, TextArea, Button } from "semantic-ui-react";
import Swal from "sweetalert2";

const SERVICE_ID = "teenytinyexplorers";
const TEMPLATE_ID = "template_kxw5tph";
const USER_ID = "user_a5jwzuX6kSAOK7KdHVqVM";

const BecomeaHost = () => {
  
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
    <h1> Become a Host </h1>
    <h3> Want to become a Teeny Tiny Explorers host? </h3>

        <p>
            Teeny Tiny Explorers continues to grow as more adults are wanting to find ways to get their children outside and in the loving arms of nature. 
            Teeny Tiny Explorers is always accepting applications for hosts. The more that volunteer their time, the more little lives we can all impact. 
        </p>
    <h3>What is a group host?</h3>
        <p>
            A group host is a volunteer that lives in a county they would like to host a group in. 
            The group host is in charge of running meetings, and events in their area and moderating conversations 
            amount members
        </p>
    <h3>What does a group host do?</h3>
        <p>
            A group host is in charge of keeping conversations together, and making sure all members are treated with respect. Group hosts are 
            leaders that are encouraged to create environments where engaging conversations and activities can take place for children and adults alike. Group hosts will always be able to talk to one another and get extra support where needed. 
        </p>


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
          id="form-textarea-control-Address"
          control={Input}
          label="Address"
          name="address1"
          placeholder="Address…"
          required
          icon= "home"
          iconPosition="left"
        />


        <Form.Field
          id="form-textarea-control-Address"
          control={Input}
          label="Address 2"
          name="address2"
          placeholder="Address 2…"
          icon= "home"
          iconPosition="left"
        />
        <Form.Field
          id="form-textarea-control-City"
          control={Input}
          label="City"
          name="city"
          placeholder="City…"
          icon= "home"
          iconPosition="left"
        />

        <Form.Field
          id="form-textarea-control-state"
          control={Input}
          label="State"
          name="state"
          icon= "home"
          iconPosition="left"
          placeholder="State…"
          required
        />

        <Form.Field
          id="form-textarea-control-county"
          control={Input}
          label="County"
          name="county"
          icon= "home"
          iconPosition="left"
          placeholder="County…"
          required
        />

        <Form.Field
          id="form-textarea-control-zip"
          control={Input}
          label="Zip"
          name="zip"
          icon= "home"
          iconPosition="left"
          placeholder="Zip…"
          required
        />

        <Form.Field
          id="form-textarea-control-opinion"
          control={TextArea}
          label="Comments"
          name="message"
          placeholder="Please provide information on why you would like to become a host, here…"
          required
        />
        <Button type="submit" color="lightmaincolor">Submit</Button>
      </Form>
    </div>
  );
}};
export default BecomeaHost;