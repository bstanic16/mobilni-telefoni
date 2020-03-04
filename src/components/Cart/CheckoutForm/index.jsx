import React, { Component } from 'react';
import { Input, Text } from '../../Input';
import { ButtonContainer } from '../../Button';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

export default class CheckoutForm extends Component {
    state = {
        name: '',
        lastname: '',
        email: '',
        message: '',
        grad: '',
        adress: '',
        clicked: this.props.clicked,
        cartTotal: this.props.cartTotal,
        result: ''
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

    onAdressChange = (event) => {
        this.setState({ adress: event.target.value })
    }
    onGradChange = (event) => {
        this.setState({ grad: event.target.value })
    }

    clickedHandler = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    printError = (elemId, hintMsg) => {
        document.getElementById(elemId).innerHTML = hintMsg;
    }

    handleSubmit = (e) => {
        e.preventDefault()
        var nameErr
        var lastnameErr
        var emailErr
        var gradErr
        var adressErr

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

        if (this.state.grad.length < 3) {
            this.printError("gradErr", "Unesite naziv grada")
            gradErr = true
        } else if (this.state.grad.length >= 3) {
            gradErr = false
            this.printError("gradErr", "")
        } else {
            gradErr = false
        }

        if (this.state.adress.length < 5) {
            this.printError("adressErr", "Unesite adresu")
            adressErr = true
        } else if (this.state.adress.length >= 5) {
            adressErr = false
            this.printError("adressErr", "")
        } else {
            adressErr = false
        }

        if ((nameErr || lastnameErr || emailErr || gradErr || adressErr) === true) {
            return false
        } else {
            var template_params = {
                email: this.state.email,
                name: this.state.name,
                lastname: this.state.lastname,
                message: this.state.message,
                adress: this.state.adress,
                result: this.refs.form.result.value
            }
            console.log("TEMPLEJT:", template_params)
            var service_id = "gmail";
            var template_id = "template_gU3gu6s0";
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
        const product = this.props.value.cart.map(item => {

            return {
                id: item.id,
                price: item.price,
                description: item.title,
                name: item.title,
                count: item.count
            }
        })
        console.log('PRODUCT:', product);
        console.log("state:", this.state);
        return (

            <div>
                {product.map(item => {

                    var result = '';
                    product.forEach(function (str) {
                        result += str.description + ' - (' + str.count + 'kom) '
                    })
                    console.log("RESULT", result)
                    if (product.length > 0) {
                        product.length = 0
                    }
                    return (
                        <Main>
                            <Form action="contact-form" className="row justify-content-center" ref="form">
                                <div className="col-9 py-2">
                                    <Input cart type="text" placeholder="firstname" id="name" onChange={this.onNameChange} name="name" required minLength="3" maxLength="20" />
                                    <Error id="nameErr"></Error>
                                    <Input type="text" placeholder="lastname" id="lastname" onChange={this.onLastnameChange} name="lastname" required minLength="3" maxLength="20" />
                                    <Error id="lastnameErr"></Error>
                                </div>
                                <div className="col-9 py-2">
                                    <Input type="text" placeholder="Proizvodi" id="result" ref="result" value={"Proizvodi: " + result} />
                                    <Input type="text" placeholder="cena" value={"Cena: " + this.props.cartTotal + " RSD"} />
                                </div>
                                <div className="col-9 py-2">
                                    <Input type="text" placeholder="email" id="email" onChange={this.onEmailChange} name="email" required minLength="10" maxLength="50" />
                                    <Error id="emailErr"></Error>
                                </div>
                                <div className="col-9 py-2">
                                    <Input type="text" placeholder="grad" id="grad" onChange={this.onGradChange} name="grad" required minLength="3" maxLength="20" />
                                    <Error id="gradErr"></Error>
                                </div>
                                <div className="col-9 py-2">
                                    <Input type="text" placeholder="adresa" id="adress" onChange={this.onAdressChange} name="adress" required minLength="5" maxLength="30" />
                                    <Error id="adressErr"></Error>
                                </div>
                                <div className="col-9 py-2">
                                    <Text placeholder="message" id="message" onChange={this.onMessageChange} name="message"></Text>
                                </div>
                                <div className="col-9 py-2 justify-content-center align-items-center">
                                    <ButtonContainer onClick={this.handleSubmit}>SUBMIT</ButtonContainer>
                                </div>
                            </Form>
                        </Main>

                    )
                })}

            </div>
        )
    }
}

const Error = styled.div`
    color:green;
    text-align:center;
    font-family: "Permanent Marker", cursive;
`

const Main = styled.section`
    width: 100%;

`
const Form = styled.form`
    width: 100%;
    margin: auto;
    @media(max-width: 768px) {
        width: 100%;
        margin:auto;
    }
`