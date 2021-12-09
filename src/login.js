// login.js in src folder ./login
//contains login form for users that are already registered with an account 
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Redirect } from 'react-router';

//design elements
import Image from "react-bootstrap/Image";
import {Container, Row, Col, Button} from 'react-bootstrap'

//images
import playing from './playing.png';


export default function Loginform() {
    const [hostusername, setUsername] = useState("");
    const [hostpassword, setPassword] = useState("");

    const [loginStatus, setLoginStatus] = useState("");

    const login = () => {
        axios.post("http://localhost:3000/hostlogin", {
          hostusername: hostusername,
          hostpassword: hostpassword,
        }).then((response) => {

            if (response.data.message){
                setLoginStatus(response.data.message)
            }
            else {
              window.location = "./adminDashboard";
            }
        });
      };

    return(
      <div>    
      {/* Image of child playing on left hand side */} 
      <div >
        <Container fluid>
            <Row style={{ height: "50px" }}></Row>
            <Row className="light-row" style={{ alignItems:'center', padding: "5px"}}>
                <Col>
            <div style={{ display: "flex" , alignItems:'center'}}>
                <Image src={playing} fluid/>
                    </div>
                </Col>
            <Col>
            

         <div className="App">  
          <div className="login">
            <h1>Admin Login</h1>
            <label>Admin Username</label>

           <div>
           <input
              type="text"
              placeholder="Username..."
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            /></div>
            <label>Admin Password</label>
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
