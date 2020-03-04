import React, { Component } from 'react';
import Title from '../Title';
import styled from 'styled-components';
import { Input, Text } from '../Input';
import { ButtonContainer } from '../Button';
import emailjs from 'emailjs-com';


export default class Contact extends Component {
    state = {
        name: '',
        lastname: '',
        email: '',
        message: '',
    }

    onNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    onLastnameChange = (event) => {
        this.setState({
            lastname: event.target.value
        })
    }

    onEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    onMessageChange = (event) => {
        this.setState({
            message: event.target.value
        })
    }

    resetForm = () => {
        this.setState({
            name: '',
            lastname: '',
            email: '',
            message: ''
        })
        this.refs.form.reset()
    }
    printError = (elemId, hintMsg) => {
        document.getElementById(elemId).innerHTML = hintMsg;
    }

    handleSubmit = (e) => {
        e.preventDefault()
        var nameErr
        var lastnameErr
        var emailErr
        var messageErr
        console.log("TESITRANJE: ", this.state)
        if (this.state.name.length < 3) {
            this.printError("nameErr", "Unesite vase ime")
            nameErr = true
        } else if (this.state.name.length >= 3) {
            nameErr = false
            this.printError("nameErr", "")
        } else {
            nameErr = false
        }

        if (this.state.lastname.length < 3) {
            this.printError("lastnameErr", "Unesite vase prezime")
            lastnameErr = true
        } else if (this.state.lastname.length >= 3) {
            nameErr = false
            this.printError("lastnameErr", "")
        } else {
            lastnameErr = false
        }

        let mail = this.state.email
        let atPos = mail.indexOf("@");
        let dotPos = mail.lastIndexOf(".");
        if (atPos < 1 || dotPos < atPos + 2 || dotPos + 2 >= mail.length) {
            this.printError("emailErr", "Unesite vasu pravu e-mail adresu")
            emailErr = true
        } else if (mail) {
            emailErr = false
            this.printError("emailErr", "")
        } else {
            emailErr = false
        }

        if (this.state.message.length < 5) {
            this.printError("messageErr", "Vasa poruka mora sadrzati minimum 50 karaktera")
            messageErr = true
        } else if (this.state.message.length >= 5) {
            messageErr = false
            this.printError("messageErr", "")
        } else {
            messageErr = false
        }

        if ((nameErr || lastnameErr || emailErr || messageErr) === true) {
            return false
        } else {
            var template_params = {
                email: this.state.email,
                name: this.state.name,
                lastname: this.state.lastname,
                message: this.state.message
            }
            var service_id = "gmail";
            var template_id = "contact_us";
            let user_id = 'user_dz7QTL5TBraMGcZXsErjz'
            emailjs.send(service_id, template_id, template_params, user_id)
                .then((response) => {
                    console.log("SUCCESS!", response.status, response.text)
                    if (response.status === 200) {
                        alert("MessageSent")
                        this.resetForm()
                    }
                }, err => {
                    console.log("Failed: ", err);
                })
        }

    }
    render() {
        console.log(this.state);
        return (
            <ProductWrapper className="py-5">
                <div className="container">
                    <Title name="Contact" title="us" />
                    <div className="row justify-content-center">
                        <Form action="contact-form" className="row justify-content-center" ref="form">
                            <div className="col-9 py-2">
                                <Input type="text" placeholder="Ime" id="name" onChange={this.onNameChange} name="name" required minLength="3" maxLength="20" />
                                <Error id="nameErr"></Error>
                                <Input type="text" placeholder="Prezime" id="lastname" onChange={this.onLastnameChange} name="lastname" required minLength="3" maxLength="20" />
                                <Error id="lastnameErr"></Error>
                            </div>
                            <div className="col-9 py-2">
                                <Input type="text" placeholder="E-mail" id="email" onChange={this.onEmailChange} name="email" required minLength="10" maxLength="50" />
                                <Error id="emailErr"></Error>
                            </div>
                            <div className="col-9 py-2">
                                <Text placeholder="Vasa poruka" id="message" onChange={this.onMessageChange} name="message" required minLength="5" maxLenght="500" ></Text>
                                <Error id="messageErr"></Error>
                            </div>
                            <div className="col-9 py-2 justify-content-center align-items-center">
                                <ButtonContainer onClick={this.handleSubmit}>SUBMIT</ButtonContainer>
                            </div>
                        </Form>
                    </div>
                </div>
            </ProductWrapper>
        )
    }
}

const Error = styled.div`
    color:green;
    text-align:center;
    font-family: "Permanent Marker", cursive;
`

const ProductWrapper = styled.section`
    width:100%;
    overflow:hidden;
    @media(max-width: 768px) {
        width: 100%;
        margin:auto;
    }

    @media(max-width: 568px) {
        width: 100%;
    }

    @media(max-width: 320px) {
        width: 100%;
    }
`

const Form = styled.form`
    width: 90%;
    margin: auto;
    @media(max-width: 768px) {
        width: 100%;
        margin:auto;
    }
`