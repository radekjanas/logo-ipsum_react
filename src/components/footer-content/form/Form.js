import React from 'react';
import './Form.css';
import Input from './input/Input';
import Submit from './submit/Submit';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'name-and-surname': '',
            'name-and-surname_valid': false,
            'e-mail': '',
            'e-mail_valid': false,
            'phone': '',
            'phone_valid': false,
            'postal-code': '',
            'postal-code_valid': false,
            'city': '',
            'city_valid': false,
            'street': '',
            'street_valid': false,
            'house-number': '',
            'house-number_valid': false,
            'form_valid': false
        }
    
        this.errorMsgs = {
        	'name-and-surname': 'Pole musi zawierać przynajmniej 2 litery, bez znaków specjalnych',
            'e-mail': 'Podany adres e-mail nie jest prawidłowy',
            'phone': 'Format: +48 XXX XXX XXX',
            'postal-code': 'Format: XX-XXX',
            'city': 'Pole musi zawierać przynajmniej 2 litery, bez znaków specjalnych',
            'street': 'Pole musi zawierać przynajmniej 2 litery, bez znaków specjalnych',
            'house-number': 'Pole musi zawierać numer',
            'empty': 'Pole nie może być puste'
        }
    
        this.required = ['name-and-surname', 'e-mail', 'phone', 'postal-code', 'city', 'street', 'house-number'];
    
        //this.form_valid = [];
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
  
    handleSubmit(e) {
  	    e.preventDefault();
    
        for (let values in this.state) {
            //this.form_valid = []; 
            this.setState({
                'form_valid': true
            })
        
            if (typeof this.state[values] !== 'boolean') {
                let proper;
                switch (values) {
                    case 'city':
                    case 'street':
                    case 'name-and-surname':
                        proper = /^[a-zA-ZżźćńółęąśŻŹĆĄŚĘŁÓŃ]{2,120}$/;
                        break;

                    case 'e-mail':
                        proper = /[^@]+@[^@]+/;
                        break;

                    case 'phone':
                        proper = /^\+48 ([0-9]{3}) ([0-9]{3}) ([0-9]{3})$/;
                        break;

                    case 'postal-code':
                        proper = /[0-9]{2}\-[0-9]{3}/;
                        break;

                    case 'house-number':
                        proper = /[0-9]{4}/;
                        break;
                    default:
                        break;
                }

                document.querySelector(`[name=${values}]`).nextElementSibling.textContent = '';

                if (this.required.includes(values)) {
                    if (this.state[values] === '') {
                        this.setState({
                          [`${e.target.name}_valid`]: false,
            'form_valid': true
                        });
                    
                        //this.form_valid.push('false');
                        document.querySelector(`[name=${values}]`).nextElementSibling.textContent = this.errorMsgs.empty;
                    } else if (!proper.test(this.state[values])) {
                        this.setState({
                            [`${e.target.name}_valid`]: false,
            'form_valid': true
                        });

                        //this.form_valid.push('false');
                        document.querySelector(`[name=${values}]`).nextElementSibling.textContent = this.errorMsgs[values];
                    } else {
                        this.setState({
                          [`${e.target.name}_valid`]: true
                        });        
                    }
                }
            }
        }
        //console.log(this.form_valid);
        //if (this.form_valid.includes(false)) {
        if (this.state['form_valid'] === false) {
            console.log('Formularz ma błędy');
        } else {
        	console.log('Wszystko OK');
        }
    }
  
    render() {
        return (
            <>
                <form className="contact-form">
                    <Input onChange={this.handleChange} type="text" name="name-and-surname" placeholder="* Imię i nazwisko" className="input-container input-container--name" />
                    <Input onChange={this.handleChange} type="email" name="e-mail" placeholder="* E-mail" className="input-container input-container--email" />
                    <Input onChange={this.handleChange} type="phone" name="phone" placeholder="* Nr telefonu" className="input-container input-container--phone" />
                    <Input onChange={this.handleChange} type="text" name="postal-code" placeholder="* Kod pocztowy" className="input-container input-container--postal-code" />
                    <Input onChange={this.handleChange} type="text" name="city" placeholder="* Miejscowość" className="input-container input-container--city" />
                    <Input onChange={this.handleChange} type="text" name="street" placeholder="* Ulica" className="input-container input-container--street" />
                    <Input onChange={this.handleChange} type="text" name="house-number" placeholder="* Nr domu" className="input-container input-container--house-number" />
                    <Input onChange={this.handleChange} type="text" name="flat-number" placeholder="Nr lokalu" className="input-container input-container--flat-number" />
                    <p className="form__required-text">* pola wymagane</p>
                    <p className="form__info">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <label className="checkbox-block"><input type="checkbox" className="checkbox-block__input" /><span className="checkbox-block__checkmark"></span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit.
                    </label>
                    <label className="checkbox-block"><input type="checkbox" className="checkbox-block__input" /><span className="checkbox-block__checkmark"></span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim venia
                    </label>
                    <label className="checkbox-block"><input type="checkbox" className="checkbox-block__input" /><span className="checkbox-block__checkmark"></span>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </label>
                    <label className="checkbox-block"><input type="checkbox" className="checkbox-block__input checkbox-block__input--check-all" /><span className="checkbox-block__checkmark"></span>
                        Zaznacz wszystko
                    </label>
                    <div className="submit-container">
                        <Submit onClick={this.handleSubmit} type="submit" value="Wyślij formularz" className="submit-container__button" />
                    </div>
                </form>
            </>
        );
    }
}

export default Form;