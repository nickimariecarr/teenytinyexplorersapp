import React from 'react';
import Image from "react-bootstrap/Image";
import Explorers from './Explorers.PNG';
import {Container, Row, Col, Button} from 'react-bootstrap'
import ExplorerHome from './ExplorerHome.png';
import { Link } from "react-router-dom"; 


console.log(Explorers);
console.log(ExplorerHome);

function Home() {
    return(
      <div>
      


              
      {/* Intro section of page */} 
      <div>
        <Container fluid>
            <Row style={{ height: "50px" }}></Row>
            <Row className="light-row" style={{ alignItems:'center', padding: "5px"}}>
              <Col>
                <div style={{ display: "flex" , alignItems:'center'}}>
                  <Image src="./ExplorerHome.png" fluid/>
                </div>
            
              </Col>
              
              <Col>
                <h3>
                  Ready to get out and explore the world around you with your little one?
                </h3>
                  <p>
                    Getting. out into nature can happen at anytime, but having a group to get out and explore together can be so much fun. 
                    Teeny Tinykkkkkk Explorer is focused on creating communities to come together and explorer the outdoors with one another. 
                    There are so many local groups you can find to meet up, but having a group dedicated to nature play is hard to find. 
                    Teeny Tiny Explorers wanted to bridge that gap between parents looking to meet other parents but also find others that 
                    love exploring outside with their little ones.
                  </p>
                  <center>
                    <Link to="/About">
                      <Button variant="light">Learn More</Button> 
                    </Link>
                  </center>
              </Col>
                  <Row style={{ height: "20px" }}></Row>

            </Row>
    </Container>
    </div>

    <div >
    <Container fluid>
    {/* Why is teeny tiny exploreres so important section */} 
            <Row className="color-nav" style={{ alignItems:'center', padding: "5px"}}>
              <Col style={{ alignItems:'center', padding: "5px"}}>
                <h3>
                    Why is Teeny Tiny Explorers so special?
                  </h3>
                    <p>
                    - Teeny Tiny Explorers is focused on building more interest in children to take part in more nature play .
                    - Taking part in Teeny Tiny Explorers groups helps children develop a stronger connection to the natural environment around them .
                    - A community is build around not only your child but around you, and helps to build more friendships and support systems .
                    </p>
                </Col>
              </Row>
            <Row style={{ height: "20px" }}></Row>
    </Container>
    </div>


    <Container fluid>
    {/* find a group / become a host section */} 
              <Row style={{ alignItems:'center'}}>
              <Col>
                <h3>
                    Ready to find a local Teeny Tiny Explorers Group?
                  </h3>
                    <p>
                      Check the "Find a Local Group" section to find a group in your county.
                      If you do not see one listed, and wish to host a local group, please see the "Host a Local Group" section.
                    </p>
                    <div style={{alignItems:'center'}}>
                    <Link to="/FindaGroup">
                      <Button className="color-nav" >Find a Group</Button> 
                    </Link>

                    <Link to="/BecomeaHost">
                      <Button >Become a Host</Button> 
                    </Link>

                    </div>
                </Col>
                <Col>
                  <Image src="./tree.png" fluid/>
                </Col>
              </Row>
              <Row style={{ height: "50px" }}></Row>
        </Container> 
        
        </div>

  );
}
export default Home;