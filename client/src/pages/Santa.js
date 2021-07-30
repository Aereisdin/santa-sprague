import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Users() {
    return (
        <>
        <Container className="user" fluid>
            <Row className="filler"></Row>
            <Row>
            <Col xs={12} sm={12} md={12} lg={12} className="text-center">
                <h1 className="comingSoon">Selection Coming Soon!</h1>
            </Col>
                <Col xs={12} sm={12} md={12} lg={12} className="text-center">
                    <img src="./photos/sprague.svg" className="rotate linear infinite" width="300" height="300" />
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default Users
