import React from 'react';
import Image from "react-bootstrap/Image";
import Explorers from './Explorers.PNG';
import {Container, Row, Col} from 'react-bootstrap'
import ExplorerHome from './ExplorerHome.png';
import Card from 'react-bootstrap/Card';

console.log(Explorers);
console.log(ExplorerHome);

function About() {
    return(
    <div>
               
      {/* Intro section of page */} 
      <div>
          <Container fluid>
              <Container fluid>
                <Row style={{ height: "50px" }}></Row>
                <Row >
                  <center><h3>Teeny Tiny Explorers</h3></center>
                  <p></p>
                  <p>
                  Teeny Tiny Explorers was created with parents and children in mind. Today it can be so easy to fall into the trap of technology being a child's primary experiences. 
                  The days of exploring the outdoors and learning about nature hands on, seem to continue to fade faster than we would every wish. Teeny Tiny Explorers was created with parents in mind. Parents that want to find new and exciting ways to connect with their child and get outside. Teeny Tiny Explorers is not a group that meets only in the summer, and perfect weather. 
                  This group is focused on trying our best in any season.
                  </p>
                </Row>
              </Container>
              <Row style={{ height: "20px" }}></Row>
              <Row className="color-nav" style={{ alignItems:'center', height: "200px" , padding: "5px"}}>
              <center><h3>Why Teeny Tiny Explorers helps </h3>
              <p></p>
              <p>Teeny Tiny Explorers helps adults and children get outside more and connect with the world around them. 
              As children continue to grow and get more comfortable with mobile devices, social media, and even sports. 
              Technology continues to be present in our lives.</p></center>
              </Row>
            <Row style={{ height: "20px" }}></Row>
      </Container>
      </div>
      <Container fluid>
    {/* find a group / become a host section */} 
              <Row style={{ alignItems:'center'}}>
              <Col style={{ width: "40%" , height:"40%"}}>
                <h3>
                    Ready to find a local Teeny Tiny Explorers Group?
                  </h3>
                  <Row ></Row>
                  <div style={{alignItems:'center'}}>
                  <Card className="color-nav"  border="dark" >
                        <Card.Body>
                          <Card.Title>Goal One</Card.Title>
                          <Card.Text>
                            Help parents and caregivers build a relationship with their children and nature 
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    <br />   
                  </div>

                  <Row style={{ height: "5px" }}></Row>
                  <div style={{alignItems:'center'}}>
                  <Card className="color-nav"  border="dark" >
                        <Card.Body>
                          <Card.Title>Goal Two</Card.Title>
                          <Card.Text>
                            Help children eliminate screen time. 
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    <br />   
                  </div>


                  <Row style={{ height: "5px" }}></Row>
                  <div style={{alignItems:'center'}}>
                      <Card className="color-nav"  border="dark" >
                        <Card.Body>
                          <Card.Title>Goal Three</Card.Title>
                          <Card.Text>
                            Help children build more relationships with like minded individuals. 
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    <br />   
                  </div>
                </Col>
                <Col >
                  <Image src="./tree.png" style={{ width: "100%" }}></Image>
                </Col>
              </Row>
              <Row style={{ height: "50px" }}></Row>
        </Container> 

  </div>
  );
}
export default About;