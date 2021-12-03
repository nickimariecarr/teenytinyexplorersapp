import React from 'react';
import Image from "react-bootstrap/Image";
import Explorers from './Explorers.PNG';
import {Container, Row, Col, Button} from 'react-bootstrap'
import ExplorerHome from './ExplorerHome.png';


console.log(Explorers);
console.log(ExplorerHome);

function Login() {
    
    return(
      <div>

              
      {/* Intro section of page */} 
      <div>
        <Container fluid>
            <Row style={{ height: "50px" }}></Row>
            <Row className="light-row" style={{ alignItems:'center', padding: "5px"}}>
                <Col>
                    <div style={{ display: "flex" , alignItems:'center'}}>
                        <Image src="./playing.png" fluid/>
                    </div>
                </Col>
                <Col>
            
            <form>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Username</label>
                    <input type="Username" className="form-control" placeholder="Username" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <Button type="submit" className="btn btn-primary btn-block">Submit</Button>
                <p className="forgot-password text-right">
                </p>
            </form>
              </Col>
            </Row>
          <Row style={{ height: "20px" }}></Row>
    </Container>
    </div>
    <div >
    </div>  
 </div>

  );
}
export default Login;