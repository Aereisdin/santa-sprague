import React, { useContext } from 'react';
import UserContext from '../utils/UserContext';
import { Container, Row, Col } from 'react-bootstrap';




export default function Home() {

    const { user, logout } = useContext(UserContext);

    return (
        <>
        <Container fluid>
        <Row className="filler"></Row>    
        <Row className="text-center justify-content-center">
           <Col sm={8} md={8} lg={8} className="Greeting"><h1>Welcome {user.name}!</h1></Col>
        </Row>
        <Row className="filler"></Row>  
        <Row className="text-center justify-content-center">
           <Col sm={8} md={8} lg={8} className="greeting-message"><h3>
               So you have finally reached this special place that was crafted especially for you and those near and dear
               to your heart. This is the space that exists so special events can come to you no matter where you are in the
               world. 
               </h3></Col>
        </Row>
        <Row className="filler"></Row>  
        <Row className="text-center justify-content-center">
           <Col sm={8} md={8} lg={8} className="greeting-message"><h3>
               Check back frequently as this place will change and evolve to do more. Right now I encourage you to explore the
               links that are here and see what you think. Pretty soon we will be doing something AMAZING!
               </h3></Col>
        </Row>
        </Container>
        </>
    )
}

