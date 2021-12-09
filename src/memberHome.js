// about.js in src folder ./about 
//contains information about teeny tiny explorers and the mission of the application for first time users to read 


import React from 'react';


//design elements
import Image from "react-bootstrap/Image";
import {Container, Row, Col} from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

//images
import tree from './tree.png';

function MembersHome() {
    return(
    <div>
               
      {/* Intro section of page */} 
      <div>
          <Container fluid>
              <Container fluid>
                <Row style={{ height: "50px" }}></Row>
                  <Row >
                    <center><h3>Teeny Tiny Explorers Member Home</h3></center>
                    <p></p>
                    <p>
                      Hello! 

                      This is the members only bulletin and announcement page. If there are important updates that need to be disbursed to the Teeny Tiny Explorers community, you can find them here. If you have any questions, please reach out to the host in your area. If you need their email please refer to the "Find a Group" page to locate their email address. 
                    </p>
                  </Row>
              </Container>
              <Row style={{ height: "20px" }}></Row>
                <Row className="color-nav" style={{ alignItems:'center', height: "200px" , padding: "5px"}}>
                  <center>
                    <h3>
                      Reminders:
                    </h3>
                  <p></p>
                    <p>
                      Due to covid we are refraining from having indoor gatherings with large groups for meetings. Any events will be outdoor events. If your group has a meeting you would like to conduct, please do so outdoors or via zoom. Information on meetings comes from your local host, and is disbursed via email. Please keep an eye out for any further needed details. 
                    </p>
                  </center>
                </Row>
            <Row style={{ height: "20px" }}></Row>
        </Container>
      </div>

      <Container fluid>
          {/* goals section */} 
          <Row style={{ alignItems:'center'}}>
            <h3>
             Announcements
            </h3>
            <Row ></Row>
            <div style={{alignItems:'center'}}>
              <Card className="color-nav"  border="dark" >
                <Card.Body>
                  <Card.Title>
                    No current annoucements...
                  </Card.Title>
                  <Card.Text>
                    please check back later
                  </Card.Text>
                </Card.Body>
              </Card>
              <br />   
            </div>


          </Row>
          <Row style={{ height: "50px" }}></Row>
        </Container> 


  </div>
  );
}
export default MembersHome;