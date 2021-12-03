import React from 'react';
import Explorers from './Explorers.PNG';
import {Container, Row} from 'react-bootstrap'
import ExplorerHome from './src/ExplorerHome.png';

console.log(Explorers);
console.log(ExplorerHome);

function Thankyoutwo() {
    return(
      <div>
        
        <Container>
            <Row style={{ height: "100px" }}></Row>
            <center><h1> Thank you for contacting Teeny Tiny Explorers to become a host</h1> </center>
            <Row style={{ height: "30px" }}></Row>
                <p>
                Thank you for reaching out to us! Please allow us 2-3 business days to respond to your initial email. At Teeny Tiny Explorers we do our best to answer every email as soon as possilbe. However, we do not operate during the weekend. If you send a submission after 3:00pm EST on a Friday, please allow 2-3 days starting on the following Monday. </p>
          </Container>
           <Row style={{ height: "100px" }}></Row>

    </div>
  );
}
export default Thankyoutwo;