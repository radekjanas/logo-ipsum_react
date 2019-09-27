import React from 'react';
import './Submit.css';

function Submit(props) {
    return (
        <input onClick={props.onClick} onChange={props.onChange} type={props.type} name={props.name} value={props.value} placeholder={props.placeholder} className={props.className} />
  );
}

export default Submit;