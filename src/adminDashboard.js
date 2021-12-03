import React from 'react';
import Explorers from './Explorers.PNG';
import {Container, Row, Col, Button} from 'react-bootstrap'
import ExplorerHome from './ExplorerHome.png';


console.log(Explorers);
console.log(ExplorerHome);

function Admindashboard() {
    return(
      <div>   
      <Row style={{ height: "30px" }}></Row>
      <div>
        <Container className="light-row" >
            <Row style={{ height: "50px" }}></Row>
            <Row className="light-row" style={{ alignItems:'center', padding: "5px"}}>
              <Col>
                <center><h3>
                  Groups                
                </h3></center>
                  <p>
                    Getting out into nature can happen at anytime, but having a group to get out and explore together can be so much fun. 
                    Teeny Tiny Explorers is focused on creating communities to come together and explorer the outdoors with one another. 
                    There are so many local groups you can find to meet up, but having a group dedicated to nature play is hard to find. 
                    Teeny Tiny Explorers wanted to bridge that gap between parents looking to meet other parents but also find others that 
                    love exploring outside with their little ones.
                  </p>
              </Col>
            </Row>
            <center><Button variant="light">See Groups</Button></center>
          <Row style={{ height: "20px" }}></Row>
    </Container>
    </div>

    <div >
    
    <Container className="color-nav" >
    {/* find a group / become a host section */} 
              <Row style={{ alignItems:'center'}}>
              <Col>
                <Row style={{ height: "50px" }}></Row>
                <h3>
                    Events
                  </h3>
                    <p>
                      Check the "Find a Local Group" section to find a group in your county.
                      If you do not see one listed, and wish to host a local group, please see the "Host a Local Group" section.
                    </p>
                  <center><Button variant="light">See Events</Button></center>
                </Col>
                
                <Col>
                  <Row style={{ height: "50px" }}></Row>
                   <h3>
                    Members
                  </h3>
                    <p>
                      Check the "Find a Local Group" section to find a group in your county.
                      If you do not see one listed, and wish to host a local group, please see the "Host a Local Group" section.
                    </p>
                <center><Button variant="light">See Members</Button></center>
                </Col>  
              </Row>
              <Row style={{ height: "50px" }}></Row>
        </Container> 
    </div>
    <Row style={{ height: "30px" }}></Row>
  </div>

  );
}
export default Admindashboard;