import React from 'react';
import './FooterContent.css';
import Form from './form/Form';

function FooterContent() {
    return(
        <>
            <footer className="footer-content">
                <div className="container form">
                    <h2 className="form__title">Wypełnij formularz</h2>
                    <Form />
                </div>
            </footer>
        </>
    );
}

export default FooterContent;