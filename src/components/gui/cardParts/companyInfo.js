import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import CompanyDesc from './companyDesc.js';
import CompanyContact from './companyContact.js';

const CompanyInfo = (props) => {
    return(<Container>
        <Row>
            <Col>
                <CompanyDesc/>
            </Col>
            <Col>
                <CompanyContact/>
            </Col>
        </Row>
    </Container>);
}

export default CompanyInfo;