//react+react bootstrap stuff, should be pretty pure component
import React from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Image from 'react-bootstrap/Image'

const ShortCard = (props) => (
    <Container>
        <Row>
            <Col xs={8}>
                <div key={props.adinfo.id}>
                    <p>{props.adinfo.jobTitle}</p>
                </div>
            </Col>
        </Row>
    </Container>
)

export default ShortCard;