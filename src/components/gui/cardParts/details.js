import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BorderBottom from './borderBottom.js';
import style from './details.module.css';


const Details = (props) => {
    const { workDetails } = props;
    return (
        <Container className={style.container}>
            <Row>
                <Col xs={4}>
                    <div className={style.generalInfo}>
                        <h4 className={style.subtitle}>About</h4>
                        <p><strong>Title:</strong><br/>{workDetails.workTitle}</p>
                        <p><strong>Category:</strong><br/>{workDetails.workCategory}</p>
                        {workDetails.department && <p><strong>Department:</strong><br/>{workDetails.department}</p>}
                        <p><strong>Type of employment:</strong><br/>{workDetails.employmentType}</p>
                        <p><strong>Experiernece level:<br/></strong> {workDetails.exp}</p>
                        <p><strong>Location:</strong><br/>{workDetails.location.text}</p>
                        <p><strong>From:</strong><br/>{workDetails.startDate}</p>
                    </div>
                </Col>
                <Col xs={8}>
                    <div className={style.workInfo}>
                        <h4 className={style.subtitle}>Description</h4>
                        <div dangerouslySetInnerHTML={workDetails.workDesc}/>
                        <h4 className={style.subtitle}>Skills</h4>
                        <div dangerouslySetInnerHTML={workDetails.skills}/>
                    </div>
                </Col>
                <BorderBottom/>
            </Row>
        </Container>
    )
}

export default Details;