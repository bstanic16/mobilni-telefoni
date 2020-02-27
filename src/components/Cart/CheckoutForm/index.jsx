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

    clickedHandler = () => {
        this.setState({ clicked: !this.state.clicked })
    }

    handleSubmit = (e) => {
        e.preventDefault()
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
                        result += str.description + ' - (' + str.count + 'kom),'
                    })
                    console.log("RESULT", result)
                    if (product.length > 0) {
                        product.length = 0
                    }
                    return (
                        <Main>
                            <Form action="contact-form" className="row justify-content-center" ref="form">
                                <div className="col-9 py-2">
                                    <Input cart type="text" placeholder="firstname" id="name" onChange={this.onNameChange} name="name" />
                                    <Input type="text" placeholder="lastname" id="lastname" onChange={this.onLastnameChange} name="lastname" />
                                </div>
                                <div className="col-9 py-2">
                                    <Input type="text" placeholder="Proizvodi" id="result" ref="result" value={"Proizvodi: " + result} />
                                    <Input type="text" placeholder="cena" value={"Cena: " + this.props.cartTotal + " RSD"} />
                                </div>
                                <div className="col-9 py-2">
                                    <Input type="text" placeholder="email" id="email" onChange={this.onEmailChange} name="email" />
                                </div>
                                <div className="col-9 py-2">
                                    <Input type="text" placeholder="adresa" id="adress" onChange={this.onAdressChange} name="adress" />
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