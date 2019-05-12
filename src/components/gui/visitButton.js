import React from 'react';
import { Link } from 'react-router-dom';
import style from './visitButton.module.css';

//returns a 'button' styled link depending on if the link is an internal link or external.
const VisitButton = (props) =>{
    const { url, intern, text } = props;
    if(intern) {
        return(
            <Link to={url} className={style.btnStyle}>
                <span>
                    {text}
                </span>
            </Link>
        );
    }
    else {
        return(
            <a href={url} className={style.btnStyle}>
                <span>
                    {text}
                </span>
            </a>
        );
    }  
}

export default VisitButton;
