import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import style from './companyHeader.module.css';
import logoPlaceholder from './../../images/logoPlaceholder.png';
import coverPlaceholder from './../../images/coverPlaceholder.jpg';


const CompanyHeader = (props) => {
    const { headerDetails, title} = props;
    let backgroundStyle = {};
    if(headerDetails.coverImg === ''){
        backgroundStyle = {backgroundImage: `url(${coverPlaceholder})`}
    }
    else {
        backgroundStyle = {backgroundImage: `url(${headerDetails.coverImg})`}
    }
    //const {} = props.adinfo;
    return (
        <Container className={style.container} style={backgroundStyle}>
            <Row style={{height: '100%'}}>
                <Col xs={3}>
                    <div className={style.logoBlock}>
                        <Image className={style.logo} src={headerDetails.logo || logoPlaceholder}/>
                        <p className={style.name}>{headerDetails.name}</p>
                    </div>
                </Col>
                <Col xs={9}>
                    <div className={style.title}>
                        <p className={style.titleText}>{title}</p>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default CompanyHeader;