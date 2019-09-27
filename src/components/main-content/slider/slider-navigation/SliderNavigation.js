import React from 'react';
import './SliderNavigation.css';

function SliderNavigation(props) {
    return(
        <div className="slider__navigation">
            <button className="slider__navigation-button" onClick={props.onClick}></button>
            <button className="slider__navigation-button slider__navigation-button--right" onClick={props.onClick}></button>
        </div>
    );
}

export default SliderNavigation;