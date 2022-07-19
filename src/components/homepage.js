import React from 'react'
import './App.css'
import {Container, Row,Col,Card} from "react-bootstrap";

function Homepage() {
  return (
    <>
      <Container fluid="md" id="nav">
      <Row>
    <Col xl={8} id="logo">
          <img src="https://kalaagan.com/wp-content/uploads/2021/08/logo-1.png" alt="logo"></img>
        </Col>
    <Col xl={4}><a href='#home'>home</a>
          <a href='#dance'>dance</a>
          <a href='#singing'>singing</a>
          <a href='#cources'>cources</a>
          <a href='#about'>about us</a>
          </Col>
          </Row>
        </Container>
        <Container fluid="md" id="frame2">
        <Row>
    <Col lg={6} style={{paddingLeft:"2em"}}><h1>Your Own Personal Teacher Live, Online Classes</h1>
    <p>Explore. Learn. Play. Create. Repeat.</p></Col>
    <Col lg={4}  id="frame1" >
      <figure>
        <img id="dancer" src="https://kalaagan.com/wp-content/uploads/2021/08/Kathak_Group_Performance__44_-removebg-preview.png" alt="dancemodels"></img>
      </figure>
    </Col>
  </Row>

        </Container>

        <Container fluid="md" id="frame3">
  <Row>
    <Col><Card style={{ width: '18rem',marginLeft:"3em" }}>
  <Card.Img variant="top" src="https://kalaagan.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-01-at-11.05.41-PM-1.jpeg" />
  <Card.Body style={{backgroundColor:"#EF5bB1"}}>
    <span><center><a href='#nowhere'>Read More</a></center></span>
  </Card.Body>
</Card>
</Col>
    <Col><Card style={{ width: '18rem',marginLeft:"3em" }}>
  <Card.Img variant="top" src="https://kalaagan.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-01-at-11.05.41-PM.jpeg" />
  <Card.Body style={{backgroundColor:"#EF5bB1"}}>
    <span><center><a href='#nowhere'>Read More</a></center></span>
  </Card.Body>
</Card></Col>
    <Col><Card style={{ width: '18rem',marginLeft:"3em" }}>
  <Card.Img variant="top" src="https://kalaagan.com/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-01-at-11.05.40-PM.jpeg" />
  <Card.Body style={{backgroundColor:"#EF5bB1"}}>
    <span><center><a href='#nowhere'>Read More</a></center></span>
  </Card.Body>
</Card></Col>
  </Row>
</Container>
    </>
  )
}

export default Homepage;
