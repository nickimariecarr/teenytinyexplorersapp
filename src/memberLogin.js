// login.js is the login page for members if members do not have a login they need to signup 

import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from 'react-router';

//design elements
import Image from "react-bootstrap/Image";
import {Container, Row, Col, Button} from 'react-bootstrap'

//images
import playing from './playing.png';


export default function MemberLoginform() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    const login = () => {
        axios.post("https://teenytinyexplorers.herokuapp.com/login", {
          username: username,
          password: password,
        }).then((response) => {

            if (response.data.message){
                setLoginStatus(response.data.message)
            }
            else {
              window.location = "./memberHome";
            }
        });
      };

    return(
      <div>    
      {/* Image of child playing on left hand side */} 
      <div >
        <Container >
            <Row className="light-row" style={{ alignItems:'center', padding: "5px"}}>
                <Col>
            <div style={{ display: "flex" , alignItems:'center'}}>
                <Image src={playing} fluid/>
                    </div>
                </Col>
            <Col>
            

         <div className="App">  
          <div className="login" style={{paddingBottom:"50px", paddingTop:"50px"}}>
            <h1>Member Login</h1>
            <label>Username</label>

           <div>
           <input
              type="text"
              placeholder="Username..."
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            /></div>
            <label>Password</label>
            <div>
            <input
              type="password"
              placeholder="Password..."
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            /></div>
            <button onClick={login}> Login </button>
          </div>
          <h3>{loginStatus}</h3>
        </div>
              </Col>
            </Row>

    </Container>
    </div>
    <div >
    </div>  
 </div>

  );
}
