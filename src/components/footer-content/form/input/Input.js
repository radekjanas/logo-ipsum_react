import React from 'react';
import './Input.css';

function Input(props) {
    return (
        <div className={props.className}>
            <input onClick={props.onClick} onChange={props.onChange} type={props.type} name={props.name} value={props.value} placeholder={props.placeholder} className="input-container__input" />
            <span className="input-container__error-box"></span>
        </div>  
  );
}

export default Input;