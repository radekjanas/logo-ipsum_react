import React from 'react';
import './MainContent.css';
import BasicInfo from './basic-info/BasicInfo';
import Slider from './slider/Slider';

function MainContent() {
    return(
        <>
            <main className="main-content">
                <BasicInfo />
                <Slider />
            </main>
        </>
    );
}

export default MainContent;