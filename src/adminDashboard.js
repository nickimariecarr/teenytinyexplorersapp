import React from 'react';
import Explorers from './Explorers.PNG';
import {Container, Row, Col, Button} from 'react-bootstrap'
import ExplorerHome from './ExplorerHome.png';
import { useNavigate } from 'react-router';
import CountGroups from './countGroups';
import { useState} from "react";
import CountMembers from './countMembers';
import CountGroupsWeek from './countGroupWeek';
import CountMemberWeek from './countmembersWeek';
import CountGroupsMonth from './countgroupMonth';
import CountMemberMonth from './countmembersMonth';

console.log(Explorers);
console.log(ExplorerHome);

function Admindashboard() {
  const [groups, setGroups] = useState([]);
  const [members, setMembers] = useState([]);
  const [group, setGroup] = useState([]);

  let navigate = useNavigate();

  function handleClick() {
      navigate('/adminMembers')
    }
    function handleClick2() {
      navigate('/adminGroups')
    }

  
  return(
    <div>   
      <Row style={{ height:"30px"}}></Row>
      <div style={{width:"100%"}}>
        <Container className="light-row" >
            <Row style={{ height: "10px" }}></Row>
            <Row className="light-row" style={{ alignItems:'center', paddingTop: "2px"}}>
              <Col>
                <center>
                <div style={{padding:"10px"}}>
                  <h1>
                    Groups                
                  </h1>
                </div>
                </center>

                  <center>
                    <container>
                      <h4>Total Groups :</h4>
                    </container>
                    <container className="row" style={{background:"white", width:"20%", marginTop:"10px", marginBottom: "10px", padding:"10px"}}>
                      <CountGroups groups={groups} setGroups={setGroups} /> 
                    </container>


                  <h4>New groups in the last 7 days :</h4>
                  <container className="row" style={{background:"white", width:"20%", marginTop:"10px", marginBottom: "10px", padding:"10px"}}>
                    <CountGroupsWeek groups={groups} setGroups={setGroups} /> 
                  </container>
                  


                  <h4>New groups in the last 7 days :</h4>
                  <container className="row" style={{background:"white", width:"20%", marginTop:"10px", marginBottom: "10px", padding:"10px"}}>
                    <CountGroupsMonth groups={groups} setGroups={setGroups} /> 
                  </container>
                  </center>

                    <center><p>
                    Here you can view the number of total groups, number of new groups in the last 7 days from the current date, and the number of new groups within the past 30 days. To make changes to any of the information, please click the button below to visit the groups admin dashboard. 
                    </p></center>


              </Col>
            </Row>

          <center>
          <div style={{margin:"20px"}}>
          <Button variant="light" onClick={handleClick2} >See Groups</Button>
          </div>
          </center>
          <Row style={{ height: "20px" }}></Row>
      </Container>
      </div>

      <div >
      <Container className="color-nav" >
      {/* find a group / become a host section */} 
              <Row style={{ alignItems:'center'}}>

                <Col>
                  <Row style={{ height: "50px" }}></Row>
                  <center>
                    <div style={{padding:"10px"}}>
                      <h1>
                        Members               
                      </h1>
                    </div>
                  </center>
                    <center>
                    <container>
                      <h4>Total Members :</h4>
                    </container>
                      <container className="row" style={{background:"white", width:"20%", marginTop:"10px", marginBottom: "10px", padding:"10px"}}>
                        <CountMembers members={members} setMembers={setMembers} /> 
                      </container>

                      <h4>New members in the last 7 days :</h4>
                      <container className="row" style={{background:"white", width:"20%", marginTop:"10px", marginBottom: "10px", padding:"10px"}}>
                      <CountMemberWeek members={members} setMembers={setMembers} /> 
                      </container>

                      <h4>New members in the last 30 days :</h4>
                      <container className="row" style={{background:"white", width:"20%", marginTop:"10px", marginBottom: "10px", padding:"10px"}}>
                      <CountMemberMonth members={members} setMembers={setMembers} /> 
                      </container>
                    </center>

                      <center><p>
                        Here you can view the number of total members, number of new members in the last 7 days from the current date, and the number of new members within the past 30 days. To make changes to any of the information, please click the button below to visit the members admin dashboard. 
                      </p></center>
                  <center>
                  <div style={{margin:"20px"}}>
                    <Button variant="light" onClick={handleClick}>See Members</Button>
                  </div>
                  </center>
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