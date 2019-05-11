import React from 'react';
import style from './visitButton.module.css';

const VisitButton = (props) =>(
    <button className={style.button} onClick={() => {props.goTo(props.id);}}>
        {props.text || 'test'}
    </button> 
)

export default VisitButton;