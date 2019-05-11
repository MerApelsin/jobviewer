import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import style from './details.module.css';

const Details = (props) => {
    const { workDetails } = props;
    return (
        <Container className={style.container}>
            <Row>
                <Col xs={4}>
                    <div className={style.generalInfo}>
                        <p>worktitle</p>
                        <p>workcategory</p>
                        <p>department</p>
                        <p>employmenttype</p>
                        <p>exp</p>
                        <p>location</p>
                        <p>startdate</p>
                    </div>
                </Col>
                <Col xs={8}>
                    <div>
                        <h4>Description</h4>
                        <div dangerouslySetInnerHTML={workDetails.workDesc}/>
                        <h4>Skills</h4>
                        <div dangerouslySetInnerHTML={workDetails.skills}/>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Details;