import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
function Landing() {
    return (
        <>
        <Container  className="spark" fluid>
        <Row className="filler"></Row>  
        <Row className="justify-content-center">
        <Col sm={8} md={8} lg={10} className="hero-text text-center justify-content-center">
            <p>A Special Place...<br/> just for you!</p>
        </Col>
        </Row>
        </Container>
        </>
    )
}

export default Landing
