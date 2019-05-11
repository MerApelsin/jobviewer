//react+react bootstrap stuff, should be pretty pure component
import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import DataHandler from './../data/dataHandler.js';
import style from './shortCard.module.css';

const FullCard = (props) => {
    const { match: { params } } = props;
    //const currentAd = DataHandler.getFullAd(params.id);
    return (
        <div>
            <p>Full card! {params.id}</p>
        </div>
    )
}

export default FullCard;
