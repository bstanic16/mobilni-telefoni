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
        this.setState({ name: event.target.value })
    }

    onLastnameChange = (event) => {
        this.setState({ lastname: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onMessageChange = (event) => {
        this.setState({ message: event.target.value })
    }

    resetForm = () => {
        this.setState({ name: '', lastname: '', email: '', message: '' })
        this.refs.form.reset()
    }
    handleSubmit = (e) => {
        e.preventDefault()
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
    render() {
        console.log(this.state);

        return (
            <ProductWrapper className="py-5">
                <div className="container">
                    <Title name="contact" title="us" />
                    <div className="row justify-content-center">
                        <Form action="contact-form" className="row justify-content-center" ref="form">
                            <div className="col-9 py-2">
                                <Input type="text" placeholder="firstname" id="name" onChange={this.onNameChange} name="name" />
                                <Input type="text" placeholder="lastname" id="lastname" onChange={this.onLastnameChange} name="lastname" />
                            </div>
                            <div className="col-9 py-2">
                                <Input type="text" placeholder="email" id="email" onChange={this.onEmailChange} name="email" />
                            </div>
                            <div className="col-9 py-2">
                                <Text placeholder="message" id="message" onChange={this.onMessageChange} name="message"></Text>
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

const ProductWrapper = styled.section`
    width:100%;
    @media(max-width: 768px) {
        width: 100%;
        margin:auto;
    }

    @media(max-width: 568px) {
        width: 100%;
        background: blue;
    }

    @media(max-width: 320px) {
        width: 100%;
        background: green;

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