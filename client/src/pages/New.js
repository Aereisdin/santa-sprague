import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function New() {
    return (
        <>
        <Container  className="spark" fluid>
            <Row className="justify-content-center">
                <Col className="Welcome" sm={10} md={8} lg={8}>
                    <h1>Welcome!</h1>
                    <p>If you are here then you must be a Sprague, or at least a close relative.
                        A friend maybe? 
                    </p>
                    <p>So if you're a Sprague, are you the right Sprague?<br/> Maybe you're a Miller?<br/>
                        It's okay we don't judge. Well kind of... <br/>
                    </p>
                        
                    <p>This page is specifically for the
                        family of Bryan and Stephanie Sprague of Cromberg.<br/> Of Sparks.<br/> 
                        Of Barstow.<br/> Of Wittier.
                    </p>
                    <p>Do you think you fit the bill? Are you a Sprague? Or a Miller? Do you have a
                        connection to Bryan and Stephanie?
                    </p>
                    <p>If that's the case... You are who this place was made for!</p>
                    <p>You should have a special code all your own that grants you special
                        access to this place. If not, you need to get ahold of Kiel. 
                    </p>
                    <p>Sincerely & Yours Truly,<br/>Kiel Sprague</p>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default New
