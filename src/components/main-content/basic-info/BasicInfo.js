import React from 'react';
import './BasicInfo.css';

function BasicInfo() {
    return(
        <>
            <div className="container basic-info">
                <div className="basic-info__image"></div>
                <div className="basic-info__text-block">
                    <h2 className="basic-info__title">Lorem Ipsum</h2>
                    <p className="basic-info__paragraph">Excepteur sint occaecat cupidatat non<br />proident, sunt in culpa qui officia deserunt mollit anim<br />id est laborum</p>
                </div>
            </div>
        </>
    );
}

export default BasicInfo;