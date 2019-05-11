//react+react bootstrap stuff, should be pretty pure component
import React from 'react';
import { Link } from 'react-router-dom';

import DataHandler from './../data/dataHandler.js';

const FullCard = (props) => {
    const { match: { params } } = props;
    //const currentAd = DataHandler.getFullAd(params.id);
    return (
        <div>
            <p>Full card! {params.id}</p>
            <Link to='/'>Go back</Link>
        </div>
    )
}

export default FullCard;
