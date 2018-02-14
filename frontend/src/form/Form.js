import React, { Component } from 'react';
import './Form.css';
import FormRegexValidation from '../util/FormRegexValidation';
import axios from 'axios';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      email: '',
      date: '',
      errors: {
        nameError: '',
        surnameError: '',
        emailError: '',
        dateError: '',
      }
    }
    this.formRegexValidation = new FormRegexValidation();
  }

  send = (e) => {
    e.preventDefault();
    let isValid = this.checkErrors();
    if(isValid) 
      this.saveDataToDatabase();
    this.showResult(isValid);
  }

  saveDataToDatabase = () => {
    axios.post('http://localhost:3001/api/signup', {
      name: this.state.name,
      surname: this.state.surname,
      email: this.state.email,
      date: this.state.date
    })
    .then((response) => console.log(response))
    .catch((error) => console.log(error))

    this.clearForm();
  }

  showResult = (isValid) => {
    isValid ? alert("Form submitted successfully") : alert("Form submit failed");
  }

  validateName = (name) => {
    const inputName = name;

    if(inputName.length < 2) {
      this.setState({nameError: 'Name should has at least 2 characters.'});
      return false;
    }

    if(!this.formRegexValidation.nameRegexValidation(inputName)) {
      this.setState({nameError: 'Name is not valid.'});
      return false;
    }
    
    this.setState({nameError: ''});
    return true;
  }

  validateSurname = (surname) => {
    const inputSurname = surname;
    
    if(!this.formRegexValidation.surnameRegexValidation(inputSurname)) {
      this.setState({surnameError: 'Surname is not valid.'});
      return false;
    }
    this.setState({surnameError: ''});
    return true;
  }

  validateEmail = (email) => {
    const inputEmail = email;
    
    if(!this.formRegexValidation.emailRegexValidation(inputEmail)) {
      this.setState({emailError: 'Email is not valid.'});
      return false;
    }
    this.setState({emailError: ''});
    return true;
  }

  validateDate = (date) => {
    const inputDate = date;
    
    if(!this.formRegexValidation.dateRegexValidation(inputDate)) {
      this.setState({dateError: 'Date is not valid.'});
      return false;
    }
    this.setState({dateError: ''});
    return true;
  }

  checkErrors = () => {
    if(this.validateName(this.state.name) && this.validateSurname(this.state.surname) && this.validateEmail(this.state.email) && this.validateDate(this.state.date)) {
      return true;
    } else {
      return false;
    }
  }

  clearForm = () => {
    this.setState({ name: '', surname: '', email: '', date: '', nameError: '', surnameError: '', emailError: '', dateError: ''})
  }

  render() {
    return (
      <div className="container">
        <form className="Form">
            <div className="form-group">
              <label htmlFor="name">First name</label>
              <input 
                type="text" 
                className="form-control" 
                id="name"
                required  
                value={this.state.name}
                onChange={e => this.setState({ name: e.target.value })}
              />
              <span className="Form__error">{this.state.nameError}</span>
            </div>
            <div className="form-group">
              <label htmlFor="surname">Last name</label>
              <input 
                type="text" 
                className="form-control" 
                id="surname" 
                required 
                value={this.state.surname}
                onChange={e => this.setState({ surname: e.target.value })}
              />
              <span className="Form__error">{this.state.surnameError}</span>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input 
                type="text" 
                className="form-control" 
                id="email" 
                required 
                value={this.state.email}
                onChange={e => this.setState({ email: e.target.value })}
              />
              <span className="Form__error">{this.state.emailError}</span>
            </div>
            <div className="form-group">
              <label htmlFor="date">Event date</label>
              <input 
                type="datetime-local" 
                className="form-control" 
                id="date" 
                required 
                value={this.state.date}
                onChange={e => this.setState({ date: e.target.value })}
              />
              <span className="Form__error">{this.state.dateError}</span>
            </div>
            <div>
              <button onClick={this.send} className="btn btn-primary">Send</button>
            </div>
        </form>
      </div>
    );
  }
}

export default Form;
